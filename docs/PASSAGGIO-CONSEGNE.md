# Passaggio di consegne

Sessione attuale: #22 (dopo la #21 `session_01WTjqUufrPoE5XXACBYJB9k`, chiusa alla soglia 22/11 00:23; la apre la #21 con `create_session` (catena 3 di 8)).

- **Già deciso da Mario (non richiedere):** viaggio dom 13 → gio 17/12/2026 in 2, senza auto; dom mercatini a Parigi, lun–mer Disneyland; alloggio con voto sopra 8 e pulizia buona, comodo senza auto (niente taxi né Uber); vanno bene hotel, B&B, appartamenti, stanze; kit installato (21/11), icona 🗼, ramo `claude/parigi-ramo-definitivo`; pagina «un po' disneyana, un po' mercatini», sera romantica; DUE colori a scelta (Blu notte · Vin brulé, interruttore sotto il titolo: Mario «va bene» 21/11). Notti: 4, dal 13 al 17 («le notti le conti in base al biglietto del volo», 21/11). Relax SOLO il primo giorno (domenica), lun–mer solo Disney con trasporti zero stress; tutto «a prova di stupido» (21/11, dopo l'handoff della #6). Link per l'amico = **web app** sul sito (21/11 17:25); pagina riordinata approvata («ok», 17:34). **Luna a forma di Topolino** con la trama della luna e le stelline (Mario 18:55 «ti autorizzo io»): niente obiezioni sul marchio. Mappe e distanze dentro la scheda dell'alloggio (C5). **Luna-Topolino come la foto di Mario** (21/11 19:13, `archivio/2026-11-21-lune-topolino-dettagli/mario-esempio-luna-topolino.jpg`): 3 lune piene vere, beige.
- **Da non rifare:** ricerca alloggi (#4, `alloggi_spa_comodi.md`, `alloggi_ricerca_ampia.md`, prezzi Booking 13→17 del 21/11), confronto delle 28 foto (`hotel_foto_booking_mario.md`), ricerca jacuzzi (`alloggi_jacuzzi.md`), rilettura tariffe del Relais Spa; nella pagina (tutto pubblicato): «Alloggi» 15 numerati, colori Blu notte · Vin brulé, consiglio n. 12 e domenica con la spa (C2), verdetto spa, mega consiglio dei mercatini, pagina che segue l'alloggio scelto (C1), Ki Space nei costi e barre che portano alla scheda (C3), icona e anteprima del link (C4); `add_repo` di RVC (vietato). #11: C5 riquadro «Dov'è» (`tools/fai-mappe-dicembre.py`, `dicembre/mappe/`) e C7 luna-Topolino con la trama (`luna()` di `tools/fai-icone-dicembre.js`): nel ramo, prove 24 VERO, foto mandate. #12: luna «come la foto di Mario» (`lunaFoto()` in `tools/luna-topolino.js`) e 3 versioni di prova (`lunaTopolino()`: argento, oro, con l'ombra; foto in `archivio/2026-11-21-lune-topolino-dettagli/lavoro/`). #14: pulsanti grandi in cima (`nav.go`, tolta la barra `.jump`), barra fissa `#topbar`, riquadro `#mkAl` (`mkAl()`), «🚶 La strada» nelle 7 tappe, n. 7 domenica veloce (`by22`): tutto online (v7 PR #8, v8 PR #9). #15: v10 online (PR #11): casette e Torre Eiffel intere scorrendo (`data-max`), costi in una colonna (classe `cresce` al posto di `go`), barra in alto piena; prove `tools/prova-scritte.js` e casette in `prova-web-app.js`. C10: prezzi 1 notte Parigi 13→14 + 3 notti 14→17 (4 gruppi) in `research_notes/…/alloggi_notte_parigi_3notti.md`: NON rifarli. #16: prezzi 3 notti 14→17 dei 15 + 4 hotel di Parigi (`alloggi_prezzi_3notti_15.md`), ricerca larga notte a Parigi (`alloggi_parigi_1notte_ampia.md`), ricerca larga 3 notti vicino a Disney (`alloggi_3notti_disney_nuovi.md`); sezione `#scegli` e motore della scelta (C11 pezzi 1–6). Già deciso (#16): consiglio ★ = Hotel Locomo + n. 8 Moxy; Zenitude ed East-Blue fuori (cauzione addebitata 7 giorni prima). #18: v11 (scelta dell'alloggio corta) e v12 (PC: menù a sinistra, testata intera) online; ricerca Airbnb 14→17 (`alloggi_airbnb_disney_14_17.md`, 11 letti, 3 con jacuzzi scartati perché serve l'auto).
- **Cosa preme a Mario adesso:** inserire i 6 alloggi nuovi trovati dalla #20 (n. 25–30, appunti `research_notes/…/alloggi_nuovi_13_17_ricerca.md`: 4 Airbnb a Montévrain 391/400/452/546 €, ARIANE 1 650 €, Residhome 600 € NR) e pubblicare la v16 (Mario: «guardane altri… spulcia bene», «poi publica»). Adagio Val d'Europe scartato (Booking 7,7, pulizia TrustYou 4,6/10): dirlo a Mario, non aggiungerlo.

## Stato (22/11 00:23 ora italiana)
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-principale-20261121-01WTjqUufrPo/claude/parigi-ramo-definitivo.
- Kit 43 · 19/11/2026 · Preferenze v38 installato, prove 43/43 verdi (verifica: `docs/kit-progetto/VERSIONE`; tutti i `tools/test-*.py` con `python3 -I`).
- **v15 ONLINE** (#20, PR #16 unita 21/11 23:56; v14 PR #15 23:43): verifica `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/ | grep -c 'Vicino alla RER'` → 2 o più. Prove: `node tools/prova-web-app.js` 37/37, `node tools/prova-scritte.js` 20/20, `python3 -I tools/fai-mappe-dicembre.py --controlla` → «25 immagini», kit 43/43.
- Catena: #19 = 1 di 8 (aperta da Mario), la #20 la apre la #19 (2 di 8). Sveglia del 7/12: una sola attiva, `trig_01965zaQk5ALkXC9zyXHFwzr` (#20, 08:07 UTC); quella della #19 spenta (cancellarla è stato negato dai permessi; verifica: `list_triggers`, un solo «Parigi · ricontrollo prima di partire» con enabled true).
- **Web app di dicembre online**: https://kur0chanx.github.io/parigi-in-tasca/dicembre/ . Si cambia `dicembre/parigi-disney-natale.html`, poi `python3 -I tools/fai-dicembre.py`; prove `node tools/prova-web-app.js` (24) e prove del kit (43). Artifact su claude.ai fermo alla versione 7: vale la web app.

- Sito `main`: guida di novembre `index.html` non toccata (verifica: `git diff origin/main~1 origin/main -- index.html` vuoto); `sw.js` con una riga che lascia stare `/dicembre/`; web app in `dicembre/` (verifica: il link risponde con «<title>Parigi e Disney a Natale»).

## Riferimenti
- Appunti: `research_notes/Parigi mercatini e Disneyland dicembre/` → `hotel_val_d_europe.md`, `hotel_disney.md`, `biglietti_disney.md`, `mercatini_natale.md`, `trasporti_bagagli.md`.
- Foto di Mario col codice di prenotazione: mai nel repo.

- Mappe (#11): `tools/fai-mappe-dicembre.py` (posizioni con la fonte in `ALLOGGI`, Plan IGN, Licence Ouverte); tempi e fonti in testa al blocco «Dov'è» della pagina.

## Sessione appena chiusa
- #20 (Opus 5.5 · Alto, poi Extra scelto da Mario): avvio, sveglia del 7/12 rifatta, v14 e v15 online.
- v14: mappe degli 8 hotel di Parigi (DOMANDA 11 = «publica»), n. 22 All Suites (715 € canc. fino al 13/12), n. 23 Airbnb Montévrain 1376052056754954936 (489 €), ibis n. 9 col prezzo Accor 488 €, spa Saint-Pétersbourg 9–23 e piscina Astra 7–22 con fonti, frase di Ki Space più prudente. LeDélicieux scartato (occupato 13→17); 5115238 era già il n. 16; Accor 5646 = ibis n. 9.
- **Errore trovato e corretto**: i link di 5 Airbnb portavano all'annuncio sbagliato (numeri di 19 cifre arrotondati da JavaScript): ora fra virgolette, prova nuova, riga in ERRORI.
- v15: ordine a 4 pulsanti nelle due liste (`SORT` e `SRT`: prezzo, disney = `parkMin`, rer = `rerMin` minuti a piedi da `DV`, pulizia = `cl`), classe `.sort4`; n. 24 Staycity (640 € canc. fino all'11/12, navetta).
- Foto delle schede n. 22 e 23: `archivio/2026-11-21-nuovi-alloggi/` (1a, 1b, 2a, 2b), mandate nell'ultimo messaggio della #20.
- Controllo Da fare: 1 voce aggiunta (6 alloggi nuovi, 👁).

## Strade provate e scartate (perché; così la prossima non le rifà)
- Testata: fermare solo lo strato davanti (v9) → casette intere ma Torre Eiffel e castello dietro le casette; scartato per `data-max` + sfondo che sale.
- Rifare da capo la ricerca alloggi vicino a Disney: scartato (Mario 20:25), si riusano i candidati della ricerca grande e si leggono solo i prezzi mancanti.
- Airbnb con jacuzzi o sauna privata (Disney Chill 1.226 €, Marfa Suite, Casa Love 850 €): scartati, serve l'auto.
- Pagina per PC con solo colonna più larga: scartata per menù fisso a sinistra (Mario «ottimizza gli spazi»).
- Adagio Val d'Europe (7,7, pulizia 4,6/10) e Adagio Serris (8,0, non sopra 8): fuori per la regola del voto. «Vicino alla RER» con `h.min`: il Disney Hotel New York (min 0) finiva primo, ma è a 10 minuti dalla stazione → `rerMin` da `DV`.
- Più vecchie (Disney 403, Booking senza Genius ed elenchi vuoti, PR #2 per pubblicare, service worker su 127.0.0.1, Static Maps, OSM…): in `docs/STRADE-SCARTATE.md`.

## Prossimi passi
1. Inserire i 6 alloggi di `alloggi_nuovi_13_17_ricerca.md` come n. 25–30 (come il n. 23 per gli Airbnb: `ab:1`, `ZONA` VDE in `tools/fai-mappe-dicembre.py`; ARIANE 1 e Residhome con indirizzo → IGN in `ALLOGGI`), prezzi 3 notti 14→17 da leggere, conteggi «fra 24» e «i 24 a confronto, anche 7 Airbnb» e liste delle prove (`prova-web-app.js`: Dov'è, Airbnb, 24 → 30), poi v16 (PR da `versione-v16`, giro in locale, unione, nastro, sito vero). Prima di dirlo «fatto»: foto di 2 schede nuove a Mario.
2. Dire a Mario che l'Adagio è scartato e perché (se non l'ha letto nell'ultimo messaggio della #20).
3. DOMANDA 3 (C6) e DOMANDA 6 (luna): una per messaggio quando Mario scrive.
4. Ancora da verificare (non urgenti): deposito valigie di Astra e Saint-Pétersbourg, piscina del Novotel, cancellazione dell'Airbnb di David (n. 21).

## Blocchi e rischi
- Prezzi visti il 21/11: possono salire. Cancellazioni gratuite che scadono presto: 29/11 (n. 1, 4, 7, 10, 13), 6/12 (n. 11, 14), 8/12 (n. 12, camera con letto matrimoniale, 908 €), 10/12 (n. 2, 730 €, stima), 13/12 (n. 8, 577 €, si paga in hotel), 12/12 (n. 5).
- Airbnb (letti 21/11 22:10): Nice studio rimborso solo parziale dopo 24 ore (fino al 7/12); Apart Premium gratis fino al 13/12; Villa Rhapsodie gratis fino al 30/11; Bucolic Suite e Bellevue fino al 9/12.
- Appartamenti privati: niente reception, penali pulizia (n. 10), età minima 24–25 (n. 4, 10).
- Da verificare: navetta a chiamata del Relais Spa per tutti (non ufficiale), reception 24 ore del Crowne Plaza, fermata del bus 2234 e orario della domenica per Jungle Love, linea del bus del n. 7, ultime corse del 2233 per il n. 3, prezzo dell'Elysée sul sito ufficiale. Nella pagina sono segnati «non confermato».
- Prezzi C10 (Sleeping Belle, Moxy 3 notti, Relais Junior Suite NR, Elysée esaurito): in `research_notes/…/alloggi_notte_parigi_3notti.md`.

## Ultimo messaggio di Mario
«Aparthotel Adagio Val d'Europe https://www.online-reservations.com/?hotelid=51666&[pubblicità tolta] Staycity Aparthotels Paris, Marne-la-Vallée poi publica metti un filtro dai piú vicini a Disneyland i meno cari i piú puliti e vicino alla rer e guardane altri se ne trovi da inserire spulcia bene quindi non cari vicini alla rer vicini a disneyland dal 13 al 17 e puliti decentemente come voto» (21/11 ~23:50) → v15 (ordine + Staycity), Adagio scartato, 6 nuovi trovati: da inserire (passo 1).
Prima: «aggiungi un agente» (21/11 ~23:38) → 1 aiutante per le foto (poi uno per la ricerca).

## Numeri liberi
Prossimo E libero: E1.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-21 23:58 · [AVVIO] Sessione #21 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo cl… → 

Ultimo, intero:
> [AVVIO] Sessione #21 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo claude/parigi-ramo-definitivo): git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached», prima git checkout claude/parigi-ramo-definitivo).
> Leggi CLAUDE.md, docs/ERRORI.md e docs/PASSAGGIO-CONSEGNE.md; continua da sola dai «Prossimi passi».

