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

function primE(szam: number): boolean{
    if(szam<2){
        return false
    

    }
    for(let i = 2; i*i <= szam; i++){
        //vagy:(let i = 2; i <= Math.sqrt(szam); i++)
        if(szam % i === 0){
            return false
        }
    }
    return true
}
console.log(primE(7)); //→ true
console.log(primE(9)); //→ false





/*     2️⃣ Dolgozók szűrése és átlag fizetés

Készíts egy Dolgozo interfészt:

interface Dolgozo { nev: string; fizetes: number; beosztas: string; }


Készíts függvényt:

function atlagFizetes(lista: Dolgozo[], minFizetes: number): number


ami visszaadja azoknak az átlagfizetését,
akiknek a fizetése legalább minFizetes.

Példa:
atlagFizetes([{nev:"Anna", fizetes:400000, beosztas:"HR"}, {nev:"Béla", fizetes:600000, beosztas:"Fejlesztő"}], 500000)
→ 600000 */

interface Dolgozo{
    nev:string,
    fizetes:number,
    beosztas:string,
}

function atlagFizetes(lista: Dolgozo[], minFizetes: number): number{

    const fiz=lista.filter((dolgozo)=>dolgozo.fizetes>=minFizetes).map((dolgozo)=>dolgozo.fizetes)

    const osszeg=fiz.reduce((acc, curr)=>acc+curr,0)

    return fiz.length === 0 ? 0 : osszeg/fiz.length //ha nincs olyan dolgozó, aki megfelel (fiz.length === 0), ne osztódjon nullával.

  


}
console.log(atlagFizetes([{nev:"Anna", fizetes:400000, beosztas:"HR"}, {nev:"Béla", fizetes:600000, beosztas:"Fejlesztő"}], 500000));
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

function betuGyakorisag(szoveg: string): Record<string, number>{

    const eredmeny: Record<string, number>={}

    for(const betu of szoveg.toLowerCase()){
        eredmeny[betu]= (eredmeny[betu] || 0) + 1
    }

    return eredmeny
}
console.log(betuGyakorisag("Alma"));

//Számjegyek gyakorisága egy hosszabb számon belül:

function szamgyakorisag(szamsor: number):Record<number, number>{

    const eredm:Record<number,number>={};

    const szoveg = szamsor.toString();// szöveggé kell alakítani vagy tömbbé különben egy number nem iterálható számsorként
    for(const betu of szoveg){

        const szam=Number(betu); //szamként kell kezelje a betűt.

        eredm [szam] =(eredm[szam] || 0)+1
    }
    return eredm;


}
console.log(szamgyakorisag(12344));//✅ {1:1, 2:1, 3:1, 4:2}

/*
    vagy:1. Ha tömböt szeretnél vizsgálni:

    Például [1, 2, 3, 4, 4] → {1:1, 2:1, 3:1, 4:2}

    function szamgyakorisag(szamsor: number[]): Record<number, number> {
        const eredm: Record<number, number> = {};
        for (const szam of szamsor) {
            eredm[szam] = (eredm[szam] || 0) + 1;
        }
        return eredm;
    }

    console.log(szamgyakorisag([1, 2, 3, 4, 4])); // ✅ {1:1, 2:1, 3:1, 4:2}




*/
