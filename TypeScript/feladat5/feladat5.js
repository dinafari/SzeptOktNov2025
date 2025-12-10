/*
   1. Írj függvényt, ami visszaadja egy tömb elemeinek szorzatát!

    function szorzat(tomb: number[]): number


    Példa:
   [2, 3, 4] → 24



*/
function szorzat(tomb) {
    return tomb.reduce(function (acc, szam) { return acc * szam; }, 1);
}
console.log(szorzat([2, 3, 4])); //24
/*

   2. Betűk száma

    Írj függvényt, ami visszaadja, hogy egy szövegben hány betű található (szóközök nélkül)!

        function betuDarab(szoveg: string): number


    Példa:
   "alma fa" → 6


*/
function betuDarab(szoveg) {
    var regex = / +/g; //szüneteket eltávolítja , jó nehéz volt megtalálni.:) regexre szeretnék kérni tippeket tőled :)
    var osszevont = szoveg.replace(regex, '');
    return osszevont.length;
}
console.log(betuDarab("alma fa")); // 6
/*
    Negatív számok kiválogatása

    Írj függvényt, ami visszaadja a negatív számokat egy tömbből!

    function negativak(tomb: number[]): number[]


    Példa:
    [3, -5, 2, -1, 0] → [-5, -1]


*/
function negativak(tomb2) {
    return tomb2.filter(function (szam) { return szam < 0; });
}
console.log(negativak([3, -5, 2, -1, 0])); //[-5, -1]
