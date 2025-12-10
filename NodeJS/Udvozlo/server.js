const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (req.url === '/') {
    res.end('<h1>Üdvözöl a Node.js szerveren!</h1>');
  }

  else if (req.url === '/ora') {
    const datum = new Date().toString();
    res.end(`<p>${datum}</p>`);
  }

  // ha pontosan /udvozlet
  else if (req.url === '/udvozlet') {
    res.end('<h1>Szia, ismeretlen látogató!</h1>');
  }

  // ha /udvozlet/... (pl. /udvozlet/Edina)
  else if (req.url.startsWith('/udvozlet/')) {
    const nev = decodeURIComponent(req.url.replace('/udvozlet/', '')).trim();
    const uzenet = nev ? `Szia, ${nev}!` : 'Szia, ismeretlen látogató!';
    res.end(`<h1>${uzenet}</h1>`);
  }

  else {
    res.statusCode = 404;
    res.end('<h1>Hiba: az oldal nem található!</h1>');
  }
});

server.listen(port, hostname, () => {
  console.log(`A szerver fut: http://${hostname}:${port}`);
});


/*


    ha /udvozlet/... (pl. /udvozlet/Edina)

    else if (req.url.startsWith('/udvozlet/')) {
    const nev = decodeURIComponent(req.url.replace('/udvozlet/', '')).trim();
    const uzenet = nev ? `Szia, ${nev}!` : 'Szia, ismeretlen látogató!';
    res.end(`<h1>${uzenet}</h1>`);
  }

    Miért működik ez így jól?

    req.url egy egyszerű szöveg, ezért elég === és startsWith() vizsgálatokat csinálni.

    A replace('/udvozlet/', '') eltávolítja az elejét, így megkapod a név részt.

    decodeURIComponent() azért kell, ha a névben ékezet vagy szóköz van (pl. /udvozlet/Kiss%20Béla → Kiss Béla).



*/