//Creation d'une classe
var Sport = function (nom, description){
    this.nom = nom || "Pas de nom";
    this.description = description || "";

    this.afficher = function(){
        console.log(`${this.nom} ${this.description}`);
    }
}
var sport = new Sport("Squash", "un jeu de raquette");
var sport2 = new Sport("Foot", "un jeu de ballon");

sport.afficher();
sport2.afficher();