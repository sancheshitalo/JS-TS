/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

Referência (mutável) - array, object, function
*/ 

let a = [1, 2, 3];
let b = [...a];

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

// Os dois recebem os mesmos dados, mexendo em um, mexe no outro.