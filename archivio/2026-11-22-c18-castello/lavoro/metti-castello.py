# Mette nella pagina di dicembre il castello dal disegno di Mario (C18, Controllo 11): immagine in luce di notte + addobbi animati sulle sue coordinate.
# Uso: python3 -I metti-castello.py <cartella con castello-notte.webp e addobbi.json>   (si lancia UNA volta sulla pagina con la sagoma vecchia)
import sys, json, base64
from PIL import Image
D = sys.argv[1]; P = '/home/user/parigi-in-tasca/dicembre/parigi-disney-natale.html'
s = open(P, encoding='utf-8').read()
ad = json.load(open(D + '/addobbi.json')); X0, Y0, WS, HS = ad['img']
b64 = base64.b64encode(open(D + '/castello-notte.webp', 'rb').read()).decode()
def rep(old, new, n=1):
    global s
    assert s.count(old) == n, (s.count(old), old[:80]); s = s.replace(old, new)
def tra(a, b, new, tieni_b=True):
    global s
    i = s.index(a); j = s.index(b, i); assert s.count(a) == 1
    s = s[:i] + new + (s[j:] if tieni_b else s[j + len(b):])
# 1) defs: immagine del castello e maschera (al posto del ritaglio della sagoma vecchia)
i = s.index('<clipPath id="castClip">'); j = s.index('</clipPath>', i) + len('</clipPath>')
s = s[:i] + (f'<image id="castImg" x="{X0}" y="{Y0}" width="{WS}" height="{HS}" href="data:image/webp;base64,{b64}"/>'
             '<mask id="castM" style="mask-type:alpha"><use href="#castImg"/></mask>') + s[j:]
rep('<!-- v32 · luci della testata (Mario 22/11 12:27): ritaglio del castello per le proiezioni,',
    '<!-- v33 · castello = disegno di Mario in luce di notte (archivio/2026-11-22-c18-castello/lavoro/castello.py) e sua maschera per le proiezioni; v32 · luci della testata (Mario 22/11 12:27):')
# 2) strato medio: via la sagoma vecchia e i suoi strati, dentro il disegno
al = Image.open(D + '/castello-notte.webp').getchannel('A'); k = al.width / WS
dentro = lambda x, y: al.getpixel((int((x - X0) * k), int((y - Y0) * k))) > 230
NEVE = [[513, 48, 3], [508, 95, 2.6], [522, 128, 3.4], [478, 112, 2.4], [536, 140, 2.8], [470, 165, 2.4], [500, 160, 3]]
assert all(dentro(x, y) for x, y, r in NEVE), [p for p in NEVE if not dentro(p[0], p[1])]
nuovo = '''<!-- strato medio: castello -->
   <g class="par" data-depth="-0.025" data-max="11">
    <ellipse cx="502" cy="160" rx="175" ry="125" fill="url(#cglow)"/>
    <!-- v33 · il castello è il DISEGNO di Mario (22/11 ~14:4x, archivio/2026-11-22-c18-v33/mario-castello-riferimento.jpg) ritagliato e messo in luce di notte: colori suoi, luna da sinistra, neve sui tetti, finestre accese. Mai ridisegnato da noi. -->
    <use href="#castImg"/>
    <!-- v32 · luce calda dal basso e, ogni tanto, lo spettacolo di proiezioni: colori che scorrono, fiocchi di neve, una lama di luce (Mario 12:27 «magari con delle proiezioni»), solo sul disegno -->
    <g mask="url(#castM)"><rect x="395" y="20" width="215" height="190" fill="url(#suLuce)" opacity=".3"/>
     <g class="pj"><rect class="pj-onda" x="170" y="20" width="660" height="250" fill="url(#proiezG)"/><g id="pjNeve"></g><rect class="pj-lama" x="372" y="20" width="22" height="250" fill="url(#lamaG)"/></g></g>
    <g id="castLuci"></g>
    <g id="castFin"></g>
    <g id="castDeco"></g>
   </g>
   '''
