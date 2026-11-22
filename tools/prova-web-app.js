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
  const mvOk = require('child_process').spawnSync('python3', ['-I', path.join(__dirname, 'fai-mappa-viaggio.py'), '--controlla'], { encoding: 'utf8' });
  ok('mappa del viaggio: blocco dei dati allineato', mvOk.status === 0); if (mvOk.status) console.log(mvOk.stdout);
  // 22/11 (C15): il service worker di novembre cancellava TUTTI gli altri cassetti, anche quelli di dicembre
  ok('service worker di novembre: cancella solo i suoi cassetti', /k\.filter\(\(n\) => n\.startsWith\('parigi-in-tasca-'\) && n !== CASSETTO\)/.test(fs.readFileSync(path.join(__dirname, '..', 'sw.js'), 'utf8')));
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
      // Mario 22/11 ~11:05 «i chilometri mettili visibili, ma non prenderli in considerazione nei filtri»: «Vicino a Disney» ordina solo per minuti
      document.querySelector('#scSort [data-s="disney"]').click(); await w();
      const disMin = righe().map((d) => +((kpi(d).match(/^🏰 Disney\|(\d+) min/) || [])[1] || 1e9));
      document.querySelector('#scSort [data-s="prezzo"]').click(); await w();
      const tuttiChip = righe().every((d) => { const k = kpi(d); return k ? /^🏰 Disney\|\d+ min\|/.test(k) && /🚉 RER\|\d/.test(k) && /🧼 Pulizia\|/.test(k) : /Libero solo dal 14|Esaurito/.test(d.querySelector('.sc-m').textContent); });
      return { bb2, bbN, bbR, bt: bt.join(','), tutti, hotel, bbT, bbH, bbB, bbLink, chip, tuttiChip, disMin, mio: document.querySelector('#mio .mine-t').textContent, dovekm: (document.querySelector('#al-8 .dr') || {}).textContent || '' };
    });
    ok('v18: interruttore con «Tutti» per primo, «Tutti» mostra tutti e 35, «Hotel» meno', v.bt === 'tutti,hotel,bb,casa' && v.tutti === 35 && v.hotel > 0 && v.hotel < 35); if (v.bt !== 'tutti,hotel,bb,casa' || v.tutti !== 35) console.log(v);
    ok('v18: camera di Bussy visibile con «B&B» e «Tutti», nascosta con «Hotel», link Booking', v.bbT && v.bbB && !v.bbH && v.bbLink);
    // la riga mostra i km del blocco MAPPE (n. 8: 1,9 km), non i km a piedi del giorno (22/11: due funzioni col nome kmT)
    // Mario 22/11 ~11:00 «quanto ci vuole ad arrivare a Disney» e ~11:05 «i chilometri mettili visibili»: n. 8 = 8 min a piedi + 3 RER + 2 + 3 di attesa del treno, e 1,9 km (blocco MAPPE)
    ok('Riga Disney: minuti per arrivare (attese comprese), km piccoli e come; RER a piedi; n. 8 = 16 min, 1,9 km, a piedi + RER', /🏰 Disney\|16 min\|1,9 km · a piedi \+ RER · attese comprese/.test(v.chip) && /🚉 RER\|8 min\|a piedi/.test(v.chip) && v.tuttiChip); if (!/16 min\|1,9 km/.test(v.chip) || !v.tuttiChip) console.log(v.chip);
    // C15 (Mario 22/11 «zoomabile … Aeroporto, Parigi e Disneyland. E con quel range lì»): mappa che si apre, chiusa nel riquadro, segni per zoom
    const tm = await q.evaluate(async () => {
      const w = (ms) => new Promise((r) => setTimeout(r, ms || 250));
      document.querySelector('.tabbar button[data-t="giorni"]').click(); await w();
      document.getElementById('mappa').scrollIntoView(); for (let i = 0; i < 40 && !window.pdnTM; i++) await w();
      const m = window.pdnTM; if (!m) return { err: (document.getElementById('tmMap') || {}).textContent };
      await w(600);
      const conta = (s) => document.querySelectorAll('#tmMap ' + s).length, r = { z0: m.getZoom(), minZ: m.getMinZoom(), lontano: [conta('.tm-n'), conta('.tm-c')] };
      m.setZoom(m.getMinZoom() - 2); await w(400); r.zMin = m.getZoom();
      r.maxZ = m.getMaxZoom(); m.setView([46, 1], 12); await w(500); const c = m.getCenter(); r.dentro = c.lat > 48.0 && c.lat < 49.35 && c.lng > 1.3 && c.lng < 3.7;
      document.querySelector('.tm-fs').click(); await w(500); const mr = document.getElementById('tmMap').getBoundingClientRect(); r.pieno = mr.height > innerHeight * 0.75 && mr.width >= innerWidth - 1 && document.elementFromPoint(innerWidth / 2, innerHeight - 30).closest('#tmMap') !== null; history.back(); await w(500); r.chiusa = !document.querySelector('.tm-box').classList.contains('pieno');
      document.querySelector('.tm-vai [data-tmv="giro"]').click(); await w(700); r.zGiro = m.getZoom(); r.vicino = [conta('.tm-n'), conta('.tm-n.top'), conta('.tm-g'), conta('path.leaflet-interactive') + conta('path')];
      document.querySelector('.tm-vai [data-tmv="disney"]').click(); await w(700); r.alloggi = conta('.tm-a'); r.me = conta('.tm-c.me');
      document.querySelector('.tm-vai [data-tmv="orly"]').click(); await w(700); const o = m.getCenter(); r.orly = Math.abs(o.lat - 48.729) < 0.01 && Math.abs(o.lng - 2.366) < 0.01;
      document.querySelector('.tm-vai [data-tmv="tutto"]').click(); await w(500);
      document.querySelector('.tabbar button[data-t="dormire"]').click(); await w();
      return r;
    });
    const tmOk = !tm.err && tm.zMin === tm.minZ && tm.minZ <= 8 && tm.maxZ === 19 && tm.pieno && tm.chiusa && tm.dentro && tm.lontano[0] === 0 && tm.zGiro >= 13 && tm.vicino[0] === 7 && tm.vicino[1] === 4 && tm.vicino[2] === 6 && tm.alloggi >= 15 && tm.me >= 1 && tm.orly;
    ok('Mappa del viaggio: si apre, zoom libero (fino a 8 e a 19), schermo intero sopra le barre e «indietro» la chiude, da lontano solo i posti grandi, «Mercatini» mostra 7 tappe (4 con la stella), 5 da saltare e il Louvre, «Disney» gli alloggi, «Orly» l\'aeroporto', tmOk); if (!tmOk) console.log(tm);
    // C16 (Mario 22/11 11:37 «sotto c'era tipo domenica, lunedì… Che fine hanno fatto?»): dalla v17 la barra delle schede copriva la fila dei giorni; ~12:00 «foto 2»: fila in alto, ferma scorrendo
    await q.evaluate(async () => { document.querySelector('.tabbar button[data-t="giorni"]').click(); await new Promise((r) => setTimeout(r, 300)); const p = document.querySelector('#giorni .panel:not([hidden])'); scrollTo(0, p.getBoundingClientRect().top + scrollY + 500); await new Promise((r) => setTimeout(r, 400)); });
    const fg = await q.evaluate(() => {
      const d = document.getElementById('daybar').getBoundingClientRect(), t = document.querySelector('.tabbar').getBoundingClientRect();
      const tasti = [...document.querySelectorAll('#daybar button')].map((x) => { const r = x.getBoundingClientRect(); const e = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2); return !!e && e.closest('#daybar button') === x; });
      const m = document.querySelector('#daybar button:nth-of-type(4)').getBoundingClientRect();
      return { tasti, inAlto: d.top <= 1 && d.bottom < t.top, x: m.left + m.width / 2, y: m.top + m.height / 2 };
    });
    await q.mouse.click(fg.x, fg.y); await q.waitForTimeout(900);
    Object.assign(fg, await q.evaluate(() => { const b = document.getElementById('daybar').getBoundingClientRect(), h = document.querySelector('#giorni .panel:not([hidden]) h3').getBoundingClientRect();
      return { mer: document.querySelector('#daybar button:nth-of-type(4)').getAttribute('aria-selected') === 'true' && document.querySelectorAll('#giorni [role=tabpanel]:not([hidden])').length === 1, titolo: h.top >= b.bottom - 2 && h.top < b.bottom + 70 && b.top <= 1 }; }));
    await q.evaluate(() => document.querySelector('.tabbar button[data-t="dormire"]').click());
    const fgOk = fg.tasti.length === 5 && fg.tasti.every(Boolean) && fg.inAlto && fg.mer && fg.titolo;
    ok('Fila dei giorni (Dom 13 … Gio 17) in alto e ferma scorrendo, tutti i tasti toccabili, il giorno nuovo parte dal titolo (telefono)', fgOk); if (!fgOk) console.log(fg);
    // C17 (Mario 22/11 12:02 «mettimi l'indice delle cose più importanti… non farmi coprire troppo la pagina»): l'indice si vede tutto aprendo l'app e ogni tasto porta al suo posto
    const ind = await q.evaluate(async () => {
      const w = (ms) => new Promise((r) => setTimeout(r, ms || 450)), out = { tasti: 0, visibili: true, sbagliati: [] };
      document.querySelector('.tabbar button[data-t="piano"]').click(); await w(); scrollTo(0, 0); await w(200);
      const tb = document.querySelector('.tabbar').getBoundingClientRect(), tiles = [...document.querySelectorAll('nav.go a')];
      out.tasti = tiles.length; out.visibili = tiles.every((a) => { const r = a.getBoundingClientRect(); return r.top >= 0 && r.bottom <= tb.top; }); out.barra = Math.round(tb.height);
      for (const h of tiles.map((a) => a.getAttribute('href') + '|' + (a.dataset.day || ''))) {
        document.querySelector('.tabbar button[data-t="piano"]').click(); await w(); scrollTo(0, 0); await w(200);
        const [href, day] = h.split('|'); document.querySelector('nav.go a[href="' + href + '"]' + (day ? '[data-day="' + day + '"]' : '')).click(); await w(900);
        const el = document.getElementById(href.slice(1)), r = el.getBoundingClientRect();
        if (r.top < -2 || r.top > innerHeight * 0.5 || el.closest('[hidden]')) out.sbagliati.push(href + ' top ' + Math.round(r.top));
      }
      document.querySelector('.tabbar button[data-t="dormire"]').click(); await w();
      return out;
    });
    const indOk = ind.tasti === 12 && ind.visibili && ind.sbagliati.length === 0 && ind.barra <= 56;
    ok('Indice della schermata principale: 12 tasti visibili senza scorrere sopra la barra delle schede (alta al massimo 56), ognuno porta al suo posto', indOk); if (!indOk) console.log(ind);
    // difesa larga (E del 22/11, fila dei giorni coperta dalla v17 alla v24): in ogni scheda, ogni tasto delle barre fisse si può toccare (non c'è sopra un'altra barra)
    const coperti = await q.evaluate(async () => {
      const w = (ms) => new Promise((r) => setTimeout(r, ms || 300)), out = [];
      for (const k of ['piano', 'dormire', 'giorni', 'biglietti']) {
        document.querySelector('.tabbar button[data-t="' + k + '"]').click(); await w(); scrollTo(0, 400); await w(200);
        const fissi = [...document.querySelectorAll('body *')].filter((e) => ['fixed', 'sticky'].includes(getComputedStyle(e).position) && e.getClientRects().length);
        fissi.forEach((f) => [f, ...f.querySelectorAll('button,a[href]')].filter((x) => x.matches('button,a[href]')).forEach((x) => {
          const r = x.getBoundingClientRect(), cs = getComputedStyle(x); if (!r.width || !r.height || r.bottom < 0 || r.top > innerHeight || cs.visibility === 'hidden' || cs.pointerEvents === 'none' || x.closest('[hidden]')) return;
          const e = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
          if (!e || (e !== x && !x.contains(e))) out.push(k + ': «' + x.textContent.trim().slice(0, 20) + '» sotto ' + (e ? e.tagName + '.' + e.className : 'niente'));
        }));
      }
      document.querySelector('.tabbar button[data-t="dormire"]').click(); await w();
      return out;
    });
    ok('Nessun tasto delle barre fisse o ferme coperto (anche il numero della versione), nelle 4 schede (telefono)', coperti.length === 0); if (coperti.length) console.log(coperti.slice(0, 8));
    const disOk = v.disMin.length > 20 && v.disMin.every((m, i) => i === 0 || m >= v.disMin[i - 1]), srcD = fs.readFileSync(path.join(__dirname, '..', 'dicembre', 'parigi-disney-natale.html'), 'utf8').match(/disney:\(a,b\)=>[^,]*(,[^,]*){0,3}/g) || [];
    ok('«Vicino a Disney» ordina solo per minuti (i km non contano: Mario 22/11 ~11:05)', disOk && srcD.length === 2 && srcD.every((s) => !/km/i.test(s))); if (!disOk || srcD.length !== 2) console.log(v.disMin.join(','), srcD);
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
  // C17 (Mario 22/11 «un numerino piccolo in alto… clicca aggiorna versione»): numero = versione.json; con una versione più nuova sul sito, «Aggiorna versione» ricarica
  {
    const c3 = await b.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' }); const r = await c3.newPage();
    r.on('pageerror', (e) => { errs.push(e.message); console.log('ERRORE NELLA PAGINA: ' + e.message); });
    const sito = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'dicembre', 'versione.json'), 'utf8')).v;
    await r.goto(B + 'dicembre/'); await r.waitForTimeout(2200);
    const v0 = await r.evaluate(() => { const b = document.getElementById('vnum'), x = b.getBoundingClientRect(), e = document.elementFromPoint(x.left + x.width / 2, x.top + x.height / 2); return { t: b.textContent, agg: b.classList.contains('agg'), toccabile: e === b, inAlto: x.top < 60 }; });
    await r.click('#vnum'); await r.waitForTimeout(300);
    const box0 = await r.evaluate(() => ({ aperta: document.getElementById('vbox').open, voci: document.querySelectorAll('#vbox ol>li').length, agg: !document.querySelector('#vbox .vagg').hidden }));
    await r.click('#vbox .vx');
    await r.route('**/versione.json', (rt) => rt.fulfill({ contentType: 'application/json', body: JSON.stringify({ v: sito + 1 }) }));
    await r.reload(); await r.waitForTimeout(2200);
    const v1 = await r.evaluate(() => document.getElementById('vnum').textContent);
    await r.click('#vnum'); await r.waitForTimeout(300);
    const aggVisto = await r.evaluate(() => !document.querySelector('#vbox .vagg').hidden && /Aggiorna versione/.test(document.querySelector('#vbox .vagg button').textContent));
    let ricaricata = false; r.once('load', () => { ricaricata = true; });
    await r.click('#vbox .vagg button'); await r.waitForTimeout(2500);
    const vOk = v0.t === 'v' + sito && !v0.agg && v0.toccabile && v0.inAlto && box0.aperta && box0.voci >= 5 && !box0.agg && v1 === 'v' + sito + ' → v' + (sito + 1) && aggVisto && ricaricata;
    ok('Numero della versione in alto (v' + sito + ' = versione.json), novità al tocco, «Aggiorna versione» solo con una versione più nuova e ricarica la pagina', vOk); if (!vOk) console.log({ v0, box0, v1, aggVisto, ricaricata });
    // v32 (Mario 22/11 12:27 «Il numerino non farlo che scende… lascialo fisso in alto alla schermata principale», «farla più stretta», «L’albero fallo meglio… il castello… finestre… proiezioni»)
    {
      const c4 = await b.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' }); const u4 = await c4.newPage();
      u4.on('pageerror', (e) => { errs.push(e.message); console.log('ERRORE NELLA PAGINA: ' + e.message); });
      await u4.goto(B + 'dicembre/'); await u4.waitForTimeout(1200);
      const v = await u4.evaluate(async () => {
        const w = (ms) => new Promise((r) => setTimeout(r, ms)), n = document.getElementById('vnum');
        const su = n.getBoundingClientRect().top; scrollTo(0, 700); await w(300); const giu = n.getBoundingClientRect().top;
        document.querySelector('.tabbar button[data-t="giorni"]').click(); await w(400);
        const nascosto = getComputedStyle(n).display === 'none', fila = document.getElementById('daybar').getBoundingClientRect().height;
        document.querySelector('.tabbar button[data-t="piano"]').click(); await w(300);
        return { su, giu, nascosto, fila, fin: document.querySelectorAll('#castFin .fin-c').length, luci: document.querySelectorAll('#castLuci circle').length, filo: document.querySelectorAll('#filoAlbero g.hb').length, neve: document.querySelectorAll('#pjNeve path').length, clip: !!document.querySelector('.scene g[mask="url(#castM)"] .pj') };
      });
      const vOk2 = v.su < 60 && v.giu < -500 && v.nascosto && v.fila <= 50 && v.fin >= 10 && v.luci >= 60 && v.filo >= 25 && v.neve === 7 && v.clip;
      ok('Numero della versione solo in cima alla schermata principale (scorrendo va via, nelle altre schede non c’è); fila dei giorni stretta (≤ 50 px); testata con finestre del castello che si accendono, lucine sul castello e sull’albero, proiezioni solo sul castello', vOk2); if (!vOk2) console.log(v);
      await c4.close();
    }
    // v32 · PC (Mario 22/11 12:27 «per desktop… che occupa bene la pagina»): titolo a sinistra e indice a destra; «in breve» su 3 colonne (la regola dei 3 c’era, ma quella dei 2 veniva dopo e vinceva)
    {
      const c5 = await b.newContext({ viewport: { width: 1440, height: 900 }, serviceWorkers: 'block' }); const u5 = await c5.newPage();
      u5.on('pageerror', (e) => { errs.push(e.message); console.log('ERRORE NELLA PAGINA: ' + e.message); });
      await u5.goto(B + 'dicembre/'); await u5.waitForTimeout(1200);
      const pc = await u5.evaluate(() => { const h = document.querySelector('.hero h1').getBoundingClientRect(), g = document.querySelector('.hero .go').getBoundingClientRect();
        return { destra: g.left > h.right, inAlto: g.top < 260, colonne: getComputedStyle(document.querySelector('#breve .answer')).gridTemplateColumns.split(' ').length }; });
      const pcOk = pc.destra && pc.inAlto && pc.colonne === 3;
      ok('PC (1440 px): titolo a sinistra e indice a destra in alto, «in breve» su 3 colonne', pcOk); if (!pcOk) console.log(pc);
      await c5.close();
    }
    await c3.close();
  }
  // C18: la slitta passa da sola dopo 5 s (nel cielo, coi pacchi); con «riduci movimento» non parte; giovedì 17 col riquadro «Partite prima»
  {
    const mk = async (rm) => { const c = await b.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block', reducedMotion: rm }); const r = await c.newPage(); r.on('pageerror', (e) => { errs.push(e.message); console.log('ERRORE NELLA PAGINA: ' + e.message); }); await r.goto(B + 'dicembre/'); return [c, r]; };
    const [c4, r4] = await mk('no-preference'), [c5, r5] = await mk('reduce');
    await r4.waitForTimeout(5800);
    const parte = await r4.evaluate(() => { const s = document.getElementById('slitta'); return s.style.visibility === 'visible' && /translate/.test(s.getAttribute('transform') || ''); });
    const ferma = await r5.evaluate(() => document.getElementById('slitta').style.visibility === 'hidden' && !document.querySelector('#pacchi g'));
    const vista = await r4.evaluate(async () => {
      /* v33 · il castello è un’immagine (il disegno di Mario): conta come «davanti» solo dove il disegno non è trasparente; le proiezioni (g con maschera) si vedono solo sul castello */
      const ci = document.getElementById('castImg'), cu = document.getElementById('castUso'), im = new Image(); im.src = ci.getAttribute('href'); await im.decode();
      const cv = document.createElement('canvas'); cv.width = im.width; cv.height = im.height; const cx = cv.getContext('2d'); cx.drawImage(im, 0, 0);
      const alfa = (X, Y) => { const p = new DOMPoint(X, Y).matrixTransform(cu.getScreenCTM().inverse()), px = Math.floor((p.x - +ci.getAttribute('x')) / +ci.getAttribute('width') * im.width), py = Math.floor((p.y - +ci.getAttribute('y')) / +ci.getAttribute('height') * im.height);
        return px < 0 || py < 0 || px >= im.width || py >= im.height ? 0 : cx.getImageData(px, py, 1, 1).data[3]; };
      const n = window.slittaProva(.8, -1, 66), s = document.getElementById('slitta').getBoundingClientRect(), c = document.querySelector('.scene').getBoundingClientRect(), x = s.left + s.width / 2, y = s.top + s.height / 2;
      /* v33 (Mario 13:37 «non lancia nessun regalo»): i pacchi c’erano ma di 6 px, scuri, e cadevano dietro il castello. Mario ~14:5x: misure diverse, più piccoli, in penombra: almeno 2,8 px, nessuno oltre 8 px, almeno due misure diverse, colore del pacco spento, e niente disegno davanti (solo nebbia, vignetta e la slitta che li sta lanciando) */
      document.head.insertAdjacentHTML('beforeend', '<style id="provaPE">.scene,.scene *{pointer-events:auto!important}</style>');
      const pk = [...document.querySelectorAll('#pacchi > g')].map((g) => { const b = g.children[1].getBoundingClientRect(), px = b.left + b.width / 2, py = b.top + b.height / 2, sopra = [];
        for (const e of document.elementsFromPoint(px, py)) { if (g.contains(e)) break; sopra.push(e); }
        const col = (g.children[1].style.fill.match(/\d+/g) || [255, 255, 255]).map(Number);
        return { largo: b.width, misura: g.children[1].getAttribute('width') + 'x' + g.children[1].getAttribute('height'), spento: Math.max(...col) <= 176, coperto: sopra.some((e) => e.id !== 'vigna' && !e.closest('#slitta') && !e.closest('g[mask]') && !(e === cu && alfa(px, py) < 40) && !/nebbia|cglow/.test(e.getAttribute('fill') || '')) }; });
      const sc0 = document.querySelector('.scene').getBoundingClientRect(), kk = sc0.height / 290, gx = sc0.left + sc0.width / 2 + (514 - 400) * kk, gy = sc0.top + 60 * kk;
      const davanti = document.elementsFromPoint(gx, gy).find((e) => !e.closest('#castLuci,#castFin,#castDeco,#pacchi,#polvere,#slitta,g[mask]') && e.id !== 'vigna' && !/nebbia|cglow/.test(e.getAttribute('fill') || ''));
      const castello = { disegno: /^data:image\/webp;base64,/.test(ci.getAttribute('href') || ''), largo: Math.round(cu.getBBox().width), guglia: davanti === cu && alfa(gx, gy) > 200, davanti: davanti ? davanti.tagName + '.' + (davanti.getAttribute('class') || davanti.id || '') : '-', alfa: alfa(gx, gy) };
      document.getElementById('provaPE').remove();
      return { castello, n, visti: pk.filter((q) => q.largo >= 2.8 && q.spento && !q.coperto).length, diversi: new Set(pk.map((q) => q.misura)).size >= Math.min(2, pk.length), grandi: pk.filter((q) => q.largo > 8).length, dentro: x > c.left && x < c.right && y > c.top && y < c.top + c.height * .6, largo: Math.round(s.width) }; });
    ok('Slitta: parte da sola, passa nel cielo della testata (' + vista.largo + ' px) coi pacchi che cadono (' + vista.n + ', visibili ' + vista.visti + ': almeno 2,8 px, colori spenti, non dietro il castello; misure diverse ' + vista.diversi + ', troppo grandi ' + vista.grandi + '); castello dal disegno di Mario ' + JSON.stringify(vista.castello) + '; con «riduci movimento» resta ferma', parte && ferma && vista.n >= 2 && vista.visti === vista.n && vista.diversi && vista.grandi === 0 && vista.castello.disegno && vista.castello.largo >= 170 && vista.castello.largo <= 230 && vista.castello.guglia && vista.dentro && vista.largo > 60 && vista.largo < 260);
    const gio = await r4.evaluate(() => { const p = document.getElementById('p-gio'), c = p && p.querySelector('.callout-presto'); return { c: !!c && /Partite prima/.test(c.textContent) && /2 ore e mezza/.test(c.textContent), t: !!p && /Ultimo treno sicuro:<\/b> (8:47 da Val d'Europe|8:44 da Chessy)/.test(p.innerHTML) }; });
    ok('Giovedì 17: riquadro «Partite prima» in cima e ultimo treno sicuro 8:47 (8:44 da Chessy)', gio.c && gio.t);
    // v34 (Mario 22/11 16:29 «all'inizio flickerano alcune luci»): nella testata nessuna animazione con ritardo positivo (partirebbe dopo, dallo stato fermo: lampo all'apertura), tranne le finestre che si accendono una a una e le proiezioni (ferme a opacità 0 fino a 4 s)
    const lampi = await r4.evaluate(() => [...document.querySelectorAll('.hero *')].filter((e) => { const st = getComputedStyle(e); return st.animationName !== 'none' && st.animationDelay.split(',').some((d) => parseFloat(d) > 0) && !e.closest('.fin-c,.pj'); }).map((e) => e.tagName + '.' + (e.getAttribute('class') || '')).slice(0, 5));
    ok('Testata e ghirlanda: nessuna luce parte in ritardo dallo stato fermo (niente lampi all’apertura) ' + JSON.stringify(lampi), lampi.length === 0);
    // v34 (Mario 22/11 16:29 «Ti mando un albero… lo devi colorare e addobbare», «La Torre Eiffel è fatta male dietro»): albero = disegno di Mario e Torre coi piani, e si VEDONO (elementFromPoint), non solo ci sono
    const at = await r4.evaluate(() => { document.head.insertAdjacentHTML('beforeend', '<style id="provaPE2">.scene,.scene *{pointer-events:auto!important}</style>');
      const sv = document.querySelector('svg.scene'), m = sv.getScreenCTM(), P = (x, y) => { const q = sv.createSVGPoint(); q.x = x; q.y = y; const r = q.matrixTransform(m); return [r.x, r.y]; };
      // il primo disegno della scena in quel punto (salta il velo sfumato «vigna», le proiezioni con la maschera del castello e i bagliori, che lasciano vedere sotto; le scritte della testata sopra la scena sono volute)
      const primo = (a, b) => document.elementsFromPoint(a, b).find((e) => sv.contains(e) && e !== sv && !e.closest('g[mask]') && e.id !== 'vigna' && !(e.classList && e.classList.contains('vigna')) && !/nebbia|glow|pool|rosaG/.test(e.getAttribute('fill') || ''));
      const chi = (x, y) => { const [a, b] = P(x, y), e = primo(a, b), g = e && e.closest('#albImg,#filoAlbero,#firlights,#regaliAlbero,#torre,#towerlights'); return g ? g.id : (e ? e.tagName + '.' + (e.getAttribute('class') || e.id || '') : '-'); };
      const ai = document.getElementById('albImg'), bb = ai ? ai.getBBox() : { width: 0, height: 0 };
      const luci = [...document.querySelectorAll('#filoAlbero g.hb circle:nth-child(2)')].filter((c) => { const r = c.getBoundingClientRect(), e = primo(r.left + r.width / 2, r.top + r.height / 2); return e && e.closest('#filoAlbero'); }).length;
      const r = { disegno: !!ai && /^data:image\/webp;base64,/.test(ai.getAttribute('href') || ''), largo: Math.round(bb.width), alto: Math.round(bb.height), luci, centro: chi(345, 215), tronco: chi(345, 258), piano2: chi(262, 183.7), cima: chi(262, 120), scintillio: document.querySelectorAll('#towerlights circle.tw').length };
      document.getElementById('provaPE2').remove(); return r; });
    ok('Testata: albero = disegno di Mario colorato (' + at.largo + '×' + at.alto + ') e si vede (centro ' + at.centro + ', piede ' + at.tronco + '), lucine del festone visibili ' + at.luci + '; Torre Eiffel coi piani: 2° piano sopra le casette (' + at.piano2 + '), cima (' + at.cima + '), scintillio ' + at.scintillio,
      at.disegno && at.largo >= 85 && at.largo <= 115 && at.alto >= 125 && at.alto <= 160 && at.luci >= 35 && /albImg|filoAlbero|firlights/.test(at.centro) && /albImg|regaliAlbero/.test(at.tronco) && /torre/.test(at.piano2) && /torre/.test(at.cima) && at.scintillio >= 50);
    // C19 (Mario 22/11 ~16:2x): la guida Disneyland di Mario nella schermata principale (tasto visibile) e in cima ai tre giorni Disney, coi giorni del viaggio nel link
    const dl = await r4.evaluate(() => { const a = document.getElementById('dlApp'), h = a ? a.getAttribute('href') : '', r = a ? a.getBoundingClientRect() : { height: 0 };
      const giorni = ['dom', 'lun', 'mar', 'mer', 'gio'].map((id) => { const l = document.querySelector('#p-' + id + ' .dlGiorno a'); return !!l && l.getAttribute('href') === h && l.target === '_blank'; });
      return { link: /^https:\/\/guida-disneyland-ynoy\.pages\.dev\/\?d=2026-12-14&n=3&a=2&p=t\.t\.t/.test(h), visto: r.height > 30 && a.target === '_blank', giorni }; });
    ok('Guida Disneyland: tasto nella schermata principale coi giorni del viaggio (14/12, 3 giorni, 2 persone) e riquadro solo nei giorni Disney ' + JSON.stringify(dl.giorni), dl.link && dl.visto && dl.giorni.join() === 'false,true,true,true,false');
    await c4.close(); await c5.close();
    // C20 (Mario 22/11 17:1x «togliere gli hotel per pulire un po'»): Nascondi con Annulla, spunte di «Pulisci l'elenco», resta dopo la ricarica, la scelta non si nasconde, il link porta i nascosti
    {
      const c6 = await b.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' }); const u6 = await c6.newPage();
      u6.on('pageerror', (e) => { errs.push(e.message); console.log('ERRORE NELLA PAGINA: ' + e.message); });
      await u6.goto(B + 'dicembre/'); await u6.waitForTimeout(1200);
      const n1 = await u6.evaluate(async () => { const w = (ms) => new Promise((r) => setTimeout(r, ms)), q = (x) => document.querySelector(x);
        const nD = () => document.querySelectorAll('#scD details.sc-o').length, nC = () => document.querySelectorAll('#hotelCards article').length, o = { d0: nD(), c0: nC() };
        q('#scD [data-nas="d-5"]').click(); await w(150); o.via = nD() === o.d0 - 1 && nC() === o.c0 - 1 && !q('#al-5'); o.toast = q('#nasToast').classList.contains('on');
        q('#nasToast button').click(); await w(150); o.annulla = nD() === o.d0 && !!q('#al-5');
        q('#scNas input[data-nas-k="d-7"]').click(); await w(150); o.spunta = !q('#scD details[data-k="d-7"]') && /1 nascosto/.test(q('#nasConta').textContent);
        const sc = q('#scNas input:disabled'); o.scelta = !!sc && !q('#scD [data-nas="' + sc.dataset.nasK + '"]') && !!q('#scD details[data-k="' + sc.dataset.nasK + '"]');
        const ip = q('#scNas input[data-nas-k^="n-"]'), kp = ip && ip.dataset.nasK; o.parigi0 = !!kp && !!q('#scN details[data-k="' + kp + '"]'); if (kp) { ip.click(); await w(150); } o.parigi = o.parigi0 && !q('#scN details[data-k="' + kp + '"]');
        return o; });
      await u6.reload(); await u6.waitForTimeout(1200);
      const n2 = await u6.evaluate(() => { const ls = localStorage.getItem('pdn-nascosti') || '', kp = (/"(n-[a-z]{2})"/.exec(ls) || [])[1]; return { resta: !document.querySelector('#scD details[data-k="d-7"]') && !!kp && !document.querySelector('#scN details[data-k="' + kp + '"]') && /2 nascosti/.test(document.querySelector('#nasConta').textContent), ls }; });
      const u7 = await c6.newPage(); await u7.goto(B + 'dicembre/?scelta=4n-8&nascosti=d-1,d-2'); await u7.waitForTimeout(1200);
      const n3 = await u7.evaluate(async () => { const b = document.querySelector('[data-nas-link="1"]'); if (!b) return { banner: false }; b.click(); await new Promise((r) => setTimeout(r, 150)); return { banner: true, via: !document.querySelector('#scD details[data-k="d-1"]') && !document.querySelector('#scD details[data-k="d-2"]') }; });
      ok('Alloggi: «Nascondi» toglie dagli elenchi, «Annulla» rimette, spunte di «Pulisci l’elenco» (anche Parigi), resta dopo la ricarica, la scelta non si nasconde, il link chiede e nasconde ' + JSON.stringify({ n1, n2, n3 }),
        n1.via && n1.toast && n1.annulla && n1.spunta && n1.scelta && n1.parigi && n2.resta && n3.banner && n3.via);
      const n4 = await u7.evaluate(() => { const q = (x) => document.querySelector(x), m = q('#scD details[data-k="d-23"] .xx-msg'), f = [...document.querySelectorAll('#filters button')].find((x) => /rosa/.test(x.textContent));
        if (f) f.click(); const ids = [...document.querySelectorAll('#hotelCards article')].map((x) => x.id).sort().join();
        return { box16: !!q('#scD details[data-k="d-16"] details.xx'), box23: !!m, altri: document.querySelectorAll('#scD details.xx').length, ora: !!m && /dimanche 13 décembre vers \d{1,2}h\d{2}/.test(m.textContent), copia: !!q('#scD details[data-k="d-23"] [data-copia]'), rosa: ids }; });
      ok('Alloggi n. 16 e 23: «📋 Tutto sul n.» solo lì, messaggio pronto con l’ora del piano, tasto Copia, filtro «La vostra rosa» = n. 16 e 23 ' + JSON.stringify(n4), n4.box16 && n4.box23 && n4.altri === 2 && n4.ora && n4.copia && n4.rosa === 'al-16,al-23');
      await c6.close();
    }
    // C21 (Mario 22/11 17:56 «metti il tasto Rosa alloggi nella home e lì mi fai mettere la rosa»): tasto nella schermata principale che si vede e si tocca, solo la rosa nel passo 2,
    // spunte con Annulla, resta dopo la ricarica, vince su «Nascondi», il link la porta e la chiede, la rosa vuota resta vuota
    {
      const c8 = await b.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' }); const u8 = await c8.newPage();
      u8.on('pageerror', (e) => { errs.push(e.message); console.log('ERRORE NELLA PAGINA: ' + e.message); });
      const vede = () => { window.__w = (ms) => new Promise((r) => setTimeout(r, ms)); window.__vis = () => [...document.querySelectorAll('#scD details.sc-o')].filter((d) => d.getBoundingClientRect().height > 0).map((d) => d.dataset.k).sort().join(); };
      await u8.goto(B + 'dicembre/'); await u8.waitForTimeout(1200); await u8.evaluate(vede);
      const r1 = await u8.evaluate(async () => { const w = window.__w, vis = window.__vis, q = (x) => document.querySelector(x);
        const a = q('#roApp'); a.scrollIntoView({ block: 'center' }); await w(200); const ra = a.getBoundingClientRect();
        const o = { home: /Rosa alloggi/.test(a.textContent) && a.querySelectorAll('.ro-c').length === 2 && a.querySelector('.ro-n').textContent === '2' && !/scelti|toccate/.test(a.textContent), tocca: ra.height > 30 && (document.elementsFromPoint(ra.left + ra.width / 2, ra.top + ra.height / 2)[0] || document.body).closest('#roApp') === a };
        a.click(); await w(500); const sw = q('#scRosa .ro-sw'), rs = sw ? sw.getBoundingClientRect() : { top: -1, height: 0 };
        o.dormire = document.body.dataset.tab === 'dormire' && rs.height > 30 && rs.top >= 0 && rs.top < innerHeight; o.solo = vis(); o.spunte = !!q('#scRosaP details[open]');
        o.tipi = getComputedStyle(q('.tyswitch')).display === 'none';
        q('#scRosaP input[data-ro-k="5"]').click(); await w(150); o.piu = vis() === 'd-16,d-23,d-5' && q('#roApp .ro-n').textContent === '3' && !!q('#scRosaP details[open]');
        q('#nasToast button').click(); await w(150); o.annulla = vis() === 'd-16,d-23' && localStorage.getItem('pdn-rosa') === '[16,23]';
        q('[data-ro-f="0"]').click(); await w(150); o.tutti = vis().split(',').length > 20 && !q('#scRosaP details');
        q('#scD [data-nas="d-7"]').click(); await w(150); o.nascosto = !q('#scD details[data-k="d-7"]');
        q('[data-ro-f="1"]').click(); await w(150); const i7 = q('#scRosaP input[data-ro-k="7"]'); o.segnato = !!i7 && /nascosto/.test(i7.closest('label').textContent);
        i7.click(); await w(150);
        o.vince = vis() === 'd-16,d-23,d-7' && !q('#scD [data-nas="d-7"]') && /Togli/.test((q('#scD [data-ro-b="7"]') || {}).textContent || '') && !(localStorage.getItem('pdn-nascosti') || '').includes('d-7');
        return o; });
      await u8.reload(); await u8.waitForTimeout(1200); await u8.evaluate(vede);
      const r2 = await u8.evaluate(async () => { const w = window.__w, vis = window.__vis, q = (x) => document.querySelector(x), o = {};
        o.resta = localStorage.getItem('pdn-rosa') === '[7,16,23]' && q('#roApp .ro-n').textContent === '3';
        q('#roApp').click(); await w(400); o.solo = vis(); o.scheda = !!q('#al-7 .ro-s') && !q('#al-8 .ro-s');
        const p7 = q('#scNas input[data-nas-k="d-7"]'); o.pulisci = !!p7 && p7.disabled && p7.checked && /nella rosa/.test(p7.closest('label').textContent);
        Object.defineProperty(navigator, 'share', { value: undefined, configurable: true }); let u = '';
        if (navigator.clipboard) Object.defineProperty(navigator.clipboard, 'writeText', { value: (t) => { u = t; return Promise.resolve(); }, configurable: true });
        q('#scShare').click(); await w(150); u = u || q('#scShareOk').textContent; o.link = /[?&]rosa=7,16,23(&|$)/.test(u);
        return o; });
      const u9 = await c8.newPage(); u9.on('pageerror', (e) => { errs.push(e.message); console.log('ERRORE NELLA PAGINA: ' + e.message); });
      await u9.goto(B + 'dicembre/?scelta=4n-8&rosa=5,12'); await u9.waitForTimeout(1200); await u9.evaluate(vede);
      const r3 = await u9.evaluate(async () => { const w = window.__w, vis = window.__vis, q = (x) => document.querySelector(x), o = {};
        o.avviso = /📩/.test(q('#roApp').textContent); q('#roApp').click(); await w(400);
        const si = q('[data-ro-link="1"]'); o.chiede = !!si && si.getBoundingClientRect().height > 20 && localStorage.getItem('pdn-rosa') === '[7,16,23]';
        if (si) { si.click(); await w(150); } o.messa = localStorage.getItem('pdn-rosa') === '[5,12]' && vis() === 'd-12,d-5' && !q('[data-ro-link]') && !/📩/.test(q('#roApp').textContent);
        q('#scRosaP input[data-ro-k="5"]').click(); await w(100); q('#scRosaP input[data-ro-k="12"]').click(); await w(150);
        o.vuota = localStorage.getItem('pdn-rosa') === '[]' && /Da scegliere/.test(q('#roApp').textContent) && vis() === '' && !!q('#scRosa .ro-vuota');
        return o; });
      await u9.goto(B + 'dicembre/'); await u9.waitForTimeout(1200);
      const r4 = await u9.evaluate(() => /Da scegliere/.test(document.querySelector('#roApp').textContent));
      ok('Rosa alloggi: tasto nella schermata principale (si vede e si tocca), solo la rosa nel passo 2, spunte con Annulla, resta dopo la ricarica, vince su «Nascondi», link con la rosa che chiede, vuota resta vuota ' + JSON.stringify({ r1, r2, r3, r4 }),
        r1.home && r1.tocca && r1.dormire && r1.solo === 'd-16,d-23' && r1.spunte && r1.tipi && r1.piu && r1.annulla && r1.tutti && r1.nascosto && r1.segnato && r1.vince
        && r2.resta && r2.solo === 'd-16,d-23,d-7' && r2.scheda && r2.pulisci && r2.link && r3.avviso && r3.chiede && r3.messa && r3.vuota && r4);
      await c8.close();
    }
  }
  await b.close(); server.kill(); fs.unlinkSync(path.join(DIR, 'parigi-in-tasca')); fs.rmdirSync(DIR);
  process.exit(falsi ? 1 : 0);
})().catch((e) => { console.error(e); server.kill(); process.exit(1); });
