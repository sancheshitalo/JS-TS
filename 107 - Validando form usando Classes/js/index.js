class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault()
            const verificaCampos = this.verificaCampos();
    }

    verificaCampos(){
        let valid = true;
        console.log('msgErro2')
        for(let errorMessage of this.formulario.querySelectorAll('.errorMessage')){
            errorMessage.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;
            
            if(!campo.value){
                this.criaErro(campo, `O campo "${label}" não pode estar em branco`);
                valid = false;
                console.log('msgErro3')
            }

            if(campo.classList.contains('cpf')) {
                console.log('msgErro4')
                if(!this.validaCPF(campo)) valid = false;
            }
        }
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()){
            this.criaErro(campo, 'CPF inválido');
            return false;
        }
            return true;
        }


    criaErro(campo, mensagem){
        const div = document.createElement('div');
        div.innerHTML = mensagem;
        div.classList.add('errorMessage');
        campo.insertAdjacentElement('afterend', div)
    }

}

const valido = new ValidaFormulario();