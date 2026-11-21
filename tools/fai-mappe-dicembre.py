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
(https://cartes.gouv.fr/cgu); qui 15 richieste in tutto, una alla volta, con nome del programma.
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
import urllib.request

RADICE = pathlib.Path(__file__).resolve().parent.parent
PAGINA = RADICE / 'dicembre' / 'parigi-disney-natale.html'
CARTELLA = RADICE / 'dicembre' / 'mappe'
REGISTRO = CARTELLA / 'mappe.json'
VERSIONE = 1
LARGO, ALTO = 800, 450          # pixel dell'immagine (si vede larga quanto la scheda, ~330–520 px)
SCHERMO = 330                   # larghezza più piccola sul telefono, per non sovrapporre le scritte
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
}
VDE = (48.855639, 2.773812)      # Gare de Val d'Europe (IGN)
CH = (48.869921, 2.782744)       # Gare de Marne-la-Vallée–Chessy, davanti ai parchi (IGN)
ND = (48.852122, 2.347539)       # Square René-Viviani, mercatino di Notre-Dame (OSM)
ORLY = (48.730060, 2.367831)     # Aeroporto di Orly (OSM)
# Stazione che usa ogni alloggio (la stessa dei tempi nella pagina, DV): VDE o CH
STAZIONE = {1: CH, 2: CH, 3: CH, 7: CH, 11: CH, 14: CH}
NOMI = {VDE: "Val d'Europe", CH: 'Chessy · Disney'}


def merc(p):
    lat, lon = p[0], p[1]
    return lon * 20037508.34 / 180, math.log(math.tan((90 + lat) * math.pi / 360)) * 6378137


def km(a, b):
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * 6371.0 * math.asin(math.sqrt(h))


def km_testo(d):
    return f'{d:.1f}'.replace('.', ',') + ' km' if d < 10 else f'{round(d)} km'


def cornice(n):
    """Riquadro (in metri Mercator) con alloggio, sua stazione e Chessy, margini e formato 16:9."""
    pts = [merc(ALLOGGI[n]), merc(STAZIONE.get(n, VDE)), merc(CH)]
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


def scatola(x, y, lato, su, testo):
    """Rettangolo (in %) occupato dall'etichetta di una stazione, sul telefono più stretto."""
    w = (34 + 7.2 * len(testo)) / SCHERMO * 100
    h = 24 / (SCHERMO * ALTO / LARGO) * 100
    x0 = x + 2 if lato == 'r' else x - 2 - w
    y0 = y - h / 2 + {'': 0, 'u': -h * 0.9, 'd': h * 0.9}[su]
    return (x0, y0, x0 + w, y0 + h)


def tocca(a, b):
    return not (a[2] <= b[0] or b[2] <= a[0] or a[3] <= b[1] or b[3] <= a[1])


def etichette(n, c):
    """Segni delle stazioni nel riquadro, con il lato dell'etichetta che non copre l'alloggio."""
    hx, hy = pos(ALLOGGI[n], c)
    pr, pv = 18 / SCHERMO * 100, 18 / (SCHERMO * ALTO / LARGO) * 100
    occupato = [(hx - pr, hy - pv, hx + pr, hy + pv)]
    segni = []
    for st in (VDE, CH):
        x, y = pos(st, c)
        if not (3 <= x <= 97 and 5 <= y <= 95):
            continue
        testo = NOMI[st]
        scelta = None
        for lato, su in (('r', ''), ('l', ''), ('r', 'u'), ('l', 'u'), ('r', 'd'), ('l', 'd')):
            s = scatola(x, y, lato, su, testo)
            dentro = s[0] >= 1 and s[2] <= 99 and s[1] >= 1 and s[3] <= 92   # in basso a destra c'è la fonte
            if dentro and not any(tocca(s, o) for o in occupato):
                scelta = (lato, su, s)
                break
        if scelta is None:
            lato = 'r' if x < 50 else 'l'
            scelta = (lato, '', scatola(x, y, lato, '', testo))
        occupato.append(scelta[2])
        segni.append([x, y, 'VDE' if st == VDE else 'CH', scelta[0], scelta[1]])
    return [hx, hy], segni


def scarica(c, dove):
    from PIL import Image   # solo quando serve la rete
    q = {'SERVICE': 'WMS', 'VERSION': '1.3.0', 'REQUEST': 'GetMap', 'LAYERS': 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
         'STYLES': '', 'CRS': 'EPSG:3857', 'BBOX': ','.join(map(str, c)), 'WIDTH': LARGO, 'HEIGHT': ALTO,
         'FORMAT': 'image/png'}
    req = urllib.request.Request(WMS + '?' + urllib.parse.urlencode(q), headers={'User-Agent': UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        if not r.headers.get('Content-Type', '').startswith('image/'):
            raise SystemExit(f'Risposta strana da IGN per {dove.name}: {r.headers.get("Content-Type")}')
        im = Image.open(io.BytesIO(r.read())).convert('RGB')
    im.save(dove, 'JPEG', quality=68, optimize=True, progressive=True)


def blocco(dati):
    righe = []
    for n in sorted(dati):
        d = dati[n]
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
    return dati, cornici


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
        for n in ALLOGGI:
            f = CARTELLA / f'al-{n}.jpg'
            if not f.exists():
                errori.append(f'manca {f.name}')
            elif vecchio.get(str(n)) != cornici[str(n)]:
                errori.append(f'{f.name} fatta con un riquadro vecchio')
        print('\n'.join(errori) or f'Mappe allineate: {len(ALLOGGI)} immagini e blocco MAPPE.')
        sys.exit(1 if errori else 0)
    CARTELLA.mkdir(exist_ok=True)
    scaricate = 0
    for n in sorted(ALLOGGI):
        f = CARTELLA / f'al-{n}.jpg'
        if f.exists() and vecchio.get(str(n)) == cornici[str(n)]:
            continue   # già fatta con lo stesso riquadro: niente richiesta (le regole chiedono di non ripetere)
        scarica(cornici[str(n)]['bbox'], f)
        scaricate += 1
        time.sleep(0.5)
    REGISTRO.write_text(json.dumps(cornici, indent=1) + '\n', encoding='utf-8')
    PAGINA.write_text(testo[:trovato.start()] + nuovo + testo[trovato.end():], encoding='utf-8')
    pesi = [(CARTELLA / f'al-{n}.jpg').stat().st_size for n in ALLOGGI]
    print(f'Mappe: {scaricate} scaricate, {len(ALLOGGI) - scaricate} già pronte; '
          f'peso da {min(pesi) // 1024} a {max(pesi) // 1024} KB, totale {sum(pesi) // 1024} KB.')


if __name__ == '__main__':
    main()
