const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

//////////////////////////////////

const n = 3.14159
const raio = parseFloat(input);
//const area = n * (raio ** 2);
const area = Math.pow(input, 2) * n;

console.log("A=" + area.toFixed(4));