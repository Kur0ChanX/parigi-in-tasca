# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 31 `session_01Rwcxc6vqxeDJS6LUemAjJo`, 28/11 00:06 ora italiana, chiusa alla soglia; la apre la Controllo 31 con `create_session` (catena 7 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb.
- **Online v51** (verifica: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 51}`; la pagina contiene «Prudenti: prenotate il Moxy»). v50 (PR 52, 27/11 23:54) = schede «📋 Tutto sul n.» 16 e 23 coi fatti di tutte le recensioni; v51 (PR 53, 28/11 00:04) = Moxy coi prezzi di oggi (Family Sleeper 702 € 4 notti, 555 € 3 notti, cancellazione gratuita) in tutta la pagina e parere nuovo «N. 16 Nice studio (Airbnb) o n. 8 Moxy?» in «Questo o quello?». Prove locali verdi su tutte e due: web app 83/83, scritte 20/20.
- **Già deciso da Mario (non richiedere):** v50 = risposta alla DOMANDA 2 («publica», «e publica in priorità»); il confronto Moxy / n. 16 va nell'app (fatto, v51); NON vuole leggere lui le recensioni Booking; voti dei ristoranti solo a mano quando li chiede.
- **Da non rifare:** lettura automatica di Booking col browser (403 robot); per prezzi e voti di Booking va bene il servizio di lettura web (Parallel `web_fetch`), ma guarda `acquired_at`: se è vecchio cambia l'indirizzo (es. `&selected_currency=EUR&sb_price_type=total`), il 27/11 la prima lettura 14→17 era del 21/11. Le date 13/12 e 14/12 della cancellazione del Moxy sono giuste (4 e 3 notti), non è un errore.
- **Cosa preme a Mario adesso:** scegliere l'alloggio. Mio parere in chat e nella v51: date sicure → n. 16 (503 € contro 702 €, treno a 1 minuto, inverno provato); prudenti → prenotare il Moxy con cancellazione gratuita (si paga in hotel) mentre Vincent accetta la richiesta del n. 16, poi cancellare il Moxy. Il n. 23 su Airbnb si cancella gratis solo fino a domenica 29/11 alle 15:00.
- **Domande aperte (righe in «## 0. Aspetta Mario»):** DOMANDA 1 della Controllo 31 = ok al Kit 56 (cambia 9 file di `.claude/` e `.github/workflows/pulisci-scorte.yml`: elenco da `python3 -I tools/estrai-kit.py <cartella>`; kit scaricato con `python3 -I tools/scarica-kit.py --cartella <scratchpad>/kit-nuovo`, da riscaricare nella sessione nuova). Se Mario dice «1»: parte 1 del pacchetto (punti 2–9), `estrai-kit.py --scrivi --anche-claude`, poi Write per i protetti e la skill consegne con i segnaposto, CLAUDE.md al punto 5, prove degli hook, commit. DOMANDA 3 della Controllo 30 (Booking del n. 23) resta aperta.
- **Preferenze di claude.ai:** quelle di Mario sono v38, il kit nuovo porta v40 → a fine giornata il testo di `docs/kit-progetto/PREFERENZE-CHAT.txt` (dopo il kit) a Mario (skill nuova-regola §5).
- **Sveglia mia:** `trig_01WfEXJaic6mfksKN87ipNmz` (Controllo 32; orari RER A del 13 e 17/12 + meteo nella guida, 28/11 10:17). Quella vecchia della Controllo 31 (`trig_01Sxaox4AJ8PfkSvzi8MaeMQ`) è spenta, non cancellata: la cancellazione l’ha fermata il controllo dei permessi.
- Controllo Da fare: 0 voci aggiunte (v50 e Moxy già in «1.» di `docs/DA-FARE.md`, kit in «## 0. Aspetta Mario»).

## Cosa è stato fatto (Controllo 31) · verifica: `git log --oneline e1ffd0ce..HEAD`
- v50 e v51 online (sopra); foto in `archivio/2026-11-27-v50/` e `archivio/2026-11-28-v51/` (mandate a Mario).
- Prova «Indice … ognuno porta al suo posto» rossa a caso: attesa fissa di 0,9 s dopo lo scorrimento; ora aspetta lo scorrimento fermo (`tools/prova-web-app.js`), riga in `docs/ERRORI.md` (due righe vecchie spostate in `docs/ERRORI-STORIA.md`).
- Appunti: `research_notes/Parigi mercatini e Disneyland dicembre/moxy_prezzi_27_11.md`; lavoro in `docs/lavori-in-corso/C30-confronto-16-23.md`.
- `docs/DA-FARE.md` sotto i 40 KB: 3 voci finite in `docs/DA-FARE-FATTE.md` (file nuovo).

## Strade provate e scartate (perché; così la prossima non le rifà)
- Foto di un elemento stretto (`el.screenshot`, 644 px): fermata dall'hook (serve ≥ 700 px). Va bene `page.screenshot` con `fullPage: true` e `clip` largo 390 a `deviceScaleFactor: 2`, barre fisse nascoste.
- Riconoscere un `details` di «Questo o quello?» col suo `id`: la sezione si ridisegna e l'id sparisce; cercarlo per testo.

## Prossimi passi
1. Avvio normale; rifare la sveglia (sopra). DOMANDA 1 (kit): ricordarla per prima in «⚠️ Aspettano te»; la domanda intera quando Mario scrive.
2. Mario risponde «1» al kit → installarlo come sopra (prima dei lavori nuovi).
3. Mario sceglie l'alloggio → «Scegli dove dormire» nella guida (o domanda: pagina che segue la sua scelta); se prenota, ricordare i messaggi pronti per il gestore nelle schede «📋 Tutto sul n.».
4. Sveglia del 28/11 10:17: orari RER A del 13 e 17/12 e meteo nella guida.
5. Quando Mario lo chiede (10–13/12): voti dei ristoranti (`research_notes/ristoranti/`, poi `tools/fai-ristoranti.py`).

## Blocchi e rischi
- Telefono di prova = imitazione. `docs/DA-FARE.md` vicino al tetto di 40 KB: alla prossima voce spostare le finite in `docs/DA-FARE-FATTE.md`. I prezzi degli altri hotel (n. 4, 6, 12) sono del 21–22/11: i pareri con loro usano il Moxy del 27/11.

## Ultimo messaggio di Mario
> e publica in priorità

(27/11 23:43: fatto, v50 online alle 23:54; poi v51 col confronto Moxy / n. 16 chiesto alle 23:41 alla Controllo 30.)

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 32
la apre la Controllo 31 con `create_session` (catena 7 di 8). Scritto da Controllo 31 il 28/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 32 · kit e alloggio`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 32 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-27 23:40 · [AVVIO] Sei la chat parallela Controllo 31 di Parigi in tasca, linea «Controllo»… → avvio; v50 (PR 52)
- 2026-11-27 23:43 · e publica in priorità → v50 online 23:54 (PR 52); poi v51 (PR 53) col confronto Moxy / n. 16

Ultimo, intero:
> e publica in priorità

