import * as jsonRepository from '../repositories/jsonRespository.js';

const getAllTasks = () => {
    return jsonRepository.getAllTasks();
}

const getTaskById = (id) => {
    
}

const createTask = (req) => {
    jsonRepository.addTask(req);
}

const updateTask = (id, task) => {
    
}

const deleteTask = (id) => {
    
}

export {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}