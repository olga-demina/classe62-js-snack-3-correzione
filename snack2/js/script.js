
// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.

const userArray = [];
let sum = 0;

while (sum < 50) {
    const userNumber = parseInt(prompt("Dimmi un numero"));
    sum += userNumber;
    // userArray.push(userNumber);
    if (sum < 50) {
        userArray.push(userNumber);
    }
}

console.log(userArray, sum);