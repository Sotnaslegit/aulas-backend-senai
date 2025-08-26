class Pessoa {
    //atributos da classe pessoa
    nome;
    carroFavorito;
    dna;
    idade;
    cpf;
    doencas;
    cep;
    peso;

    //inicializar os meus atributos de classe
    constructor(nome, idade, cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;;
    }

    //um metodo para definir o nome
    setNome(nome){
        this.nome = nome;
    }

    pegarNome(){
        return this.nome
    }
}

module.exports = Pessoa;