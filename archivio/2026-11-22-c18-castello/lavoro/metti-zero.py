# Zero, il cane fantasma (foto di Mario, archivio/2026-11-22-c18-castello/mario-zero-cane.webp), insegue la slitta (Mario 22/11 ~15:2x): piccolo, naso acceso,
# orecchie, bocca e fondo del mantello che si muovono come al vento. Pezzi della SUA foto (coordinate nella foto 360×299), mai disegnato da noi.
# Uso: python3 -I metti-zero.py <cartella-lavoro>   (una volta, dopo metti-renne.py)
import sys, base64, io
import numpy as np
from PIL import Image
D = sys.argv[1]; P = '/home/user/parigi-in-tasca/dicembre/parigi-disney-natale.html'
im = Image.open('/home/user/parigi-in-tasca/archivio/2026-11-22-c18-castello/mario-zero-cane.webp').convert('RGBA')
a = np.asarray(im).astype(float) / 255; rgb, al = a[..., :3], a[..., 3]
r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
arancio = (r > .7) & (r > b + .3)                         # naso a zucca: resta acceso
notte = rgb * .86 * np.array([.93, .97, 1.06])               # fantasma in luce di luna: un filo più blu
rgb = np.where(arancio[..., None], np.clip(rgb * 1.08, 0, 1), np.clip(notte, 0, 1))
z = Image.fromarray(np.dstack([rgb * 255, al * 255]).astype('uint8'), 'RGBA').resize((120, 100), Image.LANCZOS)
z.save(D + '/v33-zero-notte.webp', 'WEBP', quality=88, method=6)
b64 = base64.b64encode(open(D + '/v33-zero-notte.webp', 'rb').read()).decode()
pt = lambda p: ' '.join(f'{x},{y}' for x, y in p)
ORE = [(150, 20), (360, 20), (360, 150), (250, 150), (200, 140), (162, 126), (150, 100)]
BOCCA = [(0, 132), (118, 120), (124, 168), (0, 176)]
MANT = [(90, 215), (360, 215), (360, 299), (90, 299)]
U = 'maskUnits="userSpaceOnUse" x="0" y="0" width="360" height="299"'
defs = (f'<image id="zImg" width="360" height="299" href="data:image/webp;base64,{b64}"/>'
        f'<mask id="zMc" {U}><rect width="360" height="299" fill="#fff"/><polygon points="{pt(ORE)}" fill="#000"/><polygon points="{pt(BOCCA)}" fill="#000"/><polygon points="{pt(MANT)}" fill="#000"/></mask>'
        f'<clipPath id="zCo"><polygon points="{pt(ORE)}"/></clipPath><clipPath id="zCb"><polygon points="{pt(BOCCA)}"/></clipPath><clipPath id="zCm"><polygon points="{pt(MANT)}"/></clipPath>'
        '<radialGradient id="zNasoG"><stop offset="0" stop-color="#FFB347" stop-opacity=".95"/><stop offset=".45" stop-color="#FF8A1F" stop-opacity=".45"/><stop offset="1" stop-color="#FF8A1F" stop-opacity="0"/></radialGradient>')
zero = ('<g id="zero" transform="translate(114 12)"><g transform="scale(.036)">'
        '<use href="#zImg" mask="url(#zMc)"/><g id="zOre"><use href="#zImg" clip-path="url(#zCo)"/></g><g id="zBocca"><use href="#zImg" clip-path="url(#zCb)"/></g><g id="zMant"><use href="#zImg" clip-path="url(#zCm)"/></g>'
        '<circle id="zNaso" cx="63" cy="33" r="46" fill="url(#zNasoG)"/></g></g>')
s = open(P, encoding='utf-8').read()
for n in ('zImg', 'zMc', 'zCo', 'zCb', 'zCm', 'zNaso', 'zOre', 'zBocca', 'zMant', 'zero'): assert s.count(f'id="{n}"') == 0 and s.count(f'#{n})') == 0 and s.count(f"'{n}'") == 0, n
a1 = 'clip-path="url(#slC1b)"/></g></g></g>'; assert s.count(a1) == 1; s = s.replace(a1, a1 + zero)
i = s.index('<svg class="scene"'); j = s.index('</defs>', i)
s = s[:j] + '<!-- C18 · Zero (foto di Mario) a pezzi: orecchie, bocca, fondo del mantello -->' + defs + s[j:]
js = (" /* v33 · Zero insegue la slitta (Mario ~15:2x «piccolino… il naso luminoso… si muovono le orecchie, il mantello di sotto e la bocca… come se avesse un po’ di vento»): va su e giù e avanti e indietro col suo ritmo, orecchie che sventolano, bocca che si apre e si chiude piano, fondo del mantello che ondeggia, naso a zucca che pulsa */\n"
      " const ZE=['zero','zOre','zBocca','zMant','zNaso'].map(i=>document.getElementById(i));\n"
      " const zero=t=>{const [z,o,b,m,n]=ZE;if(!z||!o||!b||!m||!n)return;\n"
      "  z.setAttribute('transform',`translate(${(114+Math.sin(t*1.7)*2.5).toFixed(2)} ${(12+Math.sin(t*3.1)*2.2).toFixed(2)}) rotate(${(Math.sin(t*2.3)*4).toFixed(2)} 6 5)`);\n"
      "  o.setAttribute('transform',`rotate(${(Math.sin(t*5.2)*6).toFixed(1)} 155 100)`);b.setAttribute('transform',`rotate(${(-4-Math.sin(t*2.6)*4).toFixed(1)} 118 140)`);\n"
      "  m.setAttribute('transform',`translate(0 215) skewX(${(Math.sin(t*4.4)*10).toFixed(1)}) translate(0 -215)`);n.setAttribute('opacity',(.65+.35*Math.sin(t*4)).toFixed(2))};\n")
a2 = " window.renneProva=t=>renne(t);"
assert s.count(a2) == 1; s = s.replace(a2, js + " window.renneProva=t=>{renne(t);zero(t)};")
a3 = "translate(${-O[0]} ${-O[1]})`);renne(t);"
assert s.count(a3) == 1; s = s.replace(a3, a3 + "zero(t);")
open(P, 'w', encoding='utf-8').write(s); print('ok', len(s))
