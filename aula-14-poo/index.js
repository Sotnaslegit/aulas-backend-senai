import Carro from "./Carro.js";

// const objCarro = new Carro("nome da menina");
// objCarro.nome = "ronaldo"
// let nome = objCarro.nome;
// console.log("o nome é: ",nome)

const objCarro2 = new Carro() //atribuindo os dados da classe ao objeto
objCarro2.definirNomeChassi("chassizinho"); //definindo nome 
let chassi = objCarro2.pegarNomeChassi(); //capturando nome
console.log(chassi) //mostrando o nome