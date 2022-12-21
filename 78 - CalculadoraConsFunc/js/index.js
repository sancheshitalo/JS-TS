function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
        this.display.focus()
    };

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode !== 13) return;
                this.realizaConta();
        });
    };

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const elemento = e.target;
            if (elemento.classList.contains('btn-num')) this.addNumDisplay(elemento);
            if (elemento.classList.contains('btn-clear')) this.clear();
            if (elemento.classList.contains('btn-del')) this.del();
            if (elemento.classList.contains('btn-eq')) this.realizaConta();
        });
    }

    this.realizaConta = () => {
        try {   
          const conta = eval(this.display.value);

          if (!conta){
            alert('Conta inválida!');
            this.display.focus();
            return;
          }

          this.display.value = conta;
        } catch(e) {
          alert('Conta inválida!')
          this.clear();
          this.display.focus();
          return;
        } 
    };

    this.addNumDisplay = elemento => {
        this.display.value += elemento.innerText;
        this.display.focus(); // forma reduzida, quando só tem 1 linha
    };
    this.clear = function() {       // FORMA LONGA, porém da pra fazer conforme está acima.
        this.display.value = '';
    } 

    this.del = () => this.display.value = this.display.value.slice(0, -1);
};

const calculadora = new Calculadora();
calculadora.inicia();