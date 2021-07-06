//Declare une fonction classique 
var donneMoiUnEntier = function () {
    return Math.floor(Math.random() * 10);
};
console.log(donneMoiUnEntier());
//Premier syntaxe exp lambda
var donneMoiUnEntierV2 = function () {
    return Math.floor(Math.random() * 10);
};
console.log(donneMoiUnEntierV2());
//Deuxieme syntaxe exp lambda
var donneMoiUnEntierV3 = function () { return Math.floor(Math.random() * 10); };
console.log(donneMoiUnEntierV3());
//Cas concret
var tab = [1, 2, 5, 6, 9];
tab.forEach(function (val, id, tableau) { return console.log("_tableau_[%i]=%i", id, val); });
