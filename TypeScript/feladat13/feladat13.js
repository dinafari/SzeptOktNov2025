/*🟦 3 TypeScript feladat
🧮 1️⃣ Minimum és maximum visszaadása objektumban

Készíts függvényt, ami egy számtömbből visszaadja a legkisebb és legnagyobb értéket egy objektumban.*/
function minMax(tomb) {
    // ide írd a megoldást
    var max = Math.max.apply(Math, tomb);
    var min = Math.min.apply(Math, tomb);
    return { min: min, max: max };
}
console.log(minMax([4, 2, 8, 1, 9])); // → { min: 1, max: 9 }
function dolgozokBeosztasSzerint(lista, beosztas) {
    // ide írd a megoldást
    var beosztasa = lista.filter(function (dolgozo) { return dolgozo.beosztas === beosztas; });
    return beosztasa;
}
var dolgozok = [
    { nev: "Anna", beosztas: "Fejlesztő", fizetes: 600000 },
    { nev: "Béla", beosztas: "HR", fizetes: 400000 },
    { nev: "Csilla", beosztas: "Fejlesztő", fizetes: 700000 },
];
console.log(dolgozokBeosztasSzerint(dolgozok, "Fejlesztő")); // → [{Anna...}, {Csilla...}]
console.log(dolgozokBeosztasSzerint(dolgozok, "HR")); //  [{ nev: "Béla", beosztas: "HR", fizetes: 400000 }],
function osszertekKeszleten(lista) {
    // ide írd a megoldást
    var keszleten = lista.filter(function (termek) { return termek.keszleten === true; })
        .reduce(function (osszeg, termek) { return osszeg + (termek.ar * termek.db); }, 0);
    return keszleten;
}
var termekek = [
    { nev: "Toll", ar: 200, db: 10, keszleten: true },
    { nev: "Ceruza", ar: 100, db: 5, keszleten: false },
    { nev: "Füzet", ar: 300, db: 7, keszleten: true },
];
console.log(osszertekKeszleten(termekek)); // → 200*10 + 300*7 = 4100 
