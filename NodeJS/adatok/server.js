/* Node.js (1 feladat) – plain http modul
    Könyvtár API v2

    Írj szervert a http modullal (nincs Express). Legyen egy beégetett books tömb:

    [{ id:1, cim:"A", szerzo:"S1", ar:1200,  mufaj:"scifi"  },
    { id:2, cim:"B", szerzo:"S2", ar:9500,  mufaj:"roman"  },
    { id:3, cim:"C", szerzo:"S1", ar:15000, mufaj:"scifi"  }, ...]


    Útvonalak:

    GET / → text/html üdvözlő <h1>Könyvtár API</h1>

    GET /books → az összes könyv application/json

    GET /books/genre?g=scifi → csak a megadott mufaj (ha g hiányzik, 400‐as hiba üzenet JSON-ban)

    GET /books/sort?by=ar&dir=desc

    by ∈ {ar,cim} (ismeretlen mezőnél 400)

    dir ∈ {asc,desc} (hibánál 400)

    GET /books/stats → statisztika JSON-ban:

    {
    "ossz": 6,
    "atlagAr": 10450.5,
    "dbMufajonkent": { "scifi": 3, "roman": 2, "egyeb": 1 }
    }


    Követelmények:

    Minden JSON válasz: Content-Type: application/json; charset=utf-8

    Hiba esetén érthető JSON: { "error": "üzenet" }, státusz: 400 vagy 404

    Query string parse: new URL(req.url, 'http://localhost')  
*/

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const books = [
  { id: 1, cim: "A", szerzo: "S1", ar: 1200,  mufaj: "scifi" },
  { id: 2, cim: "B", szerzo: "S2", ar: 9500,  mufaj: "roman" },
  { id: 3, cim: "C", szerzo: "S1", ar: 15000, mufaj: "scifi" },
  { id: 4, cim: "D", szerzo: "S3", ar: 7000,  mufaj: "roman" },
  { id: 5, cim: "E", szerzo: "S2", ar: 20000, mufaj: "egyeb" },
  { id: 6, cim: "F", szerzo: "S4", ar: 9000,  mufaj: "scifi" },
];

function sendJson(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(data, null, 2));
}
function sendHtml(res, status, html) {
  res.writeHead(status, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost'); // query-kezeléshez
  const { pathname, searchParams } = url;

  if (req.method !== 'GET') {
    return sendJson(res, 405, { error: 'Csak GET támogatott.' });
  }

  // GET /
  if (pathname === '/') {
    return sendHtml(res, 200, '<h1>Könyvtár API</h1>');
  }

  // GET /books
  if (pathname === '/books') {
    return sendJson(res, 200, books);
  }

  // GET /books/genre?g=scifi
  if (pathname === '/books/genre') {
    const g = searchParams.get('g');
    if (!g) {
      return sendJson(res, 400, { error: 'Hiányzó query param: g (pl. g=scifi)' });
    }
    const list = books.filter(b => b.mufaj === g);
    return sendJson(res, 200, list);
  }

  // GET /books/sort?by=ar&dir=desc
  if (pathname === '/books/sort') {
    const by = searchParams.get('by');
    const dir = searchParams.get('dir') || 'asc';

    const validBy = ['ar', 'cim'];
    const validDir = ['asc', 'desc'];

    if (!validBy.includes(by)) {
      return sendJson(res, 400, { error: "Hibás 'by' param. Engedélyezett: ar, cim" });
    }
    if (!validDir.includes(dir)) {
      return sendJson(res, 400, { error: "Hibás 'dir' param. Engedélyezett: asc, desc" });
    }

    const sorted = [...books].sort((a, b) => {
      if (by === 'ar') return a.ar - b.ar;
      // by === 'cim'
      return a.cim.localeCompare(b.cim);
    });
    if (dir === 'desc') sorted.reverse();

    return sendJson(res, 200, sorted);
  }

  // GET /books/stats
  if (pathname === '/books/stats') {
    const ossz = books.length;
    const total = books.reduce((sum, b) => sum + b.ar, 0);
    const atlagAr = ossz ? total / ossz : 0;

    const dbMufajonkent = books.reduce((acc, b) => {
      acc[b.mufaj] = (acc[b.mufaj] || 0) + 1;
      return acc;
    }, {});

    const stats = { ossz, atlagAr, dbMufajonkent };
    return sendJson(res, 200, stats);
  }

  // 404
  return sendJson(res, 404, { error: 'Az útvonal nem található.' });
});

server.listen(port, hostname, () => {
  console.log(`A szerver fut: http://${hostname}:${port}`);
});




