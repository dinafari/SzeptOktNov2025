/*
    1-Egyedisítés sorrendmegőrzéssel

    Írj függvényt, ami a tömbből kiszedi a duplikátumokat úgy, hogy az első előfordulás sorrendje megmaradjon.

    function uniqueNumbers(t: number[]): number[]


    Példa: [3, 1, 3, 2, 1] → [3, 1, 2]
    Hint: Set vagy egy seen objektum/Map.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function uniqueNumbers(t) {
    // fordító sajnos nem visz nálam pedig jó lenne new Set()-el:
    // const egyszerszam=[...new Set(t)];
    var egyszerszam = t.filter(function (value, index) { return t.indexOf(value) === index; });
    return egyszerszam;
    ;
}
console.log(uniqueNumbers([3, 1, 3, 2, 1])); //→ [3, 1, 2]
/*
    2) Csoportosítás kezdőbetű szerint

    Írj függvényt, ami csoportosítja a szavakat az első betű alapján (kisbetűsítve), és egy Record<string, string[]>-ot ad vissza.

    function groupByFirstLetter(szavak: string[]): Record<string, string[]>


    Példa: ["Alma","ananász","Barack"] → { a:["Alma","ananász"], b:["Barack"] }
    Hint: kezeld az üres stringet is.

*/
function groupByFirstLetter(szavak) {
    var csoportositott = {};
    szavak.forEach(function (szo) {
        if (szo.length === 0)
            return ""; // üres szöveg esetén visszatér
        var elsoBetu = szo.charAt(0).toLowerCase();
        if (!csoportositott[elsoBetu]) {
            csoportositott[elsoBetu] = [];
        }
        csoportositott[elsoBetu].push(szo);
    });
    return csoportositott;
}
console.log(groupByFirstLetter(["Alma", "ananász", "Barack"])); // → { a:["Alma","ananász"], b:["Barack"] }
function toCSV(rows) {
    // 1️⃣ Ha üres a tömb, térjünk vissza üres stringgel
    if (rows.length === 0)
        return "";
    // 2️⃣ Fejléc – az első objektum kulcsai
    var fejlec = Object.keys(rows[0]).join(",");
    // 3️⃣ Sorok – minden objektum értékeit join-oljuk
    var sorok = rows.map(function (obj) {
        return Object.values(obj).join(",");
    });
    // 4️⃣ Fejléc + sorok összefűzése új sorokkal
    return __spreadArray([fejlec], sorok, true).join("\n");
}
console.log(toCSV([{ nev: "Béla", jegy: 5, tantargy: "Matematika" }]));
//nev,jegy,tantargy
//Béla,5,Matematika
