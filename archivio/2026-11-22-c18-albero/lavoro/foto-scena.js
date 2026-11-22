// Uso: REPO=<cartella> node foto-scena.js <uscita.png> <larghezza> <altezza> [x0,y0,x1,y1 nella scena 800×290] [u slitta]
// Foto della testata (.scene) a 2×, numeri a caso sempre uguali (PRIMA e DOPO confrontabili), animazioni ferme; con il riquadro: solo quel pezzo della scena.
const { chromium } = require('playwright'); const { spawn } = require('child_process');
const fs = require('fs'), os = require('os'), path = require('path');
const REPO = process.env.REPO || '/home/user/parigi-in-tasca';
const DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'sito-')); fs.symlinkSync(REPO, path.join(DIR, 'parigi-in-tasca'));
const PORTA = 8900 + Math.floor(Math.random() * 90);
const server = spawn('python3', ['-m', 'http.server', String(PORTA), '--bind', '127.0.0.1'], { cwd: DIR, stdio: 'ignore' });
const out = process.argv[2], W = +process.argv[3], H = +process.argv[4], box = process.argv[5] && process.argv[5] !== '-' ? process.argv[5].split(',').map(Number) : null, u = +(process.argv[6] || .15);
(async () => {
  await new Promise(r => setTimeout(r, 800));
  const b = await chromium.launch();
  const c = await b.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: +(process.env.DPR || 2), serviceWorkers: 'block' });
  await c.addInitScript(() => { let s = 7; Math.random = () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; });
  const p = await c.newPage(); p.on('pageerror', e => console.log('ERRORE: ' + e.message));
  await p.goto(`http://localhost:${PORTA}/parigi-in-tasca/dicembre/parigi-disney-natale.html`); await p.waitForTimeout(2500);
  if (process.env.T) await p.waitForTimeout(+process.env.T);
  await p.evaluate((u) => window.slittaProva && window.slittaProva(u, -1, 66), u);
  await p.evaluate(() => { document.querySelectorAll('.scene *').forEach(e => { e.style.animationPlayState = 'paused'; }); });
  if (!box) { const sc = await p.$('.scene'); await sc.screenshot({ path: out }); }
  else {
    const r = await p.evaluate((bx) => { const s = document.querySelector('svg.scene') || document.querySelector('.scene svg'); const m = s.getScreenCTM(); const P = (x, y) => { const q = s.createSVGPoint(); q.x = x; q.y = y; return q.matrixTransform(m); };
      const a = P(bx[0], bx[1]), z = P(bx[2], bx[3]); return { x: a.x + scrollX, y: a.y + scrollY, width: z.x - a.x, height: z.y - a.y }; }, box);
    await p.screenshot({ path: out, clip: r, fullPage: true });
  }
  console.log('ok', out); await b.close(); server.kill();
})();
