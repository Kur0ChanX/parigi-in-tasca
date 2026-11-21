# C6 · Pagina di dicembre più ordinata (21/11)

## Parole di Mario (alla #10, 21/11 ~18:35)
«Comunque lo vedo ancora molto confuso. Non lo so, va studiato meglio, è ancora un po' confuso. Non lo so, senza eliminare nulla volevo proprio impaginarlo meglio, cioè sono troppe cose a schermo, ti confonde un po', non riesci a capire che cosa sta succedendo, che cosa ti sta spiegando.»

## Parole di Mario (22/11 ~00:15, chat «Controllo 1»)
«sistema tutto il nostro sito c'è un disordine allucinante rendi tutto ordinato chiaro e di facile lettura non listoni chilometrici risistema in modo intelligente e von Logica e bello da vedere professionale non amatoriale» (intero in C12).
→ Preso come risposta alla DOMANDA 3: «decidi tu, con logica». Vado col consiglio 1 (schede in basso), foto prima di pubblicare.

## Stato
- 21/11 ~18:58 (#11): DOMANDA 3 a Mario (1 app a 4 schede in basso · 2 sezioni chiuse · 3 altro; consiglio 1). Niente codice prima della risposta; poi specifica qui, foto prima/dopo, niente pubblicazione senza il suo ok.
- Oggi la pagina ha 10 sezioni una sotto l'altra (breve, costi, hotel, biglietti, hoteldisney, giorni, trasporti, dafare, ricontrollare, fonti) più la barra dei giorni in basso.
- Le mappe di C5 sono dentro la scheda dell'alloggio (si vedono solo toccando): non aggiungono cose allo schermo principale.

## Cosa non va oggi (misurato 22/11 ~00:25, telefono 412 px)
- Pagina lunga ~14 schermi, tutto uno sotto l'altro. «Il mio consiglio» ripetuto 3 volte (scegli, breve, hotel); 2 barre «Ordina per» (scegli e hotel); «Questo o quello?» = 10+ confronti uno sotto l'altro (listone).
- Ordine senza logica: mercatini prima dei costi, costi prima degli alloggi, Hotel Disney staccato dagli alloggi, giorno per giorno dopo biglietti.
- Titoli lunghi come frasi; la barra in basso coi giorni non porta alle parti.

## Piano (specifica): app a 4 schede in basso
| Scheda | Dentro | Da dove viene |
|---|---|---|
| 🏠 Piano | date, 4 riquadri (dove dormite · domenica · Disney lun–mer · totale), «Da fare adesso» con le scadenze | breve, costi (totale), dafare |
| 🛏️ Dormire | interruttore **4 notti vicino a Disney (13→17)** prima, poi «domenica a Parigi + 3 notti (14→17)»; i migliori 5 a schede; «Tutti (N)» in elenco corto con ordine a 4 pulsanti; Hotel Disney in un riquadro chiuso | scegli, hotel, hoteldisney, C12 |
| 📅 Giorni | pulsanti dom–gio; domenica = giro dei mercatini (7 tappe chiuse); lun–mer Disney; gio volo | giorni, mercatini |
| 🎟️ Info | biglietti Disney, treni e ticket, costi in dettaglio, bagagli, da ricontrollare, fonti: tutti chiusi, si apre uno alla volta | biglietti, trasporti, costi, ricontrollare, fonti |
- Niente si toglie: ogni sezione va in una scheda (stessi id, così il motore della scelta continua a funzionare). «Questo o quello?»: solo i 3 confronti utili, il resto chiuso sotto «Altri confronti».
- Aspetto: titoli corti (max ~6 parole) con una riga sotto, una sola carta per idea, spazi regolari, niente lucine fra ogni sezione (solo in testata).
- Pezzi: 1 struttura a schede + barra in basso · 2 scheda Dormire (13→17 prima, C12) · 3 Giorni con i mercatini · 4 Info e Piano · 5 prove (`prova-web-app.js`, `prova-scritte.js`), foto a Mario, poi pubblico.
- Si scrive nella pagina solo dopo la v16 della Principale 21 su main (non toccare i suoi file).

## Fatto
- 22/11 ~00:40 pezzo 1 (schede): `C6-pezzo1-schede.patch` (CSS + script a parte in fondo, sezioni assegnate per id, giorni prima dei mercatini, link interni e `scrollIntoView` aprono la scheda giusta, scheda ricordata in `pdn-scheda`). NON nella pagina finché la v16 non è su main: poi `git apply`. Foto `archivio/2026-11-22-bozza-schede.jpg` mandata.
- Visto: la pagina nel ramo (v16 a metà) dà un errore in `card` (riga ~1099) e le liste della scelta restano vuote: è della v16 in corso, detto alla Principale 21.
