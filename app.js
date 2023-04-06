import { inquirerMenu } from './helpers/inquirer.js';
import('colors');

const main = async() => {

    console.log('Hello World');

    let optionMenu = '';
    
    do {

        optionMenu = await inquirerMenu();
        console.log({optionMenu});
        
    } while (optionMenu !== '0');
} 

main();