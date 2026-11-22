# Albero della testata (C18, Controllo 13): il DISEGNO di Mario (archivio/2026-11-22-c18-albero/mario-albero-riferimento.jpg,
# Mario 22/11 16:29 «Ti mando un albero… lo devi colorare e addobbare») ritagliato, colorato e messo in luce di notte.
# Mai ridisegnato da noi: solo colori, ombre e luci sopra i suoi tratti; gli addobbi animati (lucine sul festone, stella) li mette la pagina.
# Uso: python3 -I albero.py <cartella-uscita> [larghezza px, 300]  → albero-notte.webp (+ .png su cielo, per guardarlo) e albero-geo.json (coordinate nella testata)
import sys, json, math, os
import numpy as np
from PIL import Image
from scipy import ndimage as nd
SRC = '/home/user/parigi-in-tasca/archivio/2026-11-22-c18-albero/mario-albero-riferimento.jpg'
BOX = (20, 724, 1158, 2240)            # albero intero (tratti da x 26 a 1152, y 730 a 2234 nella foto)
CX, BASE, ALTO, STRETTO = 345.0, 268.0, 142.0, .92   # nella testata (viewBox 800×290): centro, piede del tronco, altezza; un filo più stretto (sta fra due casette)
OUT = sys.argv[1]; OUTW = int(sys.argv[2]) if len(sys.argv) > 2 else 300
im = Image.open(SRC).convert('RGB').crop(BOX)
A = np.asarray(im).astype(float) / 255; mn, mx = A.min(2), A.max(2); H, W = mn.shape
# --- fondo: zone chiare che toccano il bordo; albero = pezzo più grande del resto (via le frecce del sito)
chiaro = mn > .75
lab, n = nd.label(chiaro)
bordo = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
bg = np.isin(lab, list(bordo))
flab, fn = nd.label(~bg); sz = nd.sum(~bg, flab, range(1, fn + 1))
albero = flab == (np.argmax(sz) + 1); bg = ~albero
ys_, xs_ = np.where(albero); TX0, TX1, TY0, TY1 = xs_.min(), xs_.max(), ys_.min(), ys_.max()
# --- pezzi dentro i tratti: stella, rami (fasce fra i festoni), palline coi ganci, tronco
ilab, inn = nd.label(chiaro & albero)
tipo = {}
for i, sl in enumerate(nd.find_objects(ilab), 1):
    q = ilab[sl] == i; a = int(q.sum()); h = sl[0].stop - sl[0].start; w = sl[1].stop - sl[1].start; riemp = a / (w * h)
    if sl[0].start < 150 and a > 10000: tipo[i] = 'stella'
    elif sl[0].start > 1300 and a > 5000 and riemp > .6: tipo[i] = 'tronco'
    elif 3000 < a < 7000 and riemp > .7 and abs(w - h) < 8: tipo[i] = 'palla'
    elif 150 < a < 700 and riemp > .75 and abs(w - h) < 8: tipo[i] = 'gancio'
    else: tipo[i] = 'ramo'
print({t: sum(1 for v in tipo.values() if v == t) for t in set(tipo.values())})
yy, xx = np.mgrid[0:H, 0:W]; yN = (yy - TY0) / (TY1 - TY0)
# riga per riga: dove inizia e finisce l'albero (luna da sinistra: u = 0 lato luce, 1 lato ombra)
lo = np.full(H, W); hi = np.full(H, -1); np.minimum.at(lo, ys_, xs_); np.maximum.at(hi, ys_, xs_)
u = np.clip((xx - lo[:, None]) / np.maximum(1, hi - lo)[:, None], 0, 1)
fill = np.zeros((H, W, 3)); linea = np.zeros((H, W, 3))
PALLE = [(.86, .16, .20), (.97, .76, .30), (.22, .45, .86), (.80, .83, .90), (.58, .27, .78), (.93, .45, .16), (.86, .16, .20), (.22, .45, .86), (.97, .76, .30)]
geo = dict(palle=[], festoni=[])
palle = sorted([i for i, t in tipo.items() if t == 'palla'], key=lambda i: nd.center_of_mass(ilab == i)[0])
for k, i in enumerate(palle):
    q = ilab == i; cy, cx = nd.center_of_mass(q); r = math.sqrt(q.sum() / math.pi); c = np.array(PALLE[k % len(PALLE)])
    d = np.hypot(xx - (cx - .35 * r), yy - (cy - .38 * r)) / (1.7 * r)
    f = np.clip(1.25 - .95 * d, .35, 1.25)[..., None]
    fill[q] = (c * f + np.clip(.55 - 2.6 * d, 0, 1)[..., None] * .9)[q]          # luce di luna in alto a sinistra, riflesso bianco
    geo['palle'].append([cx, cy, r, '#%02X%02X%02X' % tuple(int(v * 255) for v in c)])
