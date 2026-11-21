# Passaggio di consegne

Sessione attuale: #13 (dopo la #12 `session_01WTjqUutmHTCv1W8LFKAU8t`, chiusa alla soglia 21/11 19:19; la apre la #12 con `create_session` (catena 2 di 8)).

- **Già deciso da Mario (non richiedere):** viaggio dom 13 → gio 17/12/2026 in 2, senza auto; dom mercatini a Parigi, lun–mer Disneyland; alloggio con voto sopra 8 e pulizia buona, comodo senza auto (niente taxi né Uber); vanno bene hotel, B&B, appartamenti, stanze; kit installato (21/11), icona 🗼, ramo `claude/parigi-ramo-definitivo`; pagina «un po' disneyana, un po' mercatini», sera romantica; DUE colori a scelta (Blu notte · Vin brulé, interruttore sotto il titolo: Mario «va bene» 21/11). Notti: 4, dal 13 al 17 («le notti le conti in base al biglietto del volo», 21/11). Relax SOLO il primo giorno (domenica), lun–mer solo Disney con trasporti zero stress; tutto «a prova di stupido» (21/11, dopo l'handoff della #6). Link per l'amico = **web app** sul sito (21/11 17:25); pagina riordinata approvata («ok», 17:34). **Luna a forma di Topolino** con la trama della luna e le stelline (Mario 18:55 «ti autorizzo io»): niente obiezioni sul marchio. Mappe e distanze dentro la scheda dell'alloggio (C5). **Luna-Topolino come la foto di Mario** (21/11 19:13, `archivio/2026-11-21-lune-topolino-dettagli/mario-esempio-luna-topolino.jpg`): 3 lune piene vere, beige.
- **Da non rifare:** ricerca alloggi (#4, `alloggi_spa_comodi.md`, `alloggi_ricerca_ampia.md`, prezzi Booking 13→17 del 21/11), confronto delle 28 foto (`hotel_foto_booking_mario.md`), ricerca jacuzzi (`alloggi_jacuzzi.md`), rilettura tariffe del Relais Spa; nella pagina (tutto pubblicato): «Alloggi» 15 numerati, colori Blu notte · Vin brulé, consiglio n. 12 e domenica con la spa (C2), verdetto spa, mega consiglio dei mercatini, pagina che segue l'alloggio scelto (C1), Ki Space nei costi e barre che portano alla scheda (C3), icona e anteprima del link (C4); `add_repo` di RVC (vietato). #11: C5 riquadro «Dov'è» (`tools/fai-mappe-dicembre.py`, `dicembre/mappe/`) e C7 luna-Topolino con la trama (`luna()` di `tools/fai-icone-dicembre.js`): nel ramo, prove 24 VERO, foto mandate. #12: luna «come la foto di Mario» (`lunaFoto()` in `tools/luna-topolino.js`) e 3 versioni di prova (`lunaTopolino()`: argento, oro, con l'ombra; foto in `archivio/2026-11-21-lune-topolino-dettagli/lavoro/`).
- **Cosa preme a Mario adesso:** DOMANDA 5 = la luna nuova come la sua foto va bene? (foto `1-luna-come-la-tua-foto.jpg` e `2-nell-icona.jpg` mandate ~19:17); DOMANDA 4 = ok a pubblicare le mappe (C5); DOMANDA 3 = come mettere in ordine la pagina (C6, «troppe cose a schermo», senza togliere niente); 🛑 DOMANDA 2 = quale alloggio (consiglio n. 12 Relais Spa, 908 € con cancellazione gratuita fino all'8/12; molte cancellazioni gratuite scadono il 29/11).

## Stato (21/11 19:19 ora italiana)
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-principale-20261121-01WTjqUutmHT/claude/parigi-ramo-definitivo.
- Kit 43 · 19/11/2026 · Preferenze v38 installato, prove 43/43 verdi (verifica: `docs/kit-progetto/VERSIONE`; tutti i `tools/test-*.py` con `python3 -I`).
- **C5 nel ramo, NON online** (#11): riquadro «Dov'è» negli alloggi. Verifica: `node tools/prova-web-app.js` 24 VERO; `python3 -I tools/fai-mappe-dicembre.py --controlla` e `python3 -I tools/fai-dicembre.py --controlla` escono con 0. **C7**: l'icona nel ramo ha ancora la luna della #11 (`?v=` icone 5, anteprima 4); la luna nuova «come la foto» (#12) è solo in `tools/luna-topolino.js` (`lunaFoto`), non ancora usata da `tools/fai-icone-dicembre.js` (verifica: `grep -c luna-topolino tools/fai-icone-dicembre.js` → 0).
- **Online adesso** (#10, PR #5): luna piena senza Topolino, `?v=` icone 4 e anteprima 3. Verifica: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/ | grep -o 'anteprima.jpg?v=[0-9]'` → 3.
- **Web app di dicembre online**: https://kur0chanx.github.io/parigi-in-tasca/dicembre/ . Si cambia `dicembre/parigi-disney-natale.html`, poi `python3 -I tools/fai-dicembre.py`; prove `node tools/prova-web-app.js` (24) e prove del kit (43). Artifact su claude.ai fermo alla versione 7: vale la web app.

- Sito `main`: guida di novembre `index.html` non toccata (verifica: `git diff origin/main~1 origin/main -- index.html` vuoto); `sw.js` con una riga che lascia stare `/dicembre/`; web app in `dicembre/` (verifica: il link risponde con «<title>Parigi e Disney a Natale»).

## Riferimenti
- Appunti: `research_notes/Parigi mercatini e Disneyland dicembre/` → `hotel_val_d_europe.md`, `hotel_disney.md`, `biglietti_disney.md`, `mercatini_natale.md`, `trasporti_bagagli.md`.
- Foto di Mario col codice di prenotazione: mai nel repo.

- Foto vecchie (superate): `archivio/2026-11-21-*` (consiglio, icona, domanda sull'alloggio).
- Foto della #11: `archivio/2026-11-21-mappe-alloggi/` (3, mandate ~18:58) e `archivio/2026-11-21-luna-topolino/` (2, mandate ~19:00). Foto della #12: `archivio/2026-11-21-lune-topolino-dettagli/` (2, mandate ~19:17).
- Mappe (#11): `tools/fai-mappe-dicembre.py` (posizioni con la fonte in `ALLOGGI`, Plan IGN, Licence Ouverte); tempi e fonti in testa al blocco «Dov'è» della pagina.
- 28 foto di Booking di Mario (12–17 dic, 5 notti): `archivio/2026-11-21-booking-12-17-dic-mario/01…28-booking.jpg`.

## Sessione appena chiusa
- #12 (Opus 5.5 · Extra, aperta dalla #11): avvio; unita la scorta della #10 (messaggio 18:34 nel registro; il merge aveva riportato indietro `docs/ULTIMO-MESSAGGIO.md` e `docs/ULTIMA-RISPOSTA.md`: ripristinati, riga in `docs/ERRORI.md`); sveglia del 7/12 rifatta (`trig_01YBnfD7jRrgesB1vp9agfND`, legata alla #12), quella della #11 spenta (cancellarla era bloccato dal filtro di sicurezza).
- C7: Mario 19:09 «mandami le lune … con dettagli da luna» → 3 versioni (argento, oro, con l'ombra); Mario 19:13 manda una foto di esempio (3 lune piene vere a forma di Topolino) → `lunaFoto()` in `tools/luna-topolino.js`, foto mandate ~19:17, DOMANDA 5.
- Controllo Da fare: 1 voce (DOMANDA 5 in «## 0. Aspetta Mario»), dal messaggio delle 19:09 e dalla foto delle 19:13.

## Strade provate e scartate (perché; così la prossima non le rifà)
- Negozio ufficiale Disney e motore di prenotazione Disney con browser automatico: 403, bloccati. Prezzi dai siti non ufficiali concordi; il vero si legge alla cassa.
- Booking dal computer senza accesso: non mostra lo sconto Genius né il prezzo «solo su mobile» di Mario (circa −12 %); il prezzo vero lo legge Mario nell'app.
- Elenchi di Booking con browser automatico: pagina vuota; cambiare l'«user agent» = aggirare un blocco, vietato. Funziona `web_fetch` di Parallel Search sulle singole schede.
- Pubblicare con la PR #2 (ramo comune): scartato, metteva sul sito anche archivio, messaggi e appunti; si pubblica con un ramo-copia da `main` coi soli file di `dicembre/` (+ `sw.js`).
- Prova dei service worker su `127.0.0.1`: la guida di novembre si registra solo su `github.io` o `localhost`; `tools/prova-web-app.js` usa `localhost`.
- #10: sessione aperta a mano = hook spenti: dopo il merge `echo '{}' | python3 .claude/hooks/avvio-check.py`.
- #10: `list_triggers` sempre con `enabled: true` e `limit` basso (~20k token); `merge_pull_request`: `expectedHeadSha` di 40 caratteri.
- #11: immagine di Google Maps («Static Maps») = chiave a pagamento: scartata. Tessere di `tile.openstreetmap.org` per immagini fisse: la regola ufficiale vieta di scaricarle per l'uso senza rete: scartate. Overpass (dati OSM) bloccato dalla rete dell'ambiente. Usati: Plan IGN (WMS `data.geopf.fr`, 40 richieste/s, Licence Ouverte) e geocodifica IGN; Nominatim solo per ibis, Ki Space, Square Viviani, Orly.
- #11: nella prova, immagini con `loading="lazy"` fuori schermo non si caricano mai (prova bloccata): prima `scrollIntoView`, poi attesa con tempo massimo.
- #12: usare la foto di Mario (presa da Pinterest) dentro l'icona: scartata, è la foto di un altro; la luna è disegnata da noi con le stesse forme e colori.
- #12: `delete_trigger` della sveglia vecchia: bloccato dal filtro di sicurezza; funziona `update_trigger` con `enabled: false`.

## Prossimi passi
0. ✅ #13: sveglia del 7/12 rifatta `trig_01Y5x7o2s8HmGYETGPa7aREm` (legata alla #13), quella della #12 spenta.
1. **DOMANDA 5** (luna come la foto) + **DOMANDA 4** (mappe): con «1» a tutte e due: in `tools/fai-icone-dicembre.js` la funzione `luna(cx, cy, r)` usa `require('./luna-topolino.js').lunaFoto(cx, cy, r, { id: … })` (id diversi per icona e anteprima), `node tools/fai-icone-dicembre.js`, `?v=` icone 6 e anteprima 5 (in `tools/fai-dicembre.py` e nel manifest), `python3 -I tools/fai-dicembre.py`, prove (`--controlla`, `node tools/prova-web-app.js`), foto dell'anteprima del link a Mario; poi pubblicare come la PR #4 (ramo-copia da `main` coi soli file di `dicembre/` + `mappe/`), sito vero: `curl` di `anteprima.jpg?v=5` e `mappe/al-12.jpg`. A Mario: togliere e rimettere l'icona dalla Home. Con «2»: correggere e rimandare le foto; con «3»: mandare `archivio/2026-11-21-lune-topolino-dettagli/lavoro/` (argento, oro, con-ombra, tre-nell-icona).
2. **DOMANDA 3** (C6 pagina ordinata): con la risposta, specifica in `docs/lavori-in-corso/C6-pagina-ordinata.md`, poi codice, foto prima/dopo con `tools/confronta-foto.py`, niente pubblicazione senza ok. Lavoro grande: dire a Mario se serve Fable per il piano (skill `fable-opus`).
3. 🛑 **DOMANDA 2** (alloggio): col numero di Mario, se non è il 12, aggiorno il consiglio in cima (sorgente `dicembre/parigi-disney-natale.html`) e rifaccio le prove; poi pubblico. Col 12: ricordare la navetta della reception (non confermata) e di prenotare la camera «con 1 letto matrimoniale large» (non la suite).
4. Proposta a Mario (non urgente, file di `.claude/` = serve il suo ok scritto): l'hook `foto-check.py` blocca la lettura di un'immagine se il nome non dice LAVORO, PRIMA o DOPO (riga del 21/11 #11 in `docs/ERRORI.md`).
5. Voci 👁 di `docs/DA-FARE.md`: si chiudono quando Mario le vede nell'app. «A prova di stupido»: dopo la scelta, una passata sui testi.
6. Ricontrollo della settimana prima (voce 👁 in `docs/DA-FARE.md`, sveglia del 7/12): orari RER A 13–17/12, scioperi, terminal Volotea, ticket della metro sul telefono.

## Blocchi e rischi
- Prezzi visti il 21/11: possono salire. Cancellazioni gratuite che scadono presto: 29/11 (n. 1, 4, 7, 10, 13), 6/12 (n. 11, 14), 8/12 (n. 12, camera con letto matrimoniale, 908 €), 10/12 (n. 2, 730 €, stima), 13/12 (n. 8, 577 €, si paga in hotel), 12/12 (n. 5).
- Appartamenti privati: niente reception, codici il giorno stesso, penali per pulizia (n. 10: 300 €), età minima 24–25 (n. 4, 10), silenzio dalle 20 (n. 4).
- Da verificare: navetta a chiamata del Relais Spa per tutti (non ufficiale), reception 24 ore del Crowne Plaza, fermata del bus 2234 e orario della domenica per Jungle Love, linea del bus del n. 7, ultime corse del 2233 per il n. 3, prezzo dell'Elysée sul sito ufficiale. Nella pagina sono segnati «non confermato».

## Ultimo messaggio di Mario
«mandami le lune a forma di topolino creale con dettagli da luna ma a forma di topolino»
(21/11 19:09.) Poi alle 19:13 una foto senza testo: 3 lune piene vere a forma di Topolino (`archivio/2026-11-21-lune-topolino-dettagli/mario-esempio-luna-topolino.jpg`) → luna «come la foto», DOMANDA 5. Parole intere in `docs/lavori-in-corso/C7-luna-topolino.md`.

(I messaggi più vecchi: `docs/MESSAGGI-MARIO.md`.)

## Numeri liberi
Prossimo E libero: E1.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-21 18:59 · [AVVIO] Sessione #12 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo cl… → avvio fatto, scorta della #10 unita
- 2026-11-21 19:09 · mandami le lune a forma di topolino creale con dettagli da luna ma a forma di to… → C7, `tools/luna-topolino.js`, foto `archivio/2026-11-21-lune-topolino-dettagli/`, DOMANDA 5

Ultimo, intero:
> mandami le lune a forma di topolino creale con dettagli da luna ma a forma di topolino

