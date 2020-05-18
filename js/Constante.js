let largeurScene=960;
let largeurRaquette= 96;
let largeurBalle=24;
let hauteurScene=600;
let hauteurRaquette= 16;
let coteBalle=24;
let tailleMur=4;
let hauteurbrique=24;
let largeurbrique=64;
let unNombre=0;
let nombredevie=3;

/**
 * return a random number between min and max 
 * @param {*} min the minimum
 * @param {*} max the maximum
 */
function entierAleatoire(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
