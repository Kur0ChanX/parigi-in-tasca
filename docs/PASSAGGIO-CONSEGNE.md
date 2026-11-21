# Passaggio di consegne

Sessione attuale: #3 (dopo la #2 `session_01WTjqUtoS2VAb6mUQypVwHC`, chiusa alla soglia 21/11 15:56; la apre la #2 con `create_session` (catena 2 di 8)).

- **Già deciso da Mario (non richiedere):** viaggio dom 13 → gio 17/12/2026 in 2, senza auto; dom mercatini a Parigi, lun–mer Disneyland; hotel con voto Booking sopra 8 e pulizia buona, comodo alla RER A Val d'Europe; kit installato (21/11), icona 🗼, ramo `claude/parigi-ramo-definitivo`; pagina moderna «un po' disneyana, un po' mercatini», effetto wow, professionale.
- **Da non rifare:** la ricerca (5 filoni, appunti in `research_notes/Parigi mercatini e Disneyland dicembre/`, dati del 21/11); la pagina (pubblicata); la grafica calda della pagina (versione 3, fatta dalla #2: aspetta solo l'ok di Mario); `add_repo` di RVC (vietato dal kit, vedi `docs/ERRORI.md`).
- **Cosa preme a Mario adesso:** scegliere e prenotare l'hotel (prezzi che salgono) guardando le sue 28 foto di Booking, con trasporti economici e veloci verso i parchi (niente taxi né Uber); poi biglietti Disney.

## Stato (21/11 15:56 ora italiana)
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorta della #2 unita (merge normale).
- Kit 43 · 19/11/2026 · Preferenze v38 installato, prove 43/43 verdi (verifica: `docs/kit-progetto/VERSIONE`; tutti i `tools/test-*.py` con `python3 -I`).
- Pagina «Parigi e Disney a Natale» pubblicata come Artifact: https://claude.ai/artifact/NKYKfdKA3Hj9MNABDp1Wap (privata; sorgente `dicembre/parigi-disney-natale.html`; verifica: la sorgente nel ramo è quella pubblicata, versione 3 del 21/11 ~15:53, grafica calda). Mario non ha ancora scritto di averla vista: promessa aperta (voce «👁 Lo vedi» in `docs/DA-FARE.md`, foto in `archivio/foto-dicembre/`).
- Sito `main` (https://kur0chanx.github.io/parigi-in-tasca/) ancora con la guida 22–26/11: non toccato (verifica: `git diff origin/main -- index.html` vuoto).

## Riferimenti
- Appunti: `research_notes/Parigi mercatini e Disneyland dicembre/` → `hotel_val_d_europe.md`, `hotel_disney.md`, `biglietti_disney.md`, `mercatini_natale.md`, `trasporti_bagagli.md`.
- Foto di Mario di oggi (prenotazione voli, Ki Space su Booking): solo in chat, non salvate in `archivio/` (contengono il codice di prenotazione: non vanno nel repo).
- 28 foto di Booking di Mario (ricerca «Moxy Paris Val d'Europe · 12–17 dic», 5 notti, 2 adulti; Moxy 689 €, Residence du Parc 546 €, molti appartamenti privati con voti 8–9,8): `archivio/2026-11-21-booking-12-17-dic-mario/01…28-booking.jpg` (600 px).

## Sessione appena chiusa
- #2 (Opus 5.5 · Extra): avvio, poi la richiesta di Mario arrivata dopo l'handoff della #1: pagina di dicembre «tanti mercatini luci e atmosfera natalizia avvolgente non triste».
- Fatto: colori caldi (fondo vin brulé, oro, abete, rosso; tema chiaro crema), fila di 11 casette del mercatino accese con festoni davanti al castello, Torre Eiffel dorata che scintilla, festone in cima alla pagina, cartolina del mercatino nella domenica e in fondo alla pagina, divisori di lampadine con alone. Testi, prezzi e orari non toccati. Ripubblicata sullo stesso link (versione 3). Prove: 400 e 1280 px, tema scuro e chiaro, nessun errore né scorrimento di lato; non provata su un telefono vero.
- Foto mandate a Mario (domanda in «## 0. Aspetta Mario»): `archivio/foto-dicembre/2026-11-21-pagina-calda-apertura.jpg` (prima/dopo) e `…-domenica-e-chiaro.jpg`.
- Idea detta a Mario nel parere, non fatta: aggiungere il mercatino di La Défense alla domenica (rischio orario armadietti 22:00, date 2026 da verificare).
- Errore: foto di lavoro aperte senza scritta in alto (E314) → riga in `docs/ERRORI.md`.
- Mentre lavoravo, nella #1 sono arrivate le 28 foto di Booking e il criterio trasporti (vedi «Ultimo messaggio»): non ancora guardate.
- Controllo Da fare: 1 voce aggiunta (hotel con le 28 foto e criterio trasporti, sezione 1).

## Strade provate e scartate (perché; così la prossima non le rifà)
- Negozio ufficiale Disney e motore di prenotazione Disney con browser automatico: 403, bloccati. Prezzi dai siti non ufficiali concordi; il vero si legge alla cassa.
- Booking dal computer senza accesso: non mostra lo sconto Genius né il prezzo «solo su mobile» di Mario; il prezzo vero lo legge Mario nell'app.
- Unire la scorta automatica `scorta-principale-20261121-01WTjqUtYZaK/…`: più vecchia del ramo, avrebbe rimesso `docs/ERRORI.md.prima-del-kit` già tolto. Non unita.

## Prossimi passi
1. All'avvio: `subscribe_pr_activity` sulla PR #2 (nessun controllo automatico sul ramo: solo `pulisci-scorte.yml` di notte).
2. Hotel (voce in `docs/DA-FARE.md` sezione 1): Mario ha scritto «aspetta le altre foto prima di pensare». Se scrive che ha finito (o non manda altro), guarda le 28 foto e fai per ogni candidato valido (voto sopra 8, pulizia buona): prezzo, minuti a piedi dalla RER A Val d'Europe o Chessy (o bus), costo e tempo mattina ai parchi, ultimo ritorno dopo le 22:00. Criterio di Mario: niente taxi né Uber, mattina economica e veloce, sera senza ore di viaggio né costi alti. Appartamenti privati: segnala check-in di sera e cauzioni.
3. Prima del confronto, domanda a Mario sulle date: la ricerca nelle foto è sab 12 → gio 17 (5 notti), il volo d'andata è dom 13 (4 notti). Arrivate un giorno prima? Riga in «## 0. Aspetta Mario».
4. Ricordare le righe di «## 0. Aspetta Mario» (blocco «⚠️ Aspettano te»); la domanda intera quando Mario scrive, una per messaggio con le foto.
5. Hotel scelto → nella pagina: scheda «Consigliato» sull'hotel scelto, orari di uscita lun–gio per quell'hotel, ripubblicare l'Artifact (prima `Artifact read` con `path: index.html` e confronto con `git show HEAD:dicembre/parigi-disney-natale.html`; poi publish con `url`: il primo publish viene rifiutato e conta come lettura, il secondo uguale passa), commit della sorgente.
6. Risposta «sito»: con 1 → nuova `index.html` per dicembre sul modello della guida di novembre; poi `python3 -I tools/controlla-colori.py`.
7. Risposta «unione»: unire la #2 solo col suo ok scritto (skill `unione-pr`).
8. Da ricontrollare la settimana prima (lista nella pagina): orari RER A del 13–17/12, scioperi, terminal Volotea a Orly.

## Blocchi e rischi
- Prezzi hotel visti il 21/11: possono salire. Tariffe più basse non rimborsabili.
- Pacchetti Disney prenotati a meno di 30 giorni: forse pagamento intero subito (due pagine ufficiali discordano); non serve finché non si sceglie Disney.

## Ultimo messaggio di Mario
«conta che dobbiamo non oagare una fucilata nei trasporti ubber o taxi per andare a Disneyland no spostarci per i mercatini vorremmo se è possibile la mattina per andare a Disneyland un opzione non troppo costosa e non troppo lenta per andare a Dianeyland e se non essere un problema ritornare a dormire con mille mila ore di viaggio o troppi costi» (con altre 8 foto di Booking: 21–28 nella stessa cartella)

Prima: «aspetta le altre foto prima di pensare» (con 20 foto di Booking, ricerca «Moxy Paris Val d'Europe · 12 dic - 17 dic», prezzi per 5 notti: `archivio/2026-11-21-booking-12-17-dic-mario/`; nota: il volo è dom 13, la ricerca parte dal 12)

Prima: «nella pagina tanti mercatini luci e atmosfera natalizia avvolgente non triste» (arrivato nella #1 dopo l'handoff → voce in `docs/DA-FARE.md` sezione 2, da fare subito)

Prima: «installa il kit  simbolo della torre va bene  ramo ok»

## Numeri liberi
Prossimo E libero: E1.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-21 15:42 · [AVVIO] Sessione #2 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo cla… → testo d'avvio della #2 (fatto: avvio, poi pagina calda versione 3)

Ultimo, intero:
> [AVVIO] Sessione #2 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo claude/parigi-ramo-definitivo): git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached», prima git checkout claude/parigi-ramo-definitivo).
> Leggi CLAUDE.md, docs/ERRORI.md e docs/PASSAGGIO-CONSEGNE.md; continua da sola dai «Prossimi passi».

