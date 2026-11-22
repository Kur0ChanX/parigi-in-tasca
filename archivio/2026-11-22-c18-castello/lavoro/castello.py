# Castello della testata (C18, Controllo 11): il DISEGNO di Mario (archivio/2026-11-22-c18-v33/mario-castello-riferimento.jpg) ritagliato e messo in luce di notte.
# Mai ridisegnato da noi: solo colori, ombre, neve e finestre accese sopra i suoi tratti.
# Uso: python3 -I castello.py <cartella-uscita> [larghezza px, 440]  → castello-notte.webp (+ .png su cielo, per guardarlo) e castello-geo.json (coordinate nel disegno della testata)
import sys, json, math
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
SRC = '/home/user/parigi-in-tasca/archivio/2026-11-22-c18-v33/mario-castello-riferimento.jpg'
BOX = (735, 375, 1965, 1935)          # castello intero; sotto tagliato sopra le nuvolette e il ponte
X0, Y0, S = 408.0, 4.0, 0.15          # posto nella testata (viewBox 800×290): angolo in alto a sinistra e scala (unità per px del ritaglio)
OUT = sys.argv[1]; OUTW = int(sys.argv[2]) if len(sys.argv) > 2 else 440
im = Image.open(SRC).convert('RGB').crop(BOX)
A = np.asarray(im).astype(float) / 255; R, G, B = A[..., 0], A[..., 1], A[..., 2]
mn, mx = A.min(2), A.max(2); H, W = mn.shape
# --- fondo bianco: riempimento dai bordi (le finestre bianche dentro restano)
w8 = ((mn > .843) & (mx - mn < .118)).astype('uint8') * 255
F = Image.fromarray(w8).copy()
for (x, y) in [(x, 0) for x in range(0, W, 5)] + [(0, y) for y in range(0, H, 5)] + [(W - 1, y) for y in range(0, H, 5)] + [(x, H - 1) for x in range(0, W, 5)]:
    if F.getpixel((x, y)) == 255: ImageDraw.floodfill(F, (x, y), 128)
bg = np.asarray(F) == 128; fg = ~bg
linea = (mx < .33) & fg
bianco = (mn > .91) & (mx - mn < .063) & fg
blu = (B > R + .1) & (B > .31) & fg & ~linea
oro = (R > .7) & (G > .5) & (B < .55) & (R - B > .25) & fg
def pezzi(m, minimo, passo=5):
    L = Image.fromarray(m.astype('uint8') * 255).copy(); out = []
    ys, xs = np.where(m)
    for y, x in zip(ys[::passo], xs[::passo]):
        if L.getpixel((int(x), int(y))) != 255: continue
        ImageDraw.floodfill(L, (int(x), int(y)), 77); q = np.asarray(L) == 77
        ImageDraw.floodfill(L, (int(x), int(y)), 0)
        if q.sum() >= minimo: out.append(q)
    return out
def righe(q):
    ys, xs = np.where(q); lo = np.full(H, 10**6); hi = np.full(H, -1)
    np.minimum.at(lo, ys, xs); np.maximum.at(hi, ys, xs); return ys, xs, lo, hi
# --- volume: ogni pezzo colorato (torre, tetto, fascia) più chiaro a sinistra (luna) e più scuro a destra, riga per riga
ombra = np.ones((H, W))
colorati = pezzi(fg & ~linea & ~bianco & ~oro, 120)
coni = []
for q in colorati:
    ys, xs, lo, hi = righe(q)
    u = (xs - lo[ys]) / np.maximum(1, hi[ys] - lo[ys])
    ombra[ys, xs] = 1.12 - .34 * u
    y0, y1, x0, x1 = ys.min(), ys.max(), xs.min(), xs.max()
    if (B[ys, xs] > R[ys, xs] + .1).mean() > .8 and (y1 - y0) >= .5 * (x1 - x0) and q.sum() >= 900 and y1 < 1450:
        coni.append((q, ys, xs, lo, hi))
