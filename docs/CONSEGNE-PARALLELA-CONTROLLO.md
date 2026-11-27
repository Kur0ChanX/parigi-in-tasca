# Consegne della catena «Controllo» (chat parallela, segni 🟩 🟨 🟥 ⬛)

## Stato (Controllo 29 `session_01Rwcxc2rpkccmGhhxREEMF7`, 24/11 11:31 ora italiana, chiusa alla soglia; la apre Mario (catena a 5 di 8, o cambio account): passi in `docs/kit-progetto/CAMBIO-ACCOUNT.md`)
- Ramo comune = origin (verifica: `git rev-parse HEAD` = `origin/claude/parigi-ramo-definitivo`). Nessun giro in corso. PR aperte: #2 (bozza) Kit 43 installato e viaggio 13–17 dicemb. Scorte NON unite: scorta-parallela-20261123-01Rwcxc2rpkc/claude/parigi-ramo-definitivo.
- **Chiusa per cambio account** (Mario 24/11 «salva per passaggio account»), nessun lavoro a metà. Online: **v49** (verifica: `curl -s https://kur0chanx.github.io/parigi-in-tasca/dicembre/versione.json` = `{"v": 49}`).
- **Cosa preme a Mario adesso:** niente di aperto; v49 online da guardare sul telefono.
- **Già deciso da Mario (non richiedere):** foto v48 e v49 approvate e pubblicate; sfarfallio della testata chiuso («controllo 25 ok»); alloggi spenti = scelta 1 («14 ok», fatto); voti dei ristoranti: NIENTE tasto né aggiornamento automatico (DOMANDA 4 → 2), li ricontrollo a mano quando Mario lo chiede prima della partenza (voce in «2.» di `docs/DA-FARE.md`).
- **Da non rifare:** ricerca prezzi Google Places / TripAdvisor / TheFork (23/11, in `docs/lavori-in-corso/C28-idee-e-controllo.md`); sveglia RER A ora mia `trig_017xP2rFup3Jk9db1mQN71ky` (26/11 10:17, legata a QUESTA sessione: la Controllo 30 la rifà sua e spegne questa; la vecchia `trig_01XizakkWdLMSSeoPhGVnoho` è spenta).

## Cosa è stato fatto (Controllo 29) · verifica: `git log --oneline f20dde55..HEAD`
- v48 online (PR 50, 23/11 18:47): Mangiare, treni dal vivo, meteo, pro e contro una frase per riga (`FR`, `PCX`, `QPT`, `RIGHE` nella pagina; classe `.pcx` al posto di `.pc` per i pro/contro, riga in `docs/ERRORI.md`), righe oltre 350 caratteri 18 → 0, prova «C29».
- v49 online (PR 51, 23/11 19:59): passo 2 di «Scegli» con gruppi «Liberi solo dal 14» (18, 20, 21) ed «Esauriti» (15), niente righe grigie (`GR14`), prova «C20»; tolte le prove `?luci=ferme` e `?tela=si` (C27 chiuso).
- `tools/allineamenti.mjs` non trova Playwright da `tools/` (import ESM): lanciato da una copia nello scratchpad con `node_modules/playwright` collegato.

## Prossimi passi
1. Avvio normale. Kit nuovo nella fonte (Kit 56 · 27/11/2026 · Preferenze v40; qui Kit 53): prima l'aggiornamento come dice l'hook d'avvio.
0. **Richiesta di Mario arrivata a sessione chiusa (27/11), da fare per prima dopo l'avvio:** «Fai una comparazione accurata tra il 16 e il 23 recensioni ecc ecc leggile tutte airb&b e booking» → confronto n. 16 contro n. 23 leggendo TUTTE le recensioni su Airbnb e Booking (fonti e data in `research_notes/`, poi in pagina se cambia qualcosa).
2. Quando Mario lo chiede (10–13/12): ricontrollo voti dei ristoranti (`research_notes/ristoranti/`, poi `tools/fai-ristoranti.py`).
3. Dal 28/11: guardare che il meteo compaia nella guida (Open-Meteo).
4. Orari RER A del 13 e 17/12: la sveglia è scattata il 26/11 10:18 in questa sessione chiusa; su malignea.fr/horaires/ ancora solo fino al 6/12. All'avvio rifai una sveglia tua per il 28/11 (stesso testo della sveglia C22) e spegni `trig_017xP2rFup3Jk9db1mQN71ky` se è ancora attiva.

## Blocchi e rischi
- Telefono di prova = imitazione. `docs/ERRORI.md` vicino al tetto di 10 KB.

## Ultimo messaggio di Mario
> salva per passaggio account

(24/11, cambio account: skill `cambio-account`.)

## Motore e forza di pensiero
Motore: **claude-opus-5-5** (Opus 5.5) · impegno **Medio** (`medium`, da `get_session` del 24/11, scelto da Mario): la sessione nuova nasce con questi (C474, `create_session` con `model` ed `effort`), mai chiesti a Mario (E277).

## Testo per aprire la Controllo 30
la apre Mario (catena a 5 di 8, o cambio account): passi in `docs/kit-progetto/CAMBIO-ACCOUNT.md`. Scritto da Controllo 29 il 24/11/2026 (righe di fatto da `tools/consegne.py fatti --parallela`).

Titolo: `🟩 🗼 Controllo 30 · aspetta Mario`

Testo da incollare:
```
[AVVIO] Sei la chat parallela Controllo 30 di Parigi in tasca, linea «Controllo» (repo Kur0ChanX/parigi-in-tasca, ramo claude/parigi-ramo-definitivo). git fetch origin claude/parigi-ramo-definitivo && git merge --ff-only origin/claude/parigi-ramo-definitivo (se «HEAD detached» prima git checkout claude/parigi-ramo-definitivo). Leggi CLAUDE.md, docs/ERRORI.md e le tue consegne docs/CONSEGNE-PARALLELA-CONTROLLO.md (leggi i file solo a blocchi con grep -n e sed -n, mai interi); continua da sola dai «Prossimi passi».
```

## Messaggi di Mario di questa sessione
Scritti dallo script (C469): dopo «→» cosa ne è stato (C…, file, commit o «risposta alla domanda N»).
- 2026-11-23 16:13 · [AVVIO] Sei la chat parallela Controllo 29 di Parigi in tasca, linea «Controllo»… → avvio; v49 testi (pro e contro a righe, C28)
- 2026-11-23 18:39 · controllo 25 ok 14 ok → C27 chiuso, C20 scelta 1 (v49, PR 51)
- 2026-11-23 18:40 · 11 → risposta alla DOMANDA 1: v48 pubblicata (PR 50)
- 2026-11-23 18:41 · Ma i voti può controllare in tempo reale senza consumare token e risorse? Se io … → DOMANDA 2 (strade e prezzi, C28)
- 2026-11-23 19:57 · No, non voglio che li aggiorni da solo, ma anche a spinta si possono aggiornare,… → risposta alla DOMANDA 2; DOMANDA 3 ok = v49 pubblicata; DOMANDA 4
- 2026-11-23 20:08 · No, sono pochissimi tocchi al mese. Boh, non conviene, secondo me. Al massimo ti… → risposta alla DOMANDA 4: no; voce in «2.» di Da fare
- 2026-11-24 11:31 · salva per passaggio account → cambio account: queste consegne

Ultimo, intero:
> salva per passaggio account

