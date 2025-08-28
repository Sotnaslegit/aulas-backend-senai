// ● Atividade 1
// Contexto: É importante entender quem pode acessar cada tipo de dado para proteger informações
// e manter a lógica correta.
// Comando:
// 1º Explique COM AS SUAS PALAVRAS o que é public, private e protected.
// public é um atributo que qualquer um pode ter acesso, private é um atributo que só pode ser acessado com métodos específicos e o protected pode ser acessado dentro da mesma classe

// 2º Explique COM AS SUAS PALAVRAS o que é GET e SET dentro de uma classe.
// get é o método para "pegar" um atributo e "set" serve para definir um atributo

// 3º Explique COM AS SUAS PALAVRAS para que serve o encapsulamento.
// o encapsulamento é como se fosse uma maquina de bolinhas de um real que eu nao posso pegar diretamente uma bolinha que estiver dentro dela, mas posso girar a chave que derruba uma bola

// ● Atividade 2
// Contexto: Um professor quer armazenar informações sobre os alunos, como nome e
// nota. Para proteger esses dados, eles devem ser privados, permitindo acesso apenas
// por métodos controlados.
// Comando: Crie a classe utilizando os conceitos de encapsulamento para armazenar e
// recuperar os dados.

class Aluno {
    #nota;
    #nome;

    constructor(nota, nome){
        this.#nota = nota;
        this.#nome = nome;
    };

    setNome(nome){
        this.#nome = nome;
    };

    getNome(){
        return this.#nome
    };

    setNota(nota){
        this.#nota = nota
    };

    getNota(){
        return this.#nota
    }

}

const ronaldo = new Aluno();
ronaldo.setNome("ronaldo");
console.log(ronaldo.getNome());
ronaldo.setNota(2)
console.log(ronaldo.getNota())

// ● Atividade 3
// Contexto: Você precisa criar um sistema que controla carros. Alguns comportamentos, como ligar
// ou frear, devem ser públicos, mas a velocidade do carro deve ser privada e não acessível
// diretamente.
// Comando: Crie uma classe Carro aplicando os conceitos de encapsulamento. O atributo
// velocidade deve ser privado, não podendo ser acessado diretamente. Implemente métodos
// públicos ligar() e frear() para controlar o carro, além de getters e setters que permitam acessar e
// alterar a velocidade de forma segura, incluindo validações quando necessário. Teste a classe
// criando um objeto Carro e chamando seus métodos.

class Carro {
    ligar;
    frear;
    #velocidade;

    constructor(ligar, frear, velocidade){
        this.ligar = ligar;
        this.frear = frear;
        this.#velocidade = velocidade;
    };

    setLigar(){
        this.ligar = 1;
    };

    getLigar(){
        return this.ligar;
    };

    setFrear(){
        this.frear = 1;
    };

    getFrear(){
        return this.frear;
    };

    setVelocidade(velocidade){
        this.#velocidade = velocidade;
    };

    getVelocidade(){
        return this.#velocidade
    };

}

const carro1 = new Carro()
carro1.setLigar()
console.log(carro1.getLigar())
carro1.setFrear()
console.log(carro1.getFrear())
carro1.setVelocidade("2km/h")
console.log(carro1.getVelocidade())


// ● Atividade 4
// Contexto: Um banco quer proteger as contas de seus clientes. O saldo deve ser privado e
// só pode ser alterado por métodos que validam depósitos e saques.
// Comando: Crie uma classe ContaBancaria que represente uma conta de cliente, garantindo
// que os dados internos sejam protegidos e que o comportamento da conta siga regras de
// segurança e consistência. Teste a classe criando objetos e simulando operações típicas de
// uma conta bancária

class ContaBancaria{
    #saldo;

    constructor(saldo){
        this.#saldo = saldo;
    };
    
    depositar(valor){
        if(valor > 0)
            this.#saldo += valor
    }

    sacar(valor){
        if(valor <= this.#saldo)
            this.#saldo = this.#saldo - valor
    }

    getExtrato(){
        return this.#saldo
    }
}

// ● Atividade 5
// Contexto: Um sistema de login precisa de segurança: a senha deve ser protegida, de forma
// que só a própria classe ou subclasses possam acessá-la.
// Comando:
// 1º Crie uma classe Usuario com o atributo _senha (simulando protegido).
// 2º Crie uma subclasse Admin que consegue acessar _senha e exibir se a senha é
// válida.
// 3º Teste criando um usuário e um administrador e mostre a diferença de acesso.

class Usuario{
    _senha;
}