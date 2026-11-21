# C8 · Sezione «Mercatini» fatta bene, con il suo bottone in alto (21/11)

## Parole di Mario
~19:45 (alla #13): «Scusa, la sezione più importante a mercatini con il percorso, dove andare, dove non andare, e il pulsante mercatini sopra, che era molto importante, non, lei l'ha fatto in modo superficiale.»

## Cosa c'era
- Nessuna sezione «Mercatini»: solo il «mega consiglio» dentro Giorno per giorno → domenica (`#mega`), e nella barra in alto nessun bottone «Mercatini» (verifica: `git log -S 'href="#mercatini"'` vuoto).

## Scelta (#13, senza aspettare: Mario ha già detto cosa vuole)
- Bottone «🎄 Mercatini» PRIMO nella barra in alto, evidenziato; anche in «In breve».
- Sezione `#mercatini` subito dopo «In breve»: il giro in 7 tappe (3 da non perdere, gli altri di passaggio), ogni tappa si apre col tocco (perché, cosa mangiare e comprare, orari della domenica, attenzione, Maps, fonte); «Da saltare» con il perché; consigli pratici (prezzi, folla, borseggiatori, freddo, metro chiuse il 13).
- Fatti solo da `research_notes/…/mercatini_natale.md` (fonti ufficiali dove ci sono, il resto segnato «non ufficiale»). Gli orari minuto per minuto restano in Giorno per giorno (seguono l'alloggio).
- Dopo, se serve: mappa disegnata del giro con le tappe numerate (come le mappe degli alloggi).
- 21/11 ~19:45 (dopo l'handoff della #13, passato alla #14): «Nel senso, non dove non andare, però c'è un aiuto per i mercatini migliori, che strada prendere, che cosa guardare. E poi nella pagina la sezione mercatini di Natale, tipo un pulsante sopra, c'è per andare direttamente tutti i pulsanti nella schermata in alto, per andare direttamente nelle cose interessate, tipo scelta hotel, confronto, mercatini, preparazioni, non lo so, sto inventando, però una cosa così.» → lettura: meno «dove non andare», più aiuto sui mercatini migliori (strada da prendere, cosa guardare); in cima alla pagina, già nella prima schermata, una fila di bottoni grandi per andare dritti alle parti (es. Scelta hotel, Confronto, Mercatini, Preparazione).
- 21/11 ~19:47 (dopo l'handoff, passato alla #14): «Dove non andare ormai che l'hai messo, lascialo. Però si può fare in modo che in base all'hotel che scegliamo mi dai il consiglio sui mercatini.» → «Dove NON andare» resta; il consiglio sui mercatini (giro, partenza, rientro) cambia secondo l'alloggio scelto nella pagina, come già fanno giorni, costi e trasporti.
- 21/11 ~19:50 (dopo l'handoff, passato alla #14): «Cioè mi dà il consiglio sui mercatini, ovviamente anche tutto il resto dovrebbe essere già impostato, no? Tutto il percorso che dobbiamo fare.» → con l'hotel scelto deve seguire tutto il percorso (mercatini compresi), non solo giorni, costi e trasporti.

## Fatto dalla #14 (online ~20:15, PR #8)
- Griglia di pulsanti grandi in cima al posto del bottone e della barra (doppione tolto).
- Riquadro `#mkAl` in cima ai Mercatini: cambia con l'alloggio (`mkAl()` chiamata da `paint` e `applyAl`): spa (n. 12), arrivo entro le 22 (n. 7, `by22`), bus della sera (1, 3, 13), resto.
- Ogni tappa: «🚶 La strada» (dagli stessi tratti del giorno per giorno) e cosa guardare.
- N. 7: domenica veloce come il n. 12 (`spaSun` generalizzata).
- Prossimo, se Mario dice 2: mappa disegnata del giro (come `tools/fai-mappe-dicembre.py`).
- 21/11 19:52 Mario: «Quando scrollo verso il basso i mercatini si nascondono … mi confermi che una volta che scelgo l'hotel mi modifica l'itinerario?» → barra fissa in alto `#topbar` (v8, PR #9); confermato con prova (n. 12, 1, 14: uscite, domenica, costi e trasporti diversi). Foto `archivio/2026-11-21-mercatini-alloggio/5-barra.jpg`, `6-barra-tocco.jpg`, `mario-pulsanti-telefono.jpg`.
