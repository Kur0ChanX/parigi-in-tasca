#!/usr/bin/env node
// Allineamenti (C531, kit; Mario 20/11: «non segui la riga … numeri nei cerchi un po' spostati … ti attacchi a una
// scritta»): misura nel browser i pezzi piccoli della grafica, invece di guardarli a occhio in una foto.
//
// Cinque controlli (tolleranze in px, cambiabili con `tolleranze`):
//   dentro    icona (±1, forma del disegno), numero, «?» o emoji (±2, pixel veri) al centro del suo cerchio o tasto
//   in riga   pezzi piccoli di una riga flessibile «al centro» con i centri allineati (±1,5)
//   staccato  almeno 4 px fra un segno e la scritta accanto (3 fra due scritte)
//   insieme   un segno (icona, numero, emoji) non resta a fine riga con la sua scritta andata a capo
//   simmetria (Mario 20/11 «lavorare simmetrico quando c'è bisogno») spazi uguali fra 3 o più pezzi uguali in fila
//             (±1,5) e, dentro un tasto o bollino col contenuto al centro, lo stesso spazio ai due lati (±2)
// Senza conflitti con la grafica: «in riga» guarda solo le righe con `align-items: center` (chi ha scelto la riga del
// testo o l'alto non viene toccato); i pezzi messi sopra (position absolute o fixed, es. un pallino su un angolo) e
// l'interno dei bollini composti (icona + testo) non contano. Un'eccezione voluta (pezzi che DEVONO toccarsi o stare
// storti) si scrive nel codice: `data-allinea="libero"` sull'elemento o su un contenitore, con un commento sul perché.
//
// Nelle prove (Playwright):
//   import { controllaAllineamenti } from '<radice>/tools/allineamenti.mjs';
//   expect(await controllaAllineamenti(page, { zona: '#plancia-legenda' })).toEqual([]);   // [] = tutto a posto
// Da comando (pagina che si apre da sola, file o indirizzo):
//   node tools/allineamenti.mjs <url|file.html> [--larghezze 390,1366] [--zona <selettore>] [--foto <cartella>]
//   uscita 0 = a posto, 1 = problemi (uno per riga), 2 = errore d'uso. `--foto`: foto coi problemi cerchiati di rosso.
// Ogni misura lascia il segno in `.git/allineamenti.json` (ora, dove, quanti problemi): lo legge l'hook
// `allineamenti.py` prima che una foto dell'app parta verso Mario.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// `dentroTesto` più largo di `dentro`: Chrome disegna le scritte su pixel interi, quindi la STESSA cifra centrata dal CSS
// risulta spostata da 0 a ~1 px secondo dove cade la pagina (esperimento Codice 39: «7» in DejaVu fra −0,5 e −1,7 px,
// in Inter fra +0,5 e −0,5; nessuna correzione regge su tutte le misure). Sopra 2 px è un margine o una spaziatura storta.
// Le icone svg non hanno questo rumore (forma del disegno): 1 px.
export const TOLLERANZE = { dentro: 1, dentroTesto: 2, riga: 1.5, spazio: 4, spazioTesti: 3, uguali: 1.5, lati: 2 };

