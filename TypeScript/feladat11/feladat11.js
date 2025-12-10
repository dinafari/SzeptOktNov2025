//Készíts egy függvényt, ami egy számtömbből kiszedi a prímszámokat, és visszaadja őket egy új tömbben.
function primszamE(szam) {
    if (szam < 2)
        return false;
    for (var i = 2; i * i <= szam; i++) {
        if (szam % i === 0) {
            return false; // osztható → nem prím
        }
    }
    return true; // csak akkor tér vissza, ha a teljes ciklus lefutott osztó nélkül
}
function primLista(szamok) {
    return szamok.filter(primszamE);
}
console.log(primLista([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // → [2,3,5,7] 
var dolgozok = [
    { nev: "Anna", fizetes: 400000, beosztas: "HR" },
    { nev: "Béla", fizetes: 600000, beosztas: "Fejlesztő" },
    { nev: "Csilla", fizetes: 800000, beosztas: "Fejlesztő" },
];
function atlagFizetesBeosztasSzerint(lista, beosztas) {
    var beosztasraszur = lista.filter(function (dolgozo) { return dolgozo.beosztas === beosztas; });
    if (beosztasraszur.length === 0) {
        return 0;
    }
    var fizosszegez = beosztasraszur.reduce(function (acc, curr) { return acc + curr.fizetes; }, 0);
    var atlaguk = fizosszegez / beosztasraszur.length;
    return atlaguk;
}
console.log(atlagFizetesBeosztasSzerint(dolgozok, "Fejlesztő")); // → 700000
console.log(atlagFizetesBeosztasSzerint(dolgozok, "Tesztelő")); // → 0
//Írj egy függvényt, ami visszaadja egy szöveg leggyakrabban előforduló betűjét
//  (kis-nagybetű ne számítson, mindent kisbetűsre kezelj).
/*
3️⃣ Betűgyakoriság (kis-nagybetű mindegy)
Szabályok:

csak a betűk számítsanak (a–z, ékezeteseket is veheted, ahogy szeretnéd)

ha több betű azonos gyakoriságú, bármelyiket visszaadhatja

ha a szöveg üres, adjon vissza null-t*/
function leggyakoribbBetu(szoveg) {
    if (!szoveg)
        return null; //ha nincs szöveg akkor null visszatérés
    var gyakorisag = {};
    for (var _i = 0, _a = szoveg.toLowerCase(); _i < _a.length; _i++) {
        var betu = _a[_i];
        if (/[a-záéíóöőúüű]/i.test(betu)) { // csak betűk
            gyakorisag[betu] = (gyakorisag[betu] || 0) + 1;
        }
    }
    var maxBetu = null;
    var maxErtek = 0;
    for (var _b = 0, _c = Object.entries(gyakorisag); _b < _c.length; _b++) {
        var _d = _c[_b], betu = _d[0], db = _d[1];
        if (db > maxErtek) {
            maxErtek = db;
            maxBetu = betu;
        }
    }
    return maxBetu;
}
console.log(leggyakoribbBetu("Alma")); // → "a"
console.log(leggyakoribbBetu("Helló hello")); // → "l" vagy "e" (ahogy kijön)
console.log(leggyakoribbBetu("")); // → null
