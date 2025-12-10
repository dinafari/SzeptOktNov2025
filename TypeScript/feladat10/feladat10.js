/* 3 TypeScript feladatok:
1️⃣ Prímszám-ellenőrzés

Írj függvényt, ami eldönti, hogy egy szám prímszám-e!
Ha igen → true, különben false.

function primE(szam: number): boolean


Példa:
primE(7) → true
primE(9) → false

💡 Tipp: ciklus vagy Array.some() is használható,
de próbáld meg hatékonyan (i*i <= szam).*/
function primE(szam) {
    if (szam < 2) {
        return false;
    }
    for (var i = 2; i * i <= szam; i++) {
        //vagy:(let i = 2; i <= Math.sqrt(szam); i++)
        if (szam % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(primE(7)); //→ true
console.log(primE(9)); //→ false
function atlagFizetes(lista, minFizetes) {
    var fiz = lista.filter(function (dolgozo) { return dolgozo.fizetes >= minFizetes; }).map(function (dolgozo) { return dolgozo.fizetes; });
    var osszeg = fiz.reduce(function (acc, curr) { return acc + curr; }, 0);
    return fiz.length === 0 ? 0 : osszeg / fiz.length; //ha nincs olyan dolgozó, aki megfelel (fiz.length === 0), ne osztódjon nullával.
}
console.log(atlagFizetes([{ nev: "Anna", fizetes: 400000, beosztas: "HR" }, { nev: "Béla", fizetes: 600000, beosztas: "Fejlesztő" }], 500000));
//→ 600000 
/*3️⃣ Betűgyakoriság (kis-nagybetű mindegy)

Készíts egy függvényt, ami megszámolja, hogy egy adott szövegben
melyik betű hányszor fordul elő.
A visszatérés típusa legyen:

Record<string, number>


Példa:
betuGyakorisag("Alma") → { a:2, l:1, m:1 }

💡 Tipp: kisbetűsíts (toLowerCase()), majd for...of és objektumépítés
*/
function betuGyakorisag(szoveg) {
    var eredmeny = {};
    for (var _i = 0, _a = szoveg.toLowerCase(); _i < _a.length; _i++) {
        var betu = _a[_i];
        eredmeny[betu] = (eredmeny[betu] || 0) + 1;
    }
    return eredmeny;
}
console.log(betuGyakorisag("Alma"));
//Számjegyek gyakorisága egy hosszabb számon belül:
function szamgyakorisag(szamsor) {
    var eredm = {};
    var szoveg = szamsor.toString(); // szöveggé kell alakítani vagy tömbbé különben egy number nem iterálható számsorként
    for (var _i = 0, szoveg_1 = szoveg; _i < szoveg_1.length; _i++) {
        var betu = szoveg_1[_i];
        var szam = Number(betu); //szamként kell kezelje a betűt.
        eredm[szam] = (eredm[szam] || 0) + 1;
    }
    return eredm;
}
console.log(szamgyakorisag(12344)); //✅ {1:1, 2:1, 3:1, 4:2}
