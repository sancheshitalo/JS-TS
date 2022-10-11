/*

const pessoa1 = {
    nome: 'Carlos',
    sobrenome: 'Pereira',
    idade: 25, 
    email: 'carlospereira@gmail.com'
};

console.log(pessoa1.nome);

*/

/*
function newCustomer (nome, sobrenome, idade, email) {
    return {nome, sobrenome, idade, email}
};

const pessoa1 = newCustomer('Hitalo', 'Sanches', '22', 'sancheshitalo@gmail.com');
const pessoa2 = newCustomer('Lucas', 'Pereira', '35', 'lucaspereira@gmail.com');
const pessoa3 = newCustomer('Pedro', 'Henrique', '29', 'pedrohenrique@gmail.com');
const pessoa4 = newCustomer('Eveline', 'Sanches', '20', 'camposeveline49@gmail.com');
const pessoa5 = newCustomer('Heloisa', 'Sanches', '14', 'helosanches@gmail.com');

console.log(pessoa1.nome, pessoa2.nome);
*/

const pessoa1 = {
    nome: 'Hitalo',
    sobrenome: 'Sanches',
    idade: 22,
    email: 'sancheshitalo@gmail.com',

    fala() {
        console.log(`${this.nome} ${this.sobrenome} mandou um abraço.`);
    }
}

pessoa1.fala();

