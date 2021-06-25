function allWrited(citation, auteur, dateSaisie){
    return citation!="" && auteur!="" && dateSaisie!="";
}

function add(){
    var citation = document.getElementById("citation").value;
    var auteur = document.getElementById("auteur").value;
    var dateSaisie = document.getElementById("date").valueAsDate;

    if(allWrited(citation, auteur, dateSaisie)){
        var day = dateSaisie.getDate().toString().padStart(2, "0");
        var month = (dateSaisie.getMonth() +1).toString().padStart(2, "0");
        var year = dateSaisie.getFullYear();

        var listeCitation = document.createElement("li");
        var pCitation = document.createElement("p");
        var pUser = document.createElement("p");

        pCitation.innerText = citation;
        pUser.innerText = `Par ${auteur}, le ${day}/${month}/${year}`;
        pCitation.className = "citation";
        pUser.className = "user";
        listeCitation.addEventListener("click", del);

        var listeResultat = document.getElementById("listeResultat");
        listeResultat.appendChild(listeCitation);
        listeResultat.appendChild(pCitation);
        listeResultat.appendChild(pUser);

        document.getElementById("citation").value = "";
        document.getElementById("auteur").value = "";
        document.getElementById("date").valueAsDate = new Date();
    }else{
        alert("Tous les champs sont obligatoires");
    }
    document.getElementById("citation").focus;
}

function del(){
    var cit = event.currentTarget.getElementsByTagName("p")[0].innerText
    if(confirm(`Voulez vous supprimer la citation "${cit}" ?`)){
        event.currentTarget.parentNode.removeChild(event.currentTarget);
    }
}