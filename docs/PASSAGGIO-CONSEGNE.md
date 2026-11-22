# Passaggio di consegne

Sessione attuale: #22 (dopo la #21 `session_01WTjqUufrPoE5XXACBYJB9k`, chiusa alla soglia 22/11 00:23; la apre la #21 con `create_session` (catena 3 di 8)).

- **Già deciso da Mario (non richiedere):** viaggio dom 13 → gio 17/12/2026 in 2, senza auto; dom mercatini a Parigi, lun–mer Disneyland; alloggio con voto sopra 8 e pulizia buona, comodo senza auto (niente taxi né Uber); vanno bene hotel, B&B, appartamenti, stanze; kit installato (21/11), icona 🗼, ramo `claude/parigi-ramo-definitivo`; pagina «un po' disneyana, un po' mercatini», sera romantica; DUE colori a scelta (Blu notte · Vin brulé, interruttore sotto il titolo: Mario «va bene» 21/11). Notti: 4, dal 13 al 17 («le notti le conti in base al biglietto del volo», 21/11). Relax SOLO il primo giorno (domenica), lun–mer solo Disney con trasporti zero stress; tutto «a prova di stupido» (21/11, dopo l'handoff della #6). Link per l'amico = **web app** sul sito (21/11 17:25); pagina riordinata approvata («ok», 17:34). **Luna a forma di Topolino** con la trama della luna e le stelline (Mario 18:55 «ti autorizzo io»): niente obiezioni sul marchio. Mappe e distanze dentro la scheda dell'alloggio (C5). **Luna-Topolino come la foto di Mario** (21/11 19:13, `archivio/2026-11-21-lune-topolino-dettagli/mario-esempio-luna-topolino.jpg`): 3 lune piene vere, beige. Date (Mario 22/11 ~00:15, a «Controllo 1»): **13→17 in priorità**, 14→17 come seconda strada; DOMANDA 3 presa come «decidi tu» → pagina a 4 schede (C6, la fa Controllo 1).
- **Da non rifare:** ricerca alloggi (#4, `alloggi_spa_comodi.md`, `alloggi_ricerca_ampia.md`, prezzi Booking 13→17 del 21/11), confronto delle 28 foto (`hotel_foto_booking_mario.md`), ricerca jacuzzi (`alloggi_jacuzzi.md`), rilettura tariffe del Relais Spa; nella pagina (tutto pubblicato): «Alloggi» 15 numerati, colori Blu notte · Vin brulé, consiglio n. 12 e domenica con la spa (C2), verdetto spa, mega consiglio dei mercatini, pagina che segue l'alloggio scelto (C1), Ki Space nei costi e barre che portano alla scheda (C3), icona e anteprima del link (C4); `add_repo` di RVC (vietato). #11: C5 riquadro «Dov'è» (`tools/fai-mappe-dicembre.py`, `dicembre/mappe/`) e C7 luna-Topolino con la trama (`luna()` di `tools/fai-icone-dicembre.js`): nel ramo, prove 24 VERO, foto mandate. #12: luna «come la foto di Mario» (`lunaFoto()` in `tools/luna-topolino.js`) e 3 versioni di prova (`lunaTopolino()`: argento, oro, con l'ombra; foto in `archivio/2026-11-21-lune-topolino-dettagli/lavoro/`). #14: pulsanti grandi in cima (`nav.go`, tolta la barra `.jump`), barra fissa `#topbar`, riquadro `#mkAl` (`mkAl()`), «🚶 La strada» nelle 7 tappe, n. 7 domenica veloce (`by22`): tutto online (v7 PR #8, v8 PR #9). #15: v10 online (PR #11): casette e Torre Eiffel intere scorrendo (`data-max`), costi in una colonna (classe `cresce` al posto di `go`), barra in alto piena; prove `tools/prova-scritte.js` e casette in `prova-web-app.js`. C10: prezzi 1 notte Parigi 13→14 + 3 notti 14→17 (4 gruppi) in `research_notes/…/alloggi_notte_parigi_3notti.md`: NON rifarli. #16: prezzi 3 notti 14→17 dei 15 + 4 hotel di Parigi (`alloggi_prezzi_3notti_15.md`), ricerca larga notte a Parigi (`alloggi_parigi_1notte_ampia.md`), ricerca larga 3 notti vicino a Disney (`alloggi_3notti_disney_nuovi.md`); sezione `#scegli` e motore della scelta (C11 pezzi 1–6). Già deciso (#16): consiglio ★ = Hotel Locomo + n. 8 Moxy; Zenitude ed East-Blue fuori (cauzione addebitata 7 giorni prima). #18: v11 (scelta dell'alloggio corta) e v12 (PC: menù a sinistra, testata intera) online; ricerca Airbnb 14→17 (`alloggi_airbnb_disney_14_17.md`, 11 letti, 3 con jacuzzi scartati perché serve l'auto). #21: n. 25–30 inseriti e online (v16, PR #17); prezzi 3 notti 14→17 dei 6 in `alloggi_nuovi_13_17_ricerca.md` («Prezzi 3 notti 14→17»).
- **Cosa preme a Mario adesso:** Mario ora parla con la chat «Controllo 1» (`session_01WTjqUxeDzvNf7FCCkrmhkz`): C12 ricerca profonda alloggi (13→17 prima) e C6 riordino della pagina a 4 schede. **La pagina di dicembre è sua**: la Principale non la tocca. Per la Principale: Mario vede la v16 (6 alloggi n. 25–30) e risponde alla DOMANDA 6 (luna).

## Stato (22/11 00:23 ora italiana)
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-principale-20261121-01WTjqUufrPo/claude/parigi-ramo-definitivo.
- Kit 43 · 19/11/2026 · Preferenze v38 installato, prove 43/43 verdi (verifica: `docs/kit-progetto/VERSIONE`; tutti i `tools/test-*.py` con `python3 -I`).
- **v16 ONLINE** (#21, PR #17 unita 22/11 ~00:20): verifica `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/ | grep -c 'ARIANE 1'` → 1 o più. Prove: `node tools/prova-web-app.js` 37/37, `node tools/prova-scritte.js` 20/20, `python3 -I tools/fai-mappe-dicembre.py --controlla` → «27 immagini», kit 43/43.
- Catena: #19 = 1 di 8 (aperta da Mario), #20 = 2, #21 = 3; la #22 la apre la #21 (4 di 8). Sveglia del 7/12: una sola attiva, `trig_01MVnzUS5s6cSXHKmD4GT3eJ` (#21, 08:07 UTC); quelle di #19 e #20 spente (cancellarle negato dai permessi). #22: spegnere o cancellare quella della #21 negato; la mia copia tolta per non averne due (la #21 la passa alla Principale aperta). Verifica: `list_triggers`, un solo «Parigi · ricontrollo prima di partire» con enabled true.
- Altra chat attiva sullo stesso ramo: «Controllo» (al 22/11 10:00 è la 4, `session_01WTjqUuicbA1iGVJV2srBYv`, v19 online) (C6, C12; tabella in `docs/CHI-FA-COSA.md`). Le sue scorte NON si uniscono (E97); suoi file: `docs/lavori-in-corso/C6-*`, `C12-*`, `research_notes/…/alloggi_ricerca_profonda_*.md`.
- Pagina: si cambia `dicembre/parigi-disney-natale.html`, poi `python3 -I tools/fai-dicembre.py` (web app `dicembre/index.html`). Artifact su claude.ai fermo alla versione 7: vale la web app.

- Sito `main`: guida di novembre `index.html` non toccata (verifica: `git diff origin/main~1 origin/main -- index.html` vuoto); `sw.js` con una riga che lascia stare `/dicembre/`; web app in `dicembre/` (verifica: il link risponde con «<title>Parigi e Disney a Natale»).

## Riferimenti
- Appunti: `research_notes/Parigi mercatini e Disneyland dicembre/` → `hotel_val_d_europe.md`, `hotel_disney.md`, `biglietti_disney.md`, `mercatini_natale.md`, `trasporti_bagagli.md`.
- Foto di Mario col codice di prenotazione: mai nel repo.

- Mappe (#11): `tools/fai-mappe-dicembre.py` (posizioni con la fonte in `ALLOGGI`, Plan IGN, Licence Ouverte); tempi e fonti in testa al blocco «Dov'è» della pagina.

## Sessione appena chiusa
- #21 (Opus 5.5 · Extra): avvio (scorta della #19 unita: solo registro messaggi; tenuti ultimo messaggio e ultima risposta più nuovi), sveglia del 7/12 rifatta.
- v16 online (PR #17): n. 25–28 Airbnb Montévrain (solo zona, `ZONA`), n. 29 ARIANE 1 e n. 30 Residhome con mappa IGN (`dicembre/mappe/al-29.jpg`, `al-30.jpg`); in pagina `AL`, `Q`, `DV`, `ACC` (n. 27 con `by22`: arrivi solo fino alle 22), `REC` + 30, conteggi «fra 30» e «11 Airbnb»; `tools/prova-web-app.js` a 30 (mappe: tutte sotto 100 KB).
- 1 aiutante (prezzi 14→17). Foto `archivio/2026-11-22-alloggi-25-30/`, mandate.
- Prova «service worker suo» FALSA una volta, poi verde 2 giri (ipotesi: avvio lento, non provata).
- Merge di main: conflitto in 2 documenti, tenuta la versione del ramo (main = commit provato).
- Controllo Da fare: 0 voci aggiunte (nessun messaggio di Mario a questa sessione).

## Strade provate e scartate (perché; così la prossima non le rifà)
- Testata: fermare solo lo strato davanti (v9) → casette intere ma Torre Eiffel e castello dietro le casette; scartato per `data-max` + sfondo che sale.
- Rifare da capo la ricerca alloggi vicino a Disney: scartato (Mario 20:25), si riusano i candidati della ricerca grande e si leggono solo i prezzi mancanti. Superato il 22/11: Mario la chiede a «Controllo 1» (C12).
- Airbnb con jacuzzi o sauna privata (Disney Chill 1.226 €, Marfa Suite, Casa Love 850 €): scartati, serve l'auto.
- Pagina per PC con solo colonna più larga: scartata per menù fisso a sinistra (Mario «ottimizza gli spazi»).
- Adagio Val d'Europe (7,7, pulizia 4,6/10) e Adagio Serris (8,0, non sopra 8): fuori per la regola del voto. «Vicino alla RER» con `h.min`: il Disney Hotel New York (min 0) finiva primo, ma è a 10 minuti dalla stazione → `rerMin` da `DV`.
- Playwright su Booking: 403 «You have been detected as a robot» → letto con `web_fetch` di Parallel (Airbnb invece va col browser).
- Più vecchie (Disney 403, Booking senza Genius ed elenchi vuoti, PR #2 per pubblicare, service worker su 127.0.0.1, Static Maps, OSM…): in `docs/STRADE-SCARTATE.md`.

## Prossimi passi
1. Quando Mario scrive: conferma che vede la v16 (voce 👁 «i 6 alloggi nuovi» in `docs/DA-FARE.md`: si chiude solo quando li vede) e la DOMANDA 6 (luna), una per messaggio.
2. Non toccare `dicembre/parigi-disney-natale.html`: ci lavora «Controllo 1» (C6, patch `docs/lavori-in-corso/C6-pezzo1-schede.patch`). Richieste di Mario sulla pagina alla Principale → coordinarsi con Controllo 1 (`send_message`), mai lavori accavallati.
3. Da passare a Controllo 1 per C12, se non l'ha già: Airbnb «Disneyland Paris – Val d'Europe – Parking – Wifi» 898344935961342834 (prezzo e distanza non letti, «Da verificare» in `alloggi_nuovi_13_17_ricerca.md`).
4. Verifiche hotel (Astra, Saint-Pétersbourg, Airbnb di David): passate a Controllo 4 il 22/11 ~10:10 (padrone di pagina e alloggi); la Principale non le rifà.

## Blocchi e rischi
- Prezzi visti il 21/11: possono salire. Cancellazioni gratuite che scadono presto: 29/11 (n. 1, 4, 7, 10, 13), 6/12 (n. 11, 14), 8/12 (n. 12, camera con letto matrimoniale, 908 €), 10/12 (n. 2, 730 €, stima), 13/12 (n. 8, 577 €, si paga in hotel), 12/12 (n. 5).
- n. 25–30 (letti 21–22/11): cancellazione gratuita fino al 29/11 (n. 25), 8/12 (n. 26), prima dell'8/12 (n. 29, va accettata dal gestore), 12/12 (n. 27, 28); n. 30 a 600 € non rimborsabile. N. 26 = divano letto; n. 27 arrivi solo fino alle 22.
- Cancellazioni degli Airbnb n. 16–21 e cose ancora da verificare (navette, reception, bus, Elysée): scritte nelle schede della pagina, coi segni «non confermato».
- Appartamenti privati: niente reception, penali pulizia (n. 10), età minima 24–25 (n. 4, 10).
- Prezzi C10 (Sleeping Belle, Moxy 3 notti, Relais Junior Suite NR, Elysée esaurito): in `research_notes/…/alloggi_notte_parigi_3notti.md`.

## Ultimo messaggio di Mario
Alla #21 nessuno (avvio automatico). L'ultimo alla Principale: quello alla #20 (21/11 ~23:50, «guardane altri…») → v15 e v16.
A «Controllo 1» (22/11 ~00:15), parola per parola: «metti alloggi dal 14 al 17 e in priorità dal 13 al 17 rifai la ricerca accurata profonda i piú validi dal web con i criteri che ti ho detto e sistema tutto il nostro sito c'è un disordine allucinante rendi tutto ordinato chiaro e di facile lettura non listoni chilometrici risistema in modo intelligente e von Logica e bello da vedere professionale non amatoriale» (lavoro di Controllo 1: C12, C6).

## Numeri liberi
Prossimo E libero: E1.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-21 23:58 · [AVVIO] Sessione #21 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo cl… → avvio, v16 (PR #17)

Ultimo, intero:
> [AVVIO] Sessione #21 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo claude/parigi-ramo-definitivo): git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached», prima git checkout claude/parigi-ramo-definitivo).
> Leggi CLAUDE.md, docs/ERRORI.md e docs/PASSAGGIO-CONSEGNE.md; continua da sola dai «Prossimi passi».

