import fs from 'fs';

const saveDataBase = (data) => {

    const file = './db/data.json';

    fs.writeFileSync(file, JSON.stringify(data));
}


export{
    saveDataBase
}