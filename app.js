import {inquirerMenu,
        pauseMenu,
        readInput} from './helpers/inquirer.js';
import { Tasks } from './models/tasks.js';
import colors from 'colors';

const main = async () => {

    console.log('Hello World');

    let optionMenu = '';
    const tasks = new Tasks();

    do {

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
                console.log(tasks._list);
                break;
        }

        await pauseMenu();

    } while (optionMenu !== '0');
}

main();