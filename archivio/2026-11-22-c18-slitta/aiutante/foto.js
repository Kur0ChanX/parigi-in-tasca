// Foto della slitta ferma in 3 momenti, nelle due tavolozze, più il ritaglio 3× della slitta.
// Uso: node foto.js [seme] [dir]
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const DIR = __dirname, OUT = path.join(DIR, 'foto');
fs.mkdirSync(OUT, { recursive: true });
const SEME = +(process.argv[2] || 7), VERSO = +(process.argv[3] || -1);
const MOMENTI = VERSO < 0 ? [['1-entra', .3], ['2-luna', 'luna'], ['3-esce', .8]] : [['1-entra', .22], ['2-luna', 'luna'], ['3-esce', .72]];
(async () => {
  const browser = await chromium.launch();
  const errori = [];
  for (const pal of ['blu', 'vino']) {
    for (const [dsf, ritaglio] of [[2, false], [3, true]]) {
      const ctx = await browser.newContext({ viewport: { width: 412, height: 915 }, deviceScaleFactor: dsf });
      const page = await ctx.newPage();
      page.on('pageerror', e => errori.push(pal + ': ' + e.message));
      page.on('console', m => { if (m.type() === 'error') errori.push(pal + ' console: ' + m.text()); });
      await page.goto('file://' + path.join(DIR, 'prova.html') + '?foto' + (pal === 'vino' ? '&vino' : ''), { waitUntil: 'load', timeout: 20000 }).catch(e => errori.push('goto ' + e.message));
      await page.waitForTimeout(400);
      const scena = page.locator('svg.scene');
      await scena.scrollIntoViewIfNeeded();
      const suf = VERSO < 0 ? '' : '-dx';
      for (const [nome, f] of ritaglio ? [['2-luna', 'luna']] : MOMENTI) {
        await page.evaluate(([f, s, d]) => window.slVai({ dir: d, seme: s, ferma: f }), [f, SEME, VERSO]);
        await page.waitForTimeout(150);
        if (!ritaglio) { await scena.screenshot({ path: path.join(OUT, `${pal}-${nome}${suf}.png`) }); continue; }
        const b = await page.evaluate(() => { const r = document.querySelector('#slitta .sl-volo').getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }; });
        const clip = { x: Math.max(0, b.x - 6), y: b.y - 6, width: Math.min(412 - Math.max(0, b.x - 6), b.width + 12), height: b.height + 12 };
        await page.screenshot({ path: path.join(OUT, `${pal}-ritaglio-3x${suf}.png`), clip });
      }
      await ctx.close();
    }
  }
  await browser.close();
  console.log(errori.length ? errori.join('\n') : 'nessun errore nella pagina');
})();
