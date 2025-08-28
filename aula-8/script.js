// atividade 1
class Usuario {
    constructor(nome, email, idade){
        this.nome = nome;
        this.email = email;
        this.idade = idade
    };
    setNome(nome){
        this.nome = nome;
    };
    getNome(){
        return this.nome;
    };
    setEmail(email){
        this.email = email;
    };
    getEmail(){
        return this.email;
    };
    setIdade(idade){
        this.idade = idade;
    };
    getIdade(){
        return this.idade
    }
};

module.exports = Usuario;

//atividade 2
// A) Criando uma classe Funcionario que serve como modelo, permitindo instanciar vários objetos com dados individuais e métodos compartilhados

//atividade 3
//"Carro" é um modelo genérico e "meuCarro" é um modelo específico

//atividade 4
// nome, matricula, turma

//atividade 5
class Livro {
    constructor(titulo, autor, ano){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    };
    setTitulo(titulo){
        this.titulo = titulo;
    };
    getTitulo(){
        return this.titulo;
    };
    setAutor(autor){
        this.autor = autor;
    };
    getAutor(){
        return this.autor;
    };
    setAno(ano){
        this.ano = ano;
    };
    getAno(){
        return this.ano;
    }
}

//atividade 6
class Calculadora{
    somar(a,b){
        return a+b;
    };
    multiplicar(a,b){
        return a*b;
    }
}

//atividade 7
class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    };
    setNome(nome){
        this.nome = nome;
    };
    getNome(){
        return this.nome;
    };
    setIdade(idade){
        this.idade = idade;
    };
    getIdade(){
        return this.idade
    };
};