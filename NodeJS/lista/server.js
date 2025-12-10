/*

    🟩 1 Node.js feladat:
    🧾 Terméklista JSON-ból

    Hozz létre egy Node.js szervert, ami:

    A / útvonalon ezt írja ki:
    👉 „Üdv a terméklistán!”

    A /termekek útvonalon létrehoz egy termekek.json fájlt ezzel a tartalommal:

    [
        { "nev": "Toll", "ar": 200 },
        { "nev": "Ceruza", "ar": 100 },
        { "nev": "Füzet", "ar": 300 }
    ]


    Ezután olvassa vissza a fájlt, és írja ki a böngészőbe(formázott HTML-ben):
    A fájl sikeresen létrejött!
    Toll - 200 Ft
    Ceruza - 100 Ft
    Füzet - 300 Ft


    💡 Tipp:

    const fs = require('fs');

    JSON.stringify()

    JSON.parse()

    fs.writeFile() + fs.readFile()

    res.setHeader('Content-Type','text/html;charset=utf-8');
*/


const http= require('http');
const fs=require ('fs');
const port=3000;
const hostname='127.0.0.1';


const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8');
   

    if(req.url==='/'){
     
        res.statusCode=200;
        res.end('<h1>Üdv a terméklistán!</h1>');


    }else if(req.url==='/termekek'){
     

        const termekek=[
            { "nev": "Toll", "ar": 200 },
            { "nev": "Ceruza", "ar": 100 },
            { "nev": "Füzet", "ar": 300 }
        ];

        const jsonAdat=JSON.stringify(termekek,null,2);//visszaalakítja formázott JSON szöveggé, szépen behúzva
            //(a 2 jelenti, hogy 2 szóköznyi behúzást használjon)

        // ✅ Fájl megírása létrehozása:

        fs.writeFile('termekek.json',jsonAdat,'utf-8',(err)=>{
            
            if(err){
                res.statusCode=500;
                res.end('<h2>Hiba a fájl írása közben</h2>');
                return;

            }
            // ✅ Fájl olvasása:
            fs.readFile('termekek.json','utf-8',(err,data)=>{
                if(err){
                    res.statusCode=500;
                    res.end('Hiba a fájl olvasása közben');
                    return;
                }

                const lista=JSON.parse(data);//objektummá alakítja (ez lesz egy tömb, benne 3 termékkel)
                // ✅ HTML formázott kimenet:
                const megjelenit=lista.map(termek=>`${termek.nev}-${termek.ar} Ft`).join('<br>');//név és ár külön sorban

                res.statusCode=200;
                res.end(`<h3>A fájl sikeresen létrejött </h3><p>${megjelenit}</p>`);
            });
          
        });

    }else{
        res.statusCode=404;
        res.end('<h1>404-Hiba , az oldal nem található!</h1>');
    }
});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen!`)
})