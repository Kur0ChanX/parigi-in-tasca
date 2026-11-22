# Mette nella pagina la slitta a pezzi (C18, Mario ~15:1x): stessa foto (con il rosso di slitta-rosso.py), renne con corpo e zampe separati, mosse dal JS ogni fotogramma.
# Uso: python3 -I metti-renne.py <slitta.webp>   (una volta, sulla pagina con la slitta in un pezzo solo)
import sys, os, re, base64, runpy
G = runpy.run_path(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'renne-pezzi.py'))
REG, ZAMPE = G['REG'], G['ZAMPE']
P = '/home/user/parigi-in-tasca/dicembre/parigi-disney-natale.html'
s = open(P, encoding='utf-8').read()
b64 = base64.b64encode(open(sys.argv[1], 'rb').read()).decode()
pt = lambda p: ' '.join(f'{x},{y}' for x, y in p)
R = lambda r: f'x="{r[0]}" y="{r[1]}" width="{r[2] - r[0]}" height="{r[3] - r[1]}"'
U = 'maskUnits="userSpaceOnUse" x="0" y="0" width="520" height="208"'
defs = f'<image id="slImg" width="520" height="208" href="data:image/webp;base64,{b64}"/>'
defs += f'<mask id="slMs" {U}><rect width="520" height="208" fill="#fff"/>' + ''.join(f'<polygon points="{pt(p)}" fill="#000"/>' for p in REG.values()) + '</mask>'
pezzi = '<g transform="scale(.211538)"><use href="#slImg" mask="url(#slMs)"/>'
for k in ('r3', 'r2', 'r1'):
    n = k[1]; (ra, _), (rb, _) = ZAMPE[k]
    defs += f'<mask id="slM{n}" {U}><polygon points="{pt(REG[k])}" fill="#fff"/><rect {R(ra)} fill="#000"/><rect {R(rb)} fill="#000"/></mask>'
    defs += f'<clipPath id="slC{n}a"><rect {R(ra)}/></clipPath><clipPath id="slC{n}b"><rect {R(rb)}/></clipPath>'
    pezzi += f'<g id="slR{n}"><use href="#slImg" mask="url(#slM{n})"/><g id="slR{n}a"><use href="#slImg" clip-path="url(#slC{n}a)"/></g><g id="slR{n}b"><use href="#slImg" clip-path="url(#slC{n}b)"/></g></g>'
pezzi += '</g>'
s, n = re.subn(r'(<g id="slitta" class="sl" style="visibility:hidden">)<image width="110" height="44" href="data:image/webp;base64,[A-Za-z0-9+/=]+"/>', lambda m: m.group(1) + pezzi, s); assert n == 1
i = s.index('<svg class="scene"'); j = s.index('</defs>', i)
s = s[:j] + '<!-- C18 · slitta a pezzi (Mario ~15:1x): foto sua, renne con corpo e zampe separati -->' + defs + s[j:]
perni = [[k[1], f, c, ZAMPE[k][0][1], ZAMPE[k][1][1]] for k, f, c in (('r1', 0, (48, 56)), ('r2', 2.2, (125, 95)), ('r3', 4.1, (205, 125)))]
js = (" /* v33 · renne indipendenti (Mario ~15:1x «non sembra uno sticker che si muove tutto insieme… le zampe»): ogni renna ondeggia col suo ritmo e le zampe davanti e dietro galoppano in controfase; pezzi della stessa foto (archivio/2026-11-22-c18-castello/lavoro/renne-pezzi.py) */\n"
      " const RN=" + str([[int(a), b, list(c), list(d), list(e)] for a, b, c, d, e in perni]).replace(' ', '') + ".map(([k,f,c,a,b])=>({f,c,a,b,g:document.getElementById('slR'+k),ga:document.getElementById('slR'+k+'a'),gb:document.getElementById('slR'+k+'b')}));\n"
      " const renne=t=>{for(const r of RN){if(!r.g||!r.ga||!r.gb)continue;const s=t*6.2+r.f,z=Math.sin(s*2)*16;\n"
      "  r.g.setAttribute('transform',`translate(0 ${(Math.sin(s)*5).toFixed(2)}) rotate(${(Math.sin(s+.8)*3).toFixed(2)} ${r.c[0]} ${r.c[1]})`);\n"
      "  r.ga.setAttribute('transform',`rotate(${z.toFixed(1)} ${r.a[0]} ${r.a[1]})`);r.gb.setAttribute('transform',`rotate(${(-z).toFixed(1)} ${r.b[0]} ${r.b[1]})`)}};\n")
a = " /* un fotogramma: u = da 0 a 1 lungo il passaggio */\n"
assert s.count(a) == 1; s = s.replace(a, js + a)
b = "translate(${-O[0]} ${-O[1]})`);"
assert s.count(b) == 1; s = s.replace(b, b + "renne(t);")
open(P, 'w', encoding='utf-8').write(s); print('ok', len(s))
