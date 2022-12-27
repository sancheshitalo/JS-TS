const numeros = [5, 50, 10, 18, 33, 25, 44, 92, 100, 75, 64];
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor);
    
console.log(numerosPares);

