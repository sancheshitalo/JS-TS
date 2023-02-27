var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/////////////

const nota1 = parseFloat(lines.shift());
const nota2 = parseFloat(lines.shift());
const peso1 = 3.5;
const peso2 = 7.5;
const MEDIA = (nota1 * peso1 + nota2 * peso2) / (peso1 + peso2);


console.log("MEDIA = " + MEDIA.toFixed(5));

