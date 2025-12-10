/*   
    🟦 4 TypeScript feladat
    ✅ 5) Pozitív számok darabszáma (könnyebb)

    Írj függvényt:

    function pozitivDb(t: number[]): number


    Ami visszaadja, hány pozitív szám (>0) van a tömbben.


*/

function pozitivDb(t: number[]): number{

    const poz=t.filter((szam)=>szam >0).length;
    return poz;

}
console.log(pozitivDb([1,-3,6,-9]));


/* 

    ✅ 6) Diákok nevei egy tömbből (könnyebb)

    Interfész:

        interface Diak {
        nev: string;
        jegy: number;
    }


    Feladat:
    Add vissza csak a diákok neveit tartalmazó tömböt!


*/

interface Diak{
    nev:string;
    jegy:number;
}

const diakok:Diak[]=[
    {nev:"Józsi",jegy:5},
    {nev:"Pisti",jegy:3},
    {nev:"Géza",jegy:4},
];
function diakNevek(diakok:Diak[]):string[]{

    const csaknevek=diakok.map((diak)=>diak.nev);
    return csaknevek;



}
console.log(diakNevek(diakok));


/*
    Ez most nehéz volt, nem ment egyedül:

    🧠

    7) Termékek csoportosítása kategória szerint (közepes)

    Interfész:

    interface Termek {
        nev: string;
        ar: number;
        kategoriak: string[];  // pl. ["irodaszer", "iskolaszer"]
    }


    Feladat:
    Készíts függvényt, ami:

    kategóriánként csoportosítja a termékeket

    visszatérési típus:
    Record<string, Termek[]>

    Egy termék több kategóriában is szerepelhet!

    Példa struktúra:

    {
    irodaszer: [ {Toll}, {Füzet} ],
    iskolaszer: [ {Füzet} ],
    }





*/

  interface Termek {
        nev: string;
        ar: number;
        kategoriak: string[];  // pl. ["irodaszer", "iskolaszer"]
    }

    const termekek:Termek[]=[

        {nev:"Toll", ar:200, kategoriak:["irodaszer"]},
        {nev:"Füzet", ar:1200, kategoriak:["irodaszer" ,"iskolaszer"]},
        {nev:"Táska", ar:5000, kategoriak:["iskolaszer"]},

    ];

    function kategoriaCsoport(termekek: Termek[]): Record<string, Termek[]> {
        return termekek.reduce((acc, termek) => {
            termek.kategoriak.forEach((kat) => {
                if (!acc[kat]) {
                    acc[kat] = [];
                }
                acc[kat].push(termek);
            });
            return acc;
        }, {} as Record<string, Termek[]>);
    }
    console.log(kategoriaCsoport(termekek));


    // Without forEach — use nested reduce
    function kategoriaCsoport2(termekek: Termek[]): Record<string, Termek[]> {
        return termekek.reduce((acc, termek) =>
            termek.kategoriak.reduce((a, kat) => {
                (a[kat] ??= []).push(termek);
                return a;
            }, acc), {} as Record<string, Termek[]>);
    }
    console.log(kategoriaCsoport2(termekek));
    /*
         {
            irodaszer: [ {Toll}, {Füzet} ],
            iskolaszer: [ {Füzet} ],
        }

    
    
    */





/*
    Ehez is kellett segítség, pedig így utólag látva 
    rövidebb a megoldása mint a 7-es feladatnak. :)
  
    🧠 8) Objektum átalakítása – id → rekord (nehezebb)

    Interfész:

    interface User {
        id: number;
        nev: string;
        aktiv: boolean;
    }


    Feladat:
    Írj függvényt, amely a User-listát átalakítja rekorddá:

    Record<number, User>


    ahol a kulcs az id.

    Példa:

    [
    {id:1, nev:"Anna", aktiv:true},
    {id:2, nev:"Béla", aktiv:false}
    ]


    
    
*/



    interface User {
        id: number;
        nev: string;
        aktiv: boolean;
    }

    const felhasznalok:User[]=[
        {id:1, nev:"Anna", aktiv:true},
        {id:2, nev:"Béla", aktiv:false}

    ];

    function atalakitRecord(felhasznalok:User[]):Record<number, User>{

        const rekord:Record<number, User>={};

      
        return felhasznalok.reduce((acc, user) => {
            acc[user.id] = user;
            return acc;
        }, rekord);



    }
    console.log(atalakitRecord(felhasznalok));

    /* →

        {
            1: {id:1, nev:"Anna", aktiv:true},
            2: {id:2, nev:"Béla", aktiv:false}
        }
   */ 

