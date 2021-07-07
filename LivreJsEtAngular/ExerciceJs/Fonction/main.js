function maxDeDeuxNombres(nb1, nb2) {
    return nb1>nb2 ? nb1 : nb2;
}
function maxDeTroisNombres(nb1, nb2, nb3) {
    if (nb1 > nb2 && nb1 > nb3){
        return nb1;
    } else if (nb2 > nb3 && nb2 > nb1){
        return nb2;
    }else{
        return nb3;
    }
}

function maxDeTroisNombreBis(a, b, c) { 
    let x = maxDeDeuxNombres(a, b); 
    let y = maxDeDeuxNombres(b, c); 
    let resultat = maxDeDeuxNombres(x, y); 
    return resultat; 
 } 

function factoriel(args){
    total = 1;
    for(let i=1; i<=args; i++){
        total = total*i;
    }
    return total;
}

console.log(factoriel(4));
console.log(maxDeDeuxNombres(12, 17));