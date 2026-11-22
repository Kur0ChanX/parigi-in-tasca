// Uso: node copertura.js  → per x da 380 a 620 (unità del disegno della testata) la y più alta coperta dalle casette (#chalets), a riposo
const { chromium } = require('playwright'); const { spawn } = require('child_process');
const fs = require('fs'), os = require('os'), path = require('path');
const DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'sito-')); fs.symlinkSync('/home/user/parigi-in-tasca', path.join(DIR, 'parigi-in-tasca'));
const PORTA = 8900 + Math.floor(Math.random() * 90);
const server = spawn('python3', ['-m', 'http.server', String(PORTA), '--bind', '127.0.0.1'], { cwd: DIR, stdio: 'ignore' });
(async () => {
  await new Promise(r => setTimeout(r, 800));
  const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 }, serviceWorkers: 'block' })).newPage();
  await p.goto(`http://localhost:${PORTA}/parigi-in-tasca/dicembre/parigi-disney-natale.html`); await p.waitForTimeout(1500);
  const r = await p.evaluate(() => { const ch = document.getElementById('chalets'), res = [];
    for (let x = 380; x <= 620; x += 10) { let top = null; for (let y = 120; y <= 280; y += 1) { const pt = ch.ownerSVGElement.createSVGPoint(); pt.x = x; pt.y = y; const q = pt.matrixTransform(ch.getScreenCTM());
        const bb = ch.getBBox(); const els = document.elementsFromPoint(q.x, q.y); if (els.some(e => ch.contains(e))) { top = y; break; } } res.push([x, top]); }
    return res; });
  console.log(JSON.stringify(r)); await b.close(); server.kill();
})();
