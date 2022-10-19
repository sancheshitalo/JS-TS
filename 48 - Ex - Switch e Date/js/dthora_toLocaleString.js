
const h2 = document.querySelector('.container h2');
const data = new Date();
h2.innerHTML += data.toLocaleDateString('pt-BR', {dateStyle: 'full'});

