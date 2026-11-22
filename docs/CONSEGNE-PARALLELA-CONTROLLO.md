# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 6 `session_01WTjqUwFBdtHy8LkTqYTScN`, 22/11 11:38 ora italiana, chiusa alla soglia; la apre la Controllo 6 con `create_session` (catena 5 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261122-01WTjqUwFBdt/claude/parigi-ramo-definitivo.
- **v24 online** (22/11 11:32, PR #25), sito vero controllato (mappa caricata e tasti provati con Playwright sull'indirizzo vero): «Mappa del viaggio» zoomabile in fondo alla scheda Giorni (`#mappa`), scorciatoia in alto, bottone «🗺️ Il giro sulla mappa» nel giro. Verifica: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/ | grep -c tmMap` > 0. v23 online 11:07 (PR #24).
- **Già deciso da Mario (non richiedere):** «Fai tutta la grafica e pubblica» e «pubblica tranquillo e finisci il lavoro» (si pubblica a prove verdi, foto mandate dopo); Disney per tempo, km visibili ma MAI negli ordini e filtri; mappa zoomabile solo nel riquadro Orly–Parigi–Disney («andare oltre non mi serve»). Parole intere in `docs/lavori-in-corso/C15-mappa-mercatini.md` e C13.
- **Da non rifare:** v23 e v24 (online); mappa ferma del giro (tolta: doppione della mappa zoomabile); ricerca posizioni (in C15).
- **Cosa preme a Mario adesso:** la fila dei giorni in basso (Dom 13 … Gio 17) che non vede più: è COPERTA dalla barra delle schede, già nella v23 (vedi Prossimi passi 1).

## Cosa è stato fatto (Controllo 6)
- v23 finita e online: km di nuovo visibili (schede, pareri, «Dov'è», riga 🏰 piccoli), «Vicino a Disney» ordina solo per minuti (`kmD` tolto), prova nuova. Foto in `archivio/2026-11-22-c13-v23-km/`.
- v24: `tools/fai-mappa-viaggio.py` (blocco `TM`; alloggi presi da `fai-mappe-dicembre.py`), Leaflet 1.9.4 da cdnjs con integrità, pezzi Plan IGN (WMTS), zoom minimo = riquadro intero, segni per zoom (da lontano 🎄 🏰 ✈️ 🛏️, da vicino tappe, linea, stazioni, alloggi, grigi), alloggio scelto che segue la scelta (`tmAl()` in `mkAl()`); `dicembre/sw.js` cassetto `mappa-natale-v1`. Foto in `archivio/2026-11-22-c15-mappa-viaggio/`. Prove 52/52.
- Errore vecchio corretto (diario 22/11): `sw.js` di novembre cancellava i cassetti di dicembre.

## Strade provate e scartate
- Mappa ferma (immagine IGN con numeri, «Ingrandisci»): funzionava, ma Mario ha chiesto la mappa zoomabile → tolta per non avere due mappe.
- 3 bottoni nuovi «Apri in Google Maps» a pezzi: doppione del bottone «Tutto il giro su Google Maps» e dei link di ogni tappa.
- Stazioni Châtelet e Auber sulla mappa: coprivano la tappa 4 e Les Halles.

## Prossimi passi
1. **Fila dei giorni coperta (🔴 in Da fare):** `#daybar` (fissa, z-index 30, alta 56, top 853 a 412×915) sta sotto `#tabbar` (fissa, z-index 60, top 846) in v23 e v24: Mario non la vede più. Trovare da quale versione (prova: `git log -S daybar` sul CSS di `.daybar` e `.tabbar`), rimetterla SOPRA la barra delle schede (bottom = altezza della tabbar + zona sicura), prova nuova in `tools/prova-web-app.js` «fila dei giorni visibile e cliccabile sopra la barra delle schede» (`elementFromPoint` sul centro di un tasto = il tasto), foto prima/dopo, pubblicare (Mario ha già detto di pubblicare), diario degli errori. Poi a Mario la causa in parole semplici.
2. **Mario 22/11 ~11:42 (dopo l'handoff, parole intere in C15):** Mappa del viaggio a **schermo intero** (tasto, ✕ e «indietro» per uscire) e **zoom sbloccato** nei due sensi: oggi si ferma allontanando (minZoom = riquadro, `maxBounds`) e avvicinando (maxZoom 17). Supera il suo «andare oltre non mi serve» delle 11:20: allargare minZoom/maxBounds (es. Île-de-France) e maxZoom fino al massimo del Plan IGN (verificare). Aggiornare la prova della mappa (oggi controlla `zMin === minZ` e il centro dentro il riquadro). Poi foto e pubblicare.
3. **Mario 22/11 ~11:45 (dopo l'handoff, parole intere in C15):** nella schermata principale tutti i tasti delle cose principali («la mappa deve avere un tasto shortcut nella schermata principale e anche tante altre cose fondamentali»). La griglia «Vai subito a» (`nav.go`, testata della scheda Piano) ha GIÀ 10 tasti, Mappa compresa (v24): Mario non l'ha notata → controllare che si veda subito aprendo l'app sul telefono e aggiungere i fondamentali che mancano (es. il giorno di oggi, il vostro alloggio, orari minuto per minuto, hotel Disney), senza doppioni.
4. Voci 👁 di `docs/DA-FARE.md`: chiuderle solo quando Mario dice di averle viste (v23, v24 mappa).
5. Più avanti (Mario: «più avanti»): sulla mappa il tragitto della giornata secondo l'alloggio scelto (C15, fase 2).

## Blocchi e rischi
- **Alla Principale niente `send_message` per le versioni pubblicate** (Principale 22, 22/11 11:08). Scriverle solo per un'azione sua o un rischio sui suoi file.
- Nomi nuovi: prima `grep -c`; funzioni fra i due `<script>` passano da `window`. Prova «service worker suo» a volte instabile: rilanciarla da sola. Una prova che non trova il segno giusto: guardare prima la foto (es. Louvre contato fra i grigi).
- Le prove della mappa usano la rete (cdnjs e IGN): senza rete il test della mappa fallisce per quello, non per il codice.

## Ultimo messaggio di Mario
> No, sotto mi mettevi le date mi faceva vedere l'itinerario del giorno. Sotto c'era tipo domenica, lunedì, martedì, però i numeri. Che fine hanno fatto quelli? Perché sono stati tolti? Non andavano bene? Fammi capire.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 7
la apre la Controllo 6 con `create_session` (catena 5 di 8). Scritto da Controllo 6 il 22/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 7 · barra dei giorni`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 7 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-22 11:00 · [AVVIO] Sei la chat parallela Controllo 6 di Parigi in tasca, linea «Controllo» … → avvio; v23 finita con km visibili (Mario 11:05), online 11:07
- 2026-11-22 11:20 · Sì, me la puoi fare la mappa zoomabile che mi faccia vedere insomma le cose che … → C15: v24 mappa zoomabile online 11:32
- 2026-11-22 11:27 · poi publica tranquillo e finisci il lavoro → v24 pubblicata a prove verdi
- 2026-11-22 11:35 · Una domanda, perché mi hai tolto la divisione dei giorni nel calendario sotto? N… → controllato: tasti dei giorni presenti; DOMANDA 1 foto
- 2026-11-22 11:37 · No, sotto mi mettevi le date mi faceva vedere l'itinerario del giorno. Sotto c'e… → risposta alla DOMANDA 1: causa trovata (fila coperta dalla barra delle schede, già in v23); correzione = Prossimi passi 1, voce 🔴 in Da fare

Ultimo, intero:
> No, sotto mi mettevi le date mi faceva vedere l'itinerario del giorno. Sotto c'era tipo domenica, lunedì, martedì, però i numeri. Che fine hanno fatto quelli? Perché sono stati tolti? Non andavano bene? Fammi capire.

