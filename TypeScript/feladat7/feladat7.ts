/* 🐞 1️⃣ – Összeg + átlag visszaadása objektumban

Írj függvényt, ami egy számtömbből visszaadja az összegét és átlagát egy objektumban!

function osszegEsAtlag(tomb: number[]): { osszeg: number; atlag: number }


🧠 Példa:

osszegEsAtlag([2, 4, 6]) ➜ { osszeg: 12, atlag: 4 }


💡 Tipp: reduce, tomb.length, és visszatérés objektummal.

*/

function osszegEsAtlag(tomb: number[]): { osszeg: number; atlag: number }{

    if (tomb.length === 0) return { osszeg: 0, atlag: 0 };//Ha szeretnéd elkerülni a nullával osztást (üres tömb esetén),

    const osszege=tomb.reduce((acc,curr)=>acc+curr,0);
    const atlaga=osszege/tomb.length;
    return {osszeg:osszege, atlag:atlaga};

}
console.log(osszegEsAtlag([2, 4, 6]));








/* 🌼  2️⃣ – Szavak rövidítése max 3 betűre

Írj függvényt, ami a szavakat 3 karakterre rövidíti, és pontot tesz a végére (...).

function roviditSzavak(szavak: string[]): string[]


🧠 Példa:

roviditSzavak(["alma", "banán", "kiwi"]) ➜ ["alm...", "ban...", "kiw..."]


💡 Tipp: map, slice(0, 3), + "...".
*/
function roviditSzavak(szavak: string[]): string[]{
    const haromkarakter=szavak.map((szo)=>szo.slice(0,3)+"...");
    return haromkarakter;
}
console.log(roviditSzavak(["alma", "banán", "kiwi"]));//➜ ["alm...", "ban...", "kiw..."]


