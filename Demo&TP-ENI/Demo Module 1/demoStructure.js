//Exemple 1 
//Programme principal
try{


    var phrase = "une phrase avec des consonnes et des voyelles";
    var countVoyel = 0;
    var nombreA = 0;
    var nombreE = 0;

    for(let lettre of phrase)
    {
        if(estVoyelle(lettre)){
            console.log("la voyelle '%s' est presente ", lettre);
            countVoyel++;
            switch(lettre){
                case 'a':
                    nombreA++;
                    break;
                case 'e':
                    nombreE++;
                    break;
            }
        }
    }
    console.log("Il y'a %i voyelles", countVoyel);
    console.log("il y'a %i a", nombreA);
    console.log("il y'a %i e", nombreE);
    console.log("Il y'a %i consones", phrase.replace(/ /g, '').length - countVoyel);
    console.log(UneErreur)
}catch(e){
    console.log("Une erreur est survenue : " + e);
}

function estVoyelle(lettre)
{
    if(lettre != undefined && "aeiouy".indexOf(lettre) >= 0 ){
        return true;
    }
    return false;
}

//Exemple 2
// Programme principal
var nombreReel = Math.random()* 100;
console.log(nombreReel);

var nombreEntier = parseInt(nombreReel);
console.log(nombreEntier);

//EXEMPLE 3 
//PROGRAMME PRINCIPAL
var noel2018 = new Date(2018,11,25);
console.log(noel2018);
console.log(noel2018.toLocaleDateString());
console.log(noel2018.getDay());
console.log(noel2018.getDate());
console.log(noel2018.getMonth()+1);
console.log(noel2018.getFullYear());