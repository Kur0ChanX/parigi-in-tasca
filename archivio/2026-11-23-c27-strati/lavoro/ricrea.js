// C27 · quante volte gli strati grandi della testata vengono RICREATI (id nuovo) mentre la pagina gira; uso: node ricrea.js "<query>" [secondi]
const { chromium, devices } = require('playwright'); const { spawn } = require('child_process'); const fs = require('fs'), os = require('os'), path = require('path');
const DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'sito-')); fs.symlinkSync('/home/user/parigi-in-tasca', path.join(DIR, 'parigi-in-tasca'));
const PORTA = 8700 + Math.floor(Math.random() * 90); const server = spawn('python3', ['-m', 'http.server', String(PORTA), '--bind', '127.0.0.1'], { cwd: DIR, stdio: 'ignore' });
const Q = process.argv[2] || '', SEC = +(process.argv[3] || 24), FERMA = process.argv[4] || '';
(async () => { await new Promise(r => setTimeout(r, 800));
  const b = await chromium.launch(); const ctx = await b.newContext({ ...devices['Pixel 7'] }); const p = await ctx.newPage();
  const cdp = await ctx.newCDPSession(p);
  let t0 = 0, eventi = 0; const visti = new Set(), nuovi = []; let primo = true;
  cdp.on('LayerTree.layerTreeDidChange', e => { if (!e.layers || !t0) return; eventi++; const t = (Date.now() - t0) / 1000;
    for (const l of e.layers) { if (!l.drawsContent) continue; const area = l.width * l.height; if (area < 15000) continue;
      if (!visti.has(l.layerId)) { visti.add(l.layerId); if (t > 3) nuovi.push([t.toFixed(1), Math.round(l.width) + 'x' + Math.round(l.height)]); } } });
  await p.goto(`http://localhost:${PORTA}/parigi-in-tasca/dicembre/parigi-disney-natale.html${Q}`);
  await p.evaluate(() => document.querySelector('.scene').scrollIntoView({ block: 'end' })); await p.waitForTimeout(1500); if (/tela=si/.test(Q)) await p.waitForFunction(() => document.querySelectorAll('.lt-off').length > 100, null, { timeout: 15000 }); await p.waitForTimeout(800);
  const resto = await p.evaluate(() => { const c = {}; for (const a of document.getAnimations()) { const e = a.effect && a.effect.target; if (!e) continue; const k = (e.getAttribute('class') || e.tagName).split(' ')[0] + (e.closest('#slitta,#zero') ? '@slitta' : e.closest('.par') ? '' : ''); c[k] = (c[k] || 0) + 1; } return c; });
  if (FERMA) await p.evaluate(sel => document.getAnimations().forEach(a => { const e = a.effect && a.effect.target; if (sel === 'resto' || (e && e.matches(sel))) a.cancel(); }), FERMA); t0 = Date.now(); await cdp.send('DOM.enable'); await cdp.send('DOM.getDocument', { depth: -1 }); t0 = Date.now(); await cdp.send('LayerTree.enable');
  const slitta = []; for (let i = 0; i < SEC * 2; i++) { await p.waitForTimeout(500); slitta.push(await p.evaluate(() => getComputedStyle(document.getElementById('slitta')).visibility === 'visible' ? 1 : 0)); }
  const vola = slitta.indexOf(1) >= 0 ? [slitta.indexOf(1) / 2, (slitta.lastIndexOf(1) + 1) / 2] : null;
  console.log(JSON.stringify({ modo: (Q || 'normale') + (FERMA ? ' + fermo: ' + FERMA : ''), animazioni: Object.entries(resto).sort((a,c)=>c[1]-a[1]).slice(0,10).map(([k,v])=>v+' '+k).join(', '), eventi, stratiGrandiVisti: visti.size, ricreatiDopo3s: nuovi.length, slittaVolaSec: vola, primi: nuovi.slice(0, 12) }));
  await b.close(); server.kill(); })();
