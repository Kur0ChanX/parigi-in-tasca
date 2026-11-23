#!/usr/bin/env python3
"""Ristoranti della guida di dicembre (C28, Mario 23/11/2026).

Legge le schede in research_notes/ristoranti/*.json (una per zona, scritte dalla ricerca)
e le scrive, corte, nella pagina dicembre/parigi-disney-natale.html fra /*RIS*/ e /*/RIS*/.
Poi va rifatta la web app: python3 -I tools/fai-dicembre.py

  python3 -I tools/fai-ristoranti.py             scrive i dati nella pagina
  python3 -I tools/fai-ristoranti.py --controlla esce con 1 se la pagina non ha i dati di adesso
                                                 o se una scheda non va (campi, link, best buy)
"""
import glob
import json
import re
import sys
from pathlib import Path

RADICE = Path(__file__).resolve().parent.parent
PAGINA = RADICE / 'dicembre' / 'parigi-disney-natale.html'
SCHEDE = RADICE / 'research_notes' / 'ristoranti'

# file della ricerca → gruppo del filtro «Dove» nella pagina
GRUPPO = {'zona1': 'sg', 'zona2': 'cc', 'zona3': 'al', 'zona4': 'pa'}
CUCINE = ('carne', 'pesce', 'sushi', 'tradizionale')
FONTI_VOTI = ('Google', 'TheFork', 'TripAdvisor')


def slug(t: str) -> str:
    t = t.lower()
    for a, b in (('àâä', 'a'), ('éèêë', 'e'), ('îï', 'i'), ('ôö', 'o'), ('ùûü', 'u'), ('ç', 'c')):
        for c in a:
            t = t.replace(c, b)
    return re.sub(r'[^a-z0-9]+', '-', t).strip('-')[:40]


def link(u):
    return u if isinstance(u, str) and u.startswith('https://') else ''


def carica():
    errori, tutti = [], []
    for f in sorted(glob.glob(str(SCHEDE / 'zona*.json'))):
        g = GRUPPO.get(Path(f).name.split('-')[0])
        if not g:
            continue
        for x in json.load(open(f, encoding='utf-8')):
            nome = x.get('nome', '?')
            for k in ('nome', 'zona', 'cucina', 'aperto', 'indirizzo', 'lat', 'lon', 'fascia', 'prezzo', 'voti', 'perche', 'maps'):
                if x.get(k) in (None, '', []):
                    errori.append(f'{nome}: manca «{k}»')
            if x.get('cucina') not in CUCINE:
                errori.append(f'{nome}: cucina «{x.get("cucina")}» sconosciuta')
            try:
                la, lo = float(x['lat']), float(x['lon'])
                if not (48.6 < la < 49.1 and 2.0 < lo < 2.95):
                    errori.append(f'{nome}: coordinate fuori da Parigi e Disney ({la}, {lo})')
            except (KeyError, TypeError, ValueError):
                la = lo = 0
                errori.append(f'{nome}: coordinate non valide')
            voti = []
            for fv in FONTI_VOTI:
                v = next((v for v in x.get('voti', []) if str(v.get('fonte', '')).lower() == fv.lower()), None)
                val = (v or {}).get('valore') or "non c'è"
                m = re.match(r'\s*([0-9]+(?:[,.][0-9]+)?)\s*/\s*(5|10)', str(val))
                if m:
                    voti.append([fv, m.group(1).replace('.', ','), int(m.group(2)), (v or {}).get('recensioni') or 0, link((v or {}).get('url'))])
                else:
                    voti.append([fv, '', 0, 0, link((v or {}).get('url'))])
            if x.get('best_buy') and not x.get('perche_best_buy'):
                errori.append(f'{nome}: best buy senza «perche_best_buy»')
            tutti.append({
                'i': slug(nome), 'g': g, 'n': nome, 'z': x['zona'].split(' · ')[0], 'c': x.get('cucina'),
                'bb': 1 if x.get('best_buy') else 0, 'pb': x.get('perche_best_buy') or '',
                'ni': 1 if x.get('nicchia') else 0, 'fa': x.get('fascia', ''), 'pr': x.get('prezzo', ''),
                'v': voti, 'pe': x.get('perche', ''), 'ds': x.get('da_sapere', ''), 'ap': x.get('aperto', ''),
                'fe': x.get('fermata', ''), 'dt': x.get('da_chatelet') or x.get('da_val_europe') or '',
                'a': x.get('indirizzo', ''), 'la': round(la, 6), 'lo': round(lo, 6),
                'si': link(x.get('sito')), 'me': link(x.get('menu')), 'pn': link(x.get('prenota')),
                'mp': link(x.get('maps')), 'fo': [str(u) for u in x.get('fonti', [])][:6],
            })
    visti = {}
    for r in tutti:
        if r['i'] in visti:
            r['i'] += '-' + r['g']
        visti[r['i']] = 1
        if not r['mp']:
            errori.append(f'{r["n"]}: link di Google Maps mancante o non https')
    for g in set(r['g'] for r in tutti):
        for c in CUCINE:
            n = sum(r['bb'] for r in tutti if r['g'] == g and r['c'] == c)
            if n > 1:
                errori.append(f'zona {g}, {c}: {n} best buy (al massimo 1)')
    return tutti, errori


def blocco(tutti) -> str:
    return '/*RIS*/const RIS=' + json.dumps(tutti, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/') + ';/*/RIS*/'


def main() -> int:
    tutti, errori = carica()
    for e in errori:
        print('❌', e)
    s = PAGINA.read_text(encoding='utf-8')
    m = re.search(r'/\*RIS\*/.*?/\*/RIS\*/', s, flags=re.S)
    if not m:
        print('❌ nella pagina manca il segno /*RIS*/ … /*/RIS*/')
        return 1
    nuovo = blocco(tutti)
    if '--controlla' in sys.argv[1:]:
        if m.group(0) != nuovo:
            print('❌ i ristoranti nella pagina non sono quelli di research_notes/ristoranti: python3 -I tools/fai-ristoranti.py')
            return 1
        print(f'✅ {len(tutti)} ristoranti, pagina allineata' if not errori else '')
        return 1 if errori else 0
    PAGINA.write_text(s[:m.start()] + nuovo + s[m.end():], encoding='utf-8')
    print(f'✅ {len(tutti)} ristoranti scritti nella pagina ({len(nuovo) // 1024} KB)')
    return 1 if errori else 0


if __name__ == '__main__':
    sys.exit(main())
