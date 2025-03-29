/* var age = prompt("Entrez votre age") ;
var parsedAge = parseInt(age) ;
let parent = document.getElementById("parent") ;
if(parsedAge >= 32) {
    balise.style

} */
let con
function convertToUpperCase(b) {
     b = prompt("Entrer votre pays !") ;
    return b.toUpperCase() ;
}
con =convertToUpperCase(con)
console.log(con)
let item1 = document.getElementById("item1") ;
let item2 = document.getElementById("item2") ;
let item3 = document.getElementById("item3") ;

if (con == "CAMEROUN") {
    item1.style.backgroundColor = "green" ;
    item2.style.backgroundColor = "red" ;
    item3.style.backgroundColor = "yellow" ;
}

if (con == "SENEGAL") {
    item1.style.backgroundColor = "green" ;
    item2.style.backgroundColor = "yellow" ;
    item3.style.backgroundColor = "red" ;
}

if (con == "TCHAD") {
    item1.style.backgroundColor = "blue" ;
    item2.style.backgroundColor = "yellow" ;
    item3.style.backgroundColor = "red" ;
}

if (con == "JAPON") {
    item1.style.backgroundColor = "white" ;
    item1.style.width = "100% ";
    item1.style.height = "100% ";
    item2.style.position = "";
    item2.style.flex = 0 ;
    item3.style.flex = "none" ;
}

// let parent = document.getElementById("parent") var pays = prompt("Entrez votre pays au choix !") ;
