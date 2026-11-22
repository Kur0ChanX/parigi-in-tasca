# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 18 `session_01QTFEqQQmp8CBZ7C3hCtNKP`, 22/11 22:10 ora italiana, chiusa alla soglia; la Controllo 19 la apre la Controllo 18 con `create_session` (catena 5 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb.
- **Già deciso da Mario (non richiedere):** C24 → tre riquadri (1), rosa ovunque con consiglio e «Tutti i 35» (1), riquadro «Il vostro alloggio» completo (1); guida giorno per giorno secondo l’hotel, soprattutto domenica coi mercatini, «molto accurato». **Fasci di luce del faro: restano** (Mario 20:07 «mi piaceva il fascio di luce»). Priorità: **prima la guida, poi la grafica** (Mario 20:03).
- **Da non rifare:** v41 (online, PR #42); prove di C24 e «Nascondi» adattate alla rosa (click su «Tutti»); C25 (apertura sul Piano); misure della testata (in `docs/lavori-in-corso/C23-testata-leggera.md`); scritta «Dormite al n. X» in cima ai giorni (nel ramo).
- **Cosa preme a Mario adesso:** la guida dei giorni secondo l’hotel scelto, «con molta cura», «c’è un viaggio di mezzo». Poi la luna sfocata (foto 22:08).
- **v41 online** (verifica: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 41}`; PR #42 alle 20:16, squash su main, main già riunito nel ramo). Giro in locale su 2f75bc7: `--controlla` VERO, colori 0 falsi, web app 67/67, scritte 20/20. Dentro: C25 (apre sempre sul Piano in cima; dopo 30 minuti fuori torna al Piano), C24 pezzo 1, C23 (via `lucGrp`, via `will-change` dei `.par`, testata ferma a pagina ingrandita; fasci del faro come v40).
- **Nel ramo, NON pubblicato:** C24 pezzo 2 punto 1 = `dormeDi(d)` in `renderDays` (riga `.dorme-day` in cima a ogni giorno; verifica: `grep -c dormeDi dicembre/index.html` ≥ 2). Provato a mano (con e senza `?scelta=lo-16`); manca la prova automatica in `tools/prova-web-app.js` e la foto a Mario.
- **Luna** (C23): sul telefono di Mario parte giusta e **dopo un po’ diventa una macchia sfocata** (foto v41 22:08 in `archivio/2026-11-22-c23-v41/`; già a volte nella v39). Ipotesi e prova proposta in `docs/lavori-in-corso/C23-testata-leggera.md`. Da fare DOPO la guida.

## Cosa è stato fatto (Controllo 18)
- Video v40 guardato fotogramma per fotogramma; misure della testata con la traccia del browser (paint/stile/strati): i gruppi di lucine della v40 raddoppiavano il lavoro → tolti. Errore scritto in `docs/ERRORI.md` (+ storia).
- v41 pubblicata (sopra). C25 fatto. C24: piano della guida (pezzo 2) in `docs/lavori-in-corso/C24-scegli-dove-dormire.md` «Piano della guida», punto 1 fatto nel ramo.

## Strade provate e scartate
- Lucine animate su `fill-opacity` (niente strati): 4 volte più lavoro di disegno → scartata.
- Fasci del faro tolti (sembravano la «riga» del video): Mario li voleva → rimessi identici alla v40.
- Rifare la luna sfocata in Chromium di prova: lì è sempre nitida (anche con zoom simulato), non si riproduce → la prova vera è il telefono di Mario.

## Prossimi passi
1. **Guida (C24 pezzo 2)**, dal file C24 «Piano della guida»: prova automatica di `dormeDi`; punto 2 riquadro «Il vostro alloggio» in cima ai Giorni (come si entra: reception / cassetta / gestore di persona, da `AL[].sun`; domenica sera `P.sunT` e ultimo treno; giovedì `P.thuT`; cancellazione gratuita con data e `.ics`, es. n. 8 «fino al 13/12» da `pc`; messaggio in francese, n. 16 e 23 da `XXI`); punto 3 domenica secondo l’alloggio (n. 23 gestore di persona: avviso con ora proposta e messaggio pronto). Ogni fatto con fonte ufficiale. Foto a Mario, poi v42.
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
22/11 22:09 (foto v41 delle 22:08): «andava bene poi invece» → la luna parte giusta e poi si rovina: C23 aggiornato, da fare dopo la guida. Controllo Da fare: 0 voci aggiunte (20:03 e 20:07 → C24/C23 già in DA-FARE; 22:09 → riga C23 aggiornata).

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 19
la apre la Controllo 18 con `create_session` (catena 5 di 8). Scritto da Controllo 18 il 22/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 19 · guida dei giorni`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 19 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-22 19:37 · [AVVIO] Sei la chat parallela Controllo 18 di Parigi in tasca, linea «Controllo»… → testo d’avvio: testata v40 dal video, v41 online (PR #42)
- 2026-11-22 20:03 · Mi raccomando priorità massima nella guida poi pensiamo alla grafica della foto … → C24 prima di tutto (file C24 e C23)
- 2026-11-22 20:07 · mi piaceva il fascio di luce ora prosegui con la guida con molta cura → risposta alla DOMANDA 1: fasci rimessi (v41); piano della guida nel file C24
- 2026-11-22 22:09 · andava bene poi invece → foto in `archivio/2026-11-22-c23-v41/`, riga C23 in DA-FARE, dopo la guida

Ultimo, intero:
> andava bene poi invece

