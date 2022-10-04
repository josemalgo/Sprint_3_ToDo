import { Task } from '../models/Task.js';
import { STATE } from '../enum/stateEnum.js';
import { readFile, writeFile, appendFile } from 'node:fs/promises';

const getAllTasks = async () => {
    try {
        let rawdata = await readFile('./app/repositories/data.json');
        let tasks = JSON.parse(rawdata);
        return tasks;
    }
    catch (err) {
        return err;
    }
}

const getTaskById = async (req) => {
    try {
        let tasks = await getAllTasks();
        let task = tasks.find(task => task.id === req);
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
        saveJSON(tasks);
    }
    catch(err) {
        return err;
    }
}

const updateTask = async (id, newTask) => {
    let tasks = await getAllTasks();

    let index = tasks.findIndex(task => task.id === id);

    if (newTask.name !== undefined)
        tasks[index].name = newTask.name;

    if (newTask.state !== undefined)
        tasks[index].state = newTask.state;
    
    if(newTask.state === STATE.FINISHED)
        tasks[index].hourFinish = new Date().toLocaleTimeString();
    
    saveJSON(tasks);
}

const deleteTask = async (req) => {

}

const saveJSON = async (tasks) => {
    await writeFile('./app/repositories/data.json', JSON.stringify(tasks, null, 2));
}

export {
    getAllTasks,
    getTaskById,
    addTask,
    updateTask,
    deleteTask
}