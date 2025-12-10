/*
    1️⃣ Páros számok összege

    Írj függvényt, ami egy számtömbből összeadja a páros számokat.
    Ha nincs páros szám, térjen vissza 0-val.
*/

    function parosOsszeg(tomb: number[]): number {
        // ide írd a megoldást
        const parosok= tomb.filter((szam)=>szam %2===0);
        if(parosok.length===0)return 0;
        return parosok.reduce((acc,curr)=>acc+curr,0);
    }

    //Példák:
    console.log(parosOsszeg([1, 2, 3, 4, 6])); // → 12
    console.log(parosOsszeg([1, 3, 5])); 

/*
    2️⃣ Diákok – csak átmentek

    Készíts egy Diak interfészt, majd függvényt, 
    ami csak azokat a diákokat adja vissza, akiknek a jegye legalább 4.



*/
interface Diak{
    nev:string;
    jegy:number;
}
const diakok:Diak[]=[
    {nev:"Anna",jegy:5},
    { nev: "Béla", jegy: 3 },
    { nev: "Csilla", jegy: 4 },
];


function atmentDiakok(lista: Diak[]): Diak[] {
  // ide írd a megoldást
  const legalabbnegy=lista.filter((diak)=>diak.jegy>=4);
  return legalabbnegy;
}
//Példa:
console.log(atmentDiakok(diakok));
// → [ {Anna,5}, {Csilla,4} ]

/*
    3️⃣ Termékek – olcsóbb, mint X

    Készíts Termek interfészt, majd függvényt, ami csak azokat a termékeket 
    adja vissza, amelyeknek az ára szigorúan kisebb, mint maxAr.




*/
interface Termek{
    nev:string;
    ar:number;

}
const lista:Termek[]=[
    { nev: "Toll", ar: 200 },
  { nev: "Füzet", ar: 350 },
  { nev: "Táska", ar: 5000 },

];


function olcsobbMint(termekek:Termek[],maxAr:number):Termek[]{
    // ide írd a megoldást
    const kisebbmax=termekek.filter((termek)=>termek.ar < maxAr);
    return kisebbmax;

}
console.log(olcsobbMint(lista,400));
// → [{Toll...}, {Füzet...}]

/*4️⃣ Vásárlások csoportosítása név szerint

    Készíts egy Vasarlas interfészt, majd függvényt, ami a vásárlásokat vevő szerint csoportosítja.
*/

interface Vasarlas {
  vevo: string;
  osszeg: number;
}

const vasarlasok: Vasarlas[] = [
  { vevo: "Anna", osszeg: 2000 },
  { vevo: "Béla", osszeg: 1500 },
  { vevo: "Anna", osszeg: 3000 },
];
function csoportositVevoSzerint(lista: Vasarlas[]): Record<string, Vasarlas[]> {
  // ide írd a megoldást
    return lista.reduce((acc,vevo)=>{
        if(!acc[vevo.vevo]){
            acc[vevo.vevo]=[];

        }
        acc[vevo.vevo].push(vevo);
        return acc;
    },{} as Record<string, Vasarlas[]> );
}
console.log(csoportositVevoSzerint(vasarlasok));
// → { 
//   Anna: [ {Anna,2000}, {Anna,3000} ],
//   Béla: [ {Béla,1500} ]
// }

/* 

    5️⃣ Számok statisztika (összetettebb)

    Írj függvényt, ami egy számtömbből ilyen statisztikát ad vissza:

    min: legkisebb

    max: legnagyobb

    atlag: átlag (number)

    dbPozitiv: hány pozitív

    dbNegativ: hány negatív

    Üres tömb esetén térjen vissza egy null értékű objektummal, pl.:

    { min: null, max: null, atlag: 0, dbPozitiv: 0, dbNegativ: 0 }



*/

function szamStatisztika(
  tomb: number[]
): { min: number | null; max: number | null; atlag: number; dbPozitiv: number; dbNegativ: number } {
  // ide írd a megoldást

  if(tomb.length===0)return{min:null,max:null,atlag:0,dbPozitiv:0,dbNegativ:0};

  const max=Math.max(...tomb);
  const min=Math.min(...tomb);
  const atlag=tomb.reduce((acc,curr)=>acc+curr,0)/tomb.length;
  const pozitiv=tomb.filter((szam)=>szam >0);
  const negativ=tomb.filter((szam)=>szam < 0);


  return{
    min:min,
    max:max,
    atlag:atlag,
    dbPozitiv:pozitiv.length,
    dbNegativ:negativ.length,
  }
  
}
console.log(szamStatisztika([1, -2, 3, 4, -1]));
// pl. → { min:-2, max:4, atlag:1, dbPozitiv:3, dbNegativ:2 }

console.log(szamStatisztika([]));
// → { min:null, max:null, atlag:0, dbPozitiv:0, dbNegativ:0 }