import * as interaction from './helpers/interactions.js';
import * as controller from './controllers/task-controller.js';

const main = async () => {

    let menu = true;

    do {

        let option = await interaction.mainMenu();

        switch ( option ) {
            case 1:
                let name = await interaction.inputName();
                let user = await interaction.inputUser();

                controller.createTask( { name, user } );
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                let data = await controller.getAllTasks();
                showTasks( data );
                break;
            case 5:
                menu = false;
                break;
        }

    } while (menu)

}

const showTasks = ( task ) => {
    console.log( "______ TASKS ______" );
    console.log( `Name: ${task.name}` );
    console.log( `User: ${task.name}` );
    console.log( `Estat: ${task.name}` );
    console.log( `Hora inici: ${task.name}` );
    console.log( `Hora final: ${task.name}` );
};

main();