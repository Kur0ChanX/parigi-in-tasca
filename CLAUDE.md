# Parigi in tasca 🗼 · regole del progetto
@docs/kit-progetto/REGOLE.md

Sopra il kit (uguale in tutti i progetti, versione in `docs/kit-progetto/VERSIONE`); qui solo il progetto, che nei dettagli vince. Tetto: ~1.000 token (lo controllano `tools/fai-kit.py` e l'hook `kit-check.py`).
- Repo `Kur0ChanX/parigi-in-tasca`, ramo unico **`claude/parigi-ramo-definitivo`** (`.claude/ramo-di-lavoro.txt`). Titoli `<segno> 🗼 <Nome> <numero> · <cosa fa>` (es. «🟢 🗼 Principale 12 · scegli fornitore»; catene in `docs/CHI-FA-COSA.md`; REGOLE.md «Titoli»). Altri progetti di Mario: Jona Ordini 👨🏻‍🍳, SPA Sensorial 🫒, EdilCannas 🏗️, Guida Disneyland 🏰, RVC 🛎️ (MettiPlay ▶️ accantonato).
- Il resto quando serve: skill del kit (`consegne` 🔒, `chat-parallela`, `cambio-account` 🔒, `pr`, `nuova-regola`, `ricerca-aggiornata`); regole per zona in `.claude/rules/` (con `paths:`): se lavoro in una zona solo con Bash, prima le leggo. Servizi esterni: prima le guide giuste in `docs/` (`GUIDA-*.md` o `GUIDE-GIUSTE.md`).

## Compact instructions
Se il contesto viene compresso, conserva: l'ultimo messaggio di Mario parola per parola; le domande aperte; i file toccati con i percorsi; le decisioni con il motivo; il punto esatto del lavoro e il prossimo passo.

---
# Parigi in tasca
Guida di viaggio a Parigi sul telefono. Sito: https://kur0chanx.github.io/parigi-in-tasca/ (GitHub Pages, da `main`: tutto ciò che è in `main` è pubblico). Dettagli in `README.md`.
- `index.html` (+ `sw.js`, `manifest.webmanifest`, icone): guida 22–26/11/2026. Prima di pubblicare: `python3 -I tools/controlla-colori.py`.
- Viaggio 13–17/12/2026: appunti in `research_notes/`; pagina: si modifica solo `dicembre/parigi-disney-natale.html` (anche Artifact), poi `python3 -I tools/fai-dicembre.py` rifà la web app `dicembre/index.html` (sito `/dicembre/`, service worker suo). Prima di pubblicare anche `python3 -I tools/fai-dicembre.py --controlla` e `node tools/prova-web-app.js`.
- Ogni fatto dalla pagina ufficiale, link nelle fonti; i siti non ufficiali si segnano così.
