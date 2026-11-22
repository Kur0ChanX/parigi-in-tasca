# Torre Eiffel della testata (C18, Controllo 13; Mario 22/11 16:29 «La Torre Eiffel è fatta male dietro»): sagoma con le misure vere
# (gambe che si aprono, arco, 1°, 2° e 3° piano, lanterna, antenna), traliccio a X, luce dorata della sera e lo scintillio bianco.
# Nessun disegno di Mario per la torre: è vettoriale nostra (se Mario ne manda uno, si usa il suo come per castello e albero).
# Uso: python3 -I torre.py   (rifà nella pagina il pezzo fra i segni «torre:inizio/fine»; la prima volta toglie la sagoma vecchia)
import math, random
P = '/home/user/parigi-in-tasca/dicembre/parigi-disney-natale.html'
CX, BASE, K = 262.0, 232.0, .42          # centro, piede (nascosto dietro casette e tetti), unità per metro
f = lambda v: ('%.2f' % v).rstrip('0').rstrip('.')
Y = lambda h: BASE - h * K
OUT = [(0, 62.5), (20, 52), (40, 43.5), (57, 37.5), (75, 30.5), (95, 24.5), (115, 19.5), (135, 15.6), (160, 12.2), (200, 8.4), (240, 5.6), (276, 3.9), (300, 2.4)]
def lerp(T, h):
    for (a, x), (b, z) in zip(T, T[1:]):
        if a <= h <= b: t = (h - a) / (b - a); t = t * t * (3 - 2 * t) * .35 + t * .65; return x + (z - x) * t
    return T[-1][1]
def hw(h): return lerp(OUT, h)
INN = [(57, 21), (75, 15), (95, 8.5), (110, 3.2), (113, 2.4)]          # apertura fra 1° e 2° piano (cielo fra le gambe)
def iw(h): return lerp(INN, h)
def lato(h0, h1, seg, fn, s=1):
    return [(CX + s * fn(h0 + (h1 - h0) * i / seg) * K, Y(h0 + (h1 - h0) * i / seg)) for i in range(seg + 1)]
pts = lambda L: ' '.join(f'{f(x)},{f(y)}' for x, y in L)
# sagoma piena (pari-dispari: le aperture sono buchi): contorno esterno + arco sotto il 1° piano + apertura fra 1° e 2°
est = lato(0, 300, 60, hw, -1) + lato(300, 0, 60, hw, 1)
arco = 'M' + f(CX - 37 * K) + ' ' + f(Y(0)) + ' L' + f(CX - 33.5 * K) + ' ' + f(Y(16)) + ' Q' + f(CX) + ' ' + f(Y(58)) + ' ' + f(CX + 33.5 * K) + ' ' + f(Y(16)) + ' L' + f(CX + 37 * K) + ' ' + f(Y(0)) + 'Z'
ap2 = 'M' + pts(lato(60, 112, 14, iw, -1)).replace(' ', ' L') + ' L' + pts(lato(112, 60, 14, iw, 1)).replace(' ', ' L') + 'Z'
sagoma = 'M' + pts(est).replace(' ', ' L') + 'Z ' + arco + ' ' + ap2
# traliccio: a ogni livello una trave, fra due livelli una X (nelle gambe sotto il 2° piano, nel fusto sopra)
tr = []
livelli = [0, 10, 20, 30, 40, 48, 57, 66, 75, 84, 93, 103, 115, 128, 142, 157, 173, 190, 208, 227, 247, 266, 276]
for a, b in zip(livelli, livelli[1:]):
    if b <= 115:   # due gambe: X fra bordo esterno e bordo interno (sotto il 1° piano bordo interno = pilastro dell'arco)
        ia = iw(a) if a >= 57 else 37 - a * .07; ib = iw(b) if b >= 57 else 37 - b * .07
        for s in (-1, 1):
            xo_a, xo_b, xi_a, xi_b = CX + s * hw(a) * K, CX + s * hw(b) * K, CX + s * ia * K, CX + s * ib * K
            tr.append(f'M{f(xo_a)} {f(Y(a))}L{f(xi_b)} {f(Y(b))}M{f(xi_a)} {f(Y(a))}L{f(xo_b)} {f(Y(b))}M{f(xo_b)} {f(Y(b))}L{f(xi_b)} {f(Y(b))}')
    else:
        xa, xb = hw(a) * K, hw(b) * K
        tr.append(f'M{f(CX - xa)} {f(Y(a))}L{f(CX + xb)} {f(Y(b))}M{f(CX + xa)} {f(Y(a))}L{f(CX - xb)} {f(Y(b))}M{f(CX - xb)} {f(Y(b))}L{f(CX + xb)} {f(Y(b))}')
        tr.append(f'M{f(CX)} {f(Y(a))}L{f(CX)} {f(Y(b))}')
