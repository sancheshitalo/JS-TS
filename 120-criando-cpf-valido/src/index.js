import GeraCPF from './modules/GeraCPF.js'

(function(){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.novoCpf();
})();