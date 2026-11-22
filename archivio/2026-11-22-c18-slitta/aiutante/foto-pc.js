// Foto sul PC: 1440×900 e 1920×800 (cielo tagliato in alto), giro verso sinistra fermo sulla luna e a metà.
const { chromium } = require('playwright');
const path = require('path');
const DIR = __dirname;
(async () => {
  const browser = await chromium.launch();
  for (const [w, h] of [[1440, 900], [1920, 800]]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    await page.goto('file://' + path.join(DIR, 'prova.html') + '?foto', { waitUntil: 'load' });
    const sc = page.locator('svg.scene'); await sc.scrollIntoViewIfNeeded();
    for (const f of ['luna', .45]) {
      const r = await page.evaluate(f => { const p = window.slVai({ dir: -1, seme: 11, ferma: f }); const b = document.querySelector('#slitta .sl-volo').getBoundingClientRect(), s = document.querySelector('svg.scene').getBoundingClientRect(); return [Math.round(b.top - s.top), Math.round(b.height), Math.round(s.height)]; }, f);
      console.log(w + 'x' + h, f, 'cima slitta dentro la scena (px):', r[0], 'alta', r[1], 'scena', r[2]);
      await sc.screenshot({ path: path.join(DIR, 'foto', `pc-${w}-${f === 'luna' ? 'luna' : 'meta'}.png`) });
    }
    await ctx.close();
  }
  await browser.close();
})();