# --- notte: colori del disegno, esposizione più bassa, ombre fredde, luce di luna dall'alto a sinistra, riflesso caldo dei mercatini in basso
lum = (A * [.299, .587, .114]).sum(2, keepdims=True)
rgb = np.clip(lum + (A - lum) * 1.38, 0, 1)
yy, xx = np.mgrid[0:H, 0:W]; yN, xN = yy / H, xx / W
rgb = rgb * (.86 * ombra * (1.07 - .2 * yN - .1 * xN))[..., None]
rgb = rgb * (1 - (1 - lum) * np.array([.2, .12, -.04]))
rgb = rgb + (np.array([1, .6, .3]) * .1 * yN[..., None] ** 2)
# --- neve sui tetti a cono: fascia in basso con l'orlo a onde e qualche goccia, solo dentro il tetto (mai fuori dal disegno)
neve = np.zeros((H, W), bool); orlo = np.zeros((H, W), bool)
for i, (q, ys, xs, lo, hi) in enumerate(coni):
    y0, y1 = ys.min(), ys.max(); hc = y1 - y0
    fondo = np.full(W, -1); np.maximum.at(fondo, xs, ys)
    xa, xb = xs.min(), xs.max(); wc = xb - xa
    gocce = [xa + wc * (k + .5) / 4 + (k % 2) * wc * .06 for k in range(4)]
    def spessore(x):
        t = hc * .1 * (1 + .28 * math.sin(x * .19 + i))
        for c in gocce: t += hc * .09 * max(0, 1 - ((x - c) / (wc * .07)) ** 2) ** .5
        return t
    for x in range(xa, xb + 1):
        if fondo[x] < 0: continue
        t = spessore(x); col = np.where(q[:, x])[0]
        sel = col[col >= fondo[x] - t]; neve[sel, x] = True
        orl = col[(col < fondo[x] - t) & (col >= fondo[x] - t - 4)]; orlo[orl, x] = True
cn = np.array([.80, .86, .97])
u = np.zeros((H, W))
for (q, ys, xs, lo, hi) in coni: u[ys, xs] = (xs - lo[ys]) / np.maximum(1, hi[ys] - lo[ys])
rgb[neve] = cn * (1.04 - .3 * u[neve])[:, None]
rgb[orlo] = rgb[orlo] * .55
# --- finestre accese (calde), oro che brilla, tratti blu notte invece del nero
rgb[bianco] = np.array([1.0, .80, .45]) * .92
rgb[oro] = np.clip(A[oro] * 1.0, 0, 1)
rgb[linea] = np.array([.05, .06, .14]) * (.6 + .4 * (mx[linea, None] / .33))
# --- bordo: i pixel di passaggio fra tratto e bianco diventano trasparenti (niente alone chiaro), ultimo 5 % sfuma
bgI = Image.fromarray((bg * 255).astype('uint8'))
banda = (np.asarray(bgI.filter(ImageFilter.MaxFilter(5))) > 0) & fg
alfa = fg.astype(float)
alfa[banda] = np.clip((.92 - mn[banda]) / .67, 0, 1)
rgb[banda] = np.array([.05, .06, .14])
alfa *= np.clip((1 - yN) / .05, 0, 1)
rgb = np.clip(rgb, 0, 1)
img = Image.fromarray(np.dstack([rgb * 255, alfa * 255]).astype('uint8'), 'RGBA')
OH = round(H * OUTW / W)
small = img.resize((OUTW, OH), Image.LANCZOS)
small.save(OUT + '/castello-notte.webp', 'WEBP', quality=86, method=6)
cielo = Image.new('RGBA', small.size, (22, 41, 106, 255)); cielo.alpha_composite(small); cielo.convert('RGB').save(OUT + '/castello-notte.png')
# --- geometria per gli addobbi animati (unità della testata)
sx = lambda x: round(X0 + S * x, 1); sy = lambda y: round(Y0 + S * y, 1)
fin = []
for q in pezzi(bianco, 60, 3):
    ys, xs = np.where(q); fin.append([int(xs.min()), int(ys.min()), int(xs.max() - xs.min() + 1), int(ys.max() - ys.min() + 1)])
geo = dict(img=[X0, Y0, round(S * W, 2), round(S * H, 2)], finestre=[[sx(x), sy(y), round(S * w, 2), round(S * h, 2)] for x, y, w, h in sorted(fin, key=lambda f: (f[1], f[0]))], coni=[])
for (q, ys, xs, lo, hi) in coni:
    y0, y1 = ys.min(), ys.max(); top = xs[ys == y0].mean()
    rr = [y for y in range(y0, y1 + 1) if hi[y] >= 0]
    geo['coni'].append(dict(apice=[sx(top), sy(y0)], sx=[[sx(lo[y]), sy(y)] for y in rr[::6]], dx=[[sx(hi[y]), sy(y)] for y in rr[::6]], base=[sx(xs[ys >= y1 - 3].min()), sx(xs[ys >= y1 - 3].max()), sy(y1)]))
json.dump(geo, open(OUT + '/castello-geo.json', 'w'))
import os; print('webp', small.size, os.path.getsize(OUT + '/castello-notte.webp'), 'finestre', len(fin), 'coni', len(coni), 'img svg', geo['img'])
