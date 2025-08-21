// const cep = `74474018`;
// 
//fetch api
// fetch(`https://viacep.com.br/ws/${cep}/json/`)
    // .then(res => res.json()) //converte pra obj
    // .then(data => console.log(data)) //recebe os dados convertidos e mostra os dados
    // .catch(err => console.log(err))// se der erro exibe
// 
// ##################################
const http = require('http');
const fs = require('fs');
const port = 3000;

function lerDados(arquivo = usuario.json) { //le os dados
    return JSON.parse(fs.readFile(arquivo, 'utf-8')); //retorna os dados e converte pra json
};

function salvarDados(arquivo = usuario.json) {
    fs.writeFileSync(arquivo, JSON.stringify(dados, null, 2)); //usa a funcao de escrever no arquivo passando como parametros o arquivo e um metodo que converte
};

const server = http.createServer((req, res) => {
    res.setHeader("Conten-type", "application/json"); //define o conteudo da resposta
    if (req.method === "GET" && req.url === '/dados') {
        const dados = lerDados('usuarios.json') //retorna os dados do json
        res.writeHead(200);
        res.end(JSON.stringify(dados));
    } else if (req.method === "POST" && req.url === "/dados") {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try{ //tudo q der certo entra aq
                const novoDado = JSON.parse(body)

                const dados = lerDados('usuarios.json') //le o json existente

                novoDado.id = 99, // gera o id

                dados.push(novoDado) // adiciona o novo dado no json

                salvarDados('usuarios.json', dados) //chama a salvar dados

                res.writeHead(201) //responde ao cliente com status 201(criado cm sucesso)
                res.end("Dados adicionados com sucesso")
            } catch (error) {
                console.log("Ocorreu um erro: ", error)
                res.writeHead(400);
            }
        })
    } else {
        res.writeHead(404);
        res.end("Página não existe.")
    }
})

server.listenerCount(port, () => { //servidor ira rodar na porta definida
    console.log(`Servidor rodando na porta ${port}. Só abrir na porta:${port}/`);
})

const url = `http://localhost:${port}/dados`
const objNovoDado = {
    nome: "Ronaldo Emanual Porsche do Victor",
    idade: 105,
    salario: 250.00
}

fetch(url, {
    method: "POST",
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(objNovoDado)
})
.then(response => {
    if(!response)
        console.log("Error");
    return response.json
})
.then(data => console.log("Resposta do servidor: ", data))
.catch(error => {
    console.log("Error: ", error)
})
