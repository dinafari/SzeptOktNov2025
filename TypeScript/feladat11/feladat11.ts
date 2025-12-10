//Készíts egy függvényt, ami egy számtömbből kiszedi a prímszámokat, és visszaadja őket egy új tömbben.

function primszamE(szam: number): boolean{
    if(szam < 2) return  false;
 
    for(let i=2; i*i<=szam;i++){
        if(szam %i ===0){
            return false; // osztható → nem prím
        }
      
    }
    return true;// csak akkor tér vissza, ha a teljes ciklus lefutott osztó nélkül
    
}

function primLista(szamok: number[]): number[]{
    
   return szamok.filter(primszamE);

}
console.log(primLista([1,2,3,4,5,6,7,8,9,10]));  // → [2,3,5,7] 

//2️⃣ Dolgozók – átlag fizetés beosztás szerint

/*  A függvény:

vegye a listából csak az adott beosztású dolgozókat

számolja ki az átlag fizetésüket

ha nincs ilyen beosztás, adjon vissza 0-t.  */

interface Dolgozo {
  nev: string;
  fizetes: number;
  beosztas: string;
}

const dolgozok: Dolgozo[] = [
  { nev: "Anna", fizetes: 400000, beosztas: "HR" },
  { nev: "Béla", fizetes: 600000, beosztas: "Fejlesztő" },
  { nev: "Csilla", fizetes: 800000, beosztas: "Fejlesztő" },
];

function atlagFizetesBeosztasSzerint(lista: Dolgozo[],beosztas: string): number{
    const beosztasraszur=lista.filter((dolgozo)=>dolgozo.beosztas===beosztas);

    if(beosztasraszur.length===0){return 0;}
    const fizosszegez=beosztasraszur.reduce((acc,curr)=>acc+curr.fizetes,0);
    const atlaguk=fizosszegez/beosztasraszur.length;

    return atlaguk;

}

console.log(atlagFizetesBeosztasSzerint(dolgozok,"Fejlesztő")); // → 700000
console.log(atlagFizetesBeosztasSzerint(dolgozok, "Tesztelő"));  // → 0


//Írj egy függvényt, ami visszaadja egy szöveg leggyakrabban előforduló betűjét
//  (kis-nagybetű ne számítson, mindent kisbetűsre kezelj).

/*   
3️⃣ Betűgyakoriság (kis-nagybetű mindegy)  
Szabályok:

csak a betűk számítsanak (a–z, ékezeteseket is veheted, ahogy szeretnéd)

ha több betű azonos gyakoriságú, bármelyiket visszaadhatja

ha a szöveg üres, adjon vissza null-t*/

function leggyakoribbBetu(szoveg: string): string | null{

    if (!szoveg) return null;//ha nincs szöveg akkor null visszatérés


    const gyakorisag:Record<string,number>={};
 
 

    for(const betu of szoveg.toLowerCase()){
        if(/[a-záéíóöőúüű]/i.test(betu)){// csak betűk

            gyakorisag[betu]=(gyakorisag[betu] || 0) +1;

        }
      

    }
    let maxBetu:string | null=null;
    let maxErtek=0;

    for(const[betu,db] of Object.entries(gyakorisag)){
        if(db> maxErtek){
            maxErtek=db;
            maxBetu=betu;
        }
    }
    return maxBetu;

 

  


}
console.log(leggyakoribbBetu("Alma"));       // → "a"
console.log(leggyakoribbBetu("Helló hello")); // → "l" vagy "e" (ahogy kijön)
console.log(leggyakoribbBetu("") );          // → null