# Passaggio di consegne

Sessione attuale: #8 (dopo la #7 `session_01WTjqUxvERSiPgYyfyxxMEr`, chiusa alla soglia 21/11 17:16; la apre la #7 con `create_session` (catena 7 di 8)).

- **Già deciso da Mario (non richiedere):** viaggio dom 13 → gio 17/12/2026 in 2, senza auto; dom mercatini a Parigi, lun–mer Disneyland; alloggio con voto sopra 8 e pulizia buona, comodo senza auto (niente taxi né Uber); vanno bene hotel, B&B, appartamenti, stanze; kit installato (21/11), icona 🗼, ramo `claude/parigi-ramo-definitivo`; pagina «un po' disneyana, un po' mercatini», sera romantica; DUE colori a scelta (Blu notte · Vin brulé, interruttore sotto il titolo: Mario «va bene» 21/11). Notti: 4, dal 13 al 17 («le notti le conti in base al biglietto del volo», 21/11). Relax SOLO il primo giorno (domenica), lun–mer solo Disney con trasporti zero stress; tutto «a prova di stupido» (21/11, dopo l'handoff della #6).
- **Da non rifare:** la ricerca alloggi (fatta dalla #4 con 2 aiutanti: `alloggi_spa_comodi.md` 10 schede, `alloggi_ricerca_ampia.md` 16 schede, prezzi Booking 13→17 del 21/11); la sezione «Alloggi» della pagina (15 numerati, pubblicata); la pagina blu e l'interruttore dei colori (pubblicati); il mio consiglio unico n. 8 Moxy con cancellazione gratuita (versione 5, pubblicata dalla #5); il confronto delle 28 foto (`hotel_foto_booking_mario.md`); la ricerca jacuzzi/idromassaggio privato (#6, `alloggi_jacuzzi.md`); il verdetto spa nella pagina; il mega consiglio dei mercatini; la pagina che segue l'alloggio scelto (C1, nel ramo); `add_repo` di RVC (vietato). Il consiglio nuovo n. 12 Relais Spa e la domenica con la spa (C2, versione 7 pubblicata dalla #7); la rilettura delle tariffe del Relais Spa (21/11 sera, `alloggi_spa_comodi.md`).
- **Cosa preme a Mario adesso:** prenotare l'alloggio (cancellazioni gratuite che scadono il 29/11, prezzi che salgono) scrivendo il NUMERO; mio consiglio ora **n. 12 Relais Spa**, «Camera» 25 m² con letto matrimoniale e cancellazione gratuita fino all'8/12, 908 € (spa inclusa domenica sera 20:20–22:00; lun–mer 5 minuti + 1 fermata). Poi biglietti Disney e il link per l'amico.

## Stato (21/11 17:16 ora italiana)
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte: quella della #7 (01WTjqUxvERS) e quella della #6 (01WTjqUuDpVA, messaggi di Mario delle 17:05 e 17:06 nel registro) unite dalla #8.
- Kit 43 · 19/11/2026 · Preferenze v38 installato, prove 43/43 verdi (verifica: `docs/kit-progetto/VERSIONE`; tutti i `tools/test-*.py` con `python3 -I`).
- Pagina «Parigi e Disney a Natale» come Artifact: https://claude.ai/artifact/NKYKfdKA3Hj9MNABDp1Wap (privata). Online la **versione 7** = v6 (scelta dell'alloggio, mega consiglio mercatini) + C2 (consiglio n. 12, domenica con la spa), pubblicata dalla #7 il 21/11 ~17:20 (verifica: `Artifact read` con `path: "index.html"` e `diff` con `dicembre/parigi-disney-natale.html` del ramo: uguali a parte la riga `<title>` e `</body></html>`). Prove: browser senza errori, telefono 390 px, Moxy scelto dal menu torna alla domenica normale, `controlla-colori.py` VERO. Foto della v7 non fatte (soglia): la prossima le fa se Mario le vuole.
- Sito `main` (https://kur0chanx.github.io/parigi-in-tasca/) ancora con la guida 22–26/11: non toccato (verifica: `git diff origin/main -- index.html` vuoto).

## Riferimenti
- Appunti: `research_notes/Parigi mercatini e Disneyland dicembre/` → `hotel_val_d_europe.md`, `hotel_disney.md`, `biglietti_disney.md`, `mercatini_natale.md`, `trasporti_bagagli.md`.
- Foto di Mario con il codice di prenotazione: solo in chat, mai nel repo.
- Confronto alloggi della #3: `research_notes/Parigi mercatini e Disneyland dicembre/hotel_foto_booking_mario.md` (candidati vicini alla RER con pulizia e orari; lontani; tutte le strutture delle foto; costi dei trasporti; cose non verificate).
- Ricerca alloggi della #4: `research_notes/Parigi mercatini e Disneyland dicembre/alloggi_spa_comodi.md` (spa, Disney, love room) e `alloggi_ricerca_ampia.md` (hotel, B&B, appartamenti, stanze; Bussy/Torcy non conviene; partire dal 12 costa +114–176 €).
- Foto per Mario della #5 (mandate): `archivio/2026-11-21-consiglio-alloggio/1…4-*.jpg` (riquadro del consiglio, scheda del n. 8, tema chiaro).
- 28 foto di Booking di Mario (ricerca «Moxy Paris Val d'Europe · 12–17 dic», 5 notti, 2 adulti; Moxy 689 €, Residence du Parc 546 €, molti appartamenti privati con voti 8–9,8): `archivio/2026-11-21-booking-12-17-dic-mario/01…28-booking.jpg` (600 px).

## Sessione appena chiusa
- #7 (Opus 5.5 · Extra): unita la scorta della #5 (mancava nel registro il messaggio delle 16:44; ripristinata la `ULTIMA-RISPOSTA.md` più nuova). La #6, già chiusa, ha ricevuto 3 messaggi di Mario dopo l'handoff e li ha scritti in `docs/DA-FARE.md` (notti risolte, «a prova di stupido», relax solo domenica).
- C2 (`docs/lavori-in-corso/C2-consiglio-relax-21-11.md`): consiglio unico da n. 8 Moxy a **n. 12 Relais Spa** (unico con spa vera inclusa 7–22 E a 5 minuti dal treno). Domenica col n. 12: stesse 3 tappe, più veloci dopo il tramonto, rientro 20:10, spa 20:20–22:00; tolta la spa del mattino lun–mer. Conti, «Da fare», «Da ricontrollare», duelli e filtro Spa allineati. Domanda «Quale alloggio»: consiglio ora 3.
- Errore trovato: gli appunti dicevano «908 € con 2 letti singoli»; riletto su Booking: 908 € è la camera con letto matrimoniale. Riga in `docs/ERRORI.md`.
- Controllo Da fare: 0 voci aggiunte (i 3 messaggi di Mario avevano già le voci 👁, scritte dalla #6).

## Strade provate e scartate (perché; così la prossima non le rifà)
- Negozio ufficiale Disney e motore di prenotazione Disney con browser automatico: 403, bloccati. Prezzi dai siti non ufficiali concordi; il vero si legge alla cassa.
- Booking dal computer senza accesso: non mostra lo sconto Genius né il prezzo «solo su mobile» di Mario (circa −12 %); il prezzo vero lo legge Mario nell'app.
- Elenchi di Booking con browser automatico: pagina vuota; cambiare l'«user agent» = aggirare un blocco, vietato. Funziona `web_fetch` di Parallel Search sulle singole schede.
- Bussy e Torcy: corse più lunghe, quasi tutto esaurito. B&B con colazione: arrivo massimo 20–22.
- Ripubblicare l'Artifact senza leggere la versione online: rifiutato; serve leggere TUTTE le righe della copia salvata (costa ~50k token). Prossima volta: `Artifact read` senza `path` solo prima del publish; poi `diff` della copia (senza la prima riga) con la sorgente del ramo per sapere se online è cambiato qualcosa.
- `Artifact read` con `path: "index.html"`: salva la copia (utile per il diff, pochi token) ma NON vale per ripubblicare; serve la lettura senza `path` e il Read di tutte le righe. Screenshot con Playwright: emulare `reducedMotion: 'reduce'`, sennò lo scorrimento morbido della pagina sposta le foto.
- CSS inserito dopo una regola che sta dentro `@media` sulla stessa riga finisce nella media query: controllare la riga intera.

## Prossimi passi
0. Fatto dalla #8: iscrizione alla PR #2; 2 foto della v7 mandate a Mario (`archivio/2026-11-21-versione-7/`).
1. A Mario, se non l'ha già letto: la v7 è sul link; chiudere le voci 👁 (consiglio, relax, a prova di stupido, mega consiglio, pagina che cambia) solo quando lui le vede.
2. Domanda «Quale alloggio» (🛑): quando Mario scrive il numero, lo sceglie dal menu della pagina; se non è il 12, aggiorno il consiglio in cima e verifico bus/navette del suo (2233, 2234: IDFM ufficiale). Col 12: chiedere alla reception la navetta gratis per Disney (non confermata).
3. Domanda «Link per l'amico» (🛑): con 1 → web app in `dicembre/` sul sito (manifest e icona, `noindex`, senza toccare `index.html`, `sw.js` e la guida di novembre), unione in `main` con la skill `unione-pr`; con 2 → passi guidati per Condividi dal browser.
4. «A prova di stupido»: alla prossima modifica della pagina, una passata di semplificazione dei testi (frasi più corte, meno numeri) prima di aggiungere altro; proporla a Mario in una riga.
5. Tolta dalla #8 la seconda sera ai mercatini: Mario vuole lun–mer solo Disney (21/11 17:06).
6. Da ricontrollare la settimana prima (lista nella pagina): orari RER A del 13–17/12 (anche la domenica sera verso le 19:25, stimata «ogni 15 minuti»), scioperi, terminal Volotea.

## Blocchi e rischi
- Prezzi visti il 21/11: possono salire. Cancellazioni gratuite che scadono presto: 29/11 (n. 1, 4, 7, 10, 13), 6/12 (n. 11, 14), 8/12 (n. 12, solo camera 2 letti), 12/12 (n. 5).
- Appartamenti privati: niente reception, codici il giorno stesso, penali per pulizia (n. 10: 300 €), età minima 24–25 (n. 4, 10), silenzio dalle 20 (n. 4).
- Da verificare: navetta a chiamata del Relais Spa per tutti (non ufficiale), reception 24 ore del Crowne Plaza, fermata del bus 2234 e orario della domenica per Jungle Love, linea del bus del n. 7, ultime corse del 2233 per il n. 3, prezzo dell'Elysée sul sito ufficiale. Nella pagina sono segnati «non confermato».

## Ultimo messaggio di Mario
«Metti qui anche il ki space, quello che ti avevo consigliato io, che abbiamo guardato. Metti anche quello in confronto tra i costi e tutto. Poi metti che se clicco uno di quelli mi porta al discorso o qualche altra pagina, insomma, utile. Comunque rendila veramente facile e intuitiva a livello di visiva. Anche non troppe cose a schermo, se clicco poi magari mi apre un'altra cosa, però non troppissime informazioni, cioè non ti sto dicendo di toglierle, ma di riorganizzarle meglio.» (21/11 17:24, arrivato alla #7 dopo l'handoff, con la foto delle barre dei costi della v7 → `archivio/2026-11-21-foto-mario/1-confronto-costi-v7.jpg`; voce 👁 in `docs/DA-FARE.md` sezione 1; passato alla #8)

«Allora, la spa la vogliamo fare o l'idromassaggio o insomma modalità relax è solo il primo giorno, poi gli altri 3 giorni ce li dedichiamo solo a Disneyland ed vogliamo essere comodi con i trasporti, ecco. Con i trasporti, zero stress, vogliamo proprio rilassarci a Disneyland.» (arrivato alla #6 dopo l'handoff → voce 👁 in `docs/DA-FARE.md`; fatto dalla #7: C2, versione 7 pubblicata)

Prima: «Fai tutto di facile comprensione, a prova di stupido, eh?» e «le notti le conti in base al biglietto del volo» (alla #6 dopo l'handoff → voce 👁; notti risolte: 13→17).

(I messaggi più vecchi: `docs/MESSAGGI-MARIO.md`.)

## Numeri liberi
Prossimo E libero: E1.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-21 17:05 · [AVVIO] Sessione #7 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo cla… → avvio fatto; scorta della #5 unita; C2 fatto (consiglio n. 12 Relais Spa, domenica con la spa) e versione 7 pubblicata

Ultimo, intero:
> [AVVIO] Sessione #7 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo claude/parigi-ramo-definitivo): git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached», prima git checkout claude/parigi-ramo-definitivo).
> Leggi CLAUDE.md, docs/ERRORI.md e docs/PASSAGGIO-CONSEGNE.md; continua da sola dai «Prossimi passi».

