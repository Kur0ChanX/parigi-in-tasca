#!/usr/bin/env node
/* Disegna l'icona della web app di dicembre e l'immagine dell'anteprima del link (WhatsApp, Telegram).
   Parigi di notte coi mercatini di Natale: Torre Eiffel accesa, casette con le tende a righe, festoni di lucine, neve,
   luna a forma di Topolino con la trama della luna e le stelline (chiesta da Mario).
   Tutto disegnato qui (niente immagini prese da internet): si rifà uguale quando serve.
   Uso:  node tools/fai-icone-dicembre.js            scrive dicembre/icona-*.png e dicembre/anteprima.jpg
         node tools/fai-icone-dicembre.js <cartella>  scrive le stesse immagini in un'altra cartella (prove)  */
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const RADICE = path.resolve(__dirname, '..');
const USCITA = path.resolve(process.argv[2] || path.join(RADICE, 'dicembre'));

// Colori della pagina (dicembre/parigi-disney-natale.html, tema «Blu notte»)
const C = {
  cielo1: '#060B22', cielo2: '#0A1230', cielo3: '#1D2C6B',
  torre: '#E0A84C', torreScura: '#9C6A26', torreLuce: '#FFE7A8',
  lampada: '#F6C964', brace: '#FFC27A', luna: '#FFF4D6',
  legno: '#7A4127', legnoScuro: '#4A230F', tettoR: '#A62C36', tettoV: '#1F6442',
  vino: '#F2606A', abete: '#3FAE7A', neve: '#EEF3FF', neveOmbra: '#C9D6F2', caldo: '#FFD98A',
};
const LUCINE = ['#FF5A64', '#FFD45E', '#5EE0A0', '#7CC4FF', '#FF9A4D'];

// Numeri «a caso» ma sempre uguali (così l'immagine si rifà identica)
function caso(seme) {
  let s = seme >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}
const f = (n) => Math.round(n * 10) / 10;

function defs() {
  return `<defs>
  <linearGradient id="cielo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${C.cielo1}"/><stop offset=".55" stop-color="${C.cielo2}"/><stop offset="1" stop-color="${C.cielo3}"/></linearGradient>
  <radialGradient id="orizzonte" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="${C.brace}" stop-opacity=".55"/><stop offset=".6" stop-color="${C.brace}" stop-opacity=".16"/><stop offset="1" stop-color="${C.brace}" stop-opacity="0"/></radialGradient>
  <radialGradient id="aloneTorre" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="${C.lampada}" stop-opacity=".5"/><stop offset=".55" stop-color="${C.lampada}" stop-opacity=".14"/><stop offset="1" stop-color="${C.lampada}" stop-opacity="0"/></radialGradient>
  <radialGradient id="aloneLuna" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="${C.luna}" stop-opacity=".4"/><stop offset="1" stop-color="${C.luna}" stop-opacity="0"/></radialGradient>
  <radialGradient id="bulbo" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff" stop-opacity=".9"/><stop offset=".35" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
  <linearGradient id="banco" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF1C9"/><stop offset=".5" stop-color="${C.caldo}"/><stop offset="1" stop-color="#F0A64A"/></linearGradient>
  <pattern id="tendaR" width="22" height="30" patternUnits="userSpaceOnUse"><rect width="11" height="30" fill="${C.vino}"/><rect x="11" width="11" height="30" fill="${C.neve}"/></pattern>
  <pattern id="tendaV" width="22" height="30" patternUnits="userSpaceOnUse"><rect width="11" height="30" fill="${C.abete}"/><rect x="11" width="11" height="30" fill="${C.neve}"/></pattern>
  <pattern id="tendaG" width="22" height="30" patternUnits="userSpaceOnUse"><rect width="11" height="30" fill="${C.lampada}"/><rect x="11" width="11" height="30" fill="${C.tettoR}"/></pattern>
 </defs>`;
}

function stelle(x, y, l, a, n, seme, evita) {
  const r = caso(seme);
  let out = '';
  for (let i = 0; i < n; i++) {
    const sx = x + r() * l, sy = y + r() * a, k = r();
    if (evita && evita(sx, sy)) continue;
    if (k > 0.86) { // stellina a quattro punte
      const s = 5 + r() * 5;
      out += `<path d="M${f(sx)} ${f(sy - s)} L${f(sx + s * .22)} ${f(sy - s * .22)} L${f(sx + s)} ${f(sy)} L${f(sx + s * .22)} ${f(sy + s * .22)} L${f(sx)} ${f(sy + s)} L${f(sx - s * .22)} ${f(sy + s * .22)} L${f(sx - s)} ${f(sy)} L${f(sx - s * .22)} ${f(sy - s * .22)}Z" fill="#FFF6DA"/>`;
    } else {
      out += `<circle cx="${f(sx)}" cy="${f(sy)}" r="${f(1 + k * 1.8)}" fill="#E9F0FF" opacity="${f(.45 + k * .5)}"/>`;
    }
  }
  return out;
}

