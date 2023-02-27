var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/////////////

const notaA = parseFloat(lines.shift());
const notaB = parseFloat(lines.shift());
const notaC = parseFloat(lines.shift());

const pesoA = 2;
const pesoB = 3;
const pesoC = 5;

const MEDIA = (notaA * pesoA + notaB * pesoB + notaC * pesoC) / 10;

console.log("MEDIA = " + MEDIA.toFixed(1));