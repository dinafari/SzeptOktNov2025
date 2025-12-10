const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

function sendHtml(res, status, html) {
  res.writeHead(status, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
}

function sendText(res, status, text) {
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(text);
}

// ✅ Ha JSON választ is küldesz, definiálni kell a sendJson-t
function sendJson(res, status, obj) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(obj, null, 2));
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const { pathname, searchParams } = url;

  // ❗ 1) sendJson függvényt eddig nem definiáltad, ezért hozzáadtam (különben hiba lenne)
  if (req.method !== 'GET') {
    return sendJson(res, 405, { error: 'Csak GET támogatott.' });
  }

  // ✅ 2) A főoldal
  if (pathname === '/') {
    return sendHtml(res, 200, '<h1>Üdvözöl a Node.js szerveren!</h1>');
  }

  // ✅ 3) /ora útvonal (idő ISO formátumban)
  if (pathname === '/ora') {
    const datum = new Date().toISOString();
    return sendText(res, 200, datum);
  }

  // ✅ 4) /udvozlet?nev=Edina
  if (pathname === '/udvozlet') {
    const nev = (searchParams.get('nev') || '').trim();
    const uzenet = nev ? `Szia, ${nev}!` : 'Szia, ismeretlen látogató!';
    return sendHtml(res, 200, `<h1>${uzenet}</h1>`);
  }

  // ✅ 5) 404-es válasz
  return sendHtml(res, 404, '<h1>Hiba, a keresett oldal nem található!</h1>');
});

server.listen(port, hostname, () => {
  console.log(`A szerver fut: http://${hostname}:${port}`);
});

