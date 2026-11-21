# Passaggio di consegne

Sessione attuale: #20 (dopo la #19 `session_01WTjqUvuvWhyzPCDSS9NZRG`, chiusa alla soglia 21/11 23:22; la apre la #19 con `create_session` (catena 1 di 8)).

- **Già deciso da Mario (non richiedere):** viaggio dom 13 → gio 17/12/2026 in 2, senza auto; dom mercatini a Parigi, lun–mer Disneyland; alloggio con voto sopra 8 e pulizia buona, comodo senza auto (niente taxi né Uber); vanno bene hotel, B&B, appartamenti, stanze; kit installato (21/11), icona 🗼, ramo `claude/parigi-ramo-definitivo`; pagina «un po' disneyana, un po' mercatini», sera romantica; DUE colori a scelta (Blu notte · Vin brulé, interruttore sotto il titolo: Mario «va bene» 21/11). Notti: 4, dal 13 al 17 («le notti le conti in base al biglietto del volo», 21/11). Relax SOLO il primo giorno (domenica), lun–mer solo Disney con trasporti zero stress; tutto «a prova di stupido» (21/11, dopo l'handoff della #6). Link per l'amico = **web app** sul sito (21/11 17:25); pagina riordinata approvata («ok», 17:34). **Luna a forma di Topolino** con la trama della luna e le stelline (Mario 18:55 «ti autorizzo io»): niente obiezioni sul marchio. Mappe e distanze dentro la scheda dell'alloggio (C5). **Luna-Topolino come la foto di Mario** (21/11 19:13, `archivio/2026-11-21-lune-topolino-dettagli/mario-esempio-luna-topolino.jpg`): 3 lune piene vere, beige.
- **Da non rifare:** ricerca alloggi (#4, `alloggi_spa_comodi.md`, `alloggi_ricerca_ampia.md`, prezzi Booking 13→17 del 21/11), confronto delle 28 foto (`hotel_foto_booking_mario.md`), ricerca jacuzzi (`alloggi_jacuzzi.md`), rilettura tariffe del Relais Spa; nella pagina (tutto pubblicato): «Alloggi» 15 numerati, colori Blu notte · Vin brulé, consiglio n. 12 e domenica con la spa (C2), verdetto spa, mega consiglio dei mercatini, pagina che segue l'alloggio scelto (C1), Ki Space nei costi e barre che portano alla scheda (C3), icona e anteprima del link (C4); `add_repo` di RVC (vietato). #11: C5 riquadro «Dov'è» (`tools/fai-mappe-dicembre.py`, `dicembre/mappe/`) e C7 luna-Topolino con la trama (`luna()` di `tools/fai-icone-dicembre.js`): nel ramo, prove 24 VERO, foto mandate. #12: luna «come la foto di Mario» (`lunaFoto()` in `tools/luna-topolino.js`) e 3 versioni di prova (`lunaTopolino()`: argento, oro, con l'ombra; foto in `archivio/2026-11-21-lune-topolino-dettagli/lavoro/`). #14: pulsanti grandi in cima (`nav.go`, tolta la barra `.jump`), barra fissa `#topbar`, riquadro `#mkAl` (`mkAl()`), «🚶 La strada» nelle 7 tappe, n. 7 domenica veloce (`by22`): tutto online (v7 PR #8, v8 PR #9). #15: v10 online (PR #11): casette e Torre Eiffel intere scorrendo (`data-max`), costi in una colonna (classe `cresce` al posto di `go`), barra in alto piena; prove `tools/prova-scritte.js` e casette in `prova-web-app.js`. C10: prezzi 1 notte Parigi 13→14 + 3 notti 14→17 (4 gruppi) in `research_notes/…/alloggi_notte_parigi_3notti.md`: NON rifarli. #16: prezzi 3 notti 14→17 dei 15 + 4 hotel di Parigi (`alloggi_prezzi_3notti_15.md`), ricerca larga notte a Parigi (`alloggi_parigi_1notte_ampia.md`), ricerca larga 3 notti vicino a Disney (`alloggi_3notti_disney_nuovi.md`); sezione `#scegli` e motore della scelta (C11 pezzi 1–6). Già deciso (#16): consiglio ★ = Hotel Locomo + n. 8 Moxy; Zenitude ed East-Blue fuori (cauzione addebitata 7 giorni prima). #18: v11 (scelta dell'alloggio corta) e v12 (PC: menù a sinistra, testata intera) online; ricerca Airbnb 14→17 (`alloggi_airbnb_disney_14_17.md`, 11 letti, 3 con jacuzzi scartati perché serve l'auto).
- **Cosa preme a Mario adesso:** DOMANDA 11 🛑 (foto 1–2 mandate 23:2x, `archivio/2026-11-21-mappe-hotel-parigi/`): mappe e «Dov'è e quanto ci vuole» degli 8 hotel di Parigi, nel ramo, NON pubblicate. Se Mario dice sì → v14 (skill `pr`, giro completo, `unione-pr`). Poi chiedere se ha visto la v13 (Airbnb, `https://kur0chanx.github.io/parigi-in-tasca/dicembre/?v=13`).

## Stato (21/11 23:22 ora italiana)
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb.
- Kit 43 · 19/11/2026 · Preferenze v38 installato, prove 43/43 verdi (verifica: `docs/kit-progetto/VERSIONE`; tutti i `tools/test-*.py` con `python3 -I`).
- **v12 ONLINE** (#18, PR #13 unita 21/11 21:44; v11 PR #12 21:33): verifica `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/ | grep -c 'class="side"'` → 1. Prove: `node tools/prova-web-app.js` 29/29, `node tools/prova-scritte.js` 20/20 (ora anche a 1470 e 1920 px).
- Catena: #19 = 1 di 8 (aperta da Mario), la #20 la apre la #19 (2 di 8). Sveglia del 7/12: una sola attiva, `trig_01965zaQk5ALkXC9zyXHFwzr` (#20, 08:07 UTC); quella della #19 spenta (cancellarla è stato negato dai permessi; verifica: `list_triggers`, un solo «Parigi · ricontrollo prima di partire» con enabled true).
- Mappe hotel di Parigi (#19): verifica `python3 -I tools/fai-mappe-dicembre.py --controlla` → «23 immagini»; prove `node tools/prova-web-app.js` 34 VERO, `node tools/prova-scritte.js` 20/20.
- **Web app di dicembre online**: https://kur0chanx.github.io/parigi-in-tasca/dicembre/ . Si cambia `dicembre/parigi-disney-natale.html`, poi `python3 -I tools/fai-dicembre.py`; prove `node tools/prova-web-app.js` (24) e prove del kit (43). Artifact su claude.ai fermo alla versione 7: vale la web app.

- Sito `main`: guida di novembre `index.html` non toccata (verifica: `git diff origin/main~1 origin/main -- index.html` vuoto); `sw.js` con una riga che lascia stare `/dicembre/`; web app in `dicembre/` (verifica: il link risponde con «<title>Parigi e Disney a Natale»).

## Riferimenti
- Appunti: `research_notes/Parigi mercatini e Disneyland dicembre/` → `hotel_val_d_europe.md`, `hotel_disney.md`, `biglietti_disney.md`, `mercatini_natale.md`, `trasporti_bagagli.md`.
- Foto di Mario col codice di prenotazione: mai nel repo.

- Foto della #18: `archivio/2026-11-21-pagina-windows/` (1–2 com'era sul PC, 3–5 nuova, `mario-pc-testata-tagliata.jpg` foto di Mario; mandate 21:37–21:41). Airbnb: `research_notes/…/alloggi_airbnb_disney_14_17.md`.
- Foto vecchie (superate): `archivio/2026-11-21-*` (consiglio, icona, domanda sull'alloggio).
- Foto della #11: `archivio/2026-11-21-mappe-alloggi/` (3, mandate ~18:58) e `archivio/2026-11-21-luna-topolino/` (2, mandate ~19:00). Foto della #12: `archivio/2026-11-21-lune-topolino-dettagli/` (2, mandate ~19:17).
- Mappe (#11): `tools/fai-mappe-dicembre.py` (posizioni con la fonte in `ALLOGGI`, Plan IGN, Licence Ouverte); tempi e fonti in testa al blocco «Dov'è» della pagina.
- 28 foto di Booking di Mario (12–17 dic, 5 notti): `archivio/2026-11-21-booking-12-17-dic-mario/01…28-booking.jpg`.

## Sessione appena chiusa
- #19 (Opus 5.5 · Alto; la #18 era Extra, detto a Mario): scorta della #18 unita; messaggio di Mario delle 21:29 (scorta #17 CPBb, «quanto ti manca a publicare? publica», già gestito dalla #18) messo nel registro; scorta CPBb NON unita (vecchia, solo questo).
- **C11 pezzo 7**: `PARIGI` in `tools/fai-mappe-dicembre.py` (indirizzi ufficiali → IGN; `par-<id>.jpg`, `SCHERMO_PARIGI` 215, nomi corti, riprova sui 400 di IGN), `doveP()` e tendina «Dov'è e quanto ci vuole» in `nOpt` (pagina). Fonti: `research_notes/…/indirizzi_hotel_parigi.md` (anche spa Saint-Pétersbourg su prenotazione 9–23, reception 24/7; deposito del Relais des Halles; piscina Astra 7–22).
- `tools/prova-scritte.js`: salta il testo se una tendina più fuori è chiusa (falso allarme, riga in ERRORI). ERRORI snello: 3 righe in `docs/ERRORI-STORIA.md`.
- Controllo Da fare: 0 voci aggiunte (unico messaggio di Mario: l'avvio); aggiunte DOMANDA 11 e voce 👁 mappe.

## Strade provate e scartate (perché; così la prossima non le rifà)
- Testata: fermare solo lo strato davanti (v9) → casette intere ma Torre Eiffel e castello dietro le casette; scartato per `data-max` + sfondo che sale.
- Rifare da capo la ricerca alloggi vicino a Disney: scartato (Mario 20:25), si riusano i candidati della ricerca grande e si leggono solo i prezzi mancanti.
- Airbnb con jacuzzi o sauna privata (Disney Chill 1.226 €, Marfa Suite, Casa Love 850 €): scartati, serve l'auto.
- Pagina per PC con solo colonna più larga: scartata per menù fisso a sinistra (Mario «ottimizza gli spazi»).
- Più vecchie (Disney 403, Booking senza Genius ed elenchi vuoti, PR #2 per pubblicare, service worker su 127.0.0.1, Static Maps, OSM…): in `docs/STRADE-SCARTATE.md`.

## Prossimi passi
1. DOMANDA 11 (mappe hotel di Parigi): sì → pubblicare v14 (prove, PR, giro completo, unione, nastro); altro → correggere.
2. Chiedere a Mario se vede bene la v13 (Airbnb) e la pagina per PC (voci 👁).
3. Mettere nella pagina i fatti nuovi di `indirizzi_hotel_parigi.md` (spa Saint-Pétersbourg su prenotazione 9–23, deposito Relais des Halles confermato) togliendo i «da chiedere» giusti; restano da verificare: deposito valigie di Astra e Saint-Pétersbourg, piscina del Novotel, distanza della Bucolic Suite, cancellazione dell'Airbnb di David.
4. Correggere la frase di Ki Space «arrivate verso le 22:30» (voce 👁).
5. DOMANDA 3 (C6) e DOMANDA 6 (luna): una per messaggio quando Mario scrive.

## Blocchi e rischi
- Prezzi visti il 21/11: possono salire. Cancellazioni gratuite che scadono presto: 29/11 (n. 1, 4, 7, 10, 13), 6/12 (n. 11, 14), 8/12 (n. 12, camera con letto matrimoniale, 908 €), 10/12 (n. 2, 730 €, stima), 13/12 (n. 8, 577 €, si paga in hotel), 12/12 (n. 5).
- Airbnb (letti 21/11 22:10): Nice studio rimborso solo parziale dopo 24 ore (fino al 7/12); Apart Premium gratis fino al 13/12; Villa Rhapsodie gratis fino al 30/11; Bucolic Suite e Bellevue fino al 9/12.
- Appartamenti privati: niente reception, penali pulizia (n. 10), età minima 24–25 (n. 4, 10).
- Da verificare: navetta a chiamata del Relais Spa per tutti (non ufficiale), reception 24 ore del Crowne Plaza, fermata del bus 2234 e orario della domenica per Jungle Love, linea del bus del n. 7, ultime corse del 2233 per il n. 3, prezzo dell'Elysée sul sito ufficiale. Nella pagina sono segnati «non confermato».
- C10 (letti 21/11 sera, senza Genius): Sleeping Belle 216 € canc. fino al 12/12 (letto «alla francese», circa 140 cm, stima); Moxy 3 notti 530 € canc. fino al 14/12; Relais Junior Suite 3 notti 598,80 € solo NR (Black Friday). Elysée esaurito su Booking per 14→17. Biglietti 544 € = non ufficiale.

## Ultimo messaggio di Mario
«[AVVIO] Sessione #19 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo claude/parigi-ramo-definitivo): git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached», prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e docs/PASSAGGIO-CONSEGNE.md; continua da sola dai «Prossimi passi».» (21/11 23:04) → avvio, pezzo 7, DOMANDA 11.
Prima (alla #18): «si ma dal 13 al 17 ricordati eh».

## Numeri liberi
Prossimo E libero: E1.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Alto** (`high`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-21 21:29 · [AVVIO] Sessione #18 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo cl… → avvio, DOMANDA 7 = pubblica: v11 (PR #12)
- 2026-11-21 21:35 · riesci a impaginare per windows? → DOMANDA 8 (superata dal messaggio dopo)
- 2026-11-21 21:36 · ottimizza gli spazi per windows o MacBook → pagina per PC, foto, DOMANDA 9
- 2026-11-21 21:37 · la foto tagliata → testata intera sul PC, riga in ERRORI
- 2026-11-21 21:43 · publica → risposta alla DOMANDA 9: v12 online (PR #13)
- 2026-11-21 21:52 · domande veloci perché dici kinsoace domenica arrivate Spa chiusa? → spiegato (stima), voce 👁 per correggere la frase
- 2026-11-21 22:00 · Cerca su air B&B qualcosa di interessante vicino a Disneyland → `alloggi_airbnb_disney_14_17.md`, DOMANDA 10
- 2026-11-21 22:08 · aggiungi sezione air b e b con i top migliori mettine diversi e pro contro info … → v13 online (PR #14), 6 Airbnb
- 2026-11-21 22:12 · aggiungi aiutanti per fare prima e publica → 1 aiutante (più aiutanti sullo stesso file si sovrascrivono), poi v13
- 2026-11-21 22:22 · quanto manca? → stima ~22:45
- 2026-11-21 22:23 · puoi dirmi gli hotel per iscritto quelli validi trovati su air → elenco scritto in chat
- 2026-11-21 22:27 · https://www.airbnb.it/rooms/1233363305858745902?unique_share_id=[segreto tolto d… → dati letti, n. 21 David
- 2026-11-21 22:28 · scusa non era per te → il n. 21 resta (fra i migliori)
- 2026-11-21 22:30 · si ma dal 13 al 17 ricordati eh → prezzi 13→17 letti; 18, 20, 21 liberi solo dal 14

Ultimo, intero:
> si ma dal 13 al 17 ricordati eh

