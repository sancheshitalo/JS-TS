// ARGUMENTOS SUSTENTAM TODOS OS ARGUMENTOS ENVIADOS;
// NÃO FUNCIONA COM ARROW FUNCTION;
/*

function soma(){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total);
}

soma(1, 2, 3, 4, 5, 6, 7);
*/

/*
function funcao({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}

funcao({nome: 'Hitalo', sobrenome: 'Sanches', idade: 23})
*/


/*
function funcao([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}

funcao(['Hítalo', 'Sanches', 23]);
*/

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

conta('/', 1, 20, 30, 40, 50);