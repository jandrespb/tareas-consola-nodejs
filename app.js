import {inquirerMenu,
        pauseMenu,
        readInput} from './helpers/inquirer.js';
import { Tasks } from './models/tasks.js';
import {saveDataBase} from './db/saveFile.js';
import {readDataBase} from './db/readFileDb.js';
import colors from 'colors';

const main = async () => {

    let optionMenu = '';
    const tasks = new Tasks();

    const readTaskDb = readDataBase();

    // check if file data.JSON have almost one task
    if(readTaskDb){
        // put a task
    }

    // see our task on array when do -while clean readTaskDB
    await pauseMenu();

    do {

        // Print principal menu
        optionMenu = await inquirerMenu();

        // this switch select what option our menu we will do
        switch (optionMenu) {
            case '1':
                // Create option task
                const description = await readInput('Description: ');
                tasks.createTask(description);
                break;

            case '2':
                // list option task
                console.log(tasks.listArr);
                break;
        }

        // save our file.txt on folder db
       // saveDataBase(tasks.listArr);

        await pauseMenu();

    } while (optionMenu !== '0');
}

main();