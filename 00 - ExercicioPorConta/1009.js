var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/////////////

const nome = String(lines.shift());
const salario = parseFloat(lines.shift())
const totalVenda = parseFloat(lines.shift())

const bonus = (salario + totalVenda * 15 / 100).toFixed(2);

console.log("TOTAL = R$ " + bonus);

