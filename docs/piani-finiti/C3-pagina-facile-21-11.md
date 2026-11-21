# C3 · Pagina facile: Ki Space nei costi, barre che portano alla scheda, meno cose a schermo (21/11/2026, Principale 8)

## Parole di Mario
- 21/11 17:24 (alla #7 dopo l'handoff, con la foto `archivio/2026-11-21-foto-mario/1-confronto-costi-v7.jpg`): «Metti qui anche il ki space, quello che ti avevo consigliato io, che abbiamo guardato. Metti anche quello in confronto tra i costi e tutto. Poi metti che se clicco uno di quelli mi porta al discorso o qualche altra pagina, insomma, utile. Comunque rendila veramente facile e intuitiva a livello di visiva. Anche non troppe cose a schermo, se clicco poi magari mi apre un'altra cosa, però non troppissime informazioni, cioè non ti sto dicendo di toglierle, ma di riorganizzarle meglio.»
- 21/11 17:26 (alla #8): «web app dopo aver risposto alla domanda della sessione precedente.» → domanda «Link per l'amico» chiusa: **1 · web app**, da fare DOPO questo lavoro (C3).

## Piano (Claude)
1. n. 2 Ki Space nelle barre di «Quanto costa».
2. Ogni barra si tocca → apre la scheda di quell'alloggio (il «Misto» → la sezione hotel Disney).
3. Pagina riordinata: in ogni sezione resta a schermo solo l'essenziale; il resto si apre col tocco («Apri»). Niente tolto, solo spostato.
4. Foto prima/dopo dal telefono a Mario; poi web app (`dicembre/` sul sito, skill `unione-pr`).

## Scelte in corsa
- Pezzo 1 fatto (21/11 17:30): Ki Space nelle barre, 465 € + 544 € + 76 € (navetta gratis) = 1.085 €; barre = link alla scheda (`#al-N`), misto e Cheyenne → `#hoteldisney`; scheda evidenziata all'arrivo.
- Misure al telefono (390 px): pagina 37.576 px; alloggi 16.750 (schede 12.470), domenica 7.025, trasporti 1.513, da fare 1.961, da ricontrollare 1.927, fonti 1.407. Pezzo 2: schede degli alloggi compatte (riga essenziale + «Dettagli»), tabella in un «Apri»; poi le altre sezioni.
- Pezzo 2 fatto (21/11 17:31): schede degli alloggi compatte (numero, nome, voto, pulizia, prezzo, distanza; «Dettagli e prenotazione» col resto, anche «Usa questo nella pagina»); ogni link `#al-N` apre la scheda; tabella dei 15 in un «Apri»; nota «5 notti» spostata tra gli scartati (deciso 13→17); nel consiglio «Cosa lasciate» e «Attenzione» in un «Apri»; tappe del giorno per giorno: ora e titolo, il resto col tocco; chiusi «In che ordine comprare», «Da ricontrollare» e «Fonti». Pagina al telefono 37.576 → 21.860 px. Prove: 7 VERO (barra, tabella, «Usa questo», menu, tappa spa), nessun errore. Lasciati in vista: mega consiglio dei mercatini (chiesto da Mario in evidenza), «Da fare».
- Prossimo: foto mandate (domanda in «Aspetta Mario»); intanto preparo la web app in `dicembre/`.
- Ok di Mario alle foto (21/11 17:3x: «ok», dopo «mi serve il tuo ok per metterla online come web app»).
- Web app (21/11): `dicembre/index.html` fatto da `tools/fai-dicembre.py` (intestazione: viewport, `noindex`, manifest, icone; in fondo il service worker), `dicembre/sw.js` (cassetto `parigi-natale-v1`), `dicembre/manifest.webmanifest`, icone `dicembre/icona-180/192/512.png` (abete con stella su cielo di notte). Difesa in `sw.js` di novembre: lascia stare `/dicembre/` (errore provato, riga in `docs/ERRORI.md`). Prova `node tools/prova-web-app.js`: 11 VERO.
- Pubblicazione: ramo-copia da `main` con i soli file del sito (dicembre + `sw.js`), non il ramo comune (PR #2 resta in bozza: dentro ci sono anche archivio e appunti).
- Pubblicata (21/11): PR #3 da `versione-dicembre` (ramo-copia da `main`, 7 file) unita in `main` (e112789); `main` riunito nel ramo di lavoro. L'Artifact su claude.ai resta alla v7: la pagina buona è la web app.
