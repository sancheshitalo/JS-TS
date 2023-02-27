const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let x = a + b;

console.log("X = " + x);