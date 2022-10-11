import {STATE} from '../enum/stateEnum.js';
import crypto from 'node:crypto';

export class Task {
    
    constructor(name, user) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.user = user;
        this.hourStart = new Date().toLocaleTimeString();
        this.hourFinish = "";
        this.state = STATE.PENDING;
    }
}

