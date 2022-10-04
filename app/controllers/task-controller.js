import * as jsonRepository from '../repositories/jsonRespository.js';

const getAllTasks = async() => {
    return await jsonRepository.getAllTasks();
}

const getTaskById = async (id) => {
    return await jsonRepository.getTaskById(id);
}

const createTask = async (req) => {
    jsonRepository.addTask(req);
}

const updateTask = async (id, task) => {
    return await jsonRepository.updateTask(id, task);
}

const deleteTask = async (id) => {
    return await jsonRepository.deleteTask(id);
}

export {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}