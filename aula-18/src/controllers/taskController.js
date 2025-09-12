const taskService = require('../services/taskService');

const getAll = (req, res) => {
    const tasks = taskService.getAll();
    res.json(tasks);
};

const getById = (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const task = taskService.getById(id);
        res.json(task);
    } catch (error) {
        next (error);
    };
};

//create, post e update
const create = (req, res, next) => {
    try{
        const{tittle} = req.body;
        const task = taskService.create(tittle);
        res.status(201).json(task);
    } catch(error){
        next(error);
    };
};

//update
const update = (req, res, next) => {
    try{
        const id = parseInt(req.params.id);
        const{tittle, done} = req.body;
        const task = taskService.update(tittle);
        res.status(200).json(task);
    } catch(error){
        next(error)
    }
}

const remove = (req, res, next) => {
    try{
        const id = parseInt(req.params.id);
        const deleted = taskService.del(id);
        res.json({msg: "Tarefinha excluida"});
    } catch(error){
        next(error)
    }
}

module.exports = { getAll, getById, update, create, remove}