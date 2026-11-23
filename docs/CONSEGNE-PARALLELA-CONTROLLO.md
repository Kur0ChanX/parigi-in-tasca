# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 25 `session_01Rwcxc5Bet62v2GUzUYxZX8`, 23/11 09:44 ora italiana, chiusa alla soglia; la apre la Controllo 25 con `create_session` (catena 1 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261123-01Rwcxc5Bet6/claude/parigi-ramo-definitivo.
- **v46 ONLINE** (main `cf8f7c5`, PR 48; verifica: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 46}`): le 3 stelline della luna disegnate sulla tela del cielo → niente più strati rifatti al passaggio della slitta (causa dello sfarfallio, misurata). Ancora online le prove `?luci=ferme` (PR 46) e `?tela=si` (PR 47).
- **Già deciso da Mario (non richiedere):** alloggi n. 8, 16, 23 (più probabili 16 e 23); fasci del faro restano; prima la guida, poi la grafica; prova tela pubblicata («11»).
- **Da non rifare:** misure della causa (`ricrea.js`, `spazza.js`), stelline sulla tela, prova «C27 · slitta», v46, prove `?luci=ferme` e `?tela=si`, C23, C22, C26.
- **Cosa preme a Mario adesso:** che Torre, faro, slitta e Zero non spariscano più: riga 🛑 in «Aspetta Mario» (guarda la v46 sul telefono).

## Cosa è stato fatto (Controllo 25) · verifica: `git log --oneline f4803af^..HEAD`
- Prova `?tela=si` pubblicata (Mario «11», PR 47). Video di Mario: normale e tela sfarfallano, luci ferme no.
- Causa misurata col telefono di prova (`archivio/2026-11-23-c27-strati/lavoro/ricrea.js`): strati grandi RICREATI con la slitta in volo, normale 6 · luci ferme 0 · tela 5; fermate una per una le 34 animazioni rimaste con la tela: solo le 3 stelline della luna (`.luna-st`, nel gruppo lontano subito prima della slitta) → 0 (4 prove su 4, anche 70 s). Dettagli in `docs/lavori-in-corso/C27-testata-strati.md` «Causa trovata».
- v46: stelline sulla tela del cielo (#sky, funzione `stelline`, stesso luccichio «brilla»), nel disegno solo la forma (`.luna-t{display:none}`); prova «C27 · slitta» in `tools/prova-web-app.js` (rossa sul codice vecchio: 3 animazioni sotto la slitta, 63 strati rifatti). Prove locali verdi su 79ff648: web app 82/82, scritte 20/20, colori, `--controlla`. Sito vero letto col browser: v46, 0 animazioni sotto la slitta, 0 errori.
- Orari RER A del 13–17/12 non ancora usciti (sito fino al 6/12): sveglia 26/11 10:17 (`trig_01AMpc1X4UrgQ8oSgS5a6814`, legata alla Controllo 25: rifarla e cancellare questa).
- `docs/ERRORI.md`: riga 23/11 (due correzioni a vuoto senza misura; prova rossa per finta su 1 pixel), 2 righe vecchie in ERRORI-STORIA. Controllo Da fare: 0 voci aggiunte (i 3 messaggi di Mario sono in C27 e in «Aspetta Mario»).

## Strade provate e scartate
- «Troppi strati» (v40 più leggera, C27 tela 1.355 → 69): per Mario sfarfalla uguale. Il numero di strati non c’entra: conta un’animazione sotto ciò che il programma muove.
- Fermare proiezioni, fiammelle o `tw2/tw3`: restano 4–5 strati rifatti. Solo le stelline contano.
- Prima prova nuova su 1 pixel: rossa per finta a schermo piccolo → 5×5 pixel.

## Prossimi passi
1. Risposta di Mario sulla v46 (riga 🛑 in «Aspetta Mario»). **Ok** → togliere le prove: `?luci=ferme` (script in testa alla pagina, classe `luci-ferme`, prova «C27»), `?tela=si` (blocco «C27 · lucine sulla tela» in fondo all’ultimo `<script>`, classi `tela-si`/`lt-off`/`ltBox`, `window.luciTela`, prova «C27 · tela»), le due scritte PROVA; v47 senza novità visibili (o novità «pagina più leggera»), prove, PR, controllo online. **Sfarfalla ancora** → suo video, `misura.py`, poi `ricrea.js`/`spazza.js` su ciò che resta (pacchi e polvere aggiunti dal programma, Zero).
2. Sveglia RER A (26/11 10:17): rifarla da questa sessione (`send_later`), poi cancellare `trig_01AMpc1X4UrgQ8oSgS5a6814`.
3. Restano animate nel disegno (non servono per lo sfarfallio): 19 fiammelle, proiezioni del castello, `tw2/tw3`. Toccarle solo se Mario lo chiede.

## Blocchi e rischi
- Il telefono di prova è un’imitazione (Chromium, Pixel 7): la conferma è il telefono di Mario. Regola trovata: niente animazioni del foglio di stile nel disegno PRIMA (sotto) di ciò che il programma muove (slitta, pacchi, polvere, Zero) → la prova «C27 · slitta» lo controlla.
- Le prove servono la cartella del repo dal vivo: mai modificare `dicembre/` mentre girano. `docs/DA-FARE.md` a ~40 KB (tetto 40), `docs/ERRORI.md` a ~9,9 KB (tetto 10).
- Nomi nuovi nella pagina: prima `grep -c` = 0 (usati ora `STL`, `eio`, `stelline`).

## Ultimo messaggio di Mario
> Allora, su normale flickera, luciferme no, però non flickera, però è bruttissimo. Luci ferme, e su tela c'è lo stesso problema, flickera lo stesso su tela.

(23/11 09:06, alla Controllo 25; dopo: v46 online, Mario non ha ancora risposto.)

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 26
la apre la Controllo 25 con `create_session` (catena 1 di 8). Scritto da Controllo 25 il 23/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 26 · verifica v46`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 26 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-23 08:43 · [AVVIO] Sei la chat parallela Controllo 25 di Parigi in tasca, linea «Controllo»… → avvio; scorta della 24 unita
- 2026-11-23 08:48 · 11 → risposta alla DOMANDA 1 (pubblica la prova tela): PR 47
- 2026-11-23 09:06 · Allora, su normale flickera, luciferme no, però non flickera, però è bruttissimo… → causa misurata (stelline della luna), v46 PR 48 (C27)

Ultimo, intero:
> Allora, su normale flickera, luciferme no, però non flickera, però è bruttissimo. Luci ferme, e su tela c'è lo stesso problema, flickera lo stesso su tela.

