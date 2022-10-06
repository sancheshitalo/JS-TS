const nome = prompt('Digite seu nome completo:');
document.body.innerHTML = `Seu nome completo é: ${nome}<br/>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras. <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br/>`;
document.body.innerHTML += `O índice da letra "T" do seu nome é: ${nome.indexOf('t')} <br/>`;
document.body.innerHTML += `O índice da última letra do seu nome é: ${nome.lastIndexOf('')} <br/>`;
document.body.innerHTML += `Seu nome com letras em caixa alta fica: "${nome.toUpperCase()}". <br/>`;
document.body.innerHTML += `Seu nome com letras em caixa baixa fica "${nome.toLowerCase()}". <br/>`;
document.body.innerHTML += `As três últimas letras do seu nome são: "${nome.slice(-3)}". <br/>`;
document.body.innerHTML += `As palavras do seu nome são: "${nome.split(' ')}". <br/>`;


// Hitalo Marcel Bueno Sanches

