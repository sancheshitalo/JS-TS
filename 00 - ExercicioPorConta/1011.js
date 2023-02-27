const { parse } = require('path');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/////////////

const pi = 3.14159;
const raio = parseFloat(lines.shift());
const formula = ((4/3.0) * pi * (raio**3)).toFixed(3);

console.log("VOLUME = " + formula);