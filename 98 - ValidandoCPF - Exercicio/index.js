// 1   1   1    9   9   5   3   4   9
//10   9   8    7   6   5   4   3   2      
//10   9   8   63  54  25   12  12  18 = 211 (resto deu 2)

// 1    1   1   9   9   5   3   4   9   9
//11   10   9   8   7   6   5   4   3   2
//11   10   9  72  63  30  15  16   27  18 = 271 (resto deu 7)

// let cpf = '111.995.349-94';
// let cpfLimpo = cpf.replace(/\D+/g, '');
// let cpfArray = Array.from(cpfLimpo);

function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
}

ValidaCPF.prototype.valida = function(){
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.sequencial()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;

    return novoCpf === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val))
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

ValidaCPF.prototype.sequencial = function(){
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
  return sequencia === this.cpfLimpo;  
};

const cpf = new ValidaCPF('111.995.349-94');
console.log(cpf.valida());
