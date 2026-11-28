# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 32 `session_01Rwcxc5wytQABAgrjwvZxTi`, 28/11 01:00 ora italiana, chiusa alla soglia; la apre la Controllo 32 con `create_session` (catena 8 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb.
- **Online v52** (verifica: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 52}`; la pagina contiene «Prenotato: n. 23» e «biglietti Disney 505 €»). PR 54, squash `99c271fe`, 28/11 00:58. Prove locali verdi: web app 84/84, scritte 20/20.
- **Già deciso da Mario (non richiedere):** dormono al **n. 23, prenotato su Booking a 461 €**, 4 notti 13→17 (risposta alla DOMANDA 1 della Controllo 32 e alla DOMANDA 3 della Controllo 30); **biglietti Disney presi a 505 €** (si intende il 3 giorni / 2 parchi dal 14/12); vuole tutta l'app giusta per il n. 23 («correggi ci saranno altri errori moxy ecc noi siamo al 23»).
- **Domande aperte (righe in «## 0. Aspetta Mario»):** DOMANDA 2 della Controllo 32 🛑 (parte per scegliere: 1 · riquadro chiuso in fondo «Se dovete cambiare alloggio» · 2 · togliere · 3 · lasciare; consiglio 1); «guarda la v52 sul telefono»; DOMANDA 1 della Controllo 31 (Kit 56: kit da riscaricare con `python3 -I tools/scarica-kit.py --cartella <scratchpad>/kit-nuovo`; se «1»: parte 1 del pacchetto, `tools/estrai-kit.py --scrivi --anche-claude`, Write per i protetti, prove degli hook, commit).
- **Preferenze di claude.ai:** quelle di Mario sono v38, il kit nuovo porta v40 → a fine giornata il testo di `docs/kit-progetto/PREFERENZE-CHAT.txt` (dopo il kit) a Mario (skill nuova-regola §5).
- **Sveglie:** `trig_01WfEXJaic6mfksKN87ipNmz` (28/11 10:17: orari RER A del 13 e 17/12 + meteo nella guida) è legata a questa sessione: la Controllo 33 la rifà sua con `send_later` e spegne questa con `update_trigger enabled=false` (`delete_trigger` lo ferma il controllo dei permessi). Spente: `trig_01Sxaox4AJ8PfkSvzi8MaeMQ` (vecchia della Controllo 31) e `trig_01Bo8KNT5Br17EuZ1SaSmHf2` (rimborso Airbnb: non serve, prenotato su Booking).
- Controllo Da fare: 0 voci aggiunte (C31 già in «1.» di `docs/DA-FARE.md`, domanda e «guarda la v52» in «## 0. Aspetta Mario»).

## Cosa è stato fatto (Controllo 32) · verifica: `git log --oneline 9106cc72..HEAD`
- C31 (`docs/lavori-in-corso/C31-pagina-n23.md`, con la lista di controllo della rilettura fatta da un aiutante): **v52** = guida di dicembre sul n. 23 prenotato. `MIO=23`, `SCELTO=true`, chiave nuova `pdn-scelta23` (le scelte vecchie salvate sul telefono non contano; tornare al n. 23 non salva niente); etichette «Prenotato» al posto di «il mio consiglio»; biglietti 505 € ovunque; «Hotel Disney» ricalcolato sul n. 23; `DV[23]` 9 minuti a piedi (era 5); scheda del n. 23 col prezzo Booking, strada dalla stazione, silenzio 20–8, colazione del lunedì (uscita 7:55), messaggio ai gestori con l'ora e il riscaldamento; posizione sulla mappa (`TM_PREN`); menu dell'alloggio con `autocomplete="off"` (foto di Mario: menu sul 23 e riquadro sull'8; causa ipotesi, non provata); «Da fare» e «Da ricontrollare» col n. 23.
- `tools/prova-web-app.js` aggiornato al n. 23 + prova nuova «minuti a piedi uguali in scheda e tempi ai parchi»; riga in `docs/ERRORI.md` (una vecchia spostata in `docs/ERRORI-STORIA.md`).
- Foto prima/dopo dal sito vero: `archivio/2026-11-28-n23/confronto-giorni-v52.png` (mandata a Mario); foto di Mario in `archivio/2026-11-28-n23/`.

## Strade provate e scartate (perché; così la prossima non le rifà)
- `delete_trigger`: fermato dal controllo dei permessi → `update_trigger enabled=false`.
- Coordinate del n. 23 scritte a mano nel blocco `TM` della pagina: la prova «mappa del viaggio: blocco dei dati allineato» le rifiuta (il blocco lo scrive `tools/fai-mappa-viaggio.py`) → `TM_PREN` a parte.
- Nominatim non trova il civico 32 (solo la via): percorso a piedi misurato dal 38 della stessa via (coordinate del n. 5) con routing.openstreetmap.de, 719 m.
- Script Python in heredoc con `$$` dentro (es. `p.$$(`): fermato dal controllo della shell → script in un file (Write) e `python3 -I`.

## Prossimi passi
1. Avvio normale; sveglia RER rifatta sua (sopra). In «⚠️ Aspettano te» prima la DOMANDA 2 della Controllo 32 e «guarda la v52».
2. Mario risponde alla DOMANDA 2. Con «1»: in cima «🛏️ Dove dormite: n. 23» con la scheda completa; «Scegliete dove dormire», «Questo o quello?», «Tutti gli alloggi» e «Hotel Disney: conviene?» in un riquadro chiuso in fondo «Se dovete cambiare alloggio»; prove (molte toccano `#scegli`), foto, v53.
3. Mario dice che vede la v52 → chiudere la voce «👁» C31 in `docs/DA-FARE.md` e la riga «guarda la v52».
4. Sveglia 28/11 10:17: orari RER A del 13 e 17/12 e meteo nella guida.
5. Aperto piccolo (I24 della lista C31): ristoranti «Vicino all'alloggio» coi minuti dalla stazione (dal n. 23 circa +9); dati di `tools/fai-ristoranti.py`.
6. Kit 56 se Mario dice «1».

## Blocchi e rischi
- Telefono di prova = imitazione. `docs/DA-FARE.md` a 40,7 KB (tetto 40): alla prossima voce spostare le finite in `docs/DA-FARE-FATTE.md`. `docs/ERRORI.md` 9,9 KB (tetto 10).
- Su Booking il n. 23 è una richiesta di prenotazione: Mario deve controllare che i gestori l'abbiano accettata (scritto nel «Da fare» della guida).

## Ultimo messaggio di Mario
> biglietti dei parchi presi a 505

(28/11 00:33: messi nella v52, online alle 00:58.)

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 33
La apre la Controllo 32 con `create_session` (catena 8 di 8: la sessione dopo la apre Mario). Scritto da Controllo 32 il 28/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 33 · alloggio e RER`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 33 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-28 00:07 · [AVVIO] Sei la chat parallela Controllo 32 di Parigi in tasca, linea «Controllo»… → avvio
- 2026-11-28 00:22 · Dormiano nell appartamento 23 guarda tutta l'app con cura per itinerario info ec… → C31, v52 (PR 54)
- 2026-11-28 00:31 · booking 461 preso dai un check su tutto se ci aono info giuste itinerario ecc e … → risposta alla DOMANDA 1 (Booking 461 €); C31, v52
- 2026-11-28 00:32 · correggi ci saranno altei errori moxy ecc noi siamo al 23 → C31, v52 (foto in `archivio/2026-11-28-n23/`)
- 2026-11-28 00:33 · biglietti dei parchi presi a 505 → v52 (505 € in tutta la guida)

Ultimo, intero:
> biglietti dei parchi presi a 505
