# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 13 `session_01Rwcxc7MpsS9Eajf4PQaTUZ`, 22/11 16:58 ora italiana, chiusa alla soglia; la apre la Controllo 13 con `create_session` (catena 4 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261122-01Rwcxc7MpsS/claude/parigi-ramo-definitivo.
- **v33 ONLINE**: verifica `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 33}`.
- **v34 PRONTA, NON online**: commit provato `015bef9` sul ramo comune (verifica: `git show 015bef9 --stat`; prove locali verdi: `prova-web-app.js` 63/63, `prova-scritte.js` 21/21, `fai-dicembre.py --controlla` VERO; `dicembre/versione.json` = 34). Dentro: albero = disegno di Mario colorato e addobbato, Torre Eiffel nuova (piani, traliccio, scintillio), niente sfarfallio all’apertura, slitta una volta. Aspetta la 🛑 DOMANDA 2 («metto online la v34?», consiglio 1). Al sì: `git push origin <commit di codice provato>:refs/heads/versione-v34`, PR verso `main` pronta, giro = prove in locale (`tools/scegli-giro.py versione` dice «locale»), verde → squash con `commit_message` scritto, `git merge origin/main` nel ramo, `versione.json` = 34 sul sito.
- **Già deciso da Mario (non richiedere):** figure SOLO dalle sue immagini ritagliate (castello, slitta, Zero, albero); più lucine possibile; merce vera sulle bancarelle; Jack passa una volta. Il suo «pubblica» (15:2x) valeva per la v33: per la v34 serve il suo sì (DOMANDA 2).
- **Da non rifare:** sfere sul banco; parole rare («brillii»); animazioni con ritardo positivo; slitta che ripassa; castello vettoriale, slitta in un pezzo; foto o video dal sorgente `parigi-disney-natale.html` servito da solo (senza `<head>` le icone escono storte: video da `dicembre/`); `elementFromPoint` senza saltare velo `vigna`, bagliori e `g[mask]`.
- **Cosa preme a Mario adesso:** vedere albero e Torre (foto e video mandati) e la v34 online; poi la pagina intera più natalizia (foto prima).
- Torre Eiffel: vettoriale nostra (Mario non ha mandato un disegno; se lo manda si usa il suo, come per castello e albero).

## Cosa è stato fatto (Controllo 13) · verifica: `git log --oneline -12`, pagina `dicembre/parigi-disney-natale.html`
- Scorte vecchie della catena (Controllo 10 e 11) unite: solo i messaggi di Mario nel registro.
- Albero: `archivio/2026-11-22-c18-albero/lavoro/albero.py` (ritaglio, colori, `albero-geo.json`) e `metti-albero.py` (rifà il pezzo fra «albero:inizio/fine»): `#albImg` 99×143, 48 lucine `#filoAlbero`, stelline `#firlights`, raggi e bagliore sulla stella, pacchi come prima.
- Torre: `torre.py` (rifà fra «torre:inizio/fine»): piede a y 232 dietro le casette, 2° piano a 184 visibile, `#torre`, gradienti `torreG`/`torreP`, 70 lucine `#towerlights`, faro in cima (y 106).
- Prova nuova in `tools/prova-web-app.js` («Testata: albero = disegno di Mario…»); novità v34 in `VERSIONI`. Piano e scelte in `docs/lavori-in-corso/C18-slitta-e-luci.md` (ultima sezione).
- Foto e video a Mario: `archivio/2026-11-22-c18-albero/v34-c1-telefono.jpg`, `v34-c2-pc.jpg`, `v34-video-albero-torre.mp4`. Strumenti nella stessa cartella `lavoro/`: `foto-scena.js` (scena a 2×, riquadro in unità della scena), `video.js` (pagina vera, stampa il riquadro per ffmpeg). `albero.py` vuole `scipy` (contenitore nuovo: `pip install scipy`).

## Strade provate e scartate
- Festoni come linee a parte: nel disegno il festone a zig-zag è fuso coi bordi dei rami → lucine sul centro del tratto sotto ogni fascia.
- Torre in proporzioni vere col piede a terra (y 265): il 2° piano finiva dietro le casette, restava una punta → piede a 232 nascosto, scala .42.
- Prova con `elementFromPoint` semplice: prendeva il velo `vigna` e le proiezioni `pj-onda` → `elementsFromPoint` che li salta.
- Video dal sorgente: icone storte → video dalla pagina vera `dicembre/`.

## Prossimi passi
1. Risposta di Mario: DOMANDA 2 = 1 → pubblicare la v34 (vedi Stato); = 2 → ritocchi chiesti, foto, di nuovo la domanda. DOMANDA 1 = 2 → albero nostro nello stesso stile, sennò resta il suo. Togliere le righe risposte da «## 0. Aspetta Mario».
2. Dopo l'unione: `versione.json` = 34 sul sito; le promesse 👁 della v34 si chiudono solo quando Mario le vede.
3. Pagina intera più natalizia (v35): PRIMA una foto di prova a Mario (lucine sopra i titoli, agrifoglio, fiocchi leggeri sullo sfondo, schede con un filo dorato), online solo dopo che la vede.
4. Poi C17 resto, orario RER A (~26/11), prova del service worker instabile, fuochi.

## Blocchi e rischi
- Nomi nuovi nella pagina: prima `grep -o "\bnome\b" | wc -l` = 0. Pagina ~520 KB (immagini base64).
- Animazioni nuove: mai ritardo positivo (lo ferma la prova). Testi della pagina con l’apostrofo tipografico; novità ≤ 130 caratteri.
- `ERRORI.md` al tetto dei 10 KB: per ogni riga nuova spostarne una doppione in `ERRORI-STORIA.md`.
- Diritti del disegno dell'albero (annuncio Etsy): DOMANDA 1 aperta, consiglio 1.

## Ultimo messaggio di Mario
Arrivato alla Controllo 12 dopo il suo handoff (passato qui con `send_message`): «Hai domande per me?» → le domande sono in «## 0. Aspetta Mario» e nel messaggio finale della Controllo 13 (DOMANDA 1 e 2). Ultima richiesta di lavoro: «Mario 22/11 16:29» in `docs/lavori-in-corso/C18-slitta-e-luci.md`. Controllo Da fare: 0 voci aggiunte (albero e Torre avevano già la voce; DOMANDA 2 aggiunta in «Aspetta Mario»).

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 14
la apre la Controllo 13 con `create_session` (catena 4 di 8). Scritto da Controllo 13 il 22/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 14 · pubblica v34`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 14 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-22 16:36 · [AVVIO] Sei la chat parallela Controllo 13 di Parigi in tasca, linea «Controllo»… → avvio; albero dal disegno e Torre Eiffel nuova (v34 pronta, commit 015bef9; C18), DOMANDA 2 a Mario

Ultimo, intero:
> [AVVIO] Sei la chat parallela Controllo 13 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».

