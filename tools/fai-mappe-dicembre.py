#!/usr/bin/env python3
"""Mappe degli alloggi della pagina di dicembre (riquadro «Dov'è» in ogni scheda).

Per ogni alloggio: una mappa piccola (Plan IGN, la mappa ufficiale francese, Licence Ouverte 2.0)
con l'alloggio, la sua stazione e i parchi Disney, e le distanze in linea d'aria da mercatini,
Disney e aeroporto. Le immagini vanno in dicembre/mappe/al-N.jpg; i segni sopra la mappa
(posizioni in %) e le distanze li scrive nel blocco MAPPE di dicembre/parigi-disney-natale.html.

Uso:
  python3 -I tools/fai-mappe-dicembre.py              scarica solo le mappe che mancano o cambiano, riscrive il blocco
  python3 -I tools/fai-mappe-dicembre.py --controlla  niente rete: esce con 1 se blocco o immagini non sono allineati
Poi: python3 -I tools/fai-dicembre.py (rifà la web app). Mappa cambiata: alza VERSIONE qui sotto.

Regole rispettate (lette il 21/11/2026): Géoplateforme IGN, WMS-Raster al massimo 40 richieste al secondo
(https://cartes.gouv.fr/cgu); qui 23 richieste in tutto, una alla volta, con nome del programma.
Tessere di tile.openstreetmap.org NON usate: la loro regola vieta di scaricarle per l'uso senza rete.
"""
import io
import json
import math
import pathlib
import re
import sys
import time
import urllib.parse
import urllib.error
import urllib.request

RADICE = pathlib.Path(__file__).resolve().parent.parent
PAGINA = RADICE / 'dicembre' / 'parigi-disney-natale.html'
CARTELLA = RADICE / 'dicembre' / 'mappe'
REGISTRO = CARTELLA / 'mappe.json'
VERSIONE = 1
LARGO, ALTO = 800, 534          # pixel dell'immagine, formato 3:2 (si vede larga quanto la scheda, ~270–520 px)
SCHERMO = 270                   # larghezza più piccola della mappa sul telefono, per non sovrapporre le scritte
SCHERMO_PARIGI = 215            # hotel di Parigi: mappa dentro una tendina della scelta, più stretta (≈215 px a 360)
UA = 'parigi-in-tasca-mappe/1.0 (+https://kur0chanx.github.io/parigi-in-tasca/dicembre/)'
WMS = 'https://data.geopf.fr/wms-r/wms'
INIZIO, FINE = '/* MAPPE: fatto da tools/fai-mappe-dicembre.py, non modificare a mano */', '/* FINE MAPPE */'

