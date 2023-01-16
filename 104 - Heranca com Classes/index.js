class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado.`);
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já desligado.`);
            return;
        }

        this.ligado = false;
        }
    }

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor; 
        this.modelo = modelo;
    }
}

class notebook extends DispositivoEletronico{
    constructor(nome, marca, polegada){
        super(nome);
        this.marca = marca;
        this.polegada = polegada;
    }
}

const n1 = new notebook('Macbook Pro M1', 'Apple', '16.5');
console.log(n1);

// const s1 = new Smartphone('iPhone', 'Preto', 'XR');
// console.log(s1)