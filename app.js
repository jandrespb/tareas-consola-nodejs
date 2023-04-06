import { inquirerMenu, pauseMenu } from './helpers/inquirer.js';
import('colors');

const main = async() => {

    console.log('Hello World');

    let optionMenu = '';
    
    do {

        optionMenu = await inquirerMenu();
        console.log({optionMenu});

        await pauseMenu();
        
    } while (optionMenu !== '0');
} 

main();