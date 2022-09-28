export class Task {
    
    constructor(name, user) {
        this.name = name;
        this.user = user;
        this.hourStart = "";
        this.hourFinish = "";
        this.state = "";
    }

    showState(){
        console.log(`The task ${this.name} `);
        console.log(`State:  ${this.state} `);
    }
}