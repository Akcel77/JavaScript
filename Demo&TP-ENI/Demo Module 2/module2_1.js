function chargerContenu(){
    console.log("Coucou le fichier est execute");
    document.title = "Mon titre sur l'onglet";
    // document.getElementsByTagName("h1")[0].innerText = "Ceci est mon vrai titre";
    document.getElementById("titre").innerText = "Titre modifie par ID";

    //Creation d'un input, d'une value, ajout de la value a l'input puis insert l'input a "titre"
    
    var elInput = document.createElement("input");
    // var attValue = document.createAttribute("value");
    // attValue.value = "Une zone de saisie";
    // elInput.setAttributeNode(attValue);
    // OU 
    elInput.setAttribute("value", "Une zone de saisie");
    document.getElementById("titre").insertAdjacentElement("afterend", elInput);
}