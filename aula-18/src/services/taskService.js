const express = require('express');

let tasks = [
    {id: 1, tittle: "Estudar API's", done: false},
    {id: 2, tittle: "Praticar Docker", done: true}
]

//titulo obrigatorio, n pode duplicar, tarefa só conclui se existe, n pode atualizar ou excluir uma tarefa q n existe e n pode excluir tarefa concluida

const getAll = () => tasks

const getById = (id) => {
    const task = tasks.find(t => t.id === id);
    if (!task) throw { status: 404, message: "Tarefa não encontrada"};
    return task
};

const update = (id, {tittle, done}) => {
    const task = getById(id);

    if(tittle){
        const exists = task.some(
            t => t.tittle.toLowerCase() === tittle.toLowerCase && t.id !== id
        );
        if(exists)
            throw {status: 400, message: "Já existe outra tarefa com este titulo"};
            task.tittle = tittle;
    };

    if(done !== undefined){
        if(typeof done !== "boolean")
            throw {status: 400, message: "O campo deve ser 'true' ou 'false'"}
        task.done = done;
    }
};

const create = (tittle) => {
    if(!tittle)
        throw {status: 400, message: "O campo 'tittle' é obrigatório"}

    const exists = tasks.some(
        t.tittle.toLowerCase() === tittle.toLowerCase()
    )

    if(exists)
        throw {status: 400, message: "Já existe uma tarefa com este título"}

    const newTask = {id: tasks.length + 1, tittle, done: false}
    tasks.push(newTask)
    return newTask
};

const del = (id) => {
    const taskIndex = tasks.findIndex(t => t.id === id)
    if(taskIndex === -1)
        throw {status: 404, message: "Tarefa não encontrada"}

    if(tasks[taskIndex].done){
        throw {status: 400, message: "Não é permitido excluir uma tarefa concluída"}
    }

    const deleted = tasks.splice(taskIndex, 1)[0]
    return deleted
}

module.exports = { getAll, getById, del, create, update}