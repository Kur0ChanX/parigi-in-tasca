# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 8 `session_01WTjqUtNmxgoAKmcM6PnYWD`, 22/11 13:10 ora italiana, chiusa alla soglia; la apre la Controllo 8 con `create_session` (catena 7 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261122-01WTjqUtNmxg/claude/parigi-ramo-definitivo.
- **v31 online** (22/11 ~13:08, PR #32; v30 = PR #31), sito vero: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 31}`. Prove della v31 in locale: `prova-web-app.js` 58 VERO, `prova-scritte.js` 20 VERO, `fai-dicembre.py --controlla` VERO.
- **Già deciso da Mario (non richiedere):** «vai avanti da solo… ascolta i tuoi consigli» (domande nuove: decido col consiglio e lo dico; mi fermo solo per le molto importanti); si pubblica a prove verdi (giro in locale); niente si toglie, si ordina per importanza. **Personaggi e figure: SOLO foto di Mario ritagliate, mai disegnati da noi** (Mario 12:48, diario 22/11). Slitta: ombra scura, piccola (110), dietro il castello e davanti alla luna, cappello rosso (12:53).
- **Da non rifare:** v30–v31 (online); orari di giovedì 17 (verificati il 22/11: `research_notes/…/giovedi_17_orly_verifica.md`); slitta vettoriale (scartata, anche quella dell'aiutante in `archivio/2026-11-22-c18-slitta/aiutante/`).

## Cosa è stato fatto (Controllo 8)
- C18 slitta: foto di Mario ritagliata (`archivio/2026-11-22-c18-slitta/mario-1249-…jpg` → `v30-slitta-ombra.webp`, script in memoria temporanea: flood dal bordo + buchi chiusi, poi «ombra»: buio, filo di dettaglio, rosso spento, bordo di luna). `<g id="slitta">` nel cielo lontano prima di `#roofs` (dietro castello e casette); passa ogni 40–70 s (prima dopo 5 s), strada `Y=y0+K*(X-240)`, regali `#pacchi` che cadono; `window.slittaProva(u,d,y0)` per prove e foto; `inVista()` invece dell'IntersectionObserver (v31).
- C18 luce: lato in luce/ombra di torri, coni e abete (`#castLuce`, `.ombraC`, `.luceC`), bagliore finestre, nebbia (`#nebbia`), ombra dell'abete, vignetta `#vigna` larga quanto la parte visibile, brillii `.neve-st`.
- C17 pezzo 5 (giovedì 17): uscita −15 min per tutti gli alloggi, riquadro `.callout-presto` «⏰ Partite prima» (`d.top` nel giorno), treni 8:24/8:30 (8:21/8:27 Chessy), ultimo sicuro 8:47 (8:44), voce «Orari RER A di giovedì 17» in Da ricontrollare (escono ~26/11).
- Prove nuove in `tools/prova-web-app.js`: slitta parte da sola / ferma con riduci movimento / pacchi; giovedì 17.

## Strade provate e scartate
- Slitta disegnata in vettoriale (mia e dell'aiutante): Mario la vuole dalla sua foto.
- Video con l'orologio finto di Playwright: i fotogrammi non seguono la pagina. Va il video in tempo reale (`recordVideo` 412×915, crop, ingrandito ×2).

## Prossimi passi
1. **Mario 12:27 (C16/C18, parole intere in `docs/lavori-in-corso/C18-slitta-e-luci.md`):** fila dei giorni in alto più stretta; numero della versione NON fisso scorrendo, solo in alto nella testata; PC: pagina che riempie bene lo schermo; indice ordinato; testata più bella con LUCI (albero con lucine, cielo più vivo, castello con finestre che si accendono e proiezioni), senza figure disegnate da noi. Foto/video a Mario, novità in `VERSIONI`, pubblicare.
2. C17 resto: Domenica a Parigi più curata; giorni Disney semplici (alloggio ↔ parchi).
3. ~26/11: rileggere l'orario RER A della settimana del 17/12 (malignea.fr/horaires) e correggere i minuti se cambiano.
4. 🐞 prova «dicembre: service worker suo» instabile (voce in Da fare).
5. In coda, senza priorità: più fuochi d'artificio, abbellimenti natalizi.

## Blocchi e rischi
- Testi dentro apici semplici in JS: usare «’» (diario 22/11); dopo modifiche via script, controllo sintassi dei 4 `<script>`.
- Nomi nuovi: prima `grep -c`. Funzioni fra i due `<script>` via `window`. Elementi fissi: z-index sopra 55/60/61, mappa piena 300.

## Ultimo messaggio di Mario
> e mettilo in penombra, come se fosse tipo un'ombra, non è molto visibile, se no si vede che è photoshoppato. Se no sembra uno sticker che si muove. Fallo passare dietro il castello, ma davanti alla luna, e fallo un po' più piccolo. E niente, il cappellino là so già sceglierlo rosso, però

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 9
la apre la Controllo 8 con `create_session` (catena 7 di 8). Scritto da Controllo 8 il 22/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 9 · testata e fila`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 9 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-22 12:25 · [AVVIO] Sei la chat parallela Controllo 8 di Parigi in tasca, linea «Controllo» … → v30 (C18 luce, C17 giovedì 17)
- 2026-11-22 12:48 · Mi raccomando, ritaglia questa immagine e metti questa immagine, non disegnare, … → foto ritagliata (v30), diario
- 2026-11-22 12:53 · e mettilo in penombra, come se fosse tipo un'ombra, non è molto visibile, se no … → ombra piccola dietro il castello (v30), parte sempre (v31)

Ultimo, intero:
> e mettilo in penombra, come se fosse tipo un'ombra, non è molto visibile, se no si vede che è photoshoppato.
> Se no sembra uno sticker che si muove.
> Fallo passare dietro il castello, ma davanti alla luna, e fallo un po' più piccolo. E niente, il cappellino là so già sceglierlo rosso, però

