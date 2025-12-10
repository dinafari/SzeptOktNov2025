/*      🟦 4 TypeScript feladat
1) Számok – csak a 10 felettiek átlaga

Feladat:
Írj függvényt, ami csak a 10-nél nagyobb számok átlagát adja vissza.
Ha nincs ilyen → térjen vissza 0-val.

Példa:

tizeFelettiAtlag([5,12,20]) → 16
tizeFelettiAtlag([1,2,3]) → 0
*/


function tizeFelettiAtlag(tomb1:number[]):number{
    const tizfelett=tomb1.filter((szam)=>szam >10);

    if(tizfelett.length ===0){return 0};

    return tizfelett.reduce((acc,curr)=>acc+curr,0)/tizfelett.length;

}
console.log(tizeFelettiAtlag([5,12,20]));//→ 16
console.log(tizeFelettiAtlag([1,2,3]));//→ 0


/*

2) Autók szűrése – csak elektromos

Interfész:

interface Auto {
  tipus: string;
  ev: number;
  elektromos: boolean;
}


Feladat:
Add vissza csak az elektromos autókat (elektromos === true).

Példa:

elektromosAutok([{tipus:"Tesla", elektromos:true}, {tipus:"BMW", elektromos:false}])
→ [{Tesla...}]
*/

interface Auto{
    tipus:string;
    ev:number;
    elektromos:boolean;
}

 
function elektromosAutok(autok:Auto[]):Auto[]{
    return autok.filter((auto)=>auto.elektromos===true);


}
console.log(elektromosAutok([{tipus:"Tesla",ev:2025, elektromos:true}, {tipus:"BMW",ev:1990, elektromos:false}]));
//→ [{Tesla...}]

/*3) Termékek árának módosítása – áremelés (%) Itt kellett egy kis segítség:(

Interfész:

interface Termek {
  nev: string;
  ar: number;
}


Feladat:
Írj függvényt, ami egy százalékos értékkel megnöveli minden termék árát.
Új tömböt adjon vissza!

Példa:

arEmeles([{Toll:200}], 10) → [{Toll:220}]


*/


interface Termek {
  nev: string;
  ar: number;
}

function arEmeles(termekek:Termek[],szazalek:number):Termek[]{
    
    
    const szorzo=szazalek/100;
    const ar=termekek.filter((termek)=>termek.ar );
    return termekek.map((termek)=> ({...termek, ar: termek.ar + termek.ar * szorzo}));

    

}
console.log(arEmeles([{nev:"Toll",ar:200}], 10));// → [{nev:"Toll",ar:220}]);

/*4) Csoportosítás év szerint (közepes) Itt is kellett egy kis segítség :(

Interfész:

interface Film {
  cim: string;
  ev: number;
}


Feladat:
Csoportosítsd a filmeket év szerint Record<number, Film[]> formában.

Példa:

{
  1999: [Matrix],
  2008: [Dark Knight],
}
   */




//Interfész:

interface Film {
  cim: string;
  ev: number;
}

const filmek:Film[]=[

    {cim:"Matrix",ev:1999},
    {cim:"Dark Knight",ev:2008},
];

function evszerintFilmek(filmek:Film[]):Record<number, Film[]> {

    const evszam:Record<number, Film[]>={};

    // ide írd a megoldást


    return filmek.reduce((acc, film)=> { acc [film.ev]= acc [film.ev] ? [...acc[film.ev], film] : [film]; return acc;},evszam);


}    
console.log(evszerintFilmek(filmek));
/* {
  1999: [Matrix],
  2008: [Dark Knight],
}*/