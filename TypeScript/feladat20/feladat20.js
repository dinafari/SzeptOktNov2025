/*
    🟦 4 TypeScript feladat
    ✅ 5) Pozitív számok darabszáma (könnyebb)

    Írj függvényt:

    function pozitivDb(t: number[]): number


    Ami visszaadja, hány pozitív szám (>0) van a tömbben.


*/
function pozitivDb(t) {
    var poz = t.filter(function (szam) { return szam > 0; }).length;
    return poz;
}
console.log(pozitivDb([1, -3, 6, -9]));
var diakok = [
    { nev: "Józsi", jegy: 5 },
    { nev: "Pisti", jegy: 3 },
    { nev: "Géza", jegy: 4 },
];
function diakNevek(diakok) {
    var csaknevek = diakok.map(function (diak) { return diak.nev; });
    return csaknevek;
}
console.log(diakNevek(diakok));
var termekek = [
    { nev: "Toll", ar: 200, kategoriak: ["irodaszer"] },
    { nev: "Füzet", ar: 1200, kategoriak: ["irodaszer", "iskolaszer"] },
    { nev: "Táska", ar: 5000, kategoriak: ["iskolaszer"] },
];
function kategoriaCsoport(termekek) {
    return termekek.reduce(function (acc, termek) {
        termek.kategoriak.forEach(function (kat) {
            if (!acc[kat]) {
                acc[kat] = [];
            }
            acc[kat].push(termek);
        });
        return acc;
    }, {});
}
console.log(kategoriaCsoport(termekek));
// Without forEach — use nested reduce
function kategoriaCsoport2(termekek) {
    return termekek.reduce(function (acc, termek) {
        return termek.kategoriak.reduce(function (a, kat) {
            var _a;
            ((_a = a[kat]) !== null && _a !== void 0 ? _a : (a[kat] = [])).push(termek);
            return a;
        }, acc);
    }, {});
}
console.log(kategoriaCsoport2(termekek));
var felhasznalok = [
    { id: 1, nev: "Anna", aktiv: true },
    { id: 2, nev: "Béla", aktiv: false }
];
function atalakitRecord(felhasznalok) {
    var rekord = {};
    return felhasznalok.reduce(function (acc, user) {
        acc[user.id] = user;
        return acc;
    }, rekord);
}
console.log(atalakitRecord(felhasznalok));
