import {Task} from './task.js';

class Tasks {

    _list = {};

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