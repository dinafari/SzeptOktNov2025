/*
    1️⃣ Páros számok összege

    Írj függvényt, ami egy számtömbből összeadja a páros számokat.
    Ha nincs páros szám, térjen vissza 0-val.
*/
function parosOsszeg(tomb) {
    // ide írd a megoldást
    var parosok = tomb.filter(function (szam) { return szam % 2 === 0; });
    if (parosok.length === 0)
        return 0;
    return parosok.reduce(function (acc, curr) { return acc + curr; }, 0);
}
//Példák:
console.log(parosOsszeg([1, 2, 3, 4, 6])); // → 12
console.log(parosOsszeg([1, 3, 5]));
var diakok = [
    { nev: "Anna", jegy: 5 },
    { nev: "Béla", jegy: 3 },
    { nev: "Csilla", jegy: 4 },
];
function atmentDiakok(lista) {
    // ide írd a megoldást
    var legalabbnegy = lista.filter(function (diak) { return diak.jegy >= 4; });
    return legalabbnegy;
}
//Példa:
console.log(atmentDiakok(diakok));
var lista = [
    { nev: "Toll", ar: 200 },
    { nev: "Füzet", ar: 350 },
    { nev: "Táska", ar: 5000 },
];
function olcsobbMint(termekek, maxAr) {
    // ide írd a megoldást
    var kisebbmax = termekek.filter(function (termek) { return termek.ar < maxAr; });
    return kisebbmax;
}
console.log(olcsobbMint(lista, 400));
var vasarlasok = [
    { vevo: "Anna", osszeg: 2000 },
    { vevo: "Béla", osszeg: 1500 },
    { vevo: "Anna", osszeg: 3000 },
];
function csoportositVevoSzerint(lista) {
    // ide írd a megoldást
    return lista.reduce(function (acc, vevo) {
        if (!acc[vevo.vevo]) {
            acc[vevo.vevo] = [];
        }
        acc[vevo.vevo].push(vevo);
        return acc;
    }, {});
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
function szamStatisztika(tomb) {
    // ide írd a megoldást
    if (tomb.length === 0)
        return { min: null, max: null, atlag: 0, dbPozitiv: 0, dbNegativ: 0 };
    var max = Math.max.apply(Math, tomb);
    var min = Math.min.apply(Math, tomb);
    var atlag = tomb.reduce(function (acc, curr) { return acc + curr; }, 0) / tomb.length;
    var pozitiv = tomb.filter(function (szam) { return szam > 0; });
    var negativ = tomb.filter(function (szam) { return szam < 0; });
    return {
        min: min,
        max: max,
        atlag: atlag,
        dbPozitiv: pozitiv.length,
        dbNegativ: negativ.length,
    };
}
console.log(szamStatisztika([1, -2, 3, 4, -1]));
// pl. → { min:-2, max:4, atlag:1, dbPozitiv:3, dbNegativ:2 }
console.log(szamStatisztika([]));
// → { min:null, max:null, atlag:0, dbPozitiv:0, dbNegativ:0 }
