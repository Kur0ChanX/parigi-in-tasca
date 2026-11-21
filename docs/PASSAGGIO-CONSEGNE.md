# Passaggio di consegne

Sessione attuale: #2 (dopo la #1 `session_01WTjqUtYZaKMxhjF5TrnL8N`, chiusa alla soglia 21/11 15:41; la apre la #1 con `create_session` (catena 1 di 8)).

- **Già deciso da Mario (non richiedere):** viaggio dom 13 → gio 17/12/2026 in 2, senza auto; dom mercatini a Parigi, lun–mer Disneyland; hotel con voto Booking sopra 8 e pulizia buona, comodo alla RER A Val d'Europe; kit installato (21/11), icona 🗼, ramo `claude/parigi-ramo-definitivo`; pagina moderna «un po' disneyana, un po' mercatini», effetto wow, professionale.
- **Da non rifare:** la ricerca (5 filoni, appunti in `research_notes/Parigi mercatini e Disneyland dicembre/`, dati del 21/11); la pagina (pubblicata, scena d'apertura già ingrandita); `add_repo` di RVC (vietato dal kit, vedi `docs/ERRORI.md`).
- **Cosa preme a Mario adesso:** scegliere e prenotare l'hotel (prezzi che salgono), poi biglietti Disney.

## Stato (21/11 15:41 ora italiana)
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. La #1 è chiusa (superata dalla #2).
- Kit 43 · 19/11/2026 · Preferenze v38 installato, prove 43/43 verdi (verifica: `docs/kit-progetto/VERSIONE`; tutti i `tools/test-*.py` con `python3 -I`).
- Pagina «Parigi e Disney a Natale» pubblicata come Artifact: https://claude.ai/artifact/NKYKfdKA3Hj9MNABDp1Wap (privata; sorgente `dicembre/parigi-disney-natale.html`; verifica: la sorgente nel ramo è quella pubblicata, versione 2). Mario non ha ancora scritto di averla vista: promessa aperta.
- Sito `main` (https://kur0chanx.github.io/parigi-in-tasca/) ancora con la guida 22–26/11: non toccato (verifica: `git diff origin/main -- index.html` vuoto).

## Riferimenti
- Appunti: `research_notes/Parigi mercatini e Disneyland dicembre/` → `hotel_val_d_europe.md`, `hotel_disney.md`, `biglietti_disney.md`, `mercatini_natale.md`, `trasporti_bagagli.md`.
- Foto di Mario di oggi (prenotazione voli, Ki Space su Booking): solo in chat, non salvate in `archivio/` (contengono il codice di prenotazione: non vanno nel repo).

## Sessione appena chiusa
- Ricerca con 5 aiutanti (Fable), poi pagina con Opus. Mario ha cambiato motore in Opus a metà (Fable al 6 %).
- Decisioni e motivi (scritte nella pagina):
  - Dormire: 4 notti in un solo hotel vicino a Val d'Europe. Consigliato **Moxy Paris Val d'Europe** (8,7, pulizia 9,0, 650 m dalla RER, 524 € su Booking dal computer, senza sconto Genius). **Ki Space** (candidato di Mario, 465 € nella sua app con Genius): valido per voto e pulizia, ma a 3,1 km dalla RER, dipende da una navetta ogni ~50 minuti. Differenza totale stimata ~90 € (camera + treni per i parchi). Regola data a Mario: Moxy nella sua app a ~540 € o meno → Moxy.
  - Biglietti Disney: 3 giorni / 2 parchi 14–16/12 = 272 € a testa, 544 € in due (stesso prezzo di 1 parco lun + 2 giorni); prezzi da 2 siti non ufficiali concordi, il negozio ufficiale blocca i controlli automatici.
  - Hotel Disney: no (Cheyenne 4 notti ~1.970 € con biglietti; ibrido 2 notti +263 €).
  - Trasporti: biglietti singoli, niente Navigo settimanale; giovedì uscita dall'hotel ~8:30.
- Costi stimati in due (hotel + biglietti + trasporti): Ki Space ~1.085 €, Moxy ~1.175 €, ibrido ~1.438 €, Cheyenne ~2.047 €.
- Controllo Da fare: 0 voci aggiunte (le richieste di oggi sono fatte o già in «## 0. Aspetta Mario» e nelle sezioni 2–3).

## Strade provate e scartate (perché; così la prossima non le rifà)
- Negozio ufficiale Disney e motore di prenotazione Disney con browser automatico: 403, bloccati. Prezzi dai siti non ufficiali concordi; il vero si legge alla cassa.
- Booking dal computer senza accesso: non mostra lo sconto Genius né il prezzo «solo su mobile» di Mario; il prezzo vero lo legge Mario nell'app.
- Unire la scorta automatica `scorta-principale-20261121-01WTjqUtYZaK/…`: più vecchia del ramo, avrebbe rimesso `docs/ERRORI.md.prima-del-kit` già tolto. Non unita.

## Prossimi passi
1. All'avvio: `subscribe_pr_activity` sulla PR #2 (la #1 la lascia).
2. Ricordare a Mario le 3 domande di «## 0. Aspetta Mario» di `docs/DA-FARE.md` (una per messaggio).
3. Hotel scelto → nella pagina: scheda «Consigliato» sull'hotel scelto, orari di uscita lun–gio per quell'hotel (Ki Space: navetta da chiedere alla reception), ripubblicare l'Artifact con lo stesso file (`dicembre/…` copiato nella scratchpad e `url` dell'Artifact), commit della sorgente.
4. Risposta «sito»: con 1 → nuova `index.html` per dicembre sul modello della guida di novembre (stessa grafica e scheda «Prossima uscita»), dati dagli appunti; poi `python3 -I tools/controlla-colori.py`.
5. Risposta «unione»: unire la #2 solo col suo ok scritto (skill `unione-pr`).
6. Da ricontrollare la settimana prima (lista nella pagina): orari RER A del 13–17/12, scioperi, terminal Volotea a Orly, navetta Ki Space.

## Blocchi e rischi
- Prezzi hotel visti il 21/11: possono salire. Tariffe più basse non rimborsabili.
- Pacchetti Disney prenotati a meno di 30 giorni: forse pagamento intero subito (due pagine ufficiali discordano); non serve finché non si sceglie Disney.

## Ultimo messaggio di Mario
«nella pagina tanti mercatini luci e atmosfera natalizia avvolgente non triste» (arrivato nella #1 dopo l'handoff → voce in `docs/DA-FARE.md` sezione 2, da fare subito)

Prima: «installa il kit  simbolo della torre va bene  ramo ok»

## Numeri liberi
Prossimo E libero: E1.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).
