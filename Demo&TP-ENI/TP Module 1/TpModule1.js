//Exercice 1 
/*
À l'aide de la méthode Math.random, écrivez un programme qui s'arrête lorsque tous les
nombres de la plage [0;100[ sont tirés au sort.
Indiquer le nombre de tirages nécessaires.
*/
var tabNumber = [];
var count = 0;

for (var i = 0; i<100; i++){
    tabNumber.push(false);
}

var countNumberLeft = tabNumber.length;
do{
    var numberAlea = parseInt(Math.random()*100);
    if(tabNumber[numberAlea] === false){
        tabNumber[numberAlea] = [numberAlea];
        countNumberLeft--;
    }
    count++;
}while(countNumberLeft > 0)
console.log(tabNumber);
console.log(count);


//Exercice 2 
/*
Trier les lettres d’une phrase par ordre alphabétique. La phrase utilisée dans la solution est
la suivante :
"une chaine avec des lettres dans un certain ordre pour donner du sens"
*/

var str = "une chaine avec des lettres dans un certain ordre pour donner du sens";
var tabChar = [];
var strTrim = str.replace(/ /g, "");
console.log(strTrim);
for(var i = 0; i<strTrim.length; i++){
    tabChar.push(strTrim.charAt(i));
}
tabChar = tabChar.sort().join("");
console.log(tabChar);


//Exercice 3
/* 
Mettre en majuscule la première lettre de chaque mot d’une phrase. La phrase utilisée dans
la solution est la suivante :
"une phrase sans majuscule"
*/

var strLower = "une phrase sans majuscule";
function toCamelCase(string){
    var splitStr = string.toLowerCase().split(' ');
    for ( var j = 0; j < splitStr.length; j++){
        splitStr[j] = splitStr[j].charAt(0).toUpperCase() + splitStr[j].substring(1);
    }
    return splitStr.join(' ');
}

console.log(toCamelCase(strLower));