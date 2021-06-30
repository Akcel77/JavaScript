//Methode declanchant un traitement async
function enregister(data) {
    return new Promise(function(resolve, reject) {
        console.log("J'enregiistre les informations '%s' ", data);
        setTimeout(function() {
            if(Date.now().valueOf()%2 == 0){
                reject("rejete");
            }else{
                resolve("resolu");
            }
        } ,1000)
    });
}

//Methode applee lorsque que le traitement se termine avec succes
function afficherResult(message){
    console.log("succes : " + message);
}

enregister("Mes infos a enregistrer")
    .then(afficherResult)//En cas de succes
    .catch((raison)=>{console.log(raison)});