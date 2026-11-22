# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 12 `session_01Rwcxc4Xr465ou7svUAgw8r`, 22/11 16:35 ora italiana, chiusa alla soglia; la apre la Controllo 12 con `create_session` (catena 3 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261122-01Rwcxc4Xr46/claude/parigi-ramo-definitivo.
- **v33 ONLINE** (PR 34, 22/11 ~15:5x): verifica `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 33}`. Dentro: castello dal disegno con ombre e stelline, slitta a pezzi (renne, braccia di Jack, Zero), mercatini (neve, ghiaccioli, lucine, merce appesa e sul banco), guida Disneyland (C19).
- **v34 in lavoro** sul ramo comune: sfarfallio all'apertura corretto (ritardi negativi, prova nuova) e slitta UNA volta per apertura (Mario 16:29). Manca: ALBERO dal disegno di Mario e TORRE EIFFEL più bella (piano in `docs/lavori-in-corso/C18-slitta-e-luci.md`, ultima sezione), poi pagina intera più natalizia (foto a Mario PRIMA).
- **Già deciso da Mario (non richiedere):** figure SOLO dalle sue immagini ritagliate (castello, slitta, Zero, ora l'ALBERO: `archivio/2026-11-22-c18-albero/mario-albero-riferimento.jpg`, da colorare e addobbare); più lucine possibile; merce vera sulle bancarelle (niente sfere); Jack passa una volta; si pubblica a prove verdi quando le cose chieste sono finite (ok 15:2x).
- **Guida Disneyland (C19):** link `https://guida-disneyland-ynoy.pages.dev/?d=2026-12-14&n=3&a=2&p=t.t.t&prova=idee` in `#dlApp` (unico posto), riquadro nei giorni magic. Ogni telefono tiene profilo e preferiti suoi; se ha altri giorni la guida chiede prima.

## Cosa è stato fatto (Controllo 12) · verifica: `git log --oneline -25`, pagina `dicembre/parigi-disney-natale.html`
- Bancarelle: neve spessa, ghiaccioli, lucine sotto la tenda e sul banco, merce appesa che dondola (`.appeso`, solo in `#chalets`), merce sul banco per tipo (`tema=k%4`: vin brulé, pan di zenzero, candele, alberelli e regali); festoni più fitti.
- Castello: stelline (`#castBrilli`, `.scint`) sui puntali `ori` e su metà delle finestre piccole. Braccia di Jack: `#slJb` + `slCj`, funzione `frusta(t)` in `renne(t)`.
- C19 guida Disneyland (vedi Stato). PR 34 = v33 unita, `main` unito nel ramo.
- v34 (non online): ritardi negativi (`.hb`, `.tw`, `.neve-st`), slitta senza ripasso, prova «Testata e ghirlanda: nessuna luce parte in ritardo». Ultimo giro verde: commit `84d2cf0` (62 + 20).
- Prova dei pacchi: salta il bagliore `cglow` (era rossa 1 volta su 8). Foto e video mandati: `archivio/2026-11-22-c18-v33/v33-d1…d3*.jpg`, `v33-v1…v2*.mp4`, `archivio/2026-11-22-c19-guida-disneyland/`.
- Strumenti miei (scratchpad, persi): foto della scena = `getScreenCTM` del `svg.scene` + clip; video = `recordVideo` a 1× (a 2× Playwright mette la pagina piccola in un angolo), PC 1440 per l’ingrandimento, ffmpeg crop+scale.

## Strade provate e scartate
- «brillii» scritto a Mario: letto «birilli» → parole comuni + foto.
- Sfere sul banco: Mario «che ci fanno?» → merce vera.
- Video a 2× con `recordVideo`: pagina piccola in un angolo → video a 1× e ingrandimento con ffmpeg.

## Prossimi passi
1. ALBERO dal disegno di Mario (piano in `docs/lavori-in-corso/C18-slitta-e-luci.md`, ultima sezione): ritaglio, colori, luce di notte, addobbi animati (ritardi NEGATIVI), al posto dell’albero vettoriale; rischio di diritti in una riga a Mario.
2. TORRE EIFFEL più bella e accesa (stesso file).
3. Foto prima/dopo (telefono e PC) + video; giro completo; pubblicare la v34 (ok già dato per le cose chieste); controllare `versione.json` = 34.
4. Pagina intera più natalizia (v35 o dentro la v34 se piccola): PRIMA la foto di prova a Mario.
5. Poi C17 resto, orario RER A (~26/11), prova del service worker instabile, fuochi.

## Blocchi e rischi
- Nomi nuovi nella pagina: prima `grep -o "\bnome\b" | wc -l` = 0. Pagina ~500 KB (immagini base64).
- Animazioni nuove: mai ritardo positivo (lo ferma la prova). Testi della pagina con l’apostrofo tipografico.
- `ERRORI.md` al tetto dei 10 KB: per ogni riga nuova spostarne una doppione in `ERRORI-STORIA.md`.

## Ultimo messaggio di Mario
Intero in `docs/lavori-in-corso/C18-slitta-e-luci.md` («Mario 22/11 16:29»). Controllo Da fare: 0 voci aggiunte (le 4 richieste della sessione hanno già la loro voce).

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 13
la apre la Controllo 12 con `create_session` (catena 3 di 8). Scritto da Controllo 12 il 22/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 13 · albero e Torre`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 13 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-22 15:13 · [AVVIO] Sei la chat parallela Controllo 12 di Parigi in tasca, linea «Controllo»… → 
- 2026-11-22 15:22 · Sì, ma i birilli non ci fanno niente, cioè. Ci devono essere altre cose. Ma cosa… → 
- 2026-11-22 15:24 · No, però scusami, anche io ho sbagliato. Tipo quelle sfere che ci sono nelle ban… → 
- 2026-11-22 15:30 · Quando siamo nel giorno di Disneyland, oppure anche nella schermata principale, … → 
- 2026-11-22 16:29 · All'inizio flickerano alcune luci tipo la torre Eiffel che dovresti farla meglio… → 

Ultimo, intero:
> All'inizio flickerano alcune luci tipo la torre Eiffel che dovresti farla meglio dietro, l'albero che dovresti farlo meglio, cioè l'albero non flickera, molte luci però flickerano all'inizio. Ti mando un albero che puoi mettere al posto di quello se vuoi. Ovviamente lo devi colorare e addobbare. La Torre Eiffel è fatta male dietro e poi flickera all'inizio appena nel video. E Jack Scheletro non farlo passare più volte. Passa una volta, poi non lo vedo più.

