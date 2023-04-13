import fs from 'fs';

const file = './db/data.json';

const readDataBase = () => {

    // check if file was create or exist
    if(!fs.existsSync(file)){
        return null;
    }

    // read or file
    const info = fs.readFileSync(file, {encoding:'utf-8'});

    // parseo string to Object:
    const data = JSON.parse(info);

    console.log(data);

    return data;
}

export{readDataBase}