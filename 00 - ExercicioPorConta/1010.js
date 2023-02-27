var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const line1 = lines[0];
const line2 = lines[1];

const value_line1 = line1.split(' ');
const value_line2 = line2.split(' ');

/////////////

const id_peca1 = parseInt(lines.shift(value_line1[0]));
const qtd_peca1 = parseInt(value_line1[1]);
const valor_peca1 = parseFloat(value_line1[2]).toFixed(2); 

const id_peca2 = parseInt(lines.shift(value_line2[0]))
const qtd_peca2 = parseInt(value_line2[1]);
const valor_peca2 = parseFloat(value_line2[2]).toFixed(2);

const valorPagar = (qtd_peca1 * valor_peca1) + (qtd_peca2 * valor_peca2);


console.log("VALOR A PAGAR: R$ " + valorPagar.toFixed(2));
