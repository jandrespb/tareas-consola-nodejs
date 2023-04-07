import { inquirerMenu, pauseMenu } from './helpers/inquirer.js';
import {Task} from './models/task.js';
import('colors');

const main = async() => {

    console.log('Hello World');

    let optionMenu = '';
    
    do {

        // optionMenu = await inquirerMenu();
        // console.log({optionMenu});

        const task = new Task('Learn NodeJs');
        console.log(task);

        await pauseMenu();
        
    } while (optionMenu !== '0');
} 

main();