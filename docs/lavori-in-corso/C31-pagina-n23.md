# C31 · Pagina di dicembre rifatta sul n. 23 (alloggio scelto)

Chat: Controllo 32 (da 28/11/2026 00:22). File: `dicembre/parigi-disney-natale.html` (poi `tools/fai-dicembre.py`), `tools/prova-web-app.js`.

## Parole di Mario
> Dormiano nell appartamento 23 guarda tutta l'app con cura per itinerario info ecc ecc in base a dove dormiamo

(28/11/2026 00:22.) Risponde anche alla DOMANDA 3 della Controllo 30 (si decide ora, niente altro su Booking).

## Cosa vuol dire
- Il n. 23 (Philippe e Patricia, 32 Rue de la Charbonnière, Montévrain, 700 m dalla RER Val d'Europe) diventa l'alloggio della pagina, al posto del mio consiglio n. 8 Moxy.
- Tutta la pagina va ricontrollata da chi dorme lì: giorni e orari (domenica sera coi bagagli, lunedì–mercoledì Disney, giovedì verso Orly), costi, biglietti, «Da fare prima di partire», testi che dicono ancora «scegliete».

## Risposte di Mario
> booking 461 preso dai un check su tutto se ci aono info giuste itinerario ecc e info generali

(28/11 ~00:3x) = DOMANDA 1 → 2: prenotato su **Booking, 461 €**, 4 notti 13→17. Regole di Booking: arrivo 14:00–23:00, partenza 8:00–10:00, età minima 18, messaggi ai gestori da Booking. La sveglia del 29/11 (rimborso Airbnb) è spenta: non serve più.

## Domande (righe in «## 0. Aspetta Mario»)
- DOMANDA 1 (Controllo 32): chiusa, Booking 461 €.
- DOMANDA 2 (Controllo 32): cosa faccio della parte per scegliere (35 alloggi, «Questo o quello?», «Hotel Disney: conviene?»).

## Scelte in corsa
- 28/11 00:30: un aiutante rilegge la pagina aperta con `?scelta=4n-23` e fa l'elenco dei punti sbagliati per chi dorme al n. 23 (testo in scratchpad, non nel repo). Intanto io: n. 23 come alloggio di partenza della pagina e controllo degli orari.

## Lista di controllo (rilettura dell'aiutante, 28/11 00:40; [ ] da fare, [x] fatto)
- [x] A1 `DV[23]` a piedi 5 → 9 (tempi ai parchi, a piedi, valigie, ordine «Vicino a Disney»); un solo numero ovunque (9 min, 700 m Booking; n. 5 nella stessa via dice 400 m: verificare).
- [x] A2 «+ attesa della navetta» anche dove non c'è navetta (n. 23, n. 16) → «del treno».
- [x] B3–B4 Home e «In breve»: «Scegliete l'alloggio fra 35», «Uscite dall'hotel», riquadro «Dormire» da scelta.
- [x] C5 «via da Parigi alle 20:40»: 20:40 è il ritiro bagagli, treno 21:08.
- [x] C6 resto del vecchio consiglio «Col n. 12 la spa domenica sera».
- [x] C7 messaggio ai gestori nella scheda senza ora (in «Scegli» e «Giorni» c'è «vers 21h50»).
- [x] D8–D11 «il mio consiglio» = Moxy (costi, tabella, menu dei Giorni, «Torna al mio consiglio», Hotel Disney «900 € più del Moxy»: col n. 23 ~960 €); Moxy 545 contro 702 €.
- [x] E12–E14 prezzo del n. 23: prima Booking 461 € (prenotato), Airbnb solo come nota; parentesi doppie in «Costi» e «Giorni»; 3 notti da Airbnb.
- [x] F15–F16 minuti a piedi in contraddizione (9, 8–10, «meno di 5», 2–5); Monop' «5–8 min» o «davanti alla stazione».
- [x] G17 mercoledì «Domani si esce alle 8:30» fisso → ora del giovedì del piano.
- [x] G18 giovedì «dall'hotel» → «dall'alloggio»; etichetta del giovedì «Mercatini e città».
- [x] G19 domenica col treno delle 21:23 si arriva verso le 22:10, non 21:50.
- [x] G20 colazione: «Niente colazione in casa» (c'è la cucina); «uscite 10 minuti prima» ma il piano resta 8:05; spesa domenica sera o lunedì: una sola versione; testo vagante «…stazione Val d'Europe Monoprix».
- [x] G21 «Libero dal 13.» nella tappa del check-in.
- [x] G22 (lasciato: 9:05 è il cambio col treno delle 8:24, che arriva alle 8:59) «09:05 cambio» col treno delle 8:30 (arriva 9:06).
- [x] H23 mappa: segno del n. 23 sulla stazione, «Indirizzo esatto dopo la prenotazione»: mancano le coordinate in `TM.a`.
- [ ] I24 (aperto, piccolo: i dati dei ristoranti li scrive `tools/fai-ristoranti.py`) «Vicino all'alloggio» (mangiare): tempi dalla stazione, non dal n. 23.
- [x] J25–J26 «Da fare»: «Oggi l'hotel» → fatto il n. 23; richiesta Booking da far accettare, data limite della cancellazione, messaggio ai gestori; navetta Ki Space; voce orari RER «escono verso il 26/11».
- [x] K27–K30 dalla stazione all'appartamento (uscita, strada al buio coi trolley); piano B se il gestore non c'è; ore di silenzio 20–8 (arrivo 21:50, uscita 8:10, scala di legno); domanda sul riscaldamento nel messaggio.

## Altri messaggi di Mario
> correggi ci saranno altei errori moxy ecc noi siamo al 23

(con foto `archivio/2026-11-28-n23/mario-giorni-n8-invece-di-23.jpg`: in «Giorni» il menu dice «23.» con «★ È il mio consiglio», il riquadro «Il vostro alloggio» dice «n. 8 Moxy».)

> biglietti dei parchi presi a 505

(= biglietti Disney comprati, 505 € in due al posto della stima di 544 €; si intende il 3 giorni / 2 parchi 14–16 consigliato dalla pagina.)

## Fatto nella v52 (28/11 ~01:15, prove locali 83/83 + scritte)
- Alloggio di partenza della pagina = n. 23 prenotato (`MIO=23`, `SCELTO=true`, chiave nuova `pdn-scelta23`: le scelte vecchie salvate sul telefono non contano più; tornare al n. 23 non salva niente). Etichette «il mio consiglio» → «Prenotato».
- Biglietti 505 € in conti, barre, «In breve», «Biglietti», «Da fare»; Hotel Disney ricalcolato sul n. 23 (circa 1.000 € in più).
- N. 23: 9 minuti a piedi anche nei tempi ai parchi (percorso OpenStreetMap dal 38 della stessa via: 719 m); scheda col prezzo Booking, strada dalla stazione, silenzio 20–8, colazione lunedì (Monop' dalle 7:00), messaggio con riscaldamento e con l'ora.
- Mappa: posizione del n. 23 a parte (`TM_PREN`), il blocco TM resta di `tools/fai-mappa-viaggio.py`.
- Menu «Lunedì–mercoledì» con `autocomplete="off"` (foto di Mario: menu sul 23, riquadro sull'8; ipotesi: il browser rimette nel menu l'ultimo valore toccato).
- Resta: DOMANDA 2 (cosa fare della parte per scegliere), I24.
