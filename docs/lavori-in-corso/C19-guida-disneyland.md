# C19 · La guida Disneyland di Mario dentro la pagina di dicembre (Controllo 12, 22/11)

## Mario 22/11 ~16:2x, intero
> Quando siamo nel giorno di Disneyland, oppure anche nella schermata principale, app Disneyland mi deve aprire il mio Disneyland, la mia app di Disneyland, che adesso te la mando, però devi controllare, mi sembra che ogni persona ha il proprio link o ha la propria memoria, perché ognuno ha i propri giorni, non lo so, valuta un po', se li apre a ognuno la propria sezione. Ecco, adesso ti invio l'app guida Disneyland da mettere sempre nella schermata principale e da mettere nelle giornate dove andiamo a Disneyland, così la possiamo consultare. Sono praticamente, questo è un viaggio, sono due app abbinate, questa e quella di Disneyland.
>
> https://guida-disneyland-ynoy.pages.dev/?prova=idee

## Cosa ho visto nella guida (letta dal sito, 22/11)
- Ogni telefono ricorda da solo il suo viaggio (`gu-viaggio`: giorno d'inizio, giorni, persone, parco per giorno), il suo profilo («Chi sei?», preferiti, gruppo). Non serve un link per persona.
- Il link può portare i giorni: `?d=2026-12-14&n=3&a=2&p=t.t.t` (14/12, 3 giorni, 2 adulti, tutti e due i parchi). Telefono senza viaggio salvato → lo salva; telefono con un ALTRO viaggio salvato → la guida chiede prima («Entra nel viaggio» / «Non ora»), niente perso. Provato su un telefono nuovo (Chromium): salvato `{"d":"2026-12-14","n":3,"a":2,"p":["t","t","t"]}`.
- `prova=idee` accende le novità in prova e resta acceso su quel telefono (`gu-prova`): tenuto come nel link di Mario.
- Nessun indirizzo per un giorno solo: la guida sa da sola qual è «oggi» dentro i giorni del viaggio.

## Scelte
- Tasto largo «Guida Disneyland» sotto i tasti della schermata principale (non 13° tasto: la griglia da 4 resterebbe con un tasto solo in fondo). Riquadro in cima a Lun 14, Mar 15, Mer 16 (giorni «Parchi»). Un solo posto del link (`#dlApp` nell'HTML), il JS dei giorni lo legge.
- Prova in `tools/prova-web-app.js` («Guida Disneyland: tasto… riquadro solo nei giorni Disney»).
