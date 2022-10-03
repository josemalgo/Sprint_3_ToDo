import {STATE} from '../enum/stateEnum.js';

export class Task {
    
    constructor(name, user) {
        this.name = name;
        this.user = user;
        this.hourStart = new Date().toLocaleTimeString();
        this.hourFinish = "";
        this.state = STATE.PENDING;
    }

    showState(){
        console.log(`The task ${this.name} `);
        console.log(`State:  ${this.state} `);
    }
}