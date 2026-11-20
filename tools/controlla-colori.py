#!/usr/bin/env python3
"""Controlla che ogni var(--nome) usata in index.html sia definita da qualche parte (--nome:).
Nato da un errore del 20/11/2026: rinominati i colori, le fermate della mappa erano diventate nere."""
import re, sys, pathlib
s = pathlib.Path(__file__).resolve().parent.parent.joinpath("index.html").read_text(encoding="utf-8")
usate = set(re.findall(r"var\(--([a-zA-Z0-9-]+)", s))
definite = set(re.findall(r"--([a-zA-Z0-9-]+)\s*:", s))
mancano = sorted(usate - definite)
if mancano:
    print("FALSO: colori usati ma non definiti:", ", ".join("--" + m for m in mancano))
    sys.exit(1)
print(f"VERO: {len(usate)} variabili usate, tutte definite")
# Nato da un errore del 20/11/2026: lo stile dei bottoni annullava «hidden» (bottone installa sempre visibile).
if "[hidden]{display:none!important}" not in s:
    print("FALSO: manca la regola [hidden]{display:none!important}")
    sys.exit(1)
print("VERO: gli elementi nascosti restano nascosti")
