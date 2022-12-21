//RETORNO DAS FUNÇÕES

/*

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo);

*/

function criaMultiplicador(multiplicador){
    return function(numero){
        return numero * multiplicador;
    };
};

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(2))
console.log(triplica(2))
console.log(quadruplica(2))