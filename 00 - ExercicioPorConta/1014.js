const input = require('fs').readFileSync('stdin', 'utf8');
const [distanciaPercorrida, consumoGasto] = input.split('\n');

const consumoMedio = (distanciaPercorrida / consumoGasto).toFixed(3);

console.log(consumoMedio + " km/l")




