# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 20 `session_01Rwcxc7EAGCUGyWhBTz3aWr`, 22/11 23:15 ora italiana, chiusa alla soglia; la apre la Controllo 20 con `create_session` (catena 5 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43. Questa sessione è stata prima la vecchia Controllo 14 (fermata alle ~17:05), poi Mario l'ha ripresa come Controllo 20 (22/11 ~22:40 «Adesso voglio continuare qua»).
- **v42 ONLINE** (verifica: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 42}`, letto alle 23:14; PR #43 squash su main, main riunito nel ramo, diff vuoto). Prove locali su 9192b19: web app 72/72, scritte 20/20, `--controlla` VERO, colori ok. Dentro: C24 pezzo 2 (riquadro «Il vostro alloggio», domenica secondo l’alloggio, n. 1 Chessy 8:44) + novità v42 in `VERSIONI`. Ok di Mario: «Se è tutto verde, pubblica».
- **Da non rifare:** v41 e v42 (online); C25; misure della testata (`docs/lavori-in-corso/C23-testata-leggera.md`); prove di C24 e «Nascondi» adattate alla rosa.
- **Già deciso da Mario (non richiedere):** **Alloggi: le scelte sono solo tre: n. 8 Moxy, n. 16 e n. 23; più probabili i due appartamenti (16 e 23): guida e itinerario con molta cura soprattutto su quelli** (Mario 22/11 ~23:16, `docs/lavori-in-corso/C22-controllo-itinerari.md`). C24 → tre riquadri (1), rosa ovunque con consiglio e «Tutti i 35» (1), riquadro «Il vostro alloggio» completo (1); guida giorno per giorno secondo l’hotel, soprattutto domenica coi mercatini, «molto accurato». **Fasci di luce del faro: restano** (Mario 20:07 «mi piaceva il fascio di luce»). Priorità: **prima la guida, poi la grafica** (Mario 20:03).
- **Cosa preme a Mario adesso:** la guida dei giorni secondo l’hotel scelto, «con molta cura», «c’è un viaggio di mezzo». Poi la luna sfocata (foto 22:08).
- **Luna** (C23): sul telefono di Mario parte giusta e **dopo un po’ diventa una macchia sfocata** (foto v41 22:08 in `archivio/2026-11-22-c23-v41/`; già a volte nella v39). Ipotesi e prova proposta in `docs/lavori-in-corso/C23-testata-leggera.md`. Da fare DOPO la guida.
- Prova «dicembre: service worker suo» (🐞 in DA-FARE): girata da sola 12 volte, 12 verdi (script in scratchpad, non salvato): da sola non si riproduce; ipotesi carico della prova intera, non provata.

## Cosa è stato fatto (Controllo 19 e 20) · verifica: `git show --stat 35d27bb 9e746c4 c479179 9192b19`
- Controllo 19: C24 pezzo 2, 5 prove nuove, 3 foto (`archivio/2026-11-22-c24-guida-v42/`), riga ERRORI «foto senza scritta» ricapitato; n. 23: su Booking manca la data della cancellazione gratis → il riquadro dice di leggerla prima di pagare.
- Controllo 20: scorte della 19 unite (fermata dal limite), v42 pubblicata (sopra); in DA-FARE voce 👁 della v42, voce 👁 della luna (C23), riga «Aspetta Mario» per l’ok al controllo delle foto senza scritta.

## Strade provate e scartate
- Lucine animate su `fill-opacity` (niente strati): 4 volte più lavoro di disegno → scartata.
- Fasci del faro tolti (sembravano la «riga» del video): Mario li voleva → rimessi identici alla v40.
- Rifare la luna sfocata in Chromium di prova: lì è sempre nitida (anche con zoom simulato), non si riproduce → la prova vera è il telefono di Mario.

## Prossimi passi
1. **Guida e itinerario curati sui tre alloggi possibili (n. 8 Moxy, n. 16, n. 23; prima 16 e 23, Mario ~23:16) e controllo dei dati della guida C22** (promesso a Mario 23:15, parte subito, non dipende da risposte): orari dei treni (domenica sera, giovedì per Orly), n. 8, 16 e 23 (ingresso, cancellazione gratis, messaggio), ogni fatto dalla pagina ufficiale con link nelle fonti; errori trovati → correzione, prove, foto se cambia l’aspetto. Risposta alla 🛑 DOMANDA 1 della Controllo 14 (alloggi spenti, consiglio 1) e all’ok del controllo delle foto (`.claude/`, E59) → farli.
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
22/11 ~23:16 (intero in fondo): le scelte sono tre, Moxy (n. 8) o i due appartamenti (n. 16 e 23), più probabili questi → guida e itinerario con molta cura su quelli (prossimo passo 1). Prima: «Dopo sai che cosa devi fare?» → piano; «Se è tutto verde, pubblica» → v42 online; «voglio continuare qua» → Controllo 20. Controllo Da fare: 2 voci aggiunte (👁 luna C23, riga «Aspetta Mario» del controllo delle foto); la richiesta delle 23:16 è già nella voce C22.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 21
la apre la Controllo 20 con `create_session` (catena 5 di 8). Scritto da Controllo 20 il 22/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 21 · dati della guida`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 21 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-22 17:00 · [AVVIO] Sei la chat parallela Controllo 14 di Parigi in tasca, linea «Controllo»… → avvio come Controllo 14; messaggi delle scorte nel registro (e334c66); prova del service worker 12/12 verde (nota in DA-FARE)
- 2026-11-22 23:08 · No, cos'hai capito? Ti ho mandato la chat dell'altra. Ti ho mandato la chat dell… → questa sessione = Controllo 20 (f690abc)
- 2026-11-22 23:09 · Se è tutto verde, pubblica. → v42 online (PR #43, 9192b19, versione.json = 42 alle 23:14)
- 2026-11-22 23:14 · Dopo sai che cosa devi fare? Sei già informato? → risposto col piano e la DOMANDA 1 della Controllo 14

- 2026-11-22 23:15 · Ok, va bene. Ehm, Non solo Moxie… → C22: scelte solo n. 8, 16, 23; guida curata su 16 e 23 (Già deciso, prossimo passo 1)

Ultimo, intero:
> Ok, va bene. Ehm, Non solo Moxie, cioè non so se noi dobbiamo prendere quello di Hotel Moxie, più che altro gli altri due che ti avevo detto. Ehm, Te l'avevo segnati. Gli altri due appartamenti, probabilmente andremo lì. Comunque le scelte sono tre, o Moxie o quei due appartamenti che ti ho detto. Quelli con molta cura, l'itinerario e la guida che si basano molto su quelli, che probabilmente sceglieremo quelli.
