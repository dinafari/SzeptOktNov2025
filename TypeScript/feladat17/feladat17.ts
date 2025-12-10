/*
    1️⃣ Negatív számok darabszáma

    Készíts függvényt, ami megszámolja, hány negatív szám van egy számtömbben.

    Példa:

    negativDb([-3, 5, -1, 0]) → 2





*/

function negativDb(tomb:number[]):number{
    
    let db=0;

    for(let i=0;i<tomb.length;i++){

        
      if(tomb[i]<0){
        db++;
      }
    }
    return db;
}
console.log(negativDb([-3, 5, -1, 0]));


/*
    2️⃣ Diákok lekérése minimum jegy szerint

Interfész:

interface Diak {
  nev: string;
  jegy: number;
}


Feladat: add vissza azokat, akiknek a jegye ≥ minJegy.

Példa:

joDiakok([{nev:"Anna", jegy:4}, {nev:"Béla", jegy:2}], 3)
→ [{nev:"Anna", jegy:4}]




*/

interface Diak {
  nev: string;
  jegy: number;
}


function joDiakok(lista:Diak[],minJEgy:number):Diak[]{

    const eredmeny=lista.filter((diak)=>diak.jegy>=minJEgy);
 
    return eredmeny;

}
console.log(joDiakok([{nev:"Anna", jegy:4}, {nev:"Béla", jegy:2}], 3));



/*
    
3️⃣ Terméknevek listázása

Interfész:

interface Termek {
  nev: string;
  ar: number;
}


Feladat: térj vissza csak a termékek neveit tartalmazó tömbbel.

Példa:

termekNevek([{nev:"Toll", ar:200}, {nev:"Füzet", ar:300}])
→ ["Toll", "Füzet"]




*/



interface Termek {
  nev: string;
  ar: number;
}

function termekNevek(termekek:Termek[]):string[]{
    const nevek=termekek.map((termek)=>termek.nev);
    return nevek;
}
console.log(termekNevek([{nev:"Toll", ar:200}, {nev:"Füzet", ar:300}]));