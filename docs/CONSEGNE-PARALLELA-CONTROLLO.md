# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 7 `session_01WTjqUxPidPtPV7FCfpJpKr`, 22/11 12:23 ora italiana, chiusa alla soglia; la apre la Controllo 7 con `create_session` (catena 6 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261122-01WTjqUxPidP/claude/parigi-ramo-definitivo.
- **v29 online** (22/11 ~12:20, PR #30), sito vero controllato: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 29}`. Versioni di questa sessione: v25 (#26) fila dei giorni sopra la barra · v26 (#27) numero della versione + novità + «Aggiorna versione» · v27 (#28) fila dei giorni IN ALTO, ferma scorrendo · v28 (#29) indice di 12 tasti nella schermata principale, testata e barra delle schede compatte · v29 (#30) mappa a schermo intero, zoom 8–19, pezzi mancanti richiesti di nuovo.
- **Già deciso da Mario (non richiedere):** «vai avanti da solo… ascolta sempre i tuoi consigli» (22/11 ~12:00): domande nuove le decido io col mio consiglio e lo dico, mi fermo solo per quelle molto importanti; si pubblica a prove verdi (giro in locale, `.claude/progetto.json`); fila dei giorni in alto (DOMANDA 1 = 2); niente si toglie, si mette in ordine di importanza; zoom della mappa libero (supera «andare oltre non mi serve»); slitta del film nella testata: sì (sagoma nostra in penombra). Parole intere in `docs/lavori-in-corso/C16-…`, `C17-…`, `C18-…`, C15.
- **Da non rifare:** v25–v29 (online); proposte della fila (fatte e scelte); limiti di richieste IGN (il WMTS non ne ha: cartes.gouv.fr «Limites d'usage», 07/08/2026); livelli del Plan IGN (0–19, capabilities lette il 22/11).
- **Cosa preme a Mario adesso:** la slitta che passa nel cielo coi regali + luce e ombre sul disegno + più Natale (C18, appena chiesta), e giovedì 17 con l'ora per Orly (C17 pezzo 5).

## Cosa è stato fatto (Controllo 7)
- C16: causa vera della fila sparita (v17: barra delle schede fissa sopra, z-index 60 contro 30), diario degli errori, 2 prove nuove (`elementFromPoint`) rosse sulla v24. Poi fila in alto `position:sticky` (`#giorni{overflow:clip}`), il numero della versione si toglie quando la fila è ferma (`body.fila-su`), toccando un giorno si parte dal titolo.
- C17: `const VERSIONI` nella pagina (novità ≤130 lettere, linguaggio da app), `tools/fai-dicembre.py` scrive `dicembre/versione.json` e lo controlla; la pagina lo legge con `cache:'no-store'` e mostra «v28 → v29» + «⬆ Aggiorna versione» (registration.update, fetch reload, location.reload). Visto funzionare sul telefono di Mario (sua foto 12:08 con «v26 → v27»).
- C17: indice `nav.go` di 12 tasti (Volo 17 = `#p-gio` + `data-day="4"`); `go()` salta subito quando cambia scheda; barra delle schede 53 px; `scroll-padding-top:80px` nella scheda Giorni sul telefono.
- C15: schermo intero `.tm-box.pieno` (z 300, `#mappa>.wrap` alzato, barre nascoste), `history.pushState` + popstate, zoom 8–19, `maxBounds` Île-de-France, `tileerror` → nuovo tentativo fino a 3 (`&prova=n`).
- Prove: `tools/prova-web-app.js` 56 righe (nuove: fila, barre fisse/ferme coperte, versione/aggiorna, indice, mappa schermo intero e zoom).

## Strade provate e scartate
- Fila dei giorni in basso sopra la barra (v25) e sottile (v26): copriva il disegno del giorno; Mario ha scelto la fila in alto.
- Due barre fisse in basso: troppo spazio coperto (138 px su 915).

## Prossimi passi
1. **C18 slitta (Mario ~12:12, parole intere e foto di riferimento in `docs/lavori-in-corso/C18-slitta-e-luci.md` e `archivio/2026-11-22-c18-slitta/`):** un aiutante della Controllo 7 la stava disegnando nella memoria temporanea del vecchio contenitore: se in `archivio/2026-11-22-c18-slitta/aiutante/` non ci sono `slitta.svg.html`, `slitta.css`, `slitta.js`, rifarla. Sagoma nostra in penombra (bara verde, 3 renne scheletro, figura magra in rosso), ogni 40–70 s, regali che cadono e spariscono prima dei tetti, ferma con «riduci movimento»; poi luce più vera nella testata (bagliore luna e lampioni, ombre morbide, luce di bordo, nebbia, vignetta) e dettagli di Natale in tutta la pagina. Foto e video a Mario, novità in `VERSIONI`, pubblicare.
2. **C17 pezzo 5, giovedì 17 (Mario ~11:55):** ora di partenza per Orly con margine (oggi la pagina dice uscita 8:30, terminal ~10:00, volo 12:45, «ultimo treno sicuro 9:26»), bagagli, avviso «partite prima» ben visibile; Domenica a Parigi più curata; giorni Disney semplici (alloggio ↔ parchi). Orari solo da fonti ufficiali (RATP/IDFM, Orly, Volotea).
3. 🐞 in Da fare: prova «dicembre: service worker suo» instabile (~1 su 5, anche sulla v27): trovare la causa vera.
4. Voci 👁 di Da fare: chiuderle solo quando Mario dice di averle viste (v25–v29).

## Blocchi e rischi
- Alla Principale niente `send_message` per le versioni pubblicate; solo per un'azione sua o un rischio sui suoi file.
- Nomi nuovi: prima `grep -c` (diario: 4 casi di nome già usato). Funzioni fra i due `<script>` passano da `window`.
- Le prove della mappa usano la rete (cdnjs e IGN). La prova «service worker suo» va rilanciata se rossa da sola (voce 🐞).
- Elementi fissi nuovi: z-index sopra 55 (numero), 60 (barra), 61 (avviso); la mappa piena è a 300. La prova «nessun tasto coperto» guarda elementi fissi e fermi.

## Ultimo messaggio di Mario
> Metti che ogni tanto passa questo nel cielo, stai attento bene a non renderlo troppo, cioè a rendere i colori veritieri in base alla scena, a studiarti bene le ombre, la visibilità eccetera, che lui passa e lancia dei regali, dei pacchi regali, come nel film Nightmare Before Christmas. Rendilo un po' in penombra, eccolo, e poi dagli una botta all'immagine generale di tipo un effetto tipo ray tracing, qualcosa del genere, per renderla un pochettino più bella e non piatta, visto che non sai disegnare bene. Aggiungi comunque dettagli, come ti ho già detto, alla schermata principale e in generale poi a tutto il web più natalizio.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 8
la apre la Controllo 7 con `create_session` (catena 6 di 8). Scritto da Controllo 7 il 22/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 8 · giovedì e slitta`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 8 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Controllo Da fare: 0 voci aggiunte (ogni richiesta ha già la sua voce 👁 o 🐞).
- 2026-11-22 11:40 · [AVVIO] Sei la chat parallela Controllo 7 di Parigi in tasca, linea «Controllo» … → v29: pezzi della mappa richiesti di nuovo (C15)
- 2026-11-22 11:49 · Vedi qua la foto è coperta, l'immagine. → DOMANDA 1 con 2 proposte (C16), poi scelta la 2 → v27
- 2026-11-22 11:52 · Conta che vabbè, la giornata di priorità di curare i dettagli è quella a Parigi,… → v26 (numero della versione, Aggiorna), DOMANDA 1 = 1 poi cambiata; giovedì 17 = Prossimi passi 2 (C17)
- 2026-11-22 12:00 · No, facciamo quella che consigli tu, scusa, foto 2, scusa. Per quello ti dico, v… → DOMANDA 1 = 2: fila in alto, v27 (C16)
- 2026-11-22 12:04 · Vedi qua che l'indice, mettimi gli shortcut, anche giro di mercatini più piccoli… → v28: indice di 12 tasti, testata e barra compatte (C17)
- 2026-11-22 12:09 · Quando parlo di schermata principale intendo questa, che la facciamo diventare u… → vedi Prossimi passi
- 2026-11-22 12:15 · Metti che ogni tanto passa questo nel cielo, stai attento bene a non renderlo tr… → vedi Prossimi passi
