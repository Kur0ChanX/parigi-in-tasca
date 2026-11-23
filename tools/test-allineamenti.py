#!/usr/bin/env python3
"""Prove di tools/allineamenti.mjs (C531, kit): una pagina finta con 16 casi GIUSTI (cerchio coperto a metà da un pezzo fisso
nella foto della pagina intera, segno a fine riga col reparto che ha sempre una riga sua, scritta nella casella con la
striscia dentro una cella colorata (Codice 44), il «?» nel cerchio, icona e scritta
in riga, tasti a segmenti uniti, numerino sopra l'angolo, riga sulla base del testo, eccezione `data-allinea="libero"`,
segni con la scritta nello stesso contenitore, numero grande da solo con la frase a capo sotto, 3 bollini in fila con spazi
uguali, scritta al centro del suo tasto, barra a colonne uguali, scritta disegnata dallo stile con `::after`, riga tagliata a 2 con un pezzo nascosto sotto) e 7 STORTI (icona fuori centro, numero nel cerchio 5 px più giù, bollino
7 px più su, scritta attaccata 1 px, segno a fine riga con la scritta a capo, un bollino in fila con lo spazio più largo,
icona del tasto spostata dal margine per una scritta nascosta): devono uscire SOLO i 7 storti, uno per caso. Poi la stessa pagina corretta (tutto a posto, uscita 0), l'errore d'uso (uscita 2), il segno della misura solo
dentro `.git` e le foto solo nella cartella data. Senza Playwright o senza browser la prova si salta, dicendolo."""
import json
import pathlib
import subprocess
import sys
import tempfile

QUI = pathlib.Path(__file__).resolve().parent
PROGRAMMA = QUI / 'allineamenti.mjs'
sbagli = []

