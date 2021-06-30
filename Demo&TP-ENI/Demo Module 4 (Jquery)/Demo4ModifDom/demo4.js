$(function() {
    abonnement();
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
        $("#btRemplacerMarin").on("click",function(){
            remplacerMarin();
        });
        function remplacerMarin(){
            //supprimer le marin M1
            // $(".marin:first").remove();
            $(".marin").each(function(){
                if($(this).text() === "M1")this.remove();
            });

            //Creer le nouveau marin M
            // let nouveauMarin = $("<div class=\"marin\">M6</div>");
            let nouveauMarin = $("<div></div>");
            nouveauMarin.text("M6")
            .addClass("marin")
            .css("background-color", "green");
             
            //Ajout du marin 
            $(".equipage").append(nouveauMarin);
        }
    
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

});