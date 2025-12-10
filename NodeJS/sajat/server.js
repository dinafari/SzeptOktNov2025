const http=require ('http');
const port=3000;
const hostname='127.0.0.1';

const fs=require ('fs');

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html; charset=utf-8');

    if(req.url==='/'){
        res.statusCode=200;
        res.end('<h1>Üdvözöllek</h1>');

    }else if(req.url==='/konyvek'){
        res.statusCode=200;
        res.end('<h1>Új könvek érkeztek</h1>');

    }else if(req.url==='/kiirat'){

        fs.writeFile('konyvek.txt','J.K. Rowling:Harry Potter: A bölcsek köve, \n J.K. Rowling:Harry Potter: A tűz serlege','utf-8',(err)=>{

            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a fájl írása közben!</h1>');
                return;
            }
            fs.readFile('konyvek.txt','utf-8',(err,data)=>{
                if(err){
                    res.statusCode=500;
                    res.end('<h1>Hiba a fájl olvasása közben!</h1>');
                    return;

                }

                
                res.statusCode=200;
                res.end(`<h2> A konyvek.txt sikeresen létrejött </h2><pre>${data}</pre> `)

            });

        });




    }else{
        res.statusCode=404;
        res.end('<h1>Hiba ,az oldal nem található!</h1>');
    }

});

server.listen(port,hostname,()=>{
    console.log(`A szerver a http://${hostname}:${port} címen fut`);
});