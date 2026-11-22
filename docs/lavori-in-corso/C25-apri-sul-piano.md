# C25 · L'app si apre sempre sul Piano, in cima (Controllo 18)

## Parole di Mario (22/11 ~19:4x, alla Controllo 17 dopo l'handoff, intero)
> la pagina si deve aprire quando clicco nellapp sempre nella schermata principale Piano  in cima
> nella sezione Questo o quello devo poter scegliere io gli hotel per un confronto non le abbinate prefatte
> il video guardalo frame ler frame se no non capisci

(la seconda riga è C26, la terza è il video della v40: C23)

## Scelte (Controllo 18)
- Prima la pagina riapriva l'ultima scheda usata (`pdn-scheda`): ora si apre SEMPRE sul Piano, in cima (`history.scrollRestoration='manual'`, `scrollTo(0,0)`).
- Un link con `#` (mandato da qualcuno, es. `#scegli`) porta ancora lì: serve per i link mandati agli amici.
- Occhio critico: l'app sul telefono spesso non si riapre ma «torna» dallo sfondo. Tornando dopo più di 30 minuti → Piano in cima; dopo pochi minuti (un salto su Maps o WhatsApp per copiare un indirizzo) resta dov'era, sennò si perde il punto.
- Prova nuova in `tools/prova-web-app.js` «C25: l'app si apre sempre sul Piano in cima…».

## Manca
- 👁 Mario: chiude e riapre l'app sul telefono → Piano in cima.
