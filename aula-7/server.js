const http = require("http"); //modulo interno no node
const port = 3000; //porta onde o node/servidor irá rodar

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text"}) //definido cabeçalho
    res.write("Olá, servidor em Nodejs está funcionando") //Corpo
    res.end() //finalizar
})

server.listen(port, () => { //servidor irá rodar na porta definida
    console.log(`Servidor rodando na ${port}`)
})

//lendo arquivos
const fs = require("fs") //importando modulo interno do node chamada File System
// fs.readFile('dados.txt', 'utf-8', (err, data) => { //chamando o metodo para ler meu arquivo
//     if(err) //se der erro vai aparecer no console
//         console.log("Erro:", err)

//     console.log(data) //nesa linha irá mostrar os dados do meu arquio "dados.txt"
// })

//escrevendo no arquivo
// fs.writeFile('dados.txt', 'tungtungtungsahur', (erro) => {
//     if(erro)
//         console.log("Houve um erro:" + erro)

//     console.log("Arquivo salvo com sucesso")
// })

//Acrescenta dados no arquivo
fs.appendFile("dados.txt", "Linha acrescentada.", (err) =>{
    if(err)
        console.log("Erro: " , err)

    console.log("Linha adicionada com sucesso")
})