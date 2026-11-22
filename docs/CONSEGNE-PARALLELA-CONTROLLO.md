# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 5 `session_01WTjqUwtG4zanYJKoLtuHUW`, 22/11 10:58 ora italiana, chiusa alla soglia; la apre la Controllo 5 con `create_session` (catena 5 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261122-01WTjqUwtG4z/claude/parigi-ramo-definitivo.
- **v22 online** (22/11 10:49, PR #23): verifica `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/ | grep -c wellness-spa` > 0. v21 online 10:44 (PR #22): «↩ Annulla», Case ciano.
- **v23 nel ramo, NON online** (commit «v23 (non ancora online)…»): «Quanto costa» di nuovo coi colori dei tipi; legenda senza doppioni (alloggio = colore del tipo, pacchetto = rosa Disney, biglietti bianco/nero, trasporti grigio); riga Disney senza km (`comeD`: minuti con le attese + «a piedi + RER»), attesa RER 3 min; km tolti dai testi distanza, consigli e «Dov'è» (riga Disney). Prove VERDI su quel commit: web app 48/48, scritte, `--controlla`, colori. Verifica: `grep -c comeD dicembre/index.html` > 0 nel ramo, 0 sul sito.
- **Già deciso da Mario (non richiedere):** «Fai tutta la grafica e pubblica» (niente ok per foto, si pubblica a prove verdi); Disney per tempo, MAI km; RER = minuti a piedi; colori anche in «Quanto costa» ma nessun doppione fra tipi, legenda e segni (oro scelto, verde meglio, rosso peggio). Parole intere e misure in `docs/lavori-in-corso/C13-aspetto-pagina.md` (in fondo).
- **Da non rifare:** v21 e v22 (online); le 3 verifiche della Principale (fatte); ricerca dell'attesa del RER (fatta: 3 min la mattina).
- **Cosa preme a Mario adesso:** colori senza doppioni e Disney senza km, cioè la v23 online.
- Controllo Da fare: 0 voci aggiunte (la richiesta 10:51 è in C13 e nella voce 👁 «grafica a pezzi»; promessa 👁 «↩ Annulla» in sezione 1).

## Cosa è stato fatto (Controllo 5)
- v21 (Annulla, Case ciano, costi neutri) e v22 (verifiche della Principale: spa Saint-Pétersbourg 9–19 e 60 €/ora, depositi valigie Astra e Saint-Pétersbourg, Airbnb di David confermato) online; `send_message` alla Principale 22 per tutte e due. Foto v21 in `archivio/2026-11-22-c13-v21-colori-annulla/` (mandate). Errore nel diario: spa 9–23 da fonte di seconda mano. v23 nel ramo (sopra).

## Strade provate e scartate
- Case arancio (piano della Controllo 4): nel tema chiaro quasi uguale all'oro di «scelto» (distanza 5,1) → ciano.
- «Quanto costa» senza colori dei tipi (v21): Mario li rivuole, purché senza doppioni → v23.
- Un 4° colore con tinta propria per i biglietti: non c'è (solo verde oliva, vicino al verde «meglio») → bianco/nero e grigio.

## Prossimi passi
- **Controllo 6, 22/11 11:07:** passi 0, 1 e 2 FATTI (km visibili, ordini solo per minuti, foto, v23 online con PR #24, sito vero controllato). `kmDT` serve di nuovo (riga 🏰): resta. Aperte solo le voci 👁 (passo 3).
0. **Mario 22/11 ~11:05 (dopo l'handoff, parole intere in C13):** i km tornano VISIBILI (testi «distanza» delle schede come prima della v23, riga Disney di «Dov'è», e nella riga 🏰 come dato piccolo accanto al «come»), ma ordini e filtri solo per tempo: togliere `kmD` dallo spareggio di «Vicino a Disney» (`SORT` e `SRT`). Prova da aggiornare (n. 8: «16 min» e anche «1,9 km»). Poi foto e v23.
1. Foto della v23 (Playwright, `dicembre/index.html` servito con `python3 -m http.server`, tema scuro, 412×915, 2x; PRIMA = `git show origin/main:dicembre/index.html` servito con `page.route`, `serviceWorkers: 'block'`): confronto «Quanto costa» (colori nuovi e legenda) e riga Disney in Dormire (senza km); `tools/confronta-foto.py`; foto alte → solo etichetta + parte che conta (hook `foto-check.py`).
2. v23 online: ramo-copia `versione-v23`, PR non in bozza (giro in locale già verde), unione squash, `git merge origin/main`, nastro, notifica, `send_message` alla Principale, controllo del sito vero.
3. Voci 👁 di `docs/DA-FARE.md` sezione 1: chiuderle solo quando Mario dice di averle viste. `kmDT` non serve più: toglierlo se `grep` non trova altri usi.

## Blocchi e rischi
- **Alla Principale niente `send_message` per le versioni pubblicate** (Principale 22, 22/11 11:08: ogni messaggio le costa un turno; le vede dal nastro e dal ramo). Scriverle solo per un'azione sua o un rischio sui suoi file.
- Nomi nuovi: prima `grep -c`; funzioni fra i due `<script>` passano da `window`. Prova «service worker suo» a volte instabile: rilanciarla da sola.
- Le ricerche web portano pagine intere (spreco di token): obiettivi stretti, niente `full_content`.

## Ultimo messaggio di Mario
> Sì, perché alla fine è importante non sono quanti chilometri sono, ma quanto ci mettiamo ad arrivare, ecco.
> Cioè, nel senso, i chilometri mettili visibili, ma non prenderli in considerazione nei filtri. Ecco, qui quando entri dentro la scheda ti deve segnare tutto, sì.
(prima, 10:51:)
> Sì, non so, te l'avevo già detto. No. Vicino alla RAR metti quanto ci vuole a piedi per arrivare alla RAR. E Disney non mettere i chilometri, ma effettivamente quanto ci vuole poi ad arrivare con il tempo a Disney.
> Guarda che non per forza devi togliere i colori, puoi decidere dei colori per la leggenda di biglietti e quant'altro e colori tipo per Disney, per gli hotel Disney, per gli B&B, eccetera eccetera eccetera. Basta che non si mischiano, che non ci siano doppioni.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 6
la apre la Controllo 5 con `create_session` (catena 5 di 8). Scritto da Controllo 5 il 22/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 6 · foto e v23`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 6 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-22 10:33 · [AVVIO] Sei la chat parallela Controllo 5 di Parigi in tasca, linea «Controllo» … → avvio fatto; v21 e v22 online
- 2026-11-22 10:51 · Sì, non so, te l'avevo già detto. No. Vicino alla RAR metti quanto ci vuole a pi… → C13: v23 nel ramo (colori senza doppioni, Disney senza km), foto e pubblicazione alla Controllo 6

Ultimo, intero:
> Sì, non so, te l'avevo già detto. No. Vicino alla RAR metti quanto ci vuole a piedi per arrivare alla RAR. E Disney non mettere i chilometri, ma effettivamente quanto ci vuole poi ad arrivare con il tempo a Disney.
> Guarda che non per forza devi togliere i colori, puoi decidere dei colori per la leggenda di biglietti e quant'altro e colori tipo per Disney, per gli hotel Disney, per gli B&B, eccetera eccetera eccetera. Basta che non si mischiano, che non ci siano doppioni.

