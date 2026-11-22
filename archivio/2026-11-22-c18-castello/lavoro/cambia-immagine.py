# Uso: python3 -I cambia-immagine.py <cartella con castello-notte.webp e addobbi.json>  → nella pagina rifà immagine, posto e misura del castello e le coordinate degli addobbi
import sys, re, base64, json
D = sys.argv[1]; P = '/home/user/parigi-in-tasca/dicembre/parigi-disney-natale.html'
s = open(P, encoding='utf-8').read()
ad = json.load(open(D + '/addobbi.json')); X0, Y0, WS, HS = ad['img']
b = base64.b64encode(open(D + '/castello-notte.webp', 'rb').read()).decode()
s, n = re.subn(r'<image id="castImg" x="[^"]*" y="[^"]*" width="[^"]*" height="[^"]*" href="data:image/webp;base64,[A-Za-z0-9+/=]+"/>',
               lambda m: f'<image id="castImg" x="{X0}" y="{Y0}" width="{WS}" height="{HS}" href="data:image/webp;base64,{b}"/>', s); assert n == 1
j = lambda v: json.dumps(v, separators=(',', ':'))
s, n = re.subn(r' const FIN=\[.*?\],LUC=\[.*?\],GHI=\[.*?\],GUG=\[.*?\];', lambda m: f" const FIN={j(ad['finestre'])},LUC={j(ad['luci'])},GHI={j(ad['ghirlande'])},GUG={j(ad['guglia'])};", s); assert n == 1
open(P, 'w', encoding='utf-8').write(s); print('ok', len(s))
