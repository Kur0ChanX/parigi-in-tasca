# Passaggio di consegne

Sessione attuale: #15 (dopo la #14 `session_01WTjqUtLt7RunYqWQTuBGHX`, chiusa alla soglia 21/11 19:56; la apre la #14 con `create_session` (catena 4 di 8)).

- **Già deciso da Mario (non richiedere):** viaggio dom 13 → gio 17/12/2026 in 2, senza auto; dom mercatini a Parigi, lun–mer Disneyland; alloggio con voto sopra 8 e pulizia buona, comodo senza auto (niente taxi né Uber); vanno bene hotel, B&B, appartamenti, stanze; kit installato (21/11), icona 🗼, ramo `claude/parigi-ramo-definitivo`; pagina «un po' disneyana, un po' mercatini», sera romantica; DUE colori a scelta (Blu notte · Vin brulé, interruttore sotto il titolo: Mario «va bene» 21/11). Notti: 4, dal 13 al 17 («le notti le conti in base al biglietto del volo», 21/11). Relax SOLO il primo giorno (domenica), lun–mer solo Disney con trasporti zero stress; tutto «a prova di stupido» (21/11, dopo l'handoff della #6). Link per l'amico = **web app** sul sito (21/11 17:25); pagina riordinata approvata («ok», 17:34). **Luna a forma di Topolino** con la trama della luna e le stelline (Mario 18:55 «ti autorizzo io»): niente obiezioni sul marchio. Mappe e distanze dentro la scheda dell'alloggio (C5). **Luna-Topolino come la foto di Mario** (21/11 19:13, `archivio/2026-11-21-lune-topolino-dettagli/mario-esempio-luna-topolino.jpg`): 3 lune piene vere, beige.
- **Da non rifare:** ricerca alloggi (#4, `alloggi_spa_comodi.md`, `alloggi_ricerca_ampia.md`, prezzi Booking 13→17 del 21/11), confronto delle 28 foto (`hotel_foto_booking_mario.md`), ricerca jacuzzi (`alloggi_jacuzzi.md`), rilettura tariffe del Relais Spa; nella pagina (tutto pubblicato): «Alloggi» 15 numerati, colori Blu notte · Vin brulé, consiglio n. 12 e domenica con la spa (C2), verdetto spa, mega consiglio dei mercatini, pagina che segue l'alloggio scelto (C1), Ki Space nei costi e barre che portano alla scheda (C3), icona e anteprima del link (C4); `add_repo` di RVC (vietato). #11: C5 riquadro «Dov'è» (`tools/fai-mappe-dicembre.py`, `dicembre/mappe/`) e C7 luna-Topolino con la trama (`luna()` di `tools/fai-icone-dicembre.js`): nel ramo, prove 24 VERO, foto mandate. #12: luna «come la foto di Mario» (`lunaFoto()` in `tools/luna-topolino.js`) e 3 versioni di prova (`lunaTopolino()`: argento, oro, con l'ombra; foto in `archivio/2026-11-21-lune-topolino-dettagli/lavoro/`). #14: pulsanti grandi in cima (`nav.go`, tolta la barra `.jump`), barra fissa `#topbar`, riquadro `#mkAl` (`mkAl()`), «🚶 La strada» nelle 7 tappe, n. 7 domenica veloce (`by22`): tutto online (v7 PR #8, v8 PR #9).
- **Cosa preme a Mario adesso:** l'itinerario che segue l'hotel scelto (confermato con prova alla #14) e i Mercatini facili da raggiungere: v8 online (pulsanti grandi in cima, barra fissa in alto, consiglio mercatini secondo l'hotel, «La strada» in ogni tappa). Mario «ok publica» alla v7. 🛑 DOMANDA 2 = quale alloggio (consiglio n. 12; cancellazioni gratuite che scadono dal 29/11); DOMANDA 3 = ordine della pagina (C6, in parte superata dai pulsanti); DOMANDA 6 = luna.

## Stato (21/11 19:56 ora italiana)
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-principale-20261121-01WTjqUtLt7R/claude/parigi-ramo-definitivo.
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
- #14 (Opus 5.5 · Medio, poi Alto dal selettore di Mario): avvio; scorta della #12 unita (solo registro messaggi; ULTIMO-MESSAGGIO e ULTIMA-RISPOSTA rimessi, difesa E del 21/11); sveglia del 7/12 rifatta `trig_01PuD3KWKCy76V5KLBemHjiR` (vecchia `trig_01Y5x7o2s8HmGYETGPa7aREm` spenta).
- C8 (3 messaggi di Mario dopo l'handoff della #13): pulsanti grandi in cima, riquadro «Con il vostro alloggio» nei Mercatini, «La strada» e cosa guardare in ogni tappa, n. 7 domenica veloce → v7 (PR #8). Foto `archivio/2026-11-21-mercatini-alloggio/1…4`. DOMANDA 8 → Mario «ok publica».
- Mario 19:52 (foto `mario-pulsanti-telefono.jpg`): pulsanti che spariscono scorrendo → barra fissa `#topbar` (v8, PR #9, foto 5 e 6); conferma che l'hotel cambia l'itinerario: provato con n. 12, 1, 14 (uscite, domenica, costi, trasporti diversi).
- Prova del service worker: attesa con tempo massimo (riga in `docs/ERRORI.md`).
- Controllo Da fare: 0 voci aggiunte (C8 già con 👁, aggiornata).

## Strade provate e scartate (perché; così la prossima non le rifà)
- Negozio ufficiale Disney e motore di prenotazione Disney con browser automatico: 403, bloccati. Prezzi dai siti non ufficiali concordi; il vero si legge alla cassa.
- Booking dal computer senza accesso: non mostra lo sconto Genius né il prezzo «solo su mobile» di Mario (circa −12 %); il prezzo vero lo legge Mario nell'app.
- Elenchi di Booking con browser automatico: pagina vuota; cambiare l'«user agent» = aggirare un blocco, vietato. Funziona `web_fetch` di Parallel Search sulle singole schede.
- Pubblicare con la PR #2 (ramo comune): scartato, metteva sul sito anche archivio, messaggi e appunti; si pubblica con un ramo-copia da `main` coi soli file di `dicembre/` (+ `sw.js`).
- Prova dei service worker su `127.0.0.1`: la guida di novembre si registra solo su `github.io` o `localhost`; `tools/prova-web-app.js` usa `localhost`.
- Più vecchie (#10–#12: Static Maps, tessere OSM, Overpass, `loading="lazy"`, foto di Mario nell'icona, `delete_trigger`): in `docs/STRADE-SCARTATE.md`.

## Prossimi passi
1. Aspettare la risposta di Mario sulla v8 (barra in alto e itinerario che segue l'hotel): se chiede di più, mappa disegnata del giro (come `tools/fai-mappe-dicembre.py`, Plan IGN, posizioni con la fonte) in cima a `#mercatini`. Pubblicazione come PR #8/#9 (ramo-copia da `origin/main` col solo `dicembre/index.html`).
2. 🛑 **DOMANDA 2** (alloggio): col numero, se non è il 12 aggiorno il consiglio in cima (sorgente `dicembre/parigi-disney-natale.html`), prove, pubblico.
3. **DOMANDA 3** (C6 pagina ordinata): con i pulsanti grandi e la barra forse superata: chiederlo a Mario in una riga; con la risposta specifica in `docs/lavori-in-corso/C6-pagina-ordinata.md`.
4. **DOMANDA 6** (luna): con «2» ritocchi in `tools/luna-topolino.js`, `tools/fai-icone-dicembre.js`, poi `node tools/fai-icone-dicembre.js`, `?v=` +1, `python3 -I tools/fai-dicembre.py`, prove, pubblicazione.
5. Proposta non urgente (file di `.claude/`, serve l'ok scritto di Mario): hook `foto-check.py` che blocca immagini senza LAVORO/PRIMA/DOPO nel nome.
6. Sveglia del 7/12 `trig_01PuD3KWKCy76V5KLBemHjiR` (legata alla #14): rifarla tua e spegnere questa (`update_trigger enabled:false`).

## Blocchi e rischi
- Prezzi visti il 21/11: possono salire. Cancellazioni gratuite che scadono presto: 29/11 (n. 1, 4, 7, 10, 13), 6/12 (n. 11, 14), 8/12 (n. 12, camera con letto matrimoniale, 908 €), 10/12 (n. 2, 730 €, stima), 13/12 (n. 8, 577 €, si paga in hotel), 12/12 (n. 5).
- Appartamenti privati: niente reception, codici il giorno stesso, penali per pulizia (n. 10: 300 €), età minima 24–25 (n. 4, 10), silenzio dalle 20 (n. 4).
- Da verificare: navetta a chiamata del Relais Spa per tutti (non ufficiale), reception 24 ore del Crowne Plaza, fermata del bus 2234 e orario della domenica per Jungle Love, linea del bus del n. 7, ultime corse del 2233 per il n. 3, prezzo dell'Elysée sul sito ufficiale. Nella pagina sono segnati «non confermato».

## Ultimo messaggio di Mario
«Quando scrollo verso il basso i mercatini si nascondono. Quindi cioè, l'obiettivo di quest'app è capire qual è il miglior giro dei mercatini, che l'abbiamo capito, cioè me l'hai fatto vedere, e poi qual è la migliore opzione per dove andare a dormire, per andare a vedere i mercatini e per andare a Disneyland gli altri 3 giorni, per facilitare i trasporti, i costi, non spendere troppi costi in taxi, oppure che non ci mettiamo 1 ora e mezza con i trasporti per arrivare a Disneyland, arriviamo tardi. Insomma, un itinerario. Quindi mi confermi che una volta che scelgo l'hotel mi modifica l'itinerario?»
(21/11 19:52 → barra fissa in alto, v8 online 19:56; confermato con prova e tabella dei 3 hotel.) Prima: «ok publica» (19:51, risposta alla DOMANDA 8, v7 già online).

## Numeri liberi
Prossimo E libero: E1.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Alto** (`high`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-21 19:42 · [AVVIO] Sessione #14 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo cl… → avvio, C8 v7 (PR #8)
- 2026-11-21 19:51 · ok publica → risposta alla DOMANDA 8, già online
- 2026-11-21 19:53 · Quando scrollo verso il basso i mercatini si nascondono. Quindi cioè, l'obiettiv… → barra in alto v8 (PR #9), conferma itinerario con prova

Ultimo, intero:
> Quando scrollo verso il basso i mercatini si nascondono. Quindi cioè, l'obiettivo di quest'app è capire qual è il miglior giro dei mercatini, che l'abbiamo capito, cioè me l'hai fatto vedere, e poi qual è la migliore opzione per dove andare a dormire, per andare a vedere i mercatini e per andare a Disneyland gli altri 3 giorni, per facilitare i trasporti, i costi, non spendere troppi costi in taxi, oppure che non ci mettiamo 1 ora e mezza con i trasporti per arrivare a Disneyland, arriviamo tardi. Insomma, un itinerario. Quindi mi confermi che una volta che scelgo l'hotel mi modifica l'itinerario?