function neveCade(x, y, l, a, n, seme) {
  const r = caso(seme);
  let out = '';
  for (let i = 0; i < n; i++) out += `<circle cx="${f(x + r() * l)}" cy="${f(y + r() * a)}" r="${f(1.4 + r() * 2.2)}" fill="#fff" opacity="${f(.5 + r() * .4)}"/>`;
  return out;
}

/* Luna a forma di Topolino (testa + 2 orecchie) con la trama vera della luna e le stelline vicino.
   Chiesta da Mario (21/11 ~18:40: «falla sempre con la forma di topolino, ma con la trama proprio di luna … stelle vicino»;
   «ti autorizzo io», uso personale in 2 persone). (cx, cy) = centro della testa, r = raggio della testa.
   Trama: luce da sinistra in alto, «mari» scuri sfumati, crateri col bordo chiaro, ombra sul bordo destro. */
function luna(cx, cy, r) {
  const o = r * 0.6, dx = r * 0.95, dy = r * 0.85;
  const sagoma = `<circle cx="${cx}" cy="${cy}" r="${r}"/><circle cx="${f(cx - dx)}" cy="${f(cy - dy)}" r="${f(o)}"/><circle cx="${f(cx + dx)}" cy="${f(cy - dy)}" r="${f(o)}"/>`;
  const x0 = cx - dx - o, y0 = cy - dy - o, l = 2 * (dx + o), a = dy + o + r;   // riquadro della sagoma
  const mari = [[-.32, -.12, .42, .3], [.22, .28, .34, .24], [.36, -.3, .2, .16], [-.98, -.9, .3, .22], [.86, -.78, .24, .2], [-.05, .52, .22, .12]]
    .map(([u, v, rx, ry]) => `<ellipse cx="${f(cx + u * r)}" cy="${f(cy + v * r)}" rx="${f(rx * r)}" ry="${f(ry * r)}"/>`).join('');
  const rnd = caso(97);
  let crateri = '';
  for (let i = 0; i < 26; i++) {
    const x = x0 + rnd() * l, y = y0 + rnd() * a, k = rnd();
    const dentro = Math.hypot(x - cx, y - cy) < r * .92 || Math.hypot(x - cx + dx, y - cy + dy) < o * .85 || Math.hypot(x - cx - dx, y - cy + dy) < o * .85;
    if (!dentro) continue;
    const rr = r * (.035 + k * .085);
    crateri += `<circle cx="${f(x + rr * .18)}" cy="${f(y + rr * .18)}" r="${f(rr)}" fill="#FFFBEA" opacity=".55"/><circle cx="${f(x)}" cy="${f(y)}" r="${f(rr)}" fill="#B9A57A" opacity=".55"/>`;
  }
  const stella = (x, y, s) => `<path d="M${f(x)} ${f(y - s)} L${f(x + s * .24)} ${f(y - s * .24)} L${f(x + s)} ${f(y)} L${f(x + s * .24)} ${f(y + s * .24)} L${f(x)} ${f(y + s)} L${f(x - s * .24)} ${f(y + s * .24)} L${f(x - s)} ${f(y)} L${f(x - s * .24)} ${f(y - s * .24)} Z" fill="#FFF6DA"/>`;
  return `<defs>
   <clipPath id="sagomaLuna">${sagoma}</clipPath>
   <radialGradient id="luceLuna" gradientUnits="userSpaceOnUse" cx="${f(cx - r * .55)}" cy="${f(cy - r * .9)}" r="${f(r * 2.3)}"><stop offset="0" stop-color="#FFFDF2"/><stop offset=".45" stop-color="#F7EBC8"/><stop offset=".8" stop-color="#E4D3A6"/><stop offset="1" stop-color="#CDB98A"/></radialGradient>
   <filter id="sfumaMari" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="${f(r * .09)}"/></filter>
  </defs>
  <circle cx="${cx}" cy="${f(cy - r * .3)}" r="${f(r * 3.2)}" fill="url(#aloneLuna)" opacity=".8"/>
  <g clip-path="url(#sagomaLuna)">
   <rect x="${f(x0 - 2)}" y="${f(y0 - 2)}" width="${f(l + 4)}" height="${f(a + 4)}" fill="url(#luceLuna)"/>
   <g fill="#9C8960" opacity=".5" filter="url(#sfumaMari)">${mari}</g>
   ${crateri}
  </g>
  ${stella(cx + r * 1.6, cy + r * .35, r * .26)}${stella(cx - r * 1.7, cy + r * .55, r * .22)}${stella(cx + r * 1.3, cy + r * 1.05, r * .16)}${stella(cx - r * .2, cy - r * 2.05, r * .14)}
  <circle cx="${f(cx + r * 2.05)}" cy="${f(cy - r * 1.05)}" r="1.6" fill="#FFF6DA"/><circle cx="${f(cx - r * 1.95)}" cy="${f(cy - r * .35)}" r="1.4" fill="#FFF6DA"/>`;
}

