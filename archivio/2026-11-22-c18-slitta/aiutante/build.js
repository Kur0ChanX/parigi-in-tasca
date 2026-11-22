// Costruisce slitta.svg.html (lo snippet) e prova.html (pagina di prova con la scena vera).
// Uso: node build.js   (legge la pagina vera solo in lettura)
const fs = require('fs'), path = require('path');
const DIR = __dirname;
const PAGINA = '/home/user/parigi-in-tasca/dicembre/parigi-disney-natale.html';

/* ---------- renna scheletrica, vista di lato, guarda a sinistra; origine = centro della gabbia toracica ---------- */
const S_SPALLA = [-4.6, .6], S_GOMITO = [-8.6, 3.8], S_ANCA = [8.4, -.8], S_GINOCCHIO = [11.2, 3.4];
const zampaAnt = c => `<g class="sl-gz sl-za"><path class="${c}" d="M-4.6 .6 L-8.6 3.8" stroke-width="1.3"/><g class="sl-gz sl-zb"><path class="${c}" d="M-8.6 3.8 L-12.9 4.6 L-15.6 6" stroke-width=".9"/><circle class="${c}f" cx="-8.6" cy="3.8" r=".7"/><path class="sl-zoc" d="M-15 5.3 l-1.9 .3 l.2 1.5 l1.7 -.4z"/></g></g>`;
const zampaPost = c => `<g class="sl-gz sl-zc"><path class="${c}" d="M8.4 -.8 L11.2 3.4" stroke-width="1.4"/><g class="sl-gz sl-zd"><path class="${c}" d="M11.2 3.4 L14.6 3.7 L18.4 5.6" stroke-width=".9"/><circle class="${c}f" cx="11.2" cy="3.4" r=".75"/><circle class="${c}f" cx="14.6" cy="3.7" r=".5"/><path class="sl-zoc" d="M17.9 4.8 l1.8 .7 l-.5 1.5 l-1.7 -.6z"/></g></g>`;
const palco = c => `<g class="${c}" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-12.9 -11.1 C-12.5 -14.4 -10.9 -17.5 -8 -19.7 C-6.6 -20.7 -5.3 -20.8 -4.2 -20.2" stroke-width=".85"/><path d="M-12.3 -13.9 C-13.6 -14.9 -14.6 -16.3 -15 -18" stroke-width=".65"/><path d="M-11.1 -16.4 C-12 -17.9 -12.2 -19.6 -11.9 -21.2" stroke-width=".6"/><path d="M-9.2 -18.7 C-9.7 -20.3 -9.5 -21.8 -8.9 -23" stroke-width=".55"/><path d="M-6.6 -20.4 C-6.2 -21.7 -5.6 -22.6 -4.6 -23.2" stroke-width=".5"/></g>`;
const costole = () => {
  // costole che pendono dalla spina (y della spina ~ -4.4), più corte verso il bacino
  const X = [-4.4, -2.5, -.6, 1.3, 3.2, 5.0], L = [6.6, 7.4, 7.6, 7.2, 6.2, 4.8];
  return X.map((x, i) => { const y = -4.3 + Math.abs(x) * .03 + (x > 3 ? .3 : 0); return `<path d="M${x} ${y.toFixed(2)} C${(x - 1.6).toFixed(2)} ${(y + 2.6).toFixed(2)} ${(x - .7).toFixed(2)} ${(y + L[i] - 1.2).toFixed(2)} ${(x + .9).toFixed(2)} ${(y + L[i]).toFixed(2)}"/>`; }).join('');
};
const renna = (n, tx, ty, sc, dl) => `<g class="sl-renna" transform="translate(${tx} ${ty}) scale(${sc})" style="--sl-d:${dl}s">
<g transform="translate(1.7 -.8)" style="--sl-dl:-.11s">${zampaAnt('sl-o2')}${zampaPost('sl-o2')}</g>
<g transform="translate(1.9 .5) rotate(6 -13 -11)">${palco('sl-o2')}</g>
<path class="sl-o" d="M10.6 -2.6 l2.3 -1.8 l1.9 -.6" stroke-width=".8" stroke-dasharray=".9 .45"/>
<path class="sl-o" d="M-6.2 -2.8 C-1.5 -5.2 4.5 -5 10.8 -2.6" stroke-width="1.35"/>
<g class="sl-o sl-cost" stroke-width=".85">${costole()}</g>
<path class="sl-o2" d="M-5 3.4 C-2 5.2 2.4 5 6 2.4" stroke-width=".55"/>
<path class="sl-of" d="M6.5 -3 C7.9 -4.5 10.6 -4.1 11.1 -2.2 C11.5 -.5 9.7 .5 8.5 .1 C7.1 -.3 6 -1.7 6.5 -3Z"/><circle class="sl-buco" cx="8.9" cy="-1.9" r=".75"/>
<path class="sl-of" d="M-7 -2.4 L-3.4 -3.7 L-4.1 .9Z"/>
<path class="sl-o" d="M-6 -2.6 C-8.3 -4.6 -10.3 -6.6 -11.8 -8.3" stroke-width="1.8" stroke-dasharray="1.05 .42"/>
<ellipse class="sl-coll" cx="-6.4" cy="-1.6" rx="1.5" ry="3.3" transform="rotate(-24 -6.4 -1.6)"/><circle class="sl-camp" cx="-7.6" cy="1.9" r=".75"/>
<path class="sl-of" d="M-11.1 -9.3 C-11.3 -10.9 -12.7 -11.8 -14.3 -11.5 C-15.5 -11.3 -16.5 -10.4 -17.9 -9.6 L-20.3 -8.4 C-21.1 -8 -20.9 -7 -20.1 -6.9 L-16.3 -6.5 C-14.3 -6.2 -12.5 -6.6 -11.7 -7.6Z"/>
<ellipse class="sl-buco" cx="-14.5" cy="-9.3" rx="1.2" ry="1"/><circle class="sl-buco" cx="-19.6" cy="-7.8" r=".38"/>
<path class="sl-buco-l" d="M-19.6 -6.95 L-15.6 -6.7"/>
${palco('sl-o')}
<path class="sl-rim" d="M-11.6 -10.6 C-12.6 -11.6 -14.4 -11.7 -15.9 -10.7 L-18.6 -9.2 M-5.6 -3.4 C-1.2 -5.6 4.4 -5.4 10.2 -3.2 M-12.6 -12 C-12 -15 -10.6 -17.6 -8.2 -19.4" stroke-width=".42"/>
<g>${zampaAnt('sl-o')}${zampaPost('sl-o')}</g>
</g>`;

