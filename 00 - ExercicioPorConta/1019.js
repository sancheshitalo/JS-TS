const input = require('fs').readFileSync('stdin', 'utf8');

let qtdSegundos = parseInt(input);

//              horas, min, seg (1 hora = 3600 segundos, 1 minuto = 60 seg, 1 seg = 1 seg)
const valores = [3600, 60, 1];
const resultado = [];

for (let valor of valores){
    resultado.push(parseInt(qtdSegundos / valor))
    qtdSegundos = qtdSegundos % valor;
}

console.log(resultado.join(":"))