/* Torre Eiffel: base a terra in (cx, base), alta h, larga l alla base. */
function torre(cx, base, h, l) {
  const cima = base - h, mezza = l / 2;
  const collo = mezza * 0.1, topo = mezza * 0.055;
  const yCollo = cima + h * 0.2;
  // gamba sinistra: dalla base al collo, curva che si allarga in basso
  const P0 = [cx - mezza, base], P1 = [cx - mezza * 0.26, base - h * 0.28], P2 = [cx - collo, yCollo];
  const xa = (y) => { // x della gamba sinistra all'altezza y
    let best = P0[0], dist = 1e9;
    for (let t = 0; t <= 1; t += 0.002) {
      const yy = (1 - t) ** 2 * P0[1] + 2 * (1 - t) * t * P1[1] + t * t * P2[1];
      if (Math.abs(yy - y) < dist) { dist = Math.abs(yy - y); best = (1 - t) ** 2 * P0[0] + 2 * (1 - t) * t * P1[0] + t * t * P2[0]; }
    }
    return best;
  };
  const arco = mezza * 0.56, yArco = base - h * 0.19;
  const corpo = `M${f(P0[0])} ${base} Q${f(P1[0])} ${f(P1[1])} ${f(P2[0])} ${f(P2[1])} L${f(cx - topo)} ${f(cima + h * .03)} L${f(cx + topo)} ${f(cima + h * .03)} L${f(2 * cx - P2[0])} ${f(P2[1])} Q${f(2 * cx - P1[0])} ${f(P1[1])} ${f(cx + mezza)} ${base} H${f(cx + arco)} Q${cx} ${f(yArco - h * .07)} ${f(cx - arco)} ${base}Z`;
  const piano = (y, alto, sporge) => { const xl = xa(y) - sporge; return `<rect x="${f(xl)}" y="${f(y - alto / 2)}" width="${f(2 * (cx - xl))}" height="${f(alto)}" rx="${f(alto * .3)}" fill="${C.torre}"/>`; };
  const y1 = base - h * 0.3, y2 = base - h * 0.6;
  // traliccio: croci fra le gambe
  let reticolo = '';
  const croci = [[base - h * .06, y1 + h * .02], [y1 - h * .02, y2 + h * .03], [y2 - h * .02, yCollo + h * .02]];
  for (const [ya, yb] of croci) {
    const passi = 3;
    for (let i = 0; i < passi; i++) {
      const yA = ya - (ya - yb) * i / passi, yB = ya - (ya - yb) * (i + 1) / passi;
      const xA = xa(yA), xB = xa(yB);
      reticolo += `<path d="M${f(xA + 2)} ${f(yA)} L${f(2 * cx - xB - 2)} ${f(yB)} M${f(2 * cx - xA - 2)} ${f(yA)} L${f(xB + 2)} ${f(yB)}" stroke="${C.torreScura}" stroke-width="${f(l * .012)}" opacity=".55"/>`;
    }
  }
  // lucine che brillano sulla torre (come il luccichio della sera)
  const r = caso(7);
  let brilli = '';
  for (let i = 0; i < 34; i++) {
    const y = base - 6 - r() * (h * 0.92), lato = r() > .5 ? 1 : -1;
    const xl = xa(Math.max(y, yCollo)), xm = y < yCollo ? cx - topo - (cx - topo - (cx - collo)) * (y - cima) / (yCollo - cima) : xl;
    const x = lato < 0 ? xm + r() * 4 : 2 * cx - xm - r() * 4;
    const s = 1.2 + r() * 1.6 + (i % 7 === 0 ? 1.6 : 0);
    brilli += `<circle cx="${f(x)}" cy="${f(y)}" r="${f(s * l / 180)}" fill="#FFFBEA"/>`;
  }
  const faro = `<circle cx="${cx}" cy="${f(cima - h * .02)}" r="${f(l * .05)}" fill="url(#bulbo)"/><circle cx="${cx}" cy="${f(cima - h * .02)}" r="${f(l * .013)}" fill="#fff"/>`;
  return `<ellipse cx="${cx}" cy="${f(base - h * .45)}" rx="${f(l * .9)}" ry="${f(h * .62)}" fill="url(#aloneTorre)"/>
  <path d="${corpo}" fill="${C.torre}"/>${reticolo}
  ${piano(y1, h * .03, l * .06)}${piano(y2, h * .02, l * .035)}${piano(yCollo + h * .01, h * .012, l * .02)}
  <line x1="${cx}" y1="${f(cima + h * .03)}" x2="${cx}" y2="${f(cima - h * .02)}" stroke="${C.torre}" stroke-width="${f(l * .02)}"/>
  ${brilli}${faro}`;
}

