// FOR IN -> lê os índices ou chaves do objeto

// const frutas = ['Banana', 'Morango', 'Uva', 'Laranja'];
// for (let indice in frutas) {
//     console.log(frutas[indice]);
// }

const pessoa = {
    nome: 'Hitalo',
    sobrenome: 'Marcel',
    idade: 30
}

// console.log(pessoa.nome); // DUAS formas de pesquisar
// console.log(pessoa['nome']) // DUAS formas de pesquisar

for (let dadosPessoas in pessoa) {
    console.log(pessoa[dadosPessoas]);
}