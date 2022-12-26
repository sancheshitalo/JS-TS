const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
//const arrayJuncao = array1.concat(array2);
const arrayOpSpread = [...array1, ...array2]; // outra forma de fazer, usando o Spread Operator
console.log(arrayOpSpread);