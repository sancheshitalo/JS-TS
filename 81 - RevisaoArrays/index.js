// const nomes1 = new Array('Marcos', 'Lucas', 'Pedro'); // Também funciona dessa forma;
//const novo = [...nomes]; // REST Operator, pra copiar o conteúdo do array "NOMES". Porém, tudo que alterar no "novo", não afeta no array "NOMES". 
//const removido = nomes.pop();
//const removido = nomes.shift(); // remove o primeiro valor do índice 0. Nesse caso, o "Eduardo" será removido. Maria assume o índice 0, e Ana, 1.
//nomes.push('Cleber'); // Adicionando um valor no último índice.
//nomes.unshift('Pedro'); // Adiciona um valor no índice 0. Mudando o índice dos demais.

// const nomes = ['Eduardo', 'Maria', 'Ana', 'Carlos', 'Pedro', ]; // O nome desse "ARRAY" é: Array Literal;
// //const novo = nomes.slice(1, 3); // Quero começar no índice 1, "MARIA", e terminar no índice 3, um após ao que eu quero parar. Ana está no índice 2.
// const novo = nomes.slice(0, -1); // Dessa forma, começo pelo indice 0, usando o número negativo pra remover começando pelo último indice. -1 remove o último, -2 remove os 2 últimos e assim sucessivamente. 
// console.log(novo);

const nome = 'Hitalo Marcel Bueno Sanches';
const nomes = nome.split(' ');
console.log(nomes);