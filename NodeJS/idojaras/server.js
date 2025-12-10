/*  


    🟩 Egyszerű Node.js feladat
    „Időjárás API nélküli mini-szerver (statikus adatokkal)”

    Feladat:
    Készíts egy Node.js HTTP szervert, amely 3 útvonalat kezel:

    1️⃣ /

    Válasz:

    <h1>Üdv az Időjárás szerveren!</h1>

    2️⃣ /idojaras

    A szerver adjon vissza statikus időjárás adatot JSON-ben:

    {
      "varos": "Budapest",
      "homerseklet": 26,
      "allapot": "napos"
    }

    A Content-Type legyen:

    application/json; charset=utf-8

    3️⃣ /homerseklet?fok=25

    Query paramétert kapsz: fok.

    A szerver válaszoljon:

    <h2>A megadott hőmérséklet: 25°C</h2>


    Ha nincs megadva paraméter:

    <h2>Nincs megadva hőmérséklet!</h2>

    Követelmények:

    Használd a http modult.

    Mindenhol állítsd be a Content-Type-ot.

    A JSON-t JSON.stringify()-vel küldd vissza.

    A query-t (?fok=25) a URL objektummal vagy split-tel is megoldhatod.

    ✨ Extra (nem kötelező):
    Ha valaki /nemletezik URL-t ír, a szerver válaszoljon:

    <h1>404 – Az oldal nem található</h1>




*/


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//Profi megoldással így kell:

const server = http.createServer((req, res) => {
  // Hozzunk létre egy URL objektumot a bejövő kérésből
  const fullUrl = new URL(req.url || '/', `http://${hostname}:${port}`);
  const path = fullUrl.pathname;          // pl. "/", "/idojaras", "/homerseklet"
  const params = fullUrl.searchParams;    // query paraméterek: ?fok=25

  // Helper a headerhez
  const sendHtml = (status, content) => {
    res.statusCode = status;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(content);
  };

  const sendJson = (status, obj) => {
    res.statusCode = status;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(obj));
  };

  // 1️⃣ Kezdőlap
  if (path === '/') {
    return sendHtml(200, '<h1>Üdv az Időjárás szerveren!</h1>');
  }

  // 2️⃣ /idojaras – statikus JSON
  if (path === '/idojaras') {
    const adat = {
      varos: 'Budapest',
      homerseklet: 26,
      allapot: 'napos'
    };
    return sendJson(200, adat);
  }

  // 3️⃣ /homerseklet?fok=25
  if (path === '/homerseklet') {
    const fok = params.get('fok');  // pl. "25" vagy null

    if (!fok) {
      return sendHtml(200, '<h2>Nincs megadva hőmérséklet!</h2>');
    }

    // opcionális: ellenőrizhetjük, hogy szám-e
    const fokSzam = Number(fok);
    if (Number.isNaN(fokSzam)) {
      return sendHtml(200, '<h2>Érvénytelen hőmérséklet!</h2>');
    }

    return sendHtml(200, `<h2>A megadott hőmérséklet: ${fokSzam}°C</h2>`);
  }

  // 4️⃣ 404 – minden egyéb útvonal
  return sendHtml(404, '<h1>404 – Az oldal nem található</h1>');
});

server.listen(port, hostname, () => {
  console.log(`A szerver fut: http://${hostname}:${port}`);
});
