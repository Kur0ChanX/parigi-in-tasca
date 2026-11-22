# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 3 `session_01WTjqUwRSHUqXvqRfjgFGFA`, 22/11 01:33 ora italiana, chiusa alla soglia; la apre la Controllo 3 con `create_session` (catena 3 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261122-01WTjqUwRSHU/claude/parigi-ramo-definitivo.
- **v19 pronta ma NON online**: aspetta la DOMANDA 1 della Controllo 3 🛑 (riga in «## 0. Aspetta Mario» di `docs/DA-FARE.md`: 1 pubblica e stesso stile sugli altri pezzi · 2 più corta · 3 ritocca · 4 com'era). Dentro: scheda Dormire più chiara (C13 pezzo 1) + camera Airbnb a Bussy + nota del prezzo diretto della Résidence du Parc (C14). Verifica: `grep -c 'sc-k' dicembre/index.html` > 0 nel ramo, `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/ | grep -c 15868262` = 0 finché non è pubblicata.
- Prove sull'ultimo commit di codice (`1dc0839`): web app 42/42, scritte VERO (esito 0), `fai-dicembre.py --controlla` VERO, colori VERO.
- **Già deciso da Mario (non richiedere):** grafica «a pezzi» con foto prima/dopo (22/11 ~01:10); alloggi 13→17 in priorità; criteri (C12); «metti solo quelli validi»; plugin `frontend-design` non installato (consiglio, DOMANDA 2 senza risposta).
- **Da non rifare:** ricerca su siti diretti giro 1 e 2 (file `alloggi_siti_diretti_*.md` e `_2_*.md`: le catene bloccano i browser automatici, nessun altro alloggio valido); verifica della camera di Bussy; foto prima/dopo del pezzo 1 (già mandate).
- **Cosa preme a Mario adesso:** risposta alla DOMANDA 1 (aspetto della scheda Dormire, con dentro la camera di Bussy a 201 €), poi la pubblicazione.
- La pagina di dicembre è di questa catena (la Principale non la tocca). Principale attiva: «Principale 22».
- Controllo Da fare: 0 voci aggiunte (le richieste di Mario hanno già le loro voci 👁 in sezione 1).

## Cosa è stato fatto (Controllo 3)
- C13 pezzo 1 (`docs/lavori-in-corso/C13-aspetto-pagina.md`, piano grafico lì): colori per tipo `--ty-hotel` azzurro, `--ty-bb` lilla, `--ty-casa` verde acqua (scuro, chiaro, vino; contrasto ≥ 5,4); interruttore dei tipi colorato; «Ordina per» a tutta larghezza; legenda `.sc-leg` prima dell'elenco; schede di `#scD` con etichetta del tipo (`summary::before` da `data-ty`), barra a sinistra, cerchio del numero colorato, prezzo grande con `.sc-dt` («totale ±… €» o «★ consiglio», parametro `px` di `row()`), 3 riquadri `.sc-k` (Disney, RER con `rerK`, Pulizia). Prova v18 aggiornata ai riquadri. Foto: `archivio/2026-11-22-c13-dormire/` (mandate).
- C14 (`docs/lavori-in-corso/C14-siti-diretti-giro-2.md`): 3 aiutanti con Chromium; file `research_notes/…/alloggi_siti_diretti_2_{hotel,case,bb}.md`. Camera Airbnb 15868262 a Bussy ricontrollata da me (201 € / 151 €, gratis fino al 29/11 e 30/11, 4,95 su 722, WC in comune, arrivo 18–22) → secondo riquadro in `#scBB`, conteggio B&B = riquadri `.sc-xb`, prova nuova «C14». Nota prezzo diretto n. 3 (circa 410 €, stima). Foto `archivio/2026-11-22-c14-alloggi/` (mandate).

## Strade provate e scartate
- Prezzi diretti delle catene col browser automatico: bloccati (Marriott, IHG, Choice «Access Denied»; Accor Incapsula; Staycity Cloudflare; Elysée, All Suites, Ki Space DataDome; Residhome chiude). Non si aggira: restano «a mano» per Mario se li vuole.
- Siti diretti degli Airbnb n. 16–35: nessuno (host privati). 123home e GuestReady: voto sotto soglia.
- Foto dal file sorgente `parigi-disney-natale.html`: scritte rotte (manca `<meta charset>`); si fotografa sempre `dicembre/index.html`, tema **scuro** (quello di Mario), 412×915.

## Prossimi passi
1. Alla risposta della DOMANDA 1: «1» → pubblicare la v19 (skill `pr`: PR verso `main`, giro dove dice `tools/scegli-giro.py`, unione col verde, nastro), poi pezzo 2 = passo 1 della scheda Dormire (`#scN`, notti di domenica) con lo stesso stile, poi Piano, Giorni, Biglietti, ognuno con foto prima/dopo (script delle foto: rifarli come in C13, `colorScheme:'dark'`, `serviceWorkers:'block'`). «2» → riquadri più bassi (meno padding, etichetta e numero su una riga), nuove foto. «3»/«4» → come dice Mario.
2. Se Mario sceglie la camera di Bussy come consiglio: solo con un suo sì esplicito (oggi il consiglio è Moxy 4 notti).
3. Voci 👁 di `docs/DA-FARE.md` sezione 1: chiuderle solo quando Mario le vede online.

## Blocchi e rischi
- Prezzi letti il 21–22/11: possono salire. Camera di Bussy: cancellazione gratuita fino al 29/11; Jolie chambre fino al 29/11.
- Schede di `#scD` circa un quarto più alte (4 per schermata invece di 5): detto a Mario nel PARERE.
- Prova «dicembre: service worker suo» instabile (vedi Controllo 2): rilanciarla da sola.
- Nomi nuovi nella pagina: prima `grep -c '\bnome\b'` = 0 (E del 22/11).

## Ultimo messaggio di Mario
Arrivato alla Controllo 2 dopo il suo handoff (22/11 ~01:10), passato qui:
> qui metti un tasto tutti non solo hotel b&b ecc e metti anche in bista distanza Disney con tempi e km a piedi rer a piedi
>
> Cerca meglio anche su siti privati Non per forza Booking, Airbnb ecc ecc, anche siti privati che si va a risparmiare sulla commissione dei portali. Metti altri hotel in base ai miei requisiti, solo quelli validi che possono soddisfare le nostre esigenze. Cerca bene ovunque
>
> Se vuoi differenziare bene con magari evidenziando, con colori, con font diversi, spaziature, fai pure, almeno si capisce bene tutto.  usa  /plugin install frontend-design@claude-plugins-official
> su questo nostro sito rifai tutto con frontend da 0 solo migliorie  Come ti ho già detto nella scorsa sessione, usa tre agenti.
> E allora continuo a cercare se non hai trovato nessun alloggio diretto.
> a pezzi

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 4
la apre la Controllo 3 con `create_session` (catena 3 di 8). Scritto da Controllo 3 il 22/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 4 · grafica e alloggi`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 4 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-22 01:08 · [AVVIO] Sei la chat parallela Controllo 3 di Parigi in tasca, linea «Controllo» … → avvio fatto; poi il messaggio di Mario passato dalla Controllo 2 («a pezzi», siti diretti con 3 aiutanti): C13 pezzo 1 e C14 fatti in locale, DOMANDA 1 della Controllo 3

Ultimo, intero:
> [AVVIO] Sei la chat parallela Controllo 3 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».

