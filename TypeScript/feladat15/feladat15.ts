
//1️⃣ Interfészes szűrés – Olcsó termékek
//Készíts egy Termek interfészt:
//Ami visszaadja azokat a termékeket, amelyek ára ≤ maxAr.



interface Termek{
    nev:string;
    ar:number;
}

function olcsoTermekek(lista: Termek[], maxAr: number): Termek[]{
    const eredmeny=lista.filter((termek)=>termek.ar<=maxAr);
    return eredmeny;

}
console.log(olcsoTermekek([{nev:"Toll",ar:200},{nev:"Táska",ar:5000}], 1000));//→ [{nev:"Toll", ar:200}]



//Írj függvényt, ami megszámolja, hogy egy szövegben
//  melyik kisbetű hányszor szerepel, és ezt visszaadja:

//Record<string, number>
//mindet toLowerCase()!

function betuDb(szoveg: string): Record<string, number> {
    if (szoveg.length === 0) return {};
    const tisztitottszoveg = szoveg.toLowerCase().split('');
    const gyakorisag: Record<string, number> = {};
    for (const betu of tisztitottszoveg) {
        gyakorisag[betu] = (gyakorisag[betu] || 0) + 1;
    }
    return gyakorisag;
}
console.log(betuDb("Alma"));//→ { a: 2, l: 1, m: 1 }


//3️⃣ Raktár – készleten lévő termékek összértéke
//Készíts interfészt:
//Csak a keszleten === true tételeket számolhatja:
//ar × db összegeit add össze!


interface RaktarItem{
    nev:string;
    ar:number;
    db:number;
    keszleten:boolean;
}

function osszErtek(raktar: RaktarItem[]): number{

    const keszleten=raktar.filter((termek)=>termek.keszleten===true);
    const osszertek=keszleten.reduce((acc,termek)=>acc+(termek.ar*termek.db),0);
    return osszertek;



}
console.log(osszErtek([
 {nev:"Toll", ar:200, db:10, keszleten:true},   // 2000
 {nev:"Ceruza", ar:100, db:5, keszleten:false},
 {nev:"Füzet", ar:300, db:7, keszleten:true}   // 2100
]))//→ 4100