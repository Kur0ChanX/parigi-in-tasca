# Passaggio di consegne

Sessione attuale: #12 (dopo la #11 `session_01WTjqUuR7dgrqh33ZFQMJ72`, chiusa alla soglia 21/11 18:57; la apre la #11 con `create_session` (catena 1 di 8)).

- **Già deciso da Mario (non richiedere):** viaggio dom 13 → gio 17/12/2026 in 2, senza auto; dom mercatini a Parigi, lun–mer Disneyland; alloggio con voto sopra 8 e pulizia buona, comodo senza auto (niente taxi né Uber); vanno bene hotel, B&B, appartamenti, stanze; kit installato (21/11), icona 🗼, ramo `claude/parigi-ramo-definitivo`; pagina «un po' disneyana, un po' mercatini», sera romantica; DUE colori a scelta (Blu notte · Vin brulé, interruttore sotto il titolo: Mario «va bene» 21/11). Notti: 4, dal 13 al 17 («le notti le conti in base al biglietto del volo», 21/11). Relax SOLO il primo giorno (domenica), lun–mer solo Disney con trasporti zero stress; tutto «a prova di stupido» (21/11, dopo l'handoff della #6). Link per l'amico = **web app** sul sito (21/11 17:25); pagina riordinata approvata («ok», 17:34). **Luna a forma di Topolino** con la trama della luna e le stelline (Mario 18:55: «Ma ti autorizzo io. Tanto lo devo utilizzare solo io questo progetto in 2 persone»): niente più obiezioni sul marchio. Mappe e distanze dentro la scheda dell'alloggio (C5).
- **Da non rifare:** la ricerca alloggi (fatta dalla #4 con 2 aiutanti: `alloggi_spa_comodi.md` 10 schede, `alloggi_ricerca_ampia.md` 16 schede, prezzi Booking 13→17 del 21/11); la sezione «Alloggi» della pagina (15 numerati, pubblicata); la pagina blu e l'interruttore dei colori (pubblicati); il mio consiglio unico n. 8 Moxy con cancellazione gratuita (versione 5, pubblicata dalla #5); il confronto delle 28 foto (`hotel_foto_booking_mario.md`); la ricerca jacuzzi/idromassaggio privato (#6, `alloggi_jacuzzi.md`); il verdetto spa nella pagina; il mega consiglio dei mercatini; la pagina che segue l'alloggio scelto (C1, nel ramo); `add_repo` di RVC (vietato). Il consiglio nuovo n. 12 Relais Spa e la domenica con la spa (C2, versione 7 pubblicata dalla #7); la rilettura delle tariffe del Relais Spa (21/11 sera, `alloggi_spa_comodi.md`). C3 (#8): Ki Space nei costi, barre che portano alla scheda, pagina con schede e tappe che si aprono col tocco, web app pubblicata (v2, PR #3). C4 (#9 e #10): icona coi mercatini con la luna a forma di Topolino, anteprima del link, controllo della web app e correzioni: **pubblicati dalla #10** (PR #4, 21/11 18:15). #11: C5 riquadro «Dov'è» (mappe IGN in `dicembre/mappe/`, 3 tempi coi mezzi, bottoni Maps; `tools/fai-mappe-dicembre.py`) e C7 luna-Topolino con la trama (`luna()` di `tools/fai-icone-dicembre.js`): fatti nel ramo, prove 24 VERO, foto mandate.
- **Cosa preme a Mario adesso:** DOMANDA 4 = ok a pubblicare mappe (C5) e luna-Topolino (C7), foto mandate ~18:58 e ~19:00; DOMANDA 3 = come mettere in ordine la pagina (C6, «troppe cose a schermo», senza togliere niente); 🛑 DOMANDA 2 = quale alloggio (consiglio n. 12 Relais Spa, 908 € con cancellazione gratuita fino all'8/12; molte cancellazioni gratuite scadono il 29/11).

## Stato (21/11 18:57 ora italiana)
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-principale-20261121-01WTjqUuR7dg/claude/parigi-ramo-definitivo.
- Kit 43 · 19/11/2026 · Preferenze v38 installato, prove 43/43 verdi (verifica: `docs/kit-progetto/VERSIONE`; tutti i `tools/test-*.py` con `python3 -I`).
- **C5 e C7 nel ramo, NON online** (#11): riquadro «Dov'è» negli alloggi e luna-Topolino (`?v=` icone 5 in `tools/fai-dicembre.py` e nel manifest, anteprima 4). Verifica: `node tools/prova-web-app.js` 24 VERO; `python3 -I tools/fai-mappe-dicembre.py --controlla` e `python3 -I tools/fai-dicembre.py --controlla` escono con 0.
- **Online adesso** (#10, PR #5): luna piena senza Topolino, `?v=` icone 4 e anteprima 3. Verifica: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/ | grep -o 'anteprima.jpg?v=[0-9]'` → 3.
- **Web app di dicembre online** (C3, #8): https://kur0chanx.github.io/parigi-in-tasca/dicembre/ (PR #3 e #4 unite il 21/11). Pagina facile: Ki Space nei costi, barre che portano alla scheda, schede e tappe che si aprono col tocco. Si cambia `dicembre/parigi-disney-natale.html`, poi `python3 -I tools/fai-dicembre.py`; prove `node tools/prova-web-app.js` (19) e prove del kit (43). L'Artifact qui sotto è rimasto alla v7.
- Artifact su claude.ai (https://claude.ai/artifact/NKYKfdKA3Hj9MNABDp1Wap, privata) fermo alla **versione 7**: vale la web app; si ripubblica solo se Mario lo usa ancora (verifica: `Artifact read` con `path: "index.html"` e `diff` con la sorgente).
- Sito `main`: guida di novembre `index.html` non toccata (verifica: `git diff origin/main~1 origin/main -- index.html` vuoto); `sw.js` con una riga che lascia stare `/dicembre/`; web app in `dicembre/` (verifica: il link risponde con «<title>Parigi e Disney a Natale»).

## Riferimenti
- Appunti: `research_notes/Parigi mercatini e Disneyland dicembre/` → `hotel_val_d_europe.md`, `hotel_disney.md`, `biglietti_disney.md`, `mercatini_natale.md`, `trasporti_bagagli.md`.
- Foto di Mario con il codice di prenotazione: solo in chat, mai nel repo.
- Confronto alloggi della #3: `research_notes/Parigi mercatini e Disneyland dicembre/hotel_foto_booking_mario.md` (candidati vicini alla RER con pulizia e orari; lontani; tutte le strutture delle foto; costi dei trasporti; cose non verificate).
- Ricerca alloggi della #4: `research_notes/Parigi mercatini e Disneyland dicembre/alloggi_spa_comodi.md` (spa, Disney, love room) e `alloggi_ricerca_ampia.md` (hotel, B&B, appartamenti, stanze; Bussy/Torcy non conviene; partire dal 12 costa +114–176 €).
- Foto: #5 `archivio/2026-11-21-consiglio-alloggio/` (vecchio consiglio n. 8, superato); #9 `archivio/2026-11-21-icona-anteprima/` (luna a falce, superate) e `archivio/2026-11-21-domanda-alloggio/`; #10 `archivio/2026-11-21-icona-topolino/` (mandate il 21/11 18:20).
- Foto della #11: `archivio/2026-11-21-mappe-alloggi/` (3, mandate ~18:58) e `archivio/2026-11-21-luna-topolino/` (2, mandate ~19:00).
- Mappe (#11): `tools/fai-mappe-dicembre.py` (posizioni degli alloggi con la fonte in `ALLOGGI`, mappa Plan IGN da `data.geopf.fr`, Licence Ouverte; blocco MAPPE scritto nella pagina), tempi e fonti in testa al blocco «Dov'è» della pagina (`DV`, `RA`).
- 28 foto di Booking di Mario (12–17 dic, 5 notti): `archivio/2026-11-21-booking-12-17-dic-mario/01…28-booking.jpg`.

## Sessione appena chiusa
- #11 (Opus 5.5 · Extra, aperta dalla #10): avvio, sveglia del 7/12 rifatta (`trig_01N9AmWxvrF8L9RdttrmTTJM`, legata alla #11), catena 11 in `docs/CHI-FA-COSA.md`.
- C5 fatto nel ramo: toccando un alloggio, «Dov'è» con mappa (alloggio, stazione, Chessy · Disney), tempi per mercatini (Notre-Dame), Disney e Orly, bottoni Maps; la mappa apre Google Maps. Prove nuove in `tools/prova-web-app.js` (24 VERO).
- Messaggi di Mario arrivati alla #10 dopo l'handoff (~18:35 e ~18:40, passati con `send_message`): pagina confusa → C6 (DOMANDA 3); luna-Topolino → C7. Mario 18:55: «ti autorizzo io» → C7 fatto nel ramo; riga in `docs/ERRORI.md` (mai cambiare da soli una cosa chiesta da Mario).
- Errore ripetuto: foto di lavoro aperte senza la scritta in alto (riga in `docs/ERRORI.md`; proposta di hook da chiedere a Mario).
- Controllo Da fare: 2 voci dai messaggi passati dalla #10 (C6, C7), 0 dai messaggi di questa sessione (il 18:55 è nella voce C7).

## Strade provate e scartate (perché; così la prossima non le rifà)
- Negozio ufficiale Disney e motore di prenotazione Disney con browser automatico: 403, bloccati. Prezzi dai siti non ufficiali concordi; il vero si legge alla cassa.
- Booking dal computer senza accesso: non mostra lo sconto Genius né il prezzo «solo su mobile» di Mario (circa −12 %); il prezzo vero lo legge Mario nell'app.
- Elenchi di Booking con browser automatico: pagina vuota; cambiare l'«user agent» = aggirare un blocco, vietato. Funziona `web_fetch` di Parallel Search sulle singole schede.
- Pubblicare con la PR #2 (ramo comune): scartato, metteva sul sito anche archivio, messaggi e appunti; si pubblica con un ramo-copia da `main` coi soli file di `dicembre/` (+ `sw.js`).
- Prova dei service worker su `127.0.0.1`: la guida di novembre si registra solo su `github.io` o `localhost`; `tools/prova-web-app.js` usa `localhost`.
- #10: sessione aperta a mano = nasce sul ramo della piattaforma senza `.claude/`, hook spenti e [AVVIO] fuori dal registro. Dopo il merge: `echo '{}' | python3 .claude/hooks/avvio-check.py` (passa al ramo giusto, elenca scorte e righe).
- #10: `list_triggers` senza filtri = ~20k token di sveglie di altri progetti: usare `enabled: true` e `limit` basso. `merge_pull_request`: `expectedHeadSha` di 40 caratteri.
- #11: immagine di Google Maps («Static Maps») = chiave a pagamento: scartata. Tessere di `tile.openstreetmap.org` per immagini fisse: la regola ufficiale vieta di scaricarle per l'uso senza rete: scartate. Overpass (dati OSM) bloccato dalla rete dell'ambiente. Usati: Plan IGN (WMS `data.geopf.fr`, 40 richieste/s, Licence Ouverte) e geocodifica IGN; Nominatim solo per ibis, Ki Space, Square Viviani, Orly.
- #11: nella prova, immagini con `loading="lazy"` fuori schermo non si caricano mai (prova bloccata): prima `scrollIntoView`, poi attesa con tempo massimo.

## Prossimi passi
0. Avvio: la sveglia del 7/12 `trig_01N9AmWxvrF8L9RdttrmTTJM` è legata alla #11: rifarla tua con `send_later` (stesso testo, 2026-12-07T09:07 Europe/Rome) e poi cancellare questa.
1. **DOMANDA 4** (mappe C5 + luna-Topolino C7): con «1», pubblicare come la PR #4: ramo-copia da `main` coi soli file di `dicembre/` (index.html, parigi-disney-natale.html, `mappe/` con `mappe.json`, icone, anteprima.jpg, manifest), prove sulla copia, PR, unione, poi sito vero: `curl` di `anteprima.jpg?v=4` e di `mappe/al-12.jpg`. Nastro delle versioni: v5 online. A Mario link e come aggiornare l'icona sul telefono (togliere e rimettere l'icona dalla Home). Con «2»: correggere e rimandare le foto.
2. **DOMANDA 3** (C6 pagina ordinata): con la risposta, specifica in `docs/lavori-in-corso/C6-pagina-ordinata.md`, poi codice, foto prima/dopo con `tools/confronta-foto.py`, niente pubblicazione senza ok. Lavoro grande: dire a Mario se serve Fable per il piano (skill `fable-opus`).
3. 🛑 **DOMANDA 2** (alloggio): col numero di Mario, se non è il 12, aggiorno il consiglio in cima (sorgente `dicembre/parigi-disney-natale.html`) e rifaccio le prove; poi pubblico. Col 12: ricordare la navetta della reception (non confermata) e di prenotare la camera «con 1 letto matrimoniale large» (non la suite).
4. Proposta a Mario (non urgente, file di `.claude/` = serve il suo ok scritto): l'hook `foto-check.py` blocca la lettura di un'immagine se il nome non dice LAVORO, PRIMA o DOPO (riga del 21/11 #11 in `docs/ERRORI.md`).
5. Voci 👁 di `docs/DA-FARE.md`: si chiudono quando Mario le vede nell'app. «A prova di stupido»: dopo la scelta, una passata sui testi (es. trasporti a persona in «Come sono calcolati»: farne una tabellina).
6. Ricontrollo della settimana prima (voce 👁 in `docs/DA-FARE.md`, sveglia del 7/12): orari RER A 13–17/12, scioperi, terminal Volotea, ticket della metro sul telefono.

## Blocchi e rischi
- Prezzi visti il 21/11: possono salire. Cancellazioni gratuite che scadono presto: 29/11 (n. 1, 4, 7, 10, 13), 6/12 (n. 11, 14), 8/12 (n. 12, camera con letto matrimoniale, 908 €), 10/12 (n. 2, 730 €, stima), 13/12 (n. 8, 577 €, si paga in hotel), 12/12 (n. 5).
- Appartamenti privati: niente reception, codici il giorno stesso, penali per pulizia (n. 10: 300 €), età minima 24–25 (n. 4, 10), silenzio dalle 20 (n. 4).
- Da verificare: navetta a chiamata del Relais Spa per tutti (non ufficiale), reception 24 ore del Crowne Plaza, fermata del bus 2234 e orario della domenica per Jungle Love, linea del bus del n. 7, ultime corse del 2233 per il n. 3, prezzo dell'Elysée sul sito ufficiale. Nella pagina sono segnati «non confermato».

## Ultimo messaggio di Mario
«Cosa stai dicendo che me l'hai disegnata in 3000 progetti? Ma ti autorizzo io. Tanto lo devo utilizzare solo io questo progetto in 2 persone, ma che decisioni prendi che non puoi farlo?»
(21/11 18:55 alla #11 → C7 luna-Topolino con la trama fatta nel ramo, foto mandate, DOMANDA 4.) Prima, alla #10 chiusa: ~18:40 «La luna, falla sempre con la forma di topolino, ma con la trama proprio di luna, con la grafica della luna, stelle vicino. Come è fatta adesso quella tonda, però a forma di topolino, di Mickey Mouse, della Disney.» (→ C7); ~18:35 «Comunque lo vedo ancora molto confuso. … senza eliminare nulla volevo proprio impaginarlo meglio, cioè sono troppe cose a schermo …» (→ C6, DOMANDA 3).

(I messaggi più vecchi: `docs/MESSAGGI-MARIO.md`.)

## Numeri liberi
Prossimo E libero: E1.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-21 18:32 · [AVVIO] Sessione #11 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo cl… → avvio fatto, C5 nel ramo
- 2026-11-21 18:55 · Cosa stai dicendo che me l'hai disegnata in 3000 progetti? Ma ti autorizzo io. T… → C7 nel ramo, foto `archivio/2026-11-21-luna-topolino/`, DOMANDA 4

Ultimo, intero:
> Cosa stai dicendo che me l'hai disegnata in 3000 progetti? Ma ti autorizzo io. Tanto lo devo utilizzare solo io questo progetto in 2 persone, ma che decisioni prendi che non puoi farlo?

