/*🟦 1) Pozitív számok összege

Feladat:
Írj egy függvényt, ami egy számtömbből csak a pozitív számokat adja össze.
Ha nincs pozitív szám, térjen vissza 0-val.

function pozitivOsszeg(tomb: number[]): number {
  // ide írd a megoldást
}

// Példák:
console.log(pozitivOsszeg([1, -2, 3, 4, -5])); // → 8
console.log(pozitivOsszeg([-2, -4, -6]));      // → 0
// */
function pozitivOsszeg(tomb) {
    // ide írd a megoldást
    var pozitiv = tomb.filter(function (szam) { return szam > 0; });
    if (pozitiv.length === 0)
        return 0;
    return pozitiv.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(pozitivOsszeg([1, -2, 3, 4, -5])); // → 8
console.log(pozitivOsszeg([-2, -4, -6])); //→ 0
/*🟦 2) Szavak szűrése hossz alapján

Feladat:
Írj egy függvényt, ami csak azokat a szavakat adja vissza a tömbből,
amelyek hossza legalább minHossz.

function hosszabbMint(szavak: string[], minHossz: number): string[] {
  // ide írd a megoldást
}

// Példák:
console.log(hosszabbMint(["alma", "banán", "körte"], 5)); // → ["banán", "körte"]
console.log(hosszabbMint(["pi", "fa", "asztal"], 3));     // → ["asztal"]*/
function hosszabbMint(szavak, minHossz) {
    // ide írd a megoldást
    var eredmeny = szavak.filter(function (szo) { return szo.length >= minHossz; });
    return eredmeny;
}
console.log(hosszabbMint(["alma", "banán", "körte"], 5)); // → ["banán","körte"]
console.log(hosszabbMint(["pi", "fa", "asztal"], 3)); // → ["asztal"]
var lista = [
    { nev: "Toll", ar: 200, keszleten: true },
    { nev: "Ceruza", ar: 100, keszleten: false },
    { nev: "Füzet", ar: 300, keszleten: true },
];
function atlagArKeszleten(termekek) {
    // ide írd a megoldást
    var keszleten = termekek.filter(function (termek) { return termek.keszleten === true; });
    if (keszleten.length === 0) {
        return 0;
    }
    ;
    var osszeguk = keszleten.reduce(function (acc, curr) { return acc + curr.ar; }, 0);
    return osszeguk / keszleten.length;
}
console.log(atlagArKeszleten(lista)); // → 250
console.log(atlagArKeszleten([])); // → 0
