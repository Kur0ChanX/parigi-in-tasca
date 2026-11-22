# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 14 `session_01QTFEqRq6KHUZyj1XNVa82p`, 22/11 17:57 ora italiana, chiusa alla soglia; la apre la Controllo 14 con `create_session` (catena 1 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb.
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
1. **C21, l'ultima richiesta di Mario**: tasto «⭐ Rosa alloggi» nella schermata principale, rosa scelta da lui. Piano già pronto in `docs/lavori-in-corso/C21-rosa-alloggi.md` (occhio critico fatto): codice, prova, foto a Mario, poi v37.
2. DOMANDA 1 in «Aspetta Mario» (alloggi spenti n. 18, 20, 21; consiglio «in fondo, in un gruppo Liberi solo dal 14»): alla risposta, foto prima di pubblicare. Si può mettere nella stessa v37.
3. Promesse 👁 della v34, v35, v36 in `docs/DA-FARE.md`: si chiudono solo con la foto di Mario dal sito vero.
4. Pagina intera più natalizia: PRIMA una foto di prova a Mario.
5. Poi: C17 resto, orario RER A (~26/11), prova del service worker instabile 🐞, fuochi. Kit RVC: `RVC_KIT_TOKEN` non c'era in questo contenitore (riprovare).

## Blocchi e rischi
- Nomi nuovi nella pagina: prima `grep -o "\bnome\b" | wc -l` = 0. Pagina ~520 KB (immagini base64).
- Animazioni nuove: mai ritardo positivo (lo ferma la prova). Testi della pagina con l’apostrofo tipografico; novità ≤ 130 caratteri.
- `ERRORI.md` al tetto dei 10 KB: per ogni riga nuova spostarne una doppione in `ERRORI-STORIA.md`.
- Diritti del disegno dell'albero (annuncio Etsy): DOMANDA 1 aperta, consiglio 1.

## Ultimo messaggio di Mario
22/11 ~17:55: «metti il tasto Rosa alloggi  nella home e li mo fai mettere la rosa» → C21 (Prossimi passi 1). Controllo Da fare: 1 voce aggiunta (C21 con 👁).
**La Controllo 14 del primo account (`session_01Rwcxc7EAGCUGyWhBTz3aWr`) NON continua la catena**: se Mario le scrive, legge queste consegne e lo rimanda alla Controllo 15.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 15
la apre la Controllo 14 con `create_session` (catena 1 di 8). Scritto da Controllo 14 il 22/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 15 · tasto Rosa alloggi`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 15 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Controllo 14 sull'altro account (dopo «→» cosa ne è stato):
- 2026-11-22 17:11 · Cerca di non creare conflitti con l'altro account. Mi sto spostando qui provviso… → fermata, piano a Mario (nessun conflitto con l'altro account)
- 2026-11-22 17:15 · Sì, se tutte le prove sono verdi, pubblica. Dopo che è pubblicato dovresti fare … → v34 online (PR 35); C20: «Nascondi» sugli alloggi e ricerche dei n. 16 e 23
- 2026-11-22 17:34 · Attenzione perché molti, tipo questi due, uno di questi due su Booking costa men… → v35 online (PR 36): «Tutto sul n.» nei n. 16 e 23, filtro «La vostra rosa»
- 2026-11-22 17:50 · Perché questi 3 sono spenti/ non colorati bene e non ho messo nessuna opzione pe… → v36 online (PR 37): n. 23 col prezzo Booking; DOMANDA 1 sugli alloggi spenti in «Aspetta Mario»
- 2026-11-22 17:56 · metti il tasto Rosa alloggi nella home e li mo fai mettere la rosa → C21 scritto in docs/lavori-in-corso/C21-rosa-alloggi.md, passa alla Controllo 15
