// // MAP -> Mapeando o array

// const numeros = [5, 50, 10, 18, 33, 25, 44, 92, 100, 75, 64];
// const numerosDobrados = numeros.map(valor => valor * 2); 

// console.log(numerosDobrados);

const pessoas = [
    {nome: 'Carlos', idade: 34},
    {nome: 'Pedro', idade: 22},
    {nome: 'Jucimara', idade: 71},
    {nome: 'Lorena', idade: 45},
    {nome: 'Enzo', idade: 9},
    {nome: 'Debora', idade: 18}
]

const pessoaString = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade}));
const withId = pessoas.map(function(obj, indice){
    obj.id = indice;
    return obj;
});

/* 
DETALHE IMPORTANTE: Sempre que é trabalhado com valores que utilizam a referencia, conforme fizemos acima... por exemplo o id, é alterado no objeto original. ou seja, em produção, pode gerar um problema, caso não seja isso que você esteja esperando. Uma forma de contornar isso, é em vez de editar o objeto original, é criar uma nova variável, usando o spread operator pra copiar o objeto original, criando um novo objeto. 
Ficaria assim.
const newObjeto = {...obj}
*/

console.log(withId);