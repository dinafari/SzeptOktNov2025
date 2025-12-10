/*🟦 1) Pozitív számok összege

Feladat:
Írj egy függvényt, ami egy számtömbből csak a pozitív számokat adja össze.
Ha nincs pozitív szám, térjen vissza 0-val.

function pozitivOsszeg(tomb: number[]): number {
  // ide írd a megoldást
}

// Példák:
console.log(pozitivOsszeg([1, -2, 3, 4, -5])); // → 8
console.log(pozitivOsszeg([-2, -4, -6]));      // → 0 
// */


function pozitivOsszeg(tomb: number[]): number{
  // ide írd a megoldást
  const pozitiv=tomb.filter((szam)=>szam>0);

  if(pozitiv.length===0) return 0;

  return pozitiv.reduce((acc,curr)=>acc+curr,0);

}
console.log(pozitivOsszeg([1, -2, 3, 4, -5]));// → 8
console.log(pozitivOsszeg([-2, -4, -6]));//→ 0


/*🟦 2) Szavak szűrése hossz alapján

Feladat:
Írj egy függvényt, ami csak azokat a szavakat adja vissza a tömbből,
amelyek hossza legalább minHossz.

function hosszabbMint(szavak: string[], minHossz: number): string[] {
  // ide írd a megoldást
}

// Példák:
console.log(hosszabbMint(["alma", "banán", "körte"], 5)); // → ["banán", "körte"]
console.log(hosszabbMint(["pi", "fa", "asztal"], 3));     // → ["asztal"]*/

function hosszabbMint(szavak: string[], minHossz: number): string[] {
  // ide írd a megoldást
  const eredmeny=szavak.filter((szo)=>szo.length>=minHossz);



  return eredmeny;


}
console.log(hosszabbMint(["alma", "banán", "körte"], 5)); // → ["banán","körte"]
console.log(hosszabbMint(["pi", "fa", "asztal"], 3));     // → ["asztal"]


/*
    
 3) Egyszerű Termék átlagár (csak készleten lévők)

Feladat:
Készíts egy Termek interfészt, majd egy függvényt, ami:

csak azokat nézi, ahol keszleten === true

visszaadja a készleten lévő termékek átlagárát

ha nincs készleten lévő termék → térjen vissza 0-val

interface Termek {
  nev: string;
  ar: number;
  keszleten: boolean;
}

function atlagArKeszleten(termekek: Termek[]): number {
  // ide írd a megoldást
}

const lista: Termek[] = [
  { nev: "Toll", ar: 200, keszleten: true },
  { nev: "Ceruza", ar: 100, keszleten: false },
  { nev: "Füzet", ar: 300, keszleten: true },
];

// Példák:
console.log(atlagArKeszleten(lista));    // → 250 ( (200+300)/2 )
console.log(atlagArKeszleten([]));       // → 0


*/

interface Termek{
    nev:string;
    ar:number;
    keszleten:boolean;
}
const lista:Termek[]=[
    { nev: "Toll", ar: 200, keszleten: true },
    { nev: "Ceruza", ar: 100, keszleten: false },
    { nev: "Füzet", ar: 300, keszleten: true },
    
];



function atlagArKeszleten(termekek: Termek[]): number {
  // ide írd a megoldást
  const keszleten=termekek.filter((termek)=>termek.keszleten===true);
  if(keszleten.length===0){return 0};
  const osszeguk=keszleten.reduce((acc,curr)=>acc+curr.ar,0);
  return osszeguk/keszleten.length;


}
console.log(atlagArKeszleten(lista));// → 250
console.log(atlagArKeszleten([])); // → 0
