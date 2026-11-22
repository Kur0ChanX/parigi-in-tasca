# C26 · «Questo o quello?»: gli alloggi da confrontare li sceglie Mario (Controllo 22, 23/11)

## Parole di Mario (22/11 ~19:4x, alla Controllo 17, intero in `docs/lavori-in-corso/C25-apri-sul-piano.md`)
> nella sezione Questo o quello devo poter scegliere io gli hotel per un confronto non le abbinate prefatte

E (22/11 ~23:16): le scelte sono solo tre, n. 8 Moxy, n. 16 e n. 23 (C22).

## Cosa vuol dire
- In «Dormire» → «Per decidere meglio» → «Questo o quello?»: al posto delle 8 coppie già scritte, Mario tocca gli alloggi da mettere a confronto (2, 3 o più) e vede le differenze riga per riga.

## C’è già (niente doppioni)
- Dati di ogni alloggio in `AL` (prezzo `p`, voto `sc`, pulizia `cl`, minuti a piedi dal treno `min`, domenica sera `sun`, prezzo e cancellazione `pl`, pro, contro); minuti fino ai parchi con le attese `arrMin`/`comeD` (stesse della «Riga Disney»).
- Rosa (`ROSA`, `pdn-rosa`), mio consiglio (`MIO` = 8), scelta di adesso (`CHO`).
- Le 8 coppie (`DUELS`): non sono più il modo di confrontare; restano solo come «Il mio parere» quando la coppia è fra quelli scelti.

## Scelte (occhio critico)
- Partenza: rosa + mio consiglio + scelta di adesso (oggi n. 8, 16, 23). Tasti accesi/spenti per ognuno, più «＋ Aggiungi un altro» con tutti i 35. Si salva sul telefono (`pdn-qoq`), come la rosa.
- Nessun numero massimo (mai limiti che bloccano): oltre 4 una riga avvisa che si legge peggio.
- Righe una sotto l’altra (si legge bene sul telefono anche con 3–4 alloggi): in breve chi spende meno, chi è più vicino ai parchi, chi ha il voto più alto; poi prezzo, parchi, treno a piedi, voto e pulizia (Airbnb su 5 portato su 10 solo per il confronto), domenica sera, cancellazione, pro, contro, link alla scheda.
- Con 1 solo alloggio scelto: «sceglietene almeno 2». Senza rete: tutto sul telefono. Due telefoni: ognuno il suo confronto (come la rosa).
- Fable non serve: dati e funzioni ci sono già, è un pezzo di pagina.

## Stato
- [x] codice (C26 in `dicembre/parigi-disney-natale.html`: `QOQ`, `qoqH`, `qoqR`, CSS `.qoq-*`) e prova «C26» in `tools/prova-web-app.js`; v44 nelle novità.
- [x] foto a Mario: `archivio/2026-11-23-c26-questo-o-quello/c26-dopo-1.png` e `-2.png` (DOMANDA 2 in «Aspetta Mario»).
- [ ] risposta di Mario → giro completo → v44 sul sito (dopo la v43).
