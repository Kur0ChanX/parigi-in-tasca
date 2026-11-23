# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 28 `session_01Rwcxc4qAM1Re3Gizbkzq6u`, 23/11 16:12 ora italiana, chiusa alla soglia; la apre la Controllo 28 con `create_session` (catena 4 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261123-01Rwcxc4qAM1/claude/parigi-ramo-definitivo.
- **Chiusa in attesa di Mario** (contesto oltre 180k, C455): aspetta la risposta alla DOMANDA «le 4 foto della v48 vanno bene?» (riga ❓ Controllo 28 in «Aspetta Mario»; foto in `archivio/2026-11-23-c28-v48-mangiare-treni/`, mandate in chat 23/11 ~16:00).
- **v48 PRONTA NEL RAMO, NON online** (verifica: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 47}`; nel ramo `grep -c 'id="mangiare"' dicembre/index.html` = 1). Prove locali verdi sull'ultimo codice: web app 83/83 (prova nuova «C28: scheda Mangiare…»), scritte 20/20, allineamenti di #mangiare, #treniOra, day-head = [] (23/11 ~16:00).
- **Già deciso da Mario (non richiedere):** idee C28 sì 10 (testi, senza togliere informazioni), 6 (treni in tempo reale), 5 (meteo), ristoranti; no 3 (lista valigia: c'è in un'altra app); ristoranti in tutta Parigi raggiungibile coi mezzi (non a un'ora), voti Google + TheFork + TripAdvisor, per ogni cucina un ⭐ best buy e poi molte alternative di ogni prezzo. Prima: alloggi n. 8, 16, 23; fasci del faro restano; kit 53 applicato.
- **Da non rifare:** ricerca ristoranti (56 in `research_notes/ristoranti/zona1..4-*.json`, 23/11), link RATP (verificati dall'indice di ricerca: il sito blocca i programmi), sveglia RER A (ora `trig_01XizakkWdLMSSeoPhGVnoho`, 26/11 10:17, mia; la vecchia `trig_01RGdHLwHpoekiHBF2R6fDP4` spenta: cancellarla era bloccato).
- **Cosa preme a Mario adesso:** vedere online la v48 (ristoranti, treni dal vivo, meteo).

## Cosa è stato fatto (Controllo 28) · verifica: `git log --oneline 01cc098c..HEAD`
- Scelte di Mario e piano: `docs/lavori-in-corso/C28-idee-e-controllo.md` (parole intere e scelte in corsa).
- **Mangiare** (quinta scheda in basso): `tools/fai-ristoranti.py` scrive i dati da `research_notes/ristoranti/` nella pagina fra `/*RIS*/` e `/*/RIS*/` (`--controlla` per le prove). Filtri Dove (4 zone + Tutti, si apre da sola sul pasto giusto durante il viaggio) e Cosa; best buy per primo; 3 voti con link; Maps, «Come arrivo» coi mezzi, Menu, Prenota; distanze dalla posizione (solo se permessa). Zona 3: best buy scelti da me (Sushibar by Goma, L'Emphase, Le George, Rosalie unico pesce).
- **Treni**: riquadro «🚆 Prossimi treni, adesso» (#treniOra) in Treni e ticket, 8 tasti RATP/IDFM; scorciatoia in cima a ogni giorno.
- **Meteo**: in cima a ogni giorno, Open-Meteo (dal 28/11; salvato in `pdn-meteo`), link Météo-France.
- Pranzo di domenica collegato a Mangiare; voce «Prenotate i ristoranti» nel Da fare (posto 3, spunte vecchie scalate una volta: `pdn-check-c28`); fonti nuove; scorciatoia in cima «Hotel Disney» → «Mangiare» (restano 12).
- Difetto vecchio corretto: `.pc p` → `.pc>p` (paragrafi rientrati di 28 px in tutta la pagina). Frase interna «Le note di ricerca…» riscritta coi suoi numeri.
- `tools/confronta-fatti.js`: numeri, orari, prezzi e link prima/dopo (per la pulizia dei testi).

## Strade provate e scartate
- Treni dal vivo dentro la pagina (API ufficiale IDFM): serve una chiave che sul sito pubblico vedrebbe chiunque → tasti alle pagine ufficiali.
- Riscrivere ora tutte le schede lunghe degli alloggi: rimandato alla v49 (rischio e token), proposta a Mario nel messaggio.

## Prossimi passi
1. Risposta di Mario sulle foto v48: «1» → `versione.json` 48 + novità della v48 (linguaggio da aggiornamento), prove, PR da ramo, giro locale (`.claude/progetto.json`), unione, controllo del sito vero (`versione.json` = 48), riga del nastro; «2» → correggere quello che dice.
2. Pulizia testi v49: schede lunghe degli alloggi in punti corti (19 testi oltre 350 caratteri: `node` + testo visibile), controllo `node tools/confronta-fatti.js --da <commit>` verde (sennò ogni fatto perso spiegato), foto prima/dopo.
3. Dal 28/11: guardare che il meteo compaia (Open-Meteo dal proxy dà 429: provare dal sito vero o da una prova con risposta finta).
4. Da prima: risposta di Mario sulla v46/v47 (prove `?luci=ferme` e `?tela=si` da togliere), chiave vecchia «Kit RVC lettura» da cancellare.

## Blocchi e rischi
- Telefono di prova = imitazione: conferme sul telefono di Mario. `docs/ERRORI.md` vicino al tetto di 10 KB.
- Orari di alcuni ristoranti in disaccordo fra siti (Clover Grill dom sera, Tsukizi, Le Duc lun, Le Savarin dom sera, Bulot Bulot mer): scritto nelle loro schede.
- Svista ripetuta: 2 foto di lavoro aperte senza scritta in alto (E314); il controllo automatico aspetta Mario (riga Controllo 19).

## Ultimo messaggio di Mario
> No, per i prezzi mettimi come consigli Best Buy, ma poi gli altri mettili tutti, ecco. Si può valutare tutto, però consigliami tu i Best Buy, dove mangiare carne, dove mangiare sushi giapponese, dove mangiare il pesce, dove mangiare cucina tradizionale, eccetera eccetera. Mettimi tu i consigli e poi alternative, insomma, molte alternative.

(23/11 15:46, risposta alla DOMANDA 2: fatto, best buy per cucina e 56 posti.)

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 29
la apre la Controllo 28 con `create_session` (catena 4 di 8). Scritto da Controllo 28 il 23/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 29 · v48 da pubblicare`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 29 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-23 15:14 · [AVVIO] Sei la chat parallela Controllo 28 di Parigi in tasca, linea «Controllo»… → avvio; sveglia RER A rifatta mia
- 2026-11-23 15:31 · Allora, secondo me puoi fare pulizia dei testi interni senza cancellare informaz… → C28: v48 (Mangiare, treni, meteo, frase interna); resto dei testi v49
- 2026-11-23 15:39 · metti Google, The Fork e TripAdvisor. → 3 voti in ogni scheda (v48)
- 2026-11-23 15:40 · metti in Parigi in generale, in posti dove si può arrivare tranquillamente con i… → risposta alla DOMANDA 1: zona «Parigi, coi mezzi» (19 posti)
- 2026-11-23 15:46 · No, per i prezzi mettimi come consigli Best Buy, ma poi gli altri mettili tutti,… → risposta alla DOMANDA 2: best buy per cucina, 56 posti

Ultimo, intero:
> No, per i prezzi mettimi come consigli Best Buy, ma poi gli altri mettili tutti, ecco. Si può valutare tutto, però consigliami tu i Best Buy, dove mangiare carne, dove mangiare sushi giapponese, dove mangiare il pesce, dove mangiare cucina tradizionale, eccetera eccetera. Mettimi tu i consigli e poi alternative, insomma, molte alternative.

