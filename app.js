require('colors');

const {showAppMenu, pauseAppMenu} = require('./helpers/mensajes');

const main = async() => {

    console.log('Hello World');

    let optionMenu = '';
    
    do {

        optionMenu = await showAppMenu();
        console.log({optionMenu});

        // this conditional is when we put 0 on console, we leave our app
        if(optionMenu !== '0')
        await pauseAppMenu();
        
    } while (optionMenu !== '0');


    //pauseAppMenu();

} 

main();