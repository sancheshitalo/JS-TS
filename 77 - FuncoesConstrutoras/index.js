// FUNÇÃO CONSTRUTORA -> OBJETOS
// FUNÇÃO FABRICA -> OBJETOS

/* NA FUNÇÃO CONSTRUTORA, precisa mudar a forma que é escrito as funções.
    Tem que começar com letra maiúscula
*/

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Carlos', 'Gomes');

console.log(p1.nome)