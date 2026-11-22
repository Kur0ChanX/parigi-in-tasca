# Slitta v33: la foto di Mario (mario-1249) coi suoi colori veri, in luce di notte; contorno = quello già pulito della v30.
import sys, io
from PIL import Image, ImageFilter
import numpy as np
D = '/home/user/parigi-in-tasca/archivio/2026-11-22-c18-slitta/'
o = Image.open(D + 'mario-1249-slitta-da-ritagliare.jpg').convert('RGB')
W, H = 520, 208
rgb = np.asarray(o.resize((W, H), Image.LANCZOS, box=(17.67, 105.17, 969.7, 486.0))).astype(float) / 255
a = np.asarray(Image.open(D + 'v30-slitta-ombra.webp'))[:, :, 3].astype(float) / 255
sat, expo = float(sys.argv[1]), float(sys.argv[2])
# 1) colori più pieni: saturazione intorno al grigio di ogni punto
lum = (rgb * [.299, .587, .114]).sum(axis=2, keepdims=True)
rgb = np.clip(lum + (rgb - lum) * sat, 0, 1)
# 2) notte: esposizione più bassa, ombre fredde (blu), luci appena calde
lum = (rgb * [.299, .587, .114]).sum(axis=2, keepdims=True)
rgb = rgb * expo
rgb = np.where(rgb > .62, .62 + (rgb - .62) * .6, rgb)   # luci compresse: ossa delle renne meno bianche
rgb = rgb * (1 - (1 - lum) * np.array([.22, .14, -.02]))   # ombre verso il blu notte
rgb = rgb ** np.array([1.0, 1.0, .95])
# 3) volume: luce di luna dall'alto (bordo alto chiaro), riflesso caldo della città sotto
A = Image.fromarray((a * 255).astype('uint8'))
sopra = np.asarray(A.transform(A.size, Image.AFFINE, (1, 0, 0, 0, 1, -2))).astype(float) / 255  # alfa spostato in giù di 2 px
bordo = np.clip(a - sopra, 0, 1)
bordo = np.asarray(Image.fromarray((bordo * 255).astype('uint8')).filter(ImageFilter.GaussianBlur(.8))).astype(float)[..., None] / 255
rgb = rgb + bordo * np.array([1.0, .96, .84]) * .55
sotto = np.clip(a - np.asarray(A.transform(A.size, Image.AFFINE, (1, 0, 0, 0, 1, 2))).astype(float) / 255, 0, 1)[..., None]
rgb = rgb + sotto * np.array([1.0, .62, .3]) * .22
y = np.linspace(0, 1, H)[:, None, None]
rgb = rgb * (1.06 - .16 * y)                                   # più chiaro in alto, più scuro in basso
rgb = np.clip(rgb, 0, 1)
# 4) alone di luna morbido e leggero dietro la sagoma (stacca dal cielo senza bordo da adesivo)
alone = np.asarray(A.filter(ImageFilter.GaussianBlur(5))).astype(float) / 255 * .22
col = np.array([.85, .88, 1.0])
outA = a + alone * (1 - a)
out = (rgb * a[..., None] + col * (alone * (1 - a))[..., None]) / np.maximum(outA, 1e-6)[..., None]
img = Image.fromarray(np.dstack([np.clip(out, 0, 1) * 255, outA * 255]).astype('uint8'), 'RGBA')
img.save(sys.argv[3], 'WEBP', quality=84, method=6)
bg = Image.new('RGBA', img.size, (22, 41, 106, 255)); bg.alpha_composite(img); bg.convert('RGB').save(sys.argv[3] + '.png')
import os; print(sys.argv[3], os.path.getsize(sys.argv[3]))
