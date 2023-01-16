function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if (valor > this.saldo){
        console.log(`Saldo insuficiente! O seu saldo é de: R$ ${this.saldo}.`)
        return; 
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag./Conta: ${this.agencia}/${this.conta}/ Saldo R$: ${this.saldo.toFixed(2)}`);
}

function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype)
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor){
    if (valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente! O seu saldo é de: R$ ${this.saldo}.`)
        return; 
    }

    this.saldo -= valor;
    this.verSaldo();
};

const conta1 = new CC(1789, 189264, 1000, 2000);
conta1.sacar(3001);
