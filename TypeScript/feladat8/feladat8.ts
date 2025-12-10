/*
    1-Egyedisítés sorrendmegőrzéssel

    Írj függvényt, ami a tömbből kiszedi a duplikátumokat úgy, hogy az első előfordulás sorrendje megmaradjon.

    function uniqueNumbers(t: number[]): number[]


    Példa: [3, 1, 3, 2, 1] → [3, 1, 2]
    Hint: Set vagy egy seen objektum/Map.
*/


function uniqueNumbers(t: number[]): number[]{

    // fordító sajnos nem visz nálam pedig jó lenne new Set()-el:
    // const egyszerszam=[...new Set(t)];

    const egyszerszam=t.filter((value,index)=>t.indexOf(value)===index);

    return egyszerszam;;

}
console.log(uniqueNumbers([3, 1, 3, 2, 1]));//→ [3, 1, 2]


/*
    2) Csoportosítás kezdőbetű szerint

    Írj függvényt, ami csoportosítja a szavakat az első betű alapján (kisbetűsítve), és egy Record<string, string[]>-ot ad vissza.

    function groupByFirstLetter(szavak: string[]): Record<string, string[]>


    Példa: ["Alma","ananász","Barack"] → { a:["Alma","ananász"], b:["Barack"] }
    Hint: kezeld az üres stringet is.

*/

function groupByFirstLetter(szavak: string[]): Record<string, string[]>{ //ezt magyarázd el kérlek, itt elakadtam , ezt nem megamtól oldottam meg.Talált megoldás.
    const csoportositott: Record<string, string[]> = {};

    szavak.forEach((szo) => {
        if (szo.length === 0) return  ""; // üres szöveg vagy  üres "" jel esetén visszatér

        const elsoBetu = szo.charAt(0).toLowerCase();//Kivesszük az első karaktert (charAt(0))
        if (!csoportositott[elsoBetu]) {
            csoportositott[elsoBetu] = [];
        }
        csoportositott[elsoBetu].push(szo);
    });
    return csoportositott;
}
console.log(groupByFirstLetter( ["Alma","ananász","Barack"]));// → { a:["Alma","ananász"], b:["Barack"] }

/*  3) Objektumtömb → CSV szöveg
    Készíts függvényt, ami egy egységes objektumtömbből CSV-t készít (fejléc + sorok).

    type Row = { nev: string; jegy: number; tantargy: string };
    function toCSV(rows: Row[]): string


    Példa fejléc: nev,jegy,tantargy
    Hint: Object.keys + map + join('\n'). Kezeld az üres tömböt!


*/

type Row = { nev: string; jegy: number; tantargy: string };

function toCSV(rows: Row[]): string{

    // 1️⃣ Ha üres a tömb, térjünk vissza üres stringgel

    if (rows.length === 0) return "";

    
  // 2️⃣ Fejléc – az első objektum kulcsai
  const fejlec = Object.keys(rows[0]).join(",");

  // 3️⃣ Sorok – minden objektum értékeit join-oljuk
  const sorok = rows.map(obj =>
    Object.values(obj).join(",")
  );

  // 4️⃣ Fejléc + sorok összefűzése új sorokkal
  return [fejlec, ...sorok].join("\n");
  
}
console.log(toCSV([{ nev:"Béla", jegy:5, tantargy:"Matematika"}]));
//nev,jegy,tantargy
//Béla,5,Matematika
