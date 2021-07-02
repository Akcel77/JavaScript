//Declaration d'un class en TS
class Sport{
    public nom : string;
    private prive : string;

    constructor(nom : string, public description : string){
        this.nom = nom;
        this.prive = "valeur cachee";
    }
    public afficher() : void{
        console.log(this.nom + " " + this.description);
    }
}
var sport : Sport = new Sport("Squash ", "un sport de raquette");
sport.afficher();

//Heritage 
class SportDeCompetition extends Sport {
    constructor(nom : string, description : string, public niveau :string){
        super(nom, description);
    }
    public afficher():void{
        super.afficher();
        console.log("Niveau " + this.niveau);
    }
}

//Creation d'un objet du type SportDeCompetition
var sportDeCompetition : SportDeCompetition = new SportDeCompetition("Tenis", "Un jeu de grande raquette", "International");
sportDeCompetition.afficher();

//Interface
interface Jouable {
    score? : string;
    jouer(joueur1: string, joueur2: string):string;
}

class SportJouable extends Sport implements Jouable {
    jouer(joueur1: string, joueur2: string): string {
        let vainqueur = joueur1;
        if(Math.floor(Math.random()*Math.floor(2)) ==0){
            vainqueur = joueur2;
        }
        return vainqueur;
    }
}

let sportJouable : Jouable = new SportJouable("Badminton", "Un sport fatiguant");
console.log("le vainqueur est : " + sportJouable.jouer("ED", "Hans") );

//Interface de methodes 
interface jouer{
    (joueur1: string, joueur2: string): string;
}
let jouerAuBadminton : jouer = function(joueur1: string, joueur2: string):string{
    console.log(joueur1 + " et " + joueur2 + " joue au badminton");
    return joueur1;
}

console.log("Le vainqueur est " + jouerAuBadminton("Ray", "Ron"));
