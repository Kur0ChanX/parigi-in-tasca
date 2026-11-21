# C5 · Distanze e mappa in ogni scheda degli alloggi (21/11)

## Parole di Mario (alla #10, 21/11 18:23 e 18:25)
«ok publica se abbiamo finito»
«Aggiungimi quando clicco negli hotel anche la distanza con la mappa di Maps che mi mette l'hotel dai mercatini, l'hotel da Disney e l'hotel dall'aeroporto. Mi fa vedere anche su Maps o qualcosa di simile, una foto di Maps per capire dov'è.»

## Cosa faccio
Nella scheda che si apre toccando un alloggio (15 alloggi, dati `{n:…}` in `dicembre/parigi-disney-natale.html`, riga ~839), un riquadro «Dov'è»:
1. **Mappa piccola** (immagine) con l'alloggio segnato, per capire dov'è.
2. **3 distanze** dall'alloggio, coi mezzi pubblici (niente auto né taxi, «Già deciso»):
   - **mercatini**: il primo mercatino del giro consigliato della domenica (quello del «mega consiglio» nella pagina; leggerlo lì, non sceglierne un altro);
   - **Disney**: ingresso dei parchi / stazione Marne-la-Vallée–Chessy;
   - **aeroporto**: Orly (volo Volotea, appunti `trasporti_bagagli.md`; terminal da ricontrollare la settimana prima).
   Per ognuna: tempo e mezzi (es. «RER A 35 min + 5 min a piedi») e il bottone «Apri in Google Maps» col percorso coi mezzi pubblici (funzione `gm()` già nella pagina: `gm(dest,{from, mode:'transit'})`).

## Scelte (le decido io, col perché; a Mario solo l'effetto)
- **Mappa come immagine fatta da noi, non Google**: l'immagine di Google Maps («Static Maps») vuole una chiave a pagamento; un riquadro Google dentro la pagina pesa e senza rete resta bianco. Strada: immagine piccola da **OpenStreetMap** (mappa libera, simile a Maps), una per alloggio, fatta una volta da uno script in `tools/` (come `fai-icone-dicembre.js`), salvata in `dicembre/mappe/`, con la scritta obbligatoria «© OpenStreetMap». Così si vede anche senza rete (il service worker salva le immagini aperte). Per la mappa vera e il percorso: il bottone Google Maps.
- Regole di OpenStreetMap per le mappe (uso leggero, nome del programma nella richiesta, attribuzione): leggerle sulla pagina ufficiale prima di scaricare (skill `ricerca-aggiornata`), poche richieste, niente scaricamenti in blocco.
- **Coordinate di ogni alloggio**: dall'indirizzo della scheda Booking o del sito ufficiale dell'alloggio (ognuna con la fonte negli appunti, `research_notes/…/alloggi_*.md`); se l'indirizzo non è sicuro, «posizione indicativa».
- **Tempi**: dagli orari ufficiali (RATP/IDFM, SNCF, Paris Aéroport) o dalle righe già scritte nelle schede (`dist`, `tr`, `sun`); quelli presi da Google Maps si scrivono «stima di Google Maps». Mai inventati.

## Occhio critico (da chiudere prima del codice)
- Doppioni: le schede hanno già `dist` (distanza dalla stazione) e `tr` (costo dei treni): il riquadro nuovo non deve ripeterli, ma usarli.
- Telefono piccolo: riquadro corto (mappa larga quanto la scheda, alta ~160 px; 3 righe); immagini leggere (sotto ~40 KB l'una, 15 = ~600 KB): caricate solo quando si apre la scheda (`loading="lazy"`).
- Senza rete: le mappe già aperte restano; il bottone Google Maps senza rete non va (scriverlo piccolo?).
- La pagina segue l'alloggio scelto (C1): controllare che il riquadro non rompa quel giro.
- Prove: righe nuove in `tools/prova-web-app.js` (ogni alloggio ha mappa e 3 distanze; immagini esistono e sono piccole), poi foto per Mario (skill `foto`) PRIMA di pubblicare, perché cambia l'aspetto.

## Domande per Mario (solo se servono)
- Nessuna per partire: mercatino, Disney e aeroporto si leggono negli appunti. Da chiedere solo se gli appunti non bastano.

## Stato
- 21/11 18:32: scritto dalla #10 (Opus · Extra), lavoro passato alla #11.
