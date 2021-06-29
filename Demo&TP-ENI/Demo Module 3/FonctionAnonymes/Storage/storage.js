//Lecture /Ecriture d'une var primitive
let prenom = "Axel";
//Save in local storage
localStorage.setItem("Player", prenom);
//Read
let prenomLu = localStorage.getItem("Player");
console.log(prenomLu);

//Read/Write Array prim
let prenomsJoueurs = ["Hugo", "Olivier", "Axel", "..."];
//save
localStorage.setItem("joueurs", prenomsJoueurs);
//Read
let prenomsJoueursLus = localStorage.getItem("joueurs");
console.log(prenomsJoueursLus);

//Read & Write Object
let gardien = {prenom :"Hugo", nom:"Lloris"};
//Save
// localStorage.setItem("gardien", gardien); 
localStorage.setItem("gardien", JSON.stringify(gardien));
//Read
let gardienLu = localStorage.getItem("gardien");
console.log(gardienLu);
let objetGardienLu = JSON.parse(localStorage.getItem("gardien"));
console.log(objetGardienLu);

//Read & Write Objet from class

class Joueurs {
    constructor(nom ,prenom, poste){
        this.nom = nom;
        this.prenom = prenom;
        this.poste = poste;
    }
    getDescription () {
        return this.prenom + " " + this.nom + " [" + this.poste + "]";
    }
}
let pavard = new Joueurs("Pavard", "Benjamin", "Defenseur");
console.log(pavard);
console.log(pavard.getDescription());
//Save
localStorage.setItem("pavard", JSON.stringify(pavard));
//READ 
let pavardLu = JSON.parse(localStorage.getItem("pavard"));
console.log(pavardLu);
//Reassocier le type Joueurs
Object.setPrototypeOf(pavardLu, Joueurs.prototype);
console.log(pavardLu);
console.log(pavardLu.getDescription());