traliccio = ''.join(tr)
# bordi accesi (la luce dorata sale lungo gli spigoli)
spigoli = 'M' + pts(lato(0, 300, 40, hw, -1)).replace(' ', ' L') + ' M' + pts(lato(0, 300, 40, hw, 1)).replace(' ', ' L')
def piano(h, sp, extra, alto):
    x0, x1 = CX - (hw(h) + extra) * K, CX + (hw(h) + extra) * K; y = Y(h)
    n = max(3, int((x1 - x0) / 1.6))
    ring = ''.join(f'M{f(x0 + (x1 - x0) * i / n)} {f(y - alto)}v{f(alto * .7)}' for i in range(n + 1))
    return (f'<rect x="{f(x0)}" y="{f(y - sp / 2)}" width="{f(x1 - x0)}" height="{f(sp)}" fill="url(#torreP)"/>'
            f'<path d="M{f(x0)} {f(y - alto)}H{f(x1)}{ring}" fill="none" style="stroke:var(--lamp-hot)" stroke-width=".25" opacity=".7"/>')
cab = (f'<rect x="{f(CX - 3.3 * K * 1.25)}" y="{f(Y(287))}" width="{f(6.6 * K * 1.25)}" height="{f((287 - 277) * K)}" fill="url(#torreP)"/>'
       f'<rect x="{f(CX - 2.2 * K)}" y="{f(Y(285))}" width="{f(4.4 * K)}" height="{f(5 * K)}" style="fill:var(--lamp-hot)" opacity=".9"/>')
cima = Y(300); ant = Y(326)
svg = f'''<!-- torre:inizio · v34 · Torre Eiffel con le misure vere (archivio/2026-11-22-c18-albero/lavoro/torre.py; Mario 22/11 16:29 «fatta male dietro»): gambe che si aprono, arco, tre piani, traliccio a X, luce dorata e scintillio bianco -->
   <ellipse cx="{f(CX)}" cy="{f(Y(150))}" rx="40" ry="66" fill="url(#kglow)" opacity=".5"/>
   <g id="torre"><path d="{sagoma}" fill="url(#torreG)" fill-rule="evenodd"/>
   <path d="{traliccio}" fill="none" stroke="#3B2209" stroke-width=".28" opacity=".55"/>
   <path d="{spigoli}" fill="none" style="stroke:var(--lamp-hot)" stroke-width=".35" opacity=".55"/>
   {piano(57, 1.6, 2.2, 1.5)}{piano(115, 1.3, 1.6, 1.2)}{piano(276, .9, 1.4, .9)}{cab}
   <path d="M{f(CX)} {f(cima)}V{f(ant)}" style="stroke:var(--tower)" stroke-width=".8"/><circle cx="{f(CX)}" cy="{f(ant)}" r=".7" fill="#FF6B6B"/></g>
   <g id="towerlights"></g>
   <g class="faro" fill="url(#faroG)"><polygon points="{f(CX)},{f(cima)} 410,{f(cima - 5.5)} 410,{f(cima + 6.5)}"/><polygon points="{f(CX)},{f(cima)} 410,{f(cima - 5.5)} 410,{f(cima + 6.5)}" transform="matrix(-1 0 0 1 {f(2 * CX)} 0)"/></g>
   <circle class="faro-lampo" cx="{f(CX)}" cy="{f(cima)}" r="3.4" fill="url(#kglow)"/>
   <!-- torre:fine -->'''
