/*

    
🟩 Egyszerű Node.js feladat — "Felhasználó Üdvözlő Szerver"
📌 Feladat:
Készíts Node.js HTTP szervert, ami:

/ → visszaadja:
<h1>Üdv a szerveren!</h1>
/udvozlet?nev=Edina → visszaadja:
Szia Edina, örülök, hogy itt vagy!
/ora → visszaadja az aktuális időt:
Jelenlegi idő: 14:32:10
/404 minden más útvonalra


*/



const http=require('http');
const port=3000;
const hostname='127.0.0.1';
const fs=require('fs');

const server=http.createServer((req,res)=>{

    res.statusCode=200;
    res.setHeader('Content-Type','text/html;charset=utf-8');

    if(req.url==='/'){
        res.statusCode=200;
        res.end('<h1>Üdv a szerveren!</h1>');

    }else if(req.url.startsWith('/udvozlet?nev=')){
        res.statusCode=200;
        const nev = decodeURIComponent(req.url.replace('/udvozlet?nev=', '')).trim();
        res.end(`<h1>Szia ${nev} Örülök, hogy itt vagy!</h1>`);

    }else if(req.url=='/ora'){
        res.statusCode=200;
        const ido=new Date().toLocaleTimeString('hu-HU');
        res.end(`<h1>Jelenlegi idő:${ido}</h1>`);

    }else{
        res.statusCode=404;
        res.end('<h1>Hiba az oldal nem található!</h1>');
    }

});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a : http://${hostname}:${port} címen!`)
});