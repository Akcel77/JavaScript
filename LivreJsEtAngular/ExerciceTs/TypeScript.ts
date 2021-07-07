module JsAndAngularModule{
    export class Personne{
        _nom: string;    
        _prenom: string;    
        _sexe: string;    
        _age: number;    
        _taille: number;   
        _poids: number;    
    
        constructor(nom:string, prenom:string, sexe:string, age:number, taille:number, poids:number) {
            this._nom = nom;
            this._prenom = prenom;
            this._sexe = sexe;
            this._age = age;
            this._taille = taille;
            this._poids = poids
        }
        public get nom(): string {
            return this._nom;
        }
        public set nom(value: string) {
            this._nom = value;
        }
        public get prenom(): string {
            return this._prenom;
        }
        public set prenom(value: string) {
            this._prenom = value;
        }
        public get sexe(): string {
            return this._sexe;
        }
        public set sexe(value: string) {
            this._sexe = value;
        }
        public get age(): number {
            return this._age;
        }
        public set age(value: number) {
            this._age = value;
        }
        public get taille(): number {
            return this._taille;
        }
        public set taille(value: number) {
            this._taille = value;
        }
        public get poids(): number {
            return this._poids;
        }
        public set poids(value: number) {
            this._poids = value;
        }
    }
    export class Etudiant extends Personne{
        _promotion: string;

        constructor(nom : string,prenom: string, sexe: string,age: number,taille: number, poids: number, promotion: string){
            super(nom,prenom,sexe,age,taille,poids);
            this._promotion = promotion;
        }
        public get promotion(): string {
            return this._promotion;
        }
        public set promotion(value: string) {
            this._promotion = value;
        }        
    }

    export class Cours {
        _libelle: string;

        constructor(libelle: string){
            this._libelle = libelle;
        }

        public get libelle(): string {
            return this._libelle;
        }
        public set libelle(value: string) {
            this._libelle = value;
        }
    }

    export class Formateur extends Personne{
        private _listeCours: Cours[];

        constructor(nom : string, prenom: string, sexe: string, age: number, taille: number, poids: number, listeCours: Cours[]){
            super(nom, prenom, sexe, age, taille, poids);
            this._listeCours = listeCours;
        }
        public get listeCours(): Cours[] {
            return this._listeCours;
        }
        public set listeCours(value: Cours[]) {
            this._listeCours = value;
        }

        //Ajout d'un Cours
        ajouterCours(cours: Cours){
            this._listeCours.push(cours);
        }

        afficherListeCours(){
            this._listeCours.forEach(element => {
                console.log(" - " + element.libelle);
            });
        }

        afficher(){
            console.log("Moi, " + this.nom + " " + this._prenom + ", j'enseigne les cours de : " );
            this.afficherListeCours();
        }
    }
}

let listeDeCours = [new JsAndAngularModule.Cours("Java"), 
new JsAndAngularModule.Cours("JavaScript")]; 
let moi = new JsAndAngularModule.Formateur("Caliendo", "Julien", "Homme" ,35, 185,  
81, listeDeCours); 
moi.afficher(); 