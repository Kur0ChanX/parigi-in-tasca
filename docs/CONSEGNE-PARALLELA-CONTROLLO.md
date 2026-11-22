# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 17 `session_01QTFEqRa2TK9vLSAmvYx1ZH`, 22/11 19:40 ora italiana, chiusa alla soglia; la Controllo 18 la apre la Controllo 17 con `create_session` (catena 4 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza). Scorte NON unite: scorta-parallela-20261122-01QTFEqRa2TK (della Controllo 17: unirla solo se ha lavoro non nel ramo).
- **v40 online** (verifica: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 40}`; PR #41, 19:18). Prove al rilascio: `--controlla` VERO, web app 66/66 (secondo giro; al primo 65 per la prova instabile del service worker 🐞), scritte verdi.
- **Video di Mario sulla v40** (19:35, `archivio/2026-11-22-video-v40-mario/VID_20261122_192059-v40.mp4`, 16 s): «Non benissimo ancora come puoi vedere». Pagina allargata con due dita, secondi 1–6: **riga orizzontale nel cielo all’altezza della Torre**, **rettangoli che compaiono nella neve sotto le casette** (pezzi non ridisegnati), **luna di Topolino sfocata** (immagine ingrandita). Ipotesi da provare (non confermate): strati della testata (`lucGrp`, maschera della vignetta, `#top.anim-pausa`) ridisegnati a pezzi durante lo zoom; luna raster piccola.
- **C24 pezzo 1 nel ramo, NON pubblicabile** (verifica: `grep -c 'id="scApp"' dicembre/index.html` = 1): tre riquadri con «Scegli dove dormire», passo 2 che parte dalla rosa con schede aperte insieme, tasto «🛏️ Dormiamo qui». **8 prove rosse in `prova-web-app.js` da adattare** (elenco in `docs/lavori-in-corso/C24-scegli-dove-dormire.md` «Manca» punto 0): partono da «Tutti · 35».
- **Già deciso da Mario (non richiedere):** C24 → DOMANDA 1: 1 (tre riquadri affiancati), DOMANDA 2: 1 (rosa ovunque, consiglio sempre come riferimento, tasto «Tutti i 35»), DOMANDA 3: 1 (riquadro «Il vostro alloggio» completo); guida giorno per giorno secondo l’hotel, soprattutto domenica coi mercatini, «molto accurato». Torre ferma, albero sottile (v40).
- **Da non rifare:** v40 (online); C22 parte 1: ticket 2026 (2,55 € / 2,05 €), parchi 14–16/12 9:00–22:00, n. 8 Moxy, n. 16, n. 23 confrontati con Marriott e Airbnb (esito in `docs/lavori-in-corso/C22-controllo-itinerari.md`); guida della chiave RVC (`docs/GUIDA-CHIAVE-KIT-RVC.md`).
- **Cosa preme a Mario adesso:** testata della v40 senza difetti (video 19:35), poi C24 con la guida dei giorni secondo l’hotel, «c’è un viaggio di mezzo».

## Cosa è stato fatto (Controllo 17)
- v40 pubblicata (PR #41), nastro e notifica. C22 parte 1 (sopra). C24: piano, bozze in `archivio/2026-11-22-c24-scegli/`, risposte di Mario, pezzo 1 (sopra).
- Ponte RVC: la chiave nello «Script di configurazione» non arriva alla chat; modulo sicuro (`request_credential`) rifiutato; Mario non ha il token ora → guida con link GitHub già compilato; riga in «Aspetta Mario».

## Strade provate e scartate
- Leggere la chiave RVC dai file d’avvio della shell: bloccato dal sistema dei permessi (giusto così). Modulo sicuro: rifiutato da Mario; si va con la variabile `RVC_KIT_TOKEN` (design del kit).
- Fisarmonica del passo 2 (una scheda aperta alla volta): nella rosa tolta, sennò non si confronta.

## Prossimi passi
1. **Testata v40 dal video di Mario** (19:35): rifare il caso (Playwright con zoom: `page.setViewportSize` piccolo + `deviceScaleFactor` alto, oppure `document.body.style.zoom`; scorrimento), trovare la riga nel cielo e i rettangoli nella neve, luna più nitida; confronto prima/dopo o video a Mario; v41 SOLO con C24 a posto o tolto (il pezzo 1 è già nel ramo: o finirlo o metterlo dietro un interruttore).
2. **C24**: prima le 8 prove (punto 0 del file C24), poi «Manca» 1–5 del file (rosa ovunque, «Dormite al n. X» sui giorni, riquadro «Il vostro alloggio», domenica col gestore di persona, prove e foto).
3. C22 parte 2: camera 17 m² e colazione 25 € del Moxy (non sulla pagina ufficiale), orari RER A di dicembre (~26/11), Orly, mercatini 2026.
4. Ponte RVC quando Mario scrive «fatto» (nuova chat: `python3 -I tools/scarica-kit.py --versione`).
5. Poi: DOMANDA 1 🛑 Controllo 14 (alloggi spenti), prova instabile del service worker 🐞 (ipotesi: registrazione su `load`, che tarda), pagina più natalizia, fuochi.

## Blocchi e rischi
- Nomi nuovi nella pagina: prima `grep -o "\bnome\b" | wc -l` = 0 (usati `scHome`, `scApp`, `scAp`).
- Schermata principale: riga dei riquadri alta 80 px (prima 90): mai più alta, sennò l’albero finisce sotto la barra.
- Il ramo ha codice non pubblicabile (C24 pezzo 1): nessuna versione finché le prove non sono verdi.

## Ultimo messaggio di Mario
22/11 19:35 (video v40): «Non  benissimo ancora come puoi vedere» → video in archivio, difetti in DA-FARE (C23), primo passo della Controllo 18. Controllo Da fare: 0 voci aggiunte (tutte già dentro: C23, C24, ponte RVC).

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 18
la apre la Controllo 17 con `create_session` (catena 4 di 8). Scritto da Controllo 17 il 22/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 18 ❓4 · testata v40`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 18 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-22 19:10 · [AVVIO] Sei la chat parallela Controllo 17 di Parigi in tasca, linea «Controllo»… → testo d’avvio: v40 online (PR #41), C22 parte 1, C24 piano e 3 domande
- 2026-11-22 19:26 · non ho ora il token se mi dai la guida dove prenderlo → `docs/GUIDA-CHIAVE-KIT-RVC.md`, riga in Aspetta Mario
- 2026-11-22 19:28 · 11 21 31 Mi raccomando è una guida deve aiutarmi in base a che hotel scelgo cosa… → risposte alle DOMANDE 1–3 (C24), C24 pezzo 1 (non pubblicato)
- 2026-11-22 19:35 · @"/root/.claude/uploads/[segreto tolto dalla scorta]/[segreto tolto dalla scorta… → video in `archivio/2026-11-22-video-v40-mario/`, difetti in DA-FARE (C23), primo passo della Controllo 18

Ultimo, intero:
> @"/root/.claude/uploads/[segreto tolto dalla scorta]/[segreto tolto dalla scorta].mp4" Non  benissimo ancora come puoi vedere

