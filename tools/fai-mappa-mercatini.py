#!/usr/bin/env python3
"""Mappa del giro dei mercatini della pagina di dicembre (C15, Mario 22/11: «una mappa di Parigi con i mercatini,
per farmi capire il percorso che dovrei fare, dove sono»).

Un'immagine Plan IGN (la mappa ufficiale francese, Licence Ouverte 2.0) del centro di Parigi, da Notre-Dame agli
Champs-Élysées; sopra, disegnati dalla pagina: i 7 numeri delle tappe, la linea del giro (continua a piedi,
tratteggiata in metro), i mercatini da saltare in grigio e, sul bordo, quelli fuori mappa.
L'immagine va in dicembre/mappe/mercatini.jpg; posizioni (in % dell'immagine) e linea nel blocco MAPPA MERCATINI
di dicembre/parigi-disney-natale.html. Stesso metodo di tools/fai-mappe-dicembre.py (mappe degli alloggi).

Uso:
  python3 -I tools/fai-mappa-mercatini.py              scarica l'immagine se manca o cambia il riquadro, riscrive il blocco
  python3 -I tools/fai-mappa-mercatini.py --controlla  niente rete: esce con 1 se blocco o immagine non sono allineati
Poi: python3 -I tools/fai-dicembre.py (rifà la web app). Mappa cambiata: alza VERSIONE qui sotto.

Regole rispettate (lette il 21/11/2026 per le mappe degli alloggi): Géoplateforme IGN, WMS-Raster al massimo
40 richieste al secondo (https://cartes.gouv.fr/cgu); qui 1 richiesta, con nome del programma.
"""
import io
import json
import math
import pathlib
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

RADICE = pathlib.Path(__file__).resolve().parent.parent
PAGINA = RADICE / 'dicembre' / 'parigi-disney-natale.html'
IMMAGINE = RADICE / 'dicembre' / 'mappe' / 'mercatini.jpg'
REGISTRO = RADICE / 'dicembre' / 'mappe' / 'mercatini.json'
VERSIONE = 1  # 1: 22/11 prima versione
LARGO, ALTO = 1400, 1050        # 4:3; grande perché si possa ingrandire («Ingrandisci») e leggere le vie
SCHERMO = 320                   # larghezza più piccola della mappa sul telefono (360 px meno i margini)
NUMERO = 30                     # distanza minima fra due numeri, in pixel dello schermo (i numeri sono larghi 26)
UA = 'parigi-in-tasca-mappe/1.0 (+https://kur0chanx.github.io/parigi-in-tasca/dicembre/)'
WMS = 'https://data.geopf.fr/wms-r/wms'
INIZIO, FINE = '/* MAPPA MERCATINI: fatta da tools/fai-mappa-mercatini.py, non modificare a mano */', '/* FINE MAPPA MERCATINI */'

# Posizioni (lat, lon), lette il 22/11/2026 (fonti in docs/lavori-in-corso/C15-mappa-mercatini.md).
# IGN = geocodifica ufficiale Géoplateforme; OSM = OpenStreetMap; «indicativa» = punto dentro l'area scritta dalla fonte.
TAPPE = {   # stessi numeri e ordine delle tappe della sezione «Il giro dei mercatini»
    1: (48.852122, 2.347539),   # Square René-Viviani (OSM)
    2: (48.853391, 2.343462),   # Place Saint-Michel (IGN)
    3: (48.854148, 2.333399),   # Place Saint-Germain-des-Prés (IGN)
    4: (48.873486, 2.330296),   # tra Galeries Lafayette, 40 bd Haussmann, e Printemps, 64 bd Haussmann (IGN)
    5: (48.867527, 2.329528),   # Place Vendôme (IGN)
    6: (48.865500, 2.324500),   # Tuileries, parte ovest verso la Concorde (indicativa)
    7: (48.868100, 2.315700),   # Champs-Élysées, giardini fra Concorde e Rond-Point (indicativa)
}
PONT = (48.859575, 2.333044)    # Pont du Carrousel (IGN)
LOUVRE = (48.861010, 2.335857)  # Pyramide du Louvre (IGN)
PR = (48.862409, 2.336643)      # metro Palais Royal–Musée du Louvre (IGN)
CA = (48.872919, 2.332776)      # metro Chaussée d'Antin–La Fayette (IGN)
CONCORDE = (48.867063, 2.321554)  # Place de la Concorde (IGN)
# Linea del giro come nella «🚶 La strada» delle tappe: a piedi (p) o in metro (m)
TRATTI = [
    ('p', [TAPPE[1], TAPPE[2], TAPPE[3], PONT, LOUVRE, PR]),
    ('m', [PR, CA]),
    ('p', [CA, TAPPE[4], TAPPE[5], TAPPE[6], CONCORDE, TAPPE[7]]),
]
POSTI = [('Louvre', LOUVRE)]   # punti di riferimento sulla strada, senza numero
SALTA = [   # «Dove NON andare»: in grigio sulla mappa
    ('Hôtel de Ville', (48.856426, 2.352528)),   # OSM
    ('Les Halles', (48.862442, 2.344138)),       # Forum des Halles (IGN)
]
FUORI = [   # da saltare e fuori dal riquadro: una freccia sul bordo, dalla loro parte
    ('Torre Eiffel', (48.856037, 2.290137)),     # Quai Jacques-Chirac (IGN)
    ('La Défense', (48.891700, 2.238000)),       # solo per la direzione (indicativa)
    ('Montmartre', (48.884753, 2.338484)),       # Place des Abbesses (IGN)
    ("Gare de l'Est", (48.876025, 2.357994)),    # IGN
]


