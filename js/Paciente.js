class Paciente {

    nome;
    peso;
    altura;
    gordura;
    imc;

    constructor(nome, peso, altura, gordura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.gordura = gordura;
        this.imc = this.calculaImc(this.peso, this.altura);
    }

    calculaImc(peso, altura) {
        if (Paciente.validaPeso(peso) && Paciente.validaAltura(altura)) {
            return (peso / (altura * altura));
        }
        else {
            return 0;
        }
        
    }

    static validaNome(nome) {
        if (nome.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }
    
    static validaPeso(peso) {
        if (peso > 0 && peso < 1000) {
            return true;
        }
        else {
            return false;
        }
    }
    
    static validaAltura(altura) {
        if (altura > 0 && altura < 3.0) {
            return true;
        }
        else {
            return false;
        }
    }
    
    static validaGordura(gordura) {
        if (gordura > 0 && gordura < 100) {
            return true;
        }
        else {
            return false;
        }
    }
}