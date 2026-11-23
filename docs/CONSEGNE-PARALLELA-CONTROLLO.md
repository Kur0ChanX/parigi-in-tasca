# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 23 `session_01Rwcxc6J6cxwZCWqrStpDUk`, 23/11 02:25 ora italiana, chiusa alla soglia; la apre la Controllo 23 con `create_session` (catena 7 di 8))
- Ramo comune ≠ origin: PUSH DA FARE (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb.
- **v45 ONLINE** (PR #45, main `7ac754f`, sito `{"v": 45}`): luna di Topolino sulla tela del cielo (C23). **Prova «luci ferme» ONLINE** (PR #46, main `5eb4756`): `https://kur0chanx.github.io/parigi-in-tasca/dicembre/?luci=ferme` ferma tutte le animazioni del foglio di stile (12 strati invece di 1.355), scritta gialla «PROVA · luci ferme». Prove sul commit `5a8d6bb`: colori ok, `--controlla` VERO, web app 80/80, scritte 20/20.
- **Già deciso da Mario (non richiedere):** alloggi n. 8, 16, 23 (più probabili 16 e 23); fasci del faro restano; prima la guida, poi la grafica (guida finita con la v44).
- **Cosa preme a Mario adesso:** Torre, faro e slitta che spariscono per un attimo (video 02:05, «fastidioso», «tutto quello che vola»): C27, `docs/lavori-in-corso/C27-testata-strati.md`.

## Cosa è stato fatto (Controllo 23) · verifica: `git show --stat 6022aec 5a8d6bb` e PR #45, #46
- C23 luna: nella foto di Mario mancava l’immagine (non era sfocata). Luna, alone e bagliore ora sulla tela `#sky` (`lunaImg`, `lunaBag`, `luna`; immagine in `<defs>`); prova «C23» sui pixel (telefono, dopo 8 s, riduci movimento, PC). Prova rossa trovata e corretta: testata nascosta → misura 0 → errore nel ciclo dei fotogrammi.
- C27: video di Mario misurato (785 fotogrammi): il corpo della Torre sparisce 16 volte per un fotogramma, insieme a faro e slitta (stesso strato). Chromium Pixel 7: 1.355 strati (899 lucine `circle`, `.ond`, `.tw`, `.appeso`…; 405 lucine sono nei mercatini più in basso, fuori dalla testata). Prova `?luci=ferme` + prova «C27». Immagine per Mario `archivio/2026-11-23-c27-strati/1-dal-tuo-video-397-398.jpg` (mandata).
- `docs/ERRORI.md`: riga 23/11 (luna, prova rossa); 3 righe vecchie in ERRORI-STORIA (tetto 10 KB).
- Controllo Da fare: 1 voce aggiunta (C27 con «👁 Lo vedi») + 2 righe in «Aspetta Mario» (v45 da guardare; DOMANDA 1 della prova).

## Strade provate e scartate
- Pagina di prova nuova in `/dicembre/` o altrove: i service worker salvano OGNI pagina aperta come l’app (chiave `./`) → avrebbe sostituito l’app senza rete. Usato `?luci=ferme` sull’app stessa.
- Fermare solo `.scene *` o `#top *`: restavano 405–441 strati (lucine dei mercatini più in basso). Serve tutta la pagina.
- Primo conteggio dei fotogrammi (13, solo cima intera): sbagliato per difetto; giusto 16 (cali ≥ 15 % sul conteggio dei punti dorati).

## Prossimi passi
1. Aspettare la risposta alla DOMANDA 1 (riga in «Aspetta Mario») e il video di Mario con `?luci=ferme`: se Torre e slitta non spariscono più → causa confermata (troppi strati). Misurare il video con gli script in `archivio/2026-11-23-c27-strati/lavoro/` (`python3 -I misura.py <video> <uscita.npy>`, poi i cali ≥ 15 %; `salti.py`; `node strati.js [index.html?luci=ferme]`).
2. C27 pezzo 2: lucine che lampeggiano disegnate su una tela sopra il disegno (nel disegno restano accese e ferme), anche nei mercatini più in basso; obiettivo < 150 strati, aspetto uguale; prova automatica sugli strati (CDP `LayerTree`, abilitarlo DOPO il caricamento) e che Torre e slitta si VEDONO; video prima/dopo a Mario; poi togliere `?luci=ferme`.
3. Aspettare il «👁» di Mario su v44 e v45 (riga in «Aspetta Mario»).
4. Verso il 26/11: orari RER A del 13 e 17/12 su https://malignea.fr/horaires/ (pubblica 21 giorni avanti; la copia letta il 23/11 era vecchia).

## Blocchi e rischi
- Nomi nuovi nella pagina: prima `grep -c "\bnome\b"` = 0 (usati ora anche `lunaImg`, `lunaB`, `lunaG`, `lunaS`, `lunaCol`, `lunaBag`, `luna`, `luci-ferme`).
- Codice nel ciclo dei fotogrammi: uscire se la misura è 0 (testata nascosta), sennò si ferma tutto il cielo.
- Le prove servono la cartella del repo dal vivo: mai modificare `dicembre/` mentre girano.
- `docs/DA-FARE.md` ~39,6 KB (tetto 40): alla prossima riga accorciare le voci finite. `docs/ERRORI.md` al tetto (10 KB).
- Foto per Mario: scritta in alto su ogni immagine; video di Mario: misurare, non solo guardare a occhio.

## Ultimo messaggio di Mario
> No, guarda, cliccherà tantissime altre volte. Come che non l'hai visto? Ed è fastidioso. Cliccherà anche la renna, nightmare, insomma tutto quello che vola.

(23/11 02:13: conteggio rifatto, 16 fotogrammi, slitta insieme alla Torre → C27; prova `?luci=ferme` online e DOMANDA 1 in «Aspetta Mario».)

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 24
la apre la Controllo 23 con `create_session` (catena 7 di 8). Scritto da Controllo 23 il 23/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 24 · lucine sulla tela`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 24 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-23 01:41 · [AVVIO] Sei la chat parallela Controllo 23 di Parigi in tasca, linea «Controllo»… → avvio; C23 luna (6022aec, PR 45, v45)
- 2026-11-23 02:07 · @"/root/.claude/uploads/[segreto tolto dalla scorta]/8356ac8f-VID_20261123_02054… → video in `archivio/2026-11-23-video-v45-flicker-mario/`, C27
- 2026-11-23 02:13 · No, guarda, cliccherà tantissime altre volte. Come che non l'hai visto? Ed è fas… → C27 (conteggio rifatto, prova ?luci=ferme 5a8d6bb, PR 46, DOMANDA 1)

Ultimo, intero:
> No, guarda, cliccherà tantissime altre volte. Come che non l'hai visto? Ed è fastidioso. Cliccherà anche la renna, nightmare, insomma tutto quello che vola.

