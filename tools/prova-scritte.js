// Prova: nessuna scritta sovrapposta a un'altra nella pagina di dicembre (Mario 21/11 «scritte sovrapposte»).
// Scorre tutta la pagina (così partono le animazioni a comparsa), poi confronta i rettangoli di ogni riga di testo.
// Uso: node tools/prova-scritte.js [file]  (di base dicembre/parigi-disney-natale.html)
const { chromium } = require('playwright');
const fs = require('fs'); const path = require('path');
const file = path.resolve(process.argv[2] || path.join(__dirname, '..', 'dicembre', 'parigi-disney-natale.html'));
(async () => {
  const b = await chromium.launch({ executablePath: fs.existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined });
  let falsi = 0;
  for (const w of [360, 390, 412, 1470, 1920]) for (const tema of ['blu', 'vin']) for (const aperte of [false, true]) {
    const p = await b.newPage({ viewport: { width: w, height: 800 } });
    await p.goto('file://' + file); await p.waitForTimeout(400);
    if (tema === 'vin') await p.evaluate(() => { const x = [...document.querySelectorAll('.switch button')]; if (x[1]) x[1].click(); });
    if (aperte) await p.evaluate(() => document.querySelectorAll('details').forEach((d) => { d.open = true; }));
    const h = await p.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < h; y += 500) { await p.evaluate((y) => scrollTo(0, y), y); await p.waitForTimeout(60); }
    await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(1500);
    const sopra = await p.evaluate(() => {
      const righe = []; const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const vis = (el) => { for (let e = el; e; e = e.parentElement) { const s = getComputedStyle(e); if (s.display === 'none' || s.visibility === 'hidden' || +s.opacity === 0) return false; if (e.tagName === 'DETAILS' && !e.open && e !== el) { /* dentro un details chiuso si vede solo il summary */ } } return true; };
      for (let n; (n = tw.nextNode());) {
        if (!n.textContent.trim()) continue; const el = n.parentElement;
        if (!el || el.closest('#topbar,script,style,[aria-hidden="true"]:not(.axis)')) continue;
        { let chiusa = false; for (let d = el.closest('details'); d; d = d.parentElement && d.parentElement.closest('details')) { const sm = el.closest('summary'); if (!d.open && !(sm && sm.parentElement === d)) { chiusa = true; break; } } if (chiusa) continue; } // anche dentro una scheda chiusa più fuori (schede una dentro l'altra)
        if (!vis(el)) continue;
        { let f = false; for (let e = el; e; e = e.parentElement) if (getComputedStyle(e).position === 'fixed') { f = true; break; } if (f) continue; } // barre fisse: il testo ci scorre sotto apposta
        const r = document.createRange(); r.selectNodeContents(n);
        for (const q of r.getClientRects()) if (q.width > 2 && q.height > 2) righe.push({ t: n.textContent.trim().slice(0, 30), x: q.left, y: q.top + scrollY, r: q.right, b: q.bottom + scrollY, el });
      }
      const out = [];
      for (let i = 0; i < righe.length; i++) for (let j = i + 1; j < righe.length; j++) {
        const a = righe[i], c = righe[j]; if (a.el === c.el) continue;
        const ox = Math.min(a.r, c.r) - Math.max(a.x, c.x), oy = Math.min(a.b, c.b) - Math.max(a.y, c.y);
        // stesso paragrafo su righe vicine (titolo a righe strette): si salta; sulla STESSA riga invece conta (C11: etichetta dentro il «pro» finita sopra il testo)
        if ((a.el.contains(c.el) || c.el.contains(a.el)) && oy < 0.5 * Math.min(a.b - a.y, c.b - c.y)) continue;
        if (ox > 3 && oy > 4) out.push(`«${a.t}» su «${c.t}» (y ${Math.round(a.y)})`);
      }
      return out;
    });
    const ok = sopra.length === 0; if (!ok) falsi++;
    console.log((ok ? 'VERO  ' : 'FALSO ') + `nessuna scritta sovrapposta · ${w} px · ${tema}${aperte ? ' · schede aperte' : ''}` + (ok ? '' : '\n  ' + sopra.slice(0, 12).join('\n  ')));
    await p.close();
  }
  await b.close(); process.exit(falsi ? 1 : 0);
})();
