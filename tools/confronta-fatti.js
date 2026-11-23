#!/usr/bin/env node
// Confronta i fatti di due versioni della guida (C28, Mario 23/11: pulizia dei testi «senza cancellare informazioni»).
// Apre le due pagine nel browser (tutte le schede, i giorni e le tendine aperte), raccoglie numeri, orari, prezzi,
// percentuali e link, e dice quali c'erano PRIMA e DOPO non ci sono più (o ci sono meno volte).
//
//   node tools/confronta-fatti.js <prima.html> <dopo.html>
//   node tools/confronta-fatti.js --da <commit> [dopo.html]   prima = la pagina com'era in quel commit
// Uscita 0 = nessun fatto perso, 1 = fatti persi (uno per riga, con la frase di prima), 2 = errore d'uso.
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PAGINA = 'dicembre/parigi-disney-natale.html';

async function fatti(browser, file) {
  const p = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await p.route(/^https?:/, (r) => r.abort());
  await p.goto('file://' + path.resolve(file));
  await p.waitForTimeout(1200);
  return p.evaluate(() => {
    document.querySelectorAll('details').forEach((d) => { d.open = true; });
    const t = (document.querySelector('main') || document.body).textContent.replace(/\s+/g, ' ');
    const href = [...document.querySelectorAll('main a[href^="http"]')].map((a) => a.href);
    const re = /\d+(?:[.,:]\d+)*\s?(?:€|%|km|min|m\b|ore|°)?/g;
    const out = [];
    let m;
    while ((m = re.exec(t))) out.push([m[0].replace(/\s/g, ''), t.slice(Math.max(0, m.index - 60), m.index + 40)]);
    href.forEach((h) => out.push([h, 'link']));
    return out;
  });
}

(async () => {
  const a = process.argv.slice(2);
  let prima, dopo, tmp;
  if (a[0] === '--da' && a[1]) {
    tmp = path.join(os.tmpdir(), 'fatti-prima-' + process.pid + '.html');
    fs.writeFileSync(tmp, execFileSync('git', ['show', a[1] + ':' + PAGINA]));
    prima = tmp; dopo = a[2] || PAGINA;
  } else if (a.length === 2) { [prima, dopo] = a; } else {
    console.error('uso: node tools/confronta-fatti.js <prima.html> <dopo.html> | --da <commit> [dopo.html]');
    process.exit(2);
  }
  const b = await chromium.launch();
  const [P, D] = [await fatti(b, prima), await fatti(b, dopo)];
  await b.close();
  if (tmp) fs.unlinkSync(tmp);
  const conta = (L) => L.reduce((m, [k]) => m.set(k, (m.get(k) || 0) + 1), new Map());
  const cp = conta(P), cd = conta(D), persi = [];
  for (const [k, n] of cp) if ((cd.get(k) || 0) < n) persi.push([k, n, cd.get(k) || 0, (P.find((x) => x[0] === k) || [])[1]]);
  if (!persi.length) { console.log(`✅ nessun fatto perso (${P.length} prima, ${D.length} dopo)`); process.exit(0); }
  persi.forEach(([k, n, m, f]) => console.log(`❌ «${k}»: ${n} → ${m} · …${f}…`));
  process.exit(1);
})();
