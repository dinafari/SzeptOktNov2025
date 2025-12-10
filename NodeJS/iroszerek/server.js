/*  

    🟩 1 Node.js feladat:iroszerek bolt szorgalmi volt
    Termékek JSON → fájl + visszaolvasás + összár

    Készíts Node.js szervert, ami:

    / → kiírja: „Üdv a termékoldalon!”

    /termekek →

    létrehoz egy termekek.json fájlt az alábbi tömbbel,

    visszaolvassa,

    a böngészőben megjeleníti soronként Név - Ár Ft, és alul Összesen: X Ft.

    Adat:

    [
    { "nev": "Toll", "ar": 200 },
    { "nev": "Ceruza", "ar": 100 },
    { "nev": "Füzet", "ar": 300 }
    ]


    Elvárt HTML kimenet kb.:

    A fájl sikeresen létrejött!
    Toll - 200 Ft
    Ceruza - 100 Ft
    Füzet - 300 Ft
    Összesen: 600 Ft


    💡 Tipp: http.createServer, fs.writeFile, fs.readFile, JSON.stringify/parse, res.setHeader('Content-Type','text/html; charset=utf-8').



*/



const http=require('http');
const hostname='127.0.0.1';
const port=3000;
const fs=require('fs');

const server= http.createServer((req,res)=>{

    res.setHeader('Content-Type','text/html;charset=utf-8');
    if(req.url==='/'){
        res.statusCode=200;
        res.end('<h1>Üdv a termékoldalon!</h1>');

    }else if(req.url==='/termekek'){

        const termekek=[ { "nev": "Toll", "ar": 200 },
            { "nev": "Ceruza", "ar": 100 },
            { "nev": "Füzet", "ar": 300 }
        ];

        const jsonKeszlet=JSON.stringify(termekek,null,2);
        
        fs.writeFile('keszlet.json',jsonKeszlet,'utf-8',(err)=>{

              
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a fájl írása közben!</h1>');
                return;
            }
            fs.readFile('keszlet.json','utf-8',(err,data)=>{

                if(err){
                    res.statusCode=500;
                    res.end('<h1>Hiba a fájl olvasása közben!</h1>');
                    return;

                };
                const lista=JSON.parse(data);
               
                const nevarsorban=lista.map(termek=>`${termek.nev}-${termek.ar} -Ft`).join('<br>');
                const osszes=lista.reduce((acc,termek)=>acc+termek.ar,0);

                res.statusCode=200;
                res.end(`<h3>A fájl sikeresen létrejött</h3>${nevarsorban}<br><br><strong>Összesen:${osszes} Ft</strong>`);
               

            });

        });

      
    }else{
        res.statusCode=404;
        res.end('<h1>Hiba, az oldal nem található!</h1>');
    }



});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen!`);
});