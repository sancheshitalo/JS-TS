// const max2 = (valor1, valor2) => {
//     return valor1 > valor2 ? valor1 : valor2;
// }

// REFATORANDO;

// const max2 = (valor1, valor2) => valor1 > valor2 ? valor1 : valor2;

function max2(valor1, valor2) {
    if (valor1 > valor2) {
        return valor1;
    } 
    return valor2; 
}

console.log(max2(100, 20));