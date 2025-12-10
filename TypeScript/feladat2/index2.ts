/*
    1.Diák interfész
    Hozz létre egy Diak interfészt (nev, kor) és írj függvényt, 
    ami visszaadja a legfiatalabb diák nevét.

*/ 


interface Diak{
    nev:string;
    kor:number;

}

const diakok:Diak[]=[
    {nev:"Cili",kor:18},
    {nev:"Géza",kor:38},
    {nev:"Kati",kor:21},
    {nev:"Pisti",kor:19},
];

function legfiatalabb(diakok:Diak[]):string{
    const min=Math.min(...diakok.map((diak)=>diak.kor));
    const legfd= diakok.filter((diak)=>diak.kor===min);
    return legfd.map((diak)=>diak.nev).join(" ");
}
console.log(legfiatalabb(diakok));




/* 
    2.Generikus tömb hossz
    Írj generikus függvényt, ami bármilyen típusú tömb hosszát visszaadja.
*/

function generikusTombhossz<T>(tomb:T[]):number{
    return tomb.length;

}
console.log(generikusTombhossz([2,45,6,7]));// 4
console.log(generikusTombhossz(["alma","Szilva","körte",1,2]));
console.log(generikusTombhossz([{ nev: "Géza" }, { nev: "Kati" }])); // 2
console.log(generikusTombhossz(["alma", "szilva", "körte"])); // 3


/*
    3.Dolgozó fizetés emelése
    Hozz létre egy Dolgozo osztályt (nev, fizetes) és írj metódust, ami 10%-kal megemeli a fizetését.
*/

class Dolgozoember {
  constructor(public nev: string, public fizetes: number) {}

  emelFizetest(): void {
    this.fizetes *= 1.1; // +10%
  }

  info(): string {
    return `${this.nev} új fizetése: ${this.fizetes.toLocaleString()} Ft`;
  }
}

const dolgozo1 = new Dolgozoember("Géza", 400_000);
dolgozo1.emelFizetest();
console.log(dolgozo1.info()); //  Géza új fizetése: 440,000 Ft





