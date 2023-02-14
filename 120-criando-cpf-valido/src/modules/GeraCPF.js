import ValidaCPF from "./validaCPF";

export default class GeraCPF {
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min))
    }

    novoCpf(){
        const cpfsemdigito = this.rand();
        const digito1 = ValidaCPF.geraDigito(cpfsemdigito)
        const digito2 = ValidaCPF.geraDigito(cpfsemdigito + digito1)
        const cpfCompleto = cpfsemdigito + digito1 + digito2;
        return cpfCompleto;
    }
}


