// C27 · la slitta spostata lungo tutto il passaggio (slittaProva): quanti strati grandi nuovi? uso: node spazza.js "<query>" [selettore da fermare]
const { chromium, devices } = require('playwright'); const { spawn } = require('child_process'); const fs = require('fs'), os = require('os'), path = require('path');
const DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'sito-')); fs.symlinkSync('/home/user/parigi-in-tasca', path.join(DIR, 'parigi-in-tasca'));
const PORTA = 8700 + Math.floor(Math.random() * 90); const server = spawn('python3', ['-m', 'http.server', String(PORTA), '--bind', '127.0.0.1'], { cwd: DIR, stdio: 'ignore' });
(async () => { await new Promise(r => setTimeout(r, 800)); const Q = process.argv[2] || '', SEL = process.argv[3] || '';
  const b = await chromium.launch(); const ctx = await b.newContext({ viewport: { width: 412, height: 839 }, deviceScaleFactor: 2.625, isMobile: true, hasTouch: true, serviceWorkers: 'block' }); const p = await ctx.newPage();
  await p.goto(`http://localhost:${PORTA}/parigi-in-tasca/dicembre/${Q}`); await p.waitForTimeout(1500);
  if (SEL) await p.evaluate(sel => document.getAnimations().forEach(a => { const e = a.effect && a.effect.target; if (e && e.matches(sel)) a.cancel(); }), SEL);
  const prima = await p.evaluate(() => { const sl = document.getElementById('slitta'); return document.getAnimations().filter(a => { const e = a.effect && a.effect.target; return e && a.playState === 'running' && e.closest('svg.scene') && (e.compareDocumentPosition(sl) & Node.DOCUMENT_POSITION_FOLLOWING); }).length; });
  const cdp = await ctx.newCDPSession(p); let lay = null; cdp.on('LayerTree.layerTreeDidChange', e => { if (e.layers) lay = e.layers; });
  await p.evaluate(() => document.querySelector('.scene').scrollIntoView({ block: 'end' })); await p.waitForTimeout(300); await cdp.send('LayerTree.enable');
  const visti = new Set(); let nuovi = 0, primo = true;
  for (const [d, y0] of [[-1, 70], [1, 62], [-1, 78]]) for (let u = 0; u <= 1.0001; u += .04) {
    await p.evaluate(([u, d, y0]) => window.slittaProva(u, d, y0), [u, d, y0]); await p.waitForTimeout(120);
    for (const l of lay || []) { if (!l.drawsContent || l.width * l.height < 15000) continue; if (!visti.has(l.layerId)) { visti.add(l.layerId); if (!primo) nuovi++; } } primo = false; }
  console.log(JSON.stringify({ modo: (Q || 'normale') + (SEL ? ' + fermo ' + SEL : ''), animazioniPrimaDellaSlitta: prima, stratiGrandiNuovi: nuovi }));
  await b.close(); server.kill(); })();
