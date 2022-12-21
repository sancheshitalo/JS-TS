function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        fala: function(assunto){
            return `${nome} está ${assunto}`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.fala('falando sobre JavaScript'));

// GETTER -> para obter o valor, fingindo que a função é um atributo.

// SETTER 