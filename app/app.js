import * as interaction from './helpers/interactions.js';
import * as controller from './controllers/task-controller.js';

const main = async() => {
    
    let option = await interaction.mainMenu();

    switch(option) {
        case 1:
            let name = await interaction.inputName();
            let user = await interaction.inputUser();

            controller.createTask({name, user});
            break;
        case 2:
            break;
        case 3:
            break;
        case 4: 
            let data = controller.getAllTasks();
            console.log(data);
            break; 
        case 5:
            break;
    }
}

main();