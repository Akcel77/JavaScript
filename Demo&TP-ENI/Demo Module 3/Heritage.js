//Declaration d'une classe mere
var Sport = function(nom, description){
    this.nom = nom || "Pas de nom";
    this.description = description || "";

    this.afficher = function(){
        console.log(`${this.nom} ${this.description}`);
    }
}

//Declaration d'une classe fille
var SportDeCompet = function(nom, description, niveau){
    //Appel du constructor de la classe mere
    Sport.call(this, nom, description);
    //Definition des attributs de la classe fille
    this.niveau = niveau || "";
}

//Creation d'un objet a partir de la classe fille
var sportDeCompet = new SportDeCompet("Pelote basque", "Jeu de la paume", "Regional");
console.log(sportDeCompet);
sportDeCompet.afficher();

//Ajout de methode dans le prototype de la classe sport
Sport.prototype.jouer = function(){
    console.log("Allez-y jouez!");
}
SportDeCompet.prototype = Object.create(Sport.prototype);

//Creation d'un nouvel objet a partir de la classe fille
var sportDeCompet2 = new SportDeCompet("Rugby", "Jeu de ballon ovale", "Internationale");
console.log(sportDeCompet2);
sportDeCompet2.jouer();

//Substitution de function
SportDeCompet.prototype.jouer = function (){
    console.log("C'est parti");
}
sportDeCompet2.jouer();