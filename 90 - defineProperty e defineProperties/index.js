// defineProperty (define 1 propriedade).... defineProperties (define várias propriedades);
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // pode ou não alterar o valor (false nao pode, true pode)
        configurable: false // se pode ou não reconfigurar. Se tiver false, não pode ser apagado o "estoque" por exemplo.
    });
}

const produto01 = new Produto('Camiseta', 40, 3);
console.log(produto01);