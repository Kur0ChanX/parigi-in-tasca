#!/usr/bin/env python3
"""Rifà la web app di dicembre per il sito: dicembre/index.html = intestazione del sito + la pagina.

La pagina si modifica SOLO in dicembre/parigi-disney-natale.html (la stessa che va su claude.ai).
Uso:
  python3 -I tools/fai-dicembre.py              rifà dicembre/index.html
  python3 -I tools/fai-dicembre.py --controlla  esce con 1 se index.html non è allineato (prima di pubblicare)
"""
import pathlib
import sys

RADICE = pathlib.Path(__file__).resolve().parent.parent
SORGENTE = RADICE / 'dicembre' / 'parigi-disney-natale.html'
USCITA = RADICE / 'dicembre' / 'index.html'

TESTA = """<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<!-- File fatto da tools/fai-dicembre.py: non modificarlo a mano, si cambia dicembre/parigi-disney-natale.html -->
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow">
<meta name="description" content="Parigi e Disneyland a Natale, 13–17 dicembre: alloggi, costi, mercatini e giorno per giorno.">
<meta name="theme-color" content="#0A1230">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Natale">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" type="image/png" sizes="192x192" href="icona-192.png">
<link rel="apple-touch-icon" href="icona-180.png">
"""

CODA = """
<script>
/* Senza rete (metro, roaming): la pagina si salva sul telefono alla prima apertura. */
if ('serviceWorker' in navigator && window.isSecureContext && location.protocol !== 'file:') {
  addEventListener('load', () => { navigator.serviceWorker.register('sw.js', { scope: './' }).catch(() => {}); });
}
</script>
</body>
</html>
"""


def costruisci() -> str:
    pagina = SORGENTE.read_text(encoding='utf-8').rstrip('\n')
    return TESTA + pagina + '\n' + CODA


def main() -> int:
    nuovo = costruisci()
    if '--controlla' in sys.argv[1:]:
        vecchio = USCITA.read_text(encoding='utf-8') if USCITA.exists() else ''
        if vecchio != nuovo:
            print('FALSO: dicembre/index.html non è allineato alla pagina. Rifallo: python3 -I tools/fai-dicembre.py')
            return 1
        print('VERO: dicembre/index.html allineato alla pagina')
        return 0
    USCITA.write_text(nuovo, encoding='utf-8')
    print(f'Scritto {USCITA.relative_to(RADICE)} ({len(nuovo.encode())} byte)')
    return 0


if __name__ == '__main__':
    sys.exit(main())