// Gira DENTRO la pagina (serializzata da page.evaluate): niente variabili di fuori.
export function scansione({ zona = null, tolleranze = {}, pixel = false } = {}) {
  const T = { dentro: 1, dentroTesto: 2, riga: 1.5, spazio: 4, spazioTesti: 3, uguali: 1.5, lati: 2, ...tolleranze };
  const radici = zona ? [...document.querySelectorAll(zona)] : [document.body];
  if (!radici.length) return [{ tipo: 'zona', dove: zona, cosa: 'zona non trovata' }];
  const problemi = [];
  const tela = document.createElement('canvas').getContext('2d');
  const stile = (el) => getComputedStyle(el);
  const tondo = (n) => Math.round(n * 10) / 10;
  const vede = (el) => {
    if (!el.isConnected) return false;
    const r = el.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) return false;
    const c = stile(el);
    return c.visibility !== 'hidden' && c.display !== 'none' && Number(c.opacity) > 0.05;
  };
  const libero = (el) => !!el.closest('[data-allinea="libero"]');
  const sopra = (el) => ['absolute', 'fixed'].includes(stile(el).position);
  const nome = (el) => {
    const pezzi = [];
    for (let e = el, i = 0; e && e !== document.body && i < 3; e = e.parentElement, i++) {
      let s = e.tagName.toLowerCase();
      if (e.id) { pezzi.unshift(`${s}#${e.id}`); break; }
      const cl = [...e.classList].slice(0, 2).join('.');
      if (cl) s += `.${cl}`;
      pezzi.unshift(s);
    }
    return pezzi.join(' > ');
  };
  const testoDi = (el) => (el.textContent || '').replace(/\s+/g, ' ').trim();
  const colorePieno = (c) => c && c !== 'transparent' && !/rgba?\([^)]*,\s*0\)$/.test(c) && !/\/\s*0\)$/.test(c);
  // Bollino: un pezzo che si vede come forma (fondo, bordo o ombra), non solo testo.
  const bollino = (el) => {
    const c = stile(el);
    const bordo = ['Top', 'Right', 'Bottom', 'Left'].some((l) => parseFloat(c[`border${l}Width`]) > 0 && c[`border${l}Style`] !== 'none' && colorePieno(c[`border${l}Color`]));
    return colorePieno(c.backgroundColor) || bordo || (c.boxShadow && c.boxShadow !== 'none') || c.backgroundImage !== 'none';
  };
  // Inchiostro vero di un testo corto (cifre, «?», emoji): la lettera si disegna 8 volte più grande su una tela e si
  // contano i pixel accesi. `measureText` da solo no: in Chrome arrotonda i bordi delle lettere e sbaglia fino a 1,5 px
  // (misura Codice 39 contro la foto: «?» −1,5 invece di −0,5).
  const glifi = new Map();
  const glifo = (testo, c) => {
    const k = 8, px = parseFloat(c.fontSize) * k;
    const font = `${c.fontStyle} ${c.fontWeight} ${px}px ${c.fontFamily}`;
    const chiave = `${font}|${testo}`;
    if (glifi.has(chiave)) return glifi.get(chiave);
    const tela = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
    tela.font = font;
    const largo = tela.measureText(testo).width;
    const margine = Math.ceil(px), base = Math.ceil(px * 2.5);
    tela.canvas.width = Math.ceil(largo + margine * 2);
    tela.canvas.height = Math.ceil(px * 4);
    tela.font = font; // cambiare la misura della tela azzera il carattere
    tela.textBaseline = 'alphabetic';
    tela.fillStyle = '#000';
    tela.fillText(testo, margine, base);
    const { data, width: W, height: H } = tela.getImageData(0, 0, tela.canvas.width, tela.canvas.height);
    let l = W, r = -1, t = H, b = -1;
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      if (data[(y * W + x) * 4 + 3] < 128) continue;
      if (x < l) l = x; if (x > r) r = x; if (y < t) t = y; if (y > b) b = y;
    }
    // In px veri: orizzontale rispetto al centro del passo della lettera, verticale rispetto alla riga di base.
    const g = r < 0 ? null : { cx: ((l + r + 1) / 2 - margine - largo / 2) / k, t: (t - base) / k, b: (b + 1 - base) / k };
    glifi.set(chiave, g);
    return g;
  };
  const inchiostroTesto = (nodo) => {
    const g = document.createRange();
    g.selectNodeContents(nodo);
    const r = [...g.getClientRects()].find((x) => x.width > 0);
    if (!r) return null;
    const c = stile(nodo.parentElement);
    const ink = glifo(nodo.textContent.trim(), c);
    if (!ink) return null;
    // Riga di base nella pagina: il riquadro della scritta va da «sopra» a «sotto» del carattere, nella sua proporzione.
    tela.font = `${c.fontStyle} ${c.fontWeight} ${c.fontSize} ${c.fontFamily}`;
    const m = tela.measureText(nodo.textContent.trim());
    const base = r.top + r.height * (m.fontBoundingBoxAscent / (m.fontBoundingBoxAscent + m.fontBoundingBoxDescent || 1));
    const centro = (r.left + r.right) / 2 + ink.cx;
    return { l: centro, r: centro, t: base + ink.t, b: base + ink.b };
  };
  // Forma vera di un'icona svg (`getBBox`, portata sullo schermo): un disegno storto dentro il suo riquadro si vede.
  const inchiostroSvg = (svg) => {
    try {
      const bb = svg.getBBox(), m = svg.getScreenCTM();
      if (bb.width > 0 && bb.height > 0 && m) {
        const pp = [[bb.x, bb.y], [bb.x + bb.width, bb.y], [bb.x, bb.y + bb.height], [bb.x + bb.width, bb.y + bb.height]]
          .map(([x, y]) => new DOMPoint(x, y).matrixTransform(m));
        return { l: Math.min(...pp.map((p) => p.x)), r: Math.max(...pp.map((p) => p.x)), t: Math.min(...pp.map((p) => p.y)), b: Math.max(...pp.map((p) => p.y)) };
      }
    } catch { /* svg senza forme misurabili: il riquadro */ }
    const s = svg.getBoundingClientRect();
    return { l: s.left, r: s.right, t: s.top, b: s.bottom };
  };
  // Un pezzo dentro `el` messo sopra (absolute o fixed, es. il numerino su un angolo) non è inchiostro della riga.
  const dentroSopra = (x, el) => {
    for (let e = x; e && e !== el; e = e.parentElement) if (sopra(e)) return true;
    return false;
  };
  // Inchiostro di un pezzo: scritte (riga del carattere), icone (svg, img) e bollini dentro; senza niente, il riquadro.
  // Pezzo tagliato da un contenitore con `overflow` non visibile (es. testo tagliato a 2 righe con `line-clamp`): conta
  // solo la parte che si vede, o niente. Prima contavano anche le righe nascoste (falso «in riga» di 14 px sulla riga di
  // 5stelle del PC col carattere di GitHub, Codice 41).
  const ritaglia = (r, da) => {
    let { left: l, right: rr, top: t, bottom: b } = r;
    for (let e = da; e && e !== document.documentElement; e = e.parentElement) {
      const c = stile(e);
      if (c.overflowX === 'visible' && c.overflowY === 'visible') continue;
      const q = e.getBoundingClientRect();
      if (c.overflowX !== 'visible') { l = Math.max(l, q.left); rr = Math.min(rr, q.right); }
      if (c.overflowY !== 'visible') { t = Math.max(t, q.top); b = Math.min(b, q.bottom); }
    }
    return rr - l > 0.5 && b - t > 0.5 ? { left: l, right: rr, top: t, bottom: b, width: rr - l, height: b - t } : null;
  };
  const inchiostro = (el, interno = false) => {
    if (!interno && bollino(el)) { const b = el.getBoundingClientRect(); return { l: b.left, r: b.right, t: b.top, b: b.bottom }; }
    const rr = [];
    const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    for (let n = w.nextNode(); n; n = w.nextNode()) {
      if (!n.textContent.trim() || !vede(n.parentElement) || dentroSopra(n.parentElement, el)) continue;
      const g = document.createRange();
      g.selectNodeContents(n);
      rr.push(...[...g.getClientRects()].filter((x) => x.width > 0).map((x) => ritaglia(x, n.parentElement)).filter(Boolean));
    }
    const dentroBollino = (x) => { for (let e = x.parentElement; e && e !== el; e = e.parentElement) if (bollino(e)) return true; return false; };
    for (const x of el.querySelectorAll('svg, img, canvas')) if (vede(x) && !x.parentElement.closest('svg') && !dentroSopra(x, el) && !dentroBollino(x)) { const v = ritaglia(x.getBoundingClientRect(), x.parentElement); if (v) rr.push(v); }
    for (const x of el.querySelectorAll('*')) if (x !== el && vede(x) && !dentroSopra(x, el) && bollino(x) && !x.closest('svg')) { const v = ritaglia(x.getBoundingClientRect(), x.parentElement); if (v) rr.push(v); }
    if (!rr.length) { const b = el.getBoundingClientRect(); return { l: b.left, r: b.right, t: b.top, b: b.bottom }; }
    return { l: Math.min(...rr.map((x) => x.left)), r: Math.max(...rr.map((x) => x.right)), t: Math.min(...rr.map((x) => x.top)), b: Math.max(...rr.map((x) => x.bottom)) };
  };
  const haLettere = (el) => /\p{L}{2,}/u.test(testoDi(el));
  const soloSegno = (el) => !haLettere(el) && (testoDi(el).length > 0 || !!el.querySelector('svg, img') || bollino(el));
  const segno = (el) => !haLettere(el) || bollino(el);
  const cy = (x) => (x.t + x.b) / 2;
  const cx = (x) => (x.l + x.r) / 2;

  const visti = new Set();
  for (const radice of radici) {
    for (const el of [radice, ...radice.querySelectorAll('*')]) {
      if (visti.has(el) || !vede(el) || libero(el) || el.closest('svg')) continue;
      visti.add(el);
      const c = stile(el);
      const b = el.getBoundingClientRect();

      // 1 · dentro: un solo segno (icona, oppure 1–4 caratteri senza lettere vere) al centro del suo bollino.
      if (b.width <= 64 && b.height <= 64 && b.width >= 8 && bollino(el) && !sopra(el)) {
        const svg = [...el.querySelectorAll('svg')].filter(vede);
        const testi = [];
        const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        for (let n = w.nextNode(); n; n = w.nextNode()) if (n.textContent.trim() && vede(n.parentElement)) testi.push(n);
        const t = testi.map((n) => n.textContent.trim()).join('');
        let ink = null;
        const bl = parseFloat(c.borderLeftWidth), br = parseFloat(c.borderRightWidth), bt = parseFloat(c.borderTopWidth), bb = parseFloat(c.borderBottomWidth);
        const dentro = { l: b.left + bl, r: b.right - br, t: b.top + bt, b: b.bottom - bb };
        // Bollino che ne contiene un altro (Codice 44: la cella di oggi dei Turni, sfondo leggero, con dentro la casella
        // del turno, striscia colorata di 3 px a sinistra): il segno si misura nel bollino dentro, che ha il suo controllo;
        // qui conta solo che quel bollino stia al centro. Prima il testo si misurava contro la cella: 2,2 px falsi.
        const interno = (nodo) => { let f = null; for (let e = nodo.parentElement; e && e !== el; e = e.parentElement) if (bollino(e)) f = e; return f; };
        const interni = [...svg, ...testi].map(interno);
        const unoDentro = interni.length && interni[0] && !sopra(interni[0]) && interni.every((x) => x === interni[0]) ? interni[0] : null;
        if (unoDentro) { const r = unoDentro.getBoundingClientRect(); ink = { l: r.left, r: r.right, t: r.top, b: r.bottom }; }
        else if (interni.some(Boolean)) { /* segni sparsi in più bollini, o in uno messo sopra: niente giudizio qui */ }
        else if (svg.length === 1 && !t) ink = inchiostroSvg(svg[0]);
        else if (!svg.length && testi.length === 1 && t.length <= 4 && !/\p{L}{2,}/u.test(t)) {
          // Con `pixel` (da Playwright) la scritta si misura dopo, dalle foto della pagina: qui solo il segno per trovarla.
          if (pixel) { el.setAttribute('data-allinea-n', String(problemi.length)); problemi.push({ tipo: 'pixel', n: problemi.length, dove: nome(el), t }); }
          else ink = inchiostroTesto(testi[0]);
        }
        if (ink) {
          const dx = cx(ink) - cx(dentro), dy = cy(ink) - cy(dentro);
          const tetto = t ? T.dentroTesto : T.dentro;
          if (Math.abs(dx) > tetto || Math.abs(dy) > tetto) {
            problemi.push({ tipo: 'dentro', dove: nome(el), cosa: `${t || 'icona'} fuori centro di ${tondo(dx)} px in orizzontale e ${tondo(dy)} px in verticale`, x: tondo(dx), y: tondo(dy) });
          }
        }
      }

      // 5a · simmetria ai lati: un tasto o bollino col contenuto al centro (flex o grid «center»), su una riga sola, ha
      // lo stesso spazio fra il bordo e l'inchiostro a sinistra e a destra. Causa tipica: un margine dopo l'ultimo pezzo
      // (come `.ic` prima di una scritta che non c'è) o un padding diverso ai lati. Un solo segno nel cerchio = controllo 1.
      // Fuori: griglie a più colonne e pezzi che si allargano (lì sono le colonne a essere centrate, non le scritte: barra
      // del Concierge sul PC, 5 colonne da 160 px con «Oggi» e «Forni» larghi diversi, falso visto dalla Codice 41).
      const colonne = /grid/.test(c.display) && c.gridTemplateColumns.trim().split(/\s+/).length > 1;
      const siAllarga = [...el.children].some((x) => vede(x) && parseFloat(stile(x).flexGrow) > 0);
      if (bollino(el) && !sopra(el) && /flex|grid/.test(c.display) && !/column/.test(c.flexDirection) && !colonne && !siAllarga
        && [c.justifyContent, c.justifyItems].some((v) => /center/.test(v)) && !(b.width <= 64 && b.height <= 64)) {
        const testiEl = [];
        const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        for (let n = w.nextNode(); n; n = w.nextNode()) if (n.textContent.trim() && vede(n.parentElement)) testiEl.push(n);
        const unaRiga = testiEl.every((n) => { const g = document.createRange(); g.selectNodeContents(n); return [...g.getClientRects()].filter((x) => x.width > 0).length <= 1; })
          && [...el.children].filter(vede).every((x, i, tutti) => { const r = x.getBoundingClientRect(), r0 = tutti[0].getBoundingClientRect(); return r.top < r0.bottom && r.bottom > r0.top; });
        if (unaRiga && (testiEl.length || el.querySelector('svg, img'))) {
          const ink = inchiostro(el, true);
          // Scritte disegnate dallo stile (`::before`/`::after` con `content`, es. «5stelle» di `data-breve` nel tasto di
          // 5stelle sul telefono, col testo vero a `font-size: 0`): l'inchiostro non le vede, conta il riquadro di chi le porta.
          for (const x of [el, ...el.querySelectorAll('*')]) {
            if (!vede(x) || x.closest('svg')) continue;
            const scritta = ['::before', '::after'].some((q) => { const v = getComputedStyle(x, q).content; return v && !/^(none|normal|""|'')$/.test(v); });
            if (!scritta) continue;
            const r = x.getBoundingClientRect();
            ink.l = Math.min(ink.l, r.left); ink.r = Math.max(ink.r, r.right);
          }
          const sx = ink.l - (b.left + parseFloat(c.borderLeftWidth)), dx = (b.right - parseFloat(c.borderRightWidth)) - ink.r;
          if (sx >= 0 && dx >= 0 && Math.abs(sx - dx) > T.lati) {
            problemi.push({ tipo: 'simmetria', dove: nome(el), cosa: `«${testiEl.map((n) => n.textContent.trim()).join(' ').slice(0, 30) || 'icona'}» non al centro: ${tondo(sx)} px a sinistra, ${tondo(dx)} px a destra`, x: tondo((sx - dx) / 2) });
          }
        }
      }

      // 2, 3, 4 · righe flessibili: figli in fila, raggruppati per riga (vale anche per le righe che vanno a capo).
      if (!/flex/.test(c.display) || /column/.test(c.flexDirection)) continue;
      if (bollino(el) && b.height <= 64 && b.width <= 160) continue; // interno di un bollino composto (▷ 18′): è grafica sua
      const figli = [...el.children].filter((f) => vede(f) && !sopra(f) && !libero(f));
      if (figli.length < 2) continue;
      const pezzi = figli.map((f) => ({ f, ink: inchiostro(f), box: f.getBoundingClientRect() }));
      const righe = [];
      for (const p of pezzi) {
        const r = righe.find((x) => p.box.top < x.b - 2 && p.box.bottom > x.t + 2);
        if (r) { r.pezzi.push(p); r.t = Math.min(r.t, p.box.top); r.b = Math.max(r.b, p.box.bottom); } else righe.push({ t: p.box.top, b: p.box.bottom, pezzi: [p] });
      }
      const alCentro = c.alignItems === 'center';
      for (const r of righe) {
        const fila = r.pezzi.slice().sort((a, z) => a.box.left - z.box.left);
        for (let i = 0; i + 1 < fila.length; i++) {
          const [a, z] = [fila[i], fila[i + 1]];
          const piccoli = a.box.height <= 64 && z.box.height <= 64;
          if (alCentro && piccoli && (segno(a.f) || segno(z.f))) {
            const d = cy(a.ink) - cy(z.ink);
            if (Math.abs(d) > T.riga) problemi.push({ tipo: 'in riga', dove: `${nome(a.f)} | ${nome(z.f)}`, cosa: `centri a ${tondo(Math.abs(d))} px (${d < 0 ? 'il primo' : 'il secondo'} più su)`, y: tondo(d) });
          }
          const spazio = z.ink.l - a.ink.r;
          const minimo = segno(a.f) || segno(z.f) ? T.spazio : T.spazioTesti;
          // Due bollini che si toccano (tasti a segmenti, gruppi di tasti) sono una scelta della grafica: solo quasi-attaccati.
          const uniti = bollino(a.f) && bollino(z.f) && spazio <= 1;
          if (spazio < minimo && !uniti) problemi.push({ tipo: 'staccato', dove: `${nome(a.f)} | ${nome(z.f)}`, cosa: `${tondo(spazio)} px fra i due (almeno ${minimo})`, x: tondo(spazio) });
        }
        // 5b · simmetria in fila: 3 o più pezzi uguali (stesso tag e stessa prima classe) con gli stessi spazi fra loro.
        const tipoDi = (x) => `${x.tagName}.${x.classList[0] || ''}`;
        if (fila.length >= 3 && fila.every((p) => tipoDi(p.f) === tipoDi(fila[0].f))) {
          const spazi = fila.slice(1).map((z, i) => z.box.left - fila[i].box.right);
          if (Math.max(...spazi) - Math.min(...spazi) > T.uguali) {
            problemi.push({ tipo: 'simmetria', dove: nome(el), cosa: `spazi diversi fra ${fila.length} pezzi uguali: ${spazi.map(tondo).join(', ')} px` });
          }
        }
      }
      // 4 · insieme: un segno solo (senza lettere) rimasto IN FONDO a una riga, dopo altri pezzi, e la sua scritta a capo.
      // Un segno da solo nella sua riga (es. il numero grande con la frase sotto) è un'impaginazione, non un a capo storto.
      if (c.flexWrap !== 'nowrap' && righe.length > 1) {
        for (let i = 0; i + 1 < pezzi.length; i++) {
          const [a, z] = [pezzi[i], pezzi[i + 1]];
          const rigaA = righe.findIndex((r) => r.pezzi.includes(a)), rigaZ = righe.findIndex((r) => r.pezzi.includes(z));
          // Una scritta che ha SEMPRE una riga sua (`flex-basis: 100%`, es. il reparto sotto il nome nello Staff, col «🔕»
          // del nome a fine riga) va a capo per scelta della grafica, non per mancanza di posto (Codice 44).
          const fb = stile(z.f).flexBasis, rigaSua = /%$/.test(fb) && parseFloat(fb) >= 100;
          if (rigaA !== rigaZ && !rigaSua && righe[rigaA].pezzi.length > 1 && soloSegno(a.f) && haLettere(z.f) && !haLettere(a.f)) {
            const decoro = !testoDi(a.f) && !a.f.querySelector('svg, img');
            problemi.push({ tipo: 'insieme', dove: `${nome(a.f)} | ${nome(z.f)}`, cosa: decoro
              ? `separatore rimasto a fine riga, «${testoDi(z.f).slice(0, 30)}» a capo: nasconderlo o metterlo dentro il pezzo dopo`
              : `«${testoDi(a.f) || 'segno'}» a fine riga, «${testoDi(z.f).slice(0, 30)}» a capo: metterli in un contenitore unico` });
          }
        }
      }
    }
  }
  return problemi;
}

