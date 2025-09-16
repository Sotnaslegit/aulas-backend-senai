// 18. Crie uma classe Carro com atributos marca, modelo, ano.
// a) Adicione métodos
// - ligar() -> retorna “Carro ligado”.
// - desligar() retorna “Carro desligado”.
// b) Instancie 3 carros diferentes e exiba o resultado.

class Carro{
    constructor(marca, modelo, ano){
        this.marcha = marca,
        this.modelo = modelo,
        this.ano = ano
    };
    
    setMarca(marca){
        this.marca = marca
    };
    getMarca(){
        return this.marca
    };

    setModelo(modelo){
        this.modelo = modelo;
    };
    getModelo(){
        return this.modelo;
    };

    setAno(ano){
        this.ano = ano;
    };
    getAno(){
        return this.ano;
    };

    ligar(){
        console.log("Carro ligado")
    }
    desligar(){
        console.log("Carro desligado")
    }
};

const carro1 = new Carro();
carro1.setMarca("Golf");
console.log(carro1.getMarca());
carro1.setModelo("Golfão GTI");
console.log(carro1.getModelo());
carro1.setAno("2005");
console.log(carro1.getAno());
carro1.ligar()
carro1.desligar()

const carro2 = new Carro();
carro1.setMarca("Honda");
console.log(carro1.getMarca());
carro1.setModelo("SEDAN");
console.log(carro1.getModelo());
carro1.setAno("2025");
console.log(carro1.getAno());
carro2.ligar()
carro2.desligar()

const carro3 = new Carro();
carro1.setMarca("Toyota");
console.log(carro1.getMarca());
carro1.setModelo("Hatch");
console.log(carro1.getModelo());
carro1.setAno("2026");
console.log(carro1.getAno());
carro3.ligar()
carro3.desligar()