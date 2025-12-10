/*🟦 3 TypeScript feladat
🧮 1️⃣ Minimum és maximum visszaadása objektumban

Készíts függvényt, ami egy számtömbből visszaadja a legkisebb és legnagyobb értéket egy objektumban.*/

function minMax(tomb: number[]): { min: number; max: number } {
  // ide írd a megoldást

  const max=Math.max(...tomb);
  const min=Math.min(...tomb);
  return {min:min, max:max};

}

console.log(minMax([4, 2, 8, 1, 9])); // → { min: 1, max: 9 }


//💡 Tipp: Math.min(...tomb), Math.max(...tomb).

/*👩‍💼 2️⃣ Dolgozók keresése beosztás szerint

Készíts Dolgozo interfészt és egy függvényt, ami visszaadja az adott beosztású dolgozókat.*/

interface Dolgozo {
  nev: string;
  beosztas: string;
  fizetes: number;
}

function dolgozokBeosztasSzerint(lista: Dolgozo[], beosztas: string): Dolgozo[] {
  // ide írd a megoldást

  const beosztasa=lista.filter((dolgozo)=>dolgozo.beosztas===beosztas);
  return beosztasa;
}

const dolgozok: Dolgozo[] = [
  { nev: "Anna", beosztas: "Fejlesztő", fizetes: 600000 },
  { nev: "Béla", beosztas: "HR", fizetes: 400000 },
  { nev: "Csilla", beosztas: "Fejlesztő", fizetes: 700000 },
];

console.log(dolgozokBeosztasSzerint(dolgozok, "Fejlesztő"));// → [{Anna...}, {Csilla...}]
console.log(dolgozokBeosztasSzerint(dolgozok, "HR"));//  [{ nev: "Béla", beosztas: "HR", fizetes: 400000 }],



//💡 Tipp: filter().

/*📦 3️⃣ Raktárkészlet – összérték kiszámítása

Készíts Termek interfészt, és egy függvényt, ami visszaadja a készleten lévő termékek összértékét (ar × db).*/
//💡 Tipp: filter() + reduce().

interface Termek {
  nev: string;
  ar: number;
  db: number;
  keszleten: boolean;
}

function osszertekKeszleten(lista: Termek[]): number {
  // ide írd a megoldást
  const keszleten=lista.filter((termek)=>termek.keszleten===true)
  .reduce((osszeg,termek)=>osszeg+(termek.ar*termek.db),0);
  return keszleten;

 
 
}

const termekek: Termek[] = [
  { nev: "Toll", ar: 200, db: 10, keszleten: true },
  { nev: "Ceruza", ar: 100, db: 5, keszleten: false },
  { nev: "Füzet", ar: 300, db: 7, keszleten: true },
];

console.log(osszertekKeszleten(termekek)); // → 200*10 + 300*7 = 4100 