// Segno per l'hook: ora e numero di problemi dell'ultima misura (solo se c'è `.git`, mai negli altri posti).
export function segnaMisura(dove, problemi, radice = process.cwd()) {
  try {
    const git = path.join(radice, '.git');
    if (!fs.existsSync(git) || !fs.statSync(git).isDirectory()) return;
    const file = path.join(git, 'allineamenti.json');
    let prima = {};
    try { prima = JSON.parse(fs.readFileSync(file, 'utf8')); } catch { /* primo segno */ }
    const misure = [...(prima.misure || []), { quando: Date.now(), dove, problemi: problemi.length }].slice(-20);
    fs.writeFileSync(file, JSON.stringify({ ultima: Date.now(), misure }, null, 1));
  } catch { /* il segno non deve mai far fallire una prova */ }
}

// Scritte corte dentro i bollini (cifre, «?», emoji), misurate al pixel: una foto della pagina, poi le stesse scritte
// trasparenti e un'altra foto; i pixel cambiati sono l'inchiostro vero, come lo vede l'occhio (con il carattere, la
// densità dello schermo e gli arrotondamenti veri del browser). Gira DENTRO la pagina.
function giudicaPixel({ prima, dopo, lista, T }) {
  const bitmap = (b64) => {
    const s = atob(b64), u = new Uint8Array(s.length);
    for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i);
    return createImageBitmap(new Blob([u], { type: 'image/png' }));
  };
  const tondo = (n) => Math.round(n * 10) / 10;
  return Promise.all([bitmap(prima), bitmap(dopo)]).then(([a, z]) => {
    const k = a.width / document.documentElement.getBoundingClientRect().width || window.devicePixelRatio || 1;
    const problemi = [];
    for (const p of lista) {
      const el = document.querySelector(`[data-allinea-n="${p.n}"]`);
      if (!el) continue;
      const c = getComputedStyle(el), b = el.getBoundingClientRect();
      const box = { l: b.left + parseFloat(c.borderLeftWidth), r: b.right - parseFloat(c.borderRightWidth), t: b.top + parseFloat(c.borderTopWidth), b: b.bottom - parseFloat(c.borderBottomWidth) };
      const X0 = Math.max(0, Math.floor((box.l + scrollX - 2) * k)), Y0 = Math.max(0, Math.floor((box.t + scrollY - 2) * k));
      const W = Math.min(a.width - X0, Math.ceil((box.r - box.l + 4) * k)), H = Math.min(a.height - Y0, Math.ceil((box.b - box.t + 4) * k));
      if (W < 2 || H < 2) continue; // fuori dalla foto (es. dentro una zona che scorre): niente misura, niente giudizio
      const leggi = (img) => {
        const tela = document.createElement('canvas');
        tela.width = W; tela.height = H;
        const g = tela.getContext('2d', { willReadFrequently: true });
        g.drawImage(img, X0, Y0, W, H, 0, 0, W, H);
        return g.getImageData(0, 0, W, H).data;
      };
      const da = leggi(a), dz = leggi(z);
      const diff = new Float32Array(W * H);
      let max = 0;
      for (let i = 0; i < W * H; i++) {
        const d = Math.max(Math.abs(da[i * 4] - dz[i * 4]), Math.abs(da[i * 4 + 1] - dz[i * 4 + 1]), Math.abs(da[i * 4 + 2] - dz[i * 4 + 2]));
        diff[i] = d; if (d > max) max = d;
      }
      if (max < 24) continue; // scritta quasi del colore del fondo: non si misura
      let l = W, r = -1, t = H, bo = -1;
      for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
        if (diff[y * W + x] < max / 2) continue; // metà del contrasto = il bordo vero della lettera
        if (x < l) l = x; if (x > r) r = x; if (y < t) t = y; if (y > bo) bo = y;
      }
      const ink = { l: (X0 + l) / k - scrollX, r: (X0 + r + 1) / k - scrollX, t: (Y0 + t) / k - scrollY, b: (Y0 + bo + 1) / k - scrollY };
      const dx = (ink.l + ink.r) / 2 - (box.l + box.r) / 2, dy = (ink.t + ink.b) / 2 - (box.t + box.b) / 2;
      if (Math.abs(dx) > T.dentroTesto || Math.abs(dy) > T.dentroTesto) {
        problemi.push({ tipo: 'dentro', dove: p.dove, cosa: `${p.t} fuori centro di ${tondo(dx)} px in orizzontale e ${tondo(dy)} px in verticale`, x: tondo(dx), y: tondo(dy) });
      }
    }
    return problemi;
  });
}

