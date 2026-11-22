# C13 · Aspetto della pagina di dicembre più chiaro (22/11)

## Parole di Mario (22/11 ~00:45, arrivate alla Controllo 1 dopo l'handoff)
«Se vuoi differenziare bene con magari evidenziando, con colori, con font diversi, spaziature, fai pure, almeno si capisce bene tutto. usa /plugin install frontend-design@claude-plugins-official
su questo nostro sito rifai tutto con frontend da 0 solo migliorie»

## Stato
- Plugin `frontend-design` letto (22/11, raw.githubusercontent.com/anthropics/claude-plugins-official, `skills/frontend-design/SKILL.md`): solo istruzioni di grafica (piano di colori e caratteri prima del codice, niente look «da modello», foto per controllare), nessun programma che gira. Costo 0 €; installarlo vuol dire toccare `.claude/settings.json`. Consiglio: non installarlo, applico io le sue regole.
- DOMANDA 1: Mario 22/11 ~01:10 «a pezzi». DOMANDA 2 senza risposta → consiglio: plugin non installato, le sue regole le applico io. In mano alla Controllo 4.
- DOMANDA 1 della Controllo 3 (foto del pezzo 1): Mario 22/11 10:02 «va bene» = scelta 1: pubblica (v19) e stesso stile sugli altri pezzi.

## Piano proposto (se Mario sceglie «a pezzi»)
1. Piano grafico corto (4–6 colori, 1–2 caratteri, spazi), con il colore per tipo di alloggio (Hotel, B&B, Case) e i numeri importanti (prezzo, minuti) più grandi.
2. Primo pezzo: scheda Dormire. Foto prima/dopo a Mario, poi gli altri pezzi (Piano, Giorni, Biglietti). Nessuna funzione tolta; prove a ogni pezzo.

## Piano grafico (Controllo 3, 22/11, regole del plugin applicate a mano)
- Restano i caratteri (Bricolage Grotesque per titoli e numeri, Figtree per il testo) e la notte blu con l'oro: piacciono e sono già distintivi.
- Colori con un compito solo: oro = scelto e consiglio; verde/rosso = differenze col consiglio; un colore per tipo di alloggio: Hotel azzurro, B&B lilla, Case verde acqua (`--ty-hotel`, `--ty-bb`, `--ty-casa`; versioni scure per il tema chiaro; contrasto ≥ 5,4).
- Numeri importanti grandi in riquadri con l'etichetta sopra (Disney, RER, pulizia); spazi più larghi fra le schede.

## Pezzo 1 · scheda Dormire (fatto in locale, 22/11, aspetta l'ok delle foto: DOMANDA 1 della Controllo 3)
- Interruttore dei tipi coi colori; «Ordina per» sopra, a tutta larghezza; legenda spostata prima dell'elenco; linea sopra il passo 2.
- Ogni alloggio: tipo scritto in alto e barra a sinistra col suo colore, numero nel cerchio del colore del tipo, prezzo più grande, sotto «totale ±… €» (o «★ consiglio»), 3 riquadri `.sc-k` (funzione `rerK` per la RER). Camera di Bussy con la barra lilla.
- Prove: web app 41/41 (blocco v18 aggiornato ai riquadri), scritte VERO, `--controlla` VERO, colori VERO. Foto: `archivio/2026-11-22-c13-dormire/`.
- Nota: le schede sono circa un quarto più alte (4 per schermata invece di 5).
- Prossimi pezzi (dopo l'ok): passo 1 della scheda Dormire (notti di domenica) con lo stesso stile, poi Piano, Giorni, Biglietti.
