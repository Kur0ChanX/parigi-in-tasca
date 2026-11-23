# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 26 `session_01Rwcxc5ahDdPzMy5o13N1GU`, 23/11 12:13 ora italiana, chiusa alla soglia; la apre la Controllo 26 con `create_session` (catena 2 di 8))
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261123-01Rwcxc5ahDd/claude/parigi-ramo-definitivo.
- **Chiusa per il kit**: Mario 23/11 12:12 «messo» = variabile `RVC_KIT_TOKEN` salvata nell’ambiente (arriva solo alle sessioni nuove; in questa `[ -n "$RVC_KIT_TOKEN" ]` = no). Verifica: `python3 -I tools/scarica-kit.py --versione` stampa «Kit N».
- **v46 ONLINE** (verifica: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 46}`); Mario non ha ancora detto se lo sfarfallio è sparito (riga 🛑 in «Aspetta Mario»).
- **Già deciso da Mario (non richiedere):** alloggi n. 8, 16, 23 (più probabili 16 e 23); fasci del faro restano; prima la guida, poi la grafica; ordine 23/11: PRIMA il kit, POI C28 (controllo + idee da approvare).
- **Da non rifare:** chiave del kit (fatta: «Kit RVC lettura 2», scade 24/11/2027; GitHub a due passaggi rifatto da Mario con Google Authenticator), v46, misure di C27, sveglia RER A (`trig_01S2eBGe4VhaBSxPU6yKa187`, 26/11 10:17).
- **Cosa preme a Mario adesso:** il kit RVC aggiornato qui, poi le idee (C28).

## Cosa è stato fatto (Controllo 26) · verifica: `git log --oneline b44a1fc..HEAD`
- Avvio; sveglia RER A rifatta, la vecchia `trig_01AMpc1X4UrgQ8oSgS5a6814` SPENTA (cancellarla: negato dal controllo automatico dei permessi).
- Guida a Mario per la chiave: controllo a due passaggi di GitHub (28 giorni) passato rifacendo l’app di autenticazione; chiave creata e messa nell’ambiente. Foto e video in `archivio/2026-11-23-github-due-fattori-mario/` (la foto col QR NON salvata: segreta).
- C28 aperto (`docs/lavori-in-corso/C28-idee-e-controllo.md`, parole di Mario); riga in `docs/CHI-FA-COSA.md` e in DA-FARE. ERRORI: riga 23/11 «video letto troppo in fretta».
- Controllo Da fare: 0 voci aggiunte (kit = riga in «Aspetta Mario» e riga 96; idee = C28).

## Strade provate e scartate
- Ponte `add_repo` di RVC: scartato (spegne gli hook). Segreto di rete (`request_credential`): non vale per GitHub.

## Prossimi passi
1. `python3 -I tools/scarica-kit.py --versione`: se il kit su RVC è più nuovo di Kit 43, scaricarlo (`--cartella` nella scratchpad), dire a Mario versione e cosa cambia, chiedere il suo ok scritto per i file di `.claude/` (RVC E59), installare (`estrai-kit.py --anche-claude`), prove, commit, push. Togliere la riga kit da «Aspetta Mario» e chiudere la riga 96 quando Mario vede «Kit N» nuovo. Ricordare a Mario: cancellare la chiave vecchia «Kit RVC lettura» e la chiave nello «Script di configurazione» se c’è.
2. Poi C28: controllo della guida di dicembre (buchi, mancanze, dimenticanze) + idee numerate; niente codice prima del sì di Mario.
3. Risposta di Mario sulla v46: ok → togliere le prove `?luci=ferme` e `?tela=si` (dettagli in `docs/lavori-in-corso/C27-testata-strati.md`); sfarfalla ancora → suo video e misure.

## Blocchi e rischi
- Il telefono di prova è un’imitazione: la conferma della v46 è il telefono di Mario. `docs/DA-FARE.md` ~40 KB, `docs/ERRORI.md` ~10 KB (tetti).
- Mai mostrare o salvare chiavi, QR o «setup key».

## Ultimo messaggio di Mario
> ora continua a migliorare l'applicazione con cose utili per me, per informazioni, insomma, valutiamoli insieme alle tue idee, io le approvo o no. Poi controlla se va tutto bene, se ci sono buchi, se ci sono mancanze, se è possibile migliorare alcune parti, se ci siamo dimenticati qualcosa, insomma, se vogliamo aggiungere qualcos'altro di intelligente, di smart, geniale, insomma, dammi delle idee,

(23/11 12:14, alla Controllo 26, durante le consegne: è C28, da fare SUBITO dopo il kit; prima «messo» 12:13 = chiave nell’ambiente.)

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Medio** (`medium`, dal registro della sessione): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 27
la apre la Controllo 26 con `create_session` (catena 2 di 8). Scritto da Controllo 26 il 23/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 27 · kit RVC`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 27 di Parigi in tasca, linea «Controllo» (ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-23 09:45 · [AVVIO] Sei la chat parallela Controllo 26 di Parigi in tasca, linea «Controllo»… → avvio; sveglia RER A rifatta
- 2026-11-23 11:35 · Riusciamo a portare il kit aggiornato RVC qui? Dimmi cosa me posso fare. → guida chiave del kit (riga «Aspetta Mario»)
- 2026-11-23 11:37 · Poi continuo a migliorare l'applicazione con cose utili per me, per informazioni… → C28 aperto (docs/lavori-in-corso/C28-idee-e-controllo.md)
- 2026-11-23 11:45 · non riesco a mettere 2 fattori non mi arriva il codice nell app git hub vosa sba… → guida a due passaggi di GitHub; foto in archivio
- 2026-11-23 11:49 · @"/root/.claude/uploads/[segreto tolto dalla scorta]/[segreto tolto dalla scorta… → video letto; riga ERRORI 23/11
- 2026-11-23 11:53 · si che ho cliccato nel video esce questo → risposta: c’è solo «Reconfigure 2FA»
- 2026-11-23 11:54 · esl se clicco mi porta qui → guida «Edit» dell’app di autenticazione
- 2026-11-23 11:56 · io ho solo l'app git hub → Google Authenticator (foto col QR non salvata)
- 2026-11-23 12:00 · metto in base all ora o contatore? → risposta: «In base all’ora»
- 2026-11-23 12:02 · @"/root/.claude/uploads/[segreto tolto dalla scorta]/[segreto tolto dalla scorta… → video: codice nella pagina sbagliata, prima «Save»
- 2026-11-23 12:09 · ok ho la chiave → guida per l’ambiente
- 2026-11-23 12:13 · messo → chiave salvata → chiusa per aprire la Controllo 27
- 2026-11-23 12:14 · ora continua a migliorare l'applicazione con cose utili per me… → C28 (parole intere nel file): la Controllo 27 lo fa dopo il kit

Ultimo, intero:
> ora continua a migliorare l'applicazione con cose utili per me, per informazioni, insomma, valutiamoli insieme alle tue idee, io le approvo o no. Poi controlla se va tutto bene, se ci sono buchi, se ci sono mancanze, se è possibile migliorare alcune parti, se ci siamo dimenticati qualcosa, insomma, se vogliamo aggiungere qualcos'altro di intelligente, di smart, geniale, insomma, dammi delle idee,

