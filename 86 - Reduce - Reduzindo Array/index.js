// REDUCE - Reduzir o array em 1 elemento.
// No reduce, tem o "acumulador".

// const numeros = [5, 50, 10, 18, 33, 25, 44, 92, 100, 75, 64]; 
// const total = numeros.reduce(function(acumulador, valor){
//     acumulador.push(valor * 2);
//     return acumulador;
// }); // se não passar valor após o "}, 0" o valor, será o primeiro elemento do array. Nesse caso, 5.

// console.log(total);



const pessoas = [
    {nome: 'Carlos', idade: 34},
    {nome: 'Pedro', idade: 22},
    {nome: 'Jucimara', idade: 71},
    {nome: 'Lorena', idade: 45},
    {nome: 'Enzo', idade: 9},
    {nome: 'Debora', idade: 18}
]

const moreOld = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(moreOld);