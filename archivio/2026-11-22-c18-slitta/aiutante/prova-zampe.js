// Giro vero (non fermo): foto 3× davanti alla luna, per vedere se la copia in controluce ha le zampe allineate (niente zampe doppie).
const { chromium } = require('playwright');
const path = require('path');
const DIR = __dirname;
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 412, height: 915 }, deviceScaleFactor: 3 });
  const page = await ctx.newPage();
  await page.goto('file://' + path.join(DIR, 'prova.html') + '?foto', { waitUntil: 'load' });
  await page.locator('svg.scene').scrollIntoViewIfNeeded();
  const p = await page.evaluate(() => { window.__p = window.slVai({ dir: -1, seme: 7, durata: 10 }); return window.__p.tLuna; });
  await page.waitForFunction(t => window.__p.t > t - .05, p, { timeout: 15000, polling: 16 });
  for (let i = 0; i < 2; i++) {
    const b = await page.evaluate(() => { const r = document.querySelector('svg.scene').getBoundingClientRect(), sc = Math.max(r.width / 800, r.height / 290), ox = r.left + (r.width - 800 * sc) / 2; return { x: ox + 175 * sc, y: r.top + 25 * sc, width: 150 * sc, height: 90 * sc }; });
    await page.screenshot({ path: path.join(DIR, 'vedi', `zampe-luna-${i}.png`), clip: b });
    await page.waitForTimeout(250);
  }
  await browser.close();
})();
