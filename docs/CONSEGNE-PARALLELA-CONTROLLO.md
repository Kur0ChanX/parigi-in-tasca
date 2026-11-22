# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 2 `session_01WTjqUxihdodXx5rgGV3q9Q`, 22/11 01:06 ora italiana, chiusa alla soglia; la apre la Controllo 2 con `create_session` (catena 2 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261122-01WTjqUxihdo/claude/parigi-ramo-definitivo.

- **Già deciso da Mario (non richiedere):** alloggi **in priorità 13→17** (14→17 seconda strada); criteri: non cari, ≤ ~12 min a piedi dalla RER, vicino a Disney, voto ≥ 8 e pulizia buona, senza auto; schede divise per tipo, niente listoni; «vai da solo e pubblica»; tasto «Tutti» e distanze in vista (Disney minuti e km, RER a piedi): FATTI; ricerca anche sui siti diretti con 3 aiutanti: FATTA; grafica «rifai tutto da zero, solo migliorie»: COME farla aspetta la DOMANDA 1 🛑.
- **Da non rifare:** ricerca C12 e siti diretti (`research_notes/…/alloggi_ricerca_profonda_*.md`, `alloggi_siti_diretti_*.md`: nessun alloggio nuovo valido); v18 online (PR #19); plugin `frontend-design` già letto (`docs/lavori-in-corso/C13-aspetto-pagina.md`).
- **Cosa preme a Mario adesso:** risposta alla DOMANDA 1 (grafica a pezzi con foto, consiglio, o tutta insieme) e DOMANDA 2 (plugin: consiglio non installarlo); 4 foto della v18 mandate (`archivio/2026-11-22-v18-*.jpg`).

- v18 ONLINE (22/11 ~01:04, PR #19 unita, squash `e9a2599`): verifica `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/ | grep -c scBB` → 2. Prove sull'ultimo commit di codice: web app 41/41, scritte VERO, `fai-dicembre.py --controlla` VERO, colori VERO, mappe allineate.
- La pagina di dicembre è di questa catena (la Principale non la tocca). Principale attiva: «Principale 22» (`session_01WTjqUtegBCzTHdbgdaXDm1`).
- Controllo Da fare: 1 voce aggiunta (👁 C13 grafica a pezzi con foto prima/dopo); la voce 👁 della Controllo 1 (tasto Tutti, distanze, siti diretti, aspetto) resta finché Mario vede.

## Cosa è stato fatto (Controllo 2)
- v18 in `dicembre/parigi-disney-natale.html`: `MIO_S={n:"",d:8}` (4 notti Moxy), `#mio`, `CK[0]`, `BARS` (7 + 2 pacchetti = 9 barre); n. 31–35 in `AL`, `Q`, `ACC`, `DV`; n. 30 a 647 €; riquadro `#scBB` (Jolie chambre, CSS `.sc-x`, visibile con «B&B» e «Tutti»); `TY` con 'tutti' (predefinito, conteggi in `tag()`); riga della scelta con `rerT(h)` e «🏰 Disney min · km» (`kmD`, `kmDT` dal blocco MAPPE); «Vicino a Disney» per km in `SORT` e `SRT`; legenda `.sc-leg`. `tools/fai-mappe-dicembre.py` `ZONA` 31–35. `tools/prova-web-app.js`: conteggi 35, blocco «v18».
- Errore mio (diario `docs/ERRORI.md` 22/11): nome `kmT` già usato → km sbagliati, rinominato `kmDT`. Spostate 2 righe vecchie in `docs/ERRORI-STORIA.md` (tetto 10 KB).
- C13 aperto: `docs/lavori-in-corso/C13-aspetto-pagina.md` (parole di Mario, plugin letto, piano proposto).

## Strade provate e scartate
- «Vicino a Disney» coi minuti senza attese (v17): in cima Residhome e la navetta del Crowne Plaza (ogni 30 min), Hotel Disney 4°: scartata, ora km in linea d'aria (IGN), a pari km i minuti.
- Minuti con le attese: scartato, servirebbero le frequenze ufficiali di RER e navette.
- Zenitude Val d'Europe (Chessy): pulizia 8,4 < 8,5 e reception 9–19.
- Installare il plugin: consiglio no (solo istruzioni, le applico leggendole; toccherebbe `.claude/settings.json` di tutte le chat).

## Prossimi passi
1. Alla risposta della DOMANDA 1: C13 «Piano proposto» (piano grafico corto con le regole del plugin, primo pezzo la scheda Dormire, foto prima/dopo con `tools/confronta-foto.py`, prove, pubblicare il pezzo approvato).
2. Voci 👁 di `docs/DA-FARE.md` sezione 1: chiuderle solo quando Mario le vede.
3. Solo se Mario lo chiede: prezzi sui siti ufficiali a mano (elenco nei file `alloggi_siti_diretti_*.md`).

## Blocchi e rischi
- Prezzi letti il 21/11: possono salire. Airbnb n. 34: cancellazione gratuita solo 24 ore; n. 31–33: cancellazione delle 3 notti non letta.
- Prova «dicembre: service worker suo» instabile: cade anche sulla v17 (provato), il servizio vero funziona (script a parte: la pagina è comandata dal suo service worker). Rilanciarla da sola; ora stampa chi comanda la pagina.
- Nomi nuovi nella pagina: prima `grep -c '\bnome\b'` = 0.

## Ultimo messaggio di Mario
«qui» con la foto, seguito dal messaggio arrivato alla Controllo 1 dopo il suo handoff (`archivio/2026-11-22-mario-dormire-tasto-tutti.jpg`):
> qui metti un tasto tutti non solo hotel b&b ecc e metti anche in bista distanza Disney con tempi e km a piedi rer a piedi
>
> Cerca meglio anche su siti privati Non per forza Booking, Airbnb ecc ecc, anche siti privati che si va a risparmiare sulla commissione dei portali. Metti altri hotel in base ai miei requisiti, solo quelli validi che possono soddisfare le nostre esigenze. Cerca bene ovunque
>
> Se vuoi differenziare bene con magari evidenziando, con colori, con font diversi, spaziature, fai pure, almeno si capisce bene tutto.  usa  /plugin install frontend-design@claude-plugins-official
> su questo nostro sito rifai tutto con frontend da 0 solo migliorie

Poi: «e usa 3 agenti».

## Messaggio di Mario arrivato dopo l'handoff (22/11 ~01:10, nella chat Controllo 2)
> qui metti un tasto tutti non solo hotel b&b ecc e metti anche in bista distanza Disney con tempi e km a piedi rer a piedi
>
> Cerca meglio anche su siti privati Non per forza Booking, Airbnb ecc ecc, anche siti privati che si va a risparmiare sulla commissione dei portali. Metti altri hotel in base ai miei requisiti, solo quelli validi che possono soddisfare le nostre esigenze. Cerca bene ovunque
>
> Se vuoi differenziare bene con magari evidenziando, con colori, con font diversi, spaziature, fai pure, almeno si capisce bene tutto.  usa  /plugin install frontend-design@claude-plugins-official
> su questo nostro sito rifai tutto con frontend da 0 solo migliorie  Come ti ho già detto nella scorsa sessione, usa tre agenti.
> E allora continuo a cercare se non hai trovato nessun alloggio diretto.
> a pezzi
→ DOMANDA 1 = **a pezzi** (riga tolta da «Aspetta Mario»); DOMANDA 2 senza risposta → consiglio: plugin non installato, regole applicate leggendole. Tasto «Tutti» e distanze: già online nella v18. Da fare: (a) C13 a pezzi, primo la scheda Dormire, foto prima/dopo; (b) **continuare la ricerca di alloggi su siti diretti/privati con 3 aiutanti**, cercando meglio (la prima non ha trovato niente di valido: vedi `alloggi_siti_diretti_*.md`, piste CEK Holidays, 123home.fr, Zenitude; prezzi dei siti delle catene solo con un browser vero: provare Playwright).

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 3
la apre la Controllo 2 con `create_session` (catena 2 di 8). Scritto da Controllo 2 il 22/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 3 · aspetto pagina`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 3 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-22 00:44 · [AVVIO] Sei la chat parallela Controllo 2 di Parigi in tasca, linea «Controllo» … → avvio fatto, consegne lette
- 2026-11-22 00:49 · qui → con il messaggio passato dalla Controllo 1 (tasto Tutti, distanze, siti diretti, grafica, 3 agenti): v18 online (PR #19), ricerca siti diretti (3 file), C13 + DOMANDA 1 e 2

Ultimo, intero:
> qui

