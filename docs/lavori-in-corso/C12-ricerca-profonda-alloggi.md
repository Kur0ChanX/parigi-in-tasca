# C12 · Ricerca profonda degli alloggi 13→17 (priorità) e 14→17 (22/11)

## Parole di Mario (22/11 ~00:15, chat «Controllo 1»)
Prima: «ma se ti scrivo dal 13 al 17 perché mi metti dal 14 che problemi hai?»
Poi: «metti alloggi dal 14 al 17 e in priorità dal 13 al 17 rifai la ricerca accurata profonda i piú validi dal web con i criteri che ti ho detto e sistema tutto il nostro sito c'è un disordine allucinante rendi tutto ordinato chiaro e di facile lettura non listoni chilometrici risistema in modo intelligente e von Logica e bello da vedere professionale non amatoriale»

## Messaggio di Mario 22/11 00:4x (chat «Controllo 2»)
«qui» + foto `archivio/2026-11-22-mario-qui-vicino-a-disney.jpg` (scelta 4 notti Moxy, scheda Hotel, ordine «Vicino a Disney»: primi n. 30 Residhome, 11 Crowne Plaza con navetta ogni 30 min, 12; il n. 14 Hotel Disney solo 4°).
Letto come (ipotesi, da confermare con Mario): l'ordine «Vicino a Disney» è sbagliato. Causa vera: ordinava per minuti coi mezzi SENZA le attese (Residhome 8 min col treno batte l'Hotel Disney a 10 min a piedi; la navetta ogni 30 min contava 10 min). Scelta: «Vicino a Disney» = distanza dai parchi in linea d'aria (km del blocco MAPPE, IGN), a pari km i minuti; nella riga il segno «📍 km dai parchi».

## Scelte
- Date: 13→17 (4 notti tutte vicino a Disney) in primo piano; 14→17 (con la domenica a Parigi) come seconda strada. Supera «non rifare la ricerca» del 21/11 20:25: ora Mario la chiede.
- Criteri (da `alloggi_nuovi_13_17_ricerca.md`): sotto ~650 € le 4 notti · ≤ ~12 min a piedi dalla RER A (Chessy o Val d'Europe) o navetta gratuita · Booking ≥ 8,0 e pulizia ≥ 8,5 · Airbnb ≥ 4,8 con ≥ 20 recensioni · libero tutte le notti · senza auto né taxi.
- 2 aiutanti in sottofondo (22/11 ~00:15): hotel → `research_notes/…/alloggi_ricerca_profonda_hotel.md`; appartamenti → `alloggi_ricerca_profonda_appartamenti.md`.
- Nella pagina nuova (C6): niente listone; i migliori 5–6 in vista, gli altri in una lista corta filtrabile.

## Stato
- 22/11 ~00:15: aiutanti partiti. Poi: controllo a campione dei loro dati, scelta dei migliori.

## Esito della ricerca (22/11 ~00:55)
- Hotel, B&B, camere (`alloggi_ricerca_profonda_hotel.md`): 40+ nuove controllate, 1 sola valida: **Jolie chambre** (camera privata, Bussy-Saint-Georges, 9,1 / pulizia 9,2, 450 m dalla RER di Bussy, ≈ 350 € con cancellazione fino al 29/11, stima; da chiedere se il bagno è privato; arrivo 19–23; conferma dell'host). Nessun hotel nuovo. Dati nuovi: Moxy matrimoniale 677 € (già in pagina), Residhome salito a 647 € NR / 752 € canc.
- Appartamenti (`alloggi_ricerca_profonda_appartamenti.md`): 80+ controllati, 15 validi (tutti Airbnb, Val d'Europe). I 5 migliori, NON in pagina (controllato con grep): 24683013 · 24130153 · 974712785668568895 · 1107761783058404933 · 928939744715124546 (schede corte nel file, righe 88–133). 898344935961342834 non libero.

## Piano v18 (pronto, da fare)
1. **Consiglio ★ sul 13→17**: `MIO_S={n:"",d:8}` (4 notti Moxy «Family Sleeper», 677 € canc. fino al 13/12; Q[8] già giusto). Aggiornare i testi fissi: `#mio` (righe ~752–764), `CK[0]` («Oggi… Il mio consiglio: Hotel Locomo…», riga ~1558), `BARS`: prima `{n:"",d:8,t:"Il mio consiglio. 4 notti al Moxy…"}`, poi `{n:"",d:31,…}` (200 € in meno, niente reception), `{n:"lo",d:8,…}` (domenica a Parigi), `{n:"lo",d:16}`, `{n:"",d:4}`, `{n:"",d:1}`, `{n:"",d:12}`; togliere `{n:"is",d:8}` e il vecchio `{n:"",d:8}` (restano 7 barre: la prova «9 barre» resta giusta).
2. **n. 31–35** (Airbnb, come il n. 25): righe in `AL` (sub, g, sc, cl, p, pr, pl con `ab4`, min, ne, dist, sun, tr, pro, con con `abCon`, u `AB(id,13)`, ul), `Q` (4 notti, 3 notti), `ACC` con `vde(min,{mt,da,al,a:VDE})`, tabella km `{z:1,km:["31 km","1,7 km","33 km"]}`, `DV` `["VDE",[["w",min]]]`; minuti: 31→7, 32→5 (4–5), 33→9 (5–9), 34→3 (2–3), 35→12 (10–12). ID sempre fra virgolette (E: arrotondati). `tools/fai-mappe-dicembre.py` `ZONA`: aggiungere 31–35.
3. **Jolie chambre**: il motore conosce solo le stazioni VDE e CH (`RS`, `DV`): NON entra nel motore. Riquadro fisso sotto l'elenco quando l'interruttore è su «🛏️ B&B» (script delle schede), con prezzo, link Booking e gli avvisi.
4. n. 30: prezzo 647 € NR (cancellabile 752 €).
5. Testi: «fra 30» (riga ~676) → 35; «i 30 a confronto, anche 11 Airbnb» → 35 e 16; lead «I n. 16–21 e 23 sono su Airbnb» → «16–21, 23, 25–28 e 31–35».
6. Prove (`tools/prova-web-app.js`): conteggi 30 → 35, lista Airbnb del filtro (16–21, 23, 25–28, 31–35), Airbnb 11 → 16 schede, «tutti e 15 col prezzo» nella scelta con domenica a Parigi (+5 = 20), «Dov'è: 19 schede» invariato.
7. Poi: fai-dicembre, prove (web app, scritte, --controlla, colori, kit), versione-v18, PR, unione, nastro, foto a Mario delle 2 schede nuove e del consiglio.
