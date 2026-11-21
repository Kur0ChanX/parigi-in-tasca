# C11 · La pagina fa scegliere dove dormire (abbinamenti) e cambia tutto

Mario 21/11 20:52, parola per parola: «Mettimi le scelte nella pagina, tutte le migliori scelte con le opzioni, e quando clicco mi cambia la pagina corretta con quell'abbinamento. Però fallo bene per ogni hotel, clicco e mi cambia l'abbinamento, l'itinerario e tutto. Ok? E all'inizio mi deve scegliere nella pagina. Cioè deve essere molto chiaro, mi deve far vedere tutti gli alberghi con i pro, contro, le differenze eccetera, e poi mi deve mettere a scegliere in modo chiaro. Fammi capire bene le differenze, i soldi che perdo, i minuti che ci metto in più ad andare nei posti, quanta strada devo fare di più a piedi, i pro, i contro, valuta tutto.»
→ È la risposta alla DOMANDA 2 (C10): niente numero, la scelta la fa la pagina.

Mario 21/11 20:59, parola per parola: «Ovviamente non mettere solo la lista degli hotel che abbiamo già, magari ci sono ancora hotel, appartamenti, stanze, B&B molto validi e non le stai valutando.»
→ 2 aiutanti in più (#16): alloggi NUOVI vicino a Disney per 3 notti 14→17 (anche appartamenti, stanze, B&B; anche gli scartati solo per l'arrivo di domenica sera) e per la notte a Parigi 13→14 (anche fuori da Gare de Lyon, lungo RER A / metro 1 / metro 14). La scelta nella pagina deve reggere più dei 15 attuali: ogni alloggio con prezzo per 4 notti e/o per 3 notti; se un prezzo manca, quella combinazione si vede grigia con il motivo.

## Scelte prese (#16, perché)
- **Due passi, nell'ordine delle priorità** (Mario 20:37 «cosa vedere prima cosa dopo»): 1) domenica notte: a Parigi (4 hotel vicino a Gare de Lyon) o già vicino a Disney; 2) l'hotel vicino a Disney (i 15 già in pagina). Ogni hotel con ogni scelta: «per ogni hotel».
- **Stato** `SCELTA={n,d}`: `n` = hotel di Parigi (`sb` Sleeping Belle, `is` ibis Styles, `pa` Parisianer, `no` Novotel) o `null` (4 notti vicino a Disney); `d` = n. 1–15. Salvato sul telefono (`pdn-scelta`) e nel link `?scelta=sb-8` (per mandarlo all'amico: due persone, due telefoni). Il vecchio `?alloggio=N` vale ancora (= 4 notti al n. N).
- **Consiglio** ★ = Sleeping Belle + n. 8 Moxy (DOMANDA 2 delle 20:45); per chi vuole 4 notti resta il n. 12 Relais Spa.
- **All'inizio**: sezione «Scegli dove dormire» subito sotto la testata. Finché non si sceglie, la pagina mostra il consiglio con un avviso «state vedendo il mio consiglio».
- **Differenze, sempre contro il consiglio** e sempre nello stesso ordine: € totali (alloggi + biglietti + trasporti), minuti ai parchi ogni mattina, minuti con le valigie domenica e lunedì, minuti a piedi al giorno (e km, 80 m al minuto, stima), ora di rientro domenica, giovedì all'aeroporto; poi pro e contro.
- Tocco = la pagina cambia subito (giorni, mercatini, costi, trasporti, Da fare, ricontrollare, «in breve»).
- Zenitude resta fuori (cauzione 300 € addebitata 7 giorni prima, già scartato in pagina). Cheyenne, Staycity, All Suites: dopo, se serve (pezzo 9).

## Pezzi (uno per commit, prove a ogni pezzo)
1. Dati: `PAR` (4 hotel di Parigi: prezzo, voto, minuti da Gare de Lyon, deposito, check-in, pro, contro, link, indirizzo) e `p3` (3 notti 14→17) per i 15. Prezzi che mancano: aiutante su Booking (#16, in corso).
2. Stato `SCELTA`, lettura da link e telefono, compatibilità con `?alloggio=`.
3. Funzione `conto(s)`: totale e misure di una scelta; differenze col consiglio.
4. Sezione `#scegli` (passo 1, passo 2, riquadro «la vostra scelta» con differenze e link da mandare).
5. Giorni: domenica con l'hotel di Parigi (valigie in hotel, niente armadietti né RER la sera), lunedì con check-out, RER A con le valigie, valigie nell'hotel nuovo, poi parco (orari calcolati); `spaSun` solo con 4 notti al n. 12.
6. Mercatini (`mkAl`), costi (`#myCost`, barre), trasporti, «Da fare» (due prenotazioni), «ricontrollare», «in breve», riquadro `#mio`.
7. Mappe e «Dov'è» dei 4 hotel di Parigi (`tools/fai-mappe-dicembre.py`).
8. Prove nuove in `tools/prova-web-app.js` (scelta → domenica senza armadietti, lunedì con le valigie, totale giusto, link `?scelta=`), `prova-scritte.js`, `fai-dicembre.py --controlla`; foto a Mario; pubblicazione.
9. (dopo) Hotel Disney Cheyenne e altri con navetta come scelta per lun–mer.

## Stato
- 21/11 ~20:56 (#16): piano scritto, aiutante dei prezzi (3 notti dei 15 + 4 hotel di Parigi) partito.
- 21/11 21:00 (#16): partiti altri 2 aiutanti (ricerca larga Disney 3 notti, ricerca larga Parigi 1 notte). Codice non ancora toccato. Il deposito SNCF di Chessy (7–22) aiuta chi non può lasciare le valigie lunedì mattina.
