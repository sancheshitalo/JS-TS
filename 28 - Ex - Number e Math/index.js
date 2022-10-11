const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `Seu número + 5 é: ${numero + 5}.<br>`;
texto.innerHTML += `A raiz quadrada do seu número é: ${numero ** 0.5}.<br>`;
texto.innerHTML += `${numero} é inteiro? Resposta: ${Number.isInteger(numero)}.<br>`;
texto.innerHTML += `${numero} é NaN? Resposta: ${Number.isNaN(numero)}.<br>`;
texto.innerHTML += `${numero} arredondando para baixo é: ${Math.floor(numero)}.<br>`;
texto.innerHTML += `${numero} arredondando para cima é: ${Math.ceil(numero)}.<br>`;
texto.innerHTML += `${numero} com duas casas decimais fica: ${numero.toFixed(2)}.`;