// 705.484.450-52
// Para um CPF ser válido, preciso fazer uma conta e essa conta tem que bater com o CPF informado. Se não bater, é inválido.
// Pega os 9 primeiros dígitos e realiza a multiplicação de cada número do CPF, de forma decrescente começando pelo número 10.
// Irei escrever como fica abaixo usando o CPF da primeira linha.

// 7   0   5   4   8   4   4   5   0   
// *   *   *   *   *   *   *   *   *      // Como ler o que está escrito: 7 (1 digito) vezes 10 // 0 vezes 9 // 5 vezes 8......
// 10  9   8   7   6   5   4   3   2   
// RESULTADO DA MULTIPLICAÇÃO DE CADA DIGITO
// 70  0  40  28  48  20  16  15   0  = 237 (total... somando 70+0+40+28+48+20+16+15+0)

// A fórmula é a seguinte:
// 11 - (237 % 11) = 5 (Primeiro dígito após o traço. 10º dígito contando o CPF inteiro)
// Como ler isso:
// 11 que é o total de dígitos de um CPF. 237 que é a soma dos valores que achei multiplicando digito por digito de forma 
// decrescente. 11 - 6 = 5. Se o valor dessa conta, for maior que 9. Consideramos como 0.

// Pra achar o último dígito, pego os 10 primeiros dígitos. os 9 + o último que achamos. E fazemos a conta em ordem decrescente.
// Porém, dessa vez começando de 11 até chegar no décimo dígito.

// 7   0   5   4   8   4   4   5   0   5
// *   *   *   *   *   *   *   *   *   *   
// 11  10  9   8   7   6   5   4   3   2  
// RESULTADO DA MULTIPLICAÇÃO DE CADA DIGITO
// 77  0  45  32  56  24  20  20   0  10 = 284 

// 11 - (284 % 11) 
// 2 (segundo dígito, contando o cpf inteiro, o 11º dígito)

let cpf = '111.995.349-94'; // converter pra numero depois
let cpfNoMask = cpf.replace(/\D+/g, ''); 
let cpfArray = Array.from(cpfNoMask)
console.log(cpfArray)