// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Carlos'
// };

// console.log(pessoa)


// Outra forma de fazer abaixo.
const pessoa = new Object();
pessoa.nome = 'Luiz';
pessoa.sobrenome = 'Carlos';
pessoa.idade = 30;
pessoa.falarNome = function(){
    return(`${this.nome} está falando seu nome.`);
}
pessoa.getDataNascimento = function(){
    const data = new Date();
    return data.getFullYear() - this.idade
}

for (let chave in pessoa){
    console.log(chave)
}