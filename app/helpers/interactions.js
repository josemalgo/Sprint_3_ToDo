import inquirer from "inquirer";
import { greenBright, redBright } from "colorette";

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

const titleMenu = async () => {
    console.clear();
    console.log(`\n${greenBright('-----------------------------------------')}`);
    console.log(`${redBright('TODO')}`);
    console.log(`${greenBright('-----------------------------------------')}`);
}

const mainMenu = async() => {
    await titleMenu();
    const { option } = await inquirer.prompt(questions);
    return option;
}

export {mainMenu};