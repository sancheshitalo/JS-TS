const resultado = document.querySelector('.resultado');

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

//

function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth());
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    let diaSemana = data.getDay();

    if (diaSemana === 0) {
        return 'Domingo';
    } else if (diaSemana === 1) {
        return 'Segunda-feira';
    } else if (diaSemana === 2) {
        return 'Terça-feira';
    } else if (diaSemana === 3) {
        return 'Quarta-feira';
    } else if (diaSemana === 4) {
        return 'Quinta-feira';
    } else if (diaSemana === 5) {
        return 'Sexta-feira';
    } else if (diaSemana === 6) {
        return 'Sábado';
    } else {
        return 'Dia inválido! Por favor, confira.'
    }
    /*
    if (mes === 0) {
        return 'Janeiro';
    } 
    */
    
    resultado.innerHTML += `${dia} ${mes}${ano}${hora}${min}${diaSemana}`
    
}

let data = new Date();
const dataBrasil = formataData(data);
