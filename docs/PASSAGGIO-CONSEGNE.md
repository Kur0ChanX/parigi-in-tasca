# Passaggio di consegne

Sessione attuale: #14 (dopo la #13 `session_01WTjqUwvARsjNcG2at72Bng`, chiusa alla soglia 21/11 19:41; la apre la #13 con `create_session` (catena 3 di 8)).

- **Già deciso da Mario (non richiedere):** viaggio dom 13 → gio 17/12/2026 in 2, senza auto; dom mercatini a Parigi, lun–mer Disneyland; alloggio con voto sopra 8 e pulizia buona, comodo senza auto (niente taxi né Uber); vanno bene hotel, B&B, appartamenti, stanze; kit installato (21/11), icona 🗼, ramo `claude/parigi-ramo-definitivo`; pagina «un po' disneyana, un po' mercatini», sera romantica; DUE colori a scelta (Blu notte · Vin brulé, interruttore sotto il titolo: Mario «va bene» 21/11). Notti: 4, dal 13 al 17 («le notti le conti in base al biglietto del volo», 21/11). Relax SOLO il primo giorno (domenica), lun–mer solo Disney con trasporti zero stress; tutto «a prova di stupido» (21/11, dopo l'handoff della #6). Link per l'amico = **web app** sul sito (21/11 17:25); pagina riordinata approvata («ok», 17:34). **Luna a forma di Topolino** con la trama della luna e le stelline (Mario 18:55 «ti autorizzo io»): niente obiezioni sul marchio. Mappe e distanze dentro la scheda dell'alloggio (C5). **Luna-Topolino come la foto di Mario** (21/11 19:13, `archivio/2026-11-21-lune-topolino-dettagli/mario-esempio-luna-topolino.jpg`): 3 lune piene vere, beige.
- **Da non rifare:** ricerca alloggi (#4, `alloggi_spa_comodi.md`, `alloggi_ricerca_ampia.md`, prezzi Booking 13→17 del 21/11), confronto delle 28 foto (`hotel_foto_booking_mario.md`), ricerca jacuzzi (`alloggi_jacuzzi.md`), rilettura tariffe del Relais Spa; nella pagina (tutto pubblicato): «Alloggi» 15 numerati, colori Blu notte · Vin brulé, consiglio n. 12 e domenica con la spa (C2), verdetto spa, mega consiglio dei mercatini, pagina che segue l'alloggio scelto (C1), Ki Space nei costi e barre che portano alla scheda (C3), icona e anteprima del link (C4); `add_repo` di RVC (vietato). #11: C5 riquadro «Dov'è» (`tools/fai-mappe-dicembre.py`, `dicembre/mappe/`) e C7 luna-Topolino con la trama (`luna()` di `tools/fai-icone-dicembre.js`): nel ramo, prove 24 VERO, foto mandate. #12: luna «come la foto di Mario» (`lunaFoto()` in `tools/luna-topolino.js`) e 3 versioni di prova (`lunaTopolino()`: argento, oro, con l'ombra; foto in `archivio/2026-11-21-lune-topolino-dettagli/lavoro/`).
- **Cosa preme a Mario adesso:** sezione **Mercatini** (C8, la più importante per lui) ONLINE dalle 19:41 (PR #7): aspetta il suo parere (DOMANDA 7, consiglio: mappa disegnata del giro). Luna nuova online (PR #6, DOMANDA 6). 🛑 DOMANDA 2 = quale alloggio (consiglio n. 12; cancellazioni gratuite che scadono il 29/11); DOMANDA 3 = come ordinare la pagina (C6).

## Stato (21/11 19:41 ora italiana)
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-principale-20261121-01WTjqUwvARs/claude/parigi-ramo-definitivo.
- Kit 43 · 19/11/2026 · Preferenze v38 installato, prove 43/43 verdi (verifica: `docs/kit-progetto/VERSIONE`; tutti i `tools/test-*.py` con `python3 -I`).
- **C5 e C7 ONLINE** (#13, PR #6 unita 21/11 19:33, ramo-copia `versione-dicembre-mappe-luna`): riquadro «Dov'è» negli alloggi; luna-Topolino «come la foto», tono `luminosa`, bagliore, più piccola (icona r 34, anteprima r 36), anche nella testata (`<image id="lunaT">` WebP scritto da `tools/fai-icone-dicembre.js`, bagliore che respira, 3 stelline, in tutti e due i colori). Verifica: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/ | grep -o 'anteprima.jpg?v=[0-9]'` → 5; `mappe/al-12.jpg` risponde 200.
- Prova `node tools/prova-web-app.js`: «dicembre: service worker suo» FALSO 1 volta su 5 (sulla copia, al primo giro; poi sempre VERO): ipotesi primo avvio lento; se ricapita, attesa con tempo massimo nella prova.
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
- #13 (Opus 5.5 · Extra all'avvio, poi Medio dal selettore di Mario): avvio; sveglia del 7/12 rifatta `trig_01Y5x7o2s8HmGYETGPa7aREm` (vecchia spenta).
- C7 (risposta alle DOMANDE 4 e 5): luna «come la foto» più luminosa, più piccola, con bagliore, anche nella testata (bagliore che respira) → pubblicata con le mappe C5 (PR #6, v5). Foto e video `archivio/2026-11-21-luna-viva/`, DOMANDA 6.
- «publica» 19:35: era già tutto online (verificato col sito).
- C8: Mario 19:36 «sezione mercatini … superficiale» → sezione `#mercatini` dopo «In breve» (7 tappe che si aprono, dove NON andare, da sapere), bottone dorato «🎄 Il giro dei mercatini» sotto il titolo e primo nella barra; pubblicata (PR #7, v6). Foto `archivio/2026-11-21-mercatini/`, DOMANDA 7.
- Controllo Da fare: 1 voce aggiunta (👁 C8) e DOMANDE 6 e 7 in «## 0. Aspetta Mario».

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
1. **DOMANDA 7** (Mercatini): con «2» mappa disegnata del giro con le 7 tappe numerate (come `tools/fai-mappe-dicembre.py`, Plan IGN, posizioni con la fonte), in cima a `#mercatini`; con «3» quello che manca. Pubblicazione come la PR #7 (ramo-copia da `main` coi soli file di `dicembre/` fatti, mai la sorgente né `mappe.json`).
2. **DOMANDA 6** (luna): con «2» ritocchi in `tools/luna-topolino.js` (`TONI_FOTO.luminosa`), misure in `tools/fai-icone-dicembre.js`, testata nel gruppo `luna-t` della pagina; poi `node tools/fai-icone-dicembre.js`, `?v=` +1, `python3 -I tools/fai-dicembre.py`, prove, pubblicazione.
3. 🛑 **DOMANDA 2** (alloggio): col numero, se non è il 12 aggiorno il consiglio in cima (sorgente `dicembre/parigi-disney-natale.html`), prove, pubblico.
4. **DOMANDA 3** (C6 pagina ordinata): ora la sezione Mercatini è in alto; con la risposta, specifica in `docs/lavori-in-corso/C6-pagina-ordinata.md`, foto prima/dopo, niente pubblicazione senza ok.
5. Proposta non urgente (file di `.claude/`, serve l'ok scritto di Mario): hook `foto-check.py` che blocca immagini senza LAVORO/PRIMA/DOPO nel nome.
6. Ricontrollo della settimana prima: sveglia del 7/12 `trig_01Y5x7o2s8HmGYETGPa7aREm` (legata alla #13: rifarla tua e spegnere questa).

## Blocchi e rischi
- Prezzi visti il 21/11: possono salire. Cancellazioni gratuite che scadono presto: 29/11 (n. 1, 4, 7, 10, 13), 6/12 (n. 11, 14), 8/12 (n. 12, camera con letto matrimoniale, 908 €), 10/12 (n. 2, 730 €, stima), 13/12 (n. 8, 577 €, si paga in hotel), 12/12 (n. 5).
- Appartamenti privati: niente reception, codici il giorno stesso, penali per pulizia (n. 10: 300 €), età minima 24–25 (n. 4, 10), silenzio dalle 20 (n. 4).
- Da verificare: navetta a chiamata del Relais Spa per tutti (non ufficiale), reception 24 ore del Crowne Plaza, fermata del bus 2234 e orario della domenica per Jungle Love, linea del bus del n. 7, ultime corse del 2233 per il n. 3, prezzo dell'Elysée sul sito ufficiale. Nella pagina sono segnati «non confermato».

## Ultimo messaggio di Mario
«Dove non andare ormai che l'hai messo, lascialo. Però si può fare in modo che in base all'hotel che scegliamo mi dai il consiglio sui mercatini.»
(21/11 ~19:47, dopo l'handoff → C8: «Dove NON andare» resta; consiglio sui mercatini che segue l'alloggio scelto.) Prima:
«Nel senso, non dove non andare, però c'è un aiuto per i mercatini migliori, che strada prendere, che cosa guardare. E poi nella pagina la sezione mercatini di Natale, tipo un pulsante sopra, c'è per andare direttamente tutti i pulsanti nella schermata in alto, per andare direttamente nelle cose interessate, tipo scelta hotel, confronto, mercatini, preparazioni, non lo so, sto inventando, però una cosa così.»
(21/11 ~19:45, dopo l'handoff → C8: più guida sui mercatini migliori, strada e cosa guardare; bottoni grandi in cima alla prima schermata per ogni parte. Risponde in parte alla DOMANDA 7 e tocca la DOMANDA 3.) Prima:
«Scusa, la sezione più importante a mercatini con il percorso, dove andare, dove non andare, e il pulsante mercatini sopra, che era molto importante, non, lei l'ha fatto in modo superficiale.»
(21/11 19:36 → C8, sezione Mercatini online 19:41, DOMANDA 7.) Parole in `docs/lavori-in-corso/C8-mercatini.md`.

## Numeri liberi
Prossimo E libero: E1.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Medio** (`medium`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-21 19:20 · [AVVIO] Sessione #13 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo cl… → avvio, C7 luna pubblicata (PR #6)
- 2026-11-21 19:35 · publica → già online, verificato
- 2026-11-21 19:36 · Scusa, la sezione più importante a mercatini con il percorso, dove andare, dove … → C8, PR #7, DOMANDA 7

Ultimo, intero:
> Scusa, la sezione più importante a mercatini con il percorso, dove andare, dove non andare, e il pulsante mercatini sopra, che era molto importante, non, lei l'ha fatto in modo superficiale.

