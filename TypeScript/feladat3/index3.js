var termekek = [
    { nev: "kifli", ar: 400, tipus: "pékárú" },
    { nev: "szappan", ar: 500, tipus: "pipere" },
    { nev: "légfrissítő", ar: 800, tipus: "vegyiárú" },
    { nev: "zsemle", ar: 600, tipus: "pékárú" },
    { nev: "Alma", ar: 300, tipus: "gyümölcs" },
    { nev: "Répa", ar: 200, tipus: "zöldség" },
    { nev: "Banán", ar: 350, tipus: "gyümölcs" }
];
function adottTipus(termekek, tipus) {
    var egytipus = termekek.filter(function (termek) { return termek.tipus === tipus; });
    return egytipus.map(function (termek) { return termek.nev; }).join(" ");
}
console.log(adottTipus(termekek, "gyümölcs")); //Alma, Banán
console.log(adottTipus(termekek, "pékárú")); // kifli , zsemle
/*
    2.Írj generikus függvényt minValue<T>(arr: T[], key: keyof T): T,
    ami visszaadja a legkisebb értékű elemet egy adott kulcs alapján.

    const autok = [
        { marka: "Audi", ar: 12_000_000 },
        { marka: "Suzuki", ar: 4_000_000 },
        { marka: "BMW", ar: 18_000_000 }
    ];
    // minValue(autok, "ar") → { marka: "Suzuki", ar: 4000000 }

*/
var autok = [
    { marka: "Audi", ar: 12000000 },
    { marka: "Suzuki", ar: 4000000 },
    { marka: "BMW", ar: 18000000 }
];
function minValue(arr, key) {
    var arak = arr.map(function (item) { return item[key]; }); //Ezt elmagyarázod nemkem ? :)
    var minAr = Math.min.apply(Math, arak);
    return arr[arak.indexOf(minAr)]; //Meg ezt is nézzük át még egy kicsit át. :)
}
console.log(minValue(autok, "ar"));
/*
    3.Készíts függvényt, ami egy névlistából eltávolítja a duplikált neveket.
*/
function nemDuplikalt(lista) {
    return lista.filter(function (value, index) { return lista.indexOf(value) === index; });
    //return [...new Set(lista)];
}
console.log(nemDuplikalt(["Anna", "Béla", "Anna", "Csilla"])); //→ ["Anna", "Béla", "Csilla"]
