/* 1 Páros számok átlaga

    Írj egy függvényt, ami visszaadja egy tömb páros számainak átlagát!
    Ha nincs páros szám, a függvény térjen vissza 0-val.
*/


function parosAtlag(tomb: number[]): number{
   const paros= tomb.filter((szam)=>szam % 2===0);
   const osszeguk=paros.reduce((acc:number,curr:number)=>acc+curr,0)
    return osszeguk/paros.length;
}
console.log(parosAtlag([1, 2, 3, 4, 6]));


/*
    2 Fordított szöveg

    Készíts egy függvényt, ami megfordítja a szöveget!
    Ne használd a reverse() metódust — próbáld for-ciklussal is.


*/

//for ciklussal:

function forditott(szoveg: string): string{
    let forditott = "";
    for (let i = szoveg.length - 1; i >= 0; i--) {
        forditott += szoveg[i];
    }
    return forditott;
}
console.log(forditott("kacsa"));//ascak

//reverese() -el:

function forditott2(szoveg: string): string{
    //return szoveg.split("").reduce((acc,curr)=>curr+acc,"");
    return szoveg.split("").reverse().join(""); 

}
console.log(forditott2("kacsa"));//ascak


/*
    Objektumok szűrése

    Készíts függvényt, ami csak azokat a diákokat adja vissza, akiknek az osztályzata legalább 4!


*/




interface Diak {
  nev: string;
  jegy: number;
}
function joDiakok(lista: Diak[]): Diak[]{
    const jegyek=lista.filter((diak)=>diak.jegy >= 4);
    return jegyek;
}
console.log(joDiakok([
  { nev: "Anna", jegy: 5 },
  { nev: "Béla", jegy: 3 },
  { nev: "Csilla", jegy: 4 }
]));

