/*🟦 3 könnyebb TypeScript feladat
1️⃣ Negatív számok összege

Írj függvényt, ami egy számtömbből összeadja a negatív számokat.
Ha nincs negatív, térjen vissza 0-val.
*/

function negativOsszeg(tomb: number[]): number {
  // ide írd a megoldást
 
  
  const negativ=tomb.filter((szam)=>szam<0)
  if(negativ.length===0)return 0;
  return negativ.reduce((acc,curr)=>acc+curr,0);

}

console.log(negativOsszeg([1, -2, 3, -4]));  // → -6
console.log(negativOsszeg([1, 2, 3]));       // → 0

/*2️⃣ Diákok neveinek listája

Készíts egy Diak interfészt, majd egy függvényt, ami csak a diákok neveit adja vissza.
*/

interface Diak {
  nev: string;
  jegy: number;
}

function diakNevek(lista: Diak[]): string[] {
  // ide írd a megoldást

  const nevek=lista.map((diak)=>diak.nev);
  return nevek;
}

console.log(diakNevek([
  { nev: "Anna", jegy: 5 },
  { nev: "Béla", jegy: 3 }
])); // → ["Anna", "Béla"]


/*3️⃣ Termékek – minimum ár szűrése

Készíts Termek interfészt, majd írj függvényt, ami csak azokat a termékeket adja vissza,
amelyeknek az ára legalább minAr.
*/

interface Termek {
  nev: string;
  ar: number;
}

function minArFelett(termekek: Termek[], minAr: number): Termek[] {
  // ide írd a megoldást
  const eredmeny=termekek.filter((termek)=>termek.ar >=minAr);
  return eredmeny;
}

console.log(minArFelett(
  [{nev:"Toll", ar:200}, {nev:"Táska", ar:5000}],
  1000
)); // → [{nev:"Táska", ar:5000}]

/*


    
🧠 2 picit nehezebb TypeScript feladat
4️⃣ Diákok csoportosítása jegy szerint

Készíts Diak interfészt, majd egy függvényt, ami a diákokat
jegy szerint csoportosítja: Record<number, Diak[]>.
*/

interface Diak {
  nev: string;
  jegy: number;
}




function csoportositasJegySzerint(lista: Diak[]): Record<number, Diak[]> {

  // ide írd a megoldást

  return lista.reduce((acc, diak) => {
    
    if (!acc[diak.jegy]) {
      acc[diak.jegy] = [];     // ha még nincs ilyen kulcs, létrehozzuk
    }

    acc[diak.jegy].push(diak); // hozzáadjuk a diákot a tömbhöz

    return acc;
  }, {} as Record<number, Diak[]>);
  
  
  
  

 
   
}
const diakok: Diak[] = [
  { nev: "Anna", jegy: 5 },
  { nev: "Béla", jegy: 3 },
  { nev: "Csilla", jegy: 5 },
];

console.log(csoportositasJegySzerint(diakok));
// → { 3: [{Béla...}], 5: [{Anna...}, {Csilla...}] }

/*5️⃣ Termékek indexelése név szerint

Készíts Termek interfészt, majd függvényt, ami a termékekből
Record<string, Termek> objektumot csinál, ahol a kulcs a nev.
*/

interface Termek {
  nev: string;
  ar: number;
}

function indexNevSzerint(termekek: Termek[]): Record<string, Termek> {
  // ide írd a megoldást
  return termekek.reduce((acc,termek)=>({...acc, [termek.nev]:termek}),{} as  Record<string, Termek>);
}

console.log(indexNevSzerint([
  { nev: "Toll", ar: 200 },
  { nev: "Füzet", ar: 300 },
]));

// → { Toll: {nev:"Toll", ar:200}, Füzet: {nev:"Füzet", ar:300} }





