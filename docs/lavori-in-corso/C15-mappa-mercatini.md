# C15 · Mappa di Parigi coi mercatini e il percorso (22/11)

## Parole di Mario (22/11 ~11:09, arrivate alla Controllo 5 dopo l'handoff, passate alla Controllo 6)
> Aggiungi in priorità una mappa nell'app, una mappa di Parigi con i mercatini, per farmi capire magari il percorso che dovrei fare, dove sono, insomma, perché non mi è chiaro molto dove sono. Studiatela bene in modo che capisco bene per il mio viaggio, e poi più avanti possiamo integrare che in base a quando all'hotel che scelgo mi fa vedere il tragitto che devo fare, ecco, l'itinerario dalla mattina che mi sveglio, dove vado e faccio il giro senza che sia troppo dispersivo.

## Cosa c'è già
- Sezione «Il giro dei mercatini» (C8): 7 tappe in ordine (1 Notre-Dame, 2 Saint-Michel, 3 Saint-Germain, 4 Galeries Lafayette e Printemps, 5 Place Vendôme, 6 Tuileries, 7 Champs-Élysées), ognuna con «🚶 La strada» e link Maps; «Dove NON andare»; riquadro `#mkAl` che cambia con l'alloggio.
- Mappe degli alloggi (C5): `tools/fai-mappe-dicembre.py`, immagini Plan IGN (mappa ufficiale francese, usabile anche senza rete; le tessere di OpenStreetMap no, la loro regola vieta di salvarle), segni sopra in %.

## Scelte (le decido io, col perché)
- **Fase 1 adesso**: una mappa in cima alla sezione Mercatini, immagine Plan IGN del centro (da Notre-Dame agli Champs-Élysées), fatta dallo stesso tipo di script: si vede anche senza rete (il service worker la salva).
- Sopra la mappa: i 7 numeri delle tappe (stessi numeri e nomi delle schede, presi dalla stessa lista: niente doppioni), la linea del giro nell'ordine (continua = a piedi, tratteggiata = metro), i mercatini da saltare piccoli in grigio (per capire dove sono), Senna e monumenti si vedono già sulla mappa IGN.
- Toccando un numero: si apre la sua tappa sotto. Tasto «Ingrandisci» (mappa a tutto schermo, si allarga col dito).
- Bottone «Apri il giro in Google Maps» per farsi guidare dal vivo: Google accetta poche tappe intermedie sul telefono (numero da verificare sulla pagina ufficiale), quindi forse due pezzi (mattina 1→3, pomeriggio e sera 4→7).
- Posizioni: dagli indirizzi ufficiali già nelle schede e negli appunti (`research_notes/…/mercatini_natale.md`); coordinate dal servizio ufficiale di indirizzi francese (Géoplateforme) o dal sito del posto; fonte negli appunti.
- **Fase 2, più avanti (Mario: «più avanti»)**: secondo l'alloggio scelto, sulla mappa la partenza (stazione d'arrivo) e il rientro, e l'itinerario della giornata dalla sveglia. Il riquadro `#mkAl` lo fa già a parole: la mappa ne userà gli stessi dati.

## Occhio critico (prima del codice)
- Senza rete a Parigi: immagine salvata, non una mappa di Google dentro la pagina (resterebbe bianca).
- Telefono stretto: 7 numeri su ~4,5 km in 380 px; numeri grandi ≥ 28 px, mai sovrapposti (prova `prova-scritte.js` + prova nuova «numeri della mappa non si toccano»).
- Doppioni: nomi e ordine delle tappe da un posto solo (la lista della sezione), non scritti due volte.
- Giorno: il giro dei mercatini segue l'alloggio (domenica 13 o un altro giorno): la mappa non scrive orari, solo luoghi e ordine; gli orari restano in «Giorno per giorno».
- Tema chiaro/scuro/vino: la mappa IGN è chiara; bordo e numeri leggibili su tutti i temi.
- Peso: un'immagine ~150–250 KB; prova del cassetto senza rete aggiornata.

## Motore
Fable non serve: c'è già lo script delle mappe da copiare e i dati sono nella pagina; Opus basta.

## Stato
- 22/11 ~11:15 Controllo 6: piano scritto, inizio dalla ricerca (posizioni e limite delle tappe di Google Maps).
- 22/11 ~11:25 posizioni (lat, lon), lette oggi. IGN = geocodifica ufficiale Géoplateforme; OSM = OpenStreetMap; «indicativa» = punto scelto da me dentro l'area scritta dalla fonte.
  1 Notre-Dame, Square René-Viviani 48.852122, 2.347539 (OSM, già nello script delle mappe) · 2 Place Saint-Michel 48.853391, 2.343462 (IGN) · 3 Place Saint-Germain-des-Prés 48.854148, 2.333399 (IGN) · 4 Galeries Lafayette, 40 bd Haussmann 48.873199, 2.332434 (IGN) e Printemps, 64 bd Haussmann 48.873773, 2.328157 (IGN) · 5 Place Vendôme 48.867527, 2.329528 (IGN) · 6 Tuileries, parte ovest lato Concorde (dove stanno ruota e chalet) 48.8655, 2.3245 (indicativa) · 7 Champs-Élysées, giardini tra Concorde 48.867063, 2.321554 (IGN) e Rond-Point 48.869196, 2.309927 (IGN): segno a metà 48.8681, 2.3157 (indicativa).
  Da saltare: Hôtel de Ville 48.856426, 2.352528 (OSM) · Les Halles, Forum 48.862442, 2.344138 (IGN) · Torre Eiffel, Quai Jacques-Chirac 48.856037, 2.290137 (IGN) · Montmartre, Place des Abbesses 48.884753, 2.338484 (IGN) · Gare de l'Est 48.876025, 2.357994 (IGN) · La Défense: fuori mappa, solo scritto.
- Google Maps (pagina ufficiale «Maps URLs», letta il 22/11): sul telefono al massimo 3 tappe intermedie per link; con i mezzi le tappe forse non valgono (ipotesi, da provare): link a piedi 1→2→3, metro 3→4, a piedi 4→5→6→7.
- 22/11 ~11:50 Controllo 6: niente 3 bottoni nuovi di Google Maps (doppione): c'è già «Tutto il giro su Google Maps» in cima alla sezione e in ogni tappa il link a piedi dalla tappa prima. Script `tools/fai-mappa-mercatini.py` (immagine IGN 1400×1050, 250 KB, `dicembre/mappe/mercatini.jpg`, blocco `MKM`), mappa sotto `#mkAl` (`mkMappa()`), numeri col bordo d'oro = ⭐ (1, 4, 6, 7), linea a piedi rossa e metro blu tratteggiata (Palais Royal → Chaussée d'Antin, come «La strada» della tappa 4), grigi Hôtel de Ville e Les Halles, frecce sul bordo per Torre Eiffel, La Défense, Montmartre, Gare de l'Est; «Ingrandisci» a 1400 px con ✕ e tasto «indietro»; immagine nel cassetto senza rete (`sw.js` BASE). Prove in corso.