STILE = """
  body { font: 15px/1.4 "DejaVu Sans", sans-serif; margin: 16px; color: #222; background: #fff; }
  section { margin: 0 0 18px; }
  .riga { display: flex; align-items: center; gap: 8px; }
  .tondo { display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px;
           border-radius: 50%; background: #e8dcc0; box-sizing: border-box; }
  .tondo svg { width: 16px; height: 16px; }
  .pallino { display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: #c33; }
  .tasti { display: flex; }
  .tasti button { font: inherit; padding: 6px 12px; border: 1px solid #888; background: #f4f4f4; border-radius: 0; margin: 0; }
  .tasti button + button { border-left: 0; }
  .avviso { position: relative; display: inline-flex; }
  .bollo { position: absolute; top: -6px; right: -8px; min-width: 16px; height: 16px; border-radius: 8px; background: #c33;
           color: #fff; font-size: 11px; line-height: 16px; text-align: center; }
  .coppia { display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; }
  .stretta { width: 150px; display: flex; flex-wrap: wrap; align-items: center; column-gap: 6px; }
  .chip { padding: 4px 10px; border-radius: 12px; background: #eee; }
  .tasto { display: inline-flex; align-items: center; justify-content: center; width: 120px; height: 40px;
           border-radius: 10px; background: #e8dcc0; }
  .colonne { display: grid; grid-template-columns: repeat(3, 100px); justify-content: center; background: #eee; }
  .colonne span { text-align: center; }
  .breve { display: inline-flex; align-items: center; font-size: 0; }
  .breve svg { margin-right: 6px; }
  .breve::after { content: attr(data-breve); font-size: 15px; }
  .taglio { margin: 0; width: 130px; line-height: 18px; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;
            overflow: hidden; }
"""
CERCHIO = '<svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#555"/></svg>'
CERCHIO16 = '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#555"/></svg>'
GIUSTI = f"""
<section id="ok-coperto"><div style="position:fixed; top:0; left:0; width:60px; height:32px; background:#4a6"></div><span
  class="tondo">E</span></section>
<section id="ok-rigasua" class="stretta" style="width:220px; align-items:baseline"><b>Elena</b><span>{CERCHIO16}</span><small
  style="flex-basis:100%">Ricevimento</small></section>
<section id="ok-cella"><span style="display:inline-flex; align-items:center; justify-content:center; width:60px; height:52px;
  background:#eef"><span style="display:flex; align-items:center; justify-content:center; width:56px; height:40px;
  box-sizing:border-box; padding:0 4px; border-left:6px solid #c80; background:#fff">7–15</span></span></section>
<section id="ok-tondo"><span class="tondo">?</span></section>
<section id="ok-riga" class="riga">{CERCHIO16}<span>Camere di oggi</span></section>
<section id="ok-tasti" class="tasti"><button>Giorno</button><button>Notte</button></section>
<section id="ok-sopra" class="riga"><span class="avviso"><span class="tondo"><svg viewBox="0 0 16 16"><rect x="2" y="2"
  width="12" height="12" fill="#555"/></svg></span><span class="bollo">3</span></span><span>Avvisi</span></section>
<section id="ok-base" style="display:flex; align-items:baseline; gap:8px"><span style="font-size:28px">12</span>
  <span>camere libere</span></section>
<section id="ok-libero" class="riga"><span class="tondo">{CERCHIO}</span><span data-allinea="libero"
  style="margin-left:-9px">+2</span><span>ospiti</span></section>
<section id="ok-coppie" class="stretta"><span class="coppia"><span class="pallino"></span><span>Da fare</span></span>
  <span class="coppia"><span class="pallino"></span><span>Da controllare</span></span></section>
<section id="ok-grande" class="stretta"><span style="font-size:32px; font-weight:700">23</span>
  <span>su 23 · 0 finite · 0 in corso</span></section>
<section id="ok-fila" class="riga"><span class="chip">Lun</span><span class="chip">Mar</span><span class="chip">Mer</span></section>
<section id="ok-lati"><span class="tasto">Salva</span></section>
<nav id="ok-colonne" class="colonne"><span>Oggi</span><span>Mar</span><span>Calendario</span></nav>
<section id="ok-dopo"><span class="tasto"><span class="breve" data-breve="5stelle">{CERCHIO16}Carica dati 5stelle</span></span></section>
<section id="ok-taglio" class="riga"><span class="tasto">Planner</span><p class="taglio">Dati di 5stelle mai caricati finora
  e ancora una riga <span class="tondo">?</span></p></section>
"""
STORTI = f"""
<section id="no-icona"><span class="tondo" style="padding-left:6px">{CERCHIO}</span></section>
<section id="no-numero"><span class="tondo" style="padding-top:10px">7</span></section>
<section id="no-bollino" class="riga"><span class="pallino" style="position:relative; top:-7px"></span>
  <span>Da controllare</span></section>
<section id="no-attaccata" class="riga" style="gap:1px">{CERCHIO16}<span>Pronta</span></section>
<section id="no-capo" class="stretta"><span style="flex: none; width: 120px">Legenda</span><span class="pallino"></span>
  <span>Da controllare</span></section>
<section id="no-fila" class="riga"><span class="chip">Lun</span><span class="chip" style="margin-right:6px">Mar</span>
  <span class="chip">Mer</span></section>
<section id="no-lati"><span class="tasto"><svg width="16" height="16" viewBox="0 0 16 16" style="margin-right:8px"><circle
  cx="8" cy="8" r="7" fill="#555"/></svg><span style="display:none">Impostazioni</span></span></section>
"""
# Gli stessi 7 casi, corretti come si farebbe nell'app.
CORRETTI = f"""
<section id="si-icona"><span class="tondo">{CERCHIO}</span></section>
<section id="si-numero"><span class="tondo">7</span></section>
<section id="si-bollino" class="riga"><span class="pallino"></span><span>Da controllare</span></section>
<section id="si-attaccata" class="riga" style="gap:6px">{CERCHIO16}<span>Pronta</span></section>
<section id="si-capo" class="stretta"><span style="flex: none; width: 120px">Legenda</span><span class="coppia">
  <span class="pallino"></span><span>Da controllare</span></span></section>
<section id="si-fila" class="riga"><span class="chip">Lun</span><span class="chip">Mar</span><span class="chip">Mer</span></section>
<section id="si-lati"><span class="tasto">{CERCHIO16}<span style="display:none">Impostazioni</span></span></section>
"""


def pagina(corpo):
    return ('<!doctype html><html lang="it"><head><meta charset="utf-8">'
            '<meta name="viewport" content="width=device-width, initial-scale=1"><title>Prova allineamenti</title>'
            f'<style>{STILE}</style></head><body>{corpo}</body></html>')


