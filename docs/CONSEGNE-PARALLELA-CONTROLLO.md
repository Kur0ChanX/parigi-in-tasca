# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 16 `session_01QTFEqRCHFhdKvoJDeCbedf`, 22/11 19:08 ora italiana, chiusa alla soglia; la apre la Controllo 16 con `create_session` (catena 3 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261122-01QTFEqRCHFh/claude/parigi-ramo-definitivo.
- **v39 online** (verifica: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 39}`): v37 (rosa, PR #38, 18:26), v38 (tasto senza doppione, PR #39, 18:36), v39 (numerino sulla ⭐ e pastiglie «n. 16» «n. 23», PR #40, 18:52).
- **v40 PRONTA, NON ONLINE** (verifica: `grep -o "{v:40" dicembre/index.html`; commit «v40 pronta (C23)»): lucine della testata a gruppi (814 → 306 animazioni, `lucGrp`, classi `lucgrp`/`lucgrp-el`), niente parallasse (Torre ferma), luci in pausa mentre si scorre (`#top.anim-pausa`), albero col tratto sottile (`archivio/2026-11-22-c18-albero/lavoro/albero.py` con `SOTTILE=9`, messo con `metti-albero.py`; serve `pip install scipy`). Prove verdi: web app 66/66, scritte, `--controlla`. Video `archivio/2026-11-22-c23-testata/prima-dopo.mp4` mandato. Mario ha risposto «publica» (22/11 ~19:1x, dopo l’handoff) → SUBITO `versione-v40`, PR, unione (giro in locale), sito letto, nastro.
- **Già deciso da Mario (non richiedere):** prima la rosa poi C22 (rosa online); tasto rosa col numerino e i numeri (v39); Torre ferma quando si scorre; albero col tratto più sottile.
- **Da non rifare:** v37–v39; la ricerca del peso: è la testata (814 animazioni SVG). Le misure di fluidità in questo contenitore ballano molto: contano solo differenze grandi.
- **Cosa preme a Mario adesso:** testata fluida senza sfarfallio (v40), poi C22 (itinerari e schede Moxy n. 8, n. 16, n. 23), poi il ponte del kit RVC (foto di Mario 18:45: è nello «Script di configurazione» dell'ambiente, non nelle variabili; «guardalo dopo»).

## Cosa è stato fatto (Controllo 16)
- Pubblicate v37, v38, v39 (sopra). Errore del tasto doppione in `docs/ERRORI.md` (22/11); due righe vecchie spostate in `ERRORI-STORIA.md` (tetto 10 KB).
- C23 (voce in `docs/DA-FARE.md`): v40 pronta (sopra). C22: piano in `docs/lavori-in-corso/C22-controllo-itinerari.md`, non iniziato.
- Video di Mario 18:31 in `archivio/2026-11-22-video-flicker-mario/`.

## Strade provate e scartate
- Fermare le animazioni mentre si scorre (pausa): da sola non basta; `animation:none` sì, ma alla ripartenza scatterebbero → lucine raggruppate per fase.
- `will-change`/`contain` sulla testata, via `backdrop-filter`, via maschere e filtri: nessun guadagno misurabile.
- Prova del service worker instabile 🐞: iniziata come C22 e lasciata (C22 = controllo itinerari); resta in Da fare.

## Prossimi passi
1. **Pubblicare SUBITO la v40** (Mario «publica», dopo l’handoff): skill `pr`, ramo-copia `versione-v40`, PR, unione, sito letto, nastro. Se sfarfalla ancora: cercare la luce che parte accesa (la prova «nessuna luce parte in ritardo» è verde); se pesa ancora: parti ferme della testata in un’immagine sola.
1b. **C24** (dopo la v40, voce in `docs/DA-FARE.md`, parole intere sotto): tasto «Scegli dove dormire» in evidenza; la rosa per scremare e confrontare; scelto l’hotel, cambia tutto l’itinerario (strade, orari, consigli). Lavoro grande: prima l’occhio critico (skill `nuova-funzione`), piano in `docs/lavori-in-corso/C24-scegli-dove-dormire.md`, foto prima di pubblicare. Va fatto insieme a C22 (itinerari giusti).
2. C22: controllo di itinerari e schede (n. 8 Moxy, n. 16, n. 23) con le pagine ufficiali, correzioni, v41.
3. Ponte del kit RVC: leggere lo «Script di configurazione» dell'ambiente (foto di Mario 18:45); `RVC_KIT_TOKEN` non è fra le variabili di questo contenitore.
4. DOMANDA 1 🛑 Controllo 14 (alloggi spenti n. 18, 20, 21). Promesse 👁 v34–v39 in `docs/DA-FARE.md`.
5. Poi: pagina più natalizia (foto prima), C17 resto, orario RER A (~26/11), service worker instabile 🐞, fuochi.

## Blocchi e rischi
- Nomi nuovi nella pagina: prima `grep -o "\bnome\b" | wc -l` = 0 (`grp` esisteva già: usato `lucGrp`).
- Ogni luce animata nella testata ridisegna tutto il disegno: `lucGrp` raggruppa da solo `.lampC .lampM .hb .ond`; animazioni nuove con ritardi negativi.
- Schermata principale: mai una riga in più nella testata; tasti affiancati, testi corti senza doppioni.
- `ERRORI.md` al tetto dei 10 KB.

## Ultimo messaggio di Mario
22/11 ~19:1x (dopo l’handoff, passato alla Controllo 17): «poi metti piú chiaro ed in evidenza della scelta hotel che cambia tutto l'itinerario se non seleziono gli hotel che voglio nel app vedo solo gli hotel selezionati / quindi devo poter scremare quello da vedere per confrontare come abbiamo fatto con la rosa poi per sceglierli devo avere un tasto Scegli dove dormire e mi cambia l'itinerario in base a l'hotel scelto info le strade da fare i consigli orari ecc ecc ecc con cura mi raccomando che c'è un viaggio di mezzo / publica» → risposta alla DOMANDA 1 (pubblica la v40) + C24. Controllo Da fare: 1 voce aggiunta (C24).

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 17
la apre la Controllo 16 con `create_session` (catena 3 di 8). Scritto da Controllo 16 il 22/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 17 · v40: aspetta ok`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 17 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-22 18:19 · [AVVIO] Sei la chat parallela Controllo 16 di Parigi in tasca, linea «Controllo»… → testo d’avvio: v37 pubblicata, C22 pianificato
- 2026-11-22 18:27 · mi devi spiegare perché hai scritto 2n 16 e 23.... assurdo... come tovinare una … → v38 (tasto senza doppione), riga in ERRORI
- 2026-11-22 18:32 · @"/root/.claude/uploads/[segreto tolto dalla scorta]/5a064185-VID_20261122_18311… → C23, v40 pronta (DOMANDA 1)
- 2026-11-22 18:37 · publica rosa adesso ho capito le scritte ma falle meglio nel tasto non cosí... → v39 online (numerino e pastiglie)
- 2026-11-22 18:47 · è qui il ponte lo vedi vabbè guardalo dopo prima sistema la foto animata e alleg… → C23 (v40); ponte: voce in Da fare
- 2026-11-22 18:58 · l'albero fai un tratto meno spesso → v40 (albero sottile), DOMANDA 1

Ultimo, intero:
> l'albero fai un tratto meno spesso
- 2026-11-22 19:1x · poi metti piú chiaro ed in evidenza della scelta hotel… → risposta alla DOMANDA 1 (pubblica v40) + C24, passato alla Controllo 17
