const pessoa = {
    nome: 'Hitalo',
    sobrenome: 'Marcel',
    idade: '23',
    endereço: {
        rua: 'Avenida Brasil',
        numero: 320
    }
}

//const nome = pessoa.nome;

//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
//const {nome: nomePessoa = '', sobrenome} = pessoa; // o "nome:" é pra dizer que o objeto "nome" vai ter uma função, que você atribui o nome. nesse caso, "nomePessoa".

//const {endereço: {rua, numero}} = pessoa;

const {nome, ...resto} = pessoa;
console.log(nome, resto);