def ok(cond, cosa):
    print(('ok   ' if cond else 'ROSSA') + ' ' + cosa)
    if not cond:
        sbagli.append(cosa)


def lancia(cartella, *arg):
    # Sempre da una cartella temporanea: il programma non deve scrivere dove parte (E453).
    r = subprocess.run(['node', str(PROGRAMMA), *arg], cwd=cartella, capture_output=True, text=True, timeout=180)
    return r.returncode, r.stdout + r.stderr


def browser_pronto(cartella):
    prova = ('import(process.argv[1]).then(async (m) => { const b = await m.apriBrowser(); await b.close(); })'
             '.then(() => process.exit(0), (e) => { console.error(e.message); process.exit(3); });')
    try:
        r = subprocess.run(['node', '-e', prova, PROGRAMMA.as_uri()], cwd=cartella, capture_output=True, text=True, timeout=120)
    except (OSError, subprocess.TimeoutExpired) as e:
        return str(e)
    return '' if r.returncode == 0 else (r.stderr.strip().splitlines() or ['errore'])[-1]


def main():
    with tempfile.TemporaryDirectory() as t:
        t = pathlib.Path(t)
        perche = browser_pronto(t)
        if perche:
            print(f'SALTATA: niente browser per le misure ({perche}). Si prova dove c\'è Playwright col suo browser.')
            return 0

        finta = t / 'finta.html'
        finta.write_text(pagina(GIUSTI + STORTI), encoding='utf-8')
        e, testo = lancia(t, str(finta), '--larghezze', '390')
        righe = [r for r in testo.splitlines() if r.startswith('390 px · ')]
        ok(e == 1, f'pagina coi 7 storti: esce 1 (uscita {e})')
        ok(len(righe) == 7, f'esattamente 7 problemi (trovati {len(righe)}):\n' + testo)
        ok(not any('ok-' in r for r in righe), 'nessun caso giusto segnalato (falsi)')
        attesi = [('dentro', 'no-icona'), ('dentro', 'no-numero'), ('in riga', 'no-bollino'),
                  ('staccato', 'no-attaccata'), ('insieme', 'no-capo'), ('simmetria', 'no-fila'), ('simmetria', 'no-lati')]
        for tipo, dove in attesi:
            ok(any(f'· {tipo}: ' in r and dove in r for r in righe), f'trovato «{tipo}» in #{dove}')
        numero = next((r for r in righe if 'no-numero' in r), '')
        ok('in verticale' in numero and ' 0 px in orizzontale' in numero, 'il numero è spostato solo in verticale')
        ok(not (t / '.git').exists() and sorted(p.name for p in t.iterdir()) == ['finta.html'],
           'senza .git nessun file scritto nella cartella di partenza')

        giusta = t / 'giusta.html'
        giusta.write_text(pagina(GIUSTI + CORRETTI), encoding='utf-8')
        (t / '.git').mkdir()
        e, testo = lancia(t, str(giusta), '--larghezze', '390,1366', '--foto', str(t / 'foto'))
        ok(e == 0 and 'Allineamenti a posto (390, 1366 px).' in testo, f'pagina corretta: a posto (uscita {e}):\n' + testo)
        ok(sorted(p.name for p in (t / 'foto').iterdir()) == ['allineamenti-1366.png', 'allineamenti-390.png'],
           'foto solo nella cartella data, una per larghezza')
        try:
            segno = json.loads((t / '.git' / 'allineamenti.json').read_text(encoding='utf-8'))
        except (OSError, ValueError):
            segno = {}
        misure = segno.get('misure', [])
        ok(len(misure) == 2 and all(m.get('problemi') == 0 for m in misure) and segno.get('ultima'),
           'segno della misura in .git/allineamenti.json (2 misure, 0 problemi)')

        e, testo = lancia(t)
        ok(e == 2 and 'Uso:' in testo, 'senza pagina: errore d\'uso (uscita 2)')
        e, testo = lancia(t, str(giusta), '--sconosciuta')
        ok(e == 2, 'opzione sconosciuta: uscita 2')

    print('TUTTO VERDE' if not sbagli else f'{len(sbagli)} ROSSE')
    return 1 if sbagli else 0


if __name__ == '__main__':
    sys.exit(main())
