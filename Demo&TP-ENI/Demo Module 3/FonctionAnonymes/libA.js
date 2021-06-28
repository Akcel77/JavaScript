var libA = (
    function(){
        var libA = {};
        libA.traitement = function(){
            document.write("La lib A fait le traitement demande");
        }
        return libA;
    }
)();