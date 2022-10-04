import * as interaction from './helpers/interactions.js';
import * as controller from './controllers/task-controller.js';
import inquirer from 'inquirer';

const main = async () => {

    let menu = true;
    let data = [];
    console.clear();

    do {

        let option = await interaction.mainMenu();

        switch (option) {
            case 1:
                let name = await interaction.readInput("Escribe el título de la tarea");
                let user = await interaction.readInput("Escribe el nombre del usuario que realizará la tarea");

                controller.createTask({ name, user });
                break;
            case 2:
                await updateTask();
                break;
            case 3:
                break;
            case 4:
                data = await controller.getAllTasks();
                showTasks(data);
                break;
            case 5:
                break;
            case 6:
                menu = false;
                break;
        }

    } while (menu)

}

const showTasks = (tasks) => {
    console.log();
    console.log("________ TASKS ________");
    tasks.forEach(task => {
        console.log();
        console.log('--------------------');
        console.log(`Títol: ${task.name}`);
        console.log(`Usuari: ${task.user}`);
        console.log(`Estat: ${task.state}`);
        console.log(`Hora inici: ${task.hourStart}`);
        console.log(`Hora final: ${task.hourFinish}`);
        console.log('--------------------');
    });
};

const updateTask = async () => {
    let tasks = await controller.getAllTasks();
    let id = await interaction.AllTasksMenu(tasks);
    let task = await controller.getTaskById(id);
    let option = await interaction.updateMenu();

    switch (option) {
        case 1:
            let newState = await interaction.changeState();
            task.state = newState;
            await controller.updateTask(id, task);
            break;
        case 2:
            let newName = await interaction.readInput("Introduce el nuevo título de la tarea");
            task.name = newName;
            await controller.updateTask(id, task);
            break;
        default:
            break;
    }
}

main();