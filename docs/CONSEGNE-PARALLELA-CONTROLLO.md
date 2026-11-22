# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 4 `session_01WTjqUuicbA1iGVJV2srBYv`, 22/11 10:31 ora italiana, chiusa alla soglia; la apre la Controllo 4 con `create_session` (catena 4 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261122-01WTjqUuicbA/claude/parigi-ramo-definitivo.
- **v20 online** (22/11 10:26, PR #21): verifica `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/ | grep -c ty-disney` > 0. Dentro: passo «Domenica 13» nello stile del passo 2, «Vicino a Disney» per minuti con le attese (`arrMin`), hotel Disney rosa, «Vedi i dettagli» in fondo alle schede, «Quanto costa» col tipo, «Treni e ticket» a schede. v19 online 10:06 (PR #20).
- **v21 nel ramo, NON online**: «la scelta cambia la pagina» (riquadro `.sc-tutto`, avviso `.sc-avviso` dopo «Scegli questo», pallini gialli sulle schede, evento `pdn:scelta`). Prove sul commit `v21 (non ancora pubblicata)…`: web app 47/47, scritte, `--controlla`, colori (anche `controlla-colori.py dicembre/parigi-disney-natale.html`) tutti VERO. Verifica: `grep -c sc-avviso dicembre/index.html` > 0 nel ramo, 0 sul sito.
- **Già deciso da Mario (non richiedere):** «Fai tutta la grafica e pubblica» (22/11 10:17: niente ok per ogni foto, si pubblica a prove verdi); «Vicino a Disney» per tempo, non km; hotel Disney colore suo; la scelta dell'alloggio va mostrata; poter annullare una scelta sbagliata; criteri e decisioni di prima nelle consegne della Controllo 3 (sotto, in `git log`).
- **Da non rifare:** pezzi 1–4 della grafica (Giorni lasciato com'era: già nello stile); ricerche sui siti diretti (C14).
- **Cosa preme a Mario adesso:** colori senza conflitti e «Annulla» (suo ultimo messaggio), poi la v21 online.
- Controllo Da fare: 0 voci aggiunte (le 4 richieste sono in `docs/lavori-in-corso/C13-aspetto-pagina.md` con parole intere e nella voce 👁 «grafica a pezzi» di `docs/DA-FARE.md` sezione 1; verifiche della Principale in sezione 1).

## Cosa è stato fatto (Controllo 4)
- Avvio, scorta della Controllo 2 unita (registro dei messaggi). v19 e v20 pubblicate (nastro, notifiche, `send_message` alla Principale 22). Pezzi 2–4 e richieste di Mario: tutto in `docs/lavori-in-corso/C13-aspetto-pagina.md`. Foto: `archivio/2026-11-22-c13-dormire-pezzo2/`, `-c13-v20/`, `-c13-v21/` (mandate). Errori nel diario: nastro col trattino (hook non lo leggeva), `tyOf` fra i due script (`window.pdnTyOf`). Prove nuove in `tools/prova-web-app.js` (pezzi 2–4, Disney, ordine, ticket, avviso); la prova ora stampa subito «ERRORE NELLA PAGINA».
- La Principale 22 ha passato a questa catena 3 verifiche (riga in `docs/DA-FARE.md` sezione 1).

## Strade provate e scartate
- «Vicino a Disney» per km (v18): Mario vuole il tempo. Per minuti SENZA attese (prima del 22/11) la navetta del n. 11 finiva in cima: ora `arrMin` = minuti + attesa media di navetta (25) e bus (10). L'attesa del RER non è contata (da cercare sul sito ufficiale se Mario la vuole: nel PARERE delle 10:26).
- Colori dei tipi anche in «Quanto costa»: conflitto con la legenda (vedi Prossimi passi 1).
- Foto mandate con «prima»/«dopo» nel nome ma senza confronto: le blocca `foto-check.py`; due foto nuove → nomi senza «prima/dopo».

## Prossimi passi
1. Piano scritto in `docs/lavori-in-corso/C13-aspetto-pagina.md` «Mario 22/11 ~10:45»: «Quanto costa» senza colori dei tipi; Casa arancio (`#FFA15C` / `#A34A00`, contrasti misurati lì); «Annulla» nell'avviso (evento `pdn:annulla`, torna alla scelta di prima) con prova nuova. Script delle foto nella sessione vecchia persi: rifarli (Playwright, `dicembre/index.html` servito con `python3 -m http.server` come `tools/prova-web-app.js`, tema scuro, 412×915, 2x, clic sulle schede con `evaluate(...click())`); confronti con `tools/confronta-foto.py`.
2. Prove complete (web app, scritte, `--controlla`, colori di novembre e dicembre), poi v21: ramo-copia `versione-v21`, PR, unione, `git merge origin/main`, nastro, notifica, controllo del sito vero.
3. Le 3 verifiche della Principale (deposito valigie Astra e Saint-Pétersbourg; spa del Saint-Pétersbourg; cancellazione dell'Airbnb di David, vecchio n. 21): pagine ufficiali, skill `ricerca-aggiornata`; v22.
4. Voci 👁 di `docs/DA-FARE.md` sezione 1: chiuderle solo quando Mario dice di averle viste.

## Blocchi e rischi
- Prezzi letti il 21–22/11: possono salire; camera di Bussy e Jolie chambre gratis fino al 29/11.
- Nomi nuovi: prima `grep -c`; funzioni fra i due `<script>` (ognuno chiuso in `(()=>{…})()`): passano da `window`.
- Prova «dicembre: service worker suo» a volte instabile: rilanciarla da sola.

## Ultimo messaggio di Mario
> Il colore casa e quant'altro non va in conflitto con la leggenda tipo biglietti Disney e quant'altro? I colori non hanno un conflitto. Ti disorienta un po'?
> della possibilità, se uno sceglie perché per sbaglio ci clicca, che lo può annullare.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 5
la apre la Controllo 4 con `create_session` (catena 4 di 8). Scritto da Controllo 4 il 22/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 5 · colori e Annulla`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 5 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-22 01:35 · [AVVIO] Sei la chat parallela Controllo 4 di Parigi in tasca, linea «Controllo» … → avvio fatto, scorta Controllo 2 unita
- 2026-11-22 10:02 · va bene → risposta alla DOMANDA 1 della Controllo 3 (scelta 1): v19 online
- 2026-11-22 10:17 · Fai tutta la grafica e pubblica. I più vicini metti in ordine di tempo per arriv… → C13: v20 online (pezzi 2–4, ordine per tempo, Disney rosa, «Vedi i dettagli»)
- 2026-11-22 10:27 · Attenzione che se ti va a vedere anche nel posto dove dormire, che lo scegli e t… → C13: v21 nel ramo (riquadro, avviso, pallini), non ancora online
- 2026-11-22 10:30 · Il colore casa e quant'altro non va in conflitto con la leggenda tipo biglietti … → C13 «Mario 22/11 ~10:45»: piano per la Controllo 5 (colori, Annulla)

Ultimo, intero:
> Il colore casa e quant'altro non va in conflitto con la leggenda tipo biglietti Disney e quant'altro? I colori non hanno un conflitto. Ti disorienta un po'?
> della possibilità, se uno sceglie perché per sbaglio ci clicca, che lo può annullare.

