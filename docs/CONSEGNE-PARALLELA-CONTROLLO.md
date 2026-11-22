# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 14 sull'ALTRO account, `session_01QTFEqRq6KHUZyj1XNVa82p`, 22/11 ~18:00 ora italiana; la Controllo 14 del primo account, `session_01Rwcxc7EAGCUGyWhBTz3aWr`, era ferma al limite delle 5 ore fino alle 18:50)
- Mario 22/11 17:11: «Cerca di non creare conflitti con l'altro account… quando andrò nell'altro account lui vedrà il lavoro che hai fatto e si adatta». Quindi: **nessuna sessione nuova**; la catena continua nella Controllo 14 del primo account, che rilegge queste righe. Numero della catena invariato (14).
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso, nessuna PR aperta della catena.
- **v36 ONLINE** (PR 37; verifica: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 36}`): n. 23 col prezzo Booking 461 € (anche nei totali). v35 = PR 36. Dentro anche la v34 (PR 35: albero dal disegno, Torre Eiffel nuova): la DOMANDA 2 della Controllo 13 è risposta («sì, pubblica»).
- **Già deciso da Mario (non richiedere):** pubblicare v34 e v35; i due alloggi della rosa sono il **n. 16** (Airbnb 5115238) e il **n. 23** (Airbnb 1376052056754954936); il n. 23 su Booking costa 461 € (letto da lui).
- **Kit RVC:** Mario dice di aver messo la chiave del ponte nell'ambiente, ma in questo contenitore `RVC_KIT_TOKEN` non c'è (`python3 -I tools/scarica-kit.py --versione` → esito 2). Riprovare nella Controllo 14 del primo account (o in una sessione aperta dopo aver salvato la chiave).
- **Da non rifare:** C20 (Nascondi, «Tutto sul n.», filtro rosa: già online); la ricerca del n. 23 su Booking (una ricerca a vuoto: chiedere il link a Mario).
- **Cosa preme a Mario adesso:** che la guida sia affidabile (prezzi diversi fra Airbnb e Booking) e i due alloggi della rosa completi.

## Cosa è stato fatto (Controllo 14, altro account) · verifica: `git log --oneline -12`; tutto in `docs/lavori-in-corso/C20-nascondi-e-due-alloggi.md`
- v34 pubblicata (prove locali verdi, PR 35, sito letto).
- v35: «🙈 Nascondi» sugli alloggi con «Annulla», pannello «🧹 Pulisci l'elenco» (`#scNas`), nascosti in `localStorage` `pdn-nascosti` (chiavi `d-<numero>` / `n-<sigla>`), la scelta non si nasconde mai, mappa senza i nascosti, link «Manda questa scelta» con `&nascosti=`.
- v35: n. 16 e 23 con la tendina «📋 Tutto sul n.» (`XX`, `XXM`, `xxBox`: soldi, arrivo, casa, voti, spesa, rischi) e messaggio pronto in francese per il gestore con l'ora del piano e tasto «Copia»; filtro e gruppo `rosa` («⭐ La vostra rosa»); correzioni dagli annunci.
- Ricerche: `research_notes/Parigi mercatini e Disneyland dicembre/alloggio_n16_nice_studio_ricerca_22_11.md` e `alloggio_n23_montevrain_ricerca_22_11.md`. Foto 1–6 in `archivio/2026-11-22-c20-nascondi-alloggi/`.
- Prove nuove in `tools/prova-web-app.js` («Alloggi: «Nascondi»…», «Alloggi n. 16 e 23…»). Errore trovato e difeso: riga del 22/11 in `docs/ERRORI.md` (chiavi di Parigi a sigla).

## Strade provate e scartate
- Festoni come linee a parte: nel disegno il festone a zig-zag è fuso coi bordi dei rami → lucine sul centro del tratto sotto ogni fascia.
- Torre in proporzioni vere col piede a terra (y 265): il 2° piano finiva dietro le casette, restava una punta → piede a 232 nascosto, scala .42.
- Prova con `elementFromPoint` semplice: prendeva il velo `vigna` e le proiezioni `pj-onda` → `elementsFromPoint` che li salta.
- Video dal sorgente: icone storte → video dalla pagina vera `dicembre/`.

## Prossimi passi
1. Rileggere `docs/lavori-in-corso/C20-nascondi-e-due-alloggi.md` (C20 è fatto: non rifarlo). DOMANDA 1 in «Aspetta Mario» (alloggi spenti n. 18, 20, 21: consiglio «in fondo, in un gruppo Liberi solo dal 14»): alla risposta, foto prima di pubblicare.
2. Promesse 👁 della v34 e della v35 in `docs/DA-FARE.md`: si chiudono solo con la foto di Mario dal sito vero.
3. Pagina intera più natalizia (v36): PRIMA una foto di prova a Mario (lucine sopra i titoli, agrifoglio, fiocchi leggeri, schede con un filo dorato), online solo dopo che la vede.
4. Poi: C17 resto, orario RER A (~26/11), prova del service worker instabile 🐞, fuochi.

## Blocchi e rischi
- Nomi nuovi nella pagina: prima `grep -o "\bnome\b" | wc -l` = 0. Pagina ~520 KB (immagini base64).
- Animazioni nuove: mai ritardo positivo (lo ferma la prova). Testi della pagina con l’apostrofo tipografico; novità ≤ 130 caratteri.
- `ERRORI.md` al tetto dei 10 KB: per ogni riga nuova spostarne una doppione in `ERRORI-STORIA.md`.
- Diritti del disegno dell'albero (annuncio Etsy): DOMANDA 1 aperta, consiglio 1.

## Ultimo messaggio di Mario
22/11 17:34 (nell'altro account): «Attenzione perché molti… Quello nella foto su Booking è 461 euro… potenziali per questi due… metti la funzione potenzia in2 alloggi da me citati e publica» → fatto e pubblicato (v35). Intero in `docs/lavori-in-corso/C20-nascondi-e-due-alloggi.md`. Controllo Da fare: 2 voci 👁 aggiunte (Nascondi; Tutto sul n. e filtro rosa).

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 15 (non serve adesso: si riprende nella Controllo 14 del primo account, testo qui sotto)
Mario lo incolla nella chat «Controllo 14» del primo account, quando torna lì:
```
Ho lavorato dall'altro account (Controllo 14, session_01QTFEqRq6KHUZyj1XNVa82p): v34 e v35 sono online. git fetch origin claude/parigi-ramo-definitivo && git merge origin/claude/parigi-ramo-definitivo, poi rileggi docs/CONSEGNE-PARALLELA-CONTROLLO.md e docs/lavori-in-corso/C20-nascondi-e-due-alloggi.md e continua dai «Prossimi passi», senza rifare C20.
```

## Messaggi di Mario di questa sessione
Controllo 14 sull'altro account (dopo «→» cosa ne è stato):
- 2026-11-22 17:11 · Cerca di non creare conflitti con l'altro account. Mi sto spostando qui provviso… → fermata, piano a Mario; nessuna sessione nuova, la catena continua nella Controllo 14 del primo account (queste consegne)
- 2026-11-22 17:15 · Sì, se tutte le prove sono verdi, pubblica. Dopo che è pubblicato dovresti fare … → v34 online (PR 35); C20: «Nascondi» sugli alloggi e ricerche dei n. 16 e 23
- 2026-11-22 17:34 · Attenzione perché molti, tipo questi due, uno di questi due su Booking costa men… → v35 online (PR 36): «Tutto sul n.» nei n. 16 e 23, filtro «La vostra rosa», Booking 461 € nella tendina
