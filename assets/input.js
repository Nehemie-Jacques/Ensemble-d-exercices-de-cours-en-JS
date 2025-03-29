let nom = prompt("Entrer le nom :") ;
const age = prompt("Entrer l'age");
console.log('Le nom est :', nom ) ;
console.log('votre age est :' , age ) ;
console.log('Bienvenu Monsieur ' + nom +  ' Vous avez ' + age + ' ans. ' ) ; 

function coutTotal (coutParParticipant , nombreDeParticipant) {
    return coutParParticipant * nombreDeParticipant ;
}
let result = coutTotal(5000 , 10) ;
console.log("Le cout total des inscriptions est de : " + result + "FCFA.") ; 

function verification (aGe) {
    if (aGe <= 18 ) {
        console.log("Vous etes eligible") ;
    }
    else {
        console.log("Vous n'etes pas eligible") ;
    }
 }
verification(15) ; 

let x = Number(prompt("premiere note")) ;
let y = Number(prompt("deuxieme note")) ;
let z = Number(prompt("troisieme note")) ;
let moyenne = ( x + y + z )/3 ;
console.log("La moyenne est de :", moyenne) ; 

let nOM = 'Junior' ;
let aGE = 17 ;
let inscriptionPayee = true ;
console.log("Le type de la variable name est :", typeof nOM) ;
console.log("Le type de la variable age est :", typeof aGE) ;
console.log("Le type de la variable name est :", typeof inscriptionPayee) ; 

let participants =  ["Jean", "Tib", "Diego", "Martin"] ;
participants.push("Calvin") ;
console.log("La liste des participants est :", participants) ; 

let nAME = prompt("Veuillez entrer le nom du nouvel inscrit ;") ;
alert("Nous vous souhaitons la Bienvenue Monsieur :", nAME) ;
console.log("Nous vous souhaitons la Bienvenue Monsieur :", nAME) ;