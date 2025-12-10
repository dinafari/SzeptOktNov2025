/*
    🟦 TypeScript – 3 könnyebb feladat
    1️⃣ Számok átlaga

    Írj függvényt:



    Ami visszaadja a tömb elemeinek átlagát.
    Üres tömb esetén térjen vissza 0-val.




*/
function atlag(t) {
    // ide írd a megoldást
    if (t.length === 0)
        return 0;
    var osszeguk = t.reduce(function (acc, curr) { return acc + curr; }, 0);
    return osszeguk / t.length;
}
//Példák:
console.log(atlag([1, 2, 3, 4])); // → 2.5
console.log(atlag([])); // → 0
//Írj függvényt:
function bukottDiakok(lista) {
    // ide írd a megoldást
    var bukottd = lista.filter(function (diak) { return diak.jegy < 2; });
    return bukottd;
}
//Példák:
var diakok = [
    { nev: "Anna", jegy: 5 },
    { nev: "Béla", jegy: 1 },
    { nev: "Csilla", jegy: 2 },
];
console.log(bukottDiakok(diakok));
var lista2 = [
    { nev: "Toll", db: 10 },
    { nev: "Füzet", db: 5 },
];
function osszDarab(termekek) {
    // ide írd a megoldást
    var dbok = termekek.map(function (termek) { return termek.db; });
    var osszeguk = dbok.reduce(function (acc, curr) { return acc + curr; }, 0);
    return osszeguk;
    //vagy csak ennyi: return termekek.reduce((acc, termek) => acc + termek.db, 0);
}
//Példák:
console.log(osszDarab(lista2)); // → 15
console.log(osszDarab([])); // → 0
function keszletOsszertek(lista) {
    // ide írd a megoldást
    //const keszleten=lista.filter((termek)=>termek.keszleten===true);
    var arszordb = lista.filter(function (termek) { return termek.keszleten === true; }).reduce(function (acc, termek) { return acc + (termek.ar * termek.db); }, 0);
    return arszordb;
}
//Példa:
var raktar = [
    { nev: "Toll", ar: 200, db: 10, keszleten: true }, // 2000
    { nev: "Ceruza", ar: 100, db: 5, keszleten: false }, // 0
    { nev: "Füzet", ar: 300, db: 7, keszleten: true }, // 2100
];
console.log(keszletOsszertek(raktar)); // → 4100
//Példa:
var userek = [
    { id: 1, nev: "Anna", email: "anna@example.com" },
    { id: 2, nev: "Béla", email: "bela@example.com" },
];
function indexEmailSzerint(lista) {
    // ide írd a megoldást
    var emailcim = {};
    return lista.reduce(function (acc, user) { acc[user.email] = user; return acc; }, emailcim);
}
console.log(indexEmailSzerint(userek));
// → {
//   "anna@example.com": { id:1, nev:"Anna", ... },
//   "bela@example.com": { id:2, nev:"Béla", ... }
// }
