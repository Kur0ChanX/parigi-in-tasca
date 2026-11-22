/* Prova della web app di dicembre e della guida di novembre sullo stesso sito, anche senza rete.
   Uso: node tools/prova-web-app.js   (esce con 1 se una riga è FALSO)
   Accende da sola un sito di prova su localhost con il percorso /parigi-in-tasca/, come GitHub Pages. */
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const fs = require('fs'); const os = require('os'); const path = require('path');
const DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'sito-'));
fs.symlinkSync(path.resolve(__dirname, '..'), path.join(DIR, 'parigi-in-tasca'));
const PORTA = 8800 + Math.floor(Math.random() * 100);
const server = spawn('python3', ['-m', 'http.server', String(PORTA), '--bind', '127.0.0.1'], { cwd: DIR, stdio: 'ignore' });
const B = `http://localhost:${PORTA}/parigi-in-tasca/`;
let falsi = 0;
const ok = (n, v) => { if (!v) falsi++; console.log((v ? 'VERO  ' : 'FALSO ') + n); };
const sw = (p) => p.waitForFunction(() => navigator.serviceWorker.controller, null, { timeout: 10000 }).catch(() => {});
(async () => {
  await new Promise((r) => setTimeout(r, 800));
  const b = await chromium.launch({ executablePath: fs.existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined });
  // Mario: ha già la guida di novembre, poi apre dicembre
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 } }); const p = await ctx.newPage();
  const errs = []; p.on('pageerror', (e) => { errs.push(e.message); console.log('ERRORE NELLA PAGINA: ' + e.message); });
  await p.goto(B); await sw(p); await p.reload(); await p.waitForTimeout(800);
  const nov = await p.title();
  await p.goto(B + 'dicembre/'); await sw(p);
  // la pagina può essere già comandata da quello di novembre (scope /): si aspetta che quello di dicembre sia attivo, poi si ricarica
  await p.waitForFunction(async () => { const r = await navigator.serviceWorker.getRegistration('./'); return !!(r && r.active && r.active.state === 'activated' && r.active.scriptURL.endsWith('/dicembre/sw.js')); }, null, { timeout: 10000, polling: 200 }).catch(() => {});
  await p.reload(); await p.waitForTimeout(1200);
  ok('dicembre: titolo giusto', (await p.title()) === 'Parigi e Disney a Natale');
  await p.waitForFunction(() => navigator.serviceWorker.controller && navigator.serviceWorker.controller.scriptURL.endsWith('/dicembre/sw.js'), null, { timeout: 8000 }).catch(() => {}); // primo avvio lento (E del 21/11)
  { const c = await p.evaluate(() => (navigator.serviceWorker.controller || {}).scriptURL || 'nessuno'); ok('dicembre: service worker suo', c.endsWith('/dicembre/sw.js')); if (!c.endsWith('/dicembre/sw.js')) console.log('  comanda:', c, '· pagina:', p.url()); }
  const cassetti = await p.evaluate(async () => {
    const o = {};
    for (const k of await caches.keys()) {
      const c = await caches.open(k);
      const url = location.origin + (k.includes('natale') ? '/parigi-in-tasca/dicembre/' : '/parigi-in-tasca/');
      const r = await c.match(url);
      o[k] = r ? ((await r.text()).match(/<title>([^<]*)/) || [, '?'])[1] : null;
    }
    return o;
  });
  console.log('   cassetti:', JSON.stringify(cassetti), '· novembre:', nov);
  ok('cassetto di novembre ha ancora novembre', cassetti['parigi-in-tasca-v1'] === nov);
  await ctx.setOffline(true);
  await p.goto(B); ok('senza rete: novembre apre novembre', (await p.title()) === nov);
  await p.goto(B + 'dicembre/'); ok('senza rete: dicembre apre dicembre', (await p.title()) === 'Parigi e Disney a Natale');
  ok('senza rete: 9 barre dei costi', (await p.$$('#bars a.bar-row')).length === 9); // 9 dal 21/11 sera: barra Locomo + Airbnb n. 16
  await ctx.close();
  // L'amico: apre solo dicembre
  const c2 = await b.newContext({ viewport: { width: 390, height: 844 } }); const q = await c2.newPage();
  q.on('pageerror', (e) => { errs.push(e.message); console.log('ERRORE NELLA PAGINA: ' + e.message); });
  await q.goto(B + 'dicembre/'); await sw(q);
  ok('amico: manifest letto', await q.evaluate(async () => (await (await fetch('manifest.webmanifest')).json()).name === 'Parigi e Disney a Natale'));
  ok('amico: noindex', await q.evaluate(() => document.querySelector('meta[name=robots]').content.includes('noindex')));
  // Icone e anteprima del link (WhatsApp vuole og:title, og:description, og:url non vuoti e og:image assoluta sotto 600 KB)
  const icone = await q.evaluate(async () => {
    const misura = (src) => new Promise((ok) => { const i = new Image(); i.onload = () => ok(i.naturalWidth + 'x' + i.naturalHeight); i.onerror = () => ok('rotta'); i.src = src; });
    const m = await (await fetch('manifest.webmanifest')).json();
    const out = {};
    for (const ic of m.icons) out[ic.src + ' ' + ic.purpose] = (await misura(ic.src)) === ic.sizes;
    out['apple-touch-icon 180'] = (await misura(document.querySelector('link[rel=apple-touch-icon]').href)) === '180x180';
    out['maskable c\'è'] = m.icons.some((ic) => ic.purpose === 'maskable');
    return out;
  });
  ok('amico: icone giuste (' + Object.keys(icone).length + ')', Object.values(icone).every(Boolean)); if (!Object.values(icone).every(Boolean)) console.log(icone);
  // Icone cambiate → ?v= alzato in tutti e due i posti (pagina e manifest), sennò il telefono tiene l'icona vecchia
  const versioni = await q.evaluate(async () => {
    const v = (src) => (String(src).match(/\?v=(\d+)/) || [])[1] || 'manca';
    const m = await (await fetch('manifest.webmanifest')).json();
    return [...[...document.querySelectorAll('link[rel=icon],link[rel=apple-touch-icon]')].map((l) => v(l.getAttribute('href'))), ...m.icons.map((ic) => v(ic.src))];
  });
  ok('icone: stesso ?v= nella pagina e nel manifest (' + versioni[0] + ')', versioni.length === 5 && versioni[0] !== 'manca' && new Set(versioni).size === 1); if (new Set(versioni).size !== 1) console.log(versioni);
  const og = await q.evaluate(() => Object.fromEntries([...document.querySelectorAll('meta[property^="og:"],meta[name="twitter:card"]')].map((m) => [m.getAttribute('property') || m.name, m.content])));
  ok('anteprima: titolo, descrizione e indirizzo pieni', !!(og['og:title'] && og['og:description'] && og['og:url'] === 'https://kur0chanx.github.io/parigi-in-tasca/dicembre/'));
  ok('anteprima: descrizione ≤ 80 lettere', og['og:description'].length <= 80);
  ok('anteprima: immagine grande su Telegram', og['twitter:card'] === 'summary_large_image');
  const img = (og['og:image'] || '').match(/^https:\/\/kur0chanx\.github\.io\/parigi-in-tasca\/dicembre\/([\w-]+\.jpg)(\?v=\d+)?$/);
  ok('anteprima: immagine con indirizzo intero', !!img);
  const fileImg = img && path.join(__dirname, '..', 'dicembre', img[1]);
  ok('anteprima: file sotto 300 KB', !!fileImg && fs.existsSync(fileImg) && fs.statSync(fileImg).size < 300 * 1024);
  ok('anteprima: 1200×630', !!img && await q.evaluate((src) => new Promise((ok) => { const i = new Image(); i.onload = () => ok(i.naturalWidth === 1200 && i.naturalHeight === 630); i.onerror = () => ok(false); i.src = src; }), img[1]));
  ok('anteprima: in testa alla pagina (primi 300 KB)', fs.readFileSync(path.join(__dirname, '..', 'dicembre', 'index.html'), 'utf8').indexOf('og:image') < 4000);
  // Dov'è (C5): ogni scheda degli alloggi, aperta, ha mappa, 3 distanze e 3 bottoni Maps col percorso coi mezzi
  const mappeOk = require('child_process').spawnSync('python3', ['-I', path.join(__dirname, 'fai-mappe-dicembre.py'), '--controlla'], { encoding: 'utf8' });
  ok('mappe: immagini e blocco MAPPE allineati', mappeOk.status === 0); if (mappeOk.status) console.log(mappeOk.stdout);
  const cMappe = path.join(__dirname, '..', 'dicembre', 'mappe'), pesi = fs.readdirSync(cMappe).filter((f) => f.endsWith('.jpg')).map((f) => fs.statSync(path.join(cMappe, f)).size);
  ok('mappe: tutte le immagini (27) sotto 100 KB', pesi.length === 27 && pesi.every((x) => x < 100 * 1024));
  const dove = await q.evaluate(async () => {
    const out = [];
    for (const n of [...Array(15).keys()].map((i) => i + 1).concat([22, 24, 29, 30])) {
      const d = document.querySelector(`#al-${n} details.more`); d.open = true;
      await new Promise((r) => setTimeout(r, 60));
      const b = d.querySelector('.dove'), img = b && b.querySelector('.mappa img');
      if (img) { img.scrollIntoView(); if (!img.complete) await Promise.race([new Promise((r) => { img.onload = img.onerror = r; }), new Promise((r) => setTimeout(r, 5000))]); }
      const links = b ? [...b.querySelectorAll('.dr a.maps')].map((a) => new URL(a.href)) : [];
      const h = b && b.querySelector('.mk-h');
      out.push({ n, img: !!img && img.naturalWidth === 800 && img.naturalHeight === 534,
        righe: b ? b.querySelectorAll('.dr li').length : 0,
        tempi: b ? [...b.querySelectorAll('.dr-t')].every((t) => /^circa \d/.test(t.textContent)) : false,
        maps: links.length === 3 && links.every((u) => u.searchParams.get('travelmode') === 'transit' && !!u.searchParams.get('origin')),
        segno: !!h && h.textContent === String(n) && [h.style.left, h.style.top].every((v) => parseFloat(v) >= 0 && parseFloat(v) <= 100),
        posizione: !!b && b.querySelector('a.mappa').href.startsWith('https://www.google.com/maps/search/') });
      d.open = false;
    }
    return out;
  });
  const male = dove.filter((x) => !(x.img && x.righe === 3 && x.tempi && x.maps && x.segno && x.posizione));
  ok('Dov\'è: 19 schede con mappa (n. 1–15, 22, 24, 29 e 30), 3 distanze e Maps', male.length === 0); if (male.length) console.log(male);
  // Airbnb (n. 16–21, 23 e 25–28; Mario 21/11 ~22:15 «aggiungi sezione air b e b»): niente indirizzo → niente mappa inventata, ma posizione indicativa, 3 distanze e Maps
  const airbnb = await q.evaluate(async () => {
    const out = [];
    for (const n of [16, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 31, 32, 33, 34, 35]) {
      const d = document.querySelector(`#al-${n} details.more`); if (!d) { out.push({ n, manca: true }); continue; }
      d.open = true; await new Promise((r) => setTimeout(r, 60));
      const b = d.querySelector('.dove'), links = b ? [...b.querySelectorAll('.dr a.maps')].map((a) => new URL(a.href)) : [];
      const bt = d.querySelector('a.btn.ghost');
      out.push({ n, ok: !!b && !b.querySelector('.mappa img') && /Posizione indicativa/.test(b.textContent) && b.querySelectorAll('.dr li').length === 3
        && [...b.querySelectorAll('.dr-t')].every((t) => /^circa \d/.test(t.textContent)) && links.length === 3 && links.every((u) => u.searchParams.get('travelmode') === 'transit')
        && !!bt && /^https:\/\/www\.airbnb\.(com|it)\/rooms\//.test(bt.href) && /Airbnb/.test(bt.textContent)
        && document.querySelector(`#al-${n} .fact .k`).textContent === 'Voto Airbnb' });
      d.open = false;
    }
    document.querySelector('#filters [data-f="airbnb"]').click(); await new Promise((r) => setTimeout(r, 100));
    const solo = [...document.querySelectorAll('#hotelCards article')].map((a) => +a.id.slice(3)).sort((a, b) => a - b).join(',');
    document.querySelector('#filters [data-f="tutti"]').click(); await new Promise((r) => setTimeout(r, 100));
    // dalla v18 il consiglio è 4 notti vicino a Disney: per i prezzi con la domenica a Parigi si sceglie Locomo + Moxy, poi si torna al consiglio
    document.querySelector('#scegli [data-sc="lo-8"]').click(); await new Promise((r) => setTimeout(r, 250));
    const prezzi = [...document.querySelectorAll('#scD details[data-k^="d-"]')].filter((x) => +x.dataset.k.slice(2) >= 16).map((x) => x.querySelector('.sc-p').textContent);
    document.querySelector('#scegli [data-sc="4n-8"]').click(); await new Promise((r) => setTimeout(r, 250));
    return { out, solo, prezzi, tutti: document.querySelectorAll('#hotelCards article').length };
  });
  // 21/11 (#20): i numeri degli annunci Airbnb (19 cifre) scritti come numeri JavaScript venivano arrotondati → link all'annuncio sbagliato
  {
    const src = require('fs').readFileSync(require('path').join(__dirname, '..', 'dicembre', 'parigi-disney-natale.html'), 'utf8');
    const ids = await q.evaluate(() => [...document.querySelectorAll('a[href*="airbnb.it/rooms/"]')].map((a) => new URL(a.href).pathname.split('/')[2]));
    const sbagliati = [...new Set(ids)].filter((id) => !new RegExp(`\\b${id}\\b`).test(src));
    ok('Airbnb: ogni link porta al numero d\'annuncio scritto nella pagina (niente arrotondati)', ids.length >= 11 && sbagliati.length === 0); if (sbagliati.length) console.log(sbagliati);
  }
  // ordine a 4 pulsanti (Mario 21/11 23:5x): meno cari, vicino a Disney, vicino alla RER, più puliti, nelle due liste
  {
    const ord = await q.evaluate(async () => {
      const w = () => new Promise((r) => setTimeout(r, 120)); const out = {};
      for (const k of ['prezzo', 'disney', 'rer', 'pulizia']) {
        document.querySelector(`#sort [data-s="${k}"]`).click(); await w();
        const ids = [...document.querySelectorAll('#hotelCards article')].map((a) => +a.id.slice(3));
        const pre = document.querySelector(`#sort [data-s="${k}"]`).getAttribute('aria-pressed');
        document.querySelector(`#scSort [data-s="${k}"]`).click(); await w();
        const sc = [...document.querySelectorAll('#scD details[data-k^="d-"]')].map((x) => +x.dataset.k.slice(2));
        const min = [...document.querySelectorAll('#scD details[data-k^="d-"]')].map((x) => parseInt((x.querySelector('.sc-k b') || {}).textContent, 10)).filter((n) => n > 0);
        out[k] = { ids, pre, sc, min, preSc: document.querySelector(`#scSort [data-s="${k}"]`).getAttribute('aria-pressed') };
      }
      document.querySelector('#sort [data-s="prezzo"]').click(); document.querySelector('#scSort [data-s="prezzo"]').click(); await w();
      return out;
    });
    const tutti = Object.values(ord).every((o) => o.ids.length === 35 && o.sc.length === 35 && o.pre === 'true' && o.preSc === 'true');
    const diversi = new Set(Object.values(ord).map((o) => o.ids.join(','))).size === 4;
    ok('Ordine: 4 pulsanti nelle due liste, tutti e 35 sempre, 4 ordini diversi', tutti && diversi); if (!tutti || !diversi) console.log(JSON.stringify(ord).slice(0, 600));
    // «Vicino a Disney» = tempo per arrivare ai parchi con l'attesa media di navetta e bus (Mario 22/11 10:18 «in ordine di tempo per arrivare, non di chilometri»;
    // con l'attesa la navetta del n. 11 non va più in cima come il 22/11 ~00:45): primi i n. 16/17 a 1 minuto dalla RER, minuti in fila crescente, n. 11 non fra i primi 10
    const crescente = ord.disney.min.length > 30 && ord.disney.min.every((m, i, a) => !i || a[i - 1] <= m);
    const primi = [16, 17].includes(ord.disney.ids[0]) && [16, 17].includes(ord.disney.sc[0]) && crescente && !ord.disney.sc.slice(0, 10).includes(11) && [19, 21, 23, 25, 26, 27].includes(ord.pulizia.ids[0]) && [16, 17].includes(ord.rer.ids[0]);
    ok('Ordine: «Vicino a Disney» per minuti per arrivare (attese comprese, in fila crescente), «Vicino alla RER» quelli a 1 minuto a piedi, «Più puliti» un 5,0', primi); if (!primi) console.log(Object.fromEntries(Object.entries(ord).map(([k, o]) => [k, o.ids.slice(0, 4).join(',') + ' | ' + o.sc.slice(0, 4).join(',')])));
  }
  // v18 (Mario 22/11 ~00:45 «metti un tasto tutti … in vista distanza Disney con tempi e km … rer a piedi»; «in priorità dal 13 al 17»)
  {
    const v = await q.evaluate(async () => {
      const w = () => new Promise((r) => setTimeout(r, 150)), vis = (el) => !!el && getComputedStyle(el).display !== 'none';
      const righe = () => [...document.querySelectorAll('#scD>details[data-k^="d-"]')].filter(vis);
      const bt = [...document.querySelectorAll('.tyswitch button')].map((b) => b.dataset.ty);
      document.querySelector('.tyswitch [data-ty="tutti"]').click(); await w();
      const tutti = righe().length, bbT = vis(document.getElementById('scBB'));
      document.querySelector('.tyswitch [data-ty="hotel"]').click(); await w();
      const hotel = righe().length, bbH = vis(document.getElementById('scBB'));
      document.querySelector('.tyswitch [data-ty="bb"]').click(); await w();
      const bbB = vis(document.getElementById('scBB')), bbLink = !!document.querySelector('#scBB a[href*="jolie-appartement-pres-de-rer-a"]');
      const bb2 = !!document.querySelector('#scBB a[href*="airbnb.it/rooms/15868262"]') && document.querySelectorAll('#scBB .sc-xb').length === 2, bbN = +((document.querySelector('.tyswitch [data-ty="bb"]').textContent.match(/· (\d+)/) || [])[1]), bbR = righe().length;
      document.querySelector('.tyswitch [data-ty="tutti"]').click(); await w();
      // C13: nella riga 3 riquadri (Disney, RER, pulizia) con etichetta | numero grande | riga piccola
      const kpi = (d) => [...d.querySelectorAll('.sc-k')].map((x) => [...x.children].map((c) => c.textContent).join('|')).join(' / ');
      const r8 = document.querySelector('#scD details[data-k="d-8"]');
      const chip = r8 ? kpi(r8) : '';
      const tuttiChip = righe().every((d) => { const k = kpi(d); return k ? /^🏰 Disney\|\d+ min\|/.test(k) && /🚉 RER\|\d/.test(k) && /🧼 Pulizia\|/.test(k) : /Libero solo dal 14|Esaurito/.test(d.querySelector('.sc-m').textContent); });
      return { bb2, bbN, bbR, bt: bt.join(','), tutti, hotel, bbT, bbH, bbB, bbLink, chip, tuttiChip, mio: document.querySelector('#mio .mine-t').textContent, dovekm: (document.querySelector('#al-8 .dr') || {}).textContent || '' };
    });
    ok('v18: interruttore con «Tutti» per primo, «Tutti» mostra tutti e 35, «Hotel» meno', v.bt === 'tutti,hotel,bb,casa' && v.tutti === 35 && v.hotel > 0 && v.hotel < 35); if (v.bt !== 'tutti,hotel,bb,casa' || v.tutti !== 35) console.log(v);
    ok('v18: camera di Bussy visibile con «B&B» e «Tutti», nascosta con «Hotel», link Booking', v.bbT && v.bbB && !v.bbH && v.bbLink);
    // la riga mostra i km del blocco MAPPE (n. 8: 1,9 km), non i km a piedi del giorno (22/11: due funzioni col nome kmT)
    ok('v18: nella riga Disney (minuti e km dai parchi) e RER a piedi, n. 8 = 1,9 km come la scheda', /🏰 Disney\|13 min\|1,9 km/.test(v.chip) && /🚉 RER\|8 min\|a piedi/.test(v.chip) && v.tuttiChip); if (!/1,9 km/.test(v.chip) || !v.tuttiChip) console.log(v.chip);
    ok('C14: seconda camera a Bussy (Airbnb 15868262) nel riquadro B&B, conteggio «B&B» = righe + 2 camere', v.bb2 && v.bbN === v.bbR + 2); if (!(v.bb2 && v.bbN === v.bbR + 2)) console.log(v.bb2, v.bbN, v.bbR);
    ok('v18: il mio consiglio è 4 notti al n. 8 Moxy (13→17)', /4 notti al n\. 8 Moxy/.test(v.mio));
  }
  // C13 pezzo 2 (22/11): il passo 1 (domenica) ha lo stesso stile del passo 2: colore, 3 riquadri, totale sotto il prezzo
  {
    const v = await q.evaluate(() => {
      const kpi = (d) => [...d.querySelectorAll('.sc-k')].map((x) => [...x.children].map((c) => c.textContent).join('|')).join(' / ');
      const n4 = document.querySelector('#scN details[data-k="n-4n"]');
      const par = [...document.querySelectorAll('#scN details.sc-o')].filter((d) => d !== n4);
      const bad = par.filter((d) => !(d.dataset.ty === 'hotel' && /^🚶 A piedi\|\d+ min\|da /.test(kpi(d)) && /🧳 Lunedì\|\d{1,2}:\d{2}\|/.test(kpi(d)) && /🧼 Pulizia\|\d/.test(kpi(d)) && d.querySelector('.sc-p .sc-dt'))).map((d) => d.dataset.k + ' ' + kpi(d));
      return { par: par.length, bad, ty4: n4 ? n4.dataset.ty : '', k4: n4 ? kpi(n4) : '', dt4: !!(n4 && n4.querySelector('.sc-p .sc-dt')), vec: !!document.querySelector('#scN .sc-m span:not(.sc-k)') };
    });
    const ok4 = v.ty4 === 'dis' && /^🧳 Domenica\|\d{1,2}:\d{2}\|.* \/ 🛏️ In camera\|\d{1,2}:\d{2}\|.* \/ 🎢 Lunedì\|\d{1,2}:\d{2}\|/.test(v.k4) && v.dt4;
    ok('C13 pezzo 2: passo 1 con 3 riquadri (4 notti: domenica, in camera, lunedì; Parigi: a piedi, lunedì, pulizia) e totale sotto il prezzo', ok4 && v.par >= 8 && !v.bad.length && !v.vec); if (!(ok4 && v.par >= 8 && !v.bad.length && !v.vec)) console.log(v);
    // C13 pezzo 3 (22/11): in «Quanto costa» ogni strada ha il tipo del suo alloggio (colore ed etichetta), come in Dormire; n. 8 hotel, n. 31 casa
    const b3 = await q.evaluate(() => [...document.querySelectorAll('#bars>a.bar-row')].map((a) => [a.dataset.sc || '', a.dataset.ty, (a.querySelector('.bar-ty') || {}).textContent || '']));
    const ok3 = b3.length === 9 && b3.every(([, t, l]) => /^(hotel|bb|casa|disney)$/.test(t) && l.length > 3) && b3.some(([k, t]) => /-8$/.test(k) && t === 'hotel') && b3.some(([k, t]) => /-31$/.test(k) && t === 'casa');
    ok('C13 pezzo 3: «Quanto costa» con tipo di alloggio su ogni strada (9 strade, n. 8 hotel, n. 31 casa)', ok3); if (!ok3) console.log(b3);
    // Mario 22/11 10:18: hotel Disney con un colore suo (rosa), diverso dagli hotel; col tasto «Hotel» resta visibile e conta fra gli hotel
    const dz = await q.evaluate(async () => {
      const w = () => new Promise((r) => setTimeout(r, 150)), d14 = document.querySelector('#scD details[data-k="d-14"]');
      const col = (el) => getComputedStyle(el).getPropertyValue('--ty').trim();
      const r = { ty: d14 && d14.dataset.ty, lab: d14 ? getComputedStyle(d14.querySelector('summary'), '::before').content : '', diverso: !!d14 && col(d14) !== col(document.querySelector('#scD details[data-ty="hotel"]')) };
      document.querySelector('.tyswitch [data-ty="hotel"]').click(); await w();
      r.conHotel = !!d14 && getComputedStyle(d14).display !== 'none';
      r.nHotel = +((document.querySelector('.tyswitch [data-ty="hotel"]').textContent.match(/· (\d+)/) || [])[1]);
      r.visHotel = [...document.querySelectorAll('#scD>details[data-k^="d-"]')].filter((x) => getComputedStyle(x).display !== 'none').length;
      document.querySelector('.tyswitch [data-ty="tutti"]').click(); await w();
      r.pkg = [...document.querySelectorAll('#bars>a.bar-row:not([data-sc])')].every((a) => a.dataset.ty === 'disney');
      return r;
    });
    const okD = dz.ty === 'disney' && /Hotel Disney/.test(dz.lab) && dz.diverso && dz.conHotel && dz.nHotel === dz.visHotel && dz.pkg;
    ok('Hotel Disney (n. 14) rosa con etichetta sua, visibile col tasto «Hotel» e contato lì; pacchetti Disney rosa nei costi', okD); if (!okD) console.log(dz);
    // C13 pezzo 4 (22/11): «Treni e ticket» sul telefono a schede (prima la tabella era larga 34rem e usciva dallo schermo)
    const tk = await q.evaluate(async () => {
      const w = () => new Promise((r) => setTimeout(r, 250)), prima = document.body.dataset.tab;
      document.querySelector('.tabbar button[data-t="biglietti"]').click(); await w();
      const t = document.querySelector('#trasporti .tbl'), r = { vw: innerWidth, sw: t.scrollWidth, cw: t.clientWidth, th: getComputedStyle(document.querySelector('#trasporti thead')).display, righe: document.querySelectorAll('#trasporti tbody tr').length };
      if (prima) { document.querySelector(`.tabbar button[data-t="${prima}"]`).click(); await w(); }
      return r;
    });
    const okT = tk.vw >= 600 || (tk.cw > 0 && tk.sw <= tk.cw + 1 && tk.th === 'none' && tk.righe === 6);
    ok('C13 pezzo 4: «Treni e ticket» sul telefono a schede, niente da scorrere di lato', okT); if (!okT) console.log(tk);
    // Mario 22/11: la scelta cambia la pagina e va fatto capire: riquadro prima, avviso dopo, pallino sulle schede cambiate che sparisce aprendole
    const av = await q.evaluate(async () => {
      const w = () => new Promise((r) => setTimeout(r, 250)), prima = document.body.dataset.tab, sc0 = new URL(location.href).searchParams.get('scelta');
      document.querySelector('.tabbar button[data-t="dormire"]').click(); await w();
      const r = { riq: !!document.querySelector('#scegli .sc-tutto') };
      const alt = [...document.querySelectorAll('#scD .sc-act [data-sc]')].find((b) => b.getAttribute('aria-pressed') === 'false');
      alt.click(); await w();
      const a = document.querySelector('.sc-avviso');
      r.vis = !a.hidden && /Scelto:/.test(a.textContent); r.pall = [...document.querySelectorAll('.tabbar button.nuovo')].map((b) => b.dataset.t).sort().join(',');
      a.querySelector('.vai').click(); await w();
      r.dopo = document.body.dataset.tab + ' ' + [...document.querySelectorAll('.tabbar button.nuovo')].map((b) => b.dataset.t).sort().join(',') + ' ' + a.hidden;
      document.querySelector(`#scegli [data-sc="${sc0 || '4n-8'}"]`).click(); await w(); a.hidden = true;
      if (prima) { document.querySelector(`.tabbar button[data-t="${prima}"]`).click(); await w(); }
      return r;
    });
    const okA = av.riq && av.vis && av.pall === 'biglietti,giorni,piano' && av.dopo === 'giorni biglietti,piano true';
    ok('Scelta dell\'alloggio: riquadro «cambia tutta la pagina», avviso dopo «Scegli questo», pallino su Piano, Giorni, Biglietti; «Vedi Giorni» apre Giorni e toglie il suo pallino', okA); if (!okA) console.log(av);
  }
  // Mario 22/11 «se uno sceglie perché per sbaglio ci clicca, che lo può annullare»: «↩ Annulla» nell'avviso riporta tutto com'era
  { const u = await c2.newPage(); u.on('pageerror', (e) => { errs.push(e.message); console.log('ERRORE NELLA PAGINA: ' + e.message); });
    const ls = await q.evaluate(() => localStorage.getItem('pdn-scelta'));
    await u.goto(B + 'dicembre/'); await u.evaluate(() => localStorage.removeItem('pdn-scelta')); await u.reload(); await u.waitForTimeout(800);
    const an = await u.evaluate(async () => {
      const w = () => new Promise((r) => setTimeout(r, 250)), txt = (s) => (document.querySelector(s) || {}).textContent || '';
      const foto = () => ({ url: new URL(location.href).searchParams.get('scelta'), ls: localStorage.getItem('pdn-scelta'), d: txt('#scNowD'), n: txt('#scNowN'), mio: /Non avete ancora scelto/.test(txt('#scRis')), pal: [...document.querySelectorAll('.tabbar button.nuovo')].map((b) => b.dataset.t).join(',') });
      const ugu = (a, b) => JSON.stringify(a) === JSON.stringify(b);
      const a = document.querySelector('.sc-avviso'), r = {};
      document.querySelector('.tabbar button[data-t="dormire"]').click(); await w();
      const altra = () => [...document.querySelectorAll('#scD .sc-act [data-sc]')].find((b) => b.getAttribute('aria-pressed') === 'false');
      // 1) nessuna scelta (la pagina segue il mio consiglio): scegli → Annulla → di nuovo «non avete ancora scelto», niente nell'indirizzo né salvato
      const f0 = foto(); altra().click(); await w(); r.cambia1 = !ugu(foto(), f0) && !a.hidden && !a.querySelector('.sc-ann').hidden;
      a.querySelector('.sc-ann').click(); await w(); r.uguale1 = ugu(foto(), f0); r.f0 = f0; r.f1 = foto(); r.msg = !a.hidden && /Annullato/.test(a.textContent) && /mio consiglio/.test(a.textContent) && a.querySelector('.sc-ann').hidden && a.querySelector('.vai').hidden;
      // 2) scelta X, poi Y per sbaglio: Annulla → di nuovo X
      altra().click(); await w(); const fx = foto(); altra().click(); await w(); r.cambia2 = !a.querySelector('.sc-ann').hidden && foto().url !== fx.url;
      a.querySelector('.sc-ann').click(); await w(); r.uguale2 = ugu(foto(), fx); r.fx = fx; r.f2 = foto();
      r.fatti = document.querySelectorAll('.sc-fatto').length;
      return r;
    });
    const okN = an.cambia1 && an.uguale1 && an.f0.mio && !an.f0.url && !an.f0.ls && an.msg && an.cambia2 && an.uguale2 && !!an.fx.url && an.fx.url === an.fx.ls && !an.fx.mio && an.fatti === 0;
    ok('«↩ Annulla» nell\'avviso: torna alla scelta di prima (anche a «non avete ancora scelto»), indirizzo, salvataggio, «Adesso:» e pallini come prima', okN); if (!okN) console.log(JSON.stringify(an));
    await u.evaluate((v) => { if (v) localStorage.setItem('pdn-scelta', v); else localStorage.removeItem('pdn-scelta'); }, ls); await u.close(); }
  // 21/11 sera: la pagina era larga 735 px su un telefono da 412 (classe .pc del contenitore uguale a quella dei pro/contro)
  ok('telefono 390 px: la pagina non scorre di lato', await q.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  const maleA = airbnb.out.filter((x) => !x.ok);
  ok('Airbnb: 16 schede senza mappa inventata, con posizione indicativa, 3 distanze, Maps e link Airbnb', maleA.length === 0); if (maleA.length) console.log(maleA);
  ok('Airbnb: il filtro mostra solo i n. 16–21, 23, 25–28 e 31–35, «Tutti» li mostra tutti e 35', airbnb.solo === '16,17,18,19,20,21,23,25,26,27,28,31,32,33,34,35' && airbnb.tutti === 35); if (airbnb.solo !== '16,17,18,19,20,21,23,25,26,27,28,31,32,33,34,35') console.log(airbnb.solo, airbnb.tutti);
  ok('Airbnb e n. 22, 24, 29, 30: nella scelta (domenica a Parigi) tutti e 20 col prezzo', airbnb.prezzi.length === 20 && airbnb.prezzi.every((x) => /^(≈ )?\d/.test(x))); if (!airbnb.prezzi.every((x) => /^(≈ )?\d/.test(x))) console.log(airbnb.prezzi);
  ok('Dov\'è: «Scheda» nella scelta apre la scheda già con la mappa', await q.evaluate(async () => {
    // il primo con la mappa: in cima (per prezzo) ora può esserci un Airbnb, che la mappa non ce l'ha apposta
    const a = [...document.querySelectorAll('#scD a[href^="#al-"]')].find((x) => +x.getAttribute('href').slice(4) <= 15); a.click(); await new Promise((r) => setTimeout(r, 300));
    return !!document.querySelector(a.getAttribute('href') + ' details.more[open] .dove .mappa img');
  }));
  ok('Airbnb: «Scheda» nella scelta apre la scheda con la posizione indicativa', await q.evaluate(async () => {
    const a = document.querySelector('#scD a[href="#al-16"]'); a.click(); await new Promise((r) => setTimeout(r, 300));
    return !!document.querySelector('#al-16 details.more[open] .dove .dove-z');
  }));
  // C11 (Mario 21/11 20:52 «quando clicco mi cambia la pagina … l'itinerario e tutto»)
  const sc = await q.evaluate(async () => {
    const w = () => new Promise((r) => setTimeout(r, 250)), txt = (s) => (document.querySelector(s) || {}).textContent || '';
    const pick = async (k) => { document.querySelector(`#scegli [data-sc="${k}"]`).click(); await w(); };
    await pick('4n-8'); await pick('4n-12');
    const a ={ dom: txt('#p-dom'), url: location.search, tot: txt('#brTot'), mk: txt('#mkAl') };
    await pick('lo-12'); await pick('lo-8');
    const b ={ dom: txt('#p-dom'), lun: txt('#p-lun'), url: location.search, tot: txt('#brTot'), mk: txt('#mkAl'), on: document.querySelectorAll('#scegli .sc-o.on').length, ris: txt('#scRis') };
    return { a, b };
  });
  ok('scelta: 4 notti al n. 12 → domenica con la spa e gli armadietti', /Spa dell'hotel/.test(sc.a.dom) && /Ritiro bagagli/.test(sc.a.dom) && /scelta=4n-12/.test(sc.a.url));
  ok('scelta: Locomo + Moxy → domenica senza armadietti né RER la sera', /Valigie in hotel: Hotel Locomo/.test(sc.b.dom) && !/Ritiro bagagli/.test(sc.b.dom) && !/RER A fino a/.test(sc.b.dom));
  ok('scelta: Locomo + Moxy → lunedì con check-out e RER A con le valigie', /Check-out e RER A con le valigie/.test(sc.b.lun) && /Valigie al Moxy/.test(sc.b.lun));
  ok('scelta: totale, mercatini, link e riepilogo cambiano', sc.a.tot !== sc.b.tot && /Hotel Locomo/.test(sc.b.mk) && /scelta=lo-8/.test(sc.b.url) && sc.b.on === 2 && /Soldi, in due/.test(sc.b.ris));
  // Mario 21/11 ~20:00 «sono i mercatini che si nascondono»: scorrendo, le casette del disegno non escono mai dal bordo
  const tagli = [];
  for (const y of [0, 150, 300, 450, 600, 900]) {
    await q.evaluate((y) => scrollTo(0, y), y); await q.waitForTimeout(250);
    const r = await q.evaluate(() => { const s = document.querySelector('svg.scene').getBoundingClientRect(), c = document.getElementById('chalets').getBoundingClientRect(); return [c.bottom, s.bottom]; });
    if (r[0] > r[1] + 0.5) tagli.push(y + ': ' + r.map(Math.round).join(' > '));
  }
  ok('testata: le casette dei mercatini restano intere scorrendo', tagli.length === 0); if (tagli.length) console.log(tagli);
  await q.reload(); await q.waitForTimeout(800);
  await c2.setOffline(true); await q.reload(); ok('amico senza rete: dicembre si apre', (await q.title()) === 'Parigi e Disney a Natale');
  ok('amico senza rete: mappa già vista si vede', await q.evaluate(async () => {
    const d = document.querySelector('#al-12 details.more'); d.open = true; await new Promise((r) => setTimeout(r, 100));
    const img = d.querySelector('.mappa img'); img.scrollIntoView(); if (!img.complete) await Promise.race([new Promise((r) => { img.onload = img.onerror = r; }), new Promise((r) => setTimeout(r, 5000))]);
    return img.naturalWidth === 800;
  }));
  ok('nessun errore nella pagina', errs.length === 0); if (errs.length) console.log(errs);
  await b.close(); server.kill(); fs.unlinkSync(path.join(DIR, 'parigi-in-tasca')); fs.rmdirSync(DIR);
  process.exit(falsi ? 1 : 0);
})().catch((e) => { console.error(e); server.kill(); process.exit(1); });
