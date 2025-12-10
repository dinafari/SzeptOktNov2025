/*      🟦 4 TypeScript feladat
1) Számok – csak a 10 felettiek átlaga

Feladat:
Írj függvényt, ami csak a 10-nél nagyobb számok átlagát adja vissza.
Ha nincs ilyen → térjen vissza 0-val.

Példa:

tizeFelettiAtlag([5,12,20]) → 16
tizeFelettiAtlag([1,2,3]) → 0
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function tizeFelettiAtlag(tomb1) {
    var tizfelett = tomb1.filter(function (szam) { return szam > 10; });
    if (tizfelett.length === 0) {
        return 0;
    }
    ;
    return tizfelett.reduce(function (acc, curr) { return acc + curr; }, 0) / tizfelett.length;
}
console.log(tizeFelettiAtlag([5, 12, 20])); //→ 16
console.log(tizeFelettiAtlag([1, 2, 3])); //→ 0
function elektromosAutok(autok) {
    return autok.filter(function (auto) { return auto.elektromos === true; });
}
console.log(elektromosAutok([{ tipus: "Tesla", ev: 2025, elektromos: true }, { tipus: "BMW", ev: 1990, elektromos: false }]));
function arEmeles(termekek, szazalek) {
    var szorzo = szazalek / 100;
    var ar = termekek.filter(function (termek) { return termek.ar; });
    return termekek.map(function (termek) { return (__assign(__assign({}, termek), { ar: termek.ar + termek.ar * szorzo })); });
}
console.log(arEmeles([{ nev: "Toll", ar: 200 }], 10)); // → [{nev:"Toll",ar:220}]);
var filmek = [
    { cim: "Matrix", ev: 1999 },
    { cim: "Dark Knight", ev: 2008 },
];
function evszerintFilmek(filmek) {
    var evszam = {};
    // ide írd a megoldást
    return filmek.reduce(function (acc, film) { acc[film.ev] = acc[film.ev] ? __spreadArray(__spreadArray([], acc[film.ev], true), [film], false) : [film]; return acc; }, evszam);
}
console.log(evszerintFilmek(filmek));
/* {
  1999: [Matrix],
  2008: [Dark Knight],
}*/ 
