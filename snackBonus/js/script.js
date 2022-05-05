// **BONUS
// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(getRndInteger(1,100));
}

console.log(numbers);

const oddContainer = document.getElementById("odd");
const evenContainer = document.getElementById("even");

console.log(oddContainer, evenContainer);

numbers.forEach(number => {
    (number % 2 === 0) 
        ? addNumberToDOM(evenContainer, number) 
        : addNumberToDOM(oddContainer, number);
});


function addNumberToDOM(container, number) {
    container.innerHTML += `${number} `
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}