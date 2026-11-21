# Passaggio di consegne

Sessione attuale: #11 (dopo la #10 `session_01WTjqUwUueBoLvRkqLpLRmU`, chiusa alla soglia 21/11 18:31; la apre la #10 con `create_session` (catena 1 di 8)).

- **Già deciso da Mario (non richiedere):** viaggio dom 13 → gio 17/12/2026 in 2, senza auto; dom mercatini a Parigi, lun–mer Disneyland; alloggio con voto sopra 8 e pulizia buona, comodo senza auto (niente taxi né Uber); vanno bene hotel, B&B, appartamenti, stanze; kit installato (21/11), icona 🗼, ramo `claude/parigi-ramo-definitivo`; pagina «un po' disneyana, un po' mercatini», sera romantica; DUE colori a scelta (Blu notte · Vin brulé, interruttore sotto il titolo: Mario «va bene» 21/11). Notti: 4, dal 13 al 17 («le notti le conti in base al biglietto del volo», 21/11). Relax SOLO il primo giorno (domenica), lun–mer solo Disney con trasporti zero stress; tutto «a prova di stupido» (21/11, dopo l'handoff della #6). Link per l'amico = **web app** sul sito (21/11 17:25); pagina riordinata approvata («ok», 17:34).
- **Da non rifare:** la ricerca alloggi (fatta dalla #4 con 2 aiutanti: `alloggi_spa_comodi.md` 10 schede, `alloggi_ricerca_ampia.md` 16 schede, prezzi Booking 13→17 del 21/11); la sezione «Alloggi» della pagina (15 numerati, pubblicata); la pagina blu e l'interruttore dei colori (pubblicati); il mio consiglio unico n. 8 Moxy con cancellazione gratuita (versione 5, pubblicata dalla #5); il confronto delle 28 foto (`hotel_foto_booking_mario.md`); la ricerca jacuzzi/idromassaggio privato (#6, `alloggi_jacuzzi.md`); il verdetto spa nella pagina; il mega consiglio dei mercatini; la pagina che segue l'alloggio scelto (C1, nel ramo); `add_repo` di RVC (vietato). Il consiglio nuovo n. 12 Relais Spa e la domenica con la spa (C2, versione 7 pubblicata dalla #7); la rilettura delle tariffe del Relais Spa (21/11 sera, `alloggi_spa_comodi.md`). C3 (#8): Ki Space nei costi, barre che portano alla scheda, pagina con schede e tappe che si aprono col tocco, web app pubblicata (v2, PR #3). C4 (#9 e #10): icona coi mercatini con la luna a forma di Topolino, anteprima del link, controllo della web app e correzioni: **pubblicati dalla #10** (PR #4, 21/11 18:15).
- **Cosa preme a Mario adesso:** le **distanze e la mappa in ogni scheda degli alloggi** (C5, chiesto 18:25, piano `docs/lavori-in-corso/C5-mappe-hotel.md`); scegliere l'alloggio (🛑, rifatta dalla #10 alle 18:20; cancellazioni gratuite dal 29/11). Consiglio alloggio: **n. 12 Relais Spa** (908 € con cancellazione gratuita fino all'8/12). Icona e anteprima online: aspetto solo che le veda sul telefono (riga ⏭).

## Stato (21/11 18:31 ora italiana)
- Ramo comune ≠ origin: PUSH DA FARE (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb.
- Kit 43 · 19/11/2026 · Preferenze v38 installato, prove 43/43 verdi (verifica: `docs/kit-progetto/VERSIONE`; tutti i `tools/test-*.py` con `python3 -I`).
- **C4 online** (#10): PR #4 (18:15) e PR #5 (18:36, luna piena con le stelline al posto della testa di Topolino, tolta: personaggio protetto di Disney, `docs/ERRORI.md`). Solo `dicembre/`; `?v=`: icone 4, anteprima 3. Verifica: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/ | grep -o 'anteprima.jpg?v=3'`; file online uguali al ramo (`cmp`, 21/11 18:37); `node tools/prova-web-app.js` 19 VERO.
- **Web app di dicembre online** (C3, #8): https://kur0chanx.github.io/parigi-in-tasca/dicembre/ (PR #3 e #4 unite il 21/11). Pagina facile: Ki Space nei costi, barre che portano alla scheda, schede e tappe che si aprono col tocco. Si cambia `dicembre/parigi-disney-natale.html`, poi `python3 -I tools/fai-dicembre.py`; prove `node tools/prova-web-app.js` (19) e prove del kit (43). L'Artifact qui sotto è rimasto alla v7.
- Artifact su claude.ai (https://claude.ai/artifact/NKYKfdKA3Hj9MNABDp1Wap, privata) fermo alla **versione 7**: vale la web app; si ripubblica solo se Mario lo usa ancora (verifica: `Artifact read` con `path: "index.html"` e `diff` con la sorgente).
- Sito `main`: guida di novembre `index.html` non toccata (verifica: `git diff origin/main~1 origin/main -- index.html` vuoto); `sw.js` con una riga che lascia stare `/dicembre/`; web app in `dicembre/` (verifica: il link risponde con «<title>Parigi e Disney a Natale»).

## Riferimenti
- Appunti: `research_notes/Parigi mercatini e Disneyland dicembre/` → `hotel_val_d_europe.md`, `hotel_disney.md`, `biglietti_disney.md`, `mercatini_natale.md`, `trasporti_bagagli.md`.
- Foto di Mario con il codice di prenotazione: solo in chat, mai nel repo.
- Confronto alloggi della #3: `research_notes/Parigi mercatini e Disneyland dicembre/hotel_foto_booking_mario.md` (candidati vicini alla RER con pulizia e orari; lontani; tutte le strutture delle foto; costi dei trasporti; cose non verificate).
- Ricerca alloggi della #4: `research_notes/Parigi mercatini e Disneyland dicembre/alloggi_spa_comodi.md` (spa, Disney, love room) e `alloggi_ricerca_ampia.md` (hotel, B&B, appartamenti, stanze; Bussy/Torcy non conviene; partire dal 12 costa +114–176 €).
- Foto: #5 `archivio/2026-11-21-consiglio-alloggio/` (vecchio consiglio n. 8, superato); #9 `archivio/2026-11-21-icona-anteprima/` (luna a falce, superate) e `archivio/2026-11-21-domanda-alloggio/`; #10 `archivio/2026-11-21-icona-topolino/` (mandate il 21/11 18:20).
- 28 foto di Booking di Mario (12–17 dic, 5 notti): `archivio/2026-11-21-booking-12-17-dic-mario/01…28-booking.jpg`.

## Sessione appena chiusa
- #10 (Fable 5.2 · Extra, aperta a mano da Mario): avvio fatto a mano (nata senza kit), scorte della #8 e della #9 unite.
- Luna = testa di Topolino (`luna()` di `tools/fai-icone-dicembre.js`), `?v=` icone 3 e anteprima 2, prova nuova sul `?v=` (provata anche rotta). Prove: web app 19 VERO, colori, `--controlla`, kit 43/43.
- Pubblicato: ramo-copia `versione-dicembre-topolino` da `main` (solo `dicembre/`, prove rifatte sulla copia), PR #4 unita alle 18:15, `main` unito nel ramo, sito vero riletto (`curl`, `cmp`).
- A Mario (18:20): 4 foto, link, passi per vedere icona e anteprima sul telefono, domanda sull'alloggio rifatta, parere sul marchio Disney, «basta Opus»; notifica mandata.
- Mario 18:23-18:25 (passato a Opus): «ok publica» e la richiesta C5. Tolta la testa di Topolino (personaggio protetto: riga in `docs/ERRORI.md`), luna piena con le stelline, PR #5 unita 18:36, sito controllato; foto `archivio/2026-11-21-icona-luna/` a Mario alle 18:32; piano C5 scritto.
- Sveglia del 7/12 09:07 (ricontrollo della settimana prima): quella della #10 cancellata, rifatta dalla #11.
- Controllo Da fare: 0 voci dai messaggi (solo l'[AVVIO]); 1 voce dai «Prossimi passi» (ricontrollo della settimana prima).

## Strade provate e scartate (perché; così la prossima non le rifà)
- Negozio ufficiale Disney e motore di prenotazione Disney con browser automatico: 403, bloccati. Prezzi dai siti non ufficiali concordi; il vero si legge alla cassa.
- Booking dal computer senza accesso: non mostra lo sconto Genius né il prezzo «solo su mobile» di Mario (circa −12 %); il prezzo vero lo legge Mario nell'app.
- Elenchi di Booking con browser automatico: pagina vuota; cambiare l'«user agent» = aggirare un blocco, vietato. Funziona `web_fetch` di Parallel Search sulle singole schede.
- Pubblicare con la PR #2 (ramo comune): scartato, metteva sul sito anche archivio, messaggi e appunti; si pubblica con un ramo-copia da `main` coi soli file di `dicembre/` (+ `sw.js`).
- Prova dei service worker su `127.0.0.1`: la guida di novembre si registra solo su `github.io` o `localhost`; `tools/prova-web-app.js` usa `localhost`.
- #10: sessione aperta a mano = nasce sul ramo della piattaforma senza `.claude/`, hook spenti e [AVVIO] fuori dal registro. Dopo il merge: `echo '{}' | python3 .claude/hooks/avvio-check.py` (passa al ramo giusto, elenca scorte e righe).
- #10: `list_triggers` senza filtri = ~20k token di sveglie di altri progetti: usare `enabled: true` e `limit` basso. `merge_pull_request`: `expectedHeadSha` di 40 caratteri.

## Prossimi passi
1. PRIMA DI TUTTO: **C5 distanze e mappa negli alloggi**, piano e scelte in `docs/lavori-in-corso/C5-mappe-hotel.md` (occhio critico lì; mappe OpenStreetMap fatte da uno script, bottone Google Maps col percorso; dati dagli appunti e dalle pagine ufficiali). Foto a Mario PRIMA di pubblicare. Nel primo messaggio: «⚠️ Aspettano te» a turno; le foto delle 2 righe le ha già mandate la #10 alle 18:20 e 18:32.
2. DOMANDA 2 (alloggio, 🛑): col numero di Mario, se non è il 12, aggiorno il consiglio in cima (sorgente `dicembre/parigi-disney-natale.html`) e rifaccio le prove; poi pubblico (ramo-copia da `main`, solo `dicembre/`, come la PR #4). Col 12: ricordare la navetta della reception (non confermata) e di prenotare la camera «con 1 letto matrimoniale large» (non la suite).
3. Voci 👁 di `docs/DA-FARE.md`: si chiudono quando Mario le vede nell'app. Prova `prova-web-app.js`: un giro sulla copia ha dato 1 FALSO «service worker suo» e poi 3 giri verdi (ipotesi: controllo partito prima che il service worker prenda la pagina): se ricapita, alzare l'attesa di `sw()` e provarla.
4. «A prova di stupido»: dopo la scelta, una passata sui testi (es. la riga dei trasporti a persona in «Come sono calcolati» ha ~15 numeri: farne una tabellina).
5. Da ricontrollare la settimana prima (voce 👁 in `docs/DA-FARE.md`, sveglia `trig_01N9AmWxvrF8L9RdttrmTTJM` del 7/12 09:07, rifatta dalla #11): orari RER A 13–17/12, scioperi, terminal Volotea; vendita dei ticket della metro sul telefono (piano B Navigo Easy già nella pagina).

## Blocchi e rischi
- Prezzi visti il 21/11: possono salire. Cancellazioni gratuite che scadono presto: 29/11 (n. 1, 4, 7, 10, 13), 6/12 (n. 11, 14), 8/12 (n. 12, camera con letto matrimoniale, 908 €), 10/12 (n. 2, 730 €, stima), 13/12 (n. 8, 577 €, si paga in hotel), 12/12 (n. 5).
- Appartamenti privati: niente reception, codici il giorno stesso, penali per pulizia (n. 10: 300 €), età minima 24–25 (n. 4, 10), silenzio dalle 20 (n. 4).
- Da verificare: navetta a chiamata del Relais Spa per tutti (non ufficiale), reception 24 ore del Crowne Plaza, fermata del bus 2234 e orario della domenica per Jungle Love, linea del bus del n. 7, ultime corse del 2233 per il n. 3, prezzo dell'Elysée sul sito ufficiale. Nella pagina sono segnati «non confermato».

## Ultimo messaggio di Mario
«Aggiungimi quando clicco negli hotel anche la distanza con la mappa di Maps che mi mette l'hotel dai mercatini, l'hotel da Disney e l'hotel dall'aeroporto. Mi fa vedere anche su Maps o qualcosa di simile, una foto di Maps per capire dov'è.»
(21/11 18:25 alla #10 → C5, Prossimi passi 1.) Prima, 18:23: «ok publica se abbiamo finito» (→ già online; poi luna piena, PR #5). 18:03 alla #9: «aggiungi anche topolino … e poi publica» (→ fatto, poi Topolino tolto: personaggio protetto).

(I messaggi più vecchi: `docs/MESSAGGI-MARIO.md`.)

## Numeri liberi
Prossimo E libero: E1.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-21 18:23 · ok publica se abbiamo finito → già online (PR #4); poi luna piena (PR #5), foto mandate
- 2026-11-21 18:25 · Aggiungimi quando clicco negli hotel anche la distanza con la mappa di Maps che … → C5, `docs/lavori-in-corso/C5-mappe-hotel.md`, voce 👁 in DA-FARE; lo fa la #11

Ultimo, intero:
> Aggiungimi quando clicco negli hotel anche la distanza con la mappa di Maps che mi mette l'hotel dai mercatini, l'hotel da Disney e l'hotel dall'aeroporto. Mi fa vedere anche su Maps o qualcosa di simile, una foto di Maps per capire dov'è.

