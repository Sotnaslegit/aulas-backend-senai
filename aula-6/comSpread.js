//Exemplo operador spread com obj

const dadosAdicionais = {
    rua: "Bertoldo simao de Oliveira",
    numero: 23
}
const pessoa = {
    name: "Iasmin",
    idade: 29,
    ...dadosAdicionais
}

console.log(pessoa)

//Poder ser utilizado para desestruturar arrays e objetos