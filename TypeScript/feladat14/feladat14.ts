/*🟦 3 TypeScript feladat
1) ÁFA számítás + készletes szűrés

Készíts Termek interfészt, és függvényt, ami:

csak a keszleten === true termékeket adja vissza,

és minden elemhez ad egy új mezőt: bruttoAr = ar * 1.27 (két tizedre kerekítve).
*/


// Tipp: filter + map, Number((... ).toFixed(2)).

interface Termek {
  nev: string;
  ar: number;
  keszleten: boolean;
}

type TermekBrutto = Termek & { bruttoAr: number };

function bruttoKeszleten(termekek: Termek[]): TermekBrutto[] {
  // ide írd a megoldást
  const keszleten= termekek.filter((termek)=>termek.keszleten===true);

  const bruttoKeszleten=keszleten.map((termek)=>({...termek, bruttoAr:Number((termek.ar*1.27).toFixed(2))}));

  return bruttoKeszleten;
  



}

const lista: Termek[] = [
  { nev: "Toll", ar: 200, keszleten: true },
  { nev: "Ceruza", ar: 100, keszleten: false },
];

console.log(bruttoKeszleten(lista));
// pl. → [ { nev:"Toll", ar:200, keszleten:true, bruttoAr:254 } ]





/*2) Átlag jegy tantárgy szerint

Grade lista alapján számold ki egy adott tantargy átlagjegyét.
Nincs találat → 0.
*/

//💡 Tipp: filter + reduce + üres-tömb kezelése

interface Grade {
  nev: string;
  tantargy: string;
  jegy: number;
}

function atlagTantargy(lista: Grade[], tantargy: string): number {
  // ide írd a megoldást
  const tantargyjegy=lista.filter((elem)=>elem.tantargy===tantargy);
  if(tantargyjegy.length===0){return 0;};
  const osszeguk=tantargyjegy.reduce((acc,jegy)=>acc+jegy.jegy, 0);
  return osszeguk/tantargyjegy.length;
}
const jegyek: Grade[] = [
  { nev: "Anna", tantargy: "matek", jegy: 5 },
  { nev: "Béla", tantargy: "matek", jegy: 3 },
  { nev: "Csilla", tantargy: "töri", jegy: 4 },
];

console.log(atlagTantargy(jegyek, "matek")); // → 4
console.log(atlagTantargy(jegyek, "bio"));   // → 0




//3) Indexelés Record-dal id szerint

/*Alakíts át egy tömböt Record<number, Item> formára, ahol a kulcs az id.
💡 Tipp: reduce egy üres Record<number, Item>-re.
*/

interface Item {
  id: number;
  nev: string;
}

function indexelesIdSzerint(items: Item[]): Record<number, Item>{
  // ide írd a megoldást

  return items.reduce((acc,item)=>({...acc, [item.id]:item}), {} as Record<number, Item>);  
        
}

console.log(indexelesIdSzerint([
  { id: 10, nev: "A" },
  { id: 20, nev: "B" },
]));
// → { 10: {id:10, nev:"A"}, 20: {id:20, nev:"B"} }


