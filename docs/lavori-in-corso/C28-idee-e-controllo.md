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
