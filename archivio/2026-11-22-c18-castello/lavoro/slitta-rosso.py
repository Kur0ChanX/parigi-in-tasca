# Slitta (foto di Mario, C18): un po' più di colore e soprattutto il ROSSO del cappello e del vestito di Jack (Mario 22/11 15:02: «si capisce che è Jack Skeletron… Babbo Natale»).
# Parte dalla v33 (archivio/2026-11-22-c18-slitta/lavoro/v33-slitta-colori.webp, già in luce di notte), cambia solo i colori, non il contorno.
# Uso: python3 -I slitta-rosso.py <uscita.webp>   (scrive anche <uscita>.png su cielo, per guardarla)
import sys, colorsys
import numpy as np
from PIL import Image
im = Image.open('/home/user/parigi-in-tasca/archivio/2026-11-22-c18-slitta/lavoro/v33-slitta-colori.webp').convert('RGBA')
a = np.asarray(im).astype(float) / 255; rgb, al = a[..., :3], a[..., 3]
r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
mx, mn = rgb.max(2), rgb.min(2)
lum = (rgb * [.299, .587, .114]).sum(2, keepdims=True)
# 1) colore in generale com'era (solo il rosso cambia)
out = rgb.copy()
# 2) rossi (cappello, vestito, sedile): più pieni e più luminosi, verso un rosso Natale
rosso = (r > g + .06) & (r > b + .03) & (al > .3)
forza = np.clip((r - np.maximum(g, b)) / .18, 0, 1)[..., None] * rosso[..., None]
target = np.stack([np.clip(r * 1.55 + .06, 0, 1), g * .55, b * .6], -1)
out = out * (1 - forza) + target * forza
# 3) verde della slitta in ombra (Mario ~15:3x «il verde non troppo in vista… è nel buio»): meno colore e più scuro, verso il blu notte
verde = (g > r + .03) & (g > b) & (al > .3)
out[verde] = np.clip((lum[verde] + (out[verde] - lum[verde]) * .55) * .72 * np.array([.92, .96, 1.12]), 0, 1)
img = Image.fromarray(np.dstack([np.clip(out, 0, 1) * 255, al * 255]).astype('uint8'), 'RGBA')
img.save(sys.argv[1], 'WEBP', quality=86, method=6)
bg = Image.new('RGBA', img.size, (22, 41, 106, 255)); bg.alpha_composite(img); bg.convert('RGB').save(sys.argv[1] + '.png')
import os; print(sys.argv[1], os.path.getsize(sys.argv[1]), 'pixel rossi', int(rosso.sum()))
