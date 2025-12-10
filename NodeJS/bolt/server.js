const http=require ('http');
const hostname='127.0.0.1';
const port=3000;
const fs=require ('fs');

const server=http.createServer((req,res)=>{

    res.setHeader('Content-Type','text/html;charset=utf-8');

    if(req.url==='/vevo'){
        res.statusCode=200;
        res.end('<h1>Üdvözöllek vevő!</h1>');
        

    }else if(req.url==='/lista'){
      
        fs.writeFile('lista.txt','Alma: 200, Származása:Chile \n Banán: 700, Származása: Brazília','utf-8',(err)=>{
            if(err){
                res.statusCode=500;
                res.end('<h2>Hiba a fájl írása közben!</h2>');
                return;
            }
            fs.readFile('lista.txt','utf-8',(err,data)=>{
                if(err){
                    res.statusCode=500;
                    res.end('<h2>Hiba a fájl olvasása közben!</h2>');
                    return;
                }
             

                res.statusCode=200;
                res.end(`<h2>A lista.txt fájl sikeresen létrejött!</h2><pre>${data}</pre>`);//pre megőrzi a sortöréseket

            });

        });






    }else if(req.url==='/raktar'){

        const raktarkeszleten=[
            {"nev":"Kenyer", "ar":800},
            {"nev":"Olajbogyó", "ar":1600},
            {"nev":"Paradicsom", "ar":900},
        ];

        const jsonKeszlet=JSON.stringify(raktarkeszleten,null,2);


        fs.writeFile('keszlet.json',jsonKeszlet,'utf-8',(err)=>{
                    
            if(err){
                res.statusCode=500;
                res.end('<h2>Hiba a fájl írása közben!</h2>');
                return;
        
            }
            // ✅ Fájl olvasása:
            fs.readFile('keszlet.json','utf-8',(err,data)=>{
                if(err){
                    res.statusCode=500;
                    res.end('Hiba a fájl olvasása közben!');
                    return;
                }
        
                const termeklista=JSON.parse(data);//objektummá alakítja (ez lesz egy tömb, benne 3 termékkel)
                // ✅ HTML formázott kimenet:
                const megjelenites=termeklista.map(termek=>`${termek.nev}-${termek.ar} Ft`).join('<br>');//név és ár külön sorban
        
                res.statusCode=200;
                res.end(`<h3>A fájl sikeresen létrejött!</h3><p>${megjelenites}</p>`);
            });
                  
        });





       
    }else{
        res.stausCode=404;
        res.end('<h1>Hiba,az oldal nem található!</h1>');

    }





});

server.listen(port,hostname,()=>{
    console.log(`A Szerver a http://${hostname}:${port} címen fut`)
});