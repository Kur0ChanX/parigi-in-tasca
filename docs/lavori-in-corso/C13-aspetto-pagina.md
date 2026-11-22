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

## Pezzo 2 · passo 1 della scheda Dormire (domenica 13), 22/11 dalle 10:07 (Controllo 4)
- Stesso stile del pezzo 1 (Mario «va bene», scelta 1): hotel di Parigi con barra azzurra ed etichetta «🏨 Hotel a Parigi»; «4 notti vicino a Disney» con barra neutra ed etichetta «🏰 Domenica già a Disney»; totale sotto il prezzo (`.sc-dt`); 3 riquadri: Parigi = a piedi, lunedì (uscita con le valigie), pulizia; 4 notti = domenica (treno), in camera, lunedì (uscita senza valigie). Regole CSS del passo 2 allargate con `:is(#scD,#scN)`.
- Prova nuova «C13 pezzo 2» in `tools/prova-web-app.js`. Prove 22/11 ~10:11: web app 43/43, scritte VERO, `--controlla` VERO, colori VERO. Confronti in `archivio/2026-11-22-c13-dormire-pezzo2/`, mandati a Mario (DOMANDA 1 della Controllo 4).
- Prossimo: pezzo 3 = scheda Piano, poi Giorni, Biglietti; v20 quando il gruppo è pronto e approvato.

## Pezzo 3 · scheda Piano, «Quanto costa» (22/11 dalle 10:13, Controllo 4)
- Il resto della scheda Piano (testata, voli, viaggio in breve, da fare) è già nello stile: cambiato solo «Quanto costa». Ogni strada è una scheda col bordo, barra a sinistra ed etichetta del tipo del suo alloggio (🏨 Hotel azzurro, 🏠 Casa verde acqua, 🛏️ B&B lilla, 🏰 pacchetto Disney rosso; «Parigi + …» se domenica a Parigi); la scelta in oro come in Dormire.
- `tyOf` spostata accanto a `byId` (primo script): le barre si disegnano prima del secondo script. Prova nuova «C13 pezzo 3». Confronto: `archivio/2026-11-22-c13-piano-pezzo3/`.

