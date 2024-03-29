export default class ValidaCPF{
    constructor(cpfEnviado){
        this.cpfEnviado = cpfEnviado;

        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    isSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfParcial = this.cpfLimpo.slice(0, -2); 
        const digito1 = ValidaCPF.geraDigito(cpfParcial);
        const digito2 = ValidaCPF.geraDigito(cpfParcial + digito1);
        this.novoCPF = cpfParcial + digito1 + digito2;
    }

    static geraDigito(cpfParcial){
        let total = 0;
        let regressivo = cpfParcial.length +1;

        for(let stringNumerica of cpfParcial){
            total += regressivo * Number(stringNumerica);
            regressivo--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : 0;
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;
        this.geraNovoCpf();

        return this.novoCPF === this.cpfLimpo
    }
}

console.log('fim');