# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 1 `session_01WTjqUxeDzvNf7FCCkrmhkz`, 22/11 00:43 ora italiana, chiusa alla soglia; la apre la Controllo 1 con `create_session` (catena 1 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb.

- **Già deciso da Mario (non richiedere):** alloggi 14→17 e **in priorità 13→17** (22/11 ~00:15); ricerca profonda nuova con i suoi criteri (non cari, ≤ ~12 min a piedi dalla RER, vicino a Disney, voto ≥ 8 e pulizia buona, senza auto), anche B&B, affittacamere, hotel, appartamenti; pagina riordinata «ordinata, chiara, professionale, niente listoni mischiati» con schede divise per tipo; «vai da solo e pubblica» (22/11 ~00:20: pubblicare senza aspettare le foto); 2 aiutanti per la ricerca. La DOMANDA 3 della Principale 11 (impaginazione) è chiusa: schede in basso.
- **Da non rifare:** ricerca C12 (2 aiutanti, 120+ posti controllati: `research_notes/Parigi mercatini e Disneyland dicembre/alloggi_ricerca_profonda_hotel.md` e `alloggi_ricerca_profonda_appartamenti.md`); v17 online (pagina a 4 schede, PR #18); controllo doppioni dei 5 Airbnb migliori (non sono in pagina).
- **Cosa preme a Mario adesso:** la **v18**: consiglio ★ sul 13→17, n. 31–35 (5 Airbnb), camera di Bussy nel gruppo B&B. Piano preciso, passo per passo: `docs/lavori-in-corso/C12-ricerca-profonda-alloggi.md` «Piano v18».

- v17 ONLINE (22/11 00:34, PR #18 unita): verifica `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/ | grep -c tyswitch` → 1 o più. Prove sull'ultimo commit: web app 37/37, scritte 20/20, `fai-dicembre.py --controlla` VERO, colori VERO, kit 43/43.
- La pagina di dicembre è di questa catena (la Principale non la tocca: `docs/PASSAGGIO-CONSEGNE.md`). Principale attiva: «Principale 22» (`session_01WTjqUtegBCzTHdbgdaXDm1`).

## Cosa è stato fatto (Controllo 1)
- C6 riordino: script delle schede in fondo a `dicembre/parigi-disney-natale.html` (blocco `<script>` a parte dopo quello principale; sezioni assegnate per id in `T`; `body[data-tab]`; `openCard`/`closeCard` con `history`; interruttore `.tyswitch` su `#scD` con `tyOf()` dal sottotitolo; `scrollIntoView` avvolto per aprire la scheda giusta), CSS «C6 …» prima di `@media (prefers-reduced-motion`. Titoli corti con `.sec-ans` (id `a-…`; i ticket scrivono in `#a-tr`). Passo 1: prima le 4 notti, Parigi dentro `details.sc-par` (`PO`).
- Dettagli e stato: `docs/lavori-in-corso/C6-pagina-ordinata.md`, `C12-ricerca-profonda-alloggi.md`.
- Foto mandate: `archivio/2026-11-22-bozza-schede.jpg`, `archivio/2026-11-22-v17-schede.jpg`.

## Strade provate e scartate
- Scrivere il riordino nella pagina mentre la Principale 21 faceva la v16: scartato, salvato come patch e applicato dopo la v16.
- Jolie chambre (Bussy) dentro il motore: scartato, il motore conosce solo le stazioni VDE e CH: va in un riquadro fisso nel gruppo B&B.
- Aggiornare tutti i prezzi dell'aiutante: no, molti sono di camere diverse (es. Relais 763 € senza letto garantito contro 908 € matrimoniale); solo il n. 30 è da cambiare.

## Prossimi passi
1. v18 dal «Piano v18» di C12 (punti 1–7), poi foto a Mario del consiglio nuovo e di 2 schede nuove.
2. Chiudere le voci 👁 di `docs/DA-FARE.md` sezione 1 (pagina riordinata, alloggi della ricerca, consiglio 13→17, camera di Bussy) solo quando Mario le vede.

## Blocchi e rischi
- Prezzi letti il 21/11: possono salire. Airbnb n. 34: cancellazione gratuita solo 24 ore.
- La prova «dicembre: service worker suo» è caduta 2 volte su 4 con altre prove insieme sul computer: lanciarla da sola.

## Ultimo messaggio di Mario
«vai da solo e pubblica
prendi 2 agenti
dividi bene le cose non listoni mischiati tutto attaccato
tutto anche b&b affittacamere hotel  appartamenti ecc ecc»

## Messaggio di Mario arrivato dopo l'handoff (22/11 ~00:45, con foto `archivio/2026-11-22-mario-dormire-tasto-tutti.jpg`: scheda Dormire, elenco Hotel)
> qui metti un tasto tutti non solo hotel b&b ecc e metti anche in bista distanza Disney con tempi e km a piedi rer a piedi
>
> Cerca meglio anche su siti privati Non per forza Booking, Airbnb ecc ecc, anche siti privati che si va a risparmiare sulla commissione dei portali. Metti altri hotel in base ai miei requisiti, solo quelli validi che possono soddisfare le nostre esigenze. Cerca bene ovunque 
>
> Se vuoi differenziare bene con magari evidenziando, con colori, con font diversi, spaziature, fai pure, almeno si capisce bene tutto.  usa  /plugin install frontend-design@claude-plugins-official
> su questo nostro sito rifai tutto con frontend da 0 solo migliorie
→ per la Controllo 2: tasto «Tutti» nell'interruttore; in vista nella riga di ogni alloggio distanza da Disney (tempo e km a piedi) e minuti a piedi dalla RER; ricerca anche sui siti diretti (senza portali); plugin `frontend-design`: prima leggerlo e dire a Mario costo e rischio (REGOLE «Divieti»), poi rifare l'aspetto da zero «solo migliorie».

Poi Mario (22/11 ~00:47): «e
usa 3 agenti» → per quel lavoro, 3 aiutanti.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 2
la apre la Controllo 1 con `create_session` (catena 1 di 8). Scritto da Controllo 1 il 22/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 2 · v18 alloggi nuovi`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 2 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-22 00:08 · https://kur0chanx.github.io/parigi-in-tasca/dicembre/?v=15 → controllata online (funziona), DOMANDA 1 risposta dal messaggio dopo
- 2026-11-22 00:10 · ma se ti scrivo dal 13 al 17 perché mi metti dal 14 che problemi hai? → spiegato (notte a Parigi del 21/11), DOMANDA 1 🛑 → risposta 00:13
- 2026-11-22 00:13 · metti alloggi dal 14 al 17 e in priorità dal 13 al 17 rifai la ricerca accurata … → C12 (2 aiutanti, file salvati), C6 (v17 online, PR #18)
- 2026-11-22 00:21 · vai da solo e pubblica prendi 2 agenti dividi bene le cose non listoni mischiati… → v17 pubblicata; Dormire diviso Hotel · B&B · Case; v18 pianificata (C12 «Piano v18»)

Ultimo, intero:
> vai da solo e pubblica 
> prendi 2 agenti 
> dividi bene le cose non listoni mischiati tutto attaccato
> tutto anche b&b affittacamere hotel  appartamenti ecc ecc

