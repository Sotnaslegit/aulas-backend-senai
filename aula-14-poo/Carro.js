class Carro{
    nome;
    ano;
    modelo;
    #chassi; //o "#" serve para deixar a class privada

    constructor(nome, ano, modelo, chassi){
        this.nome = nome;
        this.ano = ano;
        this.modelo = modelo;
        this.#chassi = chassi;
    }

    definirNomeChassi(chassi){
        this.#chassi = chassi
    }

    pegarNomeChassi(){
        return this.#chassi
    }
}

module.exports = Carro;