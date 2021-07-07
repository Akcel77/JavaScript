for (let i = 0; i <= 200 ; i++ ) {
    console.log(i);
}

//Fibonacci
console.log("Fibonacci");
let precedentDuPrecedent = 0; 
let precedent = 1; 
let somme = 0; 
while (precedentDuPrecedent + precedent < 666) { 
   somme = precedentDuPrecedent + precedent; 
   precedentDuPrecedent = precedent; 
   precedent = somme; 
   console.log(somme);
} 

//Nombre premier
console.log("Nombre premier");
for (let i = 2; i <= 66; i++) { 
    let divisible = false; 
    for (j = 2; j < i; j++) { 
        // Pour tous les nombres inférieurs à i : 
        if (i % j == 0) 
            divisible = true; 
    } 
    // Si aucun nombre ne divise i alors c'est un nombre premier. 
    if (!divisible) 
        console.log(i); 
 } 