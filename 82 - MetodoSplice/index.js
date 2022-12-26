// nomes.splice(índice, delete, elem1, elem2, elem3);
const nomes = ['Carlos', 'Pedro', 'Maria', 'Lucas', 'Vanessa', 'Gustavo', 'Giovana'];
const removidos = nomes.splice(4, Number.MAX_VALUE); // Começando no índice 4, quero remover 1 elemento. Ele cria um array com o que foi excluido.
console.log(nomes, removidos);


