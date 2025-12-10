/*
   feladatok:
   1)
    interface Rendeles { ugyfel: string; osszeg: number; fizetett: boolean; }
    

    osszBevetel(rendelesek: Rendeles[]): number – csak a fizetett rendelések összegét adja vissza.

    osszegUgyfelenkent(rendelesek: Rendeles[]): Record<string, number> – vevőnkénti összegzés.

    topUgyfel(rendelesek: Rendeles[]): { ugyfel: string; osszeg: number } | null – a legtöbbet 
    fizető vevő.


*/

// osszBevetel -> 18000
// osszegUgyfelenkent -> { Anna: 18000, Béla: 0 }
// topUgyfel -> { ugyfel: "Anna", osszeg: 18000 }


/***********************
 * 1) RENDELÉSEK
 ***********************/
interface Rendeles { ugyfel: string; osszeg: number; fizetett: boolean; }

function osszBevetel(rendelesek: Rendeles[]): number {
  return rendelesek.filter(r => r.fizetett).reduce((s, r) => s + r.osszeg, 0);
}

function osszegUgyfelenkent(rendelesek: Rendeles[]): Record<string, number> {
  return rendelesek.reduce<Record<string, number>>((acc, r) => {
    acc[r.ugyfel] = (acc[r.ugyfel] || 0) + (r.fizetett ? r.osszeg : 0);
    return acc;
  }, {});
}

function topUgyfel(rendelesek: Rendeles[]): { ugyfel: string; osszeg: number } | null {
  const map = osszegUgyfelenkent(rendelesek);
  const entries = Object.entries(map);
  if (entries.length === 0) return null;
  const [ugyfel, osszeg] = entries.reduce((max, e) => (e[1] > max[1] ? e : max));
  return { ugyfel, osszeg };
}

// Teszt:
const rendelesek: Rendeles[] = [
  { ugyfel: "Anna", osszeg: 12000, fizetett: true },
  { ugyfel: "Béla", osszeg: 8000,  fizetett: false },
  { ugyfel: "Anna", osszeg: 6000,  fizetett: true }
];

console.log("osszBevetel:", osszBevetel(rendelesek)); 
// 18000

console.log("osszegUgyfelenkent:", osszegUgyfelenkent(rendelesek)); 
// { Anna: 18000, Béla: 0 }

console.log("topUgyfel:", topUgyfel(rendelesek)); 
// { ugyfel: 'Anna', osszeg: 18000 }




/*
    2) Diákok mediánja és rangsor

    Adj meg:

    interface Diak { nev: string; jegyek: number[]; }


    Feladatok:

    median(j: number[]): number – páros elemszámnál az átlag a két középsőből.

    diakMediank(diakok: Diak[]): { nev: string; median: number }[] – minden diáknak számold ki.

    rangsorMedianSzerint(...) – rendezett lista csökkenő mediánnal (stabil rendezés).

    Minta:

    const d: Diak[] = [
        { nev: "Anna",  jegyek: [5,5,4,5] },
        { nev: "Béla",  jegyek: [3,4,3]   },
        { nev: "Csilla",jegyek: [5,4,4,5,5] }
    ];
    // eredmény: [{nev:"Anna", median:5}, {nev:"Csilla", median:5}, {nev:"Béla", median:3}]
*/


/***********************
 * 2) MEDIÁN + RANGSOR
 ***********************/
interface Diak { nev: string; jegyek: number[]; }

function median(j: number[]): number {
  if (j.length === 0) return 0;
  const a = [...j].sort((x, y) => x - y);
  const n = a.length;
  const mid = Math.floor(n / 2);
  return n % 2 ? a[mid] : (a[mid - 1] + a[mid]) / 2;
}

function diakMediank(diakok: Diak[]): { nev: string; median: number }[] {
  return diakok.map(d => ({ nev: d.nev, median: median(d.jegyek) }));
}

function rangsorMedianSzerint(diakok: Diak[]) {
  return diakMediank(diakok)
    .map((d, i) => ({ ...d, i }))                // i: eredeti index stabilitáshoz
    .sort((a, b) => b.median - a.median || a.i - b.i)
    .map(({ i, ...rest }) => rest);
}

// Teszt:
const diakok: Diak[] = [
  { nev: "Anna",  jegyek: [5,5,4,5] },
  { nev: "Béla",  jegyek: [3,4,3]   },
  { nev: "Csilla",jegyek: [5,4,4,5,5] }
];

console.log("median([1,3,2]) =", median([1,3,2])); 
// 2

console.log("median([1,2,3,4]) =", median([1,2,3,4])); 
// (2+3)/2 = 2.5

console.log("diakMediank:", diakMediank(diakok));
// [ { nev: 'Anna', median: 5 }, { nev: 'Béla', median: 3 }, { nev: 'Csilla', median: 5 } ]

console.log("rangsorMedianSzerint:", rangsorMedianSzerint(diakok));
// [ { nev: 'Anna', median: 5 }, { nev: 'Csilla', median: 5 }, { nev: 'Béla', median: 3 } ]




/*3) Generikus paginátor

    Feladat:

    function paginate<T>(items: T[], page: number, perPage: number): {
        data: T[]; page: number; perPage: number; total: number; totalPages: number;
    } {
        const total = items.length;
        const totalPages = Math.ceil(total / perPage);
        const start = (page - 1) * perPage;
        const end = start + perPage;

        return {
            data: items.slice(start, end),
            page,
            perPage,
            total,
            totalPages
        };
    }


    page 1-alapú.

    Vágd szeletre items-et, add vissza a metaadatokat is.

    Out-of-range oldalnál data: [], de a meta marad helyes.

    Minta:

    paginate([1,2,3,4,5], 2, 2)
    // -> { data:[3,4], page:2, perPage:2, total:5, totalPages:3 }
*/

/***********************
 * 3) GENERIKUS PAGINÁTOR
 ***********************/
function paginate<T>(
  items: T[],
  page: number,
  perPage: number
): { data: T[]; page: number; perPage: number; total: number; totalPages: number } {
  const total = items.length;
  const safePer = Math.max(1, Math.floor(perPage || 1));
  const totalPages = Math.max(1, Math.ceil(total / safePer));
  const givenPage = Math.floor(page || 1);

  if (givenPage < 1 || givenPage > totalPages) {
    return { data: [], page: givenPage, perPage: safePer, total, totalPages };
  }

  const start = (givenPage - 1) * safePer;
  const data = items.slice(start, start + safePer);

  return { data, page: givenPage, perPage: safePer, total, totalPages };
}

// Teszt:
console.log("paginate([1,2,3,4,5], 2, 2) =", paginate([1,2,3,4,5], 2, 2));
// { data:[3,4], page:2, perPage:2, total:5, totalPages:3 }

console.log("paginate([1,2,3,4,5], 9, 2) =", paginate([1,2,3,4,5], 9, 2));
// { data:[], page:9, perPage:2, total:5, totalPages:3 }

    
