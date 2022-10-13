function tabelaImc() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const dadosImc = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const inputPeso   = document.querySelector('#input1');
        const inputAltura = document.querySelector('#input2');
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        resultado.innerHTML = '';

        if (!peso) {
            resultado.innerHTML += 'Peso inválido! Por favor, verifique.'
            return;
        }

        if (!altura) {
            resultado.innerHTML += 'Altura inválida! Por favor, verifique.'
            return;
        }

        const imc = getImc(peso, altura);

        dadosImc.push({
            peso: peso.value,
            altura: altura.value
        }); // qlq coisa tirar dois ponto

        function getImc (peso, altura) {
            const imc = peso / altura ** 2;
            return imc.toFixed(2);
        }

        if (imc < 18.5){
            resultado.innerHTML += `Com o peso de: ${peso}Kg e a altura de: ${altura.toFixed(2)}m, o seu resultado é: <strong>${imc}</strong>. Portanto, <strong>abaixo do peso</strong>.`
        } else if (imc < 25) {
            resultado.innerHTML += `Com o peso de: ${peso}Kg e a altura de: ${altura.toFixed(2)}m, o seu resultado é: <strong>${imc}</strong>. Portanto, <strong>peso normal</strong>.`
        } else if (imc < 30){
            resultado.innerHTML += `Com o peso de: ${peso}Kg e a altura de: ${altura.toFixed(2)}m, o seu resultado é: <strong>${imc}</strong>. Portanto, <strong>sobrepeso</strong>.`
        } else if (imc < 35) {
            resultado.innerHTML += `Com o peso de: ${peso}Kg e a altura de: ${altura.toFixed(2)}m, o seu resultado é: <strong>${imc}</strong>. Portanto, <strong>obesidade grau 1</strong>.`
        } else if (imc < 40) {
            resultado.innerHTML += `Com o peso de: ${peso}Kg e a altura de: ${altura.toFixed(2)}m, o seu resultado é: <strong>${imc}</strong>. Portanto, <strong>obesidade grau 2</strong>.`
        } else if (imc >= 40) {
            resultado.innerHTML += `Com o peso de: ${peso}Kg e a altura de: ${altura.toFixed(2)}m, o seu resultado é: <strong>${imc}</strong>. Portanto, <strong>obesidade grau 3</strong>.`
        }


        //resultado.innerHTML += `Com o peso de: ${peso}Kg e a altura de: ${altura.toFixed(2)}m, o seu resultado é: ${imc}.`
        
    }
    form.addEventListener('submit', recebeEventoForm);
   
} 