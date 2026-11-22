// Video della testata al telefono (412x915): la slitta passa da sola, coi regali e la scia
const { chromium } = require('playwright'); const { spawn } = require('child_process');
const fs = require('fs'), os = require('os'), path = require('path');
const REPO = '/home/user/parigi-in-tasca', OUT = process.argv[2];
const DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'sito-')); fs.symlinkSync(REPO, path.join(DIR, 'parigi-in-tasca'));
const PORTA = 9100 + Math.floor(Math.random() * 90);
const server = spawn('python3', ['-m', 'http.server', String(PORTA), '--bind', '127.0.0.1'], { cwd: DIR, stdio: 'ignore' });
(async () => {
  await new Promise(r => setTimeout(r, 800));
  const b = await chromium.launch();
  const c = await b.newContext({ viewport: { width: 412, height: 915 }, serviceWorkers: 'block', recordVideo: { dir: OUT, size: { width: 412, height: 915 } } });
  const p = await c.newPage();
  await p.goto(`http://localhost:${PORTA}/parigi-in-tasca/dicembre/parigi-disney-natale.html`);
  const r = await p.evaluate(() => { const r = document.querySelector('.scene').getBoundingClientRect(); return [r.left, r.top + scrollY, r.width, r.height]; });
  await p.evaluate((y) => scrollTo(0, Math.max(0, y - 40)), r[1]);
  const r2 = await p.evaluate(() => { const r = document.querySelector('.scene').getBoundingClientRect(); return [r.left, r.top, r.width, r.height]; });
  console.log(JSON.stringify(r2));
  await p.waitForTimeout(23000);
  await c.close(); await b.close(); server.kill();
})();
