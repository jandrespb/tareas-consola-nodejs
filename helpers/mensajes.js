require('colors');

const showAppMenu = () => {
    console.clear();
    console.log('========================'.green);
    console.log('   Choose one option   '.green);
    console.log('========================\n'.green);

    console.log(`1. Create tasks`);
    console.log(`2. List tasks`);
    console.log(`3. Complete list tasks`);
    console.log(`4. Pending list tasks`);
    console.log(`5. Complete task(s)`);
    console.log(`6. Delete task`);
    console.log(`0. Exit\n`);
}

module.exports = {
    showAppMenu
}