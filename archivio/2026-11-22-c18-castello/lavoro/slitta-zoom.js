// Uso: node slitta-zoom.js <uscita-prefisso> [t1,t2,…]  — la slitta ferma a metà cielo (PC 1440, 3×), una foto ritagliata per ogni istante t (pose diverse di renne e zampe)
const { chromium } = require('playwright'); const { spawn } = require('child_process');
const fs = require('fs'), os = require('os'), path = require('path');
const DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'sito-')); fs.symlinkSync('/home/user/parigi-in-tasca', path.join(DIR, 'parigi-in-tasca'));
const PORTA = 8900 + Math.floor(Math.random() * 90);
const server = spawn('python3', ['-m', 'http.server', String(PORTA), '--bind', '127.0.0.1'], { cwd: DIR, stdio: 'ignore' });
const out = process.argv[2], TT = (process.argv[3] || '0,0.13,0.26').split(',').map(Number);
(async () => {
  await new Promise(r => setTimeout(r, 800));
  const b = await chromium.launch(); const c = await b.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 3, serviceWorkers: 'block' });
  const p = await c.newPage(); p.on('pageerror', e => console.log('ERRORE: ' + e.message));
  await p.goto(`http://localhost:${PORTA}/parigi-in-tasca/dicembre/parigi-disney-natale.html`); await p.waitForTimeout(2000);
  await p.evaluate((u) => { window.slittaProva(u, -1, 66); document.querySelectorAll('.scene *').forEach(e => { e.style.animationPlayState = 'paused'; }); }, +(process.env.U || .75));
  for (const t of TT) {
    const r = await p.evaluate((t) => { if (window.renneProva) window.renneProva(t); const z = document.getElementById('zero'), g = (z || document.getElementById('slitta')), s = document.getElementById('slitta').getBoundingClientRect(), q = z ? z.getBoundingClientRect() : s;
      const x0 = Math.min(s.left, q.left), x1 = Math.max(s.right, q.right); return { x: x0 - 8, y: Math.min(s.top, q.top) - 8, width: x1 - x0 + 16, height: Math.max(s.bottom, q.bottom) - Math.min(s.top, q.top) + 16 }; }, t);
    await p.screenshot({ path: `${out}-${t}.png`, clip: r }); console.log(out + '-' + t, JSON.stringify(r));
  }
  await b.close(); server.kill();
})();
