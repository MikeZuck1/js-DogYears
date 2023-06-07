// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML;

const myAge = 27; // Je déclare une variable myAge et je l'initialise à 27 (mon age).

let earlyYears = 2; // Deux première années. 
earlyYears *= 10.5; // 10,5 années canines. 

let laterYears =  myAge - 2; // soustrait myAge (27) à 2 
laterYears *= 4; // La variable laterYears est mutliplier par 4 afin de calculer le nbre d'années d'un chien par nos dernières années. 

console.log(earlyYears); // Output 21
console.log(laterYears); // Output 100

let myAgeInDogYears = earlyYears + laterYears; // J'aditionne Mon age et celui d'un chien. 