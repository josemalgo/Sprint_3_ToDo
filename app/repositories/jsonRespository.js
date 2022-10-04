import { Task } from '../models/Task.js';
import { readFile, writeFile, appendFile } from 'node:fs/promises';

const getAllTasks = async () => {
    try {
        let rawdata = await readFile('./app/repositories/data.json');
        let tasks = JSON.parse(rawdata) 
        return tasks;
    }
    catch (err) {
        return err;
    }
}

const getTaskById = async (req) => {
    try {
        let task = await readFile('./data.json');
        return task;
    }
    catch (err) {
        return err;
    }
}

const addTask = async (req) => {
    try {
        let task = new Task(req.name, req.user);
        let tasks = await getAllTasks();
        await tasks.push(task);
        await writeFile('./app/repositories/data.json', JSON.stringify(tasks, null, 2));
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