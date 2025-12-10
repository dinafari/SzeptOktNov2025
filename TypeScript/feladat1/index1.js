/*
   feladatok:
   1)
    interface Rendeles { ugyfel: string; osszeg: number; fizetett: boolean; }
    

    osszBevetel(rendelesek: Rendeles[]): number – csak a fizetett rendelések összegét adja vissza.

    osszegUgyfelenkent(rendelesek: Rendeles[]): Record<string, number> – vevőnkénti összegzés.

    topUgyfel(rendelesek: Rendeles[]): { ugyfel: string; osszeg: number } | null – a legtöbbet
    fizető vevő.


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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
function osszBevetel(rendelesek) {
    return rendelesek.filter(function (r) { return r.fizetett; }).reduce(function (s, r) { return s + r.osszeg; }, 0);
}
function osszegUgyfelenkent(rendelesek) {
    return rendelesek.reduce(function (acc, r) {
        acc[r.ugyfel] = (acc[r.ugyfel] || 0) + (r.fizetett ? r.osszeg : 0);
        return acc;
    }, {});
}
function topUgyfel(rendelesek) {
    var map = osszegUgyfelenkent(rendelesek);
    var entries = Object.entries(map);
    if (entries.length === 0)
        return null;
    var _a = entries.reduce(function (max, e) { return (e[1] > max[1] ? e : max); }), ugyfel = _a[0], osszeg = _a[1];
    return { ugyfel: ugyfel, osszeg: osszeg };
}
// Teszt:
var rendelesek = [
    { ugyfel: "Anna", osszeg: 12000, fizetett: true },
    { ugyfel: "Béla", osszeg: 8000, fizetett: false },
    { ugyfel: "Anna", osszeg: 6000, fizetett: true }
];
console.log("osszBevetel:", osszBevetel(rendelesek));
// 18000
console.log("osszegUgyfelenkent:", osszegUgyfelenkent(rendelesek));
// { Anna: 18000, Béla: 0 }
console.log("topUgyfel:", topUgyfel(rendelesek));
function median(j) {
    if (j.length === 0)
        return 0;
    var a = __spreadArray([], j, true).sort(function (x, y) { return x - y; });
    var n = a.length;
    var mid = Math.floor(n / 2);
    return n % 2 ? a[mid] : (a[mid - 1] + a[mid]) / 2;
}
function diakMediank(diakok) {
    return diakok.map(function (d) { return ({ nev: d.nev, median: median(d.jegyek) }); });
}
function rangsorMedianSzerint(diakok) {
    return diakMediank(diakok)
        .map(function (d, i) { return (__assign(__assign({}, d), { i: i })); }) // i: eredeti index stabilitáshoz
        .sort(function (a, b) { return b.median - a.median || a.i - b.i; })
        .map(function (_a) {
        var i = _a.i, rest = __rest(_a, ["i"]);
        return rest;
    });
}
// Teszt:
var diakok = [
    { nev: "Anna", jegyek: [5, 5, 4, 5] },
    { nev: "Béla", jegyek: [3, 4, 3] },
    { nev: "Csilla", jegyek: [5, 4, 4, 5, 5] }
];
console.log("median([1,3,2]) =", median([1, 3, 2]));
// 2
console.log("median([1,2,3,4]) =", median([1, 2, 3, 4]));
// (2+3)/2 = 2.5
console.log("diakMediank:", diakMediank(diakok));
// [ { nev: 'Anna', median: 5 }, { nev: 'Béla', median: 3 }, { nev: 'Csilla', median: 5 } ]
console.log("rangsorMedianSzerint:", rangsorMedianSzerint(diakok));
// [ { nev: 'Anna', median: 5 }, { nev: 'Csilla', median: 5 }, { nev: 'Béla', median: 3 } ]
/*3) Generikus paginátor

    Feladat:

    function paginate<T>(items: T[], page: number, perPage: number): {
        data: T[]; page: number; perPage: number; total: number; totalPages: number;
    } {
        const total = items.length;
        const totalPages = Math.ceil(total / perPage);
        const start = (page - 1) * perPage;
        const end = start + perPage;

        return {
            data: items.slice(start, end),
            page,
            perPage,
            total,
            totalPages
        };
    }


    page 1-alapú.

    Vágd szeletre items-et, add vissza a metaadatokat is.

    Out-of-range oldalnál data: [], de a meta marad helyes.

    Minta:

    paginate([1,2,3,4,5], 2, 2)
    // -> { data:[3,4], page:2, perPage:2, total:5, totalPages:3 }
*/
/***********************
 * 3) GENERIKUS PAGINÁTOR
 ***********************/
function paginate(items, page, perPage) {
    var total = items.length;
    var safePer = Math.max(1, Math.floor(perPage || 1));
    var totalPages = Math.max(1, Math.ceil(total / safePer));
    var givenPage = Math.floor(page || 1);
    if (givenPage < 1 || givenPage > totalPages) {
        return { data: [], page: givenPage, perPage: safePer, total: total, totalPages: totalPages };
    }
    var start = (givenPage - 1) * safePer;
    var data = items.slice(start, start + safePer);
    return { data: data, page: givenPage, perPage: safePer, total: total, totalPages: totalPages };
}
// Teszt:
console.log("paginate([1,2,3,4,5], 2, 2) =", paginate([1, 2, 3, 4, 5], 2, 2));
// { data:[3,4], page:2, perPage:2, total:5, totalPages:3 }
console.log("paginate([1,2,3,4,5], 9, 2) =", paginate([1, 2, 3, 4, 5], 9, 2));
// { data:[], page:9, perPage:2, total:5, totalPages:3 }
