// //função tradicional
// function soma (a, b){
//     return a+b;
// }
// soma(1, 2)

// //é equivalente a essa função arrow function
// const somar = (a,b) => a+b;
// somar(1, 2)

// //funções anônimas
// let saudacao1 = ()=>{
//     console.log("oi pessoal")
// }
// saudacao1()

// //diferença do this entre arrow functions e funções tradicionais
// //arrow function nao pode utilizar this
// const obj = {
//     nome: "Ana",
//     idade: 15,
//     saudacao: () => {
//         console.log("Oi" + this.nome)
//         //equivalente a
//         console.log("Oi" + obj.nome)
//     }
// }

// //callback
// function executar (funcaoCallback) {
//     console.log("antes");
//     funcaoCallback;
//     console.log("Depois");
// }

// executar((console.log("Executando...")))

// //função sincrona

// function sincrona(){
//     console.log("primerio essa linha");
//     console.log("depois essa linha");
//     console.log("e depois essa linha");
// }
// sincrona();

// function teste () {
//     console.log("a");
//     setTimeout(() => {
//         console.log("b");
//     }, 2000)
//     console.log("c");
// }

// teste()

// //funções q retornam outras
// //funcao1
// function saudacao(nome) {
//     //funcao2
//     return function (mensagem) {
//         console.log(`${mensagem}, ${nome}`);
//     }
// }

// const msgParaLuzia = saudacao("Luzia"); //funcao1
// msgParaLuzia("Fala comigo"); //funcao2

// //assincronas
// function esperar(){
//     return new Promise(resolve =>{
//         setTimeout(() => {
//             console.log("Demorou mas chegou :D")
//         }, 5000);
//     })
// }

// //toda vez q eu fizer eu preciso utilizar await
// async function executar() {
//     console.log("Esperando...")
//     const resultado = await esperar(); //espera a promise finalizar
//     console.log(resultado)
// }

// executar()

// let carro = {
//     nome:"Porsche 911 Carrera da Lice :D",
//     marca:"Porsche",
//     modelo:"Carrera",
//     ano:"2026",
//     atributos: ["som", "camera de re", "teto solar", "escapamento", "antena", "chaveiro da hello kitty"]
// }

// console.log(carro.ano)
// console.log(carro.atributos[5]) //chaveiro irado

// //adicionar
// carro.cor = "Rosa"

// //alterar
// carro.nome = "Porsche 911 Carrera"

//atv1
function criarCalculadora(operador){
    return function (a,b){
        switch (operador) {
            case '+':
                console.log(a+b);
                break;
            case '-':
                console.log(a-b);
                break;
            case '*':
                console.log(a*b);
                break;
            case '/':
                console.log(a/b);
                break;
            default:
                console.log("O operador não faz calculos")
        }
    }
}

const calculadora = criarCalculadora("+");
calculadora(5,5);

//atv2
function esperar(){
    return new Promise(resolve =>{
        setTimeout(() => {
            console.log("E-mail enviado com sucesso para [destinatário]!")
        }, 2000);
    })
}

async function executar() {
    console.log("Enviando e-mail para [destinatário]...")
    const resultado = await esperar();
    console.log(resultado)
}

executar()

let produtos = [pasta = {
    preco: "R$10,00"
    
}]