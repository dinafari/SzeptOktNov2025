//1. Pozitív számok száma

// Írj  függvényt, ami megszámolja, hány pozitív szám van a tömbben.

function hanyPozitivSzam(tomb:number[]):number{

    const pozitiv= tomb.filter((szam)=>szam>0);
    return pozitiv.length;

}
console.log(hanyPozitivSzam([-3, 5, 0, 7, -1, 8]));//3

//Vagy:

function pozitivDb(tomb: number[]): number {
  let db = 0;
  for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] > 0) {
            db++;
        }
    }
    return db;
}

console.log(pozitivDb([-3, 5, 0, 7, -1, 8])); // 3




//2. Szöveg első betűje nagybetű

//Készíts egy nagyKezdobetu(szoveg: string): string függvényt, ami a szöveg első betűjét nagybetűsre alakítja.

function nagyKezdobetu(szoveg: string): string {
    const nagybetu= szoveg.charAt(0).toUpperCase() + szoveg.slice(1);//charAt(0)elso karaktert átalakítom és hozzáadom +szöveg többi részétés levágom az első betűt a kis a-t slice(1)(a)->( lma)lesz belőle :Alma
    return nagybetu;
}
console.log(nagyKezdobetu("alma"));

//Ezt hogy lehetne ciklussal?

function nagyKezdobetuCiklussal(szoveg: string): string {
  if (!szoveg) return szoveg;
  let eredmeny = "";
  let elsoNemSpaceKesz = false;
  for (let i = 0; i < szoveg.length; i++) {
    const ch = szoveg[i];
    if (!elsoNemSpaceKesz && ch !== " ") {
      eredmeny += ch.toUpperCase();
      elsoNemSpaceKesz = true;
    } else {
      eredmeny += ch;
    }
  }
  return eredmeny;
}
console.log(nagyKezdobetuCiklussal("alma"));




//3. Legnagyobb szám a tömbben

//Írj egy legnagyobb(tomb: number[]): number függvényt, ami visszaadja a legnagyobb számot.

function legnagyobb(tomb2: number[]): number{
    const max=Math.max(...tomb2);
    return max;
}
console.log(legnagyobb([4, 12, 8, 22, 3]));//22

//Vagy: Ezt nézzük azért át: tomb[0] most itt nem teljesen tiszta nekem :)

function legnagyobb2(tomb: number[]): number {
  let max = tomb[0];
  for (let i = 1; i < tomb.length; i++) {
    if (tomb[i] > max) {
      max = tomb[i];
    }
  }
  return max;
}

console.log(legnagyobb2([4, 12, 8, 22, 3])); // 22

//Vagy reduce()-al:
function legnagyobbReduce(tomb: number[]): number {
  if (tomb.length === 0) throw new Error("Üres tömbnél nincs maximum.");//Ezt bárhová beteheted plusz ellenőrzésként. :)
  return tomb.reduce((m, x) => (x > m ? x : m), -Infinity);
}
console.log(legnagyobbReduce([4, 12, 8, 22, 3])); // 22
