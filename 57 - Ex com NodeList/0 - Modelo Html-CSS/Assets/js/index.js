let paragrafos = document.querySelector('.paragrafos');
const selectParagrafos = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);

for (let i of selectParagrafos) {
    i.style.backgroundColor = '#23495a';
    i.style.color = 'white';
}