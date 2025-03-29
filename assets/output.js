function calculateSum(a , b) {
    return a + b ;
}
let result = calculateSum(13 , 7) ;
console.log("Le resultat est :", result) ;

function calculateAverage([a, b, c]) {
    return (a + b + c)/3 ;
}
console.log(calculateAverage([6, 9, 2])) ;

function convertToUpperCase(helloword) {
    return helloword.toUpperCase() ;
}
console.log(convertToUpperCase('helloword')) ; 

function calculateRectangleArea(l, L) {
    return l * L ;
}
console.log("L'aire du rectangle est:", calculateRectangleArea(50, 150)) ;

function isEven(nombre) {
    if (nombre % 2 == 0) {
        return true ;
    }
    else {
        return false ;
    }
}
let nombre = prompt("Entrez le nombre :") ;
console.log(isEven(nombre)) ; 

function findElement(tableau, element) {
    for(let i = 0; i<tableau.length; i++) {
        if(element === tableau[i]) {
            return true ;
        }
    }
    return false ;
}
console.log(findElement([56, 10, 39, 69, 23], 55)) ;
// let tableau = [56, 10, 39, 69, 23] ;
// let trouve = findElement(tableau, element) ;
