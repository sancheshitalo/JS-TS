const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
    if (numero === 2) {
        continue;  // PULA O NÚMERO E CONTINUA A EXECUÇÃO DO CÓDIGO
    }

    if (numero === 7) {
        break; // VERIFICA QUE TEM O NÚMERO E PARA O CÓDIGO.
    }

    console.log(numero);
};