# C23 · Testata di dicembre leggera e nitida (Controllo 17 → 18)

## Parole di Mario
- 22/11 18:31 (video v39, `archivio/2026-11-22-video-flicker-mario/`): «guarda come flickera poi pesa nello scroll e la torre eifell se scrolli vola da serra tienila fissa» → v40 (online 19:18).
- 22/11 19:35 (video v40, `archivio/2026-11-22-video-v40-mario/VID_20261122_192059-v40.mp4`, 16 s): «Non benissimo ancora come puoi vedere».

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
3. Via i due fasci del faro (la «riga»); resta il lampo in cima alla Torre.
4. Pagina ingrandita con due dita (`visualViewport.scale` > 1,05): la testata sta ferma (come mentre si scorre), così il telefono la disegna una volta, intera e nitida; riparte quando la pagina torna normale. `start()` non riparte mentre la testata è in pausa.

## Manca
- Prove verdi (`prova-web-app.js`, scritte), foto prima/dopo con `confronta-foto.py` (riga del faro), poi v41 insieme a C24 pezzo 1 sistemato (8 prove) oppure C24 dietro un interruttore.
- 👁 Mario: apre la v41 sul telefono, scorre e allarga con due dita: niente riga, niente rettangoli, luna nitida.
