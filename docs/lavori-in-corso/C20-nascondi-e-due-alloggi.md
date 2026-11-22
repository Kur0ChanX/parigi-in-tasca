# C20 · Pubblicare la v34, nascondere gli alloggi che non interessano, potenziare i 2 scelti (Controllo 14, 22/11)

Lavorato dall'**altro account** di Mario (sessione `session_01QTFEqRq6KHUZyj1XNVa82p`, titolo «Controllo 14»), mentre la Controllo 14 del primo account era ferma al limite delle 5 ore (fino alle 18:50). Chi riprende: legge qui e continua da qui, senza rifare.

## Mario 22/11 17:1x, intero (con foto della scheda n. 23)
> Sì, se tutte le prove sono verdi, pubblica. Dopo che è pubblicato dovresti fare un aggiornamento che possa andare a eliminare nell'app o archiviare o nascondere gli hotel. Gli hotel che non mi interessano perché ce n'è troppi e ne ho scelto solo alcuni. Così senza andare in conflitto con la pagina che si trasforma, insomma, mi hai capito come funziona. Dammi la possibilità di modificare, di togliere gli hotel per pulire un po'.
>
> Poi quelli che andiamo a potenziare sono questi due, quindi li andiamo a trovare un sacco di informazioni e a migliorare la pagina su questi due.
>
> https://www.airbnb.it/rooms/5115238?…&check_in=2026-12-13&check_out=2026-12-17&guests=2&adults=2
>
> Uno è in foto, uno è nel link. Ti ho messo nell'ambiente, ti ho messo il codice per il ponte per prenderti il kit RVC aggiornato.

Prima di questo: «Cerca di non creare conflitti con l'altro account… cerca di non calpestarvi lavoro l'uno con l'altro… quando andrò nell'altro account lui vedrà il lavoro che hai fatto e si adatta.»

## I due alloggi da potenziare
- Foto: **n. 23** «Appartamento a 2 km da Disneyland» (Airbnb, Montévrain, 489 €, voto 5,0).
- Link: **n. 16** «Nice studio near Disneyland Paris» (Airbnb 5115238, Chessy, accanto alla stazione Val d'Europe).

## Piano
1. v34: tutte le prove in locale (`giro: locale`), verdi → ramo-copia `versione-v34`, PR, unione, sito.
2. Nascondi alloggi (v35): tasto «Nascondi» su ogni alloggio (lista del passo 2 di «Scegli», schede di «Dormire», tabella, grafico, mappa); «Annulla» subito; in fondo «Nascosti: N · Mostra / Rimetti»; l'alloggio scelto non si nasconde; ricordato sul telefono (`localStorage`, resta dopo ogni aggiornamento della pagina); il link «Condividi» porta anche i nascosti, chi lo apre sceglie se nasconderli anche lui.
3. N. 23 e n. 16: ricerca (pagina Airbnb, recensioni, regole, check-in, foto, distanze), poi schede più ricche.

## Scelte in corsa
- Kit RVC: in questo contenitore `RVC_KIT_TOKEN` non c'è (`scarica-kit.py --versione` → esito 2). Le variabili nuove arrivano solo in una sessione aperta dopo averle salvate, e nell'ambiente giusto.
- v34 online 22/11 (PR 35, sito letto: `versione.json` = 34).
- «Nascondi» fatto in `dicembre/parigi-disney-natale.html` (v35 in prova): archivio `NASC` (`localStorage` `pdn-nascosti`, chiavi `d-<n>`/`n-<n>`), `hidN` esclude sempre la scelta di adesso; tasto in passo 1 (Parigi), passo 2 e schede di «Dormire»; pannello `#scNas` «🧹 Pulisci l'elenco» con le spunte; avviso con «Annulla» 7 s; mappa (`tmNas`); link «Manda questa scelta» con `&nascosti=` e domanda a chi lo apre (unione, mai sostituzione). Grafico dei confronti e tendina «Usa questo» lasciati interi (sono confronti scelti, non elenchi). Prova in `tools/prova-web-app.js` («Alloggi: «Nascondi»…»). Foto 1–4 in `archivio/2026-11-22-c20-nascondi-alloggi/`: aspetta l'ok di Mario (DOMANDA 1 in «Aspetta Mario»).
- Ricerca dei n. 23 e 16: 2 aiutanti in sottofondo, risultati in arrivo.

## Mario 22/11 ~17:5x, intero
> Attenzione perché molti, tipo questi due, uno di questi due su Booking costa meno addirittura. Ti dico esattamente quale, così non fai ricerche invano. Quello nella foto su Booking è 461 euro. Strano questi prezzi di differita. Speriamo sia affidabile la guida che mi stai facendo. Comunque potenziali per questi due che ti ho messo. Hotel, potenzia la guida.
> metti la funzione potenzia in2 alloggi da me citati e publica

- Letto come «sì» anche per la DOMANDA 1 (Nascondi): pubblicare tutto.
- Fatto (v35): `XX`/`XXM`/`xxBox` nella pagina: tendina «📋 Tutto sul n.» nei n. 16 e 23 (righe del passo 2 e schede di «Dormire»), messaggio in francese per il gestore con l'ora d'arrivo presa dal piano (`conto().sunIn`; lunedì se c'è la notte a Parigi), tasto «Copia»; filtro e gruppo `rosa` («⭐ La vostra rosa»); correzioni dalle ricerche (n. 16: richiesta di prenotazione, «host da 12 anni», tolto «letto e cucina nella stessa stanza»; n. 23: niente cauzione né età minima, scala interna, asciugamani da chiedere, Booking 461 € letto da Mario). Link Booking del n. 23: non trovato in una ricerca, da chiedere a Mario se serve. Foto 5–6 in archivio.

## Mario 22/11 ~17:50, intero (8 foto in `archivio/2026-11-22-c20-booking-n23/`)
> Perché questi 3 sono spenti/ non colorati bene e non ho messo nessuna opzione per alterarli non capisco il motivo
>
> https://www.booking.com/Share-DK5sTu
>
> guarda anche le foto

- I 3 «spenti» (n. 18, 20, 21) sono le righe `off` del passo 2: su Airbnb liberi solo dal 14, quindi con «4 notti 13→17» non si possono scegliere. DOMANDA a Mario (in «Aspetta Mario») su come mostrarli.
- v36: n. 23 col prezzo Booking 461 € (anche in `Q[23]` 4 notti: i totali ora usano Booking), link Booking, indirizzo, arrivo 14–23, asciugamani inclusi (Booking), 32 m², letto queen + 2 divani letto; data limite della cancellazione Booking non letta (si vede prima di pagare).