## Mario 22/11 ~10:18 (Controllo 4), parole intere
> Fai tutta la grafica e pubblica.
> I più vicini metti in ordine di tempo per arrivare, non di chilometri. e differenzia con un altro colore gli hotel Disney dagli hotel normali. Poi nei posti dove dormire schedano si capisce bene che apre tutto con i dettagli. Non si capisce in fondo, è difficile da vederlo.
- Letto così: tutti i pezzi rimasti (Giorni, Biglietti) e pubblicare senza aspettare l'ok di ogni foto (vale anche come risposta alla DOMANDA 1 della Controllo 4); «Vicino a Disney» ordinato per minuti fino ai parchi; hotel Disney con un colore loro; nelle schede di Dormire un invito chiaro «Dettagli» in fondo.
- Fatto (22/11 ~10:20–10:30): «Vicino a Disney» per minuti per arrivare con l'attesa media di navetta e bus (`arrMin` = `parkMin` + `waitMin`), nel riquadro 🏰 lo stesso numero («con attesa» se c'è), legenda aggiornata; primi i n. 16/17 (6 min), Hotel Disney n. 14 a 10 min. Hotel Disney rosa (`--ty-disney`, contrasto ≥ 5,3 in tutti i temi), etichetta «🏰 Hotel Disney», col tasto «Hotel» resta visibile e contato; pacchetti Disney rosa nei costi. «Vedi i dettagli ⌄» / «Chiudi i dettagli» in fondo a ogni scheda di Dormire (freccina dell'angolo tolta).
- Pezzo 4 · Biglietti: «Treni e ticket» sul telefono a schede (la tabella usciva dallo schermo). Giorni: già nello stile (tappe numerate, oro per «da non perdere»), non toccato.
- Errore trovato dalle prove: `tyOf` spostata nel primo script non arrivava al secondo (due blocchi separati) → `window.pdnTyOf`; ora le prove scrivono subito gli errori della pagina. Riga in `docs/ERRORI.md`.
- Confronti v20: `archivio/2026-11-22-c13-v20/`.

## Mario 22/11 ~10:30 (Controllo 4), parole intere
> Attenzione che se ti va a vedere anche nel posto dove dormire, che lo scegli e ti cambia l'itinerario, insomma ti cambia la pagina, la scelta, ti influisce, quello va mostrato e fatto capire.
- Fatto in locale (v21): in cima a Dormire riquadro «🔄 La scelta cambia tutta la pagina» (Giorni, Piano, Biglietti); dopo «Scegli questo» (o da «Quanto costa», dal Giorno per giorno, «torna al consiglio») avviso in basso «✓ Scelto: …, cambiati Piano · Giorni · Biglietti» con «Vedi Giorni ›» e «Ok» (sparisce da solo dopo 12 s); pallino giallo sulle schede cambiate finché non si aprono. Evento `pdn:scelta` dal primo script alla barra delle schede. Prova nuova in `prova-web-app.js`.
- Codice v21 nel ramo (commit «v21 (non ancora pubblicata)…»), prove 22/11 ~10:45: web app 47/47, scritte VERO, `--controlla` VERO, colori VERO. NON pubblicata: prima le due richieste qui sotto.

## Mario 22/11 ~10:45 (Controllo 4), parole intere
> Il colore casa e quant'altro non va in conflitto con la leggenda tipo biglietti Disney e quant'altro? I colori non hanno un conflitto. Ti disorienta un po'?
> della possibilità, se uno sceglie perché per sbaglio ci clicca, che lo può annullare.
- Conflitto vero (misurato): Casa `#55D3C0` ≈ Biglietti Disney `--seg-ticket #4FBF86` ≈ «meglio» `--good #6FD9A6`; Disney rosa `#FF8AD0` ≈ pacchetto `--seg-pack #EE5A66`; B&B lilla vicino a trasporti `#8E9CC2`.
- Scelta (Controllo 4, da fare nella Controllo 5): 1) in «Quanto costa» niente colori dei tipi (bordo neutro, niente barra a sinistra, etichetta `.bar-ty` in `--mute`): lì valgono solo i colori della legenda; 2) Casa da verde acqua ad **arancio** `--ty-casa` scuro `#FFA15C`, chiaro `#A34A00` (contrasto misurato ≥ 4,7 su tutti gli sfondi, testo sopra 9,2 / 5,9; nei temi chiari 4,73 su `--surface-2`: se serve scurire un poco); controllare anche l'interruttore dei tipi e `#scBB`; 3) **Annulla** nell'avviso dopo «Scegli questo»: bottone «Annulla» accanto a «Vedi … ›» e «Ok»; torna alla scelta di prima (in `applySc` tenere `prima` e lo stato `SCELTO` di prima; l'avviso nel secondo script manda un evento `pdn:annulla`, il primo script chiama `applySc(prima)` senza nuovo avviso e i pallini tornano come prima); prova nuova in `prova-web-app.js` (scegli → Annulla → stessa `scelta` nell'indirizzo e stesso «Adesso:» di prima, avviso chiuso). Poi foto (confronto colori Dormire e Quanto costa; avviso con Annulla), prove, pubblicare la v21 (Mario «Fai tutta la grafica e pubblica»).

- **Fatto dalla Controllo 5 (22/11 ~11:00), nel ramo, non online:** 1) «Quanto costa» senza colori dei tipi (niente barra a sinistra, etichetta del tipo grigia): lì solo i colori della legenda. 2) Casa **ciano** (scuro `#92EEFE`, chiaro `#005A70`), NON arancio: misurato (distanza dei colori OKLab ×100) l'arancio chiaro `#A34A00` era a 5,1 dall'oro di «scelto» (`--lamp-text #8A5800`), quasi come il verde acqua dal verde «meglio» (4,7–4,9); il ciano sta a ≥ 12,4 da tutti (hotel, B&B, Disney, oro, verde, rosso) nei due temi, contrasto ≥ 6,2. 3) «↩ Annulla» nell'avviso: torna alla scelta di prima, anche a «non avete ancora scelto» (indirizzo e salvataggio puliti), pallini come prima, «✓ Fatto» tolto; avviso «↩ Annullato · Di nuovo: …» per 6 secondi. Prova nuova in `tools/prova-web-app.js`.
