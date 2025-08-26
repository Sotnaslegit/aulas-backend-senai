//importando o arquivo da classe pessoa
import Pessoa from "./class/pessoa.js"

const pessoa1 = new Pessoa("Ronaldo", 12, "1212121212"); //a constante é um objeto
pessoa1.setNome("Ronaldo"); //definindo o nome ronaldo
let nomePessoa = pessoa1.pegarNome(); // declarei uma variavel chamada nomePessoa que esta recebemdo o nome definido
console.log(nomePessoa); //mostra no console