tra('<!-- strato medio: castello -->', '<rect x="-60" y="200" width="920" height="90" fill="url(#nebbia)" opacity=".7"/>', nuovo)
# 3) merli della sagoma vecchia: via
rep(" let c='';for(let i=0;i<10;i++)c+=`<rect x=\"${417+i*17}\" y=\"188\" width=\"9\" height=\"8\"/>`;const cr=document.getElementById('cren');if(cr)cr.innerHTML=c;\n", '')
# 4) addobbi animati sulle coordinate del disegno
j = lambda v: json.dumps(v, separators=(',', ':'))
js = ''' /* v33 · castello = disegno di Mario (C18, Controllo 11): addobbi animati sulle coordinate del SUO disegno (calcolate da archivio/2026-11-22-c18-castello/lavoro/addobbi.py): finestre che si accendono una a una e ogni tanto si spengono (il finestrone a metà, si vedono i vetri), lucine a onda sui bordi dei tetti a cono, ghirlande con fiocchi rossi e lampadine colorate sotto i tetti, brillio sulla guglia (Mario 13:37 «lucine che si accendono, che si spengono… addobbi… cose natalizie») */
 const FIN=@FIN@,LUC=@LUC@,GHI=@GHI@,GUG=@GUG@;
 const arco=(x,y,w,h)=>`M${f1(x)} ${f1(y+h)}V${f1(y+w/2)}A${f1(w/2)} ${f1(w/2)} 0 0 1 ${f1(x+w)} ${f1(y+w/2)}V${f1(y+h)}Z`;
 set('castFin',FIN.map(([x,y,w,h],i)=>{const g=w>4;
  return `<g class="fin-c${i%3===2?' fin-f':''}" style="animation-delay:${(.4+i*.23).toFixed(2)}s,${4+(i*5)%9}s;animation-duration:.7s,${13+(i*7)%17}s"><circle cx="${f1(x+w/2)}" cy="${f1(y+h/2)}" r="${f1(Math.max(w,h)*(g?.85:1.25))}" fill="url(#kglow)" opacity=".75"/><path d="${arco(x,y,w,h)}" style="fill:var(--win)" opacity="${g?.45:.95}"/></g>`}).join(''));
 set('castLuci',LUC.map(([x,y])=>`<circle class="ond" style="animation-delay:-${((y/22+x/90)%2.4).toFixed(2)}s" cx="${x}" cy="${y}" r=".8"/>`).join(''));
 {const LC=['#FF5A5F','#FFD36B','#5BE08F','#6FA8FF'];let d='',lb='';
  const fiocco=(x,y)=>`<path d="M${f1(x)} ${f1(y)}q-1.9 -1.6 -2.2 .4q1.1 .6 2.2 -.4q1.9 -1.6 2.2 .4q-1.1 .6 -2.2 -.4z" fill="#D8323F"/><path d="M${f1(x)} ${f1(y)}l-.9 2.3M${f1(x)} ${f1(y)}l.9 2.3" stroke="#A81E2A" stroke-width=".6" stroke-linecap="round"/>`;
  GHI.forEach(([a,b,y],k)=>{const A=[a,y],B=[b,y],c=[(a+b)/2,y+Math.min(4.5,(b-a)*.28)],q=`M${f1(a)} ${f1(y)}Q${f1(c[0])} ${f1(c[1])} ${f1(b)} ${f1(y)}`;
   d+=`<path d="${q}" fill="none" stroke="#17633A" stroke-width="1.9" stroke-linecap="round"/><path d="${q}" fill="none" stroke="#3FAE7A" stroke-width=".7" stroke-dasharray=".6 1.1" stroke-linecap="round"/>`+fiocco(a,y)+fiocco(b,y);
   const n=Math.max(3,Math.round((b-a)/3.6));for(let i=1;i<n;i++){const p=qpt(A,c,B,i/n),col=LC[(i+k)%4];
    lb+=`<g class="lampC" style="animation-delay:-${(((i+k)%4)*.4).toFixed(1)}s"><circle cx="${f1(p[0])}" cy="${f1(p[1]+1)}" r="2" fill="${col}" opacity=".32"/><circle cx="${f1(p[0])}" cy="${f1(p[1]+1)}" r=".9" fill="${col}"/><circle cx="${f1(p[0]-.3)}" cy="${f1(p[1]+.75)}" r=".3" fill="#FFFFFF" opacity=".85"/></g>`}});
  const [gx,gy]=GUG;d+=`<path class="glint" d="M${gx} ${f1(gy-6)}L${f1(gx+.8)} ${f1(gy-.8)} ${f1(gx+6)} ${gy} ${f1(gx+.8)} ${f1(gy+.8)} ${gx} ${f1(gy+6)} ${f1(gx-.8)} ${f1(gy+.8)} ${f1(gx-6)} ${gy} ${f1(gx-.8)} ${f1(gy-.8)}Z" style="fill:var(--lamp-hot)" opacity=".9"/>`;
  set('castDeco',d+lb)}
'''
js = js.replace('@FIN@', j(ad['finestre'])).replace('@LUC@', j(ad['luci'])).replace('@GHI@', j(ad['ghirlande'])).replace('@GUG@', j(ad['guglia']))
tra(' /* v32 · castello: finestre ad arco che si accendono una a una', "  set('castDeco',d+lb)}\n", js, tieni_b=False)
# 5) fiocchi delle proiezioni dentro il disegno nuovo
rep("set('pjNeve',[[430,60,3.2],[470,95,2.6],[505,70,3.6],[545,105,2.8],[585,140,3],[450,140,2.4],[520,150,3]]", "set('pjNeve'," + j(NEVE))
open(P, 'w', encoding='utf-8').write(s); print('ok', len(s))
