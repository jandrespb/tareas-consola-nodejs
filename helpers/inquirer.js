
import inquirer from 'inquirer';
import colors from 'colors';

const questionsMenu = [
    {
        type: 'list',
        name: 'options',
        message: '¿What do you want?',
        choices: [
            {
                value: '1',
                name: `${'1'.green} Create task`
            },
            {
                value: '2',
                name: `${'2'.green} List tasks`
            },
            {
                value: '3',
                name: `${'3'.green} Complete list tasks`
            },
            {
                value: '4',
                name: `${'4'.green} Pending list tasks`
            },
            {
                value: '5',
                name: `${'5'.green} Complete task(s)`
            },
            {
                value: '6',
                name: `${'6'.green} Delete task`
            },
            {
                value: '0',
                name: `${'0'.yellow} Exit`
            }
        ]
    }
];

const inquirerMenu = async () => {

    console.clear();

    console.log('========================'.green);
    console.log('   Choose one option   '.yellow);
    console.log('========================\n'.green);

    // Desestructuarción name='options'
    const {options} = await inquirer.prompt(questionsMenu);

    return options;
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