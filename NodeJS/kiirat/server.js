/* 
    1.Feladat:
    Hozz létre egy Node.js szervert, ami:

    a gyökér útvonalon (/) kiírja:
     „Üdvözöllek az értékelő oldalon!”

    a /jegyek útvonalon hozzon létre egy fájlt jegyek.txt néven, amiben ez álljon:

    Tanuló: Anna, Jegy: 5
    Tanuló: Béla, Jegy: 4


    majd a böngészőben jelenítse meg:
   „A jegyek.txt fájl sikeresen létrejött!”

    Tipp: használd az fs.writeFileSync() és a http.createServer() modulokat.

*/



const http=require('http');
const port=3000;
const hostname='127.0.0.1';
const fs = require('fs');


const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8');
    

    if(req.url==='/'){
        res.statusCode=200;
        res.end('<h1>Üdvözöllek az értékelő oldalon!</h1>');


    }else if(req.url==='/jegyek'){
        //

        fs.writeFile('jegyek.txt',  'Tanuló: Anna, Jegy: 5\nTanuló: Béla, Jegy: 4','utf-8',(err)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a fájl írása közben</h1>')
                return;

            }
            fs.readFile('jegyek.txt','utf-8',(err,data)=>{
                if(err){
                    res.statusCode=500;
                    res.end('<h1>Hiba a fájl olvasása közben!</h1>');
                    return;
                }

                res.statusCode=200;
                res.end(`<h2>A jegyek.txt fájl sikeresen létrejött!</h2><pre>${data}</pre>`);



            });


        });

        
        
       

    }else{
        res.statusCode=404;
        res.end('<h1>Hiba ,az oldal nem található!!</h1>')
    }
    


});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen!`);
});

