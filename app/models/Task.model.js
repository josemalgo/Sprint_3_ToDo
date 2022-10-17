import mongoose from "mongoose";
import { STATE } from "../enum/stateEnum.js";

const taskSchema = new mongoose.Schema({
    name: String,
    user: String,
    createdAt: {
      type: String,
      default: new Date().toLocaleTimeString(),  
    },
    completedAt: String,
    state: {
        type: String,
        default: STATE.PENDING,  
      }
});

export const Task = mongoose.model('Task', taskSchema);