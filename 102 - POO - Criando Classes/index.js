class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando!`)
    }

    comer(){
        console.log(`${this.nome} está comendo!`)
    }

    beber(){
        console.log(`${this.nome} está bebendo!`)
    }
}

const pessoa1 = new Pessoa('Hitalo', 'Sanches')
const pessoa2 = new Pessoa('Carlos', 'Augusto')
const pessoa3 = new Pessoa('Gabriela', 'Santos')
console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)