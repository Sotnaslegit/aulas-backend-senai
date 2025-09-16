// 20. Imagine que temos o servidor já construído, mas precisamos criar as rotas de uma
// aplicação de tickets de chamados.
// A) Construa o roteamento /ticket e implemente as rotas para: listar todos, adicionar,
// atualizar, remover.

// 21. Ainda sobre o endpoint criado na atividade 20, vamos criar um middleware que valide o
// corpo da requisição POST /ticket.
// Exemplo: No corpo da requisição, no body, estão vindo os campos: título, prioridade,
// descrição, categoria, nome solicitante, departamento/setor do solicitante, telefone e email
// do solicitante.

const express = require('express');
const app = express();

app.use(express.json());

let tickets = [];

//listar todos
app.get('/ticket', (req, res) =>{
    res.json(tickets);
});

//adicionar ticket
app.post('/ticket', (req, res) => {
    const novoTicket = {
        id: tickets.length + 1,
        ...req.body
    };
    tickets.push(novoTicket);
});

//put
app.put('/ticket/:id', (req, res) => {
    const {id} = req.params;

    let ticket = tickets.find(t = t.id === id);

    if(!ticket){
        return res.status(404).json({msg: "Ticket não encontrado."})
    }

    ticket = {...ticket, ...req.body};

    tickets = tickets.map(t => (t.id === id ? ticket : t));
    res.json(ticket);
});

//delete
app.delete('/ticket/:id', (req, res) => {
    const {id} = req.params;
    tickets = tickets.filter(t => t.id != id);
    res.json({msg: "Ticket atualizado com sucesso."});
});

function middlewareValidarTicket(req, res, next){
    const {titulo, prioridade, descricao, categoria, nomeSolicitante, departamento, telefone, email} = req.body;

    if(!titulo || !prioridade || !descricao || !categoria || !nomeSolicitante || !departamento || !telefone || !email){
        return res.status(400).json({msg: "Por favor, preencha todos os  campos."});
    };

    //se estiver certinho vai enviar as paradinha
    next();
}

module.exports = app;