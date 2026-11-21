# Passaggio di consegne

Sessione attuale: #9 (dopo la #8 `session_01WTjqUwT3GsbcTs9uTQhbck`, chiusa alla soglia 21/11 17:44; la apre la #8 con `create_session` (catena 7 di 8)).

- **Già deciso da Mario (non richiedere):** viaggio dom 13 → gio 17/12/2026 in 2, senza auto; dom mercatini a Parigi, lun–mer Disneyland; alloggio con voto sopra 8 e pulizia buona, comodo senza auto (niente taxi né Uber); vanno bene hotel, B&B, appartamenti, stanze; kit installato (21/11), icona 🗼, ramo `claude/parigi-ramo-definitivo`; pagina «un po' disneyana, un po' mercatini», sera romantica; DUE colori a scelta (Blu notte · Vin brulé, interruttore sotto il titolo: Mario «va bene» 21/11). Notti: 4, dal 13 al 17 («le notti le conti in base al biglietto del volo», 21/11). Relax SOLO il primo giorno (domenica), lun–mer solo Disney con trasporti zero stress; tutto «a prova di stupido» (21/11, dopo l'handoff della #6). Link per l'amico = **web app** sul sito (21/11 17:25); pagina riordinata approvata («ok», 17:34).
- **Da non rifare:** la ricerca alloggi (fatta dalla #4 con 2 aiutanti: `alloggi_spa_comodi.md` 10 schede, `alloggi_ricerca_ampia.md` 16 schede, prezzi Booking 13→17 del 21/11); la sezione «Alloggi» della pagina (15 numerati, pubblicata); la pagina blu e l'interruttore dei colori (pubblicati); il mio consiglio unico n. 8 Moxy con cancellazione gratuita (versione 5, pubblicata dalla #5); il confronto delle 28 foto (`hotel_foto_booking_mario.md`); la ricerca jacuzzi/idromassaggio privato (#6, `alloggi_jacuzzi.md`); il verdetto spa nella pagina; il mega consiglio dei mercatini; la pagina che segue l'alloggio scelto (C1, nel ramo); `add_repo` di RVC (vietato). Il consiglio nuovo n. 12 Relais Spa e la domenica con la spa (C2, versione 7 pubblicata dalla #7); la rilettura delle tariffe del Relais Spa (21/11 sera, `alloggi_spa_comodi.md`). C3 (#8): Ki Space nei costi, barre che portano alla scheda, pagina con schede e tappe che si aprono col tocco, web app pubblicata (v2, PR #3).
- **Cosa preme a Mario adesso:** prenotare l'alloggio (cancellazioni gratuite dal 29/11, prezzi che salgono) scrivendo il NUMERO; mio consiglio **n. 12 Relais Spa** (908 €, letto matrimoniale, cancellazione gratuita fino all'8/12); il n. 2 Ki Space costa circa 470 € in meno ma ha la navetta ogni 50 minuti. Poi biglietti Disney.

## Stato (21/11 17:44 ora italiana)
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-principale-20261121-01WTjqUwT3Gs/claude/parigi-ramo-definitivo.
- Kit 43 · 19/11/2026 · Preferenze v38 installato, prove 43/43 verdi (verifica: `docs/kit-progetto/VERSIONE`; tutti i `tools/test-*.py` con `python3 -I`).
- **Web app di dicembre** (C3, #8): https://kur0chanx.github.io/parigi-in-tasca/dicembre/ (PR #3 unita il 21/11, ramo-copia `versione-dicembre`). Pagina facile: Ki Space nei costi, barre che portano alla scheda, schede e tappe che si aprono col tocco. Si cambia `dicembre/parigi-disney-natale.html`, poi `python3 -I tools/fai-dicembre.py`; prove `node tools/prova-web-app.js` (11) e prove del kit (43). L'Artifact qui sotto è rimasto alla v7.
- Pagina «Parigi e Disney a Natale» come Artifact: https://claude.ai/artifact/NKYKfdKA3Hj9MNABDp1Wap (privata). Online la **versione 7** = v6 (scelta dell'alloggio, mega consiglio mercatini) + C2 (consiglio n. 12, domenica con la spa), pubblicata dalla #7 il 21/11 ~17:20 (verifica: `Artifact read` con `path: "index.html"` e `diff` con `dicembre/parigi-disney-natale.html` del ramo: uguali a parte la riga `<title>` e `</body></html>`). Prove: browser senza errori, telefono 390 px, Moxy scelto dal menu torna alla domenica normale, `controlla-colori.py` VERO. Foto della v7 non fatte (soglia): la prossima le fa se Mario le vuole.
- Sito `main`: guida di novembre `index.html` non toccata (verifica: `git diff origin/main~1 origin/main -- index.html` vuoto); `sw.js` con una riga che lascia stare `/dicembre/`; web app in `dicembre/` (verifica: il link risponde con «<title>Parigi e Disney a Natale»).

## Riferimenti
- Appunti: `research_notes/Parigi mercatini e Disneyland dicembre/` → `hotel_val_d_europe.md`, `hotel_disney.md`, `biglietti_disney.md`, `mercatini_natale.md`, `trasporti_bagagli.md`.
- Foto di Mario con il codice di prenotazione: solo in chat, mai nel repo.
- Confronto alloggi della #3: `research_notes/Parigi mercatini e Disneyland dicembre/hotel_foto_booking_mario.md` (candidati vicini alla RER con pulizia e orari; lontani; tutte le strutture delle foto; costi dei trasporti; cose non verificate).
- Ricerca alloggi della #4: `research_notes/Parigi mercatini e Disneyland dicembre/alloggi_spa_comodi.md` (spa, Disney, love room) e `alloggi_ricerca_ampia.md` (hotel, B&B, appartamenti, stanze; Bussy/Torcy non conviene; partire dal 12 costa +114–176 €).
- Foto per Mario della #5 (mandate): `archivio/2026-11-21-consiglio-alloggio/1…4-*.jpg` (riquadro del consiglio, scheda del n. 8, tema chiaro).
- 28 foto di Booking di Mario (ricerca «Moxy Paris Val d'Europe · 12–17 dic», 5 notti, 2 adulti; Moxy 689 €, Residence du Parc 546 €, molti appartamenti privati con voti 8–9,8): `archivio/2026-11-21-booking-12-17-dic-mario/01…28-booking.jpg` (600 px).

## Sessione appena chiusa
- #8 (Opus 5.5 · Extra): unite le scorte della #6 (messaggi di Mario 17:05 e 17:06 nel registro) e della #7; foto della v7 mandate.
- C3 (`docs/lavori-in-corso/C3-pagina-facile-21-11.md`, messaggio di Mario del 17:24 alla #7): Ki Space nei costi (1.085 €), barre = link alla scheda, schede compatte con «Dettagli e prenotazione», tappe che si aprono col tocco, tabella/fonti/«Da ricontrollare» chiuse: al telefono 37.576 → 21.860 px. Foto prima/dopo mandate, «ok» di Mario.
- Web app: `tools/fai-dicembre.py` (fa `dicembre/index.html` dalla sorgente; `--controlla`), `dicembre/sw.js`, manifest, icone (abete con stella). PR #3 da ramo-copia `versione-dicembre` (7 file, non il ramo comune) unita: v2 online, nastro aggiornato, notifica mandata.
- Errore trovato e provato: `sw.js` di novembre salvava ogni pagina come «./» (dicembre sovrascriveva la copia senza rete di novembre); difesa + `node tools/prova-web-app.js`; riga in `docs/ERRORI.md`.
- Controllo Da fare: 1 voce aggiunta (promessa della web app, sezione 2); la domanda «Link per l'amico» e quella sulla pagina chiuse.

## Strade provate e scartate (perché; così la prossima non le rifà)
- Negozio ufficiale Disney e motore di prenotazione Disney con browser automatico: 403, bloccati. Prezzi dai siti non ufficiali concordi; il vero si legge alla cassa.
- Booking dal computer senza accesso: non mostra lo sconto Genius né il prezzo «solo su mobile» di Mario (circa −12 %); il prezzo vero lo legge Mario nell'app.
- Elenchi di Booking con browser automatico: pagina vuota; cambiare l'«user agent» = aggirare un blocco, vietato. Funziona `web_fetch` di Parallel Search sulle singole schede.
- Bussy e Torcy: corse più lunghe, quasi tutto esaurito. B&B con colazione: arrivo massimo 20–22.
- Ripubblicare l'Artifact senza leggere la versione online: rifiutato; serve leggere TUTTE le righe della copia salvata (costa ~50k token). Prossima volta: `Artifact read` senza `path` solo prima del publish; poi `diff` della copia (senza la prima riga) con la sorgente del ramo per sapere se online è cambiato qualcosa.
- `Artifact read` con `path: "index.html"`: salva la copia (utile per il diff, pochi token) ma NON vale per ripubblicare; serve la lettura senza `path` e il Read di tutte le righe. Screenshot con Playwright: emulare `reducedMotion: 'reduce'`, sennò lo scorrimento morbido della pagina sposta le foto.
- CSS inserito dopo una regola che sta dentro `@media` sulla stessa riga finisce nella media query: controllare la riga intera.
- Pubblicare con la PR #2 (ramo comune): scartato, metteva sul sito anche archivio, messaggi e appunti; si pubblica con un ramo-copia da `main` coi soli file di `dicembre/` (+ `sw.js`).
- Prova dei service worker su `127.0.0.1`: la guida di novembre si registra solo su `github.io` o `localhost`; `tools/prova-web-app.js` usa `localhost`.
- Pagina locale con `isMobile` in Playwright: senza `<meta viewport>` (la sorgente non ce l'ha) la pagina esce rimpicciolita; per le foto della sorgente niente `isMobile`.

## Prossimi passi
1. Domanda «Quale alloggio» (🛑): col numero di Mario, se non è il 12, aggiorno il consiglio in cima (sorgente `dicembre/parigi-disney-natale.html`), poi `python3 -I tools/fai-dicembre.py`, prove (`--controlla`, `node tools/prova-web-app.js`, `controlla-colori.py`, kit), foto, e pubblico con un ramo-copia da `main` (nuova `versione-…`, solo `dicembre/`). Col 12: ricordare la navetta della reception (non confermata).
2. Voci 👁 di `docs/DA-FARE.md`: si chiudono quando Mario dice di aver aperto la web app (e l'amico).
3. «A prova di stupido»: dopo la scelta dell'alloggio, proporre a Mario in una riga una passata sui testi (frasi corte, meno numeri).
4. L'Artifact su claude.ai è rimasto alla v7: ripubblicarlo (con un rimando alla web app) solo se Mario lo usa ancora (~50k token).
5. Da ricontrollare la settimana prima (lista nella pagina): orari RER A del 13–17/12, scioperi, terminal Volotea.

## Blocchi e rischi
- Prezzi visti il 21/11: possono salire. Cancellazioni gratuite che scadono presto: 29/11 (n. 1, 4, 7, 10, 13), 6/12 (n. 11, 14), 8/12 (n. 12, solo camera 2 letti), 12/12 (n. 5).
- Appartamenti privati: niente reception, codici il giorno stesso, penali per pulizia (n. 10: 300 €), età minima 24–25 (n. 4, 10), silenzio dalle 20 (n. 4).
- Da verificare: navetta a chiamata del Relais Spa per tutti (non ufficiale), reception 24 ore del Crowne Plaza, fermata del bus 2234 e orario della domenica per Jungle Love, linea del bus del n. 7, ultime corse del 2233 per il n. 3, prezzo dell'Elysée sul sito ufficiale. Nella pagina sono segnati «non confermato».

## Ultimo messaggio di Mario
«ok» (21/11 17:34, risposta a «mi serve il tuo ok per metterla online come web app» → pubblicata, v2).

Prima, in questa sessione: «web app dopo aver risposto alla domanda della sessione precedente.» (17:25 → web app dopo C3). Alla #7 dopo l'handoff (17:24): «Metti qui anche il ki space … rendila veramente facile e intuitiva … non ti sto dicendo di toglierle, ma di riorganizzarle meglio.» (intero in `docs/lavori-in-corso/C3-pagina-facile-21-11.md`).

(I messaggi più vecchi: `docs/MESSAGGI-MARIO.md`.)

## Numeri liberi
Prossimo E libero: E1.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-21 17:17 · [AVVIO] Sessione #8 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo cla… → avvio fatto, scorte #6 e #7 unite, foto v7
- 2026-11-21 17:25 · web app dopo aver risposto alla domanda della sessione precedente. → risposta alla domanda «Link per l'amico» (1, web app); C3 prima
- 2026-11-21 17:34 · ok → risposta alla domanda «Pagina più facile» (1); web app pubblicata, PR #3, v2

Ultimo, intero:
> ok

