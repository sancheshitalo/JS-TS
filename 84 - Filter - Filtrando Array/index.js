// Filter, map e reduce
// Filtra o Array;
// const numeros = [5, 50, 10, 18, 33, 25, 44, 92, 100, 75, 64];
// const numerosFiltrados = numeros.filter(valor => valor > 10); // Forma reduzida, em 1 linha. Conforme é feito no dia dia
// console.log(numerosFiltrados);

// // A Forma abaixo, é como geralmente é feito. Mas é possível reduzir
// const numerosFiltrados = numeros.filter(valor => { 
//     return valor > 10;
// });

// Forma simplificado de fazer, porém não é o jeito que geralmente é feito
// function callbackFilter(valor, indice, array){
//     return valor > 10;

// A FORMA ABAIXO, é o jeito "longo" e não comum, de se fazer.
// function callbackFilter(valor, indice, array){
//     if (valor > 10){
//         return true;
//     }
// }

const pessoas = [
    {nome: 'Carlos', idade: 34},
    {nome: 'Pedro', idade: 22},
    {nome: 'Jucimara', idade: 71},
    {nome: 'Lorena', idade: 45},
    {nome: 'Enzo', idade: 9},
    {nome: 'Debora', idade: 18}
];

const nomeGrande = pessoas.filter(obj => {
    return obj.nome.length >= 6;
});

const idadeFiltrada = pessoas.filter(valor => valor.idade >= 40);

const lastLetterA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(nomeGrande);
console.log(idadeFiltrada);
console.log(lastLetterA);