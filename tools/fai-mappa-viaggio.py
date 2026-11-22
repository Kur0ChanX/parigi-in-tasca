#!/usr/bin/env python3
"""Dati della «Mappa del viaggio» della pagina di dicembre (C15).

Mario 22/11: «una mappa di Parigi con i mercatini, per farmi capire il percorso … dove sono» e poi «zoomabile …
che vedo dove è Disney, dove è l'aeroporto … Aeroporto, Parigi e Disneyland. E con quel range lì di zoom».
La mappa si ingrandisce col dito (Leaflet) sui pezzi Plan IGN, la mappa ufficiale francese; qui solo i DATI:
riquadro Orly–Parigi–Disney, tappe e linea del giro dei mercatini, mercatini da saltare, posti utili e posizioni
degli alloggi. Gli alloggi vengono dallo script delle mappe delle schede (tools/fai-mappe-dicembre.py): una
posizione scritta una volta sola.

Uso:
  python3 -I tools/fai-mappa-viaggio.py              riscrive il blocco MAPPA VIAGGIO in dicembre/parigi-disney-natale.html
  python3 -I tools/fai-mappa-viaggio.py --controlla  esce con 1 se il blocco della pagina non è allineato
Poi: python3 -I tools/fai-dicembre.py (rifà la web app).
"""
import json
import pathlib
import re
import runpy
import sys

RADICE = pathlib.Path(__file__).resolve().parent.parent
PAGINA = RADICE / 'dicembre' / 'parigi-disney-natale.html'
INIZIO, FINE = '/* MAPPA VIAGGIO: fatta da tools/fai-mappa-viaggio.py, non modificare a mano */', '/* FINE MAPPA VIAGGIO */'
M = runpy.run_path(str(RADICE / 'tools' / 'fai-mappe-dicembre.py'))   # ALLOGGI, PARIGI, stazioni, Orly

# Riquadro: Orly a sud, Parigi a ovest, Disney e i suoi alloggi a est, con un po' di margine. Oltre non si va.
RIQUADRO = [[48.700, 2.245], [48.915, 2.845]]

# Posizioni (lat, lon), lette il 22/11/2026 (fonti in docs/lavori-in-corso/C15-mappa-mercatini.md).
# IGN = geocodifica ufficiale Géoplateforme; OSM = OpenStreetMap; «indicativa» = punto dentro l'area scritta dalla fonte.
TAPPE = [   # stessi numeri e ordine delle tappe della sezione «Il giro dei mercatini»
    (48.852122, 2.347539),   # 1 Square René-Viviani (OSM)
    (48.853391, 2.343462),   # 2 Place Saint-Michel (IGN)
    (48.854148, 2.333399),   # 3 Place Saint-Germain-des-Prés (IGN)
    (48.873486, 2.330296),   # 4 fra Galeries Lafayette, 40 bd Haussmann, e Printemps, 64 bd Haussmann (IGN)
    (48.867527, 2.329528),   # 5 Place Vendôme (IGN)
    (48.865500, 2.324500),   # 6 Tuileries, parte ovest verso la Concorde (indicativa)
    (48.868100, 2.315700),   # 7 Champs-Élysées, giardini fra Concorde e Rond-Point (indicativa)
]
PONT = (48.859575, 2.333044)      # Pont du Carrousel (IGN)
LOUVRE = (48.861010, 2.335857)    # Pyramide du Louvre (IGN)
PR = (48.862409, 2.336643)        # metro Palais Royal–Musée du Louvre (IGN)
CA = (48.872919, 2.332776)        # metro Chaussée d'Antin–La Fayette (IGN)
CONCORDE = (48.867063, 2.321554)  # Place de la Concorde (IGN)
# Linea del giro come nella «🚶 La strada» delle tappe: a piedi (p) o in metro (m)
TRATTI = [
    ('p', [TAPPE[0], TAPPE[1], TAPPE[2], PONT, LOUVRE, PR]),
    ('m', [PR, CA]),
    ('p', [CA, TAPPE[3], TAPPE[4], TAPPE[5], CONCORDE, TAPPE[6]]),
]
SALTA = [   # «Dove NON andare» (dentro il riquadro): in grigio
    ('Hôtel de Ville', (48.856426, 2.352528)),   # OSM
    ('Les Halles', (48.862442, 2.344138)),       # Forum des Halles (IGN)
    ('Torre Eiffel', (48.856037, 2.290137)),     # Quai Jacques-Chirac (IGN)
    ('Montmartre', (48.884753, 2.338484)),       # Place des Abbesses (IGN)
    ("Gare de l'Est", (48.876025, 2.357994)),    # IGN
]
POSTI = [   # tipo, nome, posizione
    ('disney', 'Parchi Disney', (48.869650, 2.776960)),   # «Disneyland Paris», Chessy (IGN)
    ('aereo', 'Aeroporto di Orly', (48.728917, 2.366476)),   # IGN
    ('treno', 'Chessy · Disney', M['CH']),
    ('treno', "Val d'Europe", M['VDE']),
    ('treno', 'Gare de Lyon', M['GL']),
    # Châtelet e Auber no: coprivano la tappa 4 e Les Halles (foto 22/11); l'hotel di Parigi scelto ha il suo segno
    ('posto', 'Louvre', LOUVRE),
]


def ll(p):
    return [round(p[0], 6), round(p[1], 6)]


def dati():
    d = {
        'b': RIQUADRO,
        't': [ll(p) for p in TAPPE],
        'r': [[k, [ll(p) for p in pts]] for k, pts in TRATTI],
        'g': [[n, ll(p)] for n, p in SALTA],
        'p': [[k, n, ll(p)] for k, n, p in POSTI],
        'a': {str(n): ll(p) for n, p in sorted(M['ALLOGGI'].items())},
        'pa': {k: ll(p) for k, p in sorted(M['PARIGI'].items())},
    }
    (s, o), (n_, e) = RIQUADRO
    fuori = [x for x in d['t'] + [p for _, p in d['g']] + [p for _, _, p in d['p']] + list(d['a'].values()) + list(d['pa'].values())
             if not (s < x[0] < n_ and o < x[1] < e)]
    if fuori:
        raise SystemExit(f'Punti fuori dal riquadro: {fuori}')
    return d


def blocco(d):
    return f'{INIZIO}\nconst TM={json.dumps(d, ensure_ascii=False, separators=(",", ":"))};\n{FINE}'


def main():
    testo = PAGINA.read_text(encoding='utf-8')
    nuovo = blocco(dati())
    trovato = re.search(re.escape(INIZIO) + r'.*?' + re.escape(FINE), testo, re.S)
    if not trovato:
        raise SystemExit('Blocco MAPPA VIAGGIO non trovato nella pagina: mettere le righe INIZIO e FINE dove servono.')
    if '--controlla' in sys.argv:
        ok = trovato.group(0) == nuovo
        print('Mappa del viaggio: blocco allineato.' if ok else 'Blocco MAPPA VIAGGIO diverso: rilanciare lo script.')
        sys.exit(0 if ok else 1)
    PAGINA.write_text(testo[:trovato.start()] + nuovo + testo[trovato.end():], encoding='utf-8')
    print('Mappa del viaggio: blocco scritto.')


if __name__ == '__main__':
    main()
