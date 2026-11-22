# Castello dal disegno di Mario (C18, Controllo 11): trova finestre (bianche dentro il castello) e tetti a cono (blu) del disegno.
# Uso: python3 -I analisi.py <cartella-uscita>  → analisi.json (in px del ritaglio) e analisi-debug.png (numeri sui pezzi)
import sys, json
from PIL import Image, ImageDraw, ImageFont
import numpy as np
SRC = '/home/user/parigi-in-tasca/archivio/2026-11-22-c18-v33/mario-castello-riferimento.jpg'
BOX = (735, 375, 1965, 1935)          # ritaglio: castello intero, sotto tagliato sopra le nuvolette e il ponte
OUT = sys.argv[1]
im = Image.open(SRC).convert('RGB').crop(BOX)
a = np.asarray(im).astype(int); r, g, b = a[..., 0], a[..., 1], a[..., 2]
mn, mx = a.min(2), a.max(2)
H, W = mn.shape
def fondo():
    w = ((mn > 215) & (mx - mn < 30)).astype('uint8') * 255
    B = Image.fromarray(w).copy()
    for (x, y) in [(x, 0) for x in range(0, W, 5)] + [(0, y) for y in range(0, H, 5)] + [(W - 1, y) for y in range(0, H, 5)] + [(x, H - 1) for x in range(0, W, 5)]:
        if B.getpixel((x, y)) == 255: ImageDraw.floodfill(B, (x, y), 128)
    return np.asarray(B) == 128
bg = fondo()
blu = (b > r + 25) & (b > 80) & ~bg
bianco = (mn > 232) & (mx - mn < 16) & ~bg
def pezzi(m, minimo):
    L = Image.fromarray(m.astype('uint8') * 255).copy(); out = []
    ys, xs = np.where(m)
    for y, x in zip(ys[::7], xs[::7]):
        if L.getpixel((int(x), int(y))) != 255: continue
        ImageDraw.floodfill(L, (int(x), int(y)), 77); q = np.asarray(L) == 77
        ImageDraw.floodfill(L, (int(x), int(y)), 0)
        n = int(q.sum())
        if n >= minimo: out.append(q)
    return out
def info(q):
    ys, xs = np.where(q); return dict(x0=int(xs.min()), x1=int(xs.max()), y0=int(ys.min()), y1=int(ys.max()), n=int(q.sum()))
fin = [info(q) for q in pezzi(bianco, 60)]
tet = []
for q in pezzi(blu, 400):
    d = info(q); ys, xs = np.where(q)
    righe = {}
    for y, x in zip(ys, xs): righe.setdefault(int(y), []).append(int(x))
    d['bordo'] = [[y, min(v), max(v)] for y, v in sorted(righe.items())]
    tet.append(d)
json.dump(dict(box=BOX, W=W, H=H, finestre=fin, tetti=tet), open(OUT + '/analisi.json', 'w'))
dbg = im.copy(); D = ImageDraw.Draw(dbg); f = ImageFont.load_default(size=22)
for i, d in enumerate(fin): D.rectangle((d['x0'], d['y0'], d['x1'], d['y1']), outline=(255, 140, 0), width=3); D.text((d['x1'] + 2, d['y0']), 'F%d' % i, fill=(200, 80, 0), font=f)
for i, d in enumerate(tet): D.rectangle((d['x0'], d['y0'], d['x1'], d['y1']), outline=(0, 160, 0), width=3); D.text((d['x0'], d['y0'] - 22), 'T%d' % i, fill=(0, 120, 0), font=f)
dbg.save(OUT + '/analisi-debug.png')
print('finestre', len(fin), 'tetti', len(tet), 'misura', W, H)
