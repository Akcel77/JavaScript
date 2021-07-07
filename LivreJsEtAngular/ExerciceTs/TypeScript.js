var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var JsAndAngularModule;
(function (JsAndAngularModule) {
    var Personne = /** @class */ (function () {
        function Personne(nom, prenom, sexe, age, taille, poids) {
            this._nom = nom;
            this._prenom = prenom;
            this._sexe = sexe;
            this._age = age;
            this._taille = taille;
            this._poids = poids;
        }
        Object.defineProperty(Personne.prototype, "nom", {
            get: function () {
                return this._nom;
            },
            set: function (value) {
                this._nom = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Personne.prototype, "prenom", {
            get: function () {
                return this._prenom;
            },
            set: function (value) {
                this._prenom = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Personne.prototype, "sexe", {
            get: function () {
                return this._sexe;
            },
            set: function (value) {
                this._sexe = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Personne.prototype, "age", {
            get: function () {
                return this._age;
            },
            set: function (value) {
                this._age = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Personne.prototype, "taille", {
            get: function () {
                return this._taille;
            },
            set: function (value) {
                this._taille = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Personne.prototype, "poids", {
            get: function () {
                return this._poids;
            },
            set: function (value) {
                this._poids = value;
            },
            enumerable: false,
            configurable: true
        });
        return Personne;
    }());
    JsAndAngularModule.Personne = Personne;
    var Etudiant = /** @class */ (function (_super) {
        __extends(Etudiant, _super);
        function Etudiant(nom, prenom, sexe, age, taille, poids, promotion) {
            var _this = _super.call(this, nom, prenom, sexe, age, taille, poids) || this;
            _this._promotion = promotion;
            return _this;
        }
        Object.defineProperty(Etudiant.prototype, "promotion", {
            get: function () {
                return this._promotion;
            },
            set: function (value) {
                this._promotion = value;
            },
            enumerable: false,
            configurable: true
        });
        return Etudiant;
    }(Personne));
    JsAndAngularModule.Etudiant = Etudiant;
    var Cours = /** @class */ (function () {
        function Cours(libelle) {
            this._libelle = libelle;
        }
        Object.defineProperty(Cours.prototype, "libelle", {
            get: function () {
                return this._libelle;
            },
            set: function (value) {
                this._libelle = value;
            },
            enumerable: false,
            configurable: true
        });
        return Cours;
    }());
    JsAndAngularModule.Cours = Cours;
    var Formateur = /** @class */ (function (_super) {
        __extends(Formateur, _super);
        function Formateur(nom, prenom, sexe, age, taille, poids, listeCours) {
            var _this = _super.call(this, nom, prenom, sexe, age, taille, poids) || this;
            _this._listeCours = listeCours;
            return _this;
        }
        Object.defineProperty(Formateur.prototype, "listeCours", {
            get: function () {
                return this._listeCours;
            },
            set: function (value) {
                this._listeCours = value;
            },
            enumerable: false,
            configurable: true
        });
        //Ajout d'un Cours
        Formateur.prototype.ajouterCours = function (cours) {
            this._listeCours.push(cours);
        };
        Formateur.prototype.afficherListeCours = function () {
            this._listeCours.forEach(function (element) {
                console.log(" - " + element.libelle);
            });
        };
        Formateur.prototype.afficher = function () {
            console.log("Moi, " + this.nom + " " + this._prenom + ", j'enseigne les cours de : ");
            this.afficherListeCours();
        };
        return Formateur;
    }(Personne));
    JsAndAngularModule.Formateur = Formateur;
})(JsAndAngularModule || (JsAndAngularModule = {}));
var listeDeCours = [new JsAndAngularModule.Cours("Java"),
    new JsAndAngularModule.Cours("JavaScript")];
var moi = new JsAndAngularModule.Formateur("Caliendo", "Julien", "Homme", 35, 185, 81, listeDeCours);
moi.afficher();
