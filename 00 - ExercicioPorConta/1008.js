var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/////////////

const numeroFuncionario = parseInt(lines.shift());
const horasTrabalhadas = parseInt(lines.shift()); 
const valorHora = parseFloat(lines.shift()).toFixed(2);
const salario = parseFloat(horasTrabalhadas * valorHora).toFixed(2);

console.log("NUMBER = " + numeroFuncionario);
console.log("SALARY = U$ " + salario);