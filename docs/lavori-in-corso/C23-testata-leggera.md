# C23 · Testata di dicembre leggera e nitida (Controllo 17 → 18)

## Parole di Mario
- 22/11 18:31 (video v39, `archivio/2026-11-22-video-flicker-mario/`): «guarda come flickera poi pesa nello scroll e la torre eifell se scrolli vola da serra tienila fissa» → v40 (online 19:18).
- 22/11 19:35 (video v40, `archivio/2026-11-22-video-v40-mario/VID_20261122_192059-v40.mp4`, 16 s): «Non benissimo ancora come puoi vedere».

- 22/11 ~20:1x (Controllo 18, dopo la DOMANDA 1 sul faro), intero: «Mi raccomando priorità massima nella guida poi pensiamo alla grafica della foto animata / anche nella 39 la vedevo non caticata a volte la luna»
  → la testata aspetta: prima la guida (C24). La luna «non caricata» c’era a volte anche nella v39: l’ipotesi «luna sfocata per i gruppi della v40» si indebolisce; nuova ipotesi da provare dopo: l’immagine della luna (webp dentro l’SVG) a volte non viene disegnata e resta solo il bagliore sfocato.

- 22/11 22:09 (foto della v41 delle 22:08, `archivio/2026-11-22-c23-v41/mario-2208-v41-luna-sfocata.jpg`), intero: «andava bene poi invece»
  → anche nella v41 la luna diventa una macchia sfocata senza crateri (resta solo il bagliore). Indizio nuovo: **all’apertura è giusta, poi si rovina**. Ipotesi da provare (dopo la guida): dopo un po’ il telefono butta via l’immagine della luna (memoria della grafica) e non la ridisegna; il bagliore sfocato, animato e con il filtro, resta. Prova possibile: luna in un pezzo solo, ferma, col bagliore già dentro l’immagine (niente filtro né animazioni intorno), oppure luna fuori dal disegno animato.

- 23/11 02:05 (video `archivio/2026-11-23-video-v45-flicker-mario/VID_20261123_020540-mario.mp4`, 26 s, 785 fotogrammi), intero: «Guarda attentamente frame per frame. Dovrei aver registrato 90 frame. Guarda attentamente la torre Eiffel come flickera, e anche le renne con la slitta dovrebbero flickerare insieme.»

- 23/11 ~02:1x, intero: «No, guarda, cliccherà tantissime altre volte. Come che non l'hai visto? Ed è fastidioso. Cliccherà anche la renna, nightmare, insomma tutto quello che vola.» («cliccherà» = sfarfalla, dettato a voce)

## Cosa si vede nel video della v40 (Controllo 18, fotogrammi)
- Riga dritta nel cielo all’altezza della cima della Torre: sono i due fasci del faro (triangoli lunghi e sottili), anche senza zoom.
- Pagina allargata con due dita (secondi 5–7): rettangoli a scatti, casette e Torre che spariscono a pezzi = pezzi di disegno (tasselli) che il telefono non fa in tempo a ridisegnare.
- Luna di Topolino: macchia sfocata senza crateri anche SENZA zoom (fotogrammi 0 e 8). Nel video della v39 (17:57) era nitida coi crateri → difetto nato con la v40.

## Misure (Chromium di prova, Pixel 7, 3 s di testata ferma in vista; DI LAVORO, solo per confronto)
| Versione | Lavoro di disegno (paint) | Stile | Strati |
|---|---|---|---|
| v39 | 277 ms | 130 ms | 1116 |
| v40 (lucine a gruppi) | 592 ms | 222 ms | 600 |
| v40 senza gruppi | 271 ms | 148 ms | 1116 |
| v40 con lucine animate su `fill-opacity` (niente strati) | 1053 ms | 988 ms | 347 |
- I gruppi della v40 (38 gruppi sparsi su tutto il disegno) raddoppiano il lavoro: ogni lampeggio fa ridisegnare zone grandi. La luna sfocata e i rettangoli nascono da qui (ipotesi forte: sul telefono non si può misurare da qui; la prova è il video della v39 con la luna nitida).
- La luce animata con `fill-opacity` è 4 volte peggio: scartata.

