import ContaBancaria from "./ContaBancaria.js"

let saldoInicial = 10000
const contaBancaria = new ContaBancaria(saldoInicial);

contaBancaria.depositar(20000);

let extrato = contaBancaria.getExtrato()
console.log("Meu saldo é: ", extrato)

contaBancaria.sacar(2)
console.log("Meu saldo é: ", contaBancaria.getExtrato())