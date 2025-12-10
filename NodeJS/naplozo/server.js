/*

🟩 Könnyebb Node.js feladat

„Naplózó szerver – mentés fájlba”

Készíts egy egyszerű Node.js HTTP szervert, ami:

/ útvonal:

Válasz:
"<h1>Üdv a naplózó szerveren!</h1>"

/hozzaad útvonal:

Minden híváskor hozzáfűz egy sort egy log.txt fájlhoz.

A sor legyen pl.:
Új kérés érkezett: [aktuális dátum és idő]

Ha a fájl nem létezik, hozd létre.

Siker esetén a böngészőben:
"A napló bejegyzés sikeresen elmentve!"

/log útvonal:

Beolvassa a log.txt fájl tartalmát.

Ha van tartalom, megjeleníti <pre>...</pre> tag-ben.

Ha nincs fájl vagy üres → jelenjen meg:
"Még nincs naplózott adat."

💡 Tipp:

const http = require('http');

const fs = require('fs');

fs.appendFile() vagy fs.writeFile() + flag: 'a'

Mindenhol legyen:
res.setHeader('Content-Type','text/html; charset=utf-8');



*/

const http=require('http');
const hostname='127.0.0.1';
const port=3000;
const fs=require('fs');

const server=http.createServer((req,res)=>{

    res.setHeader('Content-Type','text/html; charset=utf-8');

    // -----------------------
    // /  → Üdvözlő oldal
    // -----------------------
    if(req.url === '/'){
        res.statusCode = 200;
        res.end('<h1>Üdv a naplózó szerveren!</h1>');
    
    // -----------------------
    // /hozzaad  → Log bejegyzés hozzáfűzése
    // -----------------------
    } else if(req.url === '/hozzaad'){
        
        const datumido = new Date().toLocaleString();
        const bejegyzes = `Új kérés érkezett: ${datumido}\n`;

        // FONTOS: appendFile HOZZÁFŰZI, nem felülírja!
        fs.appendFile('log.txt', bejegyzes, 'utf-8', (err)=>{
            if(err){
                res.statusCode = 500;
                res.end('<h1>Hiba a fájl írása közben!</h1>');
                return;
            }

            res.statusCode = 200;
            res.end('<h2>A napló bejegyzés sikeresen elmentve!</h2>');
        });

    
    // -----------------------
    // /log  → Tartalom kiolvasása
    // -----------------------
    } else if(req.url === '/log'){

        const nincsAdat = '<h2>Még nincs naplózott adat.</h2>';

        if (!fs.existsSync('log.txt')){
            res.statusCode = 200;
            res.end(nincsAdat);
            return;
        }

        fs.readFile('log.txt','utf-8',(err,data)=>{
            if(err){
                res.statusCode = 500;
                res.end('<h1>Hiba a fájl olvasása közben!</h1>');
                return;
            }

            if(data.trim() === ""){
                res.statusCode = 200;
                res.end(nincsAdat);
                return;
            }

            res.statusCode = 200;
            res.end(`<h2>Naplófájl tartalma:</h2><pre>${data}</pre>`);
        });


    // -----------------------
    // 404
    // -----------------------
    } else {
        res.statusCode = 404;
        res.end('<h1>Hiba! Az oldal nem található!</h1>');
    }

});

server.listen(port, hostname, ()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen!`);
});


