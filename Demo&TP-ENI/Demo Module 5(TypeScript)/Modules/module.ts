module BusinessObject{
    export class Sport{
        constructor(public nom : string, public description : string){

        }
        public afficher():void{
            console.log(this.nom + ": " + this.description);
        }
    }
}

var sportModule : BusinessObject.Sport = new BusinessObject.Sport("Football", "Sport de ballon");
sportModule.afficher();

import Business = BusinessObject;
var sportAlias = Business.Sport;