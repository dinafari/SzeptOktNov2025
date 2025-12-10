/*
    1.Diák interfész
    Hozz létre egy Diak interfészt (nev, kor) és írj függvényt,
    ami visszaadja a legfiatalabb diák nevét.

*/
var diakok = [
    { nev: "Cili", kor: 18 },
    { nev: "Géza", kor: 38 },
    { nev: "Kati", kor: 21 },
    { nev: "Pisti", kor: 19 },
];
function legfiatalabb(diakok) {
    var min = Math.min.apply(Math, diakok.map(function (diak) { return diak.kor; }));
    var legfd = diakok.filter(function (diak) { return diak.kor === min; });
    return legfd.map(function (diak) { return diak.nev; }).join(" ");
}
console.log(legfiatalabb(diakok));
/*
    2.Generikus tömb hossz
    Írj generikus függvényt, ami bármilyen típusú tömb hosszát visszaadja.
*/
function generikusTombhossz(tomb) {
    return tomb.length;
}
console.log(generikusTombhossz([2, 45, 6, 7])); // 4
console.log(generikusTombhossz(["alma", "Szilva", "körte", 1, 2]));
console.log(generikusTombhossz([{ nev: "Géza" }, { nev: "Kati" }])); // 2
console.log(generikusTombhossz(["alma", "szilva", "körte"])); // 3
/*
    3.Dolgozó fizetés emelése
    Hozz létre egy Dolgozo osztályt (nev, fizetes) és írj metódust, ami 10%-kal megemeli a fizetését.
*/
var Dolgozoember = /** @class */ (function () {
    function Dolgozoember(nev, fizetes) {
        this.nev = nev;
        this.fizetes = fizetes;
    }
    Dolgozoember.prototype.emelFizetest = function () {
        this.fizetes *= 1.1; // +10%
    };
    Dolgozoember.prototype.info = function () {
        return "".concat(this.nev, " \u00FAj fizet\u00E9se: ").concat(this.fizetes.toLocaleString(), " Ft");
    };
    return Dolgozoember;
}());
var dolgozo1 = new Dolgozoember("Géza", 400000);
dolgozo1.emelFizetest();
console.log(dolgozo1.info()); //  Géza új fizetése: 440,000 Ft
