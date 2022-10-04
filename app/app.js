import * as interaction from './helpers/interactions.js';
import * as controller from './controllers/task-controller.js';

const main = async () => {

    let menu = true;
    console.clear();

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

const showTasks = ( tasks ) => {
    console.log();
    console.log( "________ TASKS ________" );
    tasks.forEach(task => {
        console.log();
        console.log('--------------------');
        console.log( `Nom tasca: ${task.name}` );
        console.log( `Usuari: ${task.user}` );
        console.log( `Estat: ${task.state}` );
        console.log( `Hora inici: ${task.hourStart}` );
        console.log( `Hora final: ${task.hourFinish}` );    
        console.log('--------------------');
    });
};

main();