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
            const verifyPassword = this.verifyPassword();

        if(verificaCampos && verifyPassword){
            alert('Form enviado');
            this.formulario.submit();
        }
    }

    verifyPassword(){
        let valid = true;

        const password = this.formulario.querySelector('.senha');
        const confirmPassword = this.formulario.querySelector('.repetir-senha');

        if(password.value !== confirmPassword.value){
            valid = false;
            this.criaErro(password, 'As senhas não coincidem. Por favor, verifique.')
            this.criaErro(confirmPassword, 'As senhas não coincidem. Por favor, verifique.')
        }

        if(password.value.length < 6 || password.value.length > 12){
            valid = false;
            this.criaErro(password, 'A senha precisa ter de 6 a 12 dígitos.')
        }

        return valid;
    }

    verificaCampos(){
        let valid = true;
        for(let errorMessage of this.formulario.querySelectorAll('.errorMessage')){
            errorMessage.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;
            
            if(!campo.value){
                this.criaErro(campo, `O campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }
            
            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid; 
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true; 
        
        if(usuario.length < 3 || usuario.length > 12){
            this.criaErro(campo, 'O usuário precisa ter 3 caracteres no mínimo, e 12 no máximo.');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'O nome do usuário precisa conter apenas letras ou números.');
            valid = false;
        }

        return valid;
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