// Frase final: Luiz Otávio Miranda tem 30 anos, pesa 84kg, tem 1.8 de altura e seu IMC é de 25.92...
//Luis otavio nasceu em 92

const nome = 'Luis Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
const date = new Date();
const anoAtual = date.getFullYear();

let imc = peso / (altura * altura);
let anoNascimento = anoAtual - idade;
let resNascimento = anoNascimento;
let resImc = imc;

console.log(`${nome} ${sobrenome} que nasceu em ${resNascimento} tem ${idade} anos, pesa ${peso}Kg, tem ${altura} de altura e seu IMC é de ${resImc}`);


