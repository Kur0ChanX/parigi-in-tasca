# Passaggio di consegne

Sessione attuale: #18 (dopo la #17 `session_01WTjqUvCPBbm8KqjbGWDG3h`, chiusa alla soglia 21/11 21:28; la apre la #17 con `create_session` (catena 7 di 8)).

- **Già deciso da Mario (non richiedere):** viaggio dom 13 → gio 17/12/2026 in 2, senza auto; dom mercatini a Parigi, lun–mer Disneyland; alloggio con voto sopra 8 e pulizia buona, comodo senza auto (niente taxi né Uber); vanno bene hotel, B&B, appartamenti, stanze; kit installato (21/11), icona 🗼, ramo `claude/parigi-ramo-definitivo`; pagina «un po' disneyana, un po' mercatini», sera romantica; DUE colori a scelta (Blu notte · Vin brulé, interruttore sotto il titolo: Mario «va bene» 21/11). Notti: 4, dal 13 al 17 («le notti le conti in base al biglietto del volo», 21/11). Relax SOLO il primo giorno (domenica), lun–mer solo Disney con trasporti zero stress; tutto «a prova di stupido» (21/11, dopo l'handoff della #6). Link per l'amico = **web app** sul sito (21/11 17:25); pagina riordinata approvata («ok», 17:34). **Luna a forma di Topolino** con la trama della luna e le stelline (Mario 18:55 «ti autorizzo io»): niente obiezioni sul marchio. Mappe e distanze dentro la scheda dell'alloggio (C5). **Luna-Topolino come la foto di Mario** (21/11 19:13, `archivio/2026-11-21-lune-topolino-dettagli/mario-esempio-luna-topolino.jpg`): 3 lune piene vere, beige.
- **Da non rifare:** ricerca alloggi (#4, `alloggi_spa_comodi.md`, `alloggi_ricerca_ampia.md`, prezzi Booking 13→17 del 21/11), confronto delle 28 foto (`hotel_foto_booking_mario.md`), ricerca jacuzzi (`alloggi_jacuzzi.md`), rilettura tariffe del Relais Spa; nella pagina (tutto pubblicato): «Alloggi» 15 numerati, colori Blu notte · Vin brulé, consiglio n. 12 e domenica con la spa (C2), verdetto spa, mega consiglio dei mercatini, pagina che segue l'alloggio scelto (C1), Ki Space nei costi e barre che portano alla scheda (C3), icona e anteprima del link (C4); `add_repo` di RVC (vietato). #11: C5 riquadro «Dov'è» (`tools/fai-mappe-dicembre.py`, `dicembre/mappe/`) e C7 luna-Topolino con la trama (`luna()` di `tools/fai-icone-dicembre.js`): nel ramo, prove 24 VERO, foto mandate. #12: luna «come la foto di Mario» (`lunaFoto()` in `tools/luna-topolino.js`) e 3 versioni di prova (`lunaTopolino()`: argento, oro, con l'ombra; foto in `archivio/2026-11-21-lune-topolino-dettagli/lavoro/`). #14: pulsanti grandi in cima (`nav.go`, tolta la barra `.jump`), barra fissa `#topbar`, riquadro `#mkAl` (`mkAl()`), «🚶 La strada» nelle 7 tappe, n. 7 domenica veloce (`by22`): tutto online (v7 PR #8, v8 PR #9). #15: v10 online (PR #11): casette e Torre Eiffel intere scorrendo (`data-max`), costi in una colonna (classe `cresce` al posto di `go`), barra in alto piena; prove `tools/prova-scritte.js` e casette in `prova-web-app.js`. C10: prezzi 1 notte Parigi 13→14 + 3 notti 14→17 (4 gruppi) in `research_notes/…/alloggi_notte_parigi_3notti.md`: NON rifarli. #16: prezzi 3 notti 14→17 dei 15 + 4 hotel di Parigi (`alloggi_prezzi_3notti_15.md`), ricerca larga notte a Parigi (`alloggi_parigi_1notte_ampia.md`), ricerca larga 3 notti vicino a Disney (`alloggi_3notti_disney_nuovi.md`); sezione `#scegli` e motore della scelta (C11 pezzi 1–6). Già deciso (#16): consiglio ★ = Hotel Locomo + n. 8 Moxy; Zenitude ed East-Blue fuori (cauzione addebitata 7 giorni prima).
- **Cosa preme a Mario adesso:** C11 «Scegli dove dormire»: impaginazione rifatta dalla #17 (righe che si aprono, 3 numeri in cima, ~5 schermate invece di ~15), nel ramo, NON pubblicata; aspetta la DOMANDA 7 (ok a pubblicare, foto `archivio/2026-11-21-c11-scegli-impaginazione/` mandate 21:27). Poi alloggi nuovi vicino a Disney (pezzo 9). Link attuale: `https://kur0chanx.github.io/parigi-in-tasca/dicembre/?v=10`.

## Stato (21/11 21:28 ora italiana)
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-principale-20261121-01WTjqUvCPBb/claude/parigi-ramo-definitivo.
- Kit 43 · 19/11/2026 · Preferenze v38 installato, prove 43/43 verdi (verifica: `docs/kit-progetto/VERSIONE`; tutti i `tools/test-*.py` con `python3 -I`).
- **v10 ONLINE** (#15, PR #11 unita 21/11 ~20:13; prima v9 PR #10, v8 PR #9, C5/C7 PR #6): verifica `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/ | grep -c "add('cresce')\|data-max=\"18\""` → 2. Prove: `node tools/prova-web-app.js` 25/25 (6 giri di fila), `node tools/prova-scritte.js` 12/12.
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
- #17 (Opus 5.5 · Medio): scorta della #15 unita (messaggio 20:35 nel registro; ultimo messaggio e risposta tenuti a 20:59). Sveglia del 7/12 rifatta (`trig_01WLZG77twJrNjVRuvgC85rE`); la vecchia della #16 NON spenta (permesso negato a delete e update): voce 👁 in Da fare.
- C11 impaginazione (commit «C11: scelta dell'alloggio rifatta più corta…»): CSS `.sc-*` nuovo, `renderSc()` con righe `details.sc-o[data-k]`, una aperta per lista (evento `toggle`), `#scNowN`/`#scNowD`, `#sc1`/`#sc2`, tolto `#scBan`; `.pc p` senza griglia (scritte accavallate, 10 casi). `tools/prova-scritte.js` più severa (provata FALSO sulla vecchia). Prove: web app 29/29, scritte 12/12.
- ERRORI: riga nuova (scritte accavallate nei pro/contro); 3 righe vecchie in `docs/ERRORI-STORIA.md`. Controllo Da fare: 1 voce aggiunta (sveglia doppia).

## Strade provate e scartate (perché; così la prossima non le rifà)
- Testata: fermare solo lo strato davanti (v9) → casette intere ma Torre Eiffel e castello dietro le casette; scartato per `data-max` + sfondo che sale.
- Rifare da capo la ricerca alloggi vicino a Disney: scartato (Mario 20:25), si riusano i candidati della ricerca grande e si leggono solo i prezzi mancanti.
- Più vecchie (Disney 403, Booking senza Genius ed elenchi vuoti, PR #2 per pubblicare, service worker su 127.0.0.1, Static Maps, OSM…): in `docs/STRADE-SCARTATE.md`.

## Prossimi passi
1. **DOMANDA 7** (riga in «## 0»): se Mario dice 1 → PR come la #11 (skill `pr`, `fai-dicembre.py --controlla`, prove, giro completo), poi link `?v=11` in un riquadro; se 2 → cambiare cosa dice e rifare le foto.
2. C11 pezzo 7: mappe e «Dov'è» degli 8 hotel di Parigi (`tools/fai-mappe-dicembre.py`).
3. C11 pezzo 9: alloggi nuovi vicino a Disney come n. 16+ (`alloggi_3notti_disney_nuovi.md`); testi «15» da rendere generici.
4. Da verificare: spa del Saint-Pétersbourg, deposito valigie di Astra e Saint-Pétersbourg, piscina del Novotel. Nel n. 12 il contro dice «la usate domenica sera»: con la domenica a Parigi c'è già la frase che corregge; valutare di renderlo condizionale.
5. DOMANDA 3 (C6) e DOMANDA 6 (luna): una per messaggio quando Mario scrive. Proposta: la forma «righe che si aprono» per tutta la pagina (C6).

## Blocchi e rischi
- Prezzi visti il 21/11: possono salire. Cancellazioni gratuite che scadono presto: 29/11 (n. 1, 4, 7, 10, 13), 6/12 (n. 11, 14), 8/12 (n. 12, camera con letto matrimoniale, 908 €), 10/12 (n. 2, 730 €, stima), 13/12 (n. 8, 577 €, si paga in hotel), 12/12 (n. 5).
- Appartamenti privati: niente reception, penali pulizia (n. 10), età minima 24–25 (n. 4, 10).
- Da verificare: navetta a chiamata del Relais Spa per tutti (non ufficiale), reception 24 ore del Crowne Plaza, fermata del bus 2234 e orario della domenica per Jungle Love, linea del bus del n. 7, ultime corse del 2233 per il n. 3, prezzo dell'Elysée sul sito ufficiale. Nella pagina sono segnati «non confermato».
- C10 (letti 21/11 sera, senza Genius): Sleeping Belle 216 € canc. fino al 12/12 (letto «alla francese», circa 140 cm, stima); Moxy 3 notti 530 € canc. fino al 14/12; Relais Junior Suite 3 notti 598,80 € solo NR (Black Friday). Elysée esaurito su Booking per 14→17. Biglietti 544 € = non ufficiale.

## Ultimo messaggio di Mario
«mi raccomando studiati un impaginazione geniale non confusa» (21/11 ~21:17, arrivato alla #16 dopo l'handoff) → C11 impaginazione rifatta (#17), DOMANDA 7.

## Numeri liberi
Prossimo E libero: E1.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Medio** (`medium`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-21 21:16 · [AVVIO] Sessione #17 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo cl… → 

Ultimo, intero:
> [AVVIO] Sessione #17 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo claude/parigi-ramo-definitivo): git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached», prima git checkout claude/parigi-ramo-definitivo).
> Leggi CLAUDE.md, docs/ERRORI.md e docs/PASSAGGIO-CONSEGNE.md; continua da sola dai «Prossimi passi».

