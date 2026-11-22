// Uso: node foto.js <uscita-prefisso> [u]  — foto della testata al telefono (412x915, 2x) con la slitta ferma a u, e misura dei pacchi
const { chromium } = require('playwright'); const { spawn } = require('child_process');
const fs = require('fs'), os = require('os'), path = require('path');
const REPO = process.env.REPO || '/home/user/parigi-in-tasca';
const DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'sito-')); fs.symlinkSync(REPO, path.join(DIR, 'parigi-in-tasca'));
const PORTA = 8900 + Math.floor(Math.random() * 90);
const server = spawn('python3', ['-m', 'http.server', String(PORTA), '--bind', '127.0.0.1'], { cwd: DIR, stdio: 'ignore' });
const out = process.argv[2] || 'prima', u = +(process.argv[3] || .55), W = +(process.argv[4] || 412), H = +(process.argv[5] || 915);
(async () => {
  await new Promise(r => setTimeout(r, 800));
  const b = await chromium.launch();
  const c = await b.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 2, serviceWorkers: 'block' });
  const p = await c.newPage(); p.on('pageerror', e => console.log('ERRORE: ' + e.message));
  await p.goto(`http://localhost:${PORTA}/parigi-in-tasca/dicembre/parigi-disney-natale.html`); await p.waitForTimeout(1500);
  if (process.env.PAL) await p.evaluate((v) => { document.documentElement.dataset.palette = v; }, process.env.PAL);
  const m = await p.evaluate((u) => { const n = window.slittaProva(u, -1, 66); const sc = document.querySelector('.scene').getBoundingClientRect();
    const g = [...document.querySelectorAll('#pacchi > g')].map(x => { const r = x.getBoundingClientRect(); return [Math.round(r.left), Math.round(r.top), +r.width.toFixed(1), +r.height.toFixed(1)]; });
    const s = document.getElementById('slitta').getBoundingClientRect();
    return { n, scena: [sc.width, sc.height], slitta: [Math.round(s.left), Math.round(s.top), Math.round(s.width), Math.round(s.height)], pacchi: g }; }, u);
  console.log(JSON.stringify(m));
  await p.evaluate(() => { document.querySelectorAll('.scene *').forEach(e => { e.style.animationPlayState = 'paused'; }); });
  const sc = await p.$('.scene'); await sc.screenshot({ path: out + '-testata.png' });
  await b.close(); server.kill();
})();
