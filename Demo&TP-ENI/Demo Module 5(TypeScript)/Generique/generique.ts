//Utilisation d'un tableau type en TS 
let tabType : number[] = [1,2,3];
tabType.push(4);
console.log(tabType);

//Utilisation d'un tableau generique en ts 
let tabGeneric : Array<number> = [9,8,7];
tabGeneric.push(6);

//Declaration classe generique
class Viande{
    constructor(public type : string){
    }
}

class Legume{
    constructor(public type : string){
    }
}
class Poulet extends Viande{}
class Boeuf extends Viande{}
class Tomate extends Legume{}
class Salade extends Legume{}
class Sandwich <V extends Viande,L extends Legume> {
    constructor(public viande : V, public legume : L){}
    
    public afficher():void{
        console.log("Sandwich " +this.viande.type+"/" +this.legume.type);
    }
}

let sandPouletTomate : Sandwich<Poulet, Tomate> = new Sandwich<Poulet, Tomate>(
    new Poulet("Poulet de Bresse"),
    new Tomate("Tomate coeur de boeuf")
);

sandPouletTomate.afficher();