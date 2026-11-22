# C21 · Tasto «Rosa alloggi» nella schermata principale, rosa scelta da Mario (Controllo 14 → 15, 22/11)

## Mario 22/11 ~17:55, intero
> metti il tasto Rosa alloggi  nella home e li mo fai mettere la rosa

(«lì mi fai mettere la rosa»: dal tasto, Mario sceglie quali alloggi sono nella rosa.)

## Com'è oggi (v36)
- La rosa è fissa nel codice: gruppo `rosa` nei `g` dei n. 16 e 23, prefisso «⭐ La vostra rosa · » nel loro `sub`, filtro «⭐ La vostra rosa» in «Dormire» (`GN`/`GD`). Le schede «📋 Tutto sul n.» (`XX`) ci sono solo per 16 e 23 (sono contenuti, restano).
- Schermata principale = indice coi tasti (C17, v28) e tasto largo «Guida Disneyland» (C19, `#dlApp`).

## Piano (occhio critico fatto)
1. Rosa scelta sul telefono: `localStorage` `pdn-rosa` (id degli alloggi; senza niente salvato = [16, 23], quelli scelti da Mario il 22/11). Togliere `rosa` dai `g` e il prefisso dal `sub`: stella e filtro leggono la rosa salvata.
2. Tasto largo «⭐ Rosa alloggi · N» nella schermata principale, sotto «Guida Disneyland»: apre «Dormire» col filtro della rosa e, in cima, un pannello «⭐ Scegli la rosa» con una spunta per alloggio (come «Pulisci l'elenco», C20). Annulla per ogni spunta (avviso come C20).
3. Riga ⭐ anche nel passo 2 di «Scegli» (accanto al nome) e un tasto «⭐ Metti nella rosa / Togli» nelle righe e nelle schede (vicino a «Nascondi»).
4. Un alloggio nascosto (C20) e messo nella rosa: la rosa vince (si vede). Il link «Manda questa scelta» porta anche la rosa (`&rosa=`), con la domanda a chi lo apre, come per i nascosti.
5. Prova in `tools/prova-web-app.js`; foto a Mario prima di pubblicare (cambia l'aspetto della schermata principale).
