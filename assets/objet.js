// Exercice 1
const film = {
  titre: "Shosen",
  realisateur: "Bernard Du Champ",
  anneeDeSortie: 2023,
  acteurs: ["Jean", "Pierre", "Matthieu", "Jesus", "Phillipe"],
};

console.log("Le titre est :", film.titre);
console.log("Le realisateur est :", film.realisateur);
console.log("L'annee de sortie est :", film.anneeDeSortie);
console.log("Les acteurs sont :", film.acteurs);
console.log(film.acteurs[0]);

// Exercice 2
const ordinateur = {
  marque: "DELL",
  modele: "XPS 15",
  processeur: "Intel Core i7",
  ram: "16GB",
  stockage: "512GB SSD",
};
for (let key in ordinateur) {
  console.log(key + " " + ordinateur[key]);
}

// Exercice 3
const etudiants = [
  { nom: "Paulin", age: 23, moyenne: 12.5 },
  { nom: "Justine", age: 20, moyenne: 15.7 },
  { nom: "Robert", age: 26, moyenne: 10.35 },
  { nom: "Job", age: 19, moyenne: 17.2 },
  { nom: "Theodore", age: 22, moyenne: 16.6 },
];
console.log("Les etudiants ayant une moyenne superieure à 15 sont :");
for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].moyenne > 15) {
    console.log(etudiants[i].nom, etudiants[i].age, etudiants[i].moyenne);
  }
}

// Exercice $
const voiture = [
    {marque : "Toyota", modele : "Yaris", annee : 2016} ,
    {marque : "Mercedes", modele : "ML 350", annee : 2020} ,
    {marque : "Daithusu", modele : "Sirion", annee : 2013} ,
    {marque : "Rover", modele : "Range Rover", annee : 2000} ,
    {marque : "Peugeot", modele : "Peugeot 250", annee : 2009} ,
    {marque : "Tesla", modele : "Tesla 5", annee : 2022} 
] ;
console.log("Les voitures fariquees apres l'annee 2015 sont :") ;
for (let i = 0; i < voiture.length; i++) {
    if (voiture[i].annee > 2015) {
        console.log(voiture[i].marque, voiture[i].modele, voiture[i].annee) ;
    }
}


// Exercice 5

const produits = [
    {nom : "chaussure", prix : 9000} ,
    {nom : "salon", prix : 290000} ,
    {nom : "television", prix : 95000} ,
    {nom : "PLay station", prix : 150000} ,
    {nom : "telephone", prix : 100000} ,
    {nom : "Frigo", prix : 120000} 
] ;

const nomsProduits = produits.map(produits => produits.nom) ;
console.log(nomsProduits) ;

// Exercice 6
const employes = [
    {nom : "Bernard", poste : "Manager", salaire : "360000"} ,
    {nom : "Charlie", poste : "Developpeur", salaire : "250000"} ,
    {nom : "Emma", poste : "Designer", salaire : "320000"} ,
    {nom : "Bobo", poste : "Manager", salaire : "290000"} ,
    {nom : "David", poste : "Devoloppeur", salaire : "220000"} ,
    {nom : "George", poste : "Designer", salaire : "300000"} 
] ;

const salaireParPoste = {} ;

employes.forEach(employes => {
    if (salaireParPoste[employes.poste]) {
        salaireParPoste[employes.poste] += employes.salaire;
    } else {
        salaireParPoste[employes.poste] = employes.salaire;
    }
}) ;

console.log("Salaires totaux par poste :");
for (let poste in salaireParPoste) {
    console.log(`${poste} : ${salaireParPoste[poste]} FCFA`);
}

// Exercice 7
const livres = [
    {titre : "Petit Jo", auteur : "Evelyne Mpoudi Ngole", nombreDePages : 360} ,
    {titre : "Les impatientes", auteur : "Djaili Amadou Amal", nombreDePages : 1003} ,
    {titre : "Les jours viennent et passent", auteur : "Hemley Boum", nombreDePages : 397} ,
    {titre : "Crepuscule du tourment", auteur : "Leonard Miano", nombreDePages : 511} ,
    {titre : "Une vie de Boy", auteur : "Ferdinand Oyono", nombreDePages : 989} ,
] ;
 
livres.sort((a, b) => a.nombreDePages - b.nombreDePages) ;

console.log("Livres trier par nombre de page croissant :") ;

livres.forEach(livres => {
    console.log(`${livres.titre} de ${livres.auteur} -${livres.nombreDePages} pages`) ;
}) ;

// Exercice 8  
const commandes = [
    {id : 1, montant : 3000} ,
    {id : 2, montant : 5000} ,
    {id : 3, montant : 7000} ,
    {id : 5, montant : 9000} ,
    {id : 6, montant : 2000} ,
] ;
let montantTotal = commandes.reduce((accumulateur, commande) => {
    return accumulateur + commande.montant;
}, 0);
console.log("Le montant total des commandes :", montantTotal) ;