# Passaggio di consegne

Sessione attuale: #16 (dopo la #15 `session_01WTjqUvmMKrn7b2q8ovxJgQ`, chiusa alla soglia 21/11 20:33; la apre la #15 con `create_session` (catena 5 di 8)).

- **Già deciso da Mario (non richiedere):** viaggio dom 13 → gio 17/12/2026 in 2, senza auto; dom mercatini a Parigi, lun–mer Disneyland; alloggio con voto sopra 8 e pulizia buona, comodo senza auto (niente taxi né Uber); vanno bene hotel, B&B, appartamenti, stanze; kit installato (21/11), icona 🗼, ramo `claude/parigi-ramo-definitivo`; pagina «un po' disneyana, un po' mercatini», sera romantica; DUE colori a scelta (Blu notte · Vin brulé, interruttore sotto il titolo: Mario «va bene» 21/11). Notti: 4, dal 13 al 17 («le notti le conti in base al biglietto del volo», 21/11). Relax SOLO il primo giorno (domenica), lun–mer solo Disney con trasporti zero stress; tutto «a prova di stupido» (21/11, dopo l'handoff della #6). Link per l'amico = **web app** sul sito (21/11 17:25); pagina riordinata approvata («ok», 17:34). **Luna a forma di Topolino** con la trama della luna e le stelline (Mario 18:55 «ti autorizzo io»): niente obiezioni sul marchio. Mappe e distanze dentro la scheda dell'alloggio (C5). **Luna-Topolino come la foto di Mario** (21/11 19:13, `archivio/2026-11-21-lune-topolino-dettagli/mario-esempio-luna-topolino.jpg`): 3 lune piene vere, beige.
- **Da non rifare:** ricerca alloggi (#4, `alloggi_spa_comodi.md`, `alloggi_ricerca_ampia.md`, prezzi Booking 13→17 del 21/11), confronto delle 28 foto (`hotel_foto_booking_mario.md`), ricerca jacuzzi (`alloggi_jacuzzi.md`), rilettura tariffe del Relais Spa; nella pagina (tutto pubblicato): «Alloggi» 15 numerati, colori Blu notte · Vin brulé, consiglio n. 12 e domenica con la spa (C2), verdetto spa, mega consiglio dei mercatini, pagina che segue l'alloggio scelto (C1), Ki Space nei costi e barre che portano alla scheda (C3), icona e anteprima del link (C4); `add_repo` di RVC (vietato). #11: C5 riquadro «Dov'è» (`tools/fai-mappe-dicembre.py`, `dicembre/mappe/`) e C7 luna-Topolino con la trama (`luna()` di `tools/fai-icone-dicembre.js`): nel ramo, prove 24 VERO, foto mandate. #12: luna «come la foto di Mario» (`lunaFoto()` in `tools/luna-topolino.js`) e 3 versioni di prova (`lunaTopolino()`: argento, oro, con l'ombra; foto in `archivio/2026-11-21-lune-topolino-dettagli/lavoro/`). #14: pulsanti grandi in cima (`nav.go`, tolta la barra `.jump`), barra fissa `#topbar`, riquadro `#mkAl` (`mkAl()`), «🚶 La strada» nelle 7 tappe, n. 7 domenica veloce (`by22`): tutto online (v7 PR #8, v8 PR #9). #15: v10 online (PR #11): casette e Torre Eiffel intere scorrendo (`data-max`), costi in una colonna (classe `cresce` al posto di `go`), barra in alto piena; prove `tools/prova-scritte.js` e casette in `prova-web-app.js`. C10: prezzi 1 notte Parigi 13→14 + 3 notti 14→17 (4 gruppi) in `research_notes/…/alloggi_notte_parigi_3notti.md`: NON rifarli.
- **Cosa preme a Mario adesso:** dove dormire (🛑 DOMANDA 2 rinnovata, C10): 4 notti vicino a Disney oppure 1 notte a Parigi + 3 vicino a Disney; tabella con 6 scelte mandata alle 20:45, consiglio 3 (Sleeping Belle + Moxy, circa 1.290 € con biglietti). Mario vuole ricerche larghe, non solo gli hotel già in pagina, e riuso della ricerca grande (non rifarla). Pagina e link «veloce»: v10 online, link da mandare `https://kur0chanx.github.io/parigi-in-tasca/dicembre/?v=10`.

## Stato (21/11 20:33 ora italiana)
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-principale-20261121-01WTjqUvmMKr/claude/parigi-ramo-definitivo.
- Kit 43 · 19/11/2026 · Preferenze v38 installato, prove 43/43 verdi (verifica: `docs/kit-progetto/VERSIONE`; tutti i `tools/test-*.py` con `python3 -I`).
- **C5 e C7 ONLINE** (#13, PR #6 unita 21/11 19:33, ramo-copia `versione-dicembre-mappe-luna`): riquadro «Dov'è» negli alloggi; luna-Topolino «come la foto», tono `luminosa`, bagliore, più piccola (icona r 34, anteprima r 36), anche nella testata (`<image id="lunaT">` WebP scritto da `tools/fai-icone-dicembre.js`, bagliore che respira, 3 stelline, in tutti e due i colori). Verifica: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/ | grep -o 'anteprima.jpg?v=[0-9]'` → 5; `mappe/al-12.jpg` risponde 200.
- Prova `node tools/prova-web-app.js`: «dicembre: service worker suo» FALSO 1 volta su 5 (sulla copia, al primo giro; poi sempre VERO): ipotesi primo avvio lento; se ricapita, attesa con tempo massimo nella prova.
- **Web app di dicembre online**: https://kur0chanx.github.io/parigi-in-tasca/dicembre/ . Si cambia `dicembre/parigi-disney-natale.html`, poi `python3 -I tools/fai-dicembre.py`; prove `node tools/prova-web-app.js` (24) e prove del kit (43). Artifact su claude.ai fermo alla versione 7: vale la web app.

- Sito `main`: guida di novembre `index.html` non toccata (verifica: `git diff origin/main~1 origin/main -- index.html` vuoto); `sw.js` con una riga che lascia stare `/dicembre/`; web app in `dicembre/` (verifica: il link risponde con «<title>Parigi e Disney a Natale»).
- **C8 v8 ONLINE** (#14, PR #8 19:49 e #9 19:56): verifica `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/ | grep -c 'id="topbar"\|id="mkAl"'` → 2. Prova `node tools/prova-web-app.js` 24/24 (con attesa fino a 8 s per il service worker; 1 giro su 7 a 23 dopo la correzione, riga non vista: se ricapita, stampare le righe FALSO).

## Riferimenti
- Appunti: `research_notes/Parigi mercatini e Disneyland dicembre/` → `hotel_val_d_europe.md`, `hotel_disney.md`, `biglietti_disney.md`, `mercatini_natale.md`, `trasporti_bagagli.md`.
- Foto di Mario col codice di prenotazione: mai nel repo.

- Foto vecchie (superate): `archivio/2026-11-21-*` (consiglio, icona, domanda sull'alloggio).
- Foto della #11: `archivio/2026-11-21-mappe-alloggi/` (3, mandate ~18:58) e `archivio/2026-11-21-luna-topolino/` (2, mandate ~19:00). Foto della #12: `archivio/2026-11-21-lune-topolino-dettagli/` (2, mandate ~19:17).
- Mappe (#11): `tools/fai-mappe-dicembre.py` (posizioni con la fonte in `ALLOGGI`, Plan IGN, Licence Ouverte); tempi e fonti in testa al blocco «Dov'è» della pagina.
- 28 foto di Booking di Mario (12–17 dic, 5 notti): `archivio/2026-11-21-booking-12-17-dic-mario/01…28-booking.jpg`.

## Sessione appena chiusa
- #15 (Opus 5.5 · Alto, poi Medio ed Extra dal selettore di Mario): avvio; scorte della #13 e mia unite (solo registro; ULTIMO-MESSAGGIO e ULTIMA-RISPOSTA rimessi). La #14 ha lavorato in parallelo dopo l'handoff (v9, casette ferme): unita.
- Testata: casette tagliate scorrendo (causa provata con misure: parallasse al contrario) → v9 della #14 nascondeva Torre Eiffel e castello → v10: casette giù al massimo 18 (`data-max`), sfondo che sale. Foto `archivio/2026-11-21-mercatini-alloggio/9-casette-e-torre-confronto.jpg`.
- «scritte sovrapposte» (foto `archivio/2026-11-21-scritte-sovrapposte/mario-costi-scritte-sovrapposte.jpg`): `#bars` prendeva la classe `go` dei pulsanti grandi → due colonne; rinominata `cresce`; barra in alto piena. Prova nuova `node tools/prova-scritte.js` (12/12, falsa sulla vecchia), scritta in CLAUDE.md. Foto `archivio/2026-11-21-scritte-sovrapposte/1-costi-confronto.jpg`. v10 online (PR #11 unita, controllata col sito).
- Prova del service worker ballerina: causa vera (pagina comandata da quello di novembre) e correzione, 6/6 verdi.
- «veloce link»: link con `?v=10` (WhatsApp rilegge l'anteprima) e `dicembre/anteprima.jpg` mandata.
- C10 (4 messaggi di Mario 20:22–20:27): aiutante su Booking, rapporto negli appunti, tabella 6 scelte + DOMANDA 2 rinnovata («## 0. Aspetta Mario»).
- ERRORI: 2 righe nuove (casette/Torre, scritte sovrapposte), 1 aggiornata (service worker); righe del 20/11 in `docs/ERRORI-STORIA.md` (tetto 10 KB).
- Sveglia del 7/12 `trig_01PuD3KWKCy76V5KLBemHjiR` (legata alla #14): NON rifatta (dimenticata all'avvio): passo 4 sotto.
- Controllo Da fare: 0 voci aggiunte (C10 in «Aspetta Mario» e in `docs/lavori-in-corso/C10-notte-a-parigi.md`; correzioni già online).

## Strade provate e scartate (perché; così la prossima non le rifà)
- Negozio ufficiale Disney e motore di prenotazione Disney con browser automatico: 403, bloccati. Prezzi dai siti non ufficiali concordi; il vero si legge alla cassa.
- Booking dal computer senza accesso: non mostra lo sconto Genius né il prezzo «solo su mobile» di Mario (circa −12 %); il prezzo vero lo legge Mario nell'app.
- Elenchi di Booking con browser automatico: pagina vuota; cambiare l'«user agent» = aggirare un blocco, vietato. Funziona `web_fetch` di Parallel Search sulle singole schede.
- Pubblicare con la PR #2 (ramo comune): scartato, metteva sul sito anche archivio, messaggi e appunti; si pubblica con un ramo-copia da `main` coi soli file di `dicembre/` (+ `sw.js`).
- Prova dei service worker su `127.0.0.1`: la guida di novembre si registra solo su `github.io` o `localhost`; `tools/prova-web-app.js` usa `localhost`.
- Più vecchie (#10–#12: Static Maps, tessere OSM, Overpass, `loading="lazy"`, foto di Mario nell'icona, `delete_trigger`): in `docs/STRADE-SCARTATE.md`.

## Prossimi passi
1. 🛑 **DOMANDA 2 rinnovata** (C10): con il numero (1–6) aggiorno la pagina `dicembre/parigi-disney-natale.html`: consiglio in cima agli «Alloggi»; con 3–6 anche domenica (notte a Parigi, Gare de Lyon), lunedì (check-out, RER A 36 min, valigie in hotel), costi (nuove righe in `SC`) e trasporti; gli alloggi nuovi (Sleeping Belle, Parisianer, ibis Styles, Moxy 3 notti, Zenitude, Staycity…) con scheda, mappa (`tools/fai-mappe-dicembre.py`) e fonti. Poi `fai-dicembre.py`, prove (`--controlla`, `prova-web-app.js`, `prova-scritte.js`), foto, pubblicazione come PR #11. Prima di scrivere i prezzi: ricontrollare Relais 4 notti (1.039 € oggi contro 908 € stamattina).
2. **DOMANDA 3** (C6 pagina ordinata) e **DOMANDA 6** (luna): come prima, una per messaggio quando Mario scrive (dettagli in `docs/DA-FARE.md` «## 0»).
3. Se Mario manda altre foto di scritte che si toccano: allargare `tools/prova-scritte.js` (testo coperto da disegni o riquadri: oggi non lo vede).
4. Sveglia del 7/12 `trig_01PuD3KWKCy76V5KLBemHjiR` (legata alla #14): rifarla tua con `send_later` e spegnere questa (`update_trigger enabled:false`).
5. Proposta non urgente (file di `.claude/`, serve l'ok scritto di Mario): hook `foto-check.py` che blocca immagini senza LAVORO/PRIMA/DOPO nel nome.

## Blocchi e rischi
- Prezzi visti il 21/11: possono salire. Cancellazioni gratuite che scadono presto: 29/11 (n. 1, 4, 7, 10, 13), 6/12 (n. 11, 14), 8/12 (n. 12, camera con letto matrimoniale, 908 €), 10/12 (n. 2, 730 €, stima), 13/12 (n. 8, 577 €, si paga in hotel), 12/12 (n. 5).
- Appartamenti privati: niente reception, codici il giorno stesso, penali per pulizia (n. 10: 300 €), età minima 24–25 (n. 4, 10), silenzio dalle 20 (n. 4).
- Da verificare: navetta a chiamata del Relais Spa per tutti (non ufficiale), reception 24 ore del Crowne Plaza, fermata del bus 2234 e orario della domenica per Jungle Love, linea del bus del n. 7, ultime corse del 2233 per il n. 3, prezzo dell'Elysée sul sito ufficiale. Nella pagina sono segnati «non confermato».
- C10 (letti 21/11 sera, senza Genius): Sleeping Belle 216 € canc. fino al 12/12 (letto «alla francese», circa 140 cm, stima); Moxy 3 notti 530 € canc. fino al 14/12; Relais Junior Suite 3 notti 598,80 € solo NR (Black Friday). Elysée esaurito su Booking per 14→17. Biglietti 544 € = non ufficiale.

## Ultimo messaggio di Mario
«Cioè, valuta 3 giorni dormire proprio vicino Disneyland o nei pressi di Disneyland. Più comodo, cioè valuta tutto. Sia nei parchi che fuori dai parchi, sia in periferia, sia molto vicino, basandoti sul prezzo, la bellezza del posto, che sia decente il prezzo, la comodità delle navette, taxi, bus per andare a Disneyland.» (21/11 20:27) → valutazione in 4 gruppi, tabella con 6 scelte e 🛑 DOMANDA 2 rinnovata mandate ~20:45; si aspetta il numero. Taxi solo come informazione (in «Già deciso»: niente taxi né Uber ogni giorno).
Prima (20:22–20:25): «Hai valutato la comodità anche di andare a Disneyland? … una notte … per vedere giusto Parigi e i mercatini e poi spostarsi …», «Non per forza gli hotel citati …», «… super ricerca con Fable … questi dati ce li avrai già, no?» (parole intere in `docs/lavori-in-corso/C10-notte-a-parigi.md`).

## Numeri liberi
Prossimo E libero: E1.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-21 19:58 · [AVVIO] Sessione #15 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo cl… → avvio, scorte unite
- 2026-11-21 20:06 · scritte sovrapposte è un lavoro certosino questo... → v10 (PR #11), prova-scritte.js, ERRORI
- 2026-11-21 20:14 · veloce link ora con immagine di condivisione corretta veloce veloce veloceeeeeee… → link con ?v=10 e anteprima mandata
- 2026-11-21 20:22 · Hai valutato la comodità anche di andare a Disneyland? Se magari è valutabile av… → C10, aiutante prezzi
- 2026-11-21 20:24 · Non per forza gli hotel citati, cioè, non focalizzarti solo su quelli che abbiam… → C10 ricerca larga
- 2026-11-21 20:25 · Beh, inizialmente abbiamo fatto una super ricerca con Fable. Penso che avrai cer… → C10 riuso della ricerca grande
- 2026-11-21 20:27 · Cioè, valuta 3 giorni dormire proprio vicino Disneyland o nei pressi di Disneyla… → C10, DOMANDA 2 rinnovata

Ultimo, intero:
> Cioè, valuta 3 giorni dormire proprio vicino Disneyland o nei pressi di Disneyland. Più comodo, cioè valuta tutto. Sia nei parchi che fuori dai parchi, sia in periferia, sia molto vicino, basandoti sul prezzo, la bellezza del posto, che sia decente il prezzo, la comodità delle navette, taxi, bus per andare a Disneyland.

