class Pessoa{
    #nome;
    #idade;

    constructor(nome, idade){
        this.#nome = nome;
        this.#idade = idade;
    };

    setNome(nome){
        this.#nome = nome
    };

    getNome(){
        return this.#nome
    };

    setIdade(idade){
        this.#idade = idade
    }

    getIdade(){
        return this.#idade
    }
};

class ContaBancaria{
    #saldo;

    constructor(saldo){
        this.#saldo = saldo;
    };

    sacar(valor){
        if(valor <= saldo)
            saldo = saldo - valor;
        console.log("Saldo atual: ", this.#saldo);
    };

    depositar(valor){
        saldo = saldo + valor;
        console.log("Saldo atual: ", this.#saldo);
    };
};

class Produto{
    #nome;
    #preco;

    constructor(nome, preco){
        this.#nome = nome;
        this.#preco = preco;
    };

    setNome(nome){
        this.#nome = nome;
    };

    getNome(){
        return this.#nome;
    };

    setPreco(preco){
        this.#preco = preco;
    };

    getPreco(){
        return this.#preco;
    };
};

class Carro{
    #marca;
    #velocidade;

    constructor(marca, velocidade){
        this.#marca = marca;
        this.#velocidade = velocidade;
    };

    acelerar(velocidade){
        this.#velocidade += velocidade;
        console.log(this.#velocidade, "Km/h");
    };

    frear(){
        this.#velocidade = 0;
        console.log(this.#velocidade, "Km/h");
    };
};

class Aluno{
    #nome;
    #nota;

    constructor(nome, nota){
        this.#nome = nome;
        this.#nota = nota
    };

    setNota(nota){
        this.#nota = nota
        if(nota >= 7){
            console.log("Aprovado com média ", this.#nota)
        } else{
            console.log("Reprovado com média ", this.#nota)
        };
    };
};

class Livro{
    #titulo;
    #autor;

    constructor(titulo, autor){
        this.#titulo = titulo;
        this.#autor = autor;
    };

    setTitulo(titulo){
        this.#titulo = titulo;
    };

    getTitulo(){
        return this.#titulo;
    };

    setAutor(autor){
        this.#autor = autor;
    };

    getAutor(){
        return this.#autor;
    };

    exibirInfo(){
        return this.#autor, this.#titulo
    };
};

class Retangulo{
    #base;
    #altura;

    constructor(base, altura){
        this.#base = base;
        this.#altura = altura;
    };

    setBase(base){
        this.#base = base;
    };

    getBase(){
        return this.#base;
    };

    setAltura(altura){
        this.#altura = altura;
    };

    getAltura(){
        return this.#altura;
    };

    calculaArea(){
        return this.#base * this.#altura;
    };

    calculaPerimetro(){
        return 2 * (this.#altura + this.#base);
    };
};

class Circulo{
    #raio;

    constructor(raio){
        this.#raio = raio;
    };

    setRaio(raio){
        this.#raio = raio;
    };

    getRaio(){
        return this.#raio;
    };

    calculaArea(){
        return 2 * Math.PI * this.#raio ** 2;
    };

    calculaCircunferencia(){
        return 2 * Math.PI  * this.#raio;
    };
};

class Funcionario{
    #nome;
    #salario;

    constructor(nome, salario){
        this.#nome = nome;
        this.#salario = salario;
    };

    setNome(nome){
        this.#nome = nome;
    };

    getNome(){
        return this.#nome;
    };

    setSalario(salario){
        this.#salario = salario
    };

    getSalario(){
        return this.#salario;
    };

    aumentoSalario(valor){
        this.#salario = this.#salario + valor;
    };
};