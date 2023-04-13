import fs from 'fs';

const file = './db/data.json';

const saveDataBase = (data) => {
    fs.writeFileSync(file, JSON.stringify(data));
}


export{
    saveDataBase
}