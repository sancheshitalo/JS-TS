var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/////////////

const line1 = lines[0];
const value_line1 = line1.split(' ');
const pi = 3.14159

const valorA = parseFloat(value_line1[0]).toFixed(1);
const valorB = parseFloat(value_line1[1]).toFixed(1);
const valorC = parseFloat(value_line1[2]).toFixed(1);

const TRIANGULO = (valorA * valorC / 2).toFixed(3)
const CIRCULO = (pi * valorC**2).toFixed(3);
const TRAPEZIO = ((Number(valorA) + Number(valorB)) * valorC / 2).toFixed(3) 
const QUADRADO = (valorB ** 2).toFixed(3)
const RETANGULO = (valorA * valorB).toFixed(3)

console.log(`TRIANGULO: ${TRIANGULO}`);
console.log(`CIRCULO: ${CIRCULO}`);
console.log(`TRAPEZIO: ${TRAPEZIO}`);
console.log(`QUADRADO: ${QUADRADO}`);
console.log(`RETANGULO: ${RETANGULO}`);