def merc(p):
    lat, lon = p
    return lon * 20037508.34 / 180, math.log(math.tan((90 + lat) * math.pi / 360)) * 6378137


def cornice():
    """Riquadro (metri Mercator) con tappe, strada e mercatini grigi; margini, formato 4:3."""
    pts = [merc(p) for p in list(TAPPE.values()) + [PONT, LOUVRE, PR, CA] + [p for _, p in SALTA]]
    xs, ys = [p[0] for p in pts], [p[1] for p in pts]
    w, h = (max(xs) - min(xs)) * 1.16, (max(ys) - min(ys)) * 1.22
    if w / h < LARGO / ALTO:
        w = h * LARGO / ALTO
    else:
        h = w * ALTO / LARGO
    cx, cy = (max(xs) + min(xs)) / 2, (max(ys) + min(ys)) / 2
    return [round(cx - w / 2), round(cy - h / 2), round(cx + w / 2), round(cy + h / 2)]


def pos(p, c):
    x, y = merc(p)
    return [round((x - c[0]) / (c[2] - c[0]) * 100, 2), round((c[3] - y) / (c[3] - c[1]) * 100, 2)]


def numeri(punti):
    """Dove mettere i numeri: sul punto, oppure spostati (con un trattino fino al punto) se due si toccherebbero
    sul telefono più stretto. Si allontanano a coppie, finché fra tutti c'è almeno NUMERO pixel."""
    k = SCHERMO / 100.0
    b = {n: [x * k, y * k * ALTO / LARGO] for n, (x, y) in punti.items()}   # pixel dello schermo
    for _ in range(200):
        mosso = False
        for a in b:
            for c in b:
                if a >= c:
                    continue
                dx, dy = b[c][0] - b[a][0], b[c][1] - b[a][1]
                d = math.hypot(dx, dy)
                if d < NUMERO:
                    if d < 0.01:
                        dx, dy, d = 1.0, 0.0, 1.0
                    s = (NUMERO - d) / 2 + 0.5
                    b[a][0] -= dx / d * s; b[a][1] -= dy / d * s
                    b[c][0] += dx / d * s; b[c][1] += dy / d * s
                    mosso = True
        if not mosso:
            break
    else:
        raise SystemExit('Numeri della mappa ancora sovrapposti: allargare il riquadro o ridurre NUMERO.')
    return {n: [round(x / k, 2), round(y / k * LARGO / ALTO, 2)] for n, (x, y) in b.items()}


def bordo(p, c):
    """Freccia sul bordo per un posto fuori dal riquadro: lato e posizione lungo il lato (in %)."""
    x, y = pos(p, c)
    cx, cy = 50.0, 50.0
    dx, dy = x - cx, y - cy
    t = min(50.0 / abs(dx) if dx else 1e9, 50.0 / abs(dy) if dy else 1e9)
    bx, by = cx + dx * t, cy + dy * t
    if (abs(by) < 0.01 or abs(by - 100) < 0.01) and 20 <= bx <= 80:   # sopra o sotto, lontano dagli angoli
        return ['t' if by < 50 else 'b', round(bx, 1)]
    # ai lati (anche vicino agli angoli: lì una scritta in alto toccherebbe quella accanto), mai negli angoli
    return ['l' if bx < 50 else 'r', round(min(max(by, 14), 86), 1)]


