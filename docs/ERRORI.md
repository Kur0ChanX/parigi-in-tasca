# Errori e difese

| Data | Errore | Causa vera | Difesa |
|---|---|---|---|
| 20/11/2026 | Nella guida: Notre-Dame «si prenota 2–3 giorni prima» (vero: solo il giorno stesso), crociera «dalle 19:45» (vero: 19:40 o 20:20), mercoledì «4 corse» (vero: 3, il cambio Solférino ↔ Musée d'Orsay è valido), scale di Lamarck «un centinaio» (sono molte di più). | Dati presi da siti riassuntivi o da testi vecchi invece che dalla pagina ufficiale del giorno. | Ogni fatto della guida si controlla sulla pagina ufficiale (museo, RATP/IDFM, Comune) e il link va nelle fonti; i siti non ufficiali si segnano «non ufficiale». |
| 20/11/2026 | Fermate della linea 12 nere sulla mappa; tondino «12» più basso del testo. | Rinominati i colori della grafica senza cercare i nomi vecchi dentro lo script; badge spostato in basso con un valore fisso. | `python3 -I tools/controlla-colori.py` prima di pubblicare (ferma i colori usati ma non definiti); simboli controllati con foto ingrandite. |
| 21/11/2026 | Per installare il kit ho aggiunto il progetto RVC alla sessione (add_repo) e ho consigliato di sbloccarlo: il kit lo vieta, perché con due progetti nella sessione gli hook non partono. | Il kit mancava e la regola «niente add_repo di RVC» è scritta solo dentro il kit: ho scelto la strada senza averla letta. | Kit mancante: si installa dal pacchetto di testo (parti di `docs/kit-progetto/pacchetto/` mandate dalla sessione RVC), mai con add_repo; la sessione nuova nasce col solo progetto. |
| 20/11/2026 | Bottone «Aggiungi alla schermata Home» sempre visibile, anche su iPhone e computer dove non fa niente. | Lo stile dei bottoni (`display`) annullava l'attributo `hidden`; la prova sembrava passare per questo. | Regola `[hidden]{display:none!important}`, controllata da `tools/controlla-colori.py`; il permesso del browser si prova simulandolo, non guardando il bottone. |

## Lezioni ereditate da RVC (numeri «RVC E..»)
- **RVC E1** Si lavora solo in Claude Code. Ogni file ricevuto va subito in `archivio/` con commit.
- **RVC E7** Prima di chiedere a Mario (o di scrivere un prompt a un aiutante), `grep` in documenti e archivio.
- **RVC E11** La sessione nuova la apre Claude con `create_session` (catena di 8); a 8 la apre Mario: nel testo per lui il repo esatto e il ramo.
- **RVC E19** «unrelated histories» dopo uno squash: prima `git fetch --unshallow origin`, poi merge normale.
- **RVC E20** Mai `prove … | grep … && git commit`: prima l'esito delle prove, poi il commit a parte.
- **RVC E21** Mai inventare il nome di un pulsante. Nel selettore: medium = «Medio», high = «Alto», xhigh = «Extra».
- **RVC E23 E32 E33 E36** Prima `grep -n`, poi solo le righe utili. All'avvio niente `list_sessions` completo, `actions_list`, `list_events`, `Artifact read` di controllo.
- **RVC E24** Un solo ramo. Il ramo nuovo per sessione ha diviso il lavoro in due.
- **RVC E28** Mai `add_repo` di un secondo repo: spegne in silenzio gli hook.
- **RVC E29** Segreti mai in chat né nel repo: vanno nelle impostazioni dell'ambiente.
- **RVC E30** Mai dire «non è successo» senza una prova che lo possa vedere.
- **RVC E31** Dopo lo squash: unire `main` PRIMA di ogni altro commit.
- **RVC E37 E48 E49** Foto: io guardo un'anteprima ≤600 px e ≤40 KB (hook `foto-check.py`); a Mario un telefono per foto, una schermata per foto, pezzi alti al massimo ~1100 px.
- **RVC E59** File di `.claude/`: ok di Mario (scritto) nella chat di quella sessione.
- **RVC E60** Dopo un riavvio: unire la scorta e leggere `docs/ULTIMO-MESSAGGIO.md`.
- **RVC E64** Scheda delle domande persa: rifarla subito, scritta anche in chiaro con le scelte numerate. Foto e domanda nello stesso messaggio.
- **RVC E61** Prima di ogni push `git fetch`: lavoro di un'altra chat si unisce con un merge normale, mai forzare.
- **RVC E65** Dopo «worker process was restarted»: se il mio ultimo passo era uno strumento e non il resoconto a Mario, il turno NON è finito: continuo e scrivo il resoconto.
- **RVC E66** `effort_level` assente in `get_session` = Mario non l'ha scelto nel selettore: non prova «normale». `"effortLevel"` in `.claude/settings.json` vale anche nel cloud.
- **RVC E67** File con righe lunghissime (tabelle): `grep -n -o '.\{0,80\}parola.\{0,80\}'`, mai `grep` semplice (una riga sola = migliaia di token).

