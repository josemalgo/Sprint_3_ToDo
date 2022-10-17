import * as interaction from './helpers/interactions.js';
import * as controller from './controllers/task-controller.js';
import { selectDatabase, disconectDB } from './database/database.js';

const DbProvider = async () => {
    console.clear();

    let option = await interaction.mainDB();
    await selectDatabase(option);
};

const main = async () => {

    await DbProvider();
    let menu = true;
    let data = [];
    console.clear();

    do {

        let option = await interaction.mainMenu();

        switch (option) {
            case 1:
                let name = await interaction.readInput("Escribe el título de la tarea: ");
                let user = await interaction.readInput("Escribe el nombre del usuario que realizará la tarea: ");

                await controller.createTask({ name, user });
                break;
            case 2:
                await updateTask();
                break;
            case 3:
                await deleteTask();
                break;
            case 4:
                data = await controller.getAllTasks();
                showTasks(data);
                break;
            case 5:
                break;
            case 6:
                menu = false;
                disconectDB();
                break;
        }

    } while (menu)

};

const showTasks = (tasks) => {
    console.log();
    console.log("________ TASKS ________");
    tasks.forEach(task => {
        console.log();
        console.log('--------------------');
        console.log(`Títol: ${task.name}`);
        console.log(`Usuari: ${task.user}`);
        console.log(`Estat: ${task.state}`);
        console.log(`Hora inici: ${task.createdAt}`);
        console.log(`Hora final: ${task.completedAt}`);
        console.log('--------------------');
    });
};

const updateTask = async () => {

    let id = await getIdTask("Escoge la tarea que quieres modificar: \n");
    let task = await controller.getTaskById(id);
    let option = await interaction.updateMenu();

    switch (option) {
        case 1:
            let newState = await interaction.changeState();
            task.state = newState;
            await controller.updateTask(id, task);
            break;
        case 2:
            let newName = await interaction.readInput("Introduce el nuevo título de la tarea: ");
            task.name = newName;
            await controller.updateTask(id, task);
            break;
    }
};

const deleteTask = async () => {
    const id = await getIdTask("Escoge la tarea que quieres eliminar: \n");
    const confirmation = await interaction.deleteConfirm();

    if (confirmation) {
        await controller.deleteTask(id)
    }
};

const getIdTask = async (message) => {
    let tasks = await controller.getAllTasks();
    let id = await interaction.AllTasksMenu(tasks, message);

    return id;
};

main();