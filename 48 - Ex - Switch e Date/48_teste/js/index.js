const data = new Date();
//const h1 = document.querySelector('.container h1');
const locale = 'pt-br'
let options = {
    dateStyle: 'full',
    timeStyle: 'full',
};

console.log(data.toLocaleDateString('pt-BR', options));