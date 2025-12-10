/*   

    🟦 3 TypeScript feladat
    1️⃣ Szöveg normalizálása (szóközök rendezése)

    Írj egy függvényt, ami egy szövegben:

    levágja az elejéről és végéről a felesleges szóközöket,

    a belső többszörös szóközöket egyetlen szóközzé alakítja,

    az egészet kisbetűssé alakítja.


*/




function normalizal(szoveg: string): string {
  // ide írd a megoldást
   const tisztitott =szoveg.toLowerCase().trim().split(/\s+/).join(' ');
   return tisztitott;
}

console.log(normalizal("   Helló    Világ   ")); // "helló világ"
console.log(normalizal("  ALMA   KÖRTE   BARACK   ")); // "alma körte barack"



/*   


    2️⃣ Diákok szűrése és rendezése jegy szerint

    Készíts egy Diak interfészt, majd írj függvényt, ami:

    csak azokat a diákokat adja vissza, akiknek a jegye legalább minJegy,

    és csökkenő sorrendben rendezi őket jegy alapján.


*/





interface Diak {
  nev: string;
  jegy: number;
}

function joDiakokRendezve(lista: Diak[], minJegy: number): Diak[] {
  // ide írd a megoldást

  const megoldas= lista.filter((diak)=>diak.jegy >=minJegy);
  const novekvo=megoldas.sort((a,b)=>b.jegy-a.jegy);
  return novekvo;
}

const diakok: Diak[] = [
  { nev: "Anna", jegy: 5 },
  { nev: "Béla", jegy: 3 },
  { nev: "Csilla", jegy: 4 },
  { nev: "Dani", jegy: 5 },
];

console.log(joDiakokRendezve(diakok, 4));
// pl. → [ {Anna,5}, {Dani,5}, {Csilla,4} ]



/* 

  3️⃣ Termékek csoportosítása kategória szerint

  Készíts egy Termek interfészt (nev, ar, kategoria), majd írj egy függvényt, ami:

  Record<string, Termek[]> formában visszaadja,

  hogy kategóriánként hogyan csoportosulnak a termékek.



*/

  interface Termek {
    nev: string;
    ar: number;
    kategoria: string;
  }

  function csoportositKategoriaSzerint(termekek: Termek[]): Record<string, Termek[]> {
    // ide írd a megoldást

    const kategoria: Record<string, Termek[]>={};

    termekek.forEach((termek)=>{
    if(!kategoria[termek.kategoria]){
        kategoria[termek.kategoria]=[];
      }
        kategoria[termek.kategoria].push(termek);
    });

    return kategoria;



      
  }

    const termekLista: Termek[] = [
      { nev: "Toll", ar: 200, kategoria: "irodaszer" },
      { nev: "Ceruza", ar: 150, kategoria: "irodaszer" },
      { nev: "Alma", ar: 300, kategoria: "élelmiszer" },
    ];

    console.log(csoportositKategoriaSzerint(termekLista));
    // → {
    //   irodaszer: [ {Toll...}, {Ceruza...} ],
    //   élelmiszer: [ {Alma...} ]
    // }


