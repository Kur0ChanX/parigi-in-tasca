/* Luna a forma di Topolino con i dettagli di una luna vera: mari scuri, crateri con luce e ombra, raggi chiari, grana, bordo più scuro, stelline.
   Chiesta da Mario (21/11 19:09: «creale con dettagli da luna ma a forma di topolino»; «ti autorizzo io», uso personale in 2 persone).
   3 versioni da scegliere (foto in archivio/2026-11-21-lune-topolino-dettagli/): 1 tono 'argento' · 2 tono 'oro' · 3 'argento' con ombra.
   (cx, cy) = centro della testa, r = raggio della testa; opz.id = prefisso degli id (più lune nello stesso disegno). Luce da sinistra in alto.
   La usa tools/fai-icone-dicembre.js dopo la scelta di Mario (DOMANDA 5). */
function caso(seme) {
  let s = seme >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}
const f = (n) => Math.round(n * 100) / 100;

const TONI = {
  argento: { luce: '#FDFCF8', medio: '#E4E1D8', bordo: '#B4AFA2', mari: '#6E6B66', scuro: '#7F7A70', chiaro: '#FFFFFF', alone: '#E8EEFF' },
  oro: { luce: '#FFF9E6', medio: '#F3E3B8', bordo: '#CDB27A', mari: '#8E7748', scuro: '#977F52', chiaro: '#FFFCF0', alone: '#FFF0C8' },
};

