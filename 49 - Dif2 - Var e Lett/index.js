const verdadeira = true;

// Let tem escopo de bloco {... isso aqui é um bloco}
// Var só tem escopo de função

let nome = 'Luiz';
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Cleber'; // criando uma variável que tem o mesmo nome da que está fora do bloco. Mas na realidade, estamos criando uma nova variável.
    console.log(nome, nome2);
}