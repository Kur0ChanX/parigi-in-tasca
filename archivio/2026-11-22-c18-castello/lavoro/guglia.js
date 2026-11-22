// Uso: node guglia.js  → cosa c'è sopra la guglia del castello (x 514, y 60 del disegno della testata), telefono 390×844
const { chromium } = require('playwright'); const { spawn } = require('child_process');
const fs = require('fs'), os = require('os'), path = require('path');
const DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'sito-')); fs.symlinkSync('/home/user/parigi-in-tasca', path.join(DIR, 'parigi-in-tasca'));
const PORTA = 8900 + Math.floor(Math.random() * 90);
const server = spawn('python3', ['-m', 'http.server', String(PORTA), '--bind', '127.0.0.1'], { cwd: DIR, stdio: 'ignore' });
(async () => {
  await new Promise(r => setTimeout(r, 800));
  const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' })).newPage();
  await p.goto(`http://localhost:${PORTA}/parigi-in-tasca/dicembre/`); await p.waitForTimeout(1500);
  console.log(await p.evaluate(() => { document.head.insertAdjacentHTML('beforeend', '<style>.scene,.scene *{pointer-events:auto!important}</style>');
    const s = document.querySelector('.scene').getBoundingClientRect(), k = s.height / 290, x = s.left + s.width / 2 + (514 - 400) * k, y = s.top + 60 * k;
    window.__xy = [x, y];
    return JSON.stringify(document.elementsFromPoint(x, y).slice(0, 8).map(e => e.tagName + '#' + e.id + '.' + (e.getAttribute('class') || '') + ' fill=' + (e.getAttribute('fill') || ''))); }));
  console.log(await p.evaluate(async () => { const [X, Y] = window.__xy, ci = document.getElementById('castImg'), cu = document.querySelector('.scene use[href="#castImg"]'), im = new Image(); im.src = ci.getAttribute('href'); await im.decode();
    const cv = document.createElement('canvas'); cv.width = im.width; cv.height = im.height; const cx = cv.getContext('2d'); cx.drawImage(im, 0, 0);
    const q = new DOMPoint(X, Y).matrixTransform(cu.getScreenCTM().inverse()); const px = Math.floor((q.x - +ci.getAttribute('x')) / +ci.getAttribute('width') * im.width), py = Math.floor((q.y - +ci.getAttribute('y')) / +ci.getAttribute('height') * im.height);
    return JSON.stringify({ q: [q.x, q.y], px, py, a: cx.getImageData(px, py, 1, 1).data[3], w: im.width, ctm: cu.getScreenCTM() && [cu.getScreenCTM().a, cu.getScreenCTM().e, cu.getScreenCTM().f] }); }));
  await b.close(); server.kill();
})();
