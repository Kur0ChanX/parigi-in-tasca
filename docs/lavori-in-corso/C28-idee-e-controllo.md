# C28 · Idee nuove e controllo generale della guida di dicembre (Controllo 26)

## Parole di Mario (23/11/2026)
> Poi continuo a migliorare l'applicazione con cose utili per me, per informazioni, insomma, valutiamoli insieme alle tue idee, io le approvo o no. Poi controlla se va tutto bene, se ci sono buchi, se ci sono mancanze, se è possibile migliorare alcune parti, se ci siamo dimenticati qualcosa, insomma, se vogliamo aggiungere qualcos'altro di intelligente, di smart, geniale, insomma, dammi delle idee, io vediamo un po' se funzionano o no. Però prima vediamo questa cosa del kit, risolviamola.

## Parole di Mario (23/11/2026 12:14, a kit avviato)
> ora continua a migliorare l'applicazione con cose utili per me, per informazioni, insomma, valutiamoli insieme alle tue idee, io le approvo o no. Poi controlla se va tutto bene, se ci sono buchi, se ci sono mancanze, se è possibile migliorare alcune parti, se ci siamo dimenticati qualcosa, insomma, se vogliamo aggiungere qualcos'altro di intelligente, di smart, geniale, insomma, dammi delle idee,

## Ordine deciso da Mario
1. Prima il kit RVC aggiornato (riga in «Aspetta Mario» di `docs/DA-FARE.md`).
2. Poi: controllo della guida (buchi, mancanze, cose dimenticate, parti da migliorare) + elenco di idee numerate; Mario approva o no ognuna. Niente codice prima del suo sì.

