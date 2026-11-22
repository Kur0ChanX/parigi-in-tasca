// Prova dal vivo: un giro vero (zampe che si muovono, regali che cadono), poi sparisce; «riduci movimento»; pausa a scheda nascosta.
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const DIR = __dirname, OUT = path.join(DIR, 'foto', 'vivo');
fs.mkdirSync(OUT, { recursive: true });
const URL = 'file://' + path.join(DIR, 'prova.html');
(async () => {
  const browser = await chromium.launch();
  const esito = [];
  const ok = (cond, msg) => esito.push((cond ? 'OK   ' : 'NO   ') + msg);
  /* 1. partenza automatica dopo ~6 s, giro intero, poi nascosta */
  {
    const ctx = await browser.newContext({ viewport: { width: 412, height: 915 }, deviceScaleFactor: 2 });
    const page = await ctx.newPage();
    const err = []; page.on('pageerror', e => err.push(e.message));
    await page.goto(URL, { waitUntil: 'load' });
    await page.locator('svg.scene').scrollIntoViewIfNeeded();
    const on = () => page.evaluate(() => document.getElementById('slitta').classList.contains('sl-on'));
    await page.waitForTimeout(4500); ok(!(await on()), 'a 4,5 s dal caricamento non è ancora partita');
    await page.waitForTimeout(2500); ok(await on(), 'a 7 s dal caricamento è in volo');
    /* zampe: l'angolo cambia nel tempo */
    const ang = () => page.evaluate(() => getComputedStyle(document.querySelector('#slitta .sl-za')).transform);
    const a1 = await ang(); await page.waitForTimeout(200); const a2 = await ang();
    ok(a1 !== a2 && a1 !== 'none', 'le zampe si muovono (' + a1.slice(0, 24) + ' → ' + a2.slice(0, 24) + ')');
    for (let i = 0; i < 6; i++) { await page.locator('svg.scene').screenshot({ path: path.join(OUT, `giro-${i}.png`) }); await page.waitForTimeout(1600); }
    const vis = await page.evaluate(() => [...document.querySelectorAll('#slitta .sl-dono')].map(d => +d.getAttribute('opacity')));
    await page.waitForTimeout(6000);
    ok(!(await on()), 'dopo il giro la slitta sparisce (display:none)');
    const disp = await page.evaluate(() => getComputedStyle(document.getElementById('slitta')).display);
    ok(disp === 'none', 'display a riposo: ' + disp);
    const pe = await page.evaluate(() => getComputedStyle(document.getElementById('slitta')).pointerEvents);
    ok(pe === 'none', 'pointer-events: ' + pe);
    ok(err.length === 0, 'nessun errore JS ' + err.join(' | '));
    await ctx.close();
  }
  /* 2. riduci movimento: mai in volo */
  {
    const ctx = await browser.newContext({ viewport: { width: 412, height: 915 }, reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    await page.goto(URL, { waitUntil: 'load' });
    await page.waitForTimeout(7500);
    const r = await page.evaluate(() => [typeof window.slVai, getComputedStyle(document.getElementById('slitta')).display]);
    ok(r[0] === 'undefined' && r[1] === 'none', 'riduci movimento: niente slitta (' + r.join(', ') + ')');
    await ctx.close();
  }
  /* 3. scheda nascosta: il tempo del giro si ferma */
  {
    const ctx = await browser.newContext({ viewport: { width: 412, height: 915 } });
    const page = await ctx.newPage();
    await page.goto(URL, { waitUntil: 'load' });
    await page.locator('svg.scene').scrollIntoViewIfNeeded();
    const t1 = await page.evaluate(() => { const p = window.slVai({ dir: 1, seme: 5 }); window.__p = p; return p.t; });
    await page.waitForTimeout(1000);
    await page.evaluate(() => { Object.defineProperty(document, 'hidden', { configurable: true, get: () => true }); document.dispatchEvent(new Event('visibilitychange')); });
    const t2 = await page.evaluate(() => window.__p.t);
    await page.waitForTimeout(1500);
    const t3 = await page.evaluate(() => window.__p.t);
    ok(Math.abs(t3 - t2) < .01 && t2 > .5, `nascosta: tempo fermo (${t2.toFixed(2)} → ${t3.toFixed(2)})`);
    await page.evaluate(() => { Object.defineProperty(document, 'hidden', { configurable: true, get: () => false }); document.dispatchEvent(new Event('visibilitychange')); });
    await page.waitForTimeout(600);
    const t4 = await page.evaluate(() => window.__p.t);
    ok(t4 > t3 + .3, `di nuovo visibile: riparte (${t3.toFixed(2)} → ${t4.toFixed(2)})`);
    await ctx.close();
  }
  /* 4. testata fuori vista all'ora del giro: aspetta, poi parte quando torna in vista */
  {
    const ctx = await browser.newContext({ viewport: { width: 412, height: 915 } });
    const page = await ctx.newPage();
    await page.goto(URL, { waitUntil: 'load' });
    await page.evaluate(() => window.scrollTo(0, 3000));
    await page.waitForTimeout(7500);
    const a = await page.evaluate(() => document.getElementById('slitta').classList.contains('sl-on'));
    await page.locator('svg.scene').scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    const b = await page.evaluate(() => document.getElementById('slitta').classList.contains('sl-on'));
    ok(!a && b, `fuori vista aspetta (${a}), torna in vista e parte (${b})`);
    await ctx.close();
  }
  await browser.close();
  console.log(esito.join('\n'));
})();