// Misura completa da Playwright: la scansione nella pagina, poi le scritte nei bollini al pixel.
export async function misura(page, opz = {}) {
  const T = { ...TOLLERANZE, ...(opz.tolleranze || {}) };
  const tutti = await page.evaluate(scansione, { zona: opz.zona || null, tolleranze: T, pixel: opz.pixel !== false });
  const lista = tutti.filter((p) => p.tipo === 'pixel');
  const problemi = tutti.filter((p) => p.tipo !== 'pixel');
  if (!lista.length) return problemi;
  try {
    // Nella foto della pagina intera i pezzi fissi e appiccicosi (barra in basso, testata) finiscono sopra altri pezzi:
    // la lettera coperta a metà sembrava fuori centro (Codice 44: cerchi dello Staff e «?» del Pennello, fino a 7 px).
    // Durante le 2 foto si nascondono quelli che non hanno scritte da misurare; la misura vale per il pezzo, non per lo scorrimento.
    await page.evaluate(() => {
      for (const x of document.querySelectorAll('body *')) {
        if (['fixed', 'sticky'].includes(getComputedStyle(x).position) && !x.querySelector('[data-allinea-n]') && !x.closest('[data-allinea-n]')) x.setAttribute('data-allinea-via', '');
      }
      const s = document.createElement('style');
      s.id = 'allinea-via';
      s.textContent = '[data-allinea-via] { opacity: 0 !important; transition: none !important; }';
      document.head.append(s);
    });
    const foto = async () => (await page.screenshot({ fullPage: true, animations: 'disabled', caret: 'hide' })).toString('base64');
    const prima = await foto();
    await page.evaluate(() => {
      const s = document.createElement('style');
      s.id = 'allinea-trasparente';
      s.textContent = '[data-allinea-n], [data-allinea-n] * { color: transparent !important; -webkit-text-fill-color: transparent !important; text-shadow: none !important; transition: none !important; }';
      document.head.append(s);
    });
    const dopo = await foto();
    problemi.unshift(...await page.evaluate(giudicaPixel, { prima, dopo, lista, T }));
  } finally {
    await page.evaluate(() => {
      document.getElementById('allinea-trasparente')?.remove();
      document.getElementById('allinea-via')?.remove();
      for (const el of document.querySelectorAll('[data-allinea-n]')) el.removeAttribute('data-allinea-n');
      for (const el of document.querySelectorAll('[data-allinea-via]')) el.removeAttribute('data-allinea-via');
    }).catch(() => { /* pagina già chiusa */ });
  }
  return problemi;
}

