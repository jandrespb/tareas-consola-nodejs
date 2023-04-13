import {Task} from './task.js';

class Tasks {

    _list = {};

    // Transform our object _list to array using getter
    get listArr(){

        const list = [];

        Object.keys(this._list).forEach(key => {

            const task = this._list[key];
            list.push(task);
        });

        return list;

    }

    constructor(){
        this._list = {};
    }

    // Create our task
    createTask(description = ''){

        const task = new Task(description);

        // Insert task in our object _list through uuid
        this._list[task.id] = task;

    }
}

export {Tasks};