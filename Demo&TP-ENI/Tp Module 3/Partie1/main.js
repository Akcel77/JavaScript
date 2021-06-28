class Citation {
    constructor(citation, auteur, dateSaisie) {
        this.citation = citation || "";
        this.auteur = auteur || "";
        this.dateSaisie = dateSaisie || new Date();
    }
    allWrited() {
        return this.citation != "" && this.auteur != "" && this.dateSaisie != "";
    }
    info(){
        var day = this.dateSaisie.getDate().toString().padStart(2, "0");
        var month = (this.dateSaisie.getMonth() +1).toString().padStart(2, "0");
        var year = this.dateSaisie.getFullYear();
        return `Par ${this.auteur}, le ${day}/${month}/${year}`;
    }
}

var citations = [];

function addCitation(citationToAdd){
    citations.push(citationToAdd);
}

function delCitation(index){
    citations.splice(index,1);
}

function sortCitation(sortBy){
    switch (sortBy){
        case 'alpha_az':
            citations.sort((bigger,lower) => bigger.auteur.localCompare(lower.auteur));
            break;
        case 'alpha_za':
            citations.sort((bigger,lower) => lower.auteur.localCompare(bigger.auteur));
            break;
        case 'date_az':
            citations.sort((bigger,lower) => bigger.dateSaisie-lower.dateSaisie);
            break;
        case 'date_za':
            citations.sort((bigger,lower) => lower.dateSaisie-bigger.dateSaisie);
            break;
        default:
            break;
    }
}

function formInit(){
    var citation = new Citation();
    document.getElementById("citation").value = citation.citation ;
    document.getElementById("auteur").value = citation.auteur;
    document.getElementById("date").valueAsDate = citation.dateSaisie;
    document.getElementById("citation").focus();
}

function cleanCitation(){
    var liResuslt = document.getElementById("listeResultat");
    liResuslt.innerHTML= "";
}

function citationOnScreen(){
    cleanCitation();
    var liResuslt = document.getElementById("listeResultat");

    citations.forEach((value, index, array) =>{
        var listeCitation = document.createElement("li");
        var pCitation = document.createElement("p");
        var pUser = document.createElement("p");
        var delimitation = document.createElement("hr")

        pCitation.className = "citation";
        pUser.className = "user";
        listeCitation.addEventListener("click", del);

        listeCitation.id= index;
        pCitation.innerText = value.citation;
        pUser.innerText = value.info();

        liResuslt.appendChild(listeCitation);
        listeCitation.appendChild(pCitation);
        listeCitation.appendChild(pUser);
        listeCitation.appendChild(delimitation);

    });
}

function addCit(){
    var citation = new Citation(
        document.getElementById("citation").value,
        document.getElementById("auteur").value,
        document.getElementById("date").valueAsDate);
    if(citation.allWrited()){
        addCitation(citation);
        citationOnScreen();
        formInit();
    }else{
        alert("Tous les champs sont obligatoires");
    }
}        

function del(event){
    var index = event.currentTarget.id;
    if(confirm(`Voulez vous supprimer la citation "${citations[index].citation}" ?`)){
        delCitation(index);
        citationOnScreen();
        formInit();
    }
}
function sortByType(type){
    sortCitation(type);
    citationOnScreen();
}