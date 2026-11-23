const { chromium, devices } = require('playwright'); const { spawn } = require('child_process'); const fs = require('fs'), os = require('os'), path = require('path');
const DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'sito-')); fs.symlinkSync('/home/user/parigi-in-tasca', path.join(DIR, 'parigi-in-tasca'));
const PORTA = 8700 + Math.floor(Math.random() * 90); const server = spawn('python3', ['-m', 'http.server', String(PORTA), '--bind', '127.0.0.1'], { cwd: DIR, stdio: 'ignore' });
(async () => { await new Promise(r => setTimeout(r, 800));
  const b = await chromium.launch(); const ctx = await b.newContext({ ...devices[process.argv[2] || 'Pixel 7'] }); const p = await ctx.newPage();
  await p.goto(`http://localhost:${PORTA}/parigi-in-tasca/dicembre/index.html`); await p.waitForFunction(() => window.luciTela && luciTela.E().length >= 3, null, { timeout: 15000 });
  const r = await p.evaluate(() => { const o = {}; for (const T of luciTela.E()) for (const c of T.tieni) { const k = c.el.getAttribute('class') + ' ← ' + (c.perche || '?'); o[k] = (o[k] || 0) + 1; } return o; });
  console.log(JSON.stringify(r, null, 1)); await b.close(); server.kill(); })();
