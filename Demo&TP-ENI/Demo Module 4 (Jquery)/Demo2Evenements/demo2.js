//EXEMPLE 1

// function abonnement(){
//     $("#btHide").click(function(){
//         toutLeMondeSeCache();
//     });
//     $("#btShow").on("click", function(){
//         toutLeMondeReapparait();
//     });
//     $("#btCapHide").bind("click", function(){
//         leCapitaineSeCache();
//     });
//     $("#btMarinHide").click(function(){
//         lesMarinsSeCachent();
//     });
//     $("#btBatHide").click(function(){
//         lesBateauxSeCachent();
//     });
// }
// function toutLeMondeSeCache(){
//     $("div").hide();
// }
// function toutLeMondeReapparait(){
//     $("div").show();
// }

// function leCapitaineSeCache(){
//     $("#capitaine").hide();
// }
// function lesMarinsSeCachent(){
//     $(".marin:first").hide();
//     $(".marin:last").hide();
// }
// function lesBateauxSeCachent(){
//     $(".bateau:eq(1)").hide();
// }


//EXEMPLE 2
function abonnement(){
    $("#btHide").click(function(){
       cacher("div");
    });
    $("#btShow").on("click", function(){
        afficher("div");
    });
    $("#btCapHide").bind("click", function(){
        cacher("#capitaine");
    });
    $("#btMarinHide").click(function(){
        cacher(".marin");
    });
    $("#btBatHide").click(function(){
        cacher("div > div[class='bateau']");
    });

    //chainage des event

    // $(".marin").click(function(){
    //     console.log("clique sur un marin");
    // });
    // $(".equipage").click(function(){
    //     console.log("clique sur l'equipage");
    // });
    // $("body").click(function(){
    //     console.log("clique sur le body");
    // });

    //delegation des event sur un element parent
    $(".equipage").on("click", ".marin", function(event){
        console.log("clique sur un marin");
    });
    $("#lienAxel").on("click", {info: "Hey"} , function(event){
        alert("click sur le lien mais annulation du comportement par default");
        console.log("Data dispo :" +event.data.info);
        console.log("Type : " + event.type );
        console.log("Target : " + event.currentTarget);
        event.preventDefault();
    });

}
function cacher(selecteur){
    $(selecteur).hide();
}
function afficher(selecteur){
    $(selecteur).show();
}