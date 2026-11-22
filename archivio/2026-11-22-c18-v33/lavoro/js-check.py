import re, subprocess, sys, tempfile, os
s = open('/home/user/parigi-in-tasca/dicembre/parigi-disney-natale.html', encoding='utf-8').read()
bad = 0
for i, m in enumerate(re.finditer(r'<script(?![^>]*\bsrc=)(?![^>]*type="application/ld\+json")[^>]*>(.*?)</script>', s, re.S)):
    p = os.path.join(sys.argv[1], f'js{i}.js'); open(p, 'w').write(m.group(1))
    r = subprocess.run(['node', '--check', p], capture_output=True, text=True)
    print(i, 'ok' if r.returncode == 0 else 'ERRORE ' + r.stderr[:400]); bad += r.returncode != 0
sys.exit(bad)
