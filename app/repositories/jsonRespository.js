import { Task } from '../models/Task.js';
import { readFile, writeFile } from 'node:fs/promises';

const getAllTasks = async () => {
    try {
        let data = await readFile('./app/repositories/data.json', 'utf8');
        return data;
    }
    catch (err) {
        return err;
    }
}

const getTaskById = async (req) => {
    try {
        let task = await readFile('./data.json', 'utf8');
        return task;
    }
    catch (err) {
        return err;
    }
}

const addTask = async (req) => {
    let task = new Task(req.name.name, req.user);
    try {
        await writeFile('./app/repositories/data.json', JSON.stringify(task));
    }
    catch(err) {
        return err;
    }
}

const updateTask = async (req) => {

}

const deleteTask = async (req) => {

}

export {
    getAllTasks,
    getTaskById,
    addTask,
    updateTask,
    deleteTask
}