/* Casetta del mercatino: in basso a sinistra (x, terra), larga l, alta a (senza tetto). */
function casetta(x, terra, l, a, tetto, tenda, seme) {
  const top = terra - a, colmo = top - l * 0.34, sp = l * 0.07;
  const r = caso(seme);
  let assi = '';
  for (let i = 1; i < 7; i++) assi += `<line x1="${f(x + l * i / 7)}" y1="${f(top)}" x2="${f(x + l * i / 7)}" y2="${terra}" stroke="${C.legnoScuro}" stroke-width="${f(l * .008)}" opacity=".6"/>`;
  const tendaY = top + a * 0.02, tendaA = a * 0.2;
  let smerlo = `M${f(x - sp * .3)} ${f(tendaY)} H${f(x + l + sp * .3)} V${f(tendaY + tendaA)}`;
  const archi = 8, pezzo = (l + sp * .6) / archi;
  for (let i = archi; i > 0; i--) smerlo += ` Q${f(x - sp * .3 + pezzo * (i - .5))} ${f(tendaY + tendaA + pezzo * .55)} ${f(x - sp * .3 + pezzo * (i - 1))} ${f(tendaY + tendaA)}`;
  smerlo += 'Z';
  const bancoY = tendaY + tendaA + a * 0.05, bancoA = a * 0.44;
  // merce sul bancone: palline e lumini
  let merce = '';
  for (let i = 0; i < 9; i++) {
    const mx = x + l * 0.12 + (l * 0.76) * i / 8, my = bancoY + bancoA - a * .06 - r() * a * .1;
    merce += `<circle cx="${f(mx)}" cy="${f(my)}" r="${f(l * (.022 + r() * .016))}" fill="${LUCINE[(i + seme) % LUCINE.length]}" opacity=".95"/>`;
  }
  const appesi = [0.25, 0.5, 0.75].map((k) => `<line x1="${f(x + l * k)}" y1="${f(bancoY)}" x2="${f(x + l * k)}" y2="${f(bancoY + a * .1)}" stroke="${C.legnoScuro}" stroke-width="1.5"/><circle cx="${f(x + l * k)}" cy="${f(bancoY + a * .12)}" r="${f(l * .025)}" fill="#FFF6D8"/>`).join('');
  return `<g>
  <ellipse cx="${f(x + l / 2)}" cy="${f(bancoY + bancoA * .6)}" rx="${f(l * .75)}" ry="${f(a * .65)}" fill="url(#orizzonte)" opacity=".7"/>
  <rect x="${f(x)}" y="${f(top)}" width="${f(l)}" height="${f(a)}" fill="${C.legno}"/>${assi}
  <rect x="${f(x + l * .07)}" y="${f(bancoY)}" width="${f(l * .86)}" height="${f(bancoA)}" rx="${f(l * .02)}" fill="url(#banco)"/>${merce}${appesi}
  <rect x="${f(x - sp * .2)}" y="${f(bancoY + bancoA)}" width="${f(l + sp * .4)}" height="${f(a * .07)}" fill="${C.legnoScuro}"/>
  <path d="${smerlo}" fill="url(#${tenda})"/>
  <path d="M${f(x - sp)} ${f(top + 2)} L${f(x + l / 2)} ${f(colmo)} L${f(x + l + sp)} ${f(top + 2)}Z" fill="${tetto}"/>
  <path d="M${f(x - sp - 2)} ${f(top + 3)} L${f(x + l / 2)} ${f(colmo - 3)} L${f(x + l + sp + 2)} ${f(top + 3)} L${f(x + l + sp - l * .05)} ${f(top + l * .05)} Q${f(x + l * .8)} ${f(top - l * .02)} ${f(x + l * .62)} ${f(colmo + l * .12)} L${f(x + l / 2)} ${f(colmo + l * .07)} L${f(x + l * .38)} ${f(colmo + l * .12)} Q${f(x + l * .2)} ${f(top - l * .02)} ${f(x - sp + l * .05)} ${f(top + l * .05)}Z" fill="${C.neve}"/>
  ${lucineTetto(x - sp, top + 3, x + l / 2, colmo, x + l + sp, l, seme)}
  <circle cx="${f(x + l / 2)}" cy="${f(colmo + l * .09)}" r="${f(l * .045)}" fill="${C.lampada}"/><circle cx="${f(x + l / 2)}" cy="${f(colmo + l * .09)}" r="${f(l * .11)}" fill="url(#bulbo)" opacity=".7"/>
 </g>`;
}

