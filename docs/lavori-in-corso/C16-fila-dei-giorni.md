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
