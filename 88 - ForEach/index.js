// ITERAR SOBRE O ARRAY. Nesse caso, simulando o reduce. porém, melhor usar o reduce pra essa ocasião.

const numeros = [10, 20, 30];

let total = 0

numeros.forEach(valor => {
    total += valor
});

console.log(total);