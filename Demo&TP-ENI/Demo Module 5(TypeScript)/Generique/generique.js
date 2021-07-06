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
//Utilisation d'un tableau type en TS 
var tabType = [1, 2, 3];
tabType.push(4);
console.log(tabType);
//Utilisation d'un tableau generique en ts 
var tabGeneric = [9, 8, 7];
tabGeneric.push(6);
//Declaration classe generique
var Viande = /** @class */ (function () {
    function Viande(type) {
        this.type = type;
    }
    return Viande;
}());
var Legume = /** @class */ (function () {
    function Legume(type) {
        this.type = type;
    }
    return Legume;
}());
var Poulet = /** @class */ (function (_super) {
    __extends(Poulet, _super);
    function Poulet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Poulet;
}(Viande));
var Boeuf = /** @class */ (function (_super) {
    __extends(Boeuf, _super);
    function Boeuf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Boeuf;
}(Viande));
var Tomate = /** @class */ (function (_super) {
    __extends(Tomate, _super);
    function Tomate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tomate;
}(Legume));
var Salade = /** @class */ (function (_super) {
    __extends(Salade, _super);
    function Salade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Salade;
}(Legume));
var Sandwich = /** @class */ (function () {
    function Sandwich(viande, legume) {
        this.viande = viande;
        this.legume = legume;
    }
    Sandwich.prototype.afficher = function () {
        console.log("Sandwich " + this.viande.type + "/" + this.legume.type);
    };
    return Sandwich;
}());
var sandPouletTomate = new Sandwich(new Poulet("Poulet de Bresse"), new Tomate("Tomate coeur de boeuf"));
sandPouletTomate.afficher();