/* ---------- slitta-bara, figura magra, pentolone dei regali, pattini di ferro arricciati ---------- */
const dono = (cls, x, y, r, w = 4.4, h = 4) => `<g class="${cls}" transform="translate(${x} ${y}) rotate(${r})"><rect class="sl-dc" x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx=".35"/><path class="sl-dn" d="M${-w / 2} -.42h${w}v.84h${-w}z M-.42 ${-h / 2}h.84v${h}h-.84z"/><path class="sl-dn" d="M0 ${-h / 2} c-.5 -1.3 -2 -1.2 -1.6 -.2z M0 ${-h / 2} c.5 -1.3 2 -1.2 1.6 -.2z"/><path class="sl-rim" d="M${-w / 2 + .2} ${-h / 2 + .1}h${w - .4}" stroke-width=".4"/></g>`;

const slitta = `
<g class="sl-pattini" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path class="sl-fer2" d="M81 3.5 C83.8 5.6 83.4 10 79.4 10 L11 10 C4.6 10 .6 6.8 1.2 2.6 C1.8 -1.6 7.2 -2 8 1.4" stroke-width="1"/>
<path class="sl-mont" d="M17 5.2 C13.8 7.800000000000001 19.6 9.600000000000001 16.6 12.6 M15.9 8.3 l-1.6 -.9 M29 5.2 C25.8 7.800000000000001 31.6 9.600000000000001 28.6 12.6 M27.9 8.3 l-1.6 -.9 M41 5.2 C37.8 7.800000000000001 43.6 9.600000000000001 40.6 12.6 M39.9 8.3 l-1.6 -.9 M53 5.2 C49.8 7.800000000000001 55.6 9.600000000000001 52.6 12.6 M51.9 8.3 l-1.6 -.9 M68 1.6 C64.8 4.2 70.6 6.0 67.6 12.6 M66.9 4.7 l-1.6 -.9 M78 1.6 C74.8 4.2 80.6 6.0 77.6 12.6 M76.9 4.7 l-1.6 -.9" stroke-width=".75"/>
<path class="sl-fer" d="M84.6 5.8 C87.4 8 87 12.8 82.6 12.8 L12.6 12.8 C5.6 12.8 1.4 9.4 2 5 C2.6 .8 8.2 .4 9 3.9 C9.5 6.4 6.9 7.6 5.7 6.2" stroke-width="1.35"/>
<path class="sl-fer" d="M84.6 5.8 C83 4.6 81.6 4.8 81.2 6" stroke-width="1"/>
</g>
<path class="sl-rim sl-rim-b" d="M84.8 5.2 C87.6 7.6 87.2 12.2 82.6 12.2 L12.6 12.2 C5.4 12.2 1 8.8 1.5 4.8 C2 .6 7.8 -.2 8.9 3.4" stroke-width=".4"/>
<g transform="translate(59.6 -5.4) rotate(14)">
 <path class="sl-legno" d="M-3.4 -27.5 L3.4 -27.5 L5.7 -20.4 L3.1 0 L-3.1 0 L-5.7 -20.4Z"/>
 <path class="sl-fodera" d="M-2.3 -25.5 L2.3 -25.5 L4 -20.2 L2.1 -1.8 L-2.1 -1.8 L-4 -20.2Z"/>
 <path class="sl-rim" d="M-5.4 -20.2 L-3.2 -27.3 L3.2 -27.3" stroke-width=".5"/>
</g>
<g class="sl-pentola" transform="translate(4 0)">
 <path class="sl-pent" d="M61.8 -18.6 C60.6 -12 61.4 -4 65 -.4 C67.6 2.2 74.4 2.2 77 -.4 C80.6 -4 81.4 -12 80.2 -18.6Z"/>
 ${dono('sl-dA', 66, -21.4, -14, 4.6, 4.2)}${dono('sl-dC', 72.6, -22.2, 9, 4.2, 4.4)}${dono('sl-dB', 76.2, -20.4, 22, 3.4, 3.2)}
 <rect class="sl-bordo" x="60.4" y="-20.2" width="21.2" height="2.6" rx="1.1"/>
 <path class="sl-spir" d="M71 -8.6 m-3.2 0 a3.2 3.2 0 1 1 3.2 3.2 a1.9 1.9 0 1 1 -1.9 -1.9 a.8 .8 0 1 1 .8 .8" fill="none" stroke-width=".6"/>
 <path class="sl-rim" d="M61 -19.8 L78 -19.8 M62.2 -16 C61.6 -11.6 62 -6.6 63.6 -3.4" stroke-width=".45"/>
</g>
<g class="sl-figura">
 <path class="sl-rosso2" d="M50.6 -20.4 L46.4 -16.6 L41.9 -14.4" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
 <path class="sl-rossof" d="M47.6 -5 C47.3 -11 48.1 -17 49.5 -21.6 L53.5 -21.8 C54.1 -17 53.9 -11 53.3 -5Z"/>
 <path class="sl-pellof" d="M47.9 -5.2 C47.7 -10.8 48.4 -16.6 49.6 -21 L50.6 -21 C49.6 -16.4 49 -10.8 49.1 -5.2Z"/>
 <rect class="sl-cint" x="47.4" y="-10.2" width="6.4" height="1.2"/>
 <path class="sl-rosso" d="M50.2 -6.6 L43.2 -9.6 L41.2 -6" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
 <ellipse class="sl-pellof" cx="51.4" cy="-21.9" rx="2.6" ry="1.1"/>
 <circle class="sl-volto" cx="51.1" cy="-25.2" r="2.55"/>
 <ellipse class="sl-buco" cx="49.6" cy="-25.6" rx=".55" ry=".7"/><ellipse class="sl-buco" cx="51.4" cy="-25.7" rx=".5" ry=".68"/>
 <path class="sl-buco-l" d="M49 -23.9 q1.3 .8 2.9 0"/>
 <path class="sl-rossof" d="M49 -27.3 C49.7 -31 52.1 -33.6 55.2 -34.4 C57.1 -34.8 58.6 -33.7 59 -31.7 C57.7 -32.8 56.1 -32.6 55.3 -31.3 L53.7 -27.5Z"/>
 <circle class="sl-pellof" cx="59.1" cy="-30.9" r="1.05"/>
 <path class="sl-pellof" d="M48.6 -26.8 C49.5 -28.1 52.6 -28.3 54 -27.2 L53.8 -26.1 C52.5 -27 49.8 -27 48.7 -25.9Z"/>
 <path class="sl-rosso" d="M51.9 -20.1 L47.5 -15.6 L42.7 -13.1" fill="none" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round"/>
 <circle class="sl-guanto" cx="42.2" cy="-13.4" r=".95"/><circle class="sl-guanto" cx="41.6" cy="-14.5" r=".8"/>
 <path class="sl-rim" d="M49.2 -27.6 C50 -31 52.2 -33.4 55.2 -34.3 M49.7 -21.3 C48.6 -17 48 -11 48 -6" stroke-width=".42"/>
</g>
<path class="sl-legno" d="M11.6 -6.4 L64 -6.4 L62.4 5.2 L14 5.2Z"/>
<path class="sl-legno2" d="M12.8 -1.9 L63.2 -1.9 M13.6 1.9 L62.6 1.9" fill="none" stroke-width=".45"/>
<rect class="sl-legno3" x="10.9" y="-7.7" width="53.2" height="1.8" rx=".5"/>
<path class="sl-mani" d="M24 -.2 h6.2 M24.6 -1.4 v2.4 M29.6 -1.4 v2.4 M43 -.2 h6.2 M43.6 -1.4 v2.4 M48.6 -1.4 v2.4" fill="none" stroke-width=".7" stroke-linecap="round"/>
<path class="sl-rim" d="M11.4 -7.5 L63.8 -7.5 M12 -6 L13.7 4.4" stroke-width=".5"/>`;

