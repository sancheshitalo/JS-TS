// defineProperty (define 1 propriedade).... defineProperties (define várias propriedades);
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: false, // se pode ou não reconfigurar. Se tiver false, não pode ser apagado o "estoque" por exemplo.
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Apenas números!')
            }

            estoquePrivado = valor;
        }
    });
}

const produto01 = new Produto('Camiseta', 40, 3);
produto01.estoque = 'teste'
console.log(produto01.estoque);