defs = ('<linearGradient id="torreG" gradientUnits="userSpaceOnUse" x1="' + f(CX - 26) + '" y1="0" x2="' + f(CX + 26) + '" y2="0">'
        '<stop offset="0" stop-color="#6E3F12"/><stop offset=".3" style="stop-color:var(--tower)"/><stop offset=".5" stop-color="#FFDB8E"/><stop offset=".7" style="stop-color:var(--tower)"/><stop offset="1" stop-color="#5E3410"/></linearGradient>'
        '<linearGradient id="torreP" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE3A6"/><stop offset="1" stop-color="#7A4A18"/></linearGradient>')
# lucine dello scintillio: punti dentro la sagoma (non nelle aperture), più fitti in basso dove la torre è larga
random.seed(4)
L = []
while len(L) < 70:
    h = 300 * (1 - math.sqrt(random.random())) if random.random() < .8 else random.uniform(115, 300)
    if h < 52: continue
    x = (random.random() * 2 - 1) * hw(h) * .92
    if 60 < h < 112 and abs(x) < iw(h) + 1: continue
    L.append([round(CX + x * K, 1), round(Y(h), 1)])
js = ("/*torre:inizio · v34 · scintillio della Torre Eiffel (come quello vero, ogni sera): lucine bianche e calde che lampeggiano a caso, sempre con ritardi negativi */\n"
      " {const TL=" + str(L).replace(' ', '') + ";\n"
      "  set('towerlights',TL.map(([x,y],i)=>`<circle class=\"tw\" style=\"animation-delay:-${(rnd()*1.8).toFixed(2)}s;animation-duration:${(.9+rnd()*1.1).toFixed(2)}s;fill:${i%3?'#FFFFFF':'var(--lamp-hot)'}\" cx=\"${x}\" cy=\"${y}\" r=\"${i%3?.55:.75}\"/>`).join(''))}\n"
      " /*torre:fine*/\n")
s = open(P, encoding='utf-8').read()
if '<!-- torre:inizio' not in s:
    a = s.index('   <ellipse cx="262" cy="170" rx="46" ry="70" fill="url(#kglow)" opacity=".55"/>'); b = s.index('<circle class="faro-lampo" cx="262" cy="116.5" r="3.4" fill="url(#kglow)"/>', a)
    b += len('<circle class="faro-lampo" cx="262" cy="116.5" r="3.4" fill="url(#kglow)"/>')
    assert 'M242 265 Q256 210 260 150' in s[a:b] and b - a < 1500
    s = s[:a] + svg + s[b:]
    a = s.index("let tw='';for(let i=0;i<18;i++)"); b = s.index("set('towerlights',tw);", a) + len("set('towerlights',tw);")
    assert b - a < 600
    s = s[:a] + js.rstrip('\n') + s[b:]
    i = s.index('<linearGradient id="faroG"'); s = s[:i] + defs + s[i:]
else:
    a = s.index('<!-- torre:inizio'); b = s.index('<!-- torre:fine -->', a) + len('<!-- torre:fine -->'); s = s[:a] + svg.lstrip() + s[b:]
    a = s.index('/*torre:inizio'); b = s.index('/*torre:fine*/', a) + len('/*torre:fine*/'); s = s[:a] + js.strip() + s[b:]
    a = s.index('<linearGradient id="torreG"'); b = s.index('<linearGradient id="faroG"', a); s = s[:a] + defs + s[b:]
assert s.count('id="torreG"') == 1 and s.count('id="towerlights"') == 1 and s.count("set('towerlights'") == 1
open(P, 'w', encoding='utf-8').write(s)
print('ok: torre', 'cima', f(cima), 'antenna', f(ant), '2° piano', f(Y(115)), '1° piano', f(Y(57)), 'lucine', len(L), 'svg', len(svg))
