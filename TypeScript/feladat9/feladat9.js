/*

    🟦 3 TypeScript feladat
    1️⃣ Páros és páratlan szétválogatás

    Írj egy parosParatlan(tomb: number[]) függvényt, ami visszaad egy objektumot,
    két kulccsal: paros és paratlan, mindkettő egy tömb legyen.
    👉 Példa: [1,2,3,4,5] → { paros:[2,4], paratlan:[1,3,5] }


*/
function parosParatlan(tomb) {
    if (tomb.length === 0) {
        alert('üres a tömb');
    }
    ;
    var paros = tomb.filter(function (szam) { return szam % 2 === 0; });
    var paratlan = tomb.filter(function (szam) { return szam % 2 !== 0; });
    return { paros: paros, paratlan: paratlan };
}
console.log(parosParatlan([1, 2, 3, 4, 5])); //{ paros:[2,4], paratlan:[1,3,5] }
console.log(parosParatlan([]));
/*
    2️⃣ Leghosszabb szó visszaadása (függvény + típus)

    Készíts egy leghosszabbSzó(szavak: string[]): string függvényt,
    ami visszaadja a leghosszabb szót a tömbből.
    👉 Példa: ["alma", "banán", "citrom"] → "citrom"
*/
function leghosszabbSzo(szavak) {
    if (szavak.length === 0) {
        return "";
    }
    ;
    //A rendezés módosítja a tömböt a sorrendben:
    var lhossz = szavak.sort(function (a, b) { return b.length - a.length; })[0];
    return lhossz;
    //De ez viszont nem módosítja a tömböt:
    //  return szavak.reduce((max, s) => (s.length > max.length ? s : max))
}
console.log(leghosszabbSzo(["alma", "banán", "citrom"]));
function szuresKeszleten(termekek) {
    var keszleten = termekek.filter(function (termek) { return termek.keszleten === true; });
    return keszleten;
}
console.log(szuresKeszleten([{ nev: "auto", ar: 30000, keszleten: true },
    { nev: "bicikli", ar: 25000, keszleten: true },
    { nev: "roller", ar: 20000, keszleten: false }
]));
