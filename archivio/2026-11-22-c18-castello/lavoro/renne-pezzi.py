# Renne indipendenti (Mario 22/11 ~15:1x): pezzi della foto della slitta (px dell'immagine 520×208). Ogni renna: corpo + zampe davanti + zampe dietro (perno = spalla/anca).
# Uso: python3 -I renne-pezzi.py <slitta.webp> <cartella>  → controlla che ogni pixel visibile stia in UN pezzo solo e scrive renne-debug.png (pezzi colorati)
import sys, json
import numpy as np
from PIL import Image, ImageDraw
REG = {  # zona di ogni renna (poligono)
 'r1': [(0, 0), (97, 0), (97, 102), (0, 102)],
 'r2': [(97, 50), (165, 50), (165, 82), (155, 82), (155, 127), (97, 127)],
 'r3': [(155, 82), (256, 82), (256, 162), (148, 162), (148, 127), (155, 127)],
}
ZAMPE = {  # [rettangolo x0,y0,x1,y1], perno
 'r1': [([0, 44, 28, 66], (28, 56)), ([68, 64, 97, 102], (72, 64))],
 'r2': [([97, 102, 122, 127], (117, 102)), ([132, 104, 155, 127], (138, 104))],
 'r3': [([148, 127, 182, 150], (182, 130)), ([226, 138, 256, 162], (230, 139))],
}
if __name__ == '__main__':
    im = Image.open(sys.argv[1]).convert('RGBA'); A = np.asarray(im)[..., 3] > 20; W, H = im.size
    cont = np.zeros((H, W), int)
    def poli(p):
        m = Image.new('L', (W, H), 0); ImageDraw.Draw(m).polygon(p, fill=255); return np.asarray(m) > 0
    zone = {k: poli(v) for k, v in REG.items()}
    resto = ~(zone['r1'] | zone['r2'] | zone['r3'])
    for k in REG: cont += zone[k]
    print('pixel visibili in più zone:', int((A & (cont > 1)).sum()), '· slitta (resto):', int((A & resto).sum()))
    for k, lst in ZAMPE.items():
        for (x0, y0, x1, y1), _ in lst:
            fuori = A[y0:y1, x0:x1] & ~zone[k][y0:y1, x0:x1]
            print(k, 'zampe', (x0, y0, x1, y1), 'pixel fuori dalla zona della renna:', int(fuori.sum()))
    col = {'r1': (255, 80, 80), 'r2': (80, 200, 80), 'r3': (80, 120, 255)}
    bg = Image.new('RGBA', im.size, (230, 230, 230, 255)); bg.alpha_composite(im); d = bg.convert('RGB').copy(); dr = ImageDraw.Draw(d)
    for k, p in REG.items(): dr.polygon(p, outline=col[k])
    for k, lst in ZAMPE.items():
        for (x0, y0, x1, y1), (px, py) in lst: dr.rectangle((x0, y0, x1, y1), outline=(255, 160, 0)); dr.ellipse((px - 2, py - 2, px + 2, py + 2), fill=(255, 0, 255))
    d.resize((W * 2, H * 2), Image.NEAREST).save(sys.argv[2] + '/renne-debug.png')
