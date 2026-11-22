// Uso: node video.js <cartella-uscita> [larghezza 1440] [altezza 900] [secondi 9]  — video della pagina VERA dall'apertura (si vede se qualcosa sfarfalla), a 1× (a 2× Playwright mette la pagina piccola in un angolo); poi ffmpeg ritaglia e ingrandisce
const { chromium } = require('playwright'); const { spawn } = require('child_process');
const fs = require('fs'), os = require('os'), path = require('path');
const REPO = process.env.REPO || '/home/user/parigi-in-tasca';
const DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'sito-')); fs.symlinkSync(REPO, path.join(DIR, 'parigi-in-tasca'));
const PORTA = 8900 + Math.floor(Math.random() * 90);
const server = spawn('python3', ['-m', 'http.server', String(PORTA), '--bind', '127.0.0.1'], { cwd: DIR, stdio: 'ignore' });
const out = process.argv[2], W = +(process.argv[3] || 1440), H = +(process.argv[4] || 900), T = +(process.argv[5] || 9);
(async () => {
  await new Promise(r => setTimeout(r, 800));
  const b = await chromium.launch();
  const c = await b.newContext({ viewport: { width: W, height: H }, serviceWorkers: 'block', recordVideo: { dir: out, size: { width: W, height: H } } });
  const p = await c.newPage(); p.on('pageerror', e => console.log('ERRORE: ' + e.message));
  await p.goto(`http://localhost:${PORTA}/parigi-in-tasca/dicembre/`);   // la pagina vera (index.html, come sul sito), non il sorgente senza <head>
  await p.waitForTimeout(T * 1000);
  console.log('riquadro', JSON.stringify(await p.evaluate(() => { const sv = document.querySelector('svg.scene'), m = sv.getScreenCTM(), P = (x, y) => { const q = sv.createSVGPoint(); q.x = x; q.y = y; return q.matrixTransform(m); }; const a = P(190, 85), z = P(430, 290); return [Math.round(a.x), Math.round(a.y), Math.round(z.x - a.x), Math.round(z.y - a.y)]; })));
  const v = p.video(); await c.close(); console.log(await v.path()); await b.close(); server.kill();
})();
