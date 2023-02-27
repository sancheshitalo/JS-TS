var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = parseInt(input);
let b = parseInt(input);
let x = a + b;

console.log("X = " + x);