//Declaration de variable en TS
var unBoolean = true;
var age = 29;
var profession = "Axel";
//Syntaxe JS ok
var uneVar = 10;
//better
var uneAutreVar = 10;
uneAutreVar = "dix";
var Etablissement;
(function (Etablissement) {
    Etablissement[Etablissement["Maternelle"] = 0] = "Maternelle";
    Etablissement[Etablissement["Primaire"] = 1] = "Primaire";
    Etablissement[Etablissement["College"] = 2] = "College";
    Etablissement[Etablissement["Lycee"] = 3] = "Lycee";
})(Etablissement || (Etablissement = {}));
;
var etablissement = Etablissement.Maternelle;
//afficher
console.log(unBoolean);
console.log(age + 4);
console.log(profession);
console.log(uneVar);
console.log(uneAutreVar);
console.log(etablissement);
