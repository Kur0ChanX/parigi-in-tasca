/* Parigi in tasca: la pagina si apre anche senza internet (metro, poco segnale, niente roaming).
   Prima prova la rete (pagina sempre aggiornata); se non risponde entro 4 secondi usa la copia salvata.
   Stesso metodo della guida Disneyland. I caratteri di Google si salvano alla prima apertura. */
const CASSETTO = 'parigi-in-tasca-v1';
const BASE = ['./', 'icona-192.png', 'icona-512.png', 'icona-180.png', 'manifest.webmanifest'];
const FONT = /^https:\/\/fonts\.(googleapis|gstatic)\.com\//;

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CASSETTO).then((c) => c.addAll(BASE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((k) => Promise.all(k.filter((n) => n !== CASSETTO).map((n) => caches.delete(n))))
      .then(() => self.clients.claim()),
  );
});

function conTempo(promessa, ms) {
  return new Promise((ok, no) => {
    const t = setTimeout(() => no(new Error('rete lenta')), ms);
    promessa.then((r) => { clearTimeout(t); ok(r); }, (err) => { clearTimeout(t); no(err); });
  });
}

self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const url = new URL(r.url);
  // Caratteri di Google: prima la copia salvata, se manca la rete (e la salva).
  if (FONT.test(r.url)) {
    e.respondWith(caches.match(r).then((salvata) => salvata || fetch(r).then((risposta) => {
      if (risposta.ok || risposta.type === 'opaque') {
        const copia = risposta.clone();
        e.waitUntil(caches.open(CASSETTO).then((c) => c.put(r, copia)));
      }
      return risposta;
    })));
    return;
  }
  if (url.origin !== self.location.origin) return; // Google Maps, guida Disney: non si toccano
  const pagina = r.mode === 'navigate';
  const chiave = pagina ? './' : r;
  const daRete = fetch(r).then((risposta) => {
    if (risposta.ok) {
      const copia = risposta.clone();
      e.waitUntil(caches.open(CASSETTO).then((c) => c.put(chiave, copia)));
    }
    return risposta;
  });
  e.respondWith(
    conTempo(daRete, 4000).catch(() =>
      caches.match(chiave, { ignoreSearch: true }).then((salvata) => salvata || daRete),
    ),
  );
});
