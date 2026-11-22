// Uso: node schermo.js <uscita.png> [larghezza] [altezza] [u slitta]  — foto della parte alta della pagina VERA (come la vede Mario, con tutto ciò che sta sopra la testata), 1×
const { chromium } = require('playwright'); const { spawn } = require('child_process');
const fs = require('fs'), os = require('os'), path = require('path');
const REPO = process.env.REPO || '/home/user/parigi-in-tasca';
const DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'sito-')); fs.symlinkSync(REPO, path.join(DIR, 'parigi-in-tasca'));
const PORTA = 8900 + Math.floor(Math.random() * 90);
const server = spawn('python3', ['-m', 'http.server', String(PORTA), '--bind', '127.0.0.1'], { cwd: DIR, stdio: 'ignore' });
const out = process.argv[2], W = +(process.argv[3] || 412), H = +(process.argv[4] || 915), u = +(process.argv[5] || .55), DPR = +(process.env.DPR || 1);
(async () => {
  await new Promise(r => setTimeout(r, 800));
  const b = await chromium.launch();
  const c = await b.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: DPR, serviceWorkers: 'block' });
  const p = await c.newPage(); p.on('pageerror', e => console.log('ERRORE: ' + e.message));
  await p.goto(`http://localhost:${PORTA}/parigi-in-tasca/dicembre/parigi-disney-natale.html`); await p.waitForTimeout(2500);
  const m = await p.evaluate((u) => { const n = window.slittaProva ? window.slittaProva(u, -1, 66) : -1; const sc = document.querySelector('.scene').getBoundingClientRect();
    return { pacchi: n, scena: [Math.round(sc.left), Math.round(sc.top), Math.round(sc.width), Math.round(sc.height)] }; }, u);
  await p.evaluate(() => { document.querySelectorAll('.scene *').forEach(e => { e.style.animationPlayState = 'paused'; }); });
  console.log(JSON.stringify(m));
  await p.screenshot({ path: out });
  await b.close(); server.kill();
})();
