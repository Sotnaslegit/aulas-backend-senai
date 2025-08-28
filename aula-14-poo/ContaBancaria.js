class ContaBancaria{
    #saldo

    constructor(saldoInicial){
        this.#saldo = saldoInicial;
    }

    //metodo depositar
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

module.exports = ContaBancaria;