# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 10 `session_01Rwcxc4fE4Cr4TbKimLKr1U`, 22/11 14:27 ora italiana, chiusa alla soglia; la apre la Controllo 10 con `create_session` (catena 1 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb.
- **v33 PRONTA ma NON online**: sito = v32 (`curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 32}`); nel ramo `dicembre/versione.json` = 33. Prove sul commit `b90498a`: `prova-web-app.js` 60 VERO (2 giri), `prova-scritte.js` 20 VERO, `fai-dicembre.py --controlla` VERO, `controlla-colori.py` esito 0.
- **Pubblicazione bloccata dai permessi**: `git push origin <sha>:refs/heads/versione-v33` NEGATO dal controllo automatico dei permessi (ramo nuovo senza ok scritto di Mario). Domanda 🛑 in «## 0. Aspetta Mario» (DOMANDA 1). Con «ok pubblica»: ramo-copia `versione-v33`, PR verso `main`, unione squash (skill `unione-pr`), poi `git merge origin/main` nel ramo comune.
- **Già deciso da Mario (non richiedere):** «vai avanti da solo… ascolta i tuoi consigli»; si pubblica a prove verdi (giro in locale); niente si toglie. **Personaggi e figure: SOLO foto di Mario ritagliate, mai disegnati da noi.** Castello: «coloralo e decoralo come vuoi… basta che risulti con lo stesso stile della foto» (il suo disegno).
- **Da non rifare:** v30–v32 (online); slitta vettoriale; castello solo ricolorato sulla sagoma vecchia (Mario: «non uguale al disegno… neanche minimamente»).
- **Cosa preme a Mario adesso (14:2x, parole intere in `docs/lavori-in-corso/C18-slitta-e-luci.md` in fondo):** castello della testata con la FORMA e lo stile del suo disegno (`archivio/2026-11-22-c18-v33/mario-castello-riferimento.jpg`), colorato di notte e decorato; poi foto prima/dopo e pubblicazione della v33.

## Cosa è stato fatto (Controllo 10)
- 🐞 Regali invisibili (causa provata: 6 px, scuri, lanciati sopra il castello che è disegnato davanti; la prova li contava soltanto): ora colorati con alone, scala .72 (Mario «più piccolini»), lanciati solo sul cielo libero (`nuovo()`, intervalli fuori da x 400–601); prova con misura ≥5 px ed `elementsFromPoint` (la slitta che lo sta lanciando non conta). Riga in `docs/ERRORI.md`.
- Slitta: la foto di Mario coi suoi colori in luce di notte (`archivio/2026-11-22-c18-slitta/lavoro/v33-slitta-colori.webp`, script `archivio/2026-11-22-c18-v33/lavoro/slitta-colori.py`), scia di polvere di stelle (`#polvere`).
- Castello (sagoma vecchia): `#castColori` (rosa e blu ardesia, sfumature `torreG`/`tettoG`, variabili `--c-tet*`/`--c-mur*` nel blocco CSS «v33» in fondo allo `<style>`), `#castDeco` (neve sui tetti, puntali d’oro, bandiere d’oro, fasce rosa, ghirlande con lucine `lampC`), lucine dei tetti a onda (`.ond`). Da rifare sul disegno (Prossimi passi 1).
- Mercatini: lampadine dei tetti che si accendono e spengono (`.lampM`), stella sul colmo (`.stellaC`), luce dei banchi (`.lucBanco`), lato in ombra (`latoO`), ombra del tetto e a terra; palline in rilievo (`pallaO`). Albero: palline in più e pila di 11 pacchi (`#regaliAlbero`).
- Note `VERSIONI` v30–v33 in stile tecnico (Mario 13:37). Foto e video della prima v33 mandati (`archivio/2026-11-22-c18-v33/`); strumenti di foto e video in `archivio/2026-11-22-c18-v33/lavoro/` (`foto.js`, `anteprima.py` con la scritta «DI LAVORO», `video.js`, `js-check.py`).

