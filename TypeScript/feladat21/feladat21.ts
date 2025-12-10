/*  
    🟦 TypeScript – 3 könnyebb feladat
    1️⃣ Számok átlaga

    Írj függvényt:



    Ami visszaadja a tömb elemeinek átlagát.
    Üres tömb esetén térjen vissza 0-val.




*/



function atlag(t: number[]): number {
  // ide írd a megoldást
  if(t.length===0)return 0;
  const osszeguk=t.reduce((acc,curr)=>acc+curr,0);
  return osszeguk/t.length;
}

//Példák:

console.log(atlag([1,2,3,4])); // → 2.5
console.log(atlag([]));        // → 0


/*     2️⃣ Diákok – csak bukottak 

    Ami csak azokat a diákokat adja vissza, akiknek a jegye < 2.
    Tipp: filter().

*/

interface Diak {
  nev: string;
  jegy: number;
}


//Írj függvényt:

function bukottDiakok(lista: Diak[]): Diak[] {
  // ide írd a megoldást
  const bukottd=lista.filter((diak)=>diak.jegy<2);
  return bukottd;
}
//Példák:

const diakok: Diak[] = [
  { nev: "Anna", jegy: 5 },
  { nev: "Béla", jegy: 1 },
  { nev: "Csilla", jegy: 2 },
];

console.log(bukottDiakok(diakok));
// → [ { nev:"Béla", jegy:1 } ]


/*
    3️⃣ Termékek – darabszám összegzése
    Ami visszaadja az összes termék db mezőjének összegét.

    Tipp: reduce() vagy sima for.


*/
interface Termek{
    nev:string;
    db:number;
}


const lista2:Termek[]=[
    { nev:"Toll", db:10 },
    { nev:"Füzet", db:5 },
];

function osszDarab(termekek:Termek[]):number{
    // ide írd a megoldást

    const dbok=termekek.map((termek)=>termek.db);
    const osszeguk=dbok.reduce((acc,curr)=>acc+curr,0);

    return osszeguk;
    //vagy csak ennyi: return termekek.reduce((acc, termek) => acc + termek.db, 0);

}
//Példák:
console.log(osszDarab(lista2)); // → 15
console.log(osszDarab([]));    // → 0


/*     
    
    🧠 TypeScript – 2 nehezebb feladat
    4️⃣ Raktár – készleten lévő összérték

    
    Írj függvényt:
    Ami:

    csak ott számol, ahol keszleten === true

    és összeadja az ar * db értékeket.


    Tipp: először filter() a készletesekre, aztán reduce() ar * db-re.


*/


interface RaktarTermek {
  nev: string;
  ar: number;
  db: number;
  keszleten: boolean;
}


function keszletOsszertek(lista: RaktarTermek[]): number {
  // ide írd a megoldást

  //const keszleten=lista.filter((termek)=>termek.keszleten===true);
  const arszordb=lista.filter((termek)=>termek.keszleten===true).reduce((acc,termek)=>acc+(termek.ar*termek.db),0 );
  return arszordb;


}

//Példa:

const raktar: RaktarTermek[] = [
  { nev:"Toll", ar:200, db:10, keszleten:true },   // 2000
  { nev:"Ceruza", ar:100, db:5, keszleten:false }, // 0
  { nev:"Füzet", ar:300, db:7, keszleten:true },   // 2100
];

console.log(keszletOsszertek(raktar)); // → 4100


/*
    5️⃣ Felhasználók indexelése e-mail szerint

  

    Írj függvényt:

    
    Ami egy Record<string, Felhasznalo> objektumot ad vissza,
    ahol a kulcs az email.


    Tipp: reduce() + egy üres {} mint Record<string, Felhasznalo>.


*/

//Interfész:

interface Felhasznalo {
  id: number;
  nev: string;
  email: string;
}

//Példa:

const userek: Felhasznalo[] = [
  { id:1, nev:"Anna", email:"anna@example.com" },
  { id:2, nev:"Béla", email:"bela@example.com" },
];






function indexEmailSzerint(lista: Felhasznalo[]): Record<string, Felhasznalo> {
  // ide írd a megoldást
  const emailcim:Record<string, Felhasznalo>={};
  
    return lista.reduce((acc, user) => {acc[user.email] = user; return acc;   }, emailcim);

}
console.log(indexEmailSzerint(userek));
// → {
//   "anna@example.com": { id:1, nev:"Anna", ... },
//   "bela@example.com": { id:2, nev:"Béla", ... }
// }