def calcola():
    c = cornice()
    t = {n: pos(p, c) for n, p in TAPPE.items()}
    dati = {
        'v': VERSIONE, 'w': LARGO, 'h': ALTO,
        't': t, 'b': numeri(t),
        'r': [[k, [pos(p, c) for p in pts]] for k, pts in TRATTI],
        'p': [[n, pos(p, c)] for n, p in POSTI],
        'g': [[n, pos(p, c)] for n, p in SALTA],
        'f': [[n] + bordo(p, c) for n, p in FUORI],
    }
    for n, p in SALTA + POSTI + list(TAPPE.items()):
        x, y = pos(p, c)
        if not (2 < x < 98 and 2 < y < 98):
            raise SystemExit(f'{n} fuori dal riquadro: rivedere la cornice')
    return dati, {'bbox': c, 'v': VERSIONE, 'w': LARGO, 'h': ALTO}


def blocco(d):
    return f'{INIZIO}\nconst MKM={json.dumps(d, ensure_ascii=False, separators=(",", ":"))};\n{FINE}'


def scarica(c):
    from PIL import Image   # solo quando serve la rete
    q = {'SERVICE': 'WMS', 'VERSION': '1.3.0', 'REQUEST': 'GetMap', 'LAYERS': 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
         'STYLES': '', 'CRS': 'EPSG:3857', 'BBOX': ','.join(map(str, c)), 'WIDTH': LARGO, 'HEIGHT': ALTO,
         'FORMAT': 'image/png'}
    req = urllib.request.Request(WMS + '?' + urllib.parse.urlencode(q), headers={'User-Agent': UA})
    for prova in range(3):   # IGN a volte risponde 400 o 5xx a caso (visto il 21/11): riprova dopo una pausa
        try:
            with urllib.request.urlopen(req, timeout=90) as r:
                if not r.headers.get('Content-Type', '').startswith('image/'):
                    raise SystemExit(f'Risposta strana da IGN: {r.headers.get("Content-Type")}')
                im = Image.open(io.BytesIO(r.read())).convert('RGB')
            break
        except urllib.error.HTTPError:
            if prova == 2:
                raise
            time.sleep(3)
    im.save(IMMAGINE, 'JPEG', quality=60, optimize=True, progressive=True)


def main():
    controlla = '--controlla' in sys.argv
    dati, cornice_ = calcola()
    testo = PAGINA.read_text(encoding='utf-8')
    nuovo = blocco(dati)
    trovato = re.search(re.escape(INIZIO) + r'.*?' + re.escape(FINE), testo, re.S)
    if not trovato:
        raise SystemExit('Blocco MAPPA MERCATINI non trovato nella pagina: mettere le righe INIZIO e FINE dove servono.')
    vecchio = json.loads(REGISTRO.read_text(encoding='utf-8')) if REGISTRO.exists() else {}
    if controlla:
        errori = []
        if trovato.group(0) != nuovo:
            errori.append('blocco MAPPA MERCATINI della pagina diverso: rilanciare lo script')
        if not IMMAGINE.exists():
            errori.append(f'manca {IMMAGINE.name}')
        elif vecchio != cornice_:
            errori.append(f'{IMMAGINE.name} fatta con un riquadro vecchio')
        print('\n'.join(errori) or 'Mappa dei mercatini allineata (immagine e blocco).')
        sys.exit(1 if errori else 0)
    if not IMMAGINE.exists() or vecchio != cornice_:
        scarica(cornice_['bbox'])
        print('Immagine scaricata da IGN.')
    REGISTRO.write_text(json.dumps(cornice_, indent=1) + '\n', encoding='utf-8')
    PAGINA.write_text(testo[:trovato.start()] + nuovo + testo[trovato.end():], encoding='utf-8')
    print(f'Mappa dei mercatini: {IMMAGINE.stat().st_size // 1024} KB, blocco scritto.')


if __name__ == '__main__':
    main()
