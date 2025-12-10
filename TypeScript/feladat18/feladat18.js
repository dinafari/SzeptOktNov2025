/*🟦 3 könnyebb TypeScript feladat
1️⃣ Negatív számok összege

Írj függvényt, ami egy számtömbből összeadja a negatív számokat.
Ha nincs negatív, térjen vissza 0-val.
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function negativOsszeg(tomb) {
    // ide írd a megoldást
    var negativ = tomb.filter(function (szam) { return szam < 0; });
    if (negativ.length === 0)
        return 0;
    return negativ.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(negativOsszeg([1, -2, 3, -4])); // → -6
console.log(negativOsszeg([1, 2, 3])); // → 0
function diakNevek(lista) {
    // ide írd a megoldást
    var nevek = lista.map(function (diak) { return diak.nev; });
    return nevek;
}
console.log(diakNevek([
    { nev: "Anna", jegy: 5 },
    { nev: "Béla", jegy: 3 }
])); // → ["Anna", "Béla"]
function minArFelett(termekek, minAr) {
    // ide írd a megoldást
    var eredmeny = termekek.filter(function (termek) { return termek.ar >= minAr; });
    return eredmeny;
}
console.log(minArFelett([{ nev: "Toll", ar: 200 }, { nev: "Táska", ar: 5000 }], 1000)); // → [{nev:"Táska", ar:5000}]
function csoportositasJegySzerint(lista) {
    // ide írd a megoldást
    return lista.reduce(function (acc, diak) {
        if (!acc[diak.jegy]) {
            acc[diak.jegy] = []; // ha még nincs ilyen kulcs, létrehozzuk
        }
        acc[diak.jegy].push(diak); // hozzáadjuk a diákot a tömbhöz
        return acc;
    }, {});
}
var diakok = [
    { nev: "Anna", jegy: 5 },
    { nev: "Béla", jegy: 3 },
    { nev: "Csilla", jegy: 5 },
];
console.log(csoportositasJegySzerint(diakok));
function indexNevSzerint(termekek) {
    // ide írd a megoldást
    return termekek.reduce(function (acc, termek) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[termek.nev] = termek, _a)));
    }, {});
}
console.log(indexNevSzerint([
    { nev: "Toll", ar: 200 },
    { nev: "Füzet", ar: 300 },
]));
// → { Toll: {nev:"Toll", ar:200}, Füzet: {nev:"Füzet", ar:300} }
