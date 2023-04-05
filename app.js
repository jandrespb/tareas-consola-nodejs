require('colors');

const {showAppMenu, pauseAppMenu} = require('./helpers/mensajes');

const main = async() => {
    console.log('Hello World');

    showAppMenu();

    pauseAppMenu();

} 

main();