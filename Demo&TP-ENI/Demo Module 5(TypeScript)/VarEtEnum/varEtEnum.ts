//Declaration de variable en TS
let unBoolean : boolean = true;
let age : number = 29;
let profession : string = "Axel";

//Syntaxe JS ok
let uneVar = 10;
//better
let uneAutreVar : any = 10;
uneAutreVar = "dix";

enum Etablissement {Maternelle, Primaire, College, Lycee};
var etablissement : Etablissement = Etablissement.Maternelle;

//afficher
console.log(unBoolean);
console.log(age + 4);
console.log(profession);
console.log(uneVar);
console.log(uneAutreVar);
console.log(etablissement);

