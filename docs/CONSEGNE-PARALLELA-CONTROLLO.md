# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 22 `session_01Rwcxc6ffPihnoof8UBtXt1`, 23/11 01:39 ora italiana, chiusa alla soglia; la apre la Controllo 22 con `create_session` (catena 6 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Giri in corso: pages build and deployment. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb.

- **v44 ONLINE** (PR #44 unita squash 23/11 ~01:45, main `9d52de6`, `main` già unito nel ramo; sito controllato: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 44}`): contiene la v43 (guida dei n. 8, 16, 23 controllata) e la v44 (C26). Prove sul commit `9c8385b` (dopo, solo documenti): colori ok, `--controlla` VERO, web app 75/75, scritte 20/20.
- **Già deciso da Mario (non richiedere):** pubblicare v43 e v44 (23/11 01:37 «Domanda 1, domanda 2, va bene. Ok, come consiglio»). Alloggi: le scelte sono solo n. 8 Moxy, n. 16 e n. 23, più probabili 16 e 23: guida curata soprattutto su quelli (22/11 ~23:16, `docs/lavori-in-corso/C22-controllo-itinerari.md`). Fasci di luce del faro restano (20:07). Prima la guida, poi la grafica (20:03).
- **Cosa preme a Mario adesso:** vedere la v44 sul telefono (guida dei giorni col n. 16 o 23 e «Questo o quello?»); poi la luna sfocata.
- **Da non rifare:** C22 parte 1 e 2 (n. 8, 16, 23; Orly; mercatini: tutto in `docs/lavori-in-corso/C22-controllo-itinerari.md`), C26 (`docs/lavori-in-corso/C26-questo-o-quello.md`), v41–v44, C25, misure della testata (C23).

## Cosa è stato fatto (Controllo 22) · verifica: `git show --stat be5c762 9c8385b` e PR #44
- C22 parte 2: Orly e mercatini controllati sulle pagine ufficiali (IDFM, Paris Aéroport, paris.fr, RATP, organizzatori, Galeries Lafayette). Due correzioni: terrazza delle Galeries con la pista sul tetto dal 24/11 (forse solo per chi pattina; riserva: ruota delle Tuileries; voce in «Da ricontrollare»); Orly: carta contactless all’uscita della metro (14,80 €) come riserva per giovedì. Prova «C22: Galeries… Orly…».
- C26: «Questo o quello?» lo sceglie Mario (`QOQ`, `qoqH`, `qoqR`, CSS `.qoq-*`, chiave `pdn-qoq`): tasti accesi/spenti da rosa + consiglio + scelta, «＋ Aggiungi un altro», in breve + 10 righe, «Il mio parere» dalle coppie `DUELS` solo se accese. Prova «C26». Foto in `archivio/2026-11-23-c26-questo-o-quello/`.
- `docs/ERRORI.md`: riga del 22/11 «fonte sola» allargata (Galeries: guardare anche gli eventi di quelle date); una riga vecchia in ERRORI-STORIA. Da fare snello (< 40 KB).

## Strade provate e scartate
- Pubblicare senza un ok di Mario scritto nella sessione: il sistema nega (non aggirare).
- Foto lunghe del confronto (7.000 px): tagliate per righe (posizioni delle `.qoq-r`), non a metà testo.

## Prossimi passi
1. Aspettare il «👁» di Mario sulla v44 (voci C22, C24, C26 in `docs/DA-FARE.md`): foto o lettura dal suo telefono; poi chiudere le voci.
2. Verso il 26/11: orari RER A del 13 e 17/12 su https://malignea.fr/horaires/ (domenica sera da Gare de Lyon, giovedì mattina da Val d’Europe, ultimo da Chessy): togliere «da ricontrollare» o correggere.
3. Luna sfocata (C23, `docs/lavori-in-corso/C23-testata-leggera.md`), dopo la guida.
4. Idea da proporre a Mario se serve: pista gratis sul tetto del Printemps (fonte non ufficiale). Righe aperte in «Aspetta Mario» della catena: Controllo 14 (🛑 alloggi spenti), 19, 13, 12, 17.

## Blocchi e rischi
- Nomi nuovi nella pagina: prima `grep -o "\bnome\b" | wc -l` = 0 (usati ora: `QOQ`, `qoqH`, `qoqR`, `qoqSalva`, `scN10`).
- Codice che usa `ACC`, `DV`, `RA`, `arrMin`: va DOPO la loro definizione (C26 sta dopo `ppOf`); mai nel primo disegno.
- Le prove servono la cartella del repo dal vivo: mai modificare `dicembre/` mentre girano.
- `docs/DA-FARE.md` a ~39,9 KB (tetto 40): alla prossima riga accorciare le voci finite.
- Foto per Mario: barre fisse nascoste prima dello screenshot; scritta in alto su ogni pezzo.

## Ultimo messaggio di Mario
> Domanda 1, domanda 2, va bene. Ok, come consiglio.

(23/11 01:37: risposta 1 alla DOMANDA 1 «pubblico la v43?» e 1 alla DOMANDA 2 «il nuovo Questo o quello va bene?» → v44 pubblicata, righe tolte da «Aspetta Mario».) Controllo Da fare: voci C22, C24, C26 col «👁 Lo vedi» sulla v44.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 23
la apre la Controllo 22 con `create_session` (catena 6 di 8). Scritto da Controllo 22 il 23/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 23 · luna sfocata`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 23 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-22 23:49 · [AVVIO] Sei la chat parallela Controllo 22 di Parigi in tasca, linea «Controllo»… → avvio; C22 parte 2 (be5c762), C26 (9c8385b), DOMANDE 1 e 2
- 2026-11-23 01:37 · Domanda 1, domanda 2, va bene. Ok, come consiglio. → risposta alle domande 1 e 2: PR #44 unita, v44

Ultimo, intero:
> Domanda 1, domanda 2, va bene. Ok, come consiglio.

