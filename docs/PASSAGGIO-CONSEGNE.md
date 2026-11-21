# Passaggio di consegne

Sessione attuale: #10 (`session_01WTjqUwUueBoLvRkqLpLRmU`, aperta da Mario il 21/11 18:06 con Fable · Extra; catena 0 di 8, la prossima la apro io; dopo la #9 `session_01WTjqUvsd71kLUH9Y77mC59`, chiusa il 21/11 ~18:05).

- **Già deciso da Mario (non richiedere):** viaggio dom 13 → gio 17/12/2026 in 2, senza auto; dom mercatini a Parigi, lun–mer Disneyland; alloggio con voto sopra 8 e pulizia buona, comodo senza auto (niente taxi né Uber); vanno bene hotel, B&B, appartamenti, stanze; kit installato (21/11), icona 🗼, ramo `claude/parigi-ramo-definitivo`; pagina «un po' disneyana, un po' mercatini», sera romantica; DUE colori a scelta (Blu notte · Vin brulé, interruttore sotto il titolo: Mario «va bene» 21/11). Notti: 4, dal 13 al 17 («le notti le conti in base al biglietto del volo», 21/11). Relax SOLO il primo giorno (domenica), lun–mer solo Disney con trasporti zero stress; tutto «a prova di stupido» (21/11, dopo l'handoff della #6). Link per l'amico = **web app** sul sito (21/11 17:25); pagina riordinata approvata («ok», 17:34).
- **Da non rifare:** la ricerca alloggi (fatta dalla #4 con 2 aiutanti: `alloggi_spa_comodi.md` 10 schede, `alloggi_ricerca_ampia.md` 16 schede, prezzi Booking 13→17 del 21/11); la sezione «Alloggi» della pagina (15 numerati, pubblicata); la pagina blu e l'interruttore dei colori (pubblicati); il mio consiglio unico n. 8 Moxy con cancellazione gratuita (versione 5, pubblicata dalla #5); il confronto delle 28 foto (`hotel_foto_booking_mario.md`); la ricerca jacuzzi/idromassaggio privato (#6, `alloggi_jacuzzi.md`); il verdetto spa nella pagina; il mega consiglio dei mercatini; la pagina che segue l'alloggio scelto (C1, nel ramo); `add_repo` di RVC (vietato). Il consiglio nuovo n. 12 Relais Spa e la domenica con la spa (C2, versione 7 pubblicata dalla #7); la rilettura delle tariffe del Relais Spa (21/11 sera, `alloggi_spa_comodi.md`). C3 (#8): Ki Space nei costi, barre che portano alla scheda, pagina con schede e tappe che si aprono col tocco, web app pubblicata (v2, PR #3). C4 (#9 e #10): icona coi mercatini con la luna a forma di Topolino, anteprima del link, controllo della web app e correzioni: **pubblicati dalla #10** (PR #4, 21/11 18:15).
- **Cosa preme a Mario adesso:** scegliere l'alloggio (🛑, rifatta dalla #10 alle 18:25 con le foto; cancellazioni gratuite dal 29/11) per mandare il link all'amico su WhatsApp/Telegram. Consiglio alloggio: **n. 12 Relais Spa** (831 € non rimborsabile, 908 € con cancellazione gratuita fino all'8/12). Il n. 2 Ki Space: domenica arrivo 22:30, spa già chiusa. Poi biglietti Disney. Icona e anteprima con la luna di Topolino sono online: aspetto solo che le veda sul telefono (riga ⏭ in «Aspetta Mario»).

## Stato (21/11 18:25 ora italiana)
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte della #8 e della #9 unite dalla #10 all'avvio.
- Kit 43 · 19/11/2026 · Preferenze v38 installato, prove 43/43 verdi (verifica: `docs/kit-progetto/VERSIONE`; tutti i `tools/test-*.py` con `python3 -I`).
- **C4 online** (#10): PR #4 unita il 21/11 18:15 (ramo-copia `versione-dicembre-topolino`, solo `dicembre/`: pagina, manifest, 4 icone, `anteprima.jpg`). Luna = testa di Topolino in `luna()` di `tools/fai-icone-dicembre.js`; `?v=`: icone 3, anteprima 2. Verifica: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/ | grep -o 'anteprima.jpg?v=2'`; file online uguali al ramo (`cmp`, fatto il 21/11 18:17); `node tools/prova-web-app.js` 19 VERO (nuova: stesso `?v=` delle icone nella pagina e nel manifest).
- **Web app di dicembre online** (C3, #8): https://kur0chanx.github.io/parigi-in-tasca/dicembre/ (PR #3 e #4 unite il 21/11). Pagina facile: Ki Space nei costi, barre che portano alla scheda, schede e tappe che si aprono col tocco. Si cambia `dicembre/parigi-disney-natale.html`, poi `python3 -I tools/fai-dicembre.py`; prove `node tools/prova-web-app.js` (19) e prove del kit (43). L'Artifact qui sotto è rimasto alla v7.
- Artifact su claude.ai (https://claude.ai/artifact/NKYKfdKA3Hj9MNABDp1Wap, privata) fermo alla **versione 7**: vale la web app; si ripubblica solo se Mario lo usa ancora (verifica: `Artifact read` con `path: "index.html"` e `diff` con la sorgente).
- Sito `main`: guida di novembre `index.html` non toccata (verifica: `git diff origin/main~1 origin/main -- index.html` vuoto); `sw.js` con una riga che lascia stare `/dicembre/`; web app in `dicembre/` (verifica: il link risponde con «<title>Parigi e Disney a Natale»).

## Riferimenti
- Appunti: `research_notes/Parigi mercatini e Disneyland dicembre/` → `hotel_val_d_europe.md`, `hotel_disney.md`, `biglietti_disney.md`, `mercatini_natale.md`, `trasporti_bagagli.md`.
- Foto di Mario con il codice di prenotazione: solo in chat, mai nel repo.
- Confronto alloggi della #3: `research_notes/Parigi mercatini e Disneyland dicembre/hotel_foto_booking_mario.md` (candidati vicini alla RER con pulizia e orari; lontani; tutte le strutture delle foto; costi dei trasporti; cose non verificate).
- Ricerca alloggi della #4: `research_notes/Parigi mercatini e Disneyland dicembre/alloggi_spa_comodi.md` (spa, Disney, love room) e `alloggi_ricerca_ampia.md` (hotel, B&B, appartamenti, stanze; Bussy/Torcy non conviene; partire dal 12 costa +114–176 €).
- Foto: #5 `archivio/2026-11-21-consiglio-alloggio/` (vecchio consiglio n. 8, superato); #9 `archivio/2026-11-21-icona-anteprima/` (luna a falce, superate) e `archivio/2026-11-21-domanda-alloggio/`; #10 `archivio/2026-11-21-icona-topolino/` (mandate il 21/11 18:25).
- 28 foto di Booking di Mario (12–17 dic, 5 notti): `archivio/2026-11-21-booking-12-17-dic-mario/01…28-booking.jpg`.

## Sessione appena chiusa
- #9 (Opus 5.5 · Extra): unite le scorte della #8 e della #9; messaggio di Mario del 17:5x passato dalla #8 (C4, parole intere in `docs/lavori-in-corso/C4-icona-anteprima-21-11.md`).
- C4: `tools/fai-icone-dicembre.js` disegna icona e anteprima 1200×630 (106 KB); tag `og:`/`twitter:card` in `tools/fai-dicembre.py` (regole WhatsApp dalla pagina ufficiale Meta, 21/11/2026); manifest con `?v=2` e icona `maskable`; README; 9 prove nuove in `tools/prova-web-app.js` (provate anche rotte).
- Controllo della web app con 1 aiutante; ogni punto verificato sugli appunti prima di correggere (elenco e scartati nel file C4). Foto mandate: `archivio/2026-11-21-icona-anteprima/` (DOMANDA 1) e `archivio/2026-11-21-domanda-alloggio/` (DOMANDA 2).
- Controllo Da fare: 1 voce aggiunta (promessa «correggo e rifaccio la domanda sull'hotel», sezione 1).

## Strade provate e scartate (perché; così la prossima non le rifà)
- Pubblicare le correzioni della pagina prima dell'ok all'icona: scartato, i tag dell'anteprima puntano a `anteprima.jpg` (nuova) e un giro solo costa meno; si pubblica tutto insieme.
- Dati dell'aiutante presi così come sono: «n. 13 circa 100 € in meno» era sbagliato (vero circa 60 € a parità di tariffa), «Queen Room» senza prezzo negli appunti, meteo e code delle Tuileries non negli appunti: scartati.
- Negozio ufficiale Disney e motore di prenotazione Disney con browser automatico: 403, bloccati. Prezzi dai siti non ufficiali concordi; il vero si legge alla cassa.
- Booking dal computer senza accesso: non mostra lo sconto Genius né il prezzo «solo su mobile» di Mario (circa −12 %); il prezzo vero lo legge Mario nell'app.
- Elenchi di Booking con browser automatico: pagina vuota; cambiare l'«user agent» = aggirare un blocco, vietato. Funziona `web_fetch` di Parallel Search sulle singole schede.
- Bussy e Torcy: corse più lunghe, quasi tutto esaurito. B&B con colazione: arrivo massimo 20–22.
- Ripubblicare l'Artifact: serve `Artifact read` senza `path` e il Read di tutte le righe (~50k token); con `path: "index.html"` salva solo la copia per il `diff`. Screenshot con Playwright: `reducedMotion: 'reduce'`.
- CSS inserito dopo una regola che sta dentro `@media` sulla stessa riga finisce nella media query: controllare la riga intera.
- Pubblicare con la PR #2 (ramo comune): scartato, metteva sul sito anche archivio, messaggi e appunti; si pubblica con un ramo-copia da `main` coi soli file di `dicembre/` (+ `sw.js`).
- Prova dei service worker su `127.0.0.1`: la guida di novembre si registra solo su `github.io` o `localhost`; `tools/prova-web-app.js` usa `localhost`.
- Pagina locale con `isMobile` in Playwright: senza `<meta viewport>` (la sorgente non ce l'ha) la pagina esce rimpicciolita; per le foto della sorgente niente `isMobile`.

## Prossimi passi
1. Fatto dalla #10 (luna di Topolino, pubblicazione, foto e link a Mario). Se Mario scrive che l'anteprima non esce su WhatsApp: il link con `?v=2` in fondo (WhatsApp tiene in memoria l'anteprima vecchia); icona vecchia sulla Home: toglierla e rimetterla.
2. DOMANDA 2 (alloggio, 🛑): col numero di Mario, se non è il 12, aggiorno il consiglio in cima (sorgente `dicembre/parigi-disney-natale.html`) e rifaccio le prove; poi pubblico (ramo-copia da `main`, solo `dicembre/`, come la PR #4). Col 12: ricordare la navetta della reception (non confermata) e di prenotare la camera «con 1 letto matrimoniale large» (non la suite).
3. Voci 👁 di `docs/DA-FARE.md`: si chiudono quando Mario vede icona, anteprima e pagina corretta nell'app.
4. «A prova di stupido»: dopo la scelta, una passata sui testi (es. la riga dei trasporti a persona in «Come sono calcolati» ha ~15 numeri: farne una tabellina).
5. Da ricontrollare la settimana prima (voce 👁 in `docs/DA-FARE.md`, sveglia del 7/12 09:07 nella #10: chi la sostituisce la rifà sua): orari RER A 13–17/12, scioperi, terminal Volotea; vendita dei ticket della metro sul telefono (piano B Navigo Easy già nella pagina).

## Blocchi e rischi
- Prezzi visti il 21/11: possono salire. Cancellazioni gratuite che scadono presto: 29/11 (n. 1, 4, 7, 10, 13), 6/12 (n. 11, 14), 8/12 (n. 12, camera con letto matrimoniale, 908 €), 10/12 (n. 2, 730 €, stima), 13/12 (n. 8, 577 €, si paga in hotel), 12/12 (n. 5).
- Appartamenti privati: niente reception, codici il giorno stesso, penali per pulizia (n. 10: 300 €), età minima 24–25 (n. 4, 10), silenzio dalle 20 (n. 4).
- Da verificare: navetta a chiamata del Relais Spa per tutti (non ufficiale), reception 24 ore del Crowne Plaza, fermata del bus 2234 e orario della domenica per Jungle Love, linea del bus del n. 7, ultime corse del 2233 per il n. 3, prezzo dell'Elysée sul sito ufficiale. Nella pagina sono segnati «non confermato».

## Ultimo messaggio di Mario
«aggiungi anche topolino di Disney a forma di luna nello sfondo nell'icona e immagine 
e poi publica»
(21/11 18:03 alla #9 già chiusa, mentre la #10 non era ancora aperta → Prossimi passi 1.)

Prima (17:5x alla #8, → C4): scopo della web app (mercatini e scelta dell'hotel), icona coi mercatini, anteprima per WhatsApp e Telegram (intero in `docs/lavori-in-corso/C4-icona-anteprima-21-11.md`).

(I messaggi più vecchi: `docs/MESSAGGI-MARIO.md`.)

## Numeri liberi
Prossimo E libero: E1.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-21 17:46 · [AVVIO] Sessione #9 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo cla… → avvio fatto, scorte #8 e #9 unite; messaggio di Mario del 17:5x (dalla #8) → C4, domande 1 e 2
- 2026-11-21 18:03 · aggiungi anche topolino di Disney a forma di luna nello sfondo nell'icona e imma… → risposta alla DOMANDA 1 (2, con ok a pubblicare): Prossimi passi 1 per la #10

Ultimo, intero:
> aggiungi anche topolino di Disney a forma di luna nello sfondo nell'icona e immagine 
> e poi publica
