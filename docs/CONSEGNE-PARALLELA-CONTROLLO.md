# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 31 `session_01Rwcxc6vqxeDJS6LUemAjJo`, 28/11 00:05 ora italiana, chiusa alla soglia; la apre la Controllo 31 con `create_session` (catena 7 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261127-01Rwcxc6vqxe/claude/parigi-ramo-definitivo.
- (qui le righe di giudizio della Controllo 31: fatto, provato, dove si verifica)

## Stato (Controllo 30 `session_01Rwcxc7G3cY8jSfhTdMsJxZ`, 27/11 23:39 ora italiana, chiusa alla soglia; la apre la Controllo 30 con `create_session` (catena 5 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261127-01Rwcxc7G3cY/claude/parigi-ramo-definitivo.
- **Fatto (C30):** confronto n. 16 contro n. 23 con TUTTE le recensioni Airbnb (571 + 68) e le 10 leggibili su Booking (n. 23; il n. 16 non è su Booking). Verifica: `research_notes/Parigi mercatini e Disneyland dicembre/confronto_16_23_recensioni_27_11.md` e `docs/lavori-in-corso/C30-confronto-16-23.md`. Pagina NON toccata (online v49: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 49}`).
- **Cosa preme a Mario adesso:** scegliere l'alloggio. Mio consiglio n. 16 (inverno provato: 81 recensioni d'inverno «caldo»; RER a 1–2 min; cassetta chiavi 15–02; difetto: acqua calda a serbatoio → chiedere al gestore). Il n. 23 si cancella gratis su Airbnb **fino a domenica 29/11 alle 15:00**: ricordarglielo se scrive prima.
- **Già deciso da Mario (non richiedere):** NON vuole leggere lui le recensioni Booking (27/11 «che senso ha se devo leggerle io»); voti dei ristoranti solo a mano quando li chiede; foto v48 e v49 approvate.
- **Da non rifare:** lettura automatica di Booking (blocca i programmi, «403 robot»: non si aggira); chiamata interna di Airbnb con la chiave (fermata dal controllo dei permessi); scaricare di nuovo le 639 recensioni Airbnb (il risultato è negli appunti; costano ~160k token). Le recensioni scaricate erano nello scratchpad (non nel repo: nomi di ospiti).
- **Mario 27/11 23:40 «publica» (dopo l'handoff) = risposta alla DOMANDA 2 → 1: la Controllo 31 fa SUBITO la v50** (voce in «1.» di `docs/DA-FARE.md`). **Domande aperte:** ~~🛑 DOMANDA 2~~ (risposta: sì) (v50 con i fatti nuovi delle recensioni nelle schede «📋 Tutto sul n.» 16 e 23) e DOMANDA 3 (Booking del n. 23: 1 · basta Airbnb · 2 · messaggio in francese al gestore sul riscaldamento, testo in `docs/lavori-in-corso/C30-confronto-16-23.md`). Se Mario risponde «1» alla 2: v50 coi fatti della sezione «In breve» del file di ricerca (n. 16: acqua calda a serbatoio + riga sul boiler nel messaggio al gestore, uscita 1 della RER; n. 23: Booking 8,8, letto in soppalco, età minima 18 su Booking), prove, PR, giro.
- **Sveglia mia:** `trig_01Si365QX12uhycTTG6hJNpK` (orari RER A, 28/11 10:17): la Controllo 31 la rifà sua e cancella questa. La vecchia `trig_017xP2rFup3Jk9db1mQN71ky` è già scattata e spenta.
- Controllo Da fare: 0 voci aggiunte (le richieste di Mario di questa sessione sono C30 e le DOMANDE 2 e 3, già in «## 0. Aspetta Mario»).

## Cosa è stato fatto (Controllo 30) · verifica: `git log --oneline 21cb05f..HEAD`
- C30: confronto in `research_notes/…/confronto_16_23_recensioni_27_11.md`; prezzi di oggi (n. 16 503 €, n. 23 489 € su Airbnb); 2 domande a Mario; riga nuova in `docs/ERRORI.md` (lavoro passato a Mario quando Booking blocca) e riga vecchia della slitta spostata in `docs/ERRORI-STORIA.md`.

## Strade provate e scartate (perché; così la prossima non le rifà)
- Airbnb: chiamata interna con la chiave dell'app → negata dal controllo dei permessi. Va bene il browser automatico che apre `airbnb.it/rooms/<id>/reviews` e scorre la finestra (`[data-review-id]`).
- Booking: pagina `reviewlist.html` → «Pagina non trovata»; scheda col browser automatico → «403 · detected as a robot». Il servizio di lettura web dà solo le 10 recensioni in evidenza.
- Chiedere a Mario di leggere lui → Mario contrario (riga in ERRORI).

## Prossimi passi
1. Avvio normale. Kit nuovo nella fonte (Kit 56 · 27/11/2026 · Preferenze v40; qui Kit 53): prima l'aggiornamento come dice l'hook d'avvio (serve l'ok di Mario per i file di `.claude/`: domanda con il testo pronto).
2. **Subito: v50** (Mario «publica»): fatti in «Domande aperte» qui sopra; poi prove (`fai-dicembre.py --controlla`, `prova-web-app.js`, `prova-scritte.js`), PR, giro completo, unione. DOMANDA 3 resta aperta.
3. Quando Mario lo chiede (10–13/12): ricontrollo voti dei ristoranti (`research_notes/ristoranti/`, poi `tools/fai-ristoranti.py`).
4. Dal 28/11: guardare che il meteo compaia nella guida (Open-Meteo).
5. Orari RER A del 13 e 17/12: sveglia del 28/11 (sopra).

## Blocchi e rischi
- Telefono di prova = imitazione. `docs/ERRORI.md` al tetto di 10 KB (10.098 byte): alla prossima riga spostare una vecchia in `docs/ERRORI-STORIA.md`.

## Ultimo messaggio di Mario
> publica

(27/11 23:40, arrivato durante l'handoff: risposta alla DOMANDA 2 → v50; poi 3 volte «ora»: la vuole SUBITO.) Prima:
> dico che senso ha se devo leggerle io me lo spieghi la tua utilità?

(27/11 23:37: risposto in chat — Airbnb letto tutto, Booking blocca i programmi, quei dati non servono a decidere; DOMANDA 3 al posto della 1.)

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Extra** (`xhigh`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 32
la apre la Controllo 31 con `create_session` (catena 7 di 8). Scritto da Controllo 31 il 28/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 32 · kit e alloggio`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 32 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-27 23:40 · [AVVIO] Sei la chat parallela Controllo 31 di Parigi in tasca, linea «Controllo»… → 
- 2026-11-27 23:43 · e publica in priorità → 

Ultimo, intero:
> e publica in priorità

