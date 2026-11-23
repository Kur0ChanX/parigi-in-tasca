// conta gli strati (layer) della pagina di dicembre col telefono di prova; uso: node strati.js [file.html]
const { chromium, devices } = require('playwright'); const { spawn } = require('child_process'); const fs = require('fs'), os = require('os'), path = require('path');
const DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'sito-')); fs.symlinkSync('/home/user/parigi-in-tasca', path.join(DIR, 'parigi-in-tasca'));
const PORTA = 8700 + Math.floor(Math.random() * 90); const server = spawn('python3', ['-m', 'http.server', String(PORTA), '--bind', '127.0.0.1'], { cwd: DIR, stdio: 'ignore' });
(async () => { await new Promise(r => setTimeout(r, 800));
  const b = await chromium.launch(); const ctx = await b.newContext({ ...devices['Pixel 7'] }); const p = await ctx.newPage();
  const cdp = await ctx.newCDPSession(p); let last = null, ev = 0; cdp.on('LayerTree.layerTreeDidChange', e => { ev++; if (e.layers) last = e.layers; });
  await p.goto(`http://localhost:${PORTA}/parigi-in-tasca/dicembre/${process.argv[2] || 'parigi-disney-natale.html'}`);
  await p.evaluate(() => document.querySelector('.scene').scrollIntoView({ block: 'end' })); await p.waitForTimeout(1500); await cdp.send('DOM.enable'); await cdp.send('DOM.getDocument', { depth: -1 }); await cdp.send('LayerTree.enable'); await p.evaluate(() => scrollBy(0, 1)); await p.waitForTimeout(2000); console.log('eventi', ev);
  const L = last || []; const dpr = 2.625; let px = 0; const tipi = {}, mem = {}, big = [];
  for (const l of L) { if (!l.drawsContent) continue; px += l.width * l.height * dpr * dpr;
    let nome = '(senza nodo)'; if (l.backendNodeId) { try { const d = await cdp.send('DOM.describeNode', { backendNodeId: l.backendNodeId }); const n = d.node; const at = n.attributes || []; const ci = at.indexOf('class'), ii = at.indexOf('id'); nome = n.nodeName.toLowerCase() + (ii >= 0 ? '#' + at[ii + 1] : '') + (ci >= 0 ? '.' + at[ci + 1].split(' ')[0] : ''); } catch (e) {} }
    tipi[nome] = (tipi[nome] || 0) + 1; mem[nome] = (mem[nome] || 0) + l.width * l.height * dpr * dpr * 4 / 1e6; big.push([Math.round(l.width) + 'x' + Math.round(l.height), nome]); }
  console.log('strati:', L.length, 'che disegnano:', L.filter(l => l.drawsContent).length, 'memoria stimata MB:', Math.round(px * 4 / 1e6));
  console.log(Object.entries(tipi).sort((a, c) => c[1] - a[1]).slice(0, 14).map(([k, v]) => v + ' ' + k).join(' | '));
  console.log('MB per tipo:', Object.entries(mem).sort((a, c) => c[1] - a[1]).slice(0, 10).map(([k, v]) => Math.round(v) + ' ' + k + ' (' + tipi[k] + ')').join(' | ')); big.sort((a, c) => { const ar = x => x[0].split('x').reduce((m, n) => m * n, 1); return ar(c) - ar(a); }); console.log('più grandi:', big.slice(0, 8).map(x => x.join(' ')).join(' | ')); await b.close(); server.kill(); })();
