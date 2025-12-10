/*
    1,Készíts Termek interfészt (nev: string, ar: number, tipus: string)
    Írj függvényt, ami csak az adott típusú termékeket adja vissza.
*/
interface Termek{
    nev:string;
    ar:number;
    tipus:string;
}

const termekek:Termek[]=[
    {nev:"kifli",ar:400,tipus:"pékárú"},
    {nev:"szappan",ar:500,tipus:"pipere"},
    {nev:"légfrissítő",ar:800,tipus:"vegyiárú"},
    {nev:"zsemle",ar:600,tipus:"pékárú"},
    { nev: "Alma", ar: 300, tipus: "gyümölcs" },
    { nev: "Répa", ar: 200, tipus: "zöldség" },
    { nev: "Banán", ar: 350, tipus: "gyümölcs" }

];


function  adottTipus(termekek:Termek[],tipus:string):string{
    const egytipus=termekek.filter((termek)=>termek.tipus === tipus);
    return egytipus.map((termek)=>termek.nev).join(" ");
}
console.log(adottTipus(termekek,"gyümölcs"));//Alma, Banán
console.log(adottTipus(termekek,"pékárú"));// kifli , zsemle


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

const autok = [
    { marka: "Audi", ar: 12_000_000 },
    { marka: "Suzuki", ar: 4_000_000 },
    { marka: "BMW", ar: 18_000_000 }
    
];
function minValue<T>(arr: T[], key: keyof T): T{

   const arak= arr.map((item)=> item[key] as unknown as number);//Ezt elmagyarázod nemkem ? :)
   const minAr= Math.min(...arak);
   return arr[arak.indexOf(minAr)];//Meg ezt is nézzük át még egy kicsit át. :)
}
console.log(minValue(autok,"ar"));

/*
    3.Készíts függvényt, ami egy névlistából eltávolítja a duplikált neveket.
*/

function nemDuplikalt(lista:string[]):string[]{

    return lista.filter((value,index)=>lista.indexOf(value)===index); //ez mindig működik :)
    //Vagy : 
    // return [...new Set(lista)]; de ezt nem viszi mindden fordító sajnos TypeScriptben s2015 kell hozzá minimum :(
}  
console.log(nemDuplikalt(["Anna", "Béla", "Anna", "Csilla"]));//→ ["Anna", "Béla", "Csilla"]