export async function controllaAllineamenti(page, opz = {}) {
  const problemi = await misura(page, opz);
  segnaMisura(opz.zona || page.url(), problemi);
  return problemi.map((p) => `${p.tipo}: ${p.dove} · ${p.cosa}`);
}

// Disegna un riquadro rosso sui pezzi coi problemi (solo per la foto del comando).
async function cerchia(page, problemi) {
  await page.evaluate((lista) => {
    for (const p of lista) {
      for (const sel of p.dove.split(' | ')) {
        let el = null;
        try { el = document.querySelector(sel); } catch { /* nome con caratteri speciali */ }
        if (!el) continue;
        const b = el.getBoundingClientRect();
        const d = document.createElement('div');
        d.style.cssText = `position:fixed;left:${b.left - 2}px;top:${b.top - 2}px;width:${b.width + 4}px;height:${b.height + 4}px;outline:2px solid #e00;z-index:2147483647;pointer-events:none`;
        document.body.append(d);
      }
    }
  }, problemi);
}

// Browser del progetto (Playwright); se la sua versione non ha il browser scaricato, quello già nel contenitore cloud.
export async function apriBrowser() {
  let playwright;
  try { playwright = await import('playwright'); } catch {
    try { playwright = await import('@playwright/test'); } catch { throw new Error('Playwright non c\'è: npm i -D @playwright/test'); }
  }
  try { return await playwright.chromium.launch(); } catch (e) {
    if (fs.existsSync('/opt/pw-browsers/chromium')) return playwright.chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
    throw new Error(`Browser non trovato: ${String(e.message).split('\n')[0]}`);
  }
}

