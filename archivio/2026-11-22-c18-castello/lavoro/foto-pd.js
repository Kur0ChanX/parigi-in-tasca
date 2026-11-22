// Uso: REPO=<cartella> node foto-pd.js <uscita-prefisso> <larghezza> <altezza> [u]  — foto della testata (.scene) a 2×, slitta ferma a u coi pacchi in aria (sempre la stessa sequenza di numeri a caso: PRIMA e DOPO uguali)
const { chromium } = require('playwright'); const { spawn } = require('child_process');
const fs = require('fs'), os = require('os'), path = require('path');
const REPO = process.env.REPO || '/home/user/parigi-in-tasca';
const DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'sito-')); fs.symlinkSync(REPO, path.join(DIR, 'parigi-in-tasca'));
const PORTA = 8900 + Math.floor(Math.random() * 90);
const server = spawn('python3', ['-m', 'http.server', String(PORTA), '--bind', '127.0.0.1'], { cwd: DIR, stdio: 'ignore' });
const out = process.argv[2], W = +process.argv[3], H = +process.argv[4], u = +(process.argv[5] || .8);
(async () => {
  await new Promise(r => setTimeout(r, 800));
  const b = await chromium.launch();
  const c = await b.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 2, serviceWorkers: 'block' });
  await c.addInitScript(() => { let s = 7; Math.random = () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; });
  const p = await c.newPage(); p.on('pageerror', e => console.log('ERRORE: ' + e.message));
  await p.goto(`http://localhost:${PORTA}/parigi-in-tasca/dicembre/parigi-disney-natale.html`); await p.waitForTimeout(2500);
  const n = await p.evaluate((u) => window.slittaProva(u, -1, 66), u);
  await p.evaluate(() => { document.querySelectorAll('.scene *').forEach(e => { e.style.animationPlayState = 'paused'; }); });
  const sc = await p.$('.scene'); await sc.screenshot({ path: out + '.png' });
  console.log(out, 'pacchi', n); await b.close(); server.kill();
})();
