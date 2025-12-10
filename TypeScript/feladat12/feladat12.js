/*

    🟦 3 TypeScript feladat
    1️⃣ Szöveg normalizálása (szóközök rendezése)

    Írj egy függvényt, ami egy szövegben:

    levágja az elejéről és végéről a felesleges szóközöket,

    a belső többszörös szóközöket egyetlen szóközzé alakítja,

    az egészet kisbetűssé alakítja.


*/
function normalizal(szoveg) {
    // ide írd a megoldást
    var tisztitott = szoveg.toLowerCase().trim().split(/\s+/).join(' ');
    return tisztitott;
}
console.log(normalizal("   Helló    Világ   ")); // "helló világ"
console.log(normalizal("  ALMA   KÖRTE   BARACK   ")); // "alma körte barack"
function joDiakokRendezve(lista, minJegy) {
    // ide írd a megoldást
    var megoldas = lista.filter(function (diak) { return diak.jegy >= minJegy; });
    var novekvo = megoldas.sort(function (a, b) { return b.jegy - a.jegy; });
    return novekvo;
}
var diakok = [
    { nev: "Anna", jegy: 5 },
    { nev: "Béla", jegy: 3 },
    { nev: "Csilla", jegy: 4 },
    { nev: "Dani", jegy: 5 },
];
console.log(joDiakokRendezve(diakok, 4));
function csoportositKategoriaSzerint(termekek) {
    // ide írd a megoldást
    var kategoria = {};
    termekek.forEach(function (termek) {
        if (!kategoria[termek.kategoria]) {
            kategoria[termek.kategoria] = [];
        }
        kategoria[termek.kategoria].push(termek);
    });
    return kategoria;
}
var termekLista = [
    { nev: "Toll", ar: 200, kategoria: "irodaszer" },
    { nev: "Ceruza", ar: 150, kategoria: "irodaszer" },
    { nev: "Alma", ar: 300, kategoria: "élelmiszer" },
];
console.log(csoportositKategoriaSzerint(termekLista));
// → {
//   irodaszer: [ {Toll...}, {Ceruza...} ],
//   élelmiszer: [ {Alma...} ]
// }