# Posizioni (lat, lon), lette il 21/11/2026.
# «IGN» = geocodifica ufficiale IGN (Base Adresse Nationale) dell'indirizzo scritto nella pagina (ACC[n].a);
# «OSM» = OpenStreetMap (Nominatim), dove l'indirizzo non ha il numero civico.
ALLOGGI = {
    1: (48.882657, 2.767534, 'IGN'), 2: (48.836754, 2.797596, 'OSM'), 3: (48.866619, 2.760818, 'IGN'),
    4: (48.857028, 2.761728, 'IGN'), 5: (48.854194, 2.768012, 'IGN'), 6: (48.859523, 2.769329, 'IGN'),
    7: (48.879138, 2.751376, 'IGN'), 8: (48.855342, 2.769222, 'IGN'), 9: (48.854412, 2.770828, 'OSM'),
    10: (48.852326, 2.765107, 'IGN'), 11: (48.855533, 2.808091, 'IGN'), 12: (48.857193, 2.773043, 'IGN'),
    13: (48.843224, 2.792680, 'IGN'), 14: (48.870489, 2.787769, 'IGN'), 15: (48.855587, 2.775849, 'IGN'),
    22: (48.854226, 2.792897, 'IGN'),  # All Suites, 16 rue de Magellan, Serris (IGN, letto il 21/11/2026)
}
VDE = (48.855639, 2.773812)      # Gare de Val d'Europe (IGN)
CH = (48.869921, 2.782744)       # Gare de Marne-la-Vallée–Chessy, davanti ai parchi (IGN)
ND = (48.852122, 2.347539)       # Square René-Viviani, mercatino di Notre-Dame (OSM)
ORLY = (48.730060, 2.367831)     # Aeroporto di Orly (OSM)
# Stazione che usa ogni alloggio (la stessa dei tempi nella pagina, DV): VDE o CH
STAZIONE = {1: CH, 2: CH, 3: CH, 7: CH, 11: CH, 14: CH, 22: CH}
NOMI = {VDE: "Val d'Europe", CH: 'Chessy · Disney'}
# Airbnb (n. 16–21 e 23): l'indirizzo esatto arriva solo dopo la prenotazione. Niente mappa (il segno sarebbe inventato):
# solo le distanze, contate dalla stazione scritta nell'annuncio («posizione indicativa», z:1 nella pagina).
ZONA = {16: VDE, 17: VDE, 18: VDE, 19: VDE, 20: VDE, 21: VDE, 23: VDE}
# Hotel di Parigi per la notte 13→14 (C11 pezzo 7, PAR nella pagina): indirizzo dal sito ufficiale dell'hotel
# (Locomo, Sleeping Belle, Accor per ibis Styles e Novotel, Parisianer, Saint-Pétersbourg, Astotel per Astra,
# Relais des Halles; letti il 21/11/2026), posizione = geocodifica ufficiale IGN di quell'indirizzo.
GL = (48.844162, 2.374677)       # Gare de Lyon (IGN, punti d'interesse)
AU = (48.872395, 2.329855)       # Auber, RER A (IGN)
CL = (48.861661, 2.346743)       # Châtelet–Les Halles, RER A (IGN)
PARIGI = {
    'lo': (48.847092, 2.372050, 'IGN', GL), 'sb': (48.846654, 2.369834, 'IGN', GL), 'is': (48.845916, 2.375592, 'IGN', GL),
    'nv': (48.845372, 2.375268, 'IGN', GL), 'pa': (48.845650, 2.375372, 'IGN', GL), 'sp': (48.872154, 2.328131, 'IGN', AU),
    'as': (48.871806, 2.328095, 'IGN', AU), 'rh': (48.863192, 2.348896, 'IGN', CL),
}
NOMI.update({GL: 'Gare de Lyon', AU: 'Auber', CL: 'Châtelet'})   # nomi corti: stanno nella mappa stretta
SIGLA = {VDE: 'VDE', CH: 'CH', GL: 'GL', AU: 'AU', CL: 'CL'}


def merc(p):
    lat, lon = p[0], p[1]
    return lon * 20037508.34 / 180, math.log(math.tan((90 + lat) * math.pi / 360)) * 6378137


def km(a, b):
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * 6371.0 * math.asin(math.sqrt(h))


def km_testo(d):
    return f'{d:.1f}'.replace('.', ',') + ' km' if d < 10 else f'{round(d)} km'


def punti(n):
    """Alloggio e stazioni da mettere sulla mappa: vicino a Disney anche Chessy; a Parigi solo la sua stazione."""
    if n in PARIGI:
        return PARIGI[n], [PARIGI[n][3]]
    return ALLOGGI[n], [VDE, CH]


def cornice(n):
    """Riquadro (in metri Mercator) con alloggio e stazioni, margini e formato 3:2."""
    al, st = punti(n)
    pts = [merc(al)] + ([merc(st[0])] if n in PARIGI else [merc(STAZIONE.get(n, VDE)), merc(CH)])
    xs, ys = [p[0] for p in pts], [p[1] for p in pts]
    w, h = max(xs) - min(xs), max(ys) - min(ys)
    w, h = max(w * 1.5, 1800.0), max(h * 1.5, 1800.0 * ALTO / LARGO)   # margini e larghezza minima
    if w / h < LARGO / ALTO:
        w = h * LARGO / ALTO
    else:
        h = w * ALTO / LARGO
    cx, cy = (max(xs) + min(xs)) / 2, (max(ys) + min(ys)) / 2
    return [round(cx - w / 2), round(cy - h / 2), round(cx + w / 2), round(cy + h / 2)]


