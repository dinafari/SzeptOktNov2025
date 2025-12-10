/*      🟩 1 Node.js feladat
    Fájlkezelés + szerver

    Hozz létre egy Node.js szervert, ami:

    a gyökér / útvonalon kiírja: „Üdvözöllek a termékoldalon!”

    a /termekek útvonalon létrehoz egy termekek.txt fájlt, amiben ez álljon:

    Termék: Alma, Ár: 250
    Termék: Körte, Ár: 300


    majd megjeleníti: „A fájl sikeresen létrejött!”

    💡 Tipp:

    const fs = require('fs');
    const http = require('http');
*/




const http=require('http');
const hostname='127.0.0.1';
const port=3000;
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8');
    

    if (req.url==='/'){
        res.statusCode=200;
        res.end('<h1>Üdvözöllek a termékoldalon</h1>');

    }else if(req.url==='/termekek'){

        fs.writeFile('termekek.txt','Termék: Alma, Ár: 250 \n Termék: Körte, Ár: 300','utf-8',(err)=>{
            //új sor jele backslash (\n),
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a fájl írása közben!</h1>');
                return;
            }

            fs.readFile('termekek.txt','utf-8',(err,data)=>{

                if(err){
                    res.statusCode=500;
                    res.end('<h1>Hiba a fájl írása közben!</h1>');
                    return;
                }

                res.statusCode=200;
                res.end(`<h2>A fájl sikeresen létrejött!</h2><pre>${data}</pre>`);


            });


        });

    }else{
        res.statusCode=404;
        res.end('<h1>Hiba a kért oldal nem található!</h1>');
    }



   

});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen!`);
});