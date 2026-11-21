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
  const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  await p.goto(B); await sw(p); await p.reload(); await p.waitForTimeout(800);
  const nov = await p.title();
  await p.goto(B + 'dicembre/'); await sw(p); await p.reload(); await p.waitForTimeout(1200);
  ok('dicembre: titolo giusto', (await p.title()) === 'Parigi e Disney a Natale');
  ok('dicembre: service worker suo', await p.evaluate(() => !!navigator.serviceWorker.controller && navigator.serviceWorker.controller.scriptURL.endsWith('/dicembre/sw.js')));
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
  ok('senza rete: 7 barre dei costi', (await p.$$('#bars a.bar-row')).length === 7);
  await ctx.close();
  // L'amico: apre solo dicembre
  const c2 = await b.newContext({ viewport: { width: 390, height: 844 } }); const q = await c2.newPage();
  q.on('pageerror', (e) => errs.push(e.message));
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
  const pesi = [...Array(15)].map((_, i) => path.join(__dirname, '..', 'dicembre', 'mappe', `al-${i + 1}.jpg`)).map((f) => (fs.existsSync(f) ? fs.statSync(f).size : 1e9));
  ok('mappe: 15 immagini sotto 100 KB', pesi.every((x) => x < 100 * 1024));
  const dove = await q.evaluate(async () => {
    const out = [];
    for (let n = 1; n <= 15; n++) {
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
  ok('Dov\'è: 15 schede con mappa, 3 distanze e Maps', male.length === 0); if (male.length) console.log(male);
  ok('Dov\'è: la barra dei costi apre la scheda già con la mappa', await q.evaluate(async () => {
    document.querySelector('#bars a.bar-row').click(); await new Promise((r) => setTimeout(r, 300));
    const id = document.querySelector('#bars a.bar-row').getAttribute('href');
    return !!document.querySelector(id + ' details.more[open] .dove .mappa img');
  }));
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
