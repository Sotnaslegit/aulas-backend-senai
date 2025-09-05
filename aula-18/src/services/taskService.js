const express = require('express');

let tasks = [
    {id: 1, title: "Estudar API's", done: false},
    {id: 2, title: "Praticar Docker", done: true}
]

//titulo obrigatorio, n pode duplicar, tarefa só conclui se existe, n pode atualizar ou excluir uma tarefa q n existe e n pode excluir tarefa concluida

const getAll = () => tasks

const getById = (id) => {
    const task = tasks.find(t => t.id === id);
    if (!task) throw { status: 404, message: "Tarefa não encontrada"};
    return task
};

module.exports = { getAll, getById}