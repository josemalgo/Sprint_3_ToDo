import { STATE } from "../enum/stateEnum.js";
import { TaskModelSQL } from "../database/database.js";

export const getAllTasks = async () => {
    try {
        const tasks = await TaskModelSQL.findAll();
        return tasks;
    } catch (error) {
        throw error;
    }
}

export const getTaskById = async (req) => {
    try {
        const task = await TaskModelSQL.findByPk(req);
        return task;
    } catch (error) {
        throw error;
    }
}

export const addTask = async (req) => {
    try {
        await TaskModelSQL.create({
            name: req.name,
            user: req.user
        });
    } catch (error) {
        throw error;
    }
}

export const updateTask = async (id, newTask) => {
    try {
        const task = await TaskModelSQL.findByPk(id);
        task.name = newTask.name;
        task.state = newTask.state;
        if (newTask.state === STATE.FINISHED){
            task.completedAt = new Date().toLocaleTimeString();
        }
        task.save();
    } catch (error) {
        throw error;
    }
}

export const deleteTask = async (id) => {
    try {
        await TaskModelSQL.destroy({
            where: {id}
        });
    } catch (error) {
        throw error;
    }
}

