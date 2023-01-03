function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = () => `${this.nome} ${this.sobrenome}`

const pessoa1 = new Pessoa('Hitalo', 'Sanches');
const pessoa2 = new Pessoa('Eveline', 'Campos');

console.dir(pessoa1);
console.dir(pessoa2);
