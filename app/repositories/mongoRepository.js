import { STATE } from "../enum/stateEnum.js";
import { Task } from "../models/Task.model.js";

export const getAllTasks = async () => {
    try {
        const tasks = await Task.find({});;
        return tasks;
    } catch (error) {
        throw error;
    }
}

export const getTaskById = async (req) => {
    try {
        const task = await Task.findOne({id: req});
        return task;
    } catch (error) {
        throw error;
    }
}

export const addTask = async (req) => {
    try {
        const task = await Task.create({
            name: req.name,
            user: req.user
        });
        await task.save();
    } catch (error) {
        throw error;
    }
}

export const updateTask = async (id, newTask) => {
    try {
        if (newTask.state === STATE.FINISHED){
            task.completedAt = new Date().toLocaleTimeString();
        }

        const task = await Task.updateOne(
            {id: id},
            {name: newTask.name, state: newTask.state});
        
        await task.save();
    } catch (error) {
        throw error;
    }
}

export const deleteTask = async (id) => {
    try {
        await Task.deleteOne({id: id});
    } catch (error) {
        throw error;
    }
}

