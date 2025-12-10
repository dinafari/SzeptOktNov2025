/*
    1️⃣ Negatív számok darabszáma

    Készíts függvényt, ami megszámolja, hány negatív szám van egy számtömbben.

    Példa:

    negativDb([-3, 5, -1, 0]) → 2





*/
function negativDb(tomb) {
    var db = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] < 0) {
            db++;
        }
    }
    return db;
}
console.log(negativDb([-3, 5, -1, 0]));
function joDiakok(lista, minJEgy) {
    var eredmeny = lista.filter(function (diak) { return diak.jegy >= minJEgy; });
    return eredmeny;
}
console.log(joDiakok([{ nev: "Anna", jegy: 4 }, { nev: "Béla", jegy: 2 }], 3));
function termekNevek(termekek) {
    var nevek = termekek.map(function (termek) { return termek.nev; });
    return nevek;
}
console.log(termekNevek([{ nev: "Toll", ar: 200 }, { nev: "Füzet", ar: 300 }]));
