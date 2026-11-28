# C32 · meteo dei giorni e «Mangiare» spariti (urgenza, v53)

Trovato da Controllo 33 il 28/11 ~01:10, facendo il controllo della sveglia «orari RER + meteo». Nessuna parola di Mario: lavoro nato da me.

## Cosa succedeva (v52, sito vero)
- Dal 28/11 la pagina chiede le previsioni a Open-Meteo (prima no: `o<'2026-11-28'`).
- Il codice del meteo usa `B.nu(...)`, ma `B` vive dentro il blocco grande della pagina e il meteo sta fuori → errore «B is not defined» appena c'è un giorno salvato.
- Prima apertura: l'errore resta nel `fetch` (riquadro «arrivano dal…»), ma la previsione si salva sul telefono.
- Seconda apertura: l'errore ferma il resto dello script → meteo vuoto e «Mangiare» vuoto (0 link invece di 148). Anche `pdnMeteo()` chiamato dal ridisegno dei giorni va in errore.
- Il 16° giorno (13/12 il 28/11) Open-Meteo lo dà vuoto (`null`): sarebbe diventato «poco nuvoloso · 0°–0°».
- Prova: `node <scratchpad>/prove/meteo-vuoto.js` con la risposta vera di Open-Meteo del 28/11 01:05 (13/12: tutti `null`; 12/12: pioggia `null`).

## Correzione (v53)
- Bollino «Open-Meteo» scritto dal meteo stesso (`nu`), senza `B`.
- Un giorno vale solo se codice, minima e massima sono numeri (`buono`); pioggia vuota = «—». Le previsioni vuote già salvate dalla v52 non si mostrano.
- Ogni riquadro dentro `try/catch`: un errore del meteo non ferma più il resto.
- «arrivano dal …, circa 15 giorni prima» (il 16° giorno arriva vuoto): 13/12 → dal 29/11.
- Ora della previsione per ogni giorno (`t` del giorno), non solo l'ultima lettura.
- Prove nuove «C32» in `tools/prova-web-app.js` (vuoto, già salvato vuoto, pieno alla prima e alla seconda apertura).

## Stato
- Correzione e prove in locale; poi v53 (urgenza: si pubblica subito).
