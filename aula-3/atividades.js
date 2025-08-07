// 1. Quais são os tipos de variáveis utilizadas no Javascript e qual a
// menos segura?
// Resposta: const, var, let ; sendo o var menos seguro.
// 2. Informe que tipo de dado é o código abaixo:
// a. `123` = string
// b. ‘85.88’ = string
// c. 3.14 = float
// d. 9 = int
// e. “Aluno” = string
// f. “a+b” = string
// g. 123456 = int
// h. [1,3,5,7] = array
// i. {nome: “Vivi”: idade: 16} = object
// j. let aut = true; boolean
// Lista de atividades
// 3. Solicite ao usuário que digite um CPF e verifique se ele tem
// exatamente 11 dígitos. Caso contrário, exiba uma mensagem
// personalizada explicando o erro.
// 4. Converta os dados abaixo:
// Resposta 3
// 3. Solicite ao usuário que digite um CPF e verifique se ele tem
// exatamente 11 dígitos. Caso contrário, exiba uma mensagem
// personalizada explicando o erro.
// Resposta 4
// 4. Converta os dados abaixo:
// Lista de atividades
// 5. Qual valor de cada variável abaixo:
// a)
// b)
// c)
// d)
// e)
// f)
// g)
// h)
// Resposta 5
// 5. Qual valor de cada variável abaixo:
// a)
// b)
// c)
// d)
// e)
// f)
// g)
// h)
// a) 1
// b) 6
// c) 39
// d) 15
// e) 300
// f) 18
// g) 10
// h) 0
// Gabarito
// Lista de atividades
// 6. Crie um objeto aluno com as propriedades nome, idade, notaFinal e
// aprovado(boolean).
// 7. Com a atividade acima, crie uma string informando o nome, idade, nota e
// se foi aprovado.
// 8. Faça uma calculadora da sua idade.
// 9. Converta graus Celsius para Fahrenheit com a fórmula F = (C * 9/5) + 32.
// a) 18ºC c) 27ºC e) 100ºC g) -4ºC
// b) 5°C d) 0 f) 44ºC h) 33ºC
// Resposta 6, 7, 8 e 9
// 6. Crie um objeto aluno com as propriedades nome, idade, notaFinal e aprovado(boolean).
// 7. Com a atividade acima, crie uma string informando o nome, idade, nota e se foi aprovado.
// Resposta 6, 7, 8 e 9
// 8. Faça uma calculadora da sua idade.
// Resposta 6, 7, 8 e 9
// 9. Converta graus Celsius para Fahrenheit com a fórmula F = (C * 9/5) + 32.
// a) 18ºC c) 27ºC e) 100ºC g) -4ºC
// b) 5°C d) 0 f) 44ºC h) 33ºC
// Forma 1
// Resposta 6, 7, 8 e 9
// 9. Converta graus Celsius para Fahrenheit com a fórmula F = (C * 9/5) + 32.
// a) 18ºC c) 27ºC e) 100ºC g) -4ºC
// b) 5°C d) 0 f) 44ºC h) 33ºC
// Forma 2

// let n1 = "150" //para int = 150
// let n2 = 18 // para string = "18"
// let n3 = "20.99" // para float = 20.99
// let n4 = "010" //para int = 10

// function verificaCpf (n) {
//     if(n.toString().length == 11){
//         console.log("Bacanudo")
//     } else {
//         console.log("Foi não")
//     }
// }

// console.log(verificaCpf(12345678910))

// let nome = "taligado"
// let idade = 10
// let notaFinal = 10
// let aprovado= true
// let aluno={nome,idade,notaFinal,aprovado}

// console.log(aluno)

// let mensagem = `O aluno ${nome}, de ${idade} anos, teve sua média final de ${notaFinal} e a sua aprovação é ${aprovado}`

// console.log(mensagem)

// let calculadora = (a1, a2) => {
//     let idade = a1 - a2
//     let mensagem = `Sua idade é ${idade}`
//     console.log(mensagem)
// }

// console.log(calculadora(2025, 2000))

// let soraia = 0
// soraia++
// soraia = 1

// let bichinho = 5
// bichinho ++
// bichinho = 6

// let mateus = 40
// mateus--
// mateus = 39

// let numero =10
// numero += 5
// numero = 15

// let saldo = 500
// saldo =- 200
// saldo = 300

// let b1 = 9
// b1 *= 2
// b1 = 18

// let aux = 1
// aux = aux + 9
// aux = 10

// let aux = 5
// aux = aux -5
// aux = 0