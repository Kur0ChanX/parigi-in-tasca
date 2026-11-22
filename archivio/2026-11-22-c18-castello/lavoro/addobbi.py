# Addobbi animati del castello (C18, Controllo 11), calcolati dal disegno di Mario: finestre, lucine sui bordi dei tetti, ghirlande sotto i tetti grandi, brillio sulla guglia.
# Uso: python3 -I addobbi.py <cartella con castello-geo.json e castello-notte.png>  → addobbi.json (dati per la pagina) e addobbi-debug.png (dove cadono)
import sys, json, math
from PIL import Image, ImageDraw
D = sys.argv[1]; geo = json.load(open(D + '/castello-geo.json'))
X0, Y0, WS, HS = geo['img']; VIS = 182          # sotto y 182 le casette coprono quasi tutto
r1 = lambda v: round(v, 1)
# finestre: i vetri del finestrone (tanti quadratini) diventano una finestra sola
fin, vetri = [], []
for x, y, w, h in geo['finestre']:
    (vetri if (490 <= x <= 501 and 157 <= y <= 179) else fin).append([x, y, w, h])
if vetri:
    a = min(v[0] for v in vetri); b = min(v[1] for v in vetri); c = max(v[0] + v[2] for v in vetri); d = max(v[1] + v[3] for v in vetri)
    fin.append([r1(a), r1(b), r1(c - a), r1(d - b)])
fin = [f for f in fin if f[1] < VIS]
# lucine lungo i due bordi di ogni tetto a cono (solo dove il bordo è quello vero, non dove un'altra torre lo copre)
luci, ghirl = [], []
for k, c in enumerate(geo['coni']):
    ax, ay = c['apice']; xl, xr, yb = c['base']
    if ay > VIS: continue
    for lato, pts, xc, seg in (('s', c['sx'], xl, -1), ('d', c['dx'], xr, 1)):
        ok = []
        for x, y in pts:
            if y <= ay + 1.5 or y > min(yb, VIS): continue
            atteso = ax + (xc - ax) * (y - ay) / max(1e-6, yb - ay)
            if abs(x - atteso) <= .2 * abs(xc - ax) + .6: ok.append((x, y))
        # ricampiono a passo costante lungo il bordo
        passo, acc, prev = 4.2, 2.0, None
        for x, y in ok:
            if prev is not None:
                dd = math.hypot(x - prev[0], y - prev[1])
                if dd > 3: acc = 0; prev = (x, y); continue   # salto: pezzo coperto, riparto
                acc += dd
            prev = (x, y)
            if acc >= passo or len(luci) == 0 or acc == 0 and False: pass
            if acc >= passo: luci.append([r1(x + seg * .35), r1(y), k]); acc = 0
    if xr - xl >= 9 and yb + 3.5 < VIS:
        ghirl.append([r1(xl + (xr - xl) * .1), r1(xr - (xr - xl) * .1), r1(yb + 3.4), k])
alto = min(geo['coni'], key=lambda c: c['apice'][1])['apice']
out = dict(finestre=fin, luci=[l[:2] for l in luci], ghirlande=[g[:3] for g in ghirl], guglia=[r1(alto[0]), r1(alto[1] - 3.4)], img=geo['img'])
json.dump(out, open(D + '/addobbi.json', 'w'))
im = Image.open(D + '/castello-notte.png').convert('RGB'); k = im.width / WS
P = lambda x, y: ((x - X0) * k, (y - Y0) * k)
dr = ImageDraw.Draw(im)
for x, y, w, h in fin: dr.rectangle((*P(x, y), *P(x + w, y + h)), outline=(255, 140, 0), width=1)
for x, y in out['luci']: px, py = P(x, y); dr.ellipse((px - 2, py - 2, px + 2, py + 2), fill=(255, 255, 0))
for a, b, y in out['ghirlande']: dr.line((*P(a, y), *P(b, y)), fill=(0, 220, 90), width=2)
px, py = P(*out['guglia']); dr.ellipse((px - 4, py - 4, px + 4, py + 4), outline=(255, 255, 255), width=2)
dr.line((0, (VIS - Y0) * k, im.width, (VIS - Y0) * k), fill=(255, 0, 0), width=1)
im.save(D + '/addobbi-debug.png')
print('finestre', len(fin), 'luci', len(out['luci']), 'ghirlande', len(ghirl), 'guglia', out['guglia'])
