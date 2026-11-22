# Guida · chiave di sola lettura per il kit RVC (22/11/2026)

A cosa serve: con la chiave `RVC_KIT_TOKEN` ogni chat scarica da sola il kit di regole più nuovo dal repo RVC (`tools/scarica-kit.py`, hook `kit-check.py`).
Fonte: docs.github.com «Managing your personal access tokens» (fine-grained token, link precompilato con `target_name`, `expires_in`, `contents=read`), letta il 22/11/2026.

1. Link già compilato (nome, descrizione, proprietario RVC-Operation-by-YNOY-CORP, scadenza 366 giorni, Contents in sola lettura):
   https://github.com/settings/personal-access-tokens/new?name=Kit+RVC+lettura&description=Solo+lettura+del+kit+di+regole&target_name=RVC-Operation-by-YNOY-CORP&expires_in=366&contents=read
2. «Repository access» → «Only select repositories» → in «Selected repositories» scegliere `RVC`.
3. «Permissions»: solo «Contents» in sola lettura («Metadata» lo aggiunge GitHub da solo).
4. «Generate token». La chiave (inizia con `github_pat_`) si vede una volta sola: copiarla subito. Se l'organizzazione chiede l'approvazione, il proprietario la approva da sé.
5. Impostazioni dell'ambiente cloud (menu dell'ambiente nel titolo della sessione → «Edit»): variabile `RVC_KIT_TOKEN` con la chiave. Mai nello «Script di configurazione»: lo script non passa le variabili alla chat e chi apre l'ambiente lo legge.
6. Arriva solo alle sessioni aperte dopo il salvataggio. Prova: `python3 -I tools/scarica-kit.py --versione` stampa la riga «Kit N».
7. Scadenza: fra 366 giorni (22/11/2027) `scarica-kit.py` esce con 3 (chiave rifiutata): rifare dal passo 1.
