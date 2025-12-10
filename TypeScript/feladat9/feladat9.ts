/*      

    🟦 3 TypeScript feladat
    1️⃣ Páros és páratlan szétválogatás

    Írj egy parosParatlan(tomb: number[]) függvényt, ami visszaad egy objektumot,
    két kulccsal: paros és paratlan, mindkettő egy tömb legyen.
    👉 Példa: [1,2,3,4,5] → { paros:[2,4], paratlan:[1,3,5] }


*/

    function parosParatlan(tomb: number[]) :{ paros: number[]; paratlan: number[] }{

        if(tomb.length===0){ alert('Üres a tömb!'); return { paros: [], paratlan: [] } }; // kilépés returnel }; 

        const paros=tomb.filter((szam)=>szam %2===0);
        const paratlan=tomb.filter((szam)=>szam%2 !==0);

        return{paros,paratlan};
    }
    console.log(parosParatlan([1,2,3,4,5]));//{ paros:[2,4], paratlan:[1,3,5] }
    console.log(parosParatlan([]));//Itt figyelmeztetést kap a felhasználó





/*
    2️⃣ Leghosszabb szó visszaadása (függvény + típus)

    Készíts egy leghosszabbSzó(szavak: string[]): string függvényt,
    ami visszaadja a leghosszabb szót a tömbből.
    👉 Példa: ["alma", "banán", "citrom"] → "citrom"
*/

function leghosszabbSzo(szavak: string[]): string{
    if(szavak.length===0){return ""};

    //A rendezés módosítja a tömböt a sorrendben:
 const lhossz=szavak.sort ((a,b)=>b.length-a.length)[0];
 return lhossz;

  //De ez viszont nem módosítja a tömböt:
  //  return szavak.reduce((max, s) => (s.length > max.length ? s : max))
}
console.log(leghosszabbSzo( ["alma", "banán", "citrom"]));


/*   
    //forEach-el  :

    function leghosszabbSzoForEach(szavak: string[]): string {
        let max = "";
        szavak.forEach(s => { if (s.length > max.length) max = s; });
        return max;
    }

    //map-os megközelítés (index trükk):

    function leghosszabbSzoMap(szavak: string[]): string {
        if (!szavak.length) return "";
        const hosszak = szavak.map(s => s.length);
        const maxLen = Math.max(...hosszak);
        const idx = hosszak.indexOf(maxLen);
        return szavak[idx];
    }
*/



/*
    3️⃣ Objektumok szűrése típus alapján

    Készíts egy Termek interfészt (nev, ar, keszleten) és egy
    szuresKeszleten(termekek: Termek[]): Termek[] függvényt, ami visszaadja
    csak azokat, ahol keszleten === true.

    👉 Példa:

    [
    { nev: "Toll", ar: 200, keszleten: true },
    { nev: "Ceruza", ar: 100, keszleten: false }
    ]
    → [{ nev: "Toll", ar: 200, keszleten: true }]


*/

interface Termek{
    nev:string;
    ar:number;
    keszleten: true | false;
    //boolean-el tisztább
}

function  szuresKeszleten(termekek: Termek[]): Termek[] {
    const keszleten=termekek.filter((termek)=>termek.keszleten===true);
    return keszleten;
}
console.log(szuresKeszleten([{nev:"auto",ar:30000,keszleten:true},
    {nev:"bicikli",ar:25000,keszleten:true},
    {nev:"roller",ar:20000,keszleten:false}
]));