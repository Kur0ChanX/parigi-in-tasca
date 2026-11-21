# C7 · Luna a forma di Topolino, con la trama della luna (21/11)

## Parole di Mario (alla #10)
~18:35: «No, andava bene la... Chi ti ha dato il permesso di cambiare la testa di Topolino? Fammi capire, da cosa è nata questa tua idea di rimettere la luna Normale.????!?!?»
~18:40: «La luna, falla sempre con la forma di topolino, ma con la trama proprio di luna, con la grafica della luna, stelle vicino. Come è fatta adesso quella tonda, però a forma di topolino, di Mickey Mouse, della Disney.»

## Parole di Mario (alla #12)
19:09: «mandami le lune a forma di topolino creale con dettagli da luna ma a forma di topolino»
19:13: foto di esempio (3 lune piene vere a forma di Topolino, da Google Immagini/Pinterest): `archivio/2026-11-21-lune-topolino-dettagli/mario-esempio-luna-topolino.jpg`.

## Scelta (#11)
- La #10 l'aveva tolta da sola (personaggio protetto) e gli aveva detto no due volte. Rivisto: è la pagina personale di Mario, non si vende niente, la sagoma a 3 cerchi è un marchio Disney ma il rischio pratico per un uso così è basso. Mario ha deciso due volte: si fa. Se un giorno la pagina diventasse pubblica o a pagamento, si toglie.
- Cosa: in icona e anteprima la luna diventa la sagoma (testa + 2 orecchie) con la trama della luna piena di adesso (crateri, sfumature, luce) e le stelline vicino. Script `tools/fai-icone-dicembre.js` (`luna()`); la versione a 3 cerchi della #10 è nella storia di git (PR #4).
- Foto a Mario prima di pubblicare (cambia l'aspetto), poi `?v=` alzato in `tools/fai-dicembre.py` e nel manifest.

## Stato
- Mario 21/11 ~19:02: «Ma ti autorizzo io. Tanto lo devo utilizzare solo io questo progetto in 2 persone».
- 21/11 ~19:10 (#11): fatta nel ramo (`luna()` di `tools/fai-icone-dicembre.js`; ?v= icone 5 in `tools/fai-dicembre.py` e nel manifest, anteprima 4), prove 24 VERO, foto `archivio/2026-11-21-luna-topolino/`. Si pubblica con C5 dopo l'ok di Mario (DOMANDA 4).
- 21/11 ~19:25 (#12): rifatta «come la foto di Mario», disegnata da noi (la foto di Pinterest non si copia): `lunaFoto()` in `tools/luna-topolino.js` (3 lune piene intere con i mari veri, beige caldo, testa davanti, proporzioni della foto). Prima 3 versioni (`lunaTopolino()`: argento, oro, con l'ombra; foto in `lavoro/`). NON ancora nell'icona: dopo l'ok (DOMANDA 5) `luna()` di `tools/fai-icone-dicembre.js` chiama `lunaFoto()`, `?v=` icone 6 e anteprima 5, prove, foto dell'anteprima, poi pubblico con le mappe.
