
import inquirer from 'inquirer';
import 'colors';

const questionsMenu = [
    {
        type: 'list',
        name: 'option',
        message: '¿What do you want?',
        choices: ['opt1', 'opt2', 'opt3']
    }
];

const inquirerMenu = async() => {

    console.clear();
    
    console.log('========================'.green);
    console.log('   Choose one option   '.green);
    console.log('========================\n'.green);

    const optionMenu = await inquirer.prompt(questionsMenu);

    return optionMenu;
};


export {
    inquirerMenu
};