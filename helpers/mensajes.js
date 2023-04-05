require('colors');

const showAppMenu = () => {
    console.clear();
    console.log('========================'.green);
    console.log('   Choose one option   '.green);
    console.log('========================\n'.green);

    console.log(`${'1.'.green} Create tasks`);
    console.log(`${'2.'.green} List tasks`);
    console.log(`${'3.'.green} Complete list tasks`);
    console.log(`${'4.'.green} Pending list tasks`);
    console.log(`${'5.'.green} Complete task(s)`);
    console.log(`${'6.'.green} Delete task`);
    console.log(`${'0.'.green} Exit\n`);

    // const that we say and get information by the user type in our console
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // we make a question to user
    readline.question('Select one option: ', (answerOption) =>{
        console.log({answerOption});
        readline.close();
    })
}

module.exports = {
    showAppMenu
}