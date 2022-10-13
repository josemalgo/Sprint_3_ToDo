import { DB_PROVIDER } from '../database/database.js';

const getAllTasks = async() => {
    return await DB_PROVIDER.getAllTasks();
}

const getTaskById = async (id) => {
    return await DB_PROVIDER.getTaskById(id);
}

const createTask = async (req) => {
    await DB_PROVIDER.addTask(req);
}

const updateTask = async (id, task) => {
    return await DB_PROVIDER.updateTask(id, task);
}

const deleteTask = async (id) => {
    return await DB_PROVIDER.deleteTask(id);
}

export {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}