function validerSaisie(){
    console.log("clique sur le btn 1");
    console.log("la valeur saisie est %s", document.getElementById("saisie").value);
    document.getElementById("btn2").addEventListener("click", clicBouton2);
}

function clicBouton2(event){
    console.log("Bouton 2 clique" + event);
}
function ajouterLien(){
    var lien = document.createElement("a");
    var nomLien = document.createTextNode("diagneaxel");
    lien.setAttribute("href","https://diagneaxel.com");
    lien.setAttribute("target", "_blank");
    lien.appendChild(nomLien);
    document.getElementById("btn3").insertAdjacentElement("afterend", lien);
}

function colorerLesBoutons(){
    var boutons = document.querySelectorAll("input[type='button']");
    for(let i =0 ; i<boutons.length; i++){
        boutons[i].className ="couleur";
    }
}