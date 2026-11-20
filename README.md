# Parigi in tasca

Guida agli spostamenti a Parigi, 22–26 novembre 2026: orari di uscita, metro e link Google Maps.
Sito: https://kur0chanx.github.io/parigi-in-tasca/ (GitHub Pages, ramo `main`, cartella root)

## Come è fatta
- Un solo file: `index.html` (HTML + CSS + JS, nessuna dipendenza tranne i font Google: Bodoni Moda, Barlow Condensed, Figtree).
- Grafica «strada di Parigi»: targa smaltata blu della via (cornice verde Guimard), ringhiera Haussmann sotto la testata, settimana disegnata come una linea della metro. Colori come variabili in `:root`, con tema chiaro e scuro.
- «Da fare»: le spunte restano salvate solo sul telefono di chi le tocca (localStorage). Durante il viaggio la pagina apre il giorno di oggi e lo segna con «oggi».
- I giorni sono nell'array `DAYS` dentro lo script: orari, tratti (`legs`), note (`nb`), link Maps (`gm(...)`), punti mappa (`pins`) e percorsi (`route`).
- La mappa è uno schema SVG disegnato dallo script (coordinate in `S`), non in scala.
- `<meta name="robots" content="noindex">`: la pagina contiene l'indirizzo dell'appartamento.

## Stato al 20/11/2026
- Orari di apertura, prezzi 2026, lavori e chiusure verificati il 20/11/2026 (fonti in fondo alla pagina). I tempi di viaggio sono stime con margine.
- Deciso: mercoledì 25 pomeriggio **Orangerie** alle 15:15 (rientro da Versailles col RER C fino a Musée d’Orsay, poi a piedi a Dior per le 17:00). Il Trianon è stato scartato: con il Trianon la Reggia si accorciava e l’arrivo da Dior era troppo tirato.
- Da ricontrollare la sera prima di ogni giorno: scioperi e lavori (app Bonjour RATP / Île-de-France Mobilités).
