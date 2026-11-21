# Passaggio di consegne

Sessione attuale: #4 (dopo la #3 `session_01WTjqUtMTqKATxiNksYn1nS`, chiusa alla soglia 21/11 16:08; la apre la #3 con `create_session` (catena 3 di 8)).

- **Già deciso da Mario (non richiedere):** viaggio dom 13 → gio 17/12/2026 in 2, senza auto; dom mercatini a Parigi, lun–mer Disneyland; hotel con voto Booking sopra 8 e pulizia buona, comodo alla RER A Val d'Europe; kit installato (21/11), icona 🗼, ramo `claude/parigi-ramo-definitivo`; pagina moderna «un po' disneyana, un po' mercatini», effetto wow, professionale.
- **Da non rifare:** la ricerca (5 filoni, appunti in `research_notes/Parigi mercatini e Disneyland dicembre/`, dati del 21/11); la pagina (pubblicata); il confronto delle 28 foto di Booking (fatto dalla #3: `research_notes/Parigi mercatini e Disneyland dicembre/hotel_foto_booking_mario.md`, indirizzi, pulizia, orari d'arrivo, distanze dalla RER); `add_repo` di RVC (vietato dal kit, vedi `docs/ERRORI.md`).
- **Cosa preme a Mario adesso:** scegliere e prenotare l'alloggio (prezzi che salgono) fra TANTE opzioni spiegate una contro l'altra, con almeno una spa, trasporti economici e veloci (niente taxi né Uber); la pagina di dicembre come sera romantica blu con stelle e lucine; poi biglietti Disney.

## Stato (21/11 16:08 ora italiana)
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorta della #3 (`scorta-principale-20261121-01WTjqUtMTqK/…`): solo copie automatiche di lavoro già nel ramo (versioni più vecchie di `docs/DA-FARE.md` e consegne): NON unirla, la toglie il giro notturno.
- Kit 43 · 19/11/2026 · Preferenze v38 installato, prove 43/43 verdi (verifica: `docs/kit-progetto/VERSIONE`; tutti i `tools/test-*.py` con `python3 -I`).
- Pagina «Parigi e Disney a Natale» pubblicata come Artifact: https://claude.ai/artifact/NKYKfdKA3Hj9MNABDp1Wap (privata; sorgente `dicembre/parigi-disney-natale.html`; verifica: la sorgente nel ramo è quella pubblicata, versione 3 del 21/11 ~15:53, grafica calda). Mario l'ha vista e ha risposto «cambia» (ultimo messaggio): da rifare blu notte con stelle (voce in `docs/DA-FARE.md` sezione 1).
- Sito `main` (https://kur0chanx.github.io/parigi-in-tasca/) ancora con la guida 22–26/11: non toccato (verifica: `git diff origin/main -- index.html` vuoto).

## Riferimenti
- Appunti: `research_notes/Parigi mercatini e Disneyland dicembre/` → `hotel_val_d_europe.md`, `hotel_disney.md`, `biglietti_disney.md`, `mercatini_natale.md`, `trasporti_bagagli.md`.
- Foto di Mario di oggi (prenotazione voli, Ki Space su Booking): solo in chat, non salvate in `archivio/` (contengono il codice di prenotazione: non vanno nel repo).
- Confronto alloggi della #3: `research_notes/Parigi mercatini e Disneyland dicembre/hotel_foto_booking_mario.md` (candidati vicini alla RER con pulizia e orari; lontani; tutte le strutture delle foto; costi dei trasporti; cose non verificate).
- 28 foto di Booking di Mario (ricerca «Moxy Paris Val d'Europe · 12–17 dic», 5 notti, 2 adulti; Moxy 689 €, Residence du Parc 546 €, molti appartamenti privati con voti 8–9,8): `archivio/2026-11-21-booking-12-17-dic-mario/01…28-booking.jpg` (600 px).

## Sessione appena chiusa
- #3 (Opus 5.5 · Extra): avvio, poi confronto delle 28 foto di Booking (circa 60 alloggi) col criterio trasporti di Mario.
- Scoperta: il «km dal centro» di Booking è dal paese di Montévrain, non dalla stazione: 2,4–2,8 km ≈ vicino alla RER Val d'Europe; 0,2–1,4 km ≈ lontano (bus 2233 o 25–30 min a piedi). Gli appartamenti con le sigle (B206, B309, C016, C101, 212…) sono tutti in Avenue de la Société des Nations, a ~2,2 km dalla RER.
- Migliori vicino alla RER (5 notti, prezzi delle foto): Stylish Apartment Rentaway 597 € (9,3, pulizia 9,3, 12 min a piedi, arrivo fino a mezzanotte), Moxy 689 € (8,7, pulizia 9,0, 8 min, reception 24 ore; la foto è forse la camera a 2 letti singoli), Chez Stéphane & Sophie 589 € (9,4, pulizia 9,5, 15 min, arrivo fino alle 23), Studio parking wifi 611 € (letto a castello), Grand Appartement Dreams 657 € (cauzione 500 € con bonifico). Dettagli e fonti nel file.
- Domanda nuova: notti dal 13 o dal 12 (riga in «## 0. Aspetta Mario»). La domanda «quale alloggio» NON è stata fatta: Mario intanto ha chiesto tante opzioni e una spa (ultimo messaggio).
- Niente mandato a Mario in questa sessione (nessuna foto, nessuna scelta): il primo messaggio della #4 è il suo.
- Controllo Da fare: 0 voci aggiunte (le due richieste dell'ultimo messaggio le ha già scritte la #2; la #3 ha aggiornato la voce hotel con «fatto» e «manca»).

## Strade provate e scartate (perché; così la prossima non le rifà)
- Negozio ufficiale Disney e motore di prenotazione Disney con browser automatico: 403, bloccati. Prezzi dai siti non ufficiali concordi; il vero si legge alla cassa.
- Booking dal computer senza accesso: non mostra lo sconto Genius né il prezzo «solo su mobile» di Mario; il prezzo vero lo legge Mario nell'app.
- Elenchi di Booking con browser automatico (Playwright): pagina vuota; cambiare l'«user agent» lo blocca il filtro di sicurezza (aggirare un blocco di un sito = vietato). Funziona invece `web_fetch` di Parallel Search sulle schede Booking (dà pulizia, orari, cauzioni) e la ricerca per nome (indirizzi da planetofhotels, Google Maps, Airbnb).
- Lodge du Petit Lion (9,6): arrivo solo 16–20, domenica si arriva verso le 21:45. La Coudraie: 5,4 km dalla RER, in campagna. Ki Space: 3,1 km dalla RER (serve il bus): fuori dal criterio trasporti, ma ha la spa → rivalutarlo come «opzione spa».
- Unire la scorta automatica `scorta-principale-20261121-01WTjqUtYZaK/…`: più vecchia del ramo, avrebbe rimesso `docs/ERRORI.md.prima-del-kit` già tolto. Non unita.

## Prossimi passi
1. All'avvio: `subscribe_pr_activity` sulla PR #2.
2. Hotel, tante opzioni (voce in `docs/DA-FARE.md` sezione 1; Mario «fammi capire perché questo è meglio di questo … tante opzioni … una spa»): parti dal file `hotel_foto_booking_mario.md` e da `hotel_val_d_europe.md`. Aggiungi gli alloggi con spa o piscina comodi senza auto: Relais Spa Val d'Europe (4★, 400 m dalla RER, 712,53 € per 4 notti da computer il 21/11), Ki Space Hotel & Spa (spa, 465 € per 4 notti nell'app di Mario, ma 3,1 km dalla RER), hotel Disney con piscina (`hotel_disney.md`), e cerca altri (ricerca aggiornata, prezzi del giorno). Fai gruppi chiari, ognuno col suo «perché sì / perché no»: più economico vicino alla RER, più comodo (reception 24 ore, poco cammino), più spazioso, con spa, a piedi dai parchi. Per ogni opzione: prezzo (foto di Mario o pagina ufficiale, con data), minuti a piedi dalla RER, pulizia, arrivo domenica sera (verso le 21:45), costo dei trasporti lun–mer (RER 2,55 € a corsa, 30,60 € in due per 3 giorni).
3. Mettile nella pagina di dicembre (Mario: «metti anche diverse opzioni per l'hotel»): sezione «Scegli l'alloggio» con le schede a confronto. Insieme al punto 4 (stessa ripubblicazione).
4. Pagina blu romantica (voce in sezione 1): cielo blu notte o celeste con tante stelle, tante lucine, sera; tieni casette e festoni; via i colori caldi vin brulé. Foto prima/dopo con `tools/confronta-foto.py` (skill `foto`, scritta in alto), poi ripubblica sullo stesso link (prima `Artifact read` con `path: index.html`, poi publish con `url`).
5. Poi a Mario, in un messaggio: le foto, e le domande «quale alloggio» (scelte numerate, una per gruppo) e «notti dal 13 o dal 12» (già in «## 0. Aspetta Mario»).
6. Risposta «sito»: con 1 → nuova `index.html` per dicembre sul modello della guida di novembre; poi `python3 -I tools/controlla-colori.py`.
7. Risposta «unione»: unire la #2 solo col suo ok scritto (skill `unione-pr`).
8. Da ricontrollare la settimana prima (lista nella pagina): orari RER A del 13–17/12, scioperi, terminal Volotea a Orly.

## Blocchi e rischi
- Prezzi hotel visti il 21/11: possono salire. Tariffe più basse non rimborsabili (Stylish e Moxy: nelle foto niente «Cancellazione gratuita»).
- Appartamenti privati: niente reception, codici il giorno stesso, penali per pulizia (Stylish 300 €), età minima 24–25, cauzioni con bonifico (Grand Appartement Dreams 500 €).
- Pacchetti Disney prenotati a meno di 30 giorni: forse pagamento intero subito (due pagine ufficiali discordano); non serve finché non si sceglie Disney.

## Ultimo messaggio di Mario
«Calda intendo di atmosfera, non di colori, cioè nel senso che sia con tante lucine illuminate, va bene anche romantica al buio, va bene, non per forza illuminata a giorno, anzi di sera è anche più bello. Va bene, anche tendente al blu, al celeste, il cielo, metti molte stelle, insomma, un po' romantico. Metti anche diverse opzioni per l'hotel, ad esempio per avere tutto comodo, per avere una vacanza rilassata e non camminare troppo, per avere i servizi vicino, e sempre deve costare il meglio. Insomma, fammi scegliere tra vari hotel. E poi magari un posto dove possiamo andare, magari un hotel dove possiamo andare che c'è là una spa, qualcosa per rilassarci, qualcosa per tipo tipo una spa. Dammi diverse opzioni, non vincolarmi solo in un hotel. Fammi capire perché questo è meglio di questo, perché questo è meglio di quest'altro. Dammi diverse opzioni. Tante opzioni.» (arrivato nella #2 dopo l'handoff: risposta «cambia» alla domanda sulla pagina calda; voci in `docs/DA-FARE.md` sezione 1)

Prima: «conta che dobbiamo non oagare una fucilata nei trasporti ubber o taxi per andare a Disneyland no spostarci per i mercatini vorremmo se è possibile la mattina per andare a Disneyland un opzione non troppo costosa e non troppo lenta per andare a Dianeyland e se non essere un problema ritornare a dormire con mille mila ore di viaggio o troppi costi» (con altre 8 foto di Booking: 21–28 nella stessa cartella)

Prima: «aspetta le altre foto prima di pensare» (con 20 foto di Booking, ricerca «Moxy Paris Val d'Europe · 12 dic - 17 dic», prezzi per 5 notti: `archivio/2026-11-21-booking-12-17-dic-mario/`; nota: il volo è dom 13, la ricerca parte dal 12)

Prima: «nella pagina tanti mercatini luci e atmosfera natalizia avvolgente non triste» (arrivato nella #1 dopo l'handoff → voce in `docs/DA-FARE.md` sezione 2, da fare subito)

Prima: «installa il kit  simbolo della torre va bene  ramo ok»

## Numeri liberi
Prossimo E libero: E1.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-21 15:57 · [AVVIO] Sessione #3 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo cla… → testo d'avvio della #3 (fatto: avvio, confronto delle 28 foto in `hotel_foto_booking_mario.md`)

Ultimo, intero:
> [AVVIO] Sessione #3 di Parigi in tasca (repo Kur0ChanX/parigi-in-tasca, ramo claude/parigi-ramo-definitivo): git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached», prima git checkout claude/parigi-ramo-definitivo).
> Leggi CLAUDE.md, docs/ERRORI.md e docs/PASSAGGIO-CONSEGNE.md; continua da sola dai «Prossimi passi».

