// Funcionalidades:
// Nos 2 produtos, a possibilidade de aumento e desconto do valor.
// No produto camiseta, poder especificar a "COR". No produto, "Caneca", especificar o "material" do produto.

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

//AUMENTO E DESCONTO NO PROTOTYPE DO PRODUTO
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia; 
} 
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia; 
} 

Produto.prototype.aumentoPercentual = function(percentual){
    this.preco = this.preco + (this.preco *(percentual / 100));
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco)
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        },
        set: function(valor){
            if (typeof valor !== 'number') return;
            estoque = valor; 
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('Camiseta Nike', 100, 'Preta',);
const caneca = new Caneca('Caneca StarWars', 40, 'Plástico', 2);

camiseta.aumentoPercentual(10);
caneca.aumentoPercentual(10);

console.log(camiseta);
console.log(caneca);