def pos(p, c):
    x, y = merc(p)
    return [round((x - c[0]) / (c[2] - c[0]) * 100, 1), round((c[3] - y) / (c[3] - c[1]) * 100, 1)]


def scatola(x, y, lato, su, testo, schermo=SCHERMO):
    """Rettangolo (in %) occupato dall'etichetta di una stazione, sulla mappa più stretta (telefono)."""
    w = (30 + 6.3 * len(testo)) / schermo * 100
    h = 24 / (schermo * ALTO / LARGO) * 100
    x0 = x + 2 if lato == 'r' else x - 2 - w
    y0 = y - h / 2 + {'': 0, 'u': -h * 0.9, 'd': h * 0.9}[su]
    return (x0, y0, x0 + w, y0 + h)


def sopra(a, b):
    """Area in comune fra due rettangoli."""
    return max(0, min(a[2], b[2]) - max(a[0], b[0])) * max(0, min(a[3], b[3]) - max(a[1], b[1]))


def fuori(s):
    """Area dell'etichetta che esce dalla mappa."""
    return s[2] - s[0] - max(0, min(s[2], 100) - max(s[0], 0)) + (s[3] - s[1] - max(0, min(s[3], 100) - max(s[1], 0)))


def etichette(n, c):
    """Segni delle stazioni nel riquadro; per ogni etichetta il lato che copre meno l'alloggio e le altre scritte."""
    al, stazioni = punti(n)
    hx, hy = pos(al, c)
    pr, pv = 18 / SCHERMO * 100, 18 / (SCHERMO * ALTO / LARGO) * 100
    occupato = [(hx - pr, hy - pv, hx + pr, hy + pv), (82, 91, 100, 100)]   # alloggio e scritta «© IGN»
    segni = []
    for st in stazioni:
        x, y = pos(st, c)
        if not (3 <= x <= 97 and 5 <= y <= 95):
            continue
        prove = []
        for i, (lato, su) in enumerate((('r', ''), ('l', ''), ('r', 'u'), ('l', 'u'), ('r', 'd'), ('l', 'd'))):
            s = scatola(x, y, lato, su, NOMI[st], SCHERMO_PARIGI if n in PARIGI else SCHERMO)
            prove.append((sum(sopra(s, o) for o in occupato) + 40 * fuori(s), i, lato, su, s))
        _, _, lato, su, s = min(prove)
        occupato.append(s)
        segni.append([x, y, SIGLA[st], lato, su])
    return [hx, hy], segni


def scarica(c, dove):
    from PIL import Image   # solo quando serve la rete
    q = {'SERVICE': 'WMS', 'VERSION': '1.3.0', 'REQUEST': 'GetMap', 'LAYERS': 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
         'STYLES': '', 'CRS': 'EPSG:3857', 'BBOX': ','.join(map(str, c)), 'WIDTH': LARGO, 'HEIGHT': ALTO,
         'FORMAT': 'image/png'}
    req = urllib.request.Request(WMS + '?' + urllib.parse.urlencode(q), headers={'User-Agent': UA})
    for prova in range(3):   # IGN a volte risponde 400 o 5xx a caso (visto il 21/11): riprova dopo una pausa
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                if not r.headers.get('Content-Type', '').startswith('image/'):
                    raise SystemExit(f'Risposta strana da IGN per {dove.name}: {r.headers.get("Content-Type")}')
                im = Image.open(io.BytesIO(r.read())).convert('RGB')
            break
        except urllib.error.HTTPError:
            if prova == 2:
                raise
            time.sleep(3)
    im.save(dove, 'JPEG', quality=68, optimize=True, progressive=True)