/* ---------- tutta la squadra: tre renne in salita verso sinistra, redini fino alle mani ---------- */
const R = [[-82, -25, .9, 0], [-48, -14.5, .92, -.27], [-14, -4, .94, -.53]];
const coll = R.map(([x, y, s]) => [+(x - 6.4 * s).toFixed(2), +(y - 1.4 * s).toFixed(2)]);
const redini = `<g class="sl-redini" fill="none">
<path d="M12 -2.4 Q-1 -1.2 ${coll[2][0]} ${coll[2][1]} Q${coll[2][0] - 18} ${coll[2][1] - 3.4} ${coll[1][0]} ${coll[1][1]} Q${coll[1][0] - 18} ${coll[1][1] - 3.4} ${coll[0][0]} ${coll[0][1]}" stroke-width=".5"/>
<path d="M42 -14 C22 -11.6 2 -8.4 ${coll[2][0] + .4} ${coll[2][1] - .9} C${coll[2][0] - 14} ${coll[2][1] - 4.6} ${coll[1][0] + 12} ${coll[1][1] - 2.8} ${coll[1][0] + .4} ${coll[1][1] - .9} C${coll[1][0] - 14} ${coll[1][1] - 4.4} ${coll[0][0] + 12} ${coll[0][1] - 2.8} ${coll[0][0] + .4} ${coll[0][1] - .9}" stroke-width=".42"/>
</g>`;

