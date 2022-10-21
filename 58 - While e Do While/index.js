// let controle = 0;

// while(controle <= 10) {
//     console.log(controle);
//     controle++;
// }

function geraNumero(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const min = 1;
const max = 50;

let randomNumber = geraNumero(1, 50);

// while (randomNumber !== 10) {
//     randomNumber = geraNumero(min, max);
//     console.log(randomNumber);
// }

do {
    randomNumber = geraNumero(min, max);
    console.log(randomNumber);
} while (randomNumber !== 10);