function lunaTopolino(cx, cy, r, opz = {}) {
  const T = TONI[opz.tono || 'argento'];
  const id = opz.id || 'lt';
  const o = r * 0.6, dx = r * 0.95, dy = r * 0.85;
  const cerchi = [[cx, cy, r], [cx - dx, cy - dy, o], [cx + dx, cy - dy, o]];
  const sagoma = cerchi.map(([x, y, rr]) => `<circle cx="${f(x)}" cy="${f(y)}" r="${f(rr)}"/>`).join('');
  const x0 = cx - dx - o, y0 = cy - dy - o, l = 2 * (dx + o), a = dy + o + r;
  const dentro = (x, y, m = 0.94) => cerchi.some(([X, Y, R]) => Math.hypot(x - X, y - Y) < R * m);

  // «Mari» scuri: posti come sulla luna vera (Imbrium, Procellarum, Serenitatis, Tranquillitatis, Crisium, Nubium…), più due sulle orecchie
  const MARI = [[-.36, -.36, .34, .27], [-.62, .06, .24, .44], [-.42, .22, .16, .2], [.18, -.4, .2, .17], [.38, -.06, .26, .2], [.73, -.27, .12, .1],
    [.56, .27, .14, .2], [-.18, .38, .22, .14], [-.52, .48, .1, .1], [-.05, -.74, .46, .07], [.12, .12, .1, .08],
    [-.95 + .08, -.85 + .06, .26, .2], [-.95 - .12, -.85 - .12, .12, .1], [.95 - .04, -.85 + .1, .2, .26], [.95 + .16, -.85 - .16, .1, .09]];
  const mari = MARI.map(([u, v, rx, ry], i) => `<ellipse cx="${f(cx + u * r)}" cy="${f(cy + v * r)}" rx="${f(rx * r)}" ry="${f(ry * r)}" transform="rotate(${(i * 37) % 60 - 30} ${f(cx + u * r)} ${f(cy + v * r)})"/>`).join('');
  const inMare = (x, y) => MARI.some(([u, v, rx, ry]) => ((x - cx - u * r) / (rx * r)) ** 2 + ((y - cy - v * r) / (ry * r)) ** 2 < 1);

  // Crateri: tanti piccoli, pochi grandi; più fitti negli altipiani chiari e in basso
  const rnd = caso(4242);
  let crateri = '';
  for (let i = 0, fatti = 0; i < 900 && fatti < 190; i++) {
    const x = x0 + rnd() * l, y = y0 + rnd() * a, k = rnd(), p = rnd();
    if (!dentro(x, y)) continue;
    if (inMare(x, y) && p < 0.75) continue;
    if (y < cy - r * .2 && p < 0.25) continue;
    const rr = r * (0.009 + 0.062 * k ** 3.4);
    fatti++;
    crateri += `<circle cx="${f(x + rr * .1)}" cy="${f(y + rr * .1)}" r="${f(rr * 1.12)}" fill="${T.scuro}" opacity=".18"/>`
      + `<circle cx="${f(x - rr * .12)}" cy="${f(y - rr * .12)}" r="${f(rr * 1.1)}" fill="${T.chiaro}" opacity=".32"/>`
      + `<circle cx="${f(x)}" cy="${f(y)}" r="${f(rr)}" fill="${T.scuro}" opacity=".5"/>`
      + `<circle cx="${f(x + rr * .3)}" cy="${f(y + rr * .3)}" r="${f(rr * .58)}" fill="${T.medio}" opacity=".55"/>`
      + (k > .82 ? `<circle cx="${f(x + rr * .05)}" cy="${f(y + rr * .05)}" r="${f(rr * .13)}" fill="${T.chiaro}" opacity=".9"/>` : '');
  }

  // Crateri coi raggi chiari (come Tycho e Copernico)
  const raggi = (u, v, n, lung, seme, forza) => {
    const R = caso(seme), X = cx + u * r, Y = cy + v * r;
    let s = `<circle cx="${f(X)}" cy="${f(Y)}" r="${f(r * .09)}" fill="${T.chiaro}" opacity="${f(forza * 1.4)}"/>`;
    for (let i = 0; i < n; i++) {
      const ang = (i / n) * Math.PI * 2 + R() * .5, lu = r * lung * (.45 + R() * .75), w = r * (.012 + R() * .014);
      const px = Math.cos(ang + Math.PI / 2) * w, py = Math.sin(ang + Math.PI / 2) * w;
      s += `<path d="M${f(X + px)} ${f(Y + py)} L${f(X + Math.cos(ang) * lu)} ${f(Y + Math.sin(ang) * lu)} L${f(X - px)} ${f(Y - py)} Z" fill="${T.chiaro}" opacity="${f(forza * (.6 + R() * .6))}"/>`;
    }
    return s;
  };
  const luminosi = [[-.1, .7, .028], [-.32, -.05, .022], [-.6, -.02, .016]]
    .map(([u, v, k]) => { const X = cx + u * r, Y = cy + v * r, rr = r * k * 2.2; return `<circle cx="${f(X)}" cy="${f(Y)}" r="${f(rr)}" fill="${T.scuro}" opacity=".55"/><circle cx="${f(X + rr * .3)}" cy="${f(Y + rr * .3)}" r="${f(rr * .58)}" fill="${T.chiaro}" opacity=".9"/><circle cx="${f(X - rr * .1)}" cy="${f(Y - rr * .1)}" r="${f(rr * 1.15)}" fill="none" stroke="${T.chiaro}" stroke-width="${f(rr * .25)}" opacity=".7"/>`; }).join('');

  // Bordo più scuro (come la luna vera); sulle orecchie senza la riga dove toccano la testa
  const bordo = `<g filter="url(#${id}-bordoF)">${sagoma}</g>`;

  const stella = (x, y, s, op = 1) => `<circle cx="${f(x)}" cy="${f(y)}" r="${f(s * .9)}" fill="url(#${id}-bagliore)" opacity="${op}"/><path d="M${f(x)} ${f(y - s)} L${f(x + s * .2)} ${f(y - s * .2)} L${f(x + s)} ${f(y)} L${f(x + s * .2)} ${f(y + s * .2)} L${f(x)} ${f(y + s)} L${f(x - s * .2)} ${f(y + s * .2)} L${f(x - s)} ${f(y)} L${f(x - s * .2)} ${f(y - s * .2)} Z" fill="#FFF8E2" opacity="${op}"/>`;
  const puntino = (x, y, s) => `<circle cx="${f(x)}" cy="${f(y)}" r="${f(s)}" fill="#FFF8E2"/>`;

  const ombra = opz.ombra ? `<mask id="${id}-zonaLuce" maskUnits="userSpaceOnUse" x="${f(x0 - r)}" y="${f(y0 - r)}" width="${f(l + 2 * r)}" height="${f(a + 2 * r)}"><rect x="${f(x0 - r)}" y="${f(y0 - r)}" width="${f(l + 2 * r)}" height="${f(a + 2 * r)}" fill="#fff"/><circle cx="${f(cx - r * .75)}" cy="${f(cy - r * .35)}" r="${f(r * 1.55)}" fill="#000" filter="url(#${id}-sfumaOmbra)"/></mask>` : '';

  return `<defs>
   <clipPath id="${id}-sagoma">${sagoma}</clipPath>
   <radialGradient id="${id}-luce" gradientUnits="userSpaceOnUse" cx="${f(cx - r * .6)}" cy="${f(cy - r * 1.1)}" r="${f(r * 2.6)}"><stop offset="0" stop-color="${T.luce}"/><stop offset=".5" stop-color="${T.medio}"/><stop offset="1" stop-color="${T.bordo}"/></radialGradient>
   <radialGradient id="${id}-alone"><stop offset="0" stop-color="${T.alone}" stop-opacity=".5"/><stop offset=".35" stop-color="${T.alone}" stop-opacity=".18"/><stop offset="1" stop-color="${T.alone}" stop-opacity="0"/></radialGradient>
   <radialGradient id="${id}-bagliore"><stop offset="0" stop-color="#FFF8E2" stop-opacity=".7"/><stop offset="1" stop-color="#FFF8E2" stop-opacity="0"/></radialGradient>
   <filter id="${id}-bordoF" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur in="SourceAlpha" stdDeviation="${f(r * .16)}" result="b"/><feComponentTransfer in="b" result="inv"><feFuncA type="table" tableValues="1 0"/></feComponentTransfer><feFlood flood-color="#000" flood-opacity=".42"/><feComposite in2="inv" operator="in" result="sh"/><feComposite in="sh" in2="SourceAlpha" operator="in"/></filter>
   <filter id="${id}-mari" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency="${f(3.2 / r * 100) / 100}" numOctaves="3" seed="7" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="${f(r * .32)}" xChannelSelector="R" yChannelSelector="G" result="d"/><feGaussianBlur in="d" stdDeviation="${f(r * .032)}"/></filter>
   <filter id="${id}-macchie" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="${f(2.4 / r * 100) / 100}" numOctaves="4" seed="3"/><feColorMatrix values="0 0 0 0 .42  0 0 0 0 .4  0 0 0 0 .37  1.6 0 0 0 -.62"/></filter>
   <filter id="${id}-grana" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="${f(14 / r * 100) / 100}" numOctaves="3" seed="11" result="g"/><feColorMatrix in="g" values="0 0 0 0 .35  0 0 0 0 .34  0 0 0 0 .32  2.2 0 0 0 -1.05" result="s"/><feColorMatrix in="g" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  -2.2 0 0 0 .95" result="c"/><feMerge><feMergeNode in="s"/><feMergeNode in="c"/></feMerge></filter>
   <filter id="${id}-sfumaRaggi" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="${f(r * .008)}"/></filter>
   <filter id="${id}-sfumaAlone" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="${f(r * .14)}"/></filter>
   <filter id="${id}-sfumaOmbra" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="${f(r * .07)}"/></filter>
   ${ombra}
  </defs>
  <circle cx="${f(cx)}" cy="${f(cy - r * .35)}" r="${f(r * 3.1)}" fill="url(#${id}-alone)"/>
  <g fill="${T.alone}" opacity=".55" filter="url(#${id}-sfumaAlone)">${sagoma}</g>
  <g clip-path="url(#${id}-sagoma)">
   <rect x="${f(x0 - 2)}" y="${f(y0 - 2)}" width="${f(l + 4)}" height="${f(a + 4)}" fill="url(#${id}-luce)"/>
   <rect x="${f(x0 - 2)}" y="${f(y0 - 2)}" width="${f(l + 4)}" height="${f(a + 4)}" filter="url(#${id}-macchie)" opacity=".55"/>
   <g fill="${T.mari}" opacity=".62" filter="url(#${id}-mari)">${mari}</g>
   <rect x="${f(x0 - 2)}" y="${f(y0 - 2)}" width="${f(l + 4)}" height="${f(a + 4)}" filter="url(#${id}-grana)" opacity=".35"/>
   <g filter="url(#${id}-sfumaRaggi)">${raggi(-.1, .7, 22, 1.4, 5, .34)}${raggi(-.32, -.05, 14, .65, 9, .24)}${raggi(-.6, -.02, 9, .38, 13, .2)}</g>
   ${crateri}${luminosi}
   ${bordo}
   ${opz.ombra ? `<rect x="${f(x0 - 2)}" y="${f(y0 - 2)}" width="${f(l + 4)}" height="${f(a + 4)}" fill="#0E1430" opacity=".86" mask="url(#${id}-zonaLuce)"/>` : ''}
  </g>
  ${stella(cx + r * 1.75, cy + r * .3, r * .28)}${stella(cx - r * 1.85, cy + r * .5, r * .22)}${stella(cx + r * 1.35, cy + r * 1.1, r * .16, .9)}${stella(cx - r * .15, cy - r * 2.05, r * .15, .85)}${stella(cx - r * 1.45, cy + r * 1.25, r * .12, .8)}
  ${puntino(cx + r * 2.1, cy - r * 1.05, r * .035)}${puntino(cx - r * 2.05, cy - r * .35, r * .03)}${puntino(cx + r * .8, cy - r * 2.0, r * .03)}${puntino(cx - r * 1.1, cy - r * 1.95, r * .025)}`;
}

module.exports = { lunaTopolino };
