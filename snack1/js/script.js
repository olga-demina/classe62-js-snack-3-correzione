// 1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

const firstArray = [3,15,1,8,34,12];
const secondArray = [6,9,1];

let shortArray;

if (firstArray.length > secondArray.length) {
    shortArray = secondArray;
} else {
    shortArray = firstArray;
}

while(firstArray.length !== secondArray.length) {
    const rndNumber = getRndInteger(1,100);
    shortArray.push(rndNumber);
}

console.log(firstArray, secondArray);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}