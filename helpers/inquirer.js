
import inquirer from 'inquirer';
import colors from 'colors';

const questionsMenu = [
    {
        type: 'list',
        name: 'option',
        message: '¿What do you want?',
        choices: [
            {
                value: '1',
                name: '1. Create task'
            },
            {
                value: '2',
                name: '2. List tasks'
            },
            {
                value: '3',
                name: '3. Complete list tasks'
            },
            {
                value: '4',
                name: '4. Pending list tasks'
            },
            {
                value: '5',
                name: '5. Complete task(s)'
            },
            {
                value: '6',
                name: '6. Delete task'
            },
            {
                value: '0',
                name: '0. Exit'
            }
        ]
    }
];

const inquirerMenu = async () => {

    console.clear();

    console.log('========================'.green);
    console.log('   Choose one option   '.green);
    console.log('========================\n'.green);

    const {optionMenu} = await inquirer.prompt(questionsMenu);

    return optionMenu;
};

const pauseMenu = async () => {

    const questionPauseMenu = [
        {
            type: 'input',
            name: 'enter',
            message: `Push ${'ENTER'.blue} to continue`
        }
    ];

    console.log('\n');
    await inquirer.prompt(questionPauseMenu);
}

const readInput = async(message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate (value) {

                if(value.length === 0) {
                    return 'Please insert a value';
                }

                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    
    return desc;
}


export {
    inquirerMenu,
    pauseMenu,
    readInput
};