const defs = `<defs>
 <linearGradient id="slOssoG" gradientUnits="userSpaceOnUse" x1="0" y1="-12" x2="0" y2="7"><stop offset="0" style="stop-color:var(--sl-osso)"/><stop offset="1" style="stop-color:var(--sl-osso2)"/></linearGradient>
 <linearGradient id="slLegnoG" gradientUnits="userSpaceOnUse" x1="0" y1="-8" x2="0" y2="6"><stop offset="0" style="stop-color:var(--sl-legno)"/><stop offset="1" style="stop-color:var(--sl-legno2)"/></linearGradient>
 <radialGradient id="slPentolaG" gradientUnits="userSpaceOnUse" cx="66" cy="-15" r="17"><stop offset="0" style="stop-color:var(--sl-pent)"/><stop offset="1" style="stop-color:var(--sl-ombra)"/></radialGradient>
 <linearGradient id="slRossoG" gradientUnits="userSpaceOnUse" x1="47" y1="-30" x2="56" y2="-6"><stop offset="0" style="stop-color:var(--sl-rosso)"/><stop offset="1" style="stop-color:var(--sl-rosso2)"/></linearGradient>
 <radialGradient id="slLunaR"><stop offset=".62" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
 <mask id="slLunaM" maskUnits="userSpaceOnUse" x="190" y="34" width="100" height="72"><g fill="url(#slLunaR)"><circle cx="240" cy="76" r="18"/><circle cx="224.74" cy="63.4" r="11.8"/><circle cx="255.26" cy="63.4" r="11.8"/></g></mask>
</defs>`;

const doniCadono = [['sl-dA', 0], ['sl-dB', 1], ['sl-dC', 2], ['sl-dD', 3], ['sl-dA', 4]]
  .map(([c]) => `<g class="sl-dono" opacity="0">${dono(c, 0, 0, 0, 5.4, 4.9)}</g>`).join('');

const snippet = `<!-- slitta volante (passa ogni 40–70 s davanti alla luna): incollare dopo lo strato del castello, prima del primo piano -->
<g id="slitta" class="par" data-depth="-0.05" data-max="22" aria-hidden="true">
${defs}
<g class="sl-volo"><g id="slDisegno">
${redini}
${renna(1, R[0][0], R[0][1], R[0][2], R[0][3])}
${renna(2, R[1][0], R[1][1], R[1][2], R[1][3])}
${renna(3, R[2][0], R[2][1], R[2][2], R[2][3])}
${slitta}
</g></g>
<!-- controluce: davanti alla luna la stessa slitta diventa sagoma scura (copia con maschera morbida sul disco) -->
<g class="sl-controluce" mask="url(#slLunaM)"><use class="sl-volo2" href="#slDisegno"/></g>
<g class="sl-doni">${doniCadono}</g>
</g>`.replace(/\n\s*\n/g, '\n');
fs.writeFileSync(path.join(DIR, 'slitta.svg.html'), snippet + '\n');

/* ---------- pagina di prova: copia testata, stili e script della scena dalla pagina vera ---------- */
const P = fs.readFileSync(PAGINA, 'utf8');
const between = (a, b, from = 0) => { const i = P.indexOf(a, from); if (i < 0) throw new Error('manca ' + a); const j = P.indexOf(b, i); if (j < 0) throw new Error('manca ' + b); return [i, j]; };
const [s0, s1] = between('<style>', '</style>');
const style = P.slice(s0, s1 + 8);
const [h0, h1] = between('<header class="hero" id="top">', '</header>');
let header = P.slice(h0, h1 + 9);
const MARK = '  <!-- primo piano:';
if (!header.includes(MARK)) throw new Error('manca il segno del primo piano');
header = header.replace(MARK, snippet + '\n' + MARK);
const [b0] = between('const BU=[', '\n');
const [b1] = between('drawGarland();\n', '\n', b0);
const scena = P.slice(b0, b1 + 'drawGarland();'.length);
const [c0] = between("const cv=$('#sky')", '\n');
const [c1] = between('/* parallasse leggero', '\n', c0);
const [c2] = between('\n})();\n</script>', '\n', c1);
const cielo = P.slice(c0, c2);
const css = fs.readFileSync(path.join(DIR, 'slitta.css'), 'utf8');
const js = fs.readFileSync(path.join(DIR, 'slitta.js'), 'utf8');
const prova = `<!doctype html>
<html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Prova slitta</title>
<script>if(/[?&]vino\\b/.test(location.search))document.documentElement.dataset.palette='vino';</script>
${style}
<style>
/* solo per la prova: niente schede né barra */
body{margin:0;background:var(--bg);color:var(--ink);font-family:var(--text)}
.prova-sotto{padding:24px 16px 1200px;max-width:40rem}
${css}
</style></head><body>
${header}
<div class="prova-sotto"><p>Sotto la testata: pagina di prova della slitta. <code>?vino</code> = tavolozza Vin brulé, <code>?foto</code> = cielo fermo (niente fuochi), slitta solo a comando (<code>slVai({dir:-1,ferma:.5})</code>).</p></div>
<script>
(()=>{
const $=s=>document.querySelector(s);
const FOTO=/[?&]foto\\b/.test(location.search);
const RM=FOTO||matchMedia('(prefers-reduced-motion: reduce)').matches;
const VINO=()=>document.documentElement.dataset.palette==='vino';
${scena}
${cielo}
})();
</script>
<script>
${js}
</script>
</body></html>
`;
fs.writeFileSync(path.join(DIR, 'prova.html'), prova);
console.log('snippet', snippet.length, 'byte; prova', prova.length, 'byte');