function lucineTetto(xa, ya, xc, yc, xb, l, seme) {
  let out = '';
  const n = 6, g = l * .02;
  for (const [x0, y0, x1, y1, d] of [[xa, ya, xc, yc, 0], [xc, yc, xb, ya, 1]]) {
    for (let i = 1; i < n; i++) {
      const x = x0 + (x1 - x0) * i / n, y = y0 + (y1 - y0) * i / n + g * 1.6;
      const col = LUCINE[(i + d * 3 + seme) % LUCINE.length];
      out += `<circle cx="${f(x)}" cy="${f(y)}" r="${f(g * 2.4)}" fill="${col}" opacity=".3"/><circle cx="${f(x)}" cy="${f(y)}" r="${f(g)}" fill="${col}"/>`;
    }
  }
  return out;
}

/* Festone di lucine fra due punti, con la curva che pende. */
function festone(x1, y1, x2, y2, pende, n, seme, grande) {
  const cx = (x1 + x2) / 2, cy = Math.max(y1, y2) + pende;
  let lampadine = '';
  for (let i = 1; i < n; i++) {
    const t = i / n;
    const x = (1 - t) ** 2 * x1 + 2 * (1 - t) * t * cx + t * t * x2;
    const y = (1 - t) ** 2 * y1 + 2 * (1 - t) * t * cy + t * t * y2;
    const col = LUCINE[(i + seme) % LUCINE.length];
    lampadine += `<circle cx="${f(x)}" cy="${f(y + grande * .9)}" r="${f(grande * 2.6)}" fill="${col}" opacity=".28"/><ellipse cx="${f(x)}" cy="${f(y + grande * .9)}" rx="${f(grande * .78)}" ry="${f(grande)}" fill="${col}"/><circle cx="${f(x - grande * .22)}" cy="${f(y + grande * .6)}" r="${f(grande * .28)}" fill="#fff" opacity=".8"/>`;
  }
  return `<path d="M${f(x1)} ${f(y1)} Q${f(cx)} ${f(cy)} ${f(x2)} ${f(y2)}" fill="none" stroke="#0B1233" stroke-width="${f(grande * .45)}"/>${lampadine}`;
}

function terreno(x, y, l, fondo) {
  return `<path d="M${x} ${y + 14} Q${x + l * .3} ${y - 10} ${x + l * .55} ${y + 4} T${x + l} ${y} V${fondo} H${x}Z" fill="${C.neveOmbra}"/>
  <path d="M${x} ${y + 26} Q${x + l * .35} ${y + 6} ${x + l * .6} ${y + 20} T${x + l} ${y + 18} V${fondo} H${x}Z" fill="${C.neve}"/>`;
}

/* Scena dell'icona in un quadrato 512×512. */
function scenaIcona() {
  const cx = 256;
  return `<rect x="-400" y="-400" width="1312" height="1312" fill="url(#cielo)"/>
  <ellipse cx="256" cy="420" rx="330" ry="190" fill="url(#orizzonte)"/>
  ${stelle(0, 0, 512, 250, 70, 11, (x, y) => Math.abs(x - cx) < 46 && y > 40)}
  ${luna(150, 138, 46)}
  ${torre(cx, 404, 346, 192)}
  ${festone(-14, 226, cx - 13, 190, 60, 9, 0, 6.2)}
  ${festone(cx + 13, 190, 526, 226, 60, 9, 2, 6.2)}
  ${terreno(-400, 432, 1312, 912)}
  ${casetta(20, 476, 184, 114, C.tettoR, 'tendaR', 1)}
  ${casetta(308, 476, 184, 114, C.tettoV, 'tendaV', 3)}
  ${neveCade(0, 0, 512, 470, 28, 23)}`;
}

