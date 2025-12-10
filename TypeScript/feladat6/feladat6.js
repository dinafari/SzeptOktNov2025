/* 1️⃣ Páros számok átlaga

    Írj egy függvényt, ami visszaadja egy tömb páros számainak átlagát!
    Ha nincs páros szám, a függvény térjen vissza 0-val.
*/
function parosAtlag(tomb) {
    var paros = tomb.filter(function (szam) { return szam % 2 === 0; });
    var osszeguk = paros.reduce(function (acc, curr) { return acc + curr; }, 0);
    return osszeguk / paros.length;
}
console.log(parosAtlag([1, 2, 3, 4, 6]));
/*
    2️⃣ Fordított szöveg

    Készíts egy függvényt, ami megfordítja a szöveget!
    Ne használd a reverse() metódust — próbáld for-ciklussal is.


*/
function forditott(szoveg) {
    var forditott = "";
    for (var i = szoveg.length - 1; i >= 0; i--) {
        forditott += szoveg[i];
    }
    return forditott;
}
console.log(forditott("kacsa"));
function forditott2(szoveg) {
    //return szoveg.split("").reduce((acc,curr)=>curr+acc,"");
    return szoveg.split("").reverse().join(""); //ez nem fut le de miért?
}
console.log(forditott2("kacsa"));
function joDiakok(lista) {
    var jegyek = lista.filter(function (diak) { return diak.jegy >= 4; });
    return jegyek;
}
console.log(joDiakok([
    { nev: "Anna", jegy: 5 },
    { nev: "Béla", jegy: 3 },
    { nev: "Csilla", jegy: 4 }
]));