## Scelte in corsa
- 23/11 Controllo 27: controllo fatto leggendo la pagina resa nel browser (Da fare 10 voci, Da ricontrollare, Treni, Biglietti, Giorni) + conta degli argomenti nel sorgente.
- Buchi trovati: niente documenti (carta d'identità valida per l'espatrio, tessera sanitaria europea), niente assicurazione, niente powerbank (il telefono è biglietto di metro, Disney e imbarco), niente lista valigia; spunte solo su un telefono (siete in due); frase interna «Le note di ricerca stimavano…» in Treni.
- Idee proposte a Mario (numeri 1–10 nel messaggio del 23/11 ~15:20): 1 documenti e salute in «Da fare» · 2 batteria (powerbank) · 3 lista valigia con spunte · 4 spunte condivise fra i due telefoni (link) · 5 meteo dei giorni durante il viaggio · 6 «prossimi treni adesso» (orari in tempo reale) · 7 conto delle spese vere contro la stima · 8 scheda «emergenza» (112, indirizzo dell'alloggio in francese da mostrare, ambasciata) · 9 dove mangiare ai parchi senza spendere troppo · 10 pulizia testi interni. Consiglio: 1, 2, 3, 8, 10 subito (solo testi, piccoli); 4, 5, 6 dopo; 7 e 9 se vi servono.
- Niente codice prima del sì di Mario. I fatti nuovi dalle pagine ufficiali con data (skill ricerca-aggiornata).

## Parole di Mario (23/11/2026 15:31, risposta alle idee)
> Allora, secondo me puoi fare pulizia dei testi interni senza cancellare informazioni, cioè solo migliorarlo e renderlo più ordinato. Poi secondo me puoi fare i treni in tempo reale, i mezzi di trasporto, lista valigie con spunte no perché c'è in un'altra applicazione, il meteo va bene, i migliori ristoranti dove mangiare a Parigi con in base a tipo carne, pesce o sushi o cucina tradizionale, con insomma i migliori. Fai non i più, cioè non solo i più blasonati, ma anche ristoranti nicchie molto molto buoni, che di solito sono anche più buoni di quelli blasonati, con non so, le informazioni che mi possono servire, con il voto, il costo, mi clicco, mi fa vedere il menu, le foto, il posto dov'è, quanto mi fa vedere, quanto è distante, insomma valuta tu dei ristoranti a Parigi per pranzo e per cena.

## Scelte di Mario (23/11 15:31) e piano (Controllo 28)
- Sì: 10 pulizia dei testi (SENZA togliere informazioni: solo più chiari e ordinati) · 6 treni e mezzi in tempo reale · 5 meteo · nuovo: ristoranti (carne, pesce, sushi, tradizionale; anche locali di nicchia molto buoni, non solo famosi; voto, costo, menu, foto, posizione, distanza; pranzo e cena).
- No: 3 lista valigia (c'è in un'altra app). Non scelti: 1, 2, 4, 7, 8, 9 (restano idee).
- Piano: A ristoranti (ricerca con 3 aiutanti: pranzo di domenica a Saint-Germain, cena di domenica in centro lungo la RER A, cene lun–mer a Val d'Europe e Disney Village; poi sezione «Dove mangiare» con filtri) · B treni: tasti alle pagine ufficiali dei prossimi passaggi per ogni stazione del viaggio (una chiave delle API ufficiali sul sito pubblico la vedrebbe chiunque) · C meteo: previsioni dei 5 giorni da Open-Meteo (senza chiave, dati Météo-France; salvate sul telefono per quando manca la rete) + link Météo-France · D pulizia testi per ultima, con un controllo automatico che confronta numeri, orari, prezzi e link prima e dopo (nessuna informazione persa).
- Motore: Opus basta (piano chiaro, niente dati veri né soldi).
- Treni in tempo reale, link ufficiali RATP trovati il 23/11 (il sito blocca i programmi: verificati dall'indice del motore di ricerca, non aperti): bonjour-ratp.fr/gares/val-d-europe/ · /gares/marne-la-vallee-chessy/ · /gares/chatelet-les-halles/ · /stations-metro/gare-de-lyon/ (metro 1 e 14) · /stations-metro/aeroport-d-orly/ · /horaires-rer/ligne-a/ · /horaires-metro/ligne-1/ e /ligne-14/ · /fr/info-trafic/ · ratp.fr/vos-lignes/vos-stations/gare-de-lyon (RER A e D). Da aprire a mano dal browser della prova prima di pubblicare.
- Meteo: Open-Meteo non provabile da qui il 23/11 (limite giornaliero del proxy condiviso: 429); nella prova della web app si finge la risposta.
- Ristoranti: 3 aiutanti in ricerca (file JSON nello scratchpad, poi in `research_notes/`).
- 23/11 Mario «metti Google, The Fork e TripAdvisor»: in ogni scheda i voti dei tre siti (con numero di recensioni e data), ognuno col suo link; detto ai 3 aiutanti in corsa.
- 23/11 Mario (risposta alla DOMANDA 1): «metti in Parigi in generale, in posti dove si può arrivare tranquillamente con i mezzi … non mandarmi a un'ora di distanza per mangiare un piatto di pasta» → tutta Parigi entro ~30 min coi mezzi da Châtelet e ~8 min a piedi da una fermata; 4° aiutante sui quartieri fuori dal giro; in ogni scheda fermata e minuti. Val d'Europe resta per le cene lun–mer.
- 23/11 Mario (risposta alla DOMANDA 2): «per i prezzi mettimi come consigli Best Buy, ma poi gli altri mettili tutti … consigliami tu i Best Buy, dove mangiare carne, … sushi giapponese, … pesce, … cucina tradizionale … Mettimi tu i consigli e poi alternative, insomma, molte alternative» → per ogni cucina un «⭐ Best buy» (miglior qualità/prezzo) in testa, poi tutte le alternative di ogni fascia; aiutanti portati a 12–20 posti per zona. Zona Val d'Europe finita: 8 posti (un solo pesce buono in zona), in `research_notes/ristoranti/`.
- 23/11 Controllo 28, fatto nel ramo (non ancora online): blocco «🚆 Prossimi treni, adesso» in Treni e ticket (8 tasti) + scorciatoia in cima a ogni giorno; meteo in cima a ogni giorno (Open-Meteo, salvato sul telefono); quinta scheda in basso «🍽️ Mangiare» con filtri Dove/Cosa, ⭐ best buy per cucina, 3 voti, «Come arrivo» coi mezzi, distanze dalla posizione (solo se permessa). Dati: `tools/fai-ristoranti.py` da `research_notes/ristoranti/`. Scorciatoia in cima «Hotel Disney» sostituita da «Mangiare» (restano 12; Hotel Disney è nella scheda Dormire).
- Trovato (vecchio, non mio): `.pc p{padding-left:28px}` dei pro e contro vale anche per il contenitore della pagina `<div class="pc">`: quasi tutti i paragrafi rientrano di 28 px. Correzione: `.pc>p`. Cambia l'aspetto di tutta la pagina → foto prima/dopo a Mario.
- Prossimo: zona 4 (Parigi coi mezzi), pranzo di domenica col link a «Mangiare», fonti, «Da fare» (prenotare), pulizia testi col controllo prima/dopo, prove nuove in prova-web-app.js, misure, foto, v48.
- Controllo Da fare (consegne Controllo 28): 0 voci nuove; voce C28 aggiornata (resto dei testi nella v49).

## Controllo 29 (23/11, v49 «testi ordinati»: nel ramo, non online)
- Scelta: pro e contro degli alloggi una frase per punto (+ e –), divisi da codice (`FR`, `PCX`, `QPT`, `RIGHE` nella pagina) e non riscritti a mano: le parole restano tutte, cambia solo l'ordine visivo. Stessa cosa in «Questo o quello?», spa, prezzi, parere sulle coppie; a mano: legenda della scelta, nota della mappa, trasporti nei costi (righe).
- Righe visibili oltre 350 caratteri: 18 prima, 0 dopo. `confronta-fatti --da HEAD`: nessun fatto perso (4488 prima e dopo).
- Trovato: pro e contro in 2 colonne sul computer (classe `.pc` uguale al contenitore). Ora `.pcx`; prova «C29»; riga in `docs/ERRORI.md`.
- La v48 aspetta ancora l'ok di Mario sulle sue 4 foto: si pubblica da `versione-v48` tagliato a 70bb82f (senza la v49), oppure insieme alla v49 se Mario approva anche queste foto.
- 23/11 18:4x Mario «11» (DOMANDA 1 della Controllo 29, scelta 1): foto approvate, si pubblica tutto insieme come v48 (Mangiare, treni, meteo, paragrafi, pro e contro a righe).

## Parole di Mario (23/11/2026 18:4x)
> Ma i voti può controllare in tempo reale senza consumare token e risorse? Se io tipo una chiamata spinta.

- Lettura: «chiamata spinta» = chiamata API (voce). Cercato il 23/11/2026: Google Places API (New), `rating` e `userRatingCount` = SKU «Place Details Enterprise», 1.000 letture gratis al mese, poi 20 $ ogni 1.000, serve un conto con carta (developers.google.com/maps, pagine del 09–17/11/2026). TripAdvisor: Content API chiusa il 31/08/2026, ora «Terra», gratis solo all'inizio, carta (tripadvisor.com/developers; stayapi.com, non ufficiale). TheFork: API solo per ristoranti e partner (docs.thefork.io).
- Strade: A chiave nella pagina (la vedrebbe chiunque: no) · B lavoro automatico su GitHub ogni settimana con la chiave nei segreti, 56 posti ≈ 240 letture al mese, gratis, zero token · C come ora (voto con data + link al voto vero). DOMANDA 2 a Mario, consiglio C.

## Parole di Mario (23/11/2026 19:57, risposta alla DOMANDA 2)
> No, non voglio che li aggiorni da solo, ma anche a spinta si possono aggiornare, magari in qualche modo gratuito che si possa aggiornare, possa controllare da solo. Non lo so, valuta tu.

- Valutazione (Controllo 29): «a spinta» = parte solo quando Mario tocca un tasto. Strada: lavoro di GitHub «Aggiorna i voti» solo a mano (`workflow_dispatch`, repo pubblico = minuti gratis), chiama Google Places (New) per i 56 posti (`rating`, `userRatingCount`: 56 letture a tocco, 1.000 gratis al mese ≈ 17 tocchi), chiave nei segreti di GitHub, tetto giornaliero in Google Cloud (mai addebiti); scrive `voti.json` su un ramo a parte `voti` (non tocca le versioni), la pagina lo legge da raw.githubusercontent.com e lo tiene sul telefono. TripAdvisor e TheFork restano con data e link (nessuna via gratuita e permessa). Serve a Mario: account Google Cloud con carta (Google la chiede anche per l'uso gratis). → DOMANDA 4.
