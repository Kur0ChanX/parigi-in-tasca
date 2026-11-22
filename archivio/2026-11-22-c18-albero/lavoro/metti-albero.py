# Mette nella pagina di dicembre l'albero dal disegno di Mario (C18, Controllo 13): immagine colorata in luce di notte + addobbi animati sulle sue coordinate.
# Uso: python3 -I metti-albero.py <cartella con albero-notte.webp e albero-geo.json>
# La prima volta toglie l'abete disegnato da noi (tre triangoli, stella, palline e filo calcolati a mano); le volte dopo rifà solo il pezzo fra i segni «albero:inizio/fine».
import sys, json, base64, math
D = sys.argv[1]; P = '/home/user/parigi-in-tasca/dicembre/parigi-disney-natale.html'
s = open(P, encoding='utf-8').read()
g = json.load(open(D + '/albero-geo.json')); X0, Y0, WS, HS = g['img']
b64 = base64.b64encode(open(D + '/albero-notte.webp', 'rb').read()).decode()
f1 = lambda v: ('%.1f' % v).rstrip('0').rstrip('.')
sx, sy, sr = g['stella']
cx = (g['largo'][0] + g['largo'][1]) / 2; lw = g['largo'][1] - g['largo'][0]
r1, r2 = sr + 2, sr + 8.5   # raggi della stella: da appena fuori le punte
d8 = [(math.cos(k * math.pi / 4), math.sin(k * math.pi / 4)) for k in range(8)]
raggi = ''.join(f'M{f1(sx + c * r1)} {f1(sy + n * r1)}L{f1(sx + c * (r2 if k % 2 == 0 else r2 - 3))} {f1(sy + n * (r2 if k % 2 == 0 else r2 - 3))}' for k, (c, n) in enumerate(d8))
svg = f'''<!-- albero:inizio · v34 · l'albero è il DISEGNO di Mario (22/11 16:29, archivio/2026-11-22-c18-albero/mario-albero-riferimento.jpg) colorato e messo in luce di notte (archivio/2026-11-22-c18-albero/lavoro/albero.py): colori, ombre e luna da sinistra sui suoi tratti. Mai ridisegnato da noi. -->
    <ellipse cx="{f1(cx + 34)}" cy="268" rx="{f1(lw * .46)}" ry="4.2" fill="url(#ombraMorbida)"/><ellipse cx="{f1(cx)}" cy="{f1((g['cima'] + 268) / 2 + 6)}" rx="{f1(lw * .6)}" ry="{f1((268 - g['cima']) * .52)}" fill="url(#kglow)" opacity=".28"/><ellipse cx="{f1(cx)}" cy="263" rx="{f1(lw * .4)}" ry="5" fill="url(#pool)" opacity=".6"/>
    <circle class="stellaC" cx="{f1(sx)}" cy="{f1(sy)}" r="{f1(sr * 1.6)}" fill="url(#kglow)"/>
    <image id="albImg" x="{f1(X0)}" y="{f1(Y0)}" width="{WS}" height="{HS}" preserveAspectRatio="none" href="data:image/webp;base64,{b64}"/>
    <g class="raggi-st" style="stroke:var(--lamp-hot)" stroke-width=".6" stroke-linecap="round" opacity=".6"><path d="{raggi}"/></g>
    <g id="firlights"></g>
    <g id="filoAlbero"></g>
    <g id="regaliAlbero"></g>
    <!-- albero:fine -->'''
ALB = json.dumps(dict(festoni=g['festoni'], palle=[p[:3] for p in g['palle']]), separators=(',', ':'))
js = ("/*albero:inizio · v34 · addobbi animati sul disegno di Mario (coordinate da albero.py): lucine colorate sul SUO festone che si rincorrono, stelline che luccicano sulle palline (ritardi sempre negativi: niente lampi all’apertura) */\n"
      " {const ALB=" + ALB + ";\n"
      "  set('filoAlbero',ALB.festoni.map((F,k)=>F.map(([x,y],j)=>{const c=BU[(j+k*2)%BU.length];return `<g class=\"hb\" style=\"animation-delay:-${((j*.21+k*.53)%2.6).toFixed(2)}s\"><circle cx=\"${x}\" cy=\"${y}\" r=\"3.4\" style=\"fill:${c}\" opacity=\".3\"/><circle cx=\"${x}\" cy=\"${y}\" r=\"1.35\" style=\"fill:${c}\"/><circle cx=\"${x}\" cy=\"${y}\" r=\"1.35\" fill=\"url(#pallaO)\"/></g>`}).join('')).join(''));\n"
      "  const lu=(x,y,r)=>`M${f1(x)} ${f1(y-r)}L${f1(x+r*.18)} ${f1(y-r*.18)} ${f1(x+r)} ${f1(y)} ${f1(x+r*.18)} ${f1(y+r*.18)} ${f1(x)} ${f1(y+r)} ${f1(x-r*.18)} ${f1(y+r*.18)} ${f1(x-r)} ${f1(y)} ${f1(x-r*.18)} ${f1(y-r*.18)}Z`;\n"
      "  set('firlights',ALB.palle.map(([x,y,r],i)=>`<g class=\"scint\" style=\"animation-delay:-${((i*1.13)%5).toFixed(2)}s;animation-duration:${(3.6+(i%4)*.6).toFixed(1)}s\"><circle cx=\"${f1(x-r*.38)}\" cy=\"${f1(y-r*.42)}\" r=\"${f1(r*.9)}\" fill=\"url(#kglow)\"/><path d=\"${lu(x-r*.38,y-r*.42,r*1.05)}\" fill=\"#FFFFFF\"/></g>`).join(''));\n"
      "  /*albero:fine*/\n")
if '<!-- albero:inizio' not in s:
    a = s.index('<ellipse cx="378" cy="268" rx="40" ry="4.2" fill="url(#ombraMorbida)"/>'); b = s.index('<g id="regaliAlbero"></g>', a) + len('<g id="regaliAlbero"></g>')
    assert '<polygon points="345,132 325,184 365,184"' in s[a:b] and b - a < 3000, 'abete vecchio non trovato'
    s = s[:a] + svg + s[b:]
    a = s.index(" const fl=[[337,174]"); b = s.index("  const PK2=", a)
    assert "set('firlights',b+document.getElementById('firlights').innerHTML);" in s[a:b] and b - a < 4000
    s = s[:a] + js.replace("/*albero:inizio", " /*albero:inizio", 1).replace(" {const ALB=", " {const ALB=", 1) + s[b:]
    a = s.index(" /* v32 · albero: filo dorato a spirale"); b = s.index("return g}).join(''));\n", a) + len("return g}).join(''));\n")
    assert "const FILI=" in s[a:b] and b - a < 2000
    s = s[:a] + s[b:]
else:
    a = s.index('<!-- albero:inizio'); b = s.index('<!-- albero:fine -->', a) + len('<!-- albero:fine -->'); s = s[:a] + svg + s[b:]
    a = s.index(' /*albero:inizio'); b = s.index('  /*albero:fine*/\n', a) + len('  /*albero:fine*/\n'); s = s[:a] + ' ' + js + s[b:]
assert s.count('id="albImg"') == 1 and s.count('id="filoAlbero"') == 1 and s.count('const FILI=') == 0 and s.count("const PILA=") == 1
open(P, 'w', encoding='utf-8').write(s)
print('ok: albero', g['img'], 'lucine', sum(len(f) for f in g['festoni']), 'palle', len(g['palle']), 'webp', len(b64) * 3 // 4)