## Scelte (Controllo 18)
1. Via i gruppi di lucine della v40 (`lucGrp`): si torna alle lucine una per una (come v39, più leggere), con i ritardi negativi (niente lampi all’apertura, v34).
2. Via `will-change:transform` dai tre livelli `.par`: serviva alla parallasse, che non c’è più.
3. ~~Via i due fasci del faro~~ → risposta di Mario alla DOMANDA 1 (22/11 ~20:1x, intero): «mi piaceva il fascio di luce / ora prosegui con la guida con molta cura» → fasci rimessi identici alla v40 (la «riga» era una lettura nostra del video, non sua).
4. Pagina ingrandita con due dita (`visualViewport.scale` > 1,05): la testata sta ferma (come mentre si scorre), così il telefono la disegna una volta, intera e nitida; riparte quando la pagina torna normale. `start()` non riparte mentre la testata è in pausa.

## Prove (Controllo 18)
- Pausa con lo zoom (`zoomferma.js`, scratchpad): 812 animazioni della testata accese → 0 a zoom 3 → 810 tornata a 1: VERDE.
- Suite completa su una copia v40 + sole correzioni della testata (senza C24, che la ferma a metà): vedi commit.
- Confronto del faro: `archivio/2026-11-22-c23-v41/confronto-faro.jpg` → DOMANDA 1 della Controllo 18 (in «Aspetta Mario»).

## Controllo 23 (23/11): la luna sfocata
- Foto di Mario delle 22:08 guardata da vicino: le stelline accanto alla luna sono nitide, il bagliore sfocato c’è, **manca solo l’immagine della luna** (`<image id="lunaT">` nel disegno SVG). Non è sfocata: non viene più disegnata.
- Nuvole del cielo: stanno sulla tela (canvas) DIETRO il disegno → non coprono la luna (scartata).
- Nessun codice tocca `lunaT`. Ricerca (23/11/2026): nessun difetto noto preciso; aperta una segnalazione di Chromium su animazioni SVG complesse che consumano memoria grafica col tempo (issues.chromium.org/issues/423073247). Causa = **ipotesi**: col tempo il telefono non ridisegna più quell’immagine dentro un disegno con ~800 animazioni che lo fanno ridisegnare di continuo.
- **Scelta (tecnica, mia):** luna, alone e bagliore si disegnano sulla tela del cielo (`#sky`, dietro il disegno, già ridisegnata a ogni fotogramma e dove le stelle si vedono sempre), con l’immagine decodificata una volta e tenuta dal programma (`createImageBitmap`); nel disegno SVG restano solo le 3 stelline. Stesso posto, grandezza, colori e respiro di prima; la slitta passa ancora davanti. L’immagine resta nella pagina (`<image id="lunaT">` dentro `<defs>`, non disegnata) così `tools/fai-icone-dicembre.js` continua a scriverla.

- Fatto (Controllo 23): luna, alone e bagliore sulla tela del cielo (`lunaImg`, `lunaBag`, `luna`), immagine in `<defs>`; via `mglow`, `lunaSfuma`, `respiro`, `respiro2`; prova «C23» in `tools/prova-web-app.js` (pixel uguali all’immagine nel posto calcolato dal disegno, telefono, dopo 8 s, riduci movimento, PC; niente davanti). Prova rossa trovata e corretta: testata nascosta → misura 0 → errore nel ciclo (ora esce). **v45 online 23/11** (PR 45, main 7ac754f, sito `{"v": 45}`).

## Manca
- v41 insieme a C24 pezzo 1 sistemato (8 prove + la prova che si ferma a riga 309) oppure C24 dietro un interruttore.
- 👁 Mario: apre la v45 sul telefono e lascia la testata in vista 3–4 minuti: luna nitida coi crateri (riga in «Aspetta Mario» del 23/11).
