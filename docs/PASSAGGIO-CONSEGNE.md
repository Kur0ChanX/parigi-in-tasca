# Passaggio di consegne

Sessione attuale: #6 (dopo la #5 `session_01WTjqUubYgzDaGVKWcJe9n8`, chiusa alla soglia 21/11 16:43; la apre la #5 con `create_session` (catena 5 di 8)).

- **Già deciso da Mario (non richiedere):** viaggio dom 13 → gio 17/12/2026 in 2, senza auto; dom mercatini a Parigi, lun–mer Disneyland; alloggio con voto sopra 8 e pulizia buona, comodo senza auto (niente taxi né Uber); vanno bene hotel, B&B, appartamenti, stanze; kit installato (21/11), icona 🗼, ramo `claude/parigi-ramo-definitivo`; pagina «un po' disneyana, un po' mercatini», sera romantica; DUE colori a scelta (Blu notte · Vin brulé, interruttore sotto il titolo: Mario «va bene» 21/11).
- **Da non rifare:** la ricerca alloggi (fatta dalla #4 con 2 aiutanti: `alloggi_spa_comodi.md` 10 schede, `alloggi_ricerca_ampia.md` 16 schede, prezzi Booking 13→17 del 21/11); la sezione «Alloggi» della pagina (15 numerati, pubblicata); la pagina blu e l'interruttore dei colori (pubblicati); il mio consiglio unico n. 8 Moxy con cancellazione gratuita (versione 5, pubblicata dalla #5); il confronto delle 28 foto (`hotel_foto_booking_mario.md`); `add_repo` di RVC (vietato).
- **Cosa preme a Mario adesso:** scegliere e prenotare l'alloggio (prezzi che salgono, cancellazioni gratuite che scadono il 29/11) scrivendo il NUMERO (1–15) della pagina (mio consiglio: n. 8 Moxy con cancellazione gratuita, circa 577 €); i mercatini (domenica) sono importanti per lui; poi biglietti Disney.

## Stato (21/11 16:43 ora italiana)
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-principale-20261121-01WTjqUubYgz/claude/parigi-ramo-definitivo.
- Kit 43 · 19/11/2026 · Preferenze v38 installato, prove 43/43 verdi (verifica: `docs/kit-progetto/VERSIONE`; tutti i `tools/test-*.py` con `python3 -I`).
- Pagina «Parigi e Disney a Natale» pubblicata come Artifact: https://claude.ai/artifact/NKYKfdKA3Hj9MNABDp1Wap (privata; sorgente `dicembre/parigi-disney-natale.html`; **versione 5** del 21/11 ~16:42: riquadro «Il mio consiglio» n. 8 in cima agli alloggi, «In breve», segno sulla scheda e in tabella, lista «Da fare»; prima: blu notte, interruttore dei colori, 15 alloggi numerati). Verifica: la sorgente nel ramo è quella pubblicata (ultimo commit della pagina = «versione 5 pubblicata»). Mario non l'ha ancora vista dal vivo.
- Sito `main` (https://kur0chanx.github.io/parigi-in-tasca/) ancora con la guida 22–26/11: non toccato (verifica: `git diff origin/main -- index.html` vuoto).

## Riferimenti
- Appunti: `research_notes/Parigi mercatini e Disneyland dicembre/` → `hotel_val_d_europe.md`, `hotel_disney.md`, `biglietti_disney.md`, `mercatini_natale.md`, `trasporti_bagagli.md`.
- Foto di Mario di oggi (prenotazione voli, Ki Space su Booking): solo in chat, non salvate in `archivio/` (contengono il codice di prenotazione: non vanno nel repo).
- Confronto alloggi della #3: `research_notes/Parigi mercatini e Disneyland dicembre/hotel_foto_booking_mario.md` (candidati vicini alla RER con pulizia e orari; lontani; tutte le strutture delle foto; costi dei trasporti; cose non verificate).
- Ricerca alloggi della #4: `research_notes/Parigi mercatini e Disneyland dicembre/alloggi_spa_comodi.md` (spa, Disney, love room) e `alloggi_ricerca_ampia.md` (hotel, B&B, appartamenti, stanze; Bussy/Torcy non conviene; partire dal 12 costa +114–176 €).
- Foto per Mario della #5 (mandate): `archivio/2026-11-21-consiglio-alloggio/1…4-*.jpg` (riquadro del consiglio, scheda del n. 8, tema chiaro).
- Foto per Mario della #4 (mandate): `archivio/2026-11-21-pagina-blu/confronto-blu.jpg`, `interruttore-colori.jpg`.
- 28 foto di Booking di Mario (ricerca «Moxy Paris Val d'Europe · 12–17 dic», 5 notti, 2 adulti; Moxy 689 €, Residence du Parc 546 €, molti appartamenti privati con voti 8–9,8): `archivio/2026-11-21-booking-12-17-dic-mario/01…28-booking.jpg` (600 px).

## Sessione appena chiusa
- #5 (Opus 5.5 · Extra): unita la scorta della #3 (registro: mancavano i messaggi delle 15:57 e 16:10; rimessi a mano ultimo messaggio e ultima risposta più nuovi, che il merge aveva riportato indietro); unite le aggiunte della #4 dopo l'handoff; fatto il consiglio unico chiesto da Mario e pubblicata la versione 5.
- Consiglio scelto: **n. 8 Moxy con cancellazione gratuita (~577 €, stima)**. Perché: domenica arrivo verso le 22:00 con le valigie (reception 24 ore, 8 min dal treno), ogni sera parchi fino alle 22:00, giovedì uscita alle 8:30, pulizia 9,0, libertà di annullare (notti 12/13 ancora aperte, scioperi). Lascia: camera 17 m², niente spa. Piano B: n. 9 ibis; n. 15 Elysée se si libera sul sito ufficiale a prezzo simile. Scartati come consiglio unico: n. 12 (spa usabile solo la mattina presto: chiude alle 22 come i parchi), n. 4 (15–20 min a piedi con valigie, arrivo max 23:00, silenzio dalle 20), n. 6 (non rimborsabile, 39 recensioni, arrivo max 23:00).
- Errore trovato e corretto: appunti, filtro «Spa» e scheda del n. 12 dicevano «spa dopo i parchi»; riga in `docs/ERRORI.md`.
- Domanda «quale alloggio» e «notti» in «## 0. Aspetta Mario» ora col consiglio (2 = Moxy; notti 1 = dal 13) e la riga «📌 Di cosa parliamo».
- Controllo Da fare: 0 voci aggiunte (l'unica richiesta, il consiglio unico, aveva già la sua voce 👁).

## Strade provate e scartate (perché; così la prossima non le rifà)
- Negozio ufficiale Disney e motore di prenotazione Disney con browser automatico: 403, bloccati. Prezzi dai siti non ufficiali concordi; il vero si legge alla cassa.
- Booking dal computer senza accesso: non mostra lo sconto Genius né il prezzo «solo su mobile» di Mario (circa −12 %); il prezzo vero lo legge Mario nell'app.
- Elenchi di Booking con browser automatico: pagina vuota; cambiare l'«user agent» = aggirare un blocco, vietato. Funziona `web_fetch` di Parallel Search sulle singole schede.
- Bussy-Saint-Georges e Torcy: stesso biglietto, corse più lunghe, quasi tutto esaurito. B&B veri con colazione: arrivo massimo 20–22, domenica non va senza ok scritto del gestore.
- Ripubblicare l'Artifact senza leggere la versione online: rifiutato; serve leggere TUTTE le righe della copia salvata (costa ~50k token). Prossima volta: `Artifact read` senza `path` solo prima del publish; poi `diff` della copia (senza la prima riga) con la sorgente del ramo per sapere se online è cambiato qualcosa.
- Inserire CSS dopo `.pick:hover{…}` con una sostituzione: quella regola sta dentro `@media (hover:hover){…}` sulla stessa riga, il CSS nuovo finiva dentro la media query. Controllare la riga intera prima di inserire.

## Prossimi passi
1. All'avvio: `subscribe_pr_activity` sulla PR #2 (bozza, nessun giro: niente da fare finché Mario non dice «unisci»).
2. Quando Mario risponde col numero dell'alloggio (se 2 = Moxy, gli orari della pagina sono già giusti: basta togliere «usano il Moxy come esempio» e segnare la scelta) (riga 🛑 in «## 0. Aspetta Mario»): aggiorna gli orari del giorno per giorno (voce in `docs/DA-FARE.md` sezione 2: oggi usano il Moxy come esempio: `MOXY`, `goPark`, `lastTrain`, check-in domenica, check-out giovedì, note «Con Ki Space»), il «Da fare» della pagina e i costi; poi ripubblica (Edit + publish con lo stesso file; prima `Artifact read` se la pagina è cambiata).
3. Se Mario sceglie un alloggio con bus o navetta (1, 2, 3, 7, 11, 13): verifica orari del bus 2233/2234 o navetta per domenica sera e la sera dopo i parchi (IDFM ufficiale).
4. Risposta «notti 13 o 12»: con 2 → prezzi 12→17 in `alloggi_ricerca_ampia.md` «Partire sabato 12».
5. Risposte «sito» e «unione»: vedi righe in «## 0. Aspetta Mario» (unione solo col suo ok scritto, skill `unione-pr`).
6. Se Mario vuole la seconda sera ai mercatini (proposta: mercoledì, Tuileries fino alle 23:45): aggiungerla al giorno di mercoledì.
7. Da ricontrollare la settimana prima (lista nella pagina): orari RER A del 13–17/12, scioperi, terminal Volotea a Orly.

## Blocchi e rischi
- Prezzi visti il 21/11: possono salire. Cancellazioni gratuite che scadono presto: 29/11 (n. 1, 4, 7, 10, 13), 6/12 (n. 11, 14), 8/12 (n. 12, solo camera 2 letti), 12/12 (n. 5).
- Appartamenti privati: niente reception, codici il giorno stesso, penali per pulizia (n. 10: 300 €), età minima 24–25 (n. 4, 10), silenzio dalle 20 (n. 4).
- Da verificare: navetta a chiamata del Relais Spa per tutti (non ufficiale), reception 24 ore del Crowne Plaza, linea del bus di Jungle Love, prezzo dell'Elysée sul sito ufficiale.

## Ultimo messaggio di Mario
«E comunque metti poi il tuo consiglio poi, che va a togliere, insomma, quello che avresti fatto tu anche.» (arrivato nella #4 dopo l'handoff → voce in `docs/DA-FARE.md` sezione 1: il mio consiglio unico sull'alloggio, nella pagina e nella domanda)

Prima: «va bene» (risposta alla domanda «interruttore dei colori sotto il titolo»: scelta 1, va bene così)

Prima: «Mettile tutti e due i colori selezionabili, dai. Sia quello vino, sia quello blu.» → interruttore Blu notte · Vin brulé, pubblicato

Prima: «mi raccomando i mercatini sono importanti c'è tutto vero?» → controllato: sì, risposta con la tabella della domenica

Prima: «Queste sono solo alcune, te le ho mandate un po' così a caso, cercale tu al meglio. Queste sono solo così un pochino a caso, però cercale tu al meglio, in base alle tue ricerca intelligente e profonda.
Sì, vanno bene anche appartamenti privati, non ce ne frega niente. Non solo appartamenti privati, insomma, valutiamo tutto.
Hotel B&B appartenenti  stanze vanno bene» (arrivato nella #3 dopo l'handoff → ricerca ampia e sezione Alloggi della #4)

## Numeri liberi
Prossimo E libero: E1.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-21 16:34 · [AVVIO] Sessione #5 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo cla… → 

Ultimo, intero:
> [AVVIO] Sessione #5 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo claude/parigi-ramo-definitivo): git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached», prima git checkout claude/parigi-ramo-definitivo).
> Leggi CLAUDE.md, docs/ERRORI.md e docs/PASSAGGIO-CONSEGNE.md; continua da sola dai «Prossimi passi».