function svgIcona(lato, protetta) {
  // «protetta» (maskable): Android può ritagliare l'icona a cerchio, quindi il disegno sta nell'80 % centrale
  const k = protetta ? 0.8 : 1, sp = 256 * (1 - k);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${lato}" height="${lato}" viewBox="0 0 512 512">${defs()}
  <rect width="512" height="512" fill="url(#cielo)"/>
  <g transform="translate(${sp} ${sp}) scale(${k})">${scenaIcona()}</g></svg>`;
}

/* Anteprima del link: 1200×630, scritte a sinistra, scena a destra. */
function svgAnteprima() {
  const cx = 880;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">${defs()}
  <rect width="1200" height="630" fill="url(#cielo)"/>
  <ellipse cx="840" cy="560" rx="620" ry="260" fill="url(#orizzonte)"/>
  ${stelle(0, 0, 1200, 360, 150, 5, (x, y) => (x < 640 && y > 90 && y < 470) || (Math.abs(x - cx) < 70 && y > 60))}
  ${luna(1086, 118, 46)}
  ${torre(cx, 522, 470, 262)}
  ${festone(560, 300, cx - 18, 238, 70, 10, 1, 7.5)}
  ${festone(cx + 18, 238, 1214, 300, 70, 10, 3, 7.5)}
  ${terreno(0, 536, 1200, 630)}
  ${casetta(626, 584, 196, 112, C.tettoR, 'tendaR', 1)}
  ${casetta(944, 584, 196, 112, C.tettoV, 'tendaV', 3)}
  ${casetta(24, 604, 110, 62, C.tettoV, 'tendaG', 5)}
  ${casetta(158, 604, 110, 62, C.tettoR, 'tendaV', 2)}
  ${casetta(292, 604, 110, 62, C.tettoV, 'tendaR', 4)}
  ${casetta(426, 604, 110, 62, C.tettoR, 'tendaG', 6)}
  ${festone(-10, 470, 600, 470, 40, 16, 4, 5)}
  ${neveCade(0, 0, 1200, 560, 46, 31)}
  <g font-family="'Bricolage Grotesque', Figtree, sans-serif">
   <text x="64" y="150" font-family="Figtree, sans-serif" font-weight="700" font-size="34" fill="${C.lampada}" letter-spacing="1">13 – 17 dicembre 2026</text>
   <text x="60" y="250" font-weight="800" font-size="92" fill="#F1F5FF">Parigi e Disney</text>
   <text x="60" y="345" font-weight="800" font-size="92" fill="${C.lampada}">a Natale</text>
   <text x="64" y="414" font-family="Figtree, sans-serif" font-weight="600" font-size="33" fill="#C9D4F0">Mercatini, alloggi e giorno per giorno</text>
  </g></svg>`;
}

async function main() {
  fs.mkdirSync(USCITA, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 1 });
  const disegna = async (svg, l, a, file, tipo) => {
    await page.setViewportSize({ width: l, height: a });
    await page.setContent(`<!doctype html><html><head><meta charset="utf-8">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,800&family=Figtree:wght@600;700&display=block">
      <style>html,body{margin:0;background:#0A1230}svg{display:block}</style></head><body>${svg}</body></html>`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const opz = { path: path.join(USCITA, file), clip: { x: 0, y: 0, width: l, height: a } };
    if (tipo === 'jpeg') Object.assign(opz, { type: 'jpeg', quality: 86 });
    await page.screenshot(opz);
    console.log(`Scritto ${path.relative(RADICE, opz.path)} (${l}×${a}, ${Math.round(fs.statSync(opz.path).size / 1024)} KB)`);
  };
  for (const lato of [512, 192, 180]) await disegna(svgIcona(lato, false), lato, lato, `icona-${lato}.png`);
  await disegna(svgIcona(512, true), 512, 512, 'icona-maskable-512.png');
  await disegna(svgAnteprima(), 1200, 630, 'anteprima.jpg', 'jpeg');
  await browser.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
