//Declare une fonction classique 
let donneMoiUnEntier = function (){
    return Math.floor(Math.random()*10);
}
console.log(donneMoiUnEntier());

//Premier syntaxe exp lambda
let donneMoiUnEntierV2 = () => {
    return Math.floor(Math.random()*10);
}
console.log(donneMoiUnEntierV2());

//Deuxieme syntaxe exp lambda
let donneMoiUnEntierV3 = () => Math.floor(Math.random()*10);
console.log(donneMoiUnEntierV3());

//Cas concret
let tab : Array<number> = [1,2,5,6,9];
tab.forEach((val, id, tableau) => console.log("_tableau_[%i]=%i", id, val));
