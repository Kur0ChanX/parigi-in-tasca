# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 19 `session_01QTFEqSjyGg65BtFyBPPGGk`, 22/11 22:28 ora italiana, fermata dal limite delle 5 ore durante «passaggio account salva»; consegne salvate dalla vecchia Controllo 14 `session_01Rwcxc7EAGCUGyWhBTz3aWr`; CAMBIO ACCOUNT: la Controllo 20 la apre Mario nell'altro account)
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb.
- **Già deciso da Mario (non richiedere):** C24 → tre riquadri (1), rosa ovunque con consiglio e «Tutti i 35» (1), riquadro «Il vostro alloggio» completo (1); guida giorno per giorno secondo l’hotel, soprattutto domenica coi mercatini, «molto accurato». **Fasci di luce del faro: restano** (Mario 20:07 «mi piaceva il fascio di luce»). Priorità: **prima la guida, poi la grafica** (Mario 20:03).
- **Da non rifare:** v41 (online, PR #42); prove di C24 e «Nascondi» adattate alla rosa (click su «Tutti»); C25 (apertura sul Piano); misure della testata (in `docs/lavori-in-corso/C23-testata-leggera.md`); scritta «Dormite al n. X» in cima ai giorni (nel ramo).
- **Cosa preme a Mario adesso:** la guida dei giorni secondo l’hotel scelto, «con molta cura», «c’è un viaggio di mezzo». Poi la luna sfocata (foto 22:08).
- **v41 online** (verifica: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 41}`; PR #42 alle 20:16, squash su main, main già riunito nel ramo). Giro in locale su 2f75bc7: `--controlla` VERO, colori 0 falsi, web app 67/67, scritte 20/20. Dentro: C25 (apre sempre sul Piano in cima; dopo 30 minuti fuori torna al Piano), C24 pezzo 1, C23 (via `lucGrp`, via `will-change` dei `.par`, testata ferma a pagina ingrandita; fasci del faro come v40).
- **v42 in prova, NON pubblicata** (`dicembre/versione.json` ancora 41): C24 pezzo 2 fatto nel ramo (commit `35d27bb`): `dormeDi` in cima a ogni giorno, riquadro «Il vostro alloggio» in cima ai Giorni (come si entra, domenica sera treno e arrivo, giovedì uscita e ultimo treno, cancellazione gratis con promemoria Google Calendar e `.ics`, indirizzo e messaggio in francese), avviso in cima alla domenica (n. 23 gestore di persona, n. 16 ora a Vincent entro 11/12); corretto n. 1 giovedì (Chessy 8:44, non Val d’Europe 8:47). Prove 81/81, scritte senza sovrapposizioni. Foto `archivio/2026-11-22-c24-guida-v42/v42-c24-1..3.jpg` (commit `9e746c4`). Aspetta la 🛑 DOMANDA 1 della Controllo 19 (consiglio 1 = pubblica).
- **Luna** (C23): sul telefono di Mario parte giusta e **dopo un po’ diventa una macchia sfocata** (foto v41 22:08 in `archivio/2026-11-22-c23-v41/`; già a volte nella v39). Ipotesi e prova proposta in `docs/lavori-in-corso/C23-testata-leggera.md`. Da fare DOPO la guida.

## Cosa è stato fatto (Controllo 19) · verifica: `git show --stat 35d27bb 9e746c4 c479179`
- C24 pezzo 2 (sopra), 5 prove nuove in `tools/prova-web-app.js`; 3 foto a Mario; DOMANDA 1 in «## 0. Aspetta Mario».
- Errore «foto di lavoro aperte senza la scritta in alto» ricapitato: riga in `docs/ERRORI.md` (c479179). Proposta a Mario: il controllo automatico delle foto blocca le immagini senza fascia in alto (tocca `.claude/`, serve il suo ok scritto, E59).
- n. 23: su Booking non è scritto fino a quando si cancella gratis → il riquadro dice di leggerlo prima di pagare (date non inventate).

## Strade provate e scartate
- Lucine animate su `fill-opacity` (niente strati): 4 volte più lavoro di disegno → scartata.
- Fasci del faro tolti (sembravano la «riga» del video): Mario li voleva → rimessi identici alla v40.
- Rifare la luna sfocata in Chromium di prova: lì è sempre nitida (anche con zoom simulato), non si riproduce → la prova vera è il telefono di Mario.

## Prossimi passi
1. Risposta di Mario alla 🛑 DOMANDA 1 (Controllo 19): = 1 → pubblica v42 (`versione.json` = 42, giro in locale, PR verso `main`, skill `pr`); = 2 → ritocchi chiesti, foto, di nuovo la domanda. Intanto (lavoro indipendente, già iniziato dalla 19): controllo dei dati della guida C22 (orari dei treni, n. 8, 16 e 23), ogni fatto con fonte ufficiale. Ok di Mario sulla proposta dell’hook delle foto → farlo (file `.claude/`).
2. C26 «Questo o quello?» con gli hotel scelti da Mario + rosa in tutte le liste (C24 «Manca» 1).
3. Luna sfocata (C23): prova «luna ferma col bagliore dentro l’immagine» e video/foto da Mario.
4. C22 parte 2 (Moxy 17 m² e colazione, orari RER A di dicembre ~26/11, Orly, mercatini 2026); ponte RVC quando Mario scrive «fatto»; DOMANDA 🛑 Controllo 14.

## Blocchi e rischi
- Nomi nuovi nella pagina: prima `grep -o "\bnome\b" | wc -l` = 0.
- Schermata principale: riga dei riquadri alta 80 px, mai di più (albero sotto la barra).
- Le prove servono la cartella del repo dal vivo: mai modificare `dicembre/` mentre girano.
- Prove che contano tutti e 35 alloggi: prima click su `#scegli [data-ro-f="0"]` («Tutti»), il passo 2 parte dalla rosa.
- `docs/ERRORI.md` a 10,4 KB (tetto 10 KB): alla prossima riga spostare una vecchia in ERRORI-STORIA.

## Ultimo messaggio di Mario
22/11 22:28 (alla Controllo 19): «passaggio account salva» → la 19 ha avuto il limite delle 5 ore a metà; Mario ha mandato alla vecchia Controllo 14 le foto dello schermo (22:29) e le consegne le ha salvate lei. Controllo Da fare: 0 voci aggiunte (DOMANDA 1 già in «Aspetta Mario»).

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 20
CAMBIO ACCOUNT: la apre Mario nell'altro account (skill `cambio-account`), non `create_session`. Scritto dalla vecchia Controllo 14 per la Controllo 19 il 22/11/2026.

Titolo: `🟩 🗼 Controllo 20 · guida dei giorni`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 20 di Parigi in tasca, linea «Controllo» (repo Kur0ChanX/parigi-in-tasca, ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi». I numeri delle sessioni continuano da qui.
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-22 19:37 · [AVVIO] Sei la chat parallela Controllo 18 di Parigi in tasca, linea «Controllo»… → testo d’avvio: testata v40 dal video, v41 online (PR #42)
- 2026-11-22 20:03 · Mi raccomando priorità massima nella guida poi pensiamo alla grafica della foto … → C24 prima di tutto (file C24 e C23)
- 2026-11-22 20:07 · mi piaceva il fascio di luce ora prosegui con la guida con molta cura → risposta alla DOMANDA 1: fasci rimessi (v41); piano della guida nel file C24
- 2026-11-22 22:09 · andava bene poi invece → foto in `archivio/2026-11-22-c23-v41/`, riga C23 in DA-FARE, dopo la guida

Ultimo, intero:
> andava bene poi invece

