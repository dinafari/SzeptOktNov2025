//1️⃣ Interfészes szűrés – Olcsó termékek
//Készíts egy Termek interfészt:
//Ami visszaadja azokat a termékeket, amelyek ára ≤ maxAr.
function olcsoTermekek(lista, maxAr) {
    var eredmeny = lista.filter(function (termek) { return termek.ar <= maxAr; });
    return eredmeny;
}
console.log(olcsoTermekek([{ nev: "Toll", ar: 200 }, { nev: "Táska", ar: 5000 }], 1000)); //→ [{nev:"Toll", ar:200}]
//Írj függvényt, ami megszámolja, hogy egy szövegben
//  melyik kisbetű hányszor szerepel, és ezt visszaadja:
//Record<string, number>
//mindet toLowerCase()!
function betuDb(szoveg) {
    if (szoveg.length === 0)
        return {};
    var tisztitottszoveg = szoveg.toLowerCase().split('');
    var gyakorisag = {};
    for (var _i = 0, tisztitottszoveg_1 = tisztitottszoveg; _i < tisztitottszoveg_1.length; _i++) {
        var betu = tisztitottszoveg_1[_i];
        gyakorisag[betu] = (gyakorisag[betu] || 0) + 1;
    }
    return gyakorisag;
}
console.log(betuDb("Alma")); //→ { a: 2, l: 1, m: 1 }
function osszErtek(raktar) {
    var keszleten = raktar.filter(function (termek) { return termek.keszleten === true; }, 0);
    var osszertek = keszleten.reduce(function (acc, termek) { return acc + (termek.ar * termek.db); }, 0);
    return osszertek;
}
console.log(osszErtek([
    { nev: "Toll", ar: 200, db: 10, keszleten: true }, // 2000
    { nev: "Ceruza", ar: 100, db: 5, keszleten: false },
    { nev: "Füzet", ar: 300, db: 7, keszleten: true } // 2100
])); //→ 4100
