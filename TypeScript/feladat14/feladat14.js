/*🟦 3 TypeScript feladat
1) ÁFA számítás + készletes szűrés

Készíts Termek interfészt, és függvényt, ami:

csak a keszleten === true termékeket adja vissza,

és minden elemhez ad egy új mezőt: bruttoAr = ar * 1.27 (két tizedre kerekítve).
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
function bruttoKeszleten(termekek) {
    // ide írd a megoldást
    var keszleten = termekek.filter(function (termek) { return termek.keszleten === true; });
    var bruttoKeszleten = keszleten.map(function (termek) { return (__assign(__assign({}, termek), { bruttoAr: Number((termek.ar * 1.27).toFixed(2)) })); });
    return bruttoKeszleten;
}
var lista = [
    { nev: "Toll", ar: 200, keszleten: true },
    { nev: "Ceruza", ar: 100, keszleten: false },
];
console.log(bruttoKeszleten(lista));
function atlagTantargy(lista, tantargy) {
    // ide írd a megoldást
    var tantargyjegy = lista.filter(function (elem) { return elem.tantargy === tantargy; });
    if (tantargyjegy.length === 0) {
        return 0;
    }
    ;
    var osszeguk = tantargyjegy.reduce(function (acc, jegy) { return acc + jegy.jegy; }, 0);
    return osszeguk / tantargyjegy.length;
}
var jegyek = [
    { nev: "Anna", tantargy: "matek", jegy: 5 },
    { nev: "Béla", tantargy: "matek", jegy: 3 },
    { nev: "Csilla", tantargy: "töri", jegy: 4 },
];
console.log(atlagTantargy(jegyek, "matek")); // → 4
console.log(atlagTantargy(jegyek, "bio")); // → 0
function indexelesIdSzerint(items) {
    // ide írd a megoldást
    return items.reduce(function (acc, item) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[item.id] = item, _a)));
    }, {});
}
console.log(indexelesIdSzerint([
    { id: 10, nev: "A" },
    { id: 20, nev: "B" },
]));
// → { 10: {id:10, nev:"A"}, 20: {id:20, nev:"B"} }
