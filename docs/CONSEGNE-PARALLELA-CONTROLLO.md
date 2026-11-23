# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 27 `session_01Rwcxc557juXSjcMyPUAM1f`, 23/11 15:13 ora italiana, chiusa alla soglia; la apre la Controllo 27 con `create_session` (catena 3 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261123-01Rwcxc557ju/claude/parigi-ramo-definitivo.
- **Chiusa in attesa di Mario** (contesto oltre 180k, C455): aspetta la risposta alla DOMANDA C28 «quali idee faccio» (riga ❓ Controllo 27 in «Aspetta Mario»).
- **Kit 53 installato** anche in `main` (verifica: `cat docs/kit-progetto/VERSIONE` = «Kit 53 · 22/11/2026 · Preferenze v38»; prove del kit 44/44).
- **v47 ONLINE** (PR 49, main bf83871; verifica: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 47}`): con «riduci movimento» il cielo si ridisegna quando la testata cambia misura (`ResizeObserver`, causa misurata: tela 1101 contro 1063). Web app 82/82 due volte, scritte 20/20.
- **Già deciso da Mario (non richiedere):** alloggi n. 8, 16, 23 (più probabili 16 e 23); fasci del faro restano; prima la guida, poi la grafica; kit 53 applicato (Mario 14:42 «si applica kit»).
- **Da non rifare:** kit 53, v47, controllo della guida C28 (fatto: buchi e 10 idee in `docs/lavori-in-corso/C28-idee-e-controllo.md`), sveglia RER A (ora `trig_01RGdHLwHpoekiHBF2R6fDP4`, 26/11 10:17; la vecchia `trig_01S2eBGe4VhaBSxPU6yKa187` spenta).
- **Cosa preme a Mario adesso:** le idee C28 da approvare, poi farle.

## Cosa è stato fatto (Controllo 27) · verifica: `git log --oneline a1edf87..HEAD`
- Avvio; sveglia RER A rifatta mia; 2 righe superate tolte da «Aspetta Mario».
- Kit 53: prova a secco, ok di Mario, `estrai-kit.py --scrivi --anche-claude` + 2 file coi segnaposto, prove 44/44, copie `.prima-del-kit` tolte (non tracciate).
- Prova rossa della web app (stelline con «riduci movimento») → causa misurata → v47; ERRORI: riga 23/11; 2 righe del 22/11 spostate in ERRORI-STORIA (tetto 10 KB).
- PR 49 da `versione-v47`, giro locale (`.claude/progetto.json` «giro: locale»), unita squash; ramo riallineato (conflitto in ERRORI e ERRORI-STORIA risolto tenendo il ramo).
- C28: controllo della pagina resa nel browser, 10 idee a Mario. Controllo Da fare: 0 voci aggiunte (kit chiuso, C28 c'è già).

## Strade provate e scartate
- Unire le scorte vecchie delle Controllo 23 e 25: scartato (solo commit automatici).

## Prossimi passi
1. Risposta di Mario alla DOMANDA C28 (numeri 1–10): fare quelle scelte, fatti dalle pagine ufficiali con data (skill `ricerca-aggiornata`), prove, foto prima/dopo se cambia l'aspetto (misura con `tools/allineamenti.mjs`, Kit 53), v48.
2. Risposta di Mario sulla v46/v47 (sfarfallio sparito?): ok → togliere le prove `?luci=ferme` e `?tela=si` (`docs/lavori-in-corso/C27-testata-strati.md`).
3. Mario: cancellare la chiave vecchia «Kit RVC lettura» e l'eventuale chiave nello «Script di configurazione» (gli è stato chiesto 23/11).

## Blocchi e rischi
- Il telefono di prova è un'imitazione: conferme sul telefono di Mario. `docs/ERRORI.md` vicino al tetto di 10 KB.
- Mai mostrare o salvare chiavi.

## Ultimo messaggio di Mario
> si applica kit

(23/11 14:42, risposta alla domanda del Kit 53: fatto.)

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Medio** (`medium`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 28
la apre la Controllo 27 con `create_session` (catena 3 di 8). Scritto da Controllo 27 il 23/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 28 · idee scelte`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 28 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-23 12:15 · [AVVIO] Sei la chat parallela Controllo 27 di Parigi in tasca, linea «Controllo»… → avvio; sveglia RER A rifatta
- 2026-11-23 14:42 · si applica kit → Kit 53 installato, v47 (PR 49)

Ultimo, intero:
> si applica kit

