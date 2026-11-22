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

## Risposte di Mario (22/11 19:28)
> 11 21 31
>
> Mi raccomando è una guida deve aiutarmi in base a che hotel scelgo cosa fare nella giornata specialmente domenica con i mercatini come spostarmi consigli info ecc ecc ecc molto accurato
- DOMANDA 1 → 1: tre riquadri affiancati (Guida Disneyland, Rosa alloggi, Scegli dove dormire). DOMANDA 2 → 1: rosa ovunque, consiglio sempre come riferimento, tasto «Tutti i 35». DOMANDA 3 → 1: riquadro «Il vostro alloggio» completo.
- In più: ogni giorno, e soprattutto domenica coi mercatini, dice cosa fare e come spostarsi secondo l'hotel scelto, con cura.

## Piano
1. Schermata principale: tasto secondo la risposta; scritte dal JS con la rosa e l'alloggio scelto.
2. Passo 2: con la rosa piena parte su «La vostra rosa»; confronto affiancato (prezzo, minuti ai parchi, RER, pulizia, arrivo domenica sera); su ogni alloggio un tasto grande «Dormiamo qui».
3. Dopo la scelta: avviso con Annulla, alloggio scritto in cima a ogni giorno, «cambia» che riporta alla rosa.
4. C22 insieme: profili di viaggio dei n. 8, 16, 23 ricontrollati con le pagine ufficiali.
5. Prove: rosa → confronto → scelta → Giorni cambiati (telefono e PC); albero della testata ancora visibile; foto o video a Mario prima di pubblicare.

## Fatto (Controllo 17, pezzo 1, non pubblicato)
- Schermata principale: tre riquadri (`.apps2.tre`), terzo `#scApp` «Scegli dove dormire» con sotto «Consiglio/Scelto: n. X …» (`scHome()`, chiamata anche da `applySc`); altezza riga 80 px (prima 90).
- Passo 2 parte dalla rosa se piena (`ROF=ROSA.size>0`); `#scApp` apre la rosa con le schede aperte insieme (`scAp`; niente fisarmonica in `#scD` con `ROF`).
- Tasto della scheda «🛏️ Dormiamo qui» / «✓ Dormite qui» (prima «Scegli questo»); barre del Piano «Dormiamo qui ›».

## Manca (in ordine)
0. ✅ (Controllo 18: «Tutti» toccato prima delle prove dei 35, anche nella prova di «Annulla»; in v41) **Prove rosse da adattare (8, `prova-web-app.js`, giro del 22/11 ~19:35)**: «Ordine: 4 pulsanti…», «Ordine: Vicino a Disney…», «v18: interruttore con Tutti…», «v18: camera di Bussy…», «Riga Disney…», «Vicino a Disney ordina solo per minuti», «C14: seconda camera a Bussy…», «Hotel Disney (n. 14) rosa…»: partono da «Tutti · 35» ma ora il passo 2 parte dalla rosa (voluto, DOMANDA 2 → 1). Nelle prove: tocco su `[data-ro-f="0"]` («Tutti») prima di contare i 35, NON tornare a `ROF=false`. `--controlla` VERO, `prova-scritte` verde.
1. Rosa ovunque (DOMANDA 2 → 1): elenco di «Dormire» (`FI` parte da 'rosa' se piena), barre del Piano (`BARS`), confronti «n. X o n. Y?», mappa (strato «Disney»): solo rosa + mio consiglio + scelto, tasto «Tutti i 35».
2. In cima a ogni giorno «🛏️ Dormite al n. X · cambia».
3. Riquadro «Il vostro alloggio» in cima ai Giorni (DOMANDA 3 → 1): arrivo e partenza, domenica sera (chiavi / gestore di persona / reception), scadenza della cancellazione gratuita + promemoria `.ics`, messaggio in francese da copiare. Dati sicuri: n. 8 (Marriott), n. 16 e 23 (Airbnb, `XX` di C20); gli altri: testo `sun` della scheda.
4. Domenica secondo l'hotel: caso «gestore di persona» (n. 23) in `mkAl` e nel check-in della domenica (ora da concordare).
5. Prove nuove in `tools/prova-web-app.js` (riquadro, rosa di partenza, schede aperte, Dormite al n. X), foto o video a Mario, poi v41.

## Scelte in corsa
- Fable non serve: la logica c'è già (profili `ACC`), si tratta di renderla chiara; nessun dato vero o soldi in gioco.
- Mario 22/11 ~20:1x: «Mi raccomando priorità massima nella guida poi pensiamo alla grafica della foto animata» → C24 prima di tutto; la v41 porta anche le correzioni della testata già fatte (C23).
