# Parigi in tasca

Guida agli spostamenti a Parigi, 22–26 novembre 2026: orari di uscita, metro e link Google Maps.
Sito: https://kur0chanx.github.io/parigi-in-tasca/ (GitHub Pages, ramo `main`, cartella root)

## Come è fatta
- Un solo file: `index.html` (HTML + CSS + JS, nessuna dipendenza tranne il font Figtree).
- I giorni sono nell'array `DAYS` dentro lo script: orari, tratti (`legs`), note (`nb`), link Maps (`gm(...)`), punti mappa (`pins`) e percorsi (`route`).
- La mappa è uno schema SVG disegnato dallo script (coordinate in `S`), non in scala.
- `<meta name="robots" content="noindex">`: la pagina contiene l'indirizzo dell'appartamento.

## Stato al 20/11/2026
- Orari di apertura, prezzi 2026, lavori e chiusure verificati il 20/11/2026 (fonti in fondo alla pagina). I tempi di viaggio sono stime con margine.
- Da decidere: mercoledì 25 pomeriggio **Orangerie** (idea A, chiusa il martedì) oppure **Trianon** a Versailles (idea B, incluso nel Passport). Quando è deciso, togliere l'altra idea e il punto «Mercoledì» dalla lista «Da fare».
- Da ricontrollare la sera prima di ogni giorno: scioperi e lavori (app Bonjour RATP / Île-de-France Mobilités).
