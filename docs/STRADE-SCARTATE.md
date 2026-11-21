# Strade provate e scartate (storia)

Dalle consegne: strade già scartate, col perché. Le più nuove restano in `docs/PASSAGGIO-CONSEGNE.md`.
- #10: sessione aperta a mano = hook spenti: dopo il merge `echo '{}' | python3 .claude/hooks/avvio-check.py`.
- #10: `list_triggers` sempre con `enabled: true` e `limit` basso (~20k token); `merge_pull_request`: `expectedHeadSha` di 40 caratteri.
- #11: immagine di Google Maps («Static Maps») = chiave a pagamento: scartata. Tessere di `tile.openstreetmap.org` per immagini fisse: la regola ufficiale vieta di scaricarle per l'uso senza rete: scartate. Overpass (dati OSM) bloccato dalla rete dell'ambiente. Usati: Plan IGN (WMS `data.geopf.fr`, 40 richieste/s, Licence Ouverte) e geocodifica IGN; Nominatim solo per ibis, Ki Space, Square Viviani, Orly.
- #11: nella prova, immagini con `loading="lazy"` fuori schermo non si caricano mai (prova bloccata): prima `scrollIntoView`, poi attesa con tempo massimo.
- #12: usare la foto di Mario (presa da Pinterest) dentro l'icona: scartata, è la foto di un altro; la luna è disegnata da noi con le stesse forme e colori.
- #12: `delete_trigger` della sveglia vecchia: bloccato dal filtro di sicurezza; funziona `update_trigger` con `enabled: false`.