def blocco(dati):
    righe = []
    for n in sorted(dati, key=lambda k: (isinstance(k, str), k if isinstance(k, int) else 0)):
        d = dati[n]
        if d.get('z'):
            righe.append(f' {n}:{{z:1,km:{json.dumps(d["km"], ensure_ascii=False)}}}')
            continue
        righe.append(f' {n}:{{h:{json.dumps(d["h"])},m:{json.dumps(d["m"], ensure_ascii=False)},km:{json.dumps(d["km"], ensure_ascii=False)}}}')
    return f'{INIZIO}\nconst MPV={VERSIONE},MP={{\n' + ',\n'.join(righe) + f'\n}};\n{FINE}'


def calcola():
    dati, cornici = {}, {}
    for n in ALLOGGI:
        c = cornice(n)
        h, m = etichette(n, c)
        p = ALLOGGI[n]
        dati[n] = {'h': h, 'm': m, 'km': [km_testo(km(p, ND)), km_testo(km(p, CH)), km_testo(km(p, ORLY))]}
        cornici[str(n)] = {'bbox': c, 'v': VERSIONE, 'fonte': p[2]}
    for n, p in PARIGI.items():
        c = cornice(n)
        h, m = etichette(n, c)
        dati[n] = {'h': h, 'm': m, 'km': [km_testo(km(p, ND)), km_testo(km(p, CH)), km_testo(km(p, ORLY))]}
        cornici['par-' + n] = {'bbox': c, 'v': VERSIONE, 'fonte': p[2]}
    for n, p in ZONA.items():
        dati[n] = {'z': 1, 'km': [km_testo(km(p, ND)), km_testo(km(p, CH)), km_testo(km(p, ORLY))]}
    return dati, cornici


def immagine(k):
    return CARTELLA / (f'par-{k}.jpg' if isinstance(k, str) else f'al-{k}.jpg')


def chiave(k):
    return 'par-' + k if isinstance(k, str) else str(k)


TUTTI = list(ALLOGGI) + list(PARIGI)


def main():
    controlla = '--controlla' in sys.argv
    dati, cornici = calcola()
    testo = PAGINA.read_text(encoding='utf-8')
    nuovo = blocco(dati)
    trovato = re.search(re.escape(INIZIO) + r'.*?' + re.escape(FINE), testo, re.S)
    if not trovato:
        raise SystemExit('Blocco MAPPE non trovato nella pagina: mettere le righe INIZIO e FINE dove servono.')
    vecchio = json.loads(REGISTRO.read_text(encoding='utf-8')) if REGISTRO.exists() else {}
    if controlla:
        errori = []
        if trovato.group(0) != nuovo:
            errori.append('blocco MAPPE della pagina diverso: rilanciare lo script')
        for n in TUTTI:
            f = immagine(n)
            if not f.exists():
                errori.append(f'manca {f.name}')
            elif vecchio.get(chiave(n)) != cornici[chiave(n)]:
                errori.append(f'{f.name} fatta con un riquadro vecchio')
        print('\n'.join(errori) or f'Mappe allineate: {len(TUTTI)} immagini, {len(ZONA)} alloggi solo con la zona e blocco MAPPE.')
        sys.exit(1 if errori else 0)
    CARTELLA.mkdir(exist_ok=True)
    scaricate = 0
    for n in TUTTI:
        f = immagine(n)
        if f.exists() and vecchio.get(chiave(n)) == cornici[chiave(n)]:
            continue   # già fatta con lo stesso riquadro: niente richiesta (le regole chiedono di non ripetere)
        scarica(cornici[chiave(n)]['bbox'], f)
        scaricate += 1
        time.sleep(0.5)
    REGISTRO.write_text(json.dumps(cornici, indent=1) + '\n', encoding='utf-8')
    PAGINA.write_text(testo[:trovato.start()] + nuovo + testo[trovato.end():], encoding='utf-8')
    pesi = [immagine(n).stat().st_size for n in TUTTI]
    print(f'Mappe: {scaricate} scaricate, {len(TUTTI) - scaricate} già pronte; '
          f'peso da {min(pesi) // 1024} a {max(pesi) // 1024} KB, totale {sum(pesi) // 1024} KB.')


if __name__ == '__main__':
    main()
