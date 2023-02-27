const input = require('fs').readFileSync('stdin', 'utf8');

const [tempoGasto, velocidadeMedia] = input.split("\n");

const litrosNecessarios = (tempoGasto * velocidadeMedia) / 12;

console.log(litrosNecessarios.toFixed(3));


