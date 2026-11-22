# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 11 `session_01Rwcxc4aWHi8tyDfAiE3Y2J`, 22/11 15:12 ora italiana, chiusa alla soglia; la apre la Controllo 11 con `create_session` (catena 2 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261122-01Rwcxc4aWHi/claude/parigi-ramo-definitivo.
- **v33 ancora NON online** (sito = v32: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 32}`). DOMANDA 1 🛑 aperta: Mario 15:02 «Ok, però…» = va bene la strada ma vuole prima vedere il risultato → NON è «ok pubblica»; dopo le foto nuove richiedere «ok pubblica» (permessi: ramo-copia `versione-v33` solo con ok scritto).
- **DOMANDA 1 RISPOSTA (Mario dopo l'handoff, parola per parola): «Sì, appena finito le cose che ti ho detto, pubblica.»** = ok scritto a pubblicare la v33 appena finiti braccia di Jack, brillii e bancarelle, a prove verdi (ramo-copia `versione-v33`, PR verso `main`, skill `unione-pr`); foto e video a Mario comunque. Riga tolta da «## 0. Aspetta Mario».
- **Già deciso da Mario (non richiedere):** personaggi e figure SOLO dalle sue foto ritagliate (slitta, Zero `archivio/2026-11-22-c18-castello/mario-zero-cane.webp`, castello = suo disegno); verde della slitta in ombra, rosso di Jack in vista; Zero piccolo (più piccolo di una renna), naso acceso; si pubblica a prove verdi.
- **Da non rifare:** castello vettoriale o solo ricolorato; pacchi grandi e accesi; slitta tutta in un pezzo.
- **Cosa preme a Mario adesso:** vedere il risultato (foto e VIDEO: renne e Zero si muovono, serve il video) di castello con ombre, slitta/Zero, poi **bancarelle abbellite** (neve sopra, lucine colorate, merce appesa) e brillii sul castello; poi PUBBLICARE (ok già dato).

## Cosa è stato fatto (Controllo 11) · verifica: `git log --oneline -8`, pagina `dicembre/parigi-disney-natale.html`
- Pacchi lanciati: 5 formati, più piccoli, colori spenti (`FORME`, `COL` nel blocco slitta); prova con misure diverse e colori spenti.
- Castello = disegno di Mario in luce di notte (`archivio/2026-11-22-c18-castello/lavoro/castello.py`, immagine `#castImg`, uso visibile `#castUso`, maschera `#castM`), addobbi da `addobbi.py` (FIN/LUC/GHI/GUG nel JS), posto e misura cambiabili con `cambia-immagine.py <cartella>`. Ultima versione (commit `6233c2b`): ombre a cilindro, ombra sotto le gronde, colori meno pastello. In `castello-geo.json` c'è già `ori` (puntali d'oro) per i brillii, NON ancora usato.
- Slitta a pezzi (`metti-renne.py`, `renne-pezzi.py`): `#slImg` + maschere `slM*`/`slC*`, funzione `renne(t)` nel loop; rosso di Jack e verde in ombra (`slitta-rosso.py`, `v33-slitta-rosso.webp`). Zero (`metti-zero.py`): `#zero`, `zero(t)`, orecchie/bocca/mantello/naso. `window.renneProva(t)` per foto. Foto di lavoro: `slitta-zoom.js` (env U = punto del passaggio).
- Prove: le «coperture» guardano la trasparenza vera del castello (canvas) e la copia visibile `#castUso` (la copia nella maschera ingannava). Ultimo giro completo verde: commit `94809b5` (60 + 20). Giro sul castello con ombre + renne + Zero: lanciato alle ~15:10 (`prova7`/`scritte7` nello scratchpad, perso col cambio di sessione): **rifarlo**.
- Foto mandate: `archivio/2026-11-22-c18-castello/v33-c0…c3*.jpg` (castello dal disegno, prima delle ombre).

## Strade provate e scartate
- Castello più piccolo (scala .15): troppo piccolo e scuro nel confronto → scala .16 in alto (y 2), coni laterali in parte dietro le casette.
- Finestre accese piene nell'immagine: l'animazione «si spegne» non si vedeva → accese piano nell'immagine, luce piena dagli addobbi.

