# C27 · Testata di dicembre: Torre, faro e slitta che sfarfallano (Controllo 23)

## Parole di Mario
- 23/11 02:05 (video `archivio/2026-11-23-video-v45-flicker-mario/VID_20261123_020540-mario.mp4`), intero: «Guarda attentamente frame per frame. Dovrei aver registrato 90 frame. Guarda attentamente la torre Eiffel come flickera, e anche le renne con la slitta dovrebbero flickerare insieme.»
- 23/11 ~02:1x, intero: «No, guarda, cliccherà tantissime altre volte. Come che non l'hai visto? Ed è fastidioso. Cliccherà anche la renna, nightmare, insomma tutto quello che vola.»

## Misure (Controllo 23, script in `archivio/2026-11-23-c27-strati/lavoro/`: `misura.py` (punti dorati della Torre per fotogramma), `salti.py` (fotogrammi diversi dai vicini), `strati.js` (strati col telefono di prova))
- Video: 785 fotogrammi (26 s a 30/s), non 90. A pagina ferma il corpo dorato della Torre sparisce per UN fotogramma 16 volte (19, 40, 174, 280, 333, 342, 348, 354, 361, 376, 379, 398, 400, 435, 444, 708): circa una volta ogni 1,6 s. Primo conteggio (13) sbagliato per difetto: guardava solo la cima intera.
- Negli stessi fotogrammi spariscono anche i fasci del faro e la slitta con le renne (361, 376, 379, 398, 400 con la slitta in volo); restano i puntini delle luci della Torre. Foto per Mario: `archivio/2026-11-23-c27-strati/1-dal-tuo-video-397-398.jpg`.
- Chromium di prova (Pixel 7, v45): la pagina fa **1.355 strati** (layer), 1.350 che disegnano: 899 lucine `circle`, 86 `.ond`, 70 `.tw`, 52 `.appeso`, 30 `.scint`, 24 `.lucBanco`, 24 `.stellaC`, 22 `.vapore`, 19 `.fiamma`, 16 `.neve-st`… Ogni parte animata del disegno è uno strato a sé.

## Causa
- **Ipotesi** (da confermare sul telefono di Mario): con ~1.350 strati il telefono non fa in tempo o non ha memoria grafica per tutti; ogni tanto un fotogramma esce senza lo strato dove stanno Torre, faro e slitta (e la luna, C23, persa del tutto). Prova possibile: stessa pagina con le lucine ferme (pochi strati) → se lo sfarfallio sparisce, causa confermata.

## Piano (a pezzi)
1. ✅ Prova online (PR 46, 23/11): `?luci=ferme` ferma tutte le animazioni del foglio di stile (12 strati invece di 1.355; le 405 lucine non della testata sono nei mercatini più in basso). Manca: video di Mario 20–30 s con la slitta che passa.
2. Lucine che lampeggiano disegnate su una tela sopra il disegno (come cielo e luna): nel disegno restano accese e ferme, la tela aggiunge il lampeggio. Obiettivo: meno di 150 strati, aspetto uguale.
3. Le altre parti animate (`.appeso`, `.scint`, `.stellaC`, `.vapore`, `.fiamma`, `.neve-st`, proiezioni) una per una: tela o meno strati.
4. Prova automatica «strati della testata ≤ 150» in `tools/prova-web-app.js` (CDP LayerTree) + prova che Torre e slitta si VEDONO; video prima/dopo a Mario; v46.

## Pezzo 2 · Controllo 24 (23/11, in corso)
- Scelta (DOMANDA 1 senza risposta, consiglio 1 «prima la prova»): preparo il pezzo 2 sul ramo, **non lo pubblico** finché il video con `?luci=ferme` non conferma la causa (o Mario dice «vai»).
- Come: le lucine con animazione di sola luminosità (`lampC` 441, `hb` 251, `lampM` 192, `ond` 86, `tw` 70, `lucBanco`, `stellaC`, finestre) non sono più animate nel disegno: le copio una per una in un’immagine (atlante) e una tela sopra il disegno le ridisegna 30 volte al secondo con la luminosità calcolata dalla stessa animazione (stessi tempi, ritardi, curve). Le lucine coperte da qualcosa disegnato dopo (nebbia, casette davanti) restano nel disegno com’erano. La vignetta passa sopra la tela (stesso aspetto). Ferma come oggi mentre si scorre, a pagina ingrandita e con «riduci movimento».
- Misura di partenza (Pixel 7, `index.html`): 1.264 animazioni (798 testata, 428 mercatino in fondo, 16–36 ghirlanda).

