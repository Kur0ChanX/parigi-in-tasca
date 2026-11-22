# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 9 `session_01WTjqUupr9MVG6nPkyrLatA`, 22/11 13:36 ora italiana, chiusa alla soglia; la apre Mario (catena a 8 di 8, o cambio account): passi in `docs/kit-progetto/CAMBIO-ACCOUNT.md`)
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261122-01WTjqUupr9M/claude/parigi-ramo-definitivo.
- **v32 online** (22/11 ~13:34, PR #33), sito vero: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 32}`. Prove della v32 in locale: `prova-web-app.js` 60 VERO (2 nuove: numero/fila/luci, PC), `prova-scritte.js` 20 VERO, `fai-dicembre.py --controlla` VERO. Scorta mia già unita.
- **Già deciso da Mario (non richiedere):** «vai avanti da solo… ascolta i tuoi consigli»; si pubblica a prove verdi (giro in locale, `tools/scegli-giro.py`); niente si toglie. **Personaggi e figure: SOLO foto di Mario ritagliate, mai disegnati da noi.** 13:37: «qualsiasi ok va bene» per il passaggio all’altro account.
- **Da non rifare:** v30–v32 (online); slitta vettoriale (scartata).
- **Cosa preme a Mario adesso (13:37, parole intere in `docs/lavori-in-corso/C18-slitta-e-luci.md` in fondo):** testata con «effetto wow»: slitta colorata (non grigia/piatta), regali che cadano davvero, castello meno slavato con più lucine e addobbi, ombre e 3D sulle decorazioni, note delle versioni professionali. Foto PRIMA/DOPO e video.

## Cosa è stato fatto (Controllo 9)
- v32: castello con finestre ad arco che si accendono (`#castFin`), lucine sugli spigoli (`#castLuci`), proiezioni ritagliate (`clipPath #castClip`, `.pj` ogni 30 s), luce dal basso; albero col filo a spirale (`#filoAlbero`), raggi della stella (`.raggi-st`); cielo: nuvole nel canvas (`clouds`), stelle colorate, rosa (`#rosaG`), faro della Torre Eiffel (`.faro`); vignetta con maschera (`#vignaM`). Fila dei giorni su una riga (45 px); `.vnum` assoluto, solo scheda Piano. PC ≥1100: testata in 2 colonne; ≥1600 wrap 96rem; `.answer` 3 colonne (bug di ordine nel CSS). Blocco CSS «v32» in fondo allo `<style>`.
- Foto e video in `archivio/2026-11-22-c18-v32/` (mandati a Mario). 3 righe nuove in `docs/ERRORI.md`.

## Strade provate e scartate
- Proiezioni forti (opacità .9, colori pastello): castello «dipinto», finto. Ora .62 e colori più scuri; Mario 13:37 le trova comunque «slavate»: provare colori più saturi sul castello più scuro, non più bianco.

## Prossimi passi
1. **Mario 13:37 (C18, voci in `docs/DA-FARE.md` «Controllo 10»):** a) note `VERSIONI` v30 e v32 in descrizione tecnica e professionale; b) 🐞 regali che non cadono sul telefono di Mario (la prova «pacchi (2)» è verde in locale: cercare la causa vera, es. `#pacchi` fuori vista o dietro i tetti troppo presto); c) slitta più colorata e con volume, sempre dalla SUA foto (`archivio/2026-11-22-c18-slitta/mario-1249-…jpg`, oggi `v30-slitta-ombra.webp`); d) castello: colori saturi, più lucine animate, addobbi natalizi; e) ombre e 3D delle decorazioni («effetto wow»). Foto PRIMA/DOPO (`tools/confronta-foto.py`) e video, poi v33.
2. C17 resto: Domenica a Parigi più curata; giorni Disney semplici (alloggio ↔ parchi).
3. ~26/11: rileggere l’orario RER A della settimana del 17/12 e correggere i minuti se cambiano.
4. 🐞 prova «dicembre: service worker suo» instabile (voce in Da fare).
5. In coda, senza priorità: più fuochi d’artificio, abbellimenti natalizi.

## Blocchi e rischi
- Testi dentro apici semplici in JS: usare «’»; dopo modifiche via script, `node --check` dei 4 `<script>`.
- Nomi nuovi: prima `grep -c`. Regole del PC in fondo al CSS (E del 22/11). Foto di lavoro con la scritta in alto (E314).
- Video: `recordVideo` a 412×915 registra la pagina a 1× in alto a sinistra: ritagliare a 1× e poi ingrandire ×2.

## Ultimo messaggio di Mario
Intero in fondo («Messaggi di Mario di questa sessione») e in `docs/lavori-in-corso/C18-slitta-e-luci.md`.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 10
la apre Mario (catena a 8 di 8, o cambio account): passi in `docs/kit-progetto/CAMBIO-ACCOUNT.md`. Scritto da Controllo 9 il 22/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 10 · slitta e castello`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 10 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-22 13:12 · [AVVIO] Sei la chat parallela Controllo 9 di Parigi in tasca, linea «Controllo» … → v32 (C16, C17 PC, C18 luci)
- 2026-11-22 13:35 · Allora, nelle note delle versioni scrivilo in modo professionale, non che passa,… → C18 v33 (Prossimi passi 1), voci in Da fare, consegne

Ultimo, intero:
> Allora, nelle note delle versioni scrivilo in modo professionale, non che passa, lancia i regali così, non vuole cioè è brutto, devo dire. Scrivilo in descrizione tecnica e poi la slitta passa ma non lancia nessun regalo. Non so perché. E poi le ombre curale meglio, l'effetto un po' 3D delle decorazioni iniziali delle immagini, fagli abbellimenti più effetto wow. Mandami delle foto prima e dopo.
> La slitta falla un pochettino colorata, cioè sembra ancora uno sticker così grigio, non lo so, rendila, non te lo so dire, graficamente falla, colorala meglio, ecco, così è proprio, è piattissima, sembra uno sticker che si muove.
> Finisci quello che devi finire. E ogni tanto salva perché sta facendo un passaggio di consegna all'altro account. Tu comunque ogni tanto salvi e vai a finire fino a esaurimento token.
> I colori del castello sono troppo slavati, non capisco. Aggiungi delle più animate, lucine che si accendono, che si spengono, un po' più aggiungi dettagli, addobbi, insomma, aggiungere di dettagli, di addobbi e di cose natalizie, ecco.
> Attento, stanno per finire il token, fai il passaggio di consegna, comunque ti do l'ok, qualsiasi ok va bene. Attento che sennò perdiamo file quando facciamo passaggio di consegne, massima priorità.

