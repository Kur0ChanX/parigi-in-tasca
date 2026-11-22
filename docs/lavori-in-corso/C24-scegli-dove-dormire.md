# C24 · Tasto «Scegli dove dormire» che cambia l'itinerario (Controllo 17, 22/11)

## Parole di Mario (22/11 ~19:1x, alla Controllo 16 dopo l'handoff)
> poi metti piú chiaro ed in evidenza della scelta hotel che cambia tutto l'itinerario se non seleziono gli hotel che voglio nel app vedo solo gli hotel selezionati
> quindi devo poter scremare quello da vedere per confrontare come abbiamo fatto con la rosa poi per sceglierli devo avere un tasto Scegli dove dormire e mi cambia l'itinerario in base a l'hotel scelto info le strade da fare i consigli orari ecc ecc ecc con cura mi raccomando che c'è un viaggio di mezzo
> publica

## Cosa vuol dire
- Tre passi chiari: **rosa** (scremare) → **confronto** (solo gli alloggi della rosa) → **«Scegli dove dormire»** (uno solo) → Giorni, Piano, Biglietti e Mercatini seguono l'alloggio scelto.
- «vedo solo gli hotel selezionati»: con la rosa piena la pagina mostra solo quelli; un tasto riporta a tutti i 35.

## C'è già (si allarga questo, niente doppioni)
- Passo 2 di «Scegli» con l'interruttore «La vostra rosa · 2 / Tutti · 35» (parte su «Tutti»), «Scegli questo» dentro ogni scheda aperta, riquadro «La scelta cambia tutta la pagina», «Manda questa scelta».
- Profili di viaggio `ACC` (strade, orari della domenica sera e del giovedì) per ogni alloggio; tasto «⭐ Rosa alloggi» nella schermata principale (C21).

## Occhio critico
| Voce | Esito |
|---|---|
| Come lo vede Mario | Dalla schermata principale: 1 tocco → rosa a confronto → 1 tocco «Dormiamo qui» → Giorni aggiornati, con l'alloggio scritto in cima a ogni giorno. |
| Doppioni | Due tocchi sullo stesso alloggio: stessa scelta, niente di nuovo. |
| Annulla | Dopo la scelta un avviso «Scelto n. X · Annulla» torna alla scelta di prima. |
| Senza rete | Tutto sul telefono (localStorage): funziona anche senza rete. |
| Due persone | Ogni telefono ha la sua scelta: se diverse, due itinerari diversi. «Manda questa scelta» c'è già; l'alloggio scritto in cima ai giorni fa vedere subito se i due telefoni sono allineati. |
| Errori | Alloggio scelto poi tolto dalla rosa o nascosto: resta scelto e visibile (regola della v36). Alloggio senza profilo di viaggio: prova che ogni numero 1–35 ce l'abbia. |
| Cosa tocca | Giorni, Piano (costi), Biglietti, Mercatini, mappa, barre del Piano, confronti «n. X o n. Y?». |
| Soluzione smart (da chiedere) | Riquadro «Il vostro alloggio»: orari d'arrivo e partenza, cosa fare domenica sera (chiavi o gestore), scadenza della cancellazione gratuita con promemoria nel calendario, messaggio già scritto in francese per il gestore. |

## Domande a Mario (22/11 ~19:4x, foto in `archivio/2026-11-22-c24-scegli/`)
- DOMANDA 1 🛑: dove sta il tasto nella schermata principale (bozza 1 tre riquadri, 2 rosa e scelta insieme, 3 «Dormire» giallo). Consiglio 2.
- DOMANDA 2: rosa come filtro ovunque (con il mio consiglio sempre come riferimento) o solo in «Dormire». Consiglio: ovunque.
- DOMANDA 3: riquadro «Il vostro alloggio» (soluzione smart sopra). Consiglio: sì.

## Piano (dopo la DOMANDA 1)
1. Schermata principale: tasto secondo la risposta; scritte dal JS con la rosa e l'alloggio scelto.
2. Passo 2: con la rosa piena parte su «La vostra rosa»; confronto affiancato (prezzo, minuti ai parchi, RER, pulizia, arrivo domenica sera); su ogni alloggio un tasto grande «Dormiamo qui».
3. Dopo la scelta: avviso con Annulla, alloggio scritto in cima a ogni giorno, «cambia» che riporta alla rosa.
4. C22 insieme: profili di viaggio dei n. 8, 16, 23 ricontrollati con le pagine ufficiali.
5. Prove: rosa → confronto → scelta → Giorni cambiati (telefono e PC); albero della testata ancora visibile; foto o video a Mario prima di pubblicare.

## Scelte in corsa
- Fable non serve: la logica c'è già (profili `ACC`), si tratta di renderla chiara; nessun dato vero o soldi in gioco.