## Strade provate e scartate
- Castello solo ricolorato sulla sagoma vecchia: per Mario non è il suo castello.
- Neve sui merli: i merli stanno dietro le torri, la neve galleggiava davanti → tolta.
- Addobbi del castello sotto y 186: coperti dalle casette.

## Prossimi passi
1. **Castello dal disegno di Mario** (piano in `docs/lavori-in-corso/C18-slitta-e-luci.md`, «Mario 22/11 ~14:4x»): ritaglio del disegno (bianco tolto dai bordi, nuvolette in basso tolte, finestre bianche dentro restano), luce di notte come `slitta-colori.py` (colori veri, luna dall’alto, ombre fredde), `<image>` nello strato del castello (x ~395–605, guglia in alto ~y 20, base dietro le casette), via la sagoma vecchia e gli strati legati alle sue coordinate (`#castColori`, `#castLuce`, `#cren`, `#castFin`, `#castLuci`, `#castDeco`, `#castClip`), addobbi rifatti sulle coordinate del disegno (finestre che si accendono, lucine sui bordi, neve, ghirlande, brillio). Prove (anche «pacchi non dietro il castello»: il castello nuovo può essere più largo → aggiornare gli intervalli di `nuovo()`), foto PRIMA (v32) / DOPO al telefono, al PC 1440 e «Vin brulé», video; poi la DOMANDA 1 (pubblicare).
2. C17 resto: Domenica a Parigi più curata; giorni Disney semplici.
3. ~26/11: orario RER A della settimana del 17/12.
4. 🐞 prova «dicembre: service worker suo» instabile.
5. In coda: più fuochi d’artificio.

## Blocchi e rischi
- Ramo nuovo o PR: serve l’ok scritto di Mario in chat (permessi).
- Testi in apici semplici in JS: «’»; dopo modifiche via script la sintassi dei 4 `<script>` (`js-check.py`). Nomi nuovi: prima `grep -c`. Regole del PC in fondo al CSS. Foto di lavoro con la scritta in alto. Video: ritaglio della scena a 1× e ingrandimento ×2 (`video.js` + ffmpeg).
- Attributo `style` doppio in una stessa etichetta SVG: il secondo si perde (successo con `.lucBanco`, corretto).

## Ultimo messaggio di Mario
Intero in fondo («Messaggi di Mario di questa sessione») e in `docs/lavori-in-corso/C18-slitta-e-luci.md`.

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 11
la apre la Controllo 10 con `create_session` (catena 1 di 8). Scritto da Controllo 10 il 22/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 11 · castello dal disegno`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 11 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-22 13:57 · [AVVIO] Sei la chat parallela Controllo 10 di Parigi in tasca, linea «Controllo»… → v33 (C18): regali, slitta, castello, decorazioni, note; foto e video mandati
- 2026-11-22 14:21 · i pacchi falli più piccolini quelli che lancia. Mi raccomando, rendi viva la fot… → C18 v33 (commit b90498a): pacchi .72, mercatini vivi, albero coi pacchi
- 2026-11-22 14:21 · Conta che il castello è il castello di Disneyland, quello dietro. → C18: castello rosa e blu (b90498a)
- 2026-11-22 14:23 · il castello è fatto cosí per prendere spunto tu coloralo e decoralo come vuoi → disegno in `archivio/2026-11-22-c18-v33/mario-castello-riferimento.jpg`, Prossimi passi 1
- 2026-11-22 14:26 · Ma non mi sembra che il castello sia uguale al disegno che ti ho mandato, ma nea… → Prossimi passi 1 (castello dal suo disegno), C18

- 2026-11-22 14:27 · Basta che risulti con lo stesso stile della foto. → Prossimi passi 1

Ultimo, intero:
> Basta che risulti con lo stesso stile della foto.

