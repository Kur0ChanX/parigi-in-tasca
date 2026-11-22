# C16 · Fila dei giorni coperta dalla barra delle schede (Controllo 7)

## Parole di Mario
- 22/11 11:35 «Una domanda, perché mi hai tolto la divisione dei giorni nel calendario sotto?»
- 22/11 11:37 «No, sotto mi mettevi le date mi faceva vedere l'itinerario del giorno. Sotto c'era tipo domenica, lunedì, martedì, però i numeri. Che fine hanno fatto quelli? Perché sono stati tolti? Non andavano bene? Fammi capire.»
- Già deciso: «pubblica tranquillo e finisci il lavoro» (si pubblica a prove verdi, foto dopo).

## Causa (provata)
- Sul telefono (meno di 720 px) la fila dei giorni `#daybar` è fissa in basso (z-index 30). Dalla v17 (22/11 00:34, «pagina a 4 schede», PR #18) c'è anche la barra delle schede `.tabbar`, fissa in basso, z-index 60, alta 69 px: si mette sopra la fila e la copre tutta. Niente è stato tolto: era nascosta.

## Scelte
- La fila resta in basso, come prima (Mario la vuole «sotto»), appoggiata SOPRA la barra delle schede.
- Lo spazio in fondo alla scheda Giorni e l'avviso della scelta salgono dell'altezza della fila, per non coprire il testo.

## Dopo la v25
- Mario 22/11 (foto col cerchio sul disegno delle casette): «Vedi qua la foto è coperta, l'immagine.» → DOMANDA 1 con 2 proposte (1 fila più sottile in basso, 2 fila in alto ferma scorrendo, consiglio 2; CSS provato con Playwright: in alto resta a 0 scorrendo, serve `#giorni{overflow:clip}`).
- Mario 22/11 ~12:00 (intero): «No, facciamo quella che consigli tu, scusa, foto 2, scusa. Per quello ti dico, vai avanti da solo, tanto ascolta sempre i tuoi consigli, vai avanti da solo. Vai avanti da solo e stai attento solo alle domande molto vecchie che mi avevi fatto. Magari le domande vecchie dovrò risponderti, ma quelle nuove so che mi farai, so già che sei al passo con l'app e ti faccio scegliere, ecco. Se sono domande molto importanti ti fermi.» → DOMANDA 1 = 2: fila in alto, ferma scorrendo (v27). Da ora: domande nuove decise da me col mio consiglio (dette a Mario), mi fermo solo per quelle molto importanti.