for i, t in tipo.items():
    q = ilab == i
    if t == 'gancio': fill[q] = np.array([.86, .72, .40]) * (1.15 - .4 * u[q])[:, None]
    elif t == 'tronco':
        ys, xs = np.where(q); v = (xs - xs.min()) / max(1, xs.max() - xs.min())
        fill[ys, xs] = np.array([.50, .30, .15]) * (1.15 - .6 * v)[:, None]
    elif t == 'stella':
        ys, xs = np.where(q); cy, cx = ys.mean(), xs.mean(); rr = np.hypot(xs - cx, ys - cy) / (.5 * max(np.ptp(xs), np.ptp(ys)))
        fill[ys, xs] = (np.array([1.0, .88, .42]) * (1 - rr[:, None]) + np.array([.96, .66, .14]) * rr[:, None]) * (1.08 - .2 * (xs - xs.min())[:, None] / np.ptp(xs))
        geo['stella'] = [cx, cy, .5 * max(np.ptp(xs), np.ptp(ys))]
    elif t == 'ramo':
        ys, xs = np.where(q)
        # ogni fascia: scura in alto (ombra della fascia sopra), più chiara sulle punte in basso; lato luna chiaro, lato opposto in ombra
        top = np.full(W, H); bot = np.full(W, -1); np.minimum.at(top, xs, ys); np.maximum.at(bot, xs, ys)
        v = np.clip((ys - top[xs]) / np.maximum(12, bot[xs] - top[xs]), 0, 1)
        sh = (1.22 - .72 * u[ys, xs] ** 1.2) * (.62 + .5 * v ** .8)
        verde = np.array([.17, .56, .34]) * sh[:, None]
        verde = verde * (1 - np.clip(1 - sh, 0, 1)[:, None] * np.array([.1, .25, -.25]))   # ombre verso il blu notte
        fill[ys, xs] = verde
        # festone: il tratto liscio sotto ogni fascia (il centro del tratto, colonna per colonna)
        if q.sum() > 8000:
            pts = []
            for x in range(xs.min(), xs.max() + 1):
                b = bot[x]
                if b < 0: continue
                y = b + 1
                while y < H and not chiaro[y, x] and y - b < 60: y += 1
                if y - b < 60 and y < H and albero[y, x]: pts.append((x, (b + y) / 2))
            geo['festoni'].append(pts)
# tratti e pixel non assegnati: colore del pezzo più vicino
pezzi = ilab > 0
idx = nd.distance_transform_edt(~pezzi, return_indices=True)[1]
fill = fill[idx[0], idx[1]]
vicino = ilab[idx[0], idx[1]]
stella_i = [i for i, t in tipo.items() if t == 'stella']
inchiostro = np.clip((.80 - mn) / .55, 0, 1)
linea[:] = np.array([.02, .085, .07])                                           # tratti verde notte
st = np.isin(vicino, stella_i); linea[st] = np.array([.42, .25, .04])            # la stella ha il bordo d'oro scuro
pal = np.isin(vicino, palle); linea[pal] = np.array([.06, .05, .12])
rgb = fill * (1 - inchiostro[..., None]) + linea * inchiostro[..., None]
rgb = rgb + np.array([1, .6, .3]) * .07 * np.clip(yN, 0, 1)[..., None] ** 2      # riflesso caldo dei mercatini in basso
# --- bordo: passaggio fra tratto e fondo bianco trasparente (niente alone chiaro)
banda = nd.binary_dilation(bg, iterations=3) & albero
alfa = albero.astype(float); alfa[banda] = np.clip((.92 - mn[banda]) / .67, 0, 1); rgb[banda] = linea[banda]
rgb = np.clip(rgb, 0, 1)
img = Image.fromarray(np.dstack([rgb * 255, alfa * 255]).astype('uint8'), 'RGBA')
# --- misure nella testata: altezza ALTO dal tratto più alto al piede, un filo più stretto
S_Y = ALTO / (TY1 - TY0); S_X = S_Y * STRETTO
X0 = CX - S_X * (TX0 + TX1) / 2; Y0 = BASE - S_Y * TY1
WS, HS = S_X * W, S_Y * H
OH = round(OUTW * HS / WS)
small = img.resize((OUTW, OH), Image.LANCZOS)
small.save(OUT + '/albero-notte.webp', 'WEBP', quality=88, method=6)
cielo = Image.new('RGBA', small.size, (22, 41, 106, 255)); cielo.alpha_composite(small); cielo.convert('RGB').save(OUT + '/albero-notte.png')
sx = lambda x: round(X0 + S_X * x, 1); sy = lambda y: round(Y0 + S_Y * y, 1)
dist_bordo = nd.distance_transform_edt(albero)
fest = []
for pts in geo['festoni']:
    # solo dove il filo è dentro l'albero (non sul bordo esterno a punte), poi lucine ogni ~7 unità
    p = [(x, y) for x, y in pts if dist_bordo[int(y), int(x)] > 34]
    if len(p) < 20: continue
    xs = np.array([a for a, b in p], float); ys = np.array([b for a, b in p], float)
    ys = nd.median_filter(ys, 25)
    L = np.concatenate([[0], np.cumsum(np.hypot(np.diff(xs) * S_X, np.diff(ys) * S_Y))])
    m = max(3, int(L[-1] / 5.2)); t = (np.arange(m) + .5) * L[-1] / m
    fest.append([[sx(np.interp(tt, L, xs)), sy(np.interp(tt, L, ys))] for tt in t])
out = dict(img=[round(X0, 2), round(Y0, 2), round(WS, 2), round(HS, 2)],
           stella=[sx(geo['stella'][0]), sy(geo['stella'][1]), round(S_Y * geo['stella'][2], 1)],
           palle=[[sx(x), sy(y), round(S_Y * r, 2), c] for x, y, r, c in geo['palle']],
           festoni=fest, largo=[sx(TX0), sx(TX1)], cima=sy(TY0))
json.dump(out, open(OUT + '/albero-geo.json', 'w'))
print('webp', small.size, os.path.getsize(OUT + '/albero-notte.webp'), 'img', out['img'], 'stella', out['stella'], 'luci', [len(f) for f in fest], 'largo', out['largo'], 'cima', out['cima'])
