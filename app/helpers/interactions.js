import inquirer from "inquirer";
import { greenBright, italic, redBright } from "colorette";
import figlet from "figlet";
import { STATE } from '../enum/stateEnum.js';

const questions = [
    {
        type: 'rawlist',
        name: 'option',
        message: 'Choose an option: ',
        choices: [
            {
                value: 1,
                name: 'Create task'
            },
            {
                value: 2,
                name: 'Update task'
            },
            {
                value: 3,
                name: 'Delete task'
            },
            {
                value: 4,
                name: 'List all task'
            },
            {
                value: 5,
                name: 'List a task'
            },
            {
                value: 6,
                name: 'Exit'
            }
        ]
    }
]

const questionsDB = [
    {
        type: 'rawlist',
        name: 'option',
        message: 'Choose persistence method: ',
        choices: [
            {
                value: 1,
                name: 'JSON'
            },
            {
                value: 2,
                name: 'MySQL'
            },
            {
                value: 3,
                name: 'MoongoDB'
            }
        ]
    }
]

const titleMenu = async () => {
    console.log(`${redBright(figlet.textSync('Dev Team', { horizontalLayout: 'full' }))}`);
    console.log();
}

const mainMenu = async () => {
    await titleMenu();
    const { option } = await inquirer.prompt(questions);
    return option;
}

const mainDB = async () => {
    await titleMenu();
    const { option } = await inquirer.prompt(questionsDB);
    return option;
}

const readInput = async (message) => {
    const { name } = await inquirer.prompt({
        type: "input",
        name: "name",
        message: message,
        validate: function(input) {
            if(input.length === 0) {
                return "Debes escribir un valor!";
            }

            return true;
        }
    });

    return name;
}

const AllTasksMenu = async (tasks, message) => {
    console.log();
    const { id } = await inquirer.prompt(AllTasksQuestions(tasks, message));
    return id;
}

const AllTasksQuestions = (tasks, message) => {
    const choices = tasks.map((task) => {
        return {
            value: task.id,
            name: ` ${task.name} - ${task.user} - ${task.state}`
        };
    });

    return [
        {
            type: "rawlist",
            name: "id",
            message: message,
            choices: choices
        }
    ]
}

const changeState = async () => {
    const { state } = await inquirer.prompt([
        {
            type: "rawlist",
            name: "state",
            message: "Elige el nuevo estado de la tarea: ",
            choices: [
                {
                    value: STATE.PENDING,
                    name: STATE.PENDING
                },
                {
                    value: STATE.EXECUTION,
                    name: STATE.EXECUTION
                },
                {
                    value: STATE.FINISHED,
                    name: STATE.FINISHED
                }
            ]
        }
    ]);

    return state;
}

const updateMenu = async () => {
    const { option } = await inquirer.prompt([
        {
            type: "rawlist",
            name: "option",
            message: "Elige una opción: ",
            choices: [
                {
                    value: 1,
                    name: "Cambiar estado de la tarea: "
                },
                {
                    value: 2,
                    name: "Cambiar nombre de la tarea: "
                }
            ]
        }
    ]);

    return option;
}

const deleteConfirm = async () => {
    const { result } = await inquirer.prompt({
        type: "confirm",
        name: "result",
        message: "Are you sure to delete this task? "
    });

    return result;
}

export {
    mainMenu,
    readInput,
    AllTasksMenu,
    changeState,
    updateMenu,
    deleteConfirm,
    mainDB
};