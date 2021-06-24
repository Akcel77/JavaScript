//Commentaire sur une ligne
/*
Commentaire sur plusieurs ligne 
*/

//Programme principale
var unNomre = 2;
var sonDouble = doubler(unNomre);
console.log("Le double de %i est %i", unNomre, sonDouble);

function doubler(unParametre)
{
    return unParametre * 2;
}
 

//EXEMPLE 2
//PROGRAMME PRINCIPAL
var uneValeur = 2;
uneValeur = "3";
console.log("uneValeur == 3 " + (uneValeur == 3));
console.log("uneValeur === 3 " + (uneValeur === 3));

//EXEMPLE 3
//PROGRAMME PRIMCIPAL
var uneVariableGlobale = "Bonjour";
traitement();
//La ligne suivante provoque ReferenceError: uneVariableNonDeclaree is not defined
// console.log("une variable non declaree vaut %s dans le programme principale", uneVariableNonDeclaree);

//Fonction utilisee dans le programme principal
function traitement()
{
    var uneVariableLocale = "Hello";
    console.log("Une variable globale vaut '%s' ", uneVariableGlobale);
    console.log("Une variable locale vaut '%s' ", uneVariableLocale)    
}

//EXEMPLE 4
//PROGRAMME PRINCIPAL
var uneVarNonDefinie;
console.log(uneVarNonDefinie);
console.log(uneVarNonDefinie==undefined);