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
        const task = await Task.findOne({ _id: req });
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
        const task = await Task.updateOne(
            { _id: id },
            [
                {
                    $set: {
                        name: newTask.name,
                        state: newTask.state,
                        completedAt: 
                        {
                            $cond: [{$eq: [newTask.state, STATE.FINISHED]}, new Date().toLocaleTimeString(), undefined]
                            //$cond: { if: { $eq: ["$state", STATE.FINISHED] }, then: new Date().toLocaleTimeString()}
                        }
                    }
                }

            ]
        );

        //await task.save();
    } catch (error) {
        throw error;
    }
}

export const deleteTask = async (id) => {
    try {
        await Task.deleteOne({ _id: id });
    } catch (error) {
        throw error;
    }
}

