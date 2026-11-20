# Parigi in tasca

Guida agli spostamenti a Parigi, 22–26 novembre 2026: orari di uscita, metro e link Google Maps.
Sito: https://kur0chanx.github.io/parigi-in-tasca/ (GitHub Pages, ramo `main`, cartella root)

## Come è fatta
- La pagina è tutta in `index.html` (HTML + CSS + JS; font Google Bricolage Grotesque e Figtree). Accanto: `sw.js`, `manifest.webmanifest`, icone, `tools/controlla-colori.py`.
- Grafica da app di viaggio moderna con dettagli di Parigi: testata «Parigi di notte», targa smaltata della via di casa, colori ufficiali delle linee. Colori come variabili in `:root`, tema chiaro e scuro.
- In cima la scheda «Prossima uscita»: legge l'ora del telefono e mostra la prossima uscita (con «tra X min» e il link Maps). Prima del viaggio mostra la prima uscita di domenica; dopo giovedì sparisce.
- Sul telefono i giorni sono nella barra in basso, come in un'app. Durante il viaggio la pagina apre il giorno di oggi e lo segna con «oggi».
- Lunedì 23 (Disneyland): riquadro e bottoni «Guida Disneyland» verso la guida dell'amica con le sue date, https://guida-disneyland-paris-ynoy.pages.dev (repo `YNOY-Disneyland-Paris/Disneyland-Paris-Guida`, «Guida dell'amica»). Compare anche nella scheda «Prossima uscita» quando l'uscita è di lunedì.
- Uscite: ogni tratto ha i minuti (4° valore in `legs`, con attese, cambi e passo tranquillo); la pagina calcola l'orario di ogni pezzo, l'arrivo e il margine sull'ingresso (`target`). Per spostare un'uscita basta cambiare `t`.
- Senza internet e come app: `sw.js` (prima la rete, dopo 4 secondi la copia salvata; stesso metodo della guida Disney) e `manifest.webmanifest` con le icone `icona-*.png` (la targa «Parigi in tasca»). Si attivano solo sul sito vero (github.io) o su localhost. Avviso giallo quando manca la rete; bottone «Aggiungi alla schermata Home» quando il browser lo permette.
- Anteprima per WhatsApp e altre chat: `anteprima.jpg` (1200×630, sotto 300 KB) nei tag `og:image` in testa alla pagina.
- Su Android, 4 secondi dopo l'apertura, riquadro «Installa come app» (tocco su «Installa» = finestra di installazione di Android). «Non ora» lo nasconde per 12 ore; se il browser non permette l'installazione diretta, dopo 25 secondi istruzioni a mano. Mai su iPhone, computer o app già installata.
- «Da fare»: le spunte restano salvate solo sul telefono di chi le tocca (localStorage).
- I giorni sono nell'array `DAYS` dentro lo script: orari, tratti (`legs`), note (`nb`), link Maps (`gm(...)`), punti mappa (`pins`) e percorsi (`route`).
- La mappa è uno schema SVG disegnato dallo script (coordinate in `S`), non in scala.
- `<meta name="robots" content="noindex">`: la pagina contiene l'indirizzo dell'appartamento.

## Stato al 20/11/2026
- Orari di apertura, prezzi 2026, lavori e chiusure ricontrollati il 20/11/2026 su fonti ufficiali (elenco in fondo alla pagina; Disney solo da un sito non ufficiale perché il sito Disney blocca i controlli automatici). I tempi di viaggio sono stime con margine.
- Deciso: mercoledì 25 pomeriggio **Orangerie** alle 15:15 (rientro da Versailles col RER C fino a Musée d’Orsay, poi a piedi a Dior per le 17:00). Il Trianon è stato scartato: con il Trianon la Reggia si accorciava e l’arrivo da Dior era troppo tirato.
- Da ricontrollare la sera prima di ogni giorno: scioperi e lavori (app Bonjour RATP / Île-de-France Mobilités).
