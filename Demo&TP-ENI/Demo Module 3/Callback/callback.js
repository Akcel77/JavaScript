//Fonction declanchant un traitement async
function enregister(data, callback) {
    console.log("J'enregistre des informations, ca peut prendre du temos");
    setTimeout(function(){callback("Succes de la sauvegarde")}, 1000);
}

//fonction appelle a la fin du traitement async
function afficherResult(message) {
    if(message)console.log("Message: " + message);
    else console.log("Aucun message");
}
enregister("mes datas", afficherResult);
console.log("Pendant ce temps la vie continue");