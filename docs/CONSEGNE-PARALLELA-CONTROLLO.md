# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 21 `session_01Rwcxc3NLHA1sxizikDmKnM`, 22/11 23:47 ora italiana, chiusa alla soglia; la apre la Controllo 21 con `create_session` (catena 6 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorta mia unita (20d7484).
- **v43 PRONTA, NON online** (online c’è la v42: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 42}`). Commit provato **35cc440** (dopo, solo documenti): colori ok, `--controlla` VERO, web app 73/73 (con la prova nuova «C22»), scritte 20/20 = 96/96. Pubblicazione **fermata dal sistema** (permesso negato a push di `versione-v43` + PR: in questa sessione nessun ok scritto di Mario) → 🛑 DOMANDA 1 «pubblico la v43?» in «Aspetta Mario» (consiglio 1), foto `archivio/2026-11-22-c22-v43/confronto-n23.png` già mandata. Con «1»: `git push origin 35cc440:refs/heads/versione-v43`, PR verso main (titolo «v43 · guida controllata sui n. 8, 16 e 23»), unione squash con messaggio corto (skill `unione-pr`), `git merge origin/main` nel ramo, poi `versione.json` = 43 sul sito.
- **Dentro la v43 (C22):** orari ufficiali RER A (malignea.fr; 13–17/12 non ancora usciti, ci sono fino al 6/12): domenica 21:08 → Val d’Europe 21:43, 21:23 → 21:59, riserva 21:38 → 22:13 e 22:08 → 22:43; giovedì 8:18…8:47 ogni 5–6 minuti (tolto «alcuni treni non fermano a Val d’Europe», era sbagliato). N. 23: 700 m (Booking) → `vde(9)`, giovedì 8:10; arrivo Booking 14:00–23:00 + riserva treni nell’avviso della domenica (`XX[23].lim`); asciugamani inclusi su Booking. Messaggi n. 16 e 23 secondo il piano (`xxG`: ora del giovedì dal profilo; valigie solo con la notte a Parigi). Moxy: prezzo col letto matrimoniale (Family Sleeper ~677 €) nella scheda. Riga «🥐 Colazione» nel riquadro per n. 8, 16, 23 (`vaCol`, Monop’ Place d’Ariane: dom 8–22, lun–sab 7–22, sito Monoprix).
- **Già deciso da Mario (non richiedere):** **Alloggi: le scelte sono solo tre: n. 8 Moxy, n. 16 e n. 23; più probabili i due appartamenti (16 e 23): guida e itinerario con molta cura soprattutto su quelli** (Mario 22/11 ~23:16, `docs/lavori-in-corso/C22-controllo-itinerari.md`). C24 → tre riquadri (1), rosa ovunque con consiglio e «Tutti i 35» (1), riquadro «Il vostro alloggio» completo (1). **Fasci di luce del faro: restano** (Mario 20:07). Priorità: **prima la guida, poi la grafica** (Mario 20:03).
- **Cosa preme a Mario adesso:** la guida dei giorni secondo l’alloggio, con molta cura sui n. 16 e 23 («c’è un viaggio di mezzo»); poi la luna sfocata.
- **Da non rifare:** controllo C22 dei n. 8, 16, 23 (fatto, righe in `docs/lavori-in-corso/C22-controllo-itinerari.md`); v41, v42; C25; misure della testata (C23).
- **Luna** (C23): sul telefono di Mario dopo un po’ diventa una macchia sfocata (foto v41 22:08 in `archivio/2026-11-22-c23-v41/`); ipotesi e prova in `docs/lavori-in-corso/C23-testata-leggera.md`. Dopo la guida.

## Cosa è stato fatto (Controllo 21) · verifica: `git show --stat 822f650 9e925f4 eee9f87 35cc440`
- Guida letta riga per riga coi n. 8, 16, 23 (script di lettura in scratchpad, non salvato), confrontata con RER A ufficiale, Marriott, Booking/Airbnb (C20), OpenStreetMap, Monoprix: 6 correzioni (sopra), prova «C22» in `tools/prova-web-app.js`, riga in `docs/ERRORI.md` (fatti da una fonte sola), due righe vecchie spostate in ERRORI-STORIA.

## Strade provate e scartate
- Pubblicare senza un ok di Mario scritto in questa sessione: il sistema nega il comando (non riprovare, non aggirare).
- Orari RER dal PDF con `pdftotext` semplice: colonne mescolate; serve `pdftotext -bbox` e righe per coordinate (dentro e fuori settimana: x < 1300 / x > 1420).
- Lucine a `fill-opacity` e fasci tolti (C23): scartati prima, vedi C23.

## Prossimi passi
1. **🛑 DOMANDA 1 (v43)**: con «1» pubblicare come sopra; con «2» aspettare. Niente codice che dipende dalla risposta.
2. Verso il 26/11: orari RER A del 13 e 17/12 su https://malignea.fr/horaires/ (domenica sera da Gare de Lyon, giovedì mattina da Val d’Europe, ultimo da Chessy): togliere «da ricontrollare» o correggere; poi Orly e mercatini 2026 (C22 parte 2).
3. C26 «Questo o quello?» con gli alloggi scelti da Mario (n. 8, 16, 23) + rosa in tutte le liste (C24 «Manca» 1).
4. Luna sfocata (C23); DOMANDA 🛑 Controllo 14 (alloggi spenti); ok al controllo delle foto senza scritta (Controllo 19, `.claude/`, E59); ponte RVC quando Mario scrive «fatto».

## Blocchi e rischi
- Nomi nuovi nella pagina: prima `grep -o "\bnome\b" | wc -l` = 0 (usati ora: `xxG`, `vaCol`).
- Funzioni usate dalle schede: il primo disegno (`renderAl()` riga ~1748) avviene PRIMA di `ACC`, `T`, `f5`: niente accessi diretti (lezione di `xxG`, con try/catch e valori di riserva).
- Schermata principale: riga dei riquadri alta 80 px, mai di più (albero sotto la barra).
- Le prove servono la cartella del repo dal vivo: mai modificare `dicembre/` mentre girano.
- Prove che contano tutti e 35 alloggi: prima click su `#scegli [data-ro-f="0"]` («Tutti»).
- `docs/ERRORI.md` a ~10,2 KB e `docs/DA-FARE.md` a ~40 KB (tetti): alla prossima riga spostare il vecchio nella storia.
- Foto per Mario: le barre fisse coprono gli screenshot a pagina intera → nasconderle prima (`position: fixed/sticky` → `visibility: hidden`).

## Ultimo messaggio di Mario
Nessun messaggio di Mario in questa sessione (solo l’[AVVIO]). L’ultimo resta quello del 22/11 ~23:16 alla Controllo 20: «le scelte sono tre, Moxy o i due appartamenti… quelli con molta cura» (intero in `docs/lavori-in-corso/C22-controllo-itinerari.md`). Controllo Da fare: la voce C22 ha la v43 col «👁 Lo vedi»; la DOMANDA 1 è in «Aspetta Mario».

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 22
la apre la Controllo 21 con `create_session` (catena 6 di 8). Scritto da Controllo 21 il 22/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 22 · v43 e confronto`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 22 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-22 23:17 · [AVVIO] Sei la chat parallela Controllo 21 di Parigi in tasca, linea «Controllo»… → avvio come Controllo 21; C22 fatto (v43 pronta, 35cc440), DOMANDA 1 sulla pubblicazione

Ultimo, intero:
> [AVVIO] Sei la chat parallela Controllo 21 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».