## Prossimi passi
1. Rifare il giro: `python3 -I tools/fai-dicembre.py`, `node tools/prova-web-app.js`, `node tools/prova-scritte.js`, `--controlla`, `controlla-colori.py`; correggere i rossi.
2. Brillii sul castello: glint animati sui puntali d'oro (`ori` di `castello-geo.json`, da portare in `addobbi.py` → JS `castDeco`), finestre più luccicanti (stellina che brilla su alcune).
2b. **Braccia di Jack** (Mario dopo l'handoff, parole in `docs/lavori-in-corso/C18-slitta-e-luci.md` in fondo): pezzo a parte della foto della slitta che ogni tanto sale e scende, come se frustasse le renne.
3. **Bancarelle** (Mario 15:02): nel JS delle casette (cerca «una casetta vista di fronte») neve più spessa sul tetto con gocce e ghiaccioli, lucine colorate lungo il tetto, merce appesa (palline, cuori di pan di zenzero, stelle, calze); occhio a `prova-scritte.js` e alle prove della testata.
4. Foto PRIMA (`git show 94809b5:dicembre/parigi-disney-natale.html`) / DOPO al telefono e PC con `tools/confronta-foto.py` + VIDEO della slitta con renne e Zero (`archivio/2026-11-22-c18-v33/lavoro/video.js` + ffmpeg, ritaglio della scena, ingrandito ×2); mandarli; poi pubblicare (ok già dato).
5. Con «ok pubblica»: ramo-copia `versione-v33`, PR verso `main`, unione (skill `unione-pr`), `git merge origin/main`.
6. Poi C17 resto, orario RER A (~26/11), prova del service worker instabile, fuochi.

## Blocchi e rischi
- Ramo nuovo o PR: serve l'ok scritto di Mario (permessi).
- Nomi nuovi nella pagina: controllare `id="nome"`, `#nome)`, `'nome'` (NON il conteggio semplice: le stringhe base64 contengono di tutto).
- Pagina ~480 KB (immagini base64 di castello, slitta, Zero). Disegni/foto di personaggi Disney: rischio di diritti detto a Mario, decide lui.
- `nuovo()` della slitta: pacchi fuori da x 394–658; castello x 402–599.

## Ultimo messaggio di Mario
Intero in fondo e in `docs/lavori-in-corso/C18-slitta-e-luci.md`. Controllo Da fare: 2 voci aggiunte (renne/Zero/verde; castello ombre + bancarelle).

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 12
la apre la Controllo 11 con `create_session` (catena 2 di 8). Scritto da Controllo 11 il 22/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 12 · bancarelle e brillii`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 12 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-22 14:28 · [AVVIO] Sei la chat parallela Controllo 11 di Parigi in tasca, linea «Controllo»… → avvio, castello dal disegno (C18)
- 2026-11-22 14:33 · Non vedo più i pacchi sotto l'albero, poi i pacchi che lancia la renna devono es… → pacchi 5 formati in penombra; pila sotto l’albero c’è nella v33 (C18)
- 2026-11-22 15:02 · Ok, però nel castello mettili, aggiungili un po' di ombre, sennò sembra piatta, … → castello con ombre e colori (fatto), slitta rosso (fatto), bancarelle (Prossimi passi 3); DOMANDA 1 resta aperta
- 2026-11-22 15:03 · Le renne, siccome sono tre, farle un po' indipendenti di movimento l'una con l'a… → renne a pezzi (fatto)
- 2026-11-22 15:06 · Dietro lo deve inseguire questo cane, animalo e fallo piccolino, piccolo piccolo… → Zero (fatto)
- 2026-11-22 15:06 · Fallo che si muovono le orecchie, si muove un po' il mantello di sotto e la bocc… → orecchie, bocca, mantello di Zero (fatto)
- 2026-11-22 15:09 · Mi raccomando, il verde non troppo in vista, deve, lui è nel buio, quindi da lon… → verde in ombra (fatto)

Ultimo, intero:
> Mi raccomando, il verde non troppo in vista, deve, lui è nel buio, quindi da lontano non è che distingo bene il verde, deve essere in ombra. Giusto il rosso di Jack va bene in vista, almeno si capisce.

