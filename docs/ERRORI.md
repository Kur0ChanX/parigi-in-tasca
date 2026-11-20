# Errori e difese

| Data | Errore | Causa vera | Difesa |
|---|---|---|---|
| 20/11/2026 | Nella guida: Notre-Dame «si prenota 2–3 giorni prima» (vero: solo il giorno stesso), crociera «dalle 19:45» (vero: 19:40 o 20:20), mercoledì «4 corse» (vero: 3, il cambio Solférino ↔ Musée d'Orsay è valido), scale di Lamarck «un centinaio» (sono molte di più). | Dati presi da siti riassuntivi o da testi vecchi invece che dalla pagina ufficiale del giorno. | Ogni fatto della guida si controlla sulla pagina ufficiale (museo, RATP/IDFM, Comune) e il link va nelle fonti; i siti non ufficiali si segnano «non ufficiale». |
| 20/11/2026 | Fermate della linea 12 nere sulla mappa; tondino «12» più basso del testo. | Rinominati i colori della grafica senza cercare i nomi vecchi dentro lo script; badge spostato in basso con un valore fisso. | `python3 -I tools/controlla-colori.py` prima di pubblicare (ferma i colori usati ma non definiti); simboli controllati con foto ingrandite. |
| 20/11/2026 | Bottone «Aggiungi alla schermata Home» sempre visibile, anche su iPhone e computer dove non fa niente. | Lo stile dei bottoni (`display`) annullava l'attributo `hidden`; la prova sembrava passare per questo. | Regola `[hidden]{display:none!important}`, controllata da `tools/controlla-colori.py`; il permesso del browser si prova simulandolo, non guardando il bottone. |