async function comando(argv) {
  const uso = 'Uso: node tools/allineamenti.mjs <url|file.html> [--larghezze 390,1366] [--zona <selettore>] [--foto <cartella>]';
  const arg = { larghezze: [390, 1366], zona: null, foto: null, dove: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--larghezze') arg.larghezze = String(argv[++i] || '').split(',').map(Number).filter((n) => n > 0);
    else if (a === '--zona') arg.zona = argv[++i];
    else if (a === '--foto') arg.foto = argv[++i];
    else if (!a.startsWith('--') && !arg.dove) arg.dove = a;
    else { console.error(uso); return 2; }
  }
  if (!arg.dove || !arg.larghezze.length) { console.error(uso); return 2; }
  const url = /^[a-z]+:\/\//i.test(arg.dove) ? arg.dove : pathToFileURL(path.resolve(arg.dove)).href;
  let browser;
  try { browser = await apriBrowser(); } catch (e) { console.error(e.message); return 2; }
  let tutti = 0;
  try {
    for (const w of arg.larghezze) {
      const telefono = w < 600;
      const ctx = await browser.newContext({ viewport: { width: w, height: telefono ? 844 : 900 }, deviceScaleFactor: telefono ? 2 : 1, isMobile: telefono, hasTouch: telefono });
      const page = await ctx.newPage();
      await page.goto(url, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts && document.fonts.ready);
      const problemi = await misura(page, { zona: arg.zona });
      segnaMisura(`${arg.dove} @${w}`, problemi);
      tutti += problemi.length;
      for (const p of problemi) console.log(`${w} px · ${p.tipo}: ${p.dove} · ${p.cosa}`);
      if (arg.foto) {
        fs.mkdirSync(arg.foto, { recursive: true });
        await cerchia(page, problemi);
        await page.screenshot({ path: path.join(arg.foto, `allineamenti-${w}.png`), fullPage: true });
      }
      await ctx.close();
    }
  } finally {
    await browser.close();
  }
  if (!tutti) console.log(`Allineamenti a posto (${arg.larghezze.join(', ')} px).`);
  return tutti ? 1 : 0;
}

if (import.meta.url === pathToFileURL(process.argv[1] || '').href) {
  comando(process.argv.slice(2)).then((n) => process.exit(n), (e) => { console.error(e.message); process.exit(2); });
}
