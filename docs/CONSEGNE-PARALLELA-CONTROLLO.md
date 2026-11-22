# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 16 `session_01QTFEqRCHFhdKvoJDeCbedf`, 22/11 19:08 ora italiana, chiusa alla soglia; la apre la Controllo 16 con `create_session` (catena 3 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261122-01QTFEqRCHFh/claude/parigi-ramo-definitivo.
- (qui le righe di giudizio della Controllo 16: fatto, provato, dove si verifica)

## Stato (Controllo 15 `session_01QTFEqR4smB9LCwjXG1Qzwj`, 22/11 18:18 ora italiana, chiusa alla soglia; la apre la Controllo 15 con `create_session` (catena 2 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261122-01QTFEqR4smB/claude/parigi-ramo-definitivo.
- **v37 PRONTA, NON ONLINE** (commit 9da22ae sul ramo comune; verifica: `grep -o "{v:37" dicembre/index.html` e `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 36}`). Aspetta la DOMANDA 1 🛑 della Controllo 15 (foto 1–4 mandate 18:2x): «1 · sì, pubblica» → ramo-copia `versione-v37`, PR, giro completo, unione (skill `pr`).
- **Già deciso da Mario (non richiedere):** la rosa si sceglie dal tasto nella schermata principale (17:56); senza scelta salvata la rosa è n. 16 (Airbnb 5115238) e n. 23 (Airbnb 1376052056754954936); il n. 23 su Booking costa 461 €; v34–v36 pubblicate.
- **Da non rifare:** C20 (Nascondi, «Tutto sul n.»: online); C21 codice e prove (fatto, `docs/lavori-in-corso/C21-rosa-alloggi.md`); la ricerca del n. 23 su Booking (chiedere il link a Mario).
- **Cosa preme a Mario adesso:** la rosa degli alloggi comoda da scegliere e guida affidabile (prezzi Airbnb/Booking).
- **Kit RVC:** `RVC_KIT_TOKEN` manca anche in questo contenitore (`python3 -I tools/scarica-kit.py --versione` → «Manca RVC_KIT_TOKEN»).

## Cosa è stato fatto (Controllo 15) · verifica: `git show --stat 9da22ae`; dettagli in `docs/lavori-in-corso/C21-rosa-alloggi.md`
- v37 (C21): tasto «⭐ Rosa alloggi · N» accanto a «Guida Disneyland» (`.apps2`, `#roApp`); apre il passo 2 di «Scegli» con solo la rosa (`#scRosa`, `ROF`), «✏️ Cambia la rosa» con le spunte (`#scRosaP`), «⭐ Metti / ☆ Togli» in righe e schede, avviso con «Annulla» (`avvisa`, in comune con «Nascondi»). Rosa in `localStorage` `pdn-rosa`; vince su «Nascondi»; `&rosa=` nel link.
- Prove locali verdi: `node tools/prova-web-app.js` 66/66 (nuova «Rosa alloggi: …»), `node tools/prova-scritte.js` 20/20, `fai-dicembre.py --controlla` VERO, sintassi dei 4 script ok.
- Foto `archivio/2026-11-22-c21-rosa-alloggi/1-home-confronto.jpg` … `4-rosa-riga.jpg`, mandate a Mario. Errore trovato e difeso: riga del 22/11 in `docs/ERRORI.md` (albero spinto sotto la barra); due righe doppione spostate in `ERRORI-STORIA.md` (tetto 10 KB).

## Strade provate e scartate
- Tasto della rosa in una riga sua sotto «Guida Disneyland»: testata +80 px, albero sotto la barra in basso (prova rossa) → due tasti affiancati (+4 px), testo Disneyland accorciato.
- Pannello delle spunte sopra le righe della rosa: 35 spunte spingevano giù la rosa → pannello sotto l’elenco, aperto dal tasto della schermata principale.
- Filtro dei tipi insieme alla rosa: poteva nascondere righe della rosa → con la rosa il filtro dei tipi è spento (`#scD:not([data-solo-rosa])`) e nascosto.

## Prossimi passi
1. **Pubblicare SUBITO la v37 (rosa)**: Mario ha risposto alla DOMANDA 1 della Controllo 15 («prima publica la rosa»). Skill `pr`: ramo-copia `versione-v37`, PR pronta, giro completo, unione, sito letto.
2. **C22 (dopo la v37)**: controllare tutti gli itinerari e le informazioni degli alloggi, soprattutto n. 8 Moxy e i n. 16 e 23 (parole intere sotto, «Ultimo messaggio»), correggere con le fonti ufficiali, poi pubblicare. Scrivere `docs/lavori-in-corso/C22-controllo-itinerari.md`.
2b. DOMANDA 1 🛑 della Controllo 14 (alloggi spenti n. 18, 20, 21): alla risposta, foto prima di pubblicare.
3. Promesse 👁 della v34, v35, v36 (e v37 quando online) in `docs/DA-FARE.md`: si chiudono solo con la foto di Mario dal sito vero.
4. Se Mario mette altri alloggi nella rosa: proporre la scheda «📋 Tutto sul n.» anche per loro (ricerca dagli annunci, come C20).
5. Poi: pagina intera più natalizia (PRIMA una foto di prova a Mario), C17 resto, orario RER A (~26/11), prova del service worker instabile 🐞, fuochi. Kit RVC: chiave mancante.

## Blocchi e rischi
- Nomi nuovi nella pagina: prima `grep -o "\bnome\b" | wc -l` = 0. Pagina ~520 KB (immagini base64).
- Animazioni nuove: mai ritardo positivo (lo ferma la prova). Testi della pagina con l’apostrofo tipografico; novità ≤ 130 caratteri.
- `ERRORI.md` al tetto dei 10 KB: per ogni riga nuova spostarne una doppione in `ERRORI-STORIA.md`.
- Schermata principale: mai una riga in più nella testata (l’albero scende sotto la barra); tasti nuovi affiancati, la prova dell’albero lo ferma.
- Diritti del disegno dell’albero (annuncio Etsy): DOMANDA 1 della Controllo 13 aperta, consiglio 1.

## Ultimo messaggio di Mario
22/11 ~18:2x (alla Controllo 15, dopo l’handoff): «Controlla che tutti gli itinerari e info per hotel sono giusti sopratutto moxi e gli ultimi 2 mandati mella sessione precedente
poi publica
prima publica la rosa poi controllo itinerari e info» → risposta alla DOMANDA 1 (pubblica la v37) + C22. Controllo Da fare: 1 voce aggiunta (C22).

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
- 2026-11-22 18:19 · [AVVIO] Sei la chat parallela Controllo 16 di Parigi in tasca, linea «Controllo»… → 
- 2026-11-22 18:27 · mi devi spiegare perché hai scritto 2n 16 e 23.... assurdo... come tovinare una … → 
- 2026-11-22 18:32 · @"/root/.claude/uploads/[segreto tolto dalla scorta]/5a064185-VID_20261122_18311… → 
- 2026-11-22 18:37 · publica rosa adesso ho capito le scritte ma falle meglio nel tasto non cosí... → 
- 2026-11-22 18:47 · è qui il ponte lo vedi vabbè guardalo dopo prima sistema la foto animata e alleg… → 
- 2026-11-22 18:58 · l'albero fai un tratto meno spesso → 

Ultimo, intero:
> l'albero fai un tratto meno spesso

