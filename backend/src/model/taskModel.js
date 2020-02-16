const Task = require("../schemas/taskSchema");
const uuidv1 = require("uuid/v1");

exports.getTasks = async () => {
    
    try {
        const Tasks = await Task.findAll();
        return Tasks;

    }
    catch(e){console.log(e)}
}



exports.enterTask = async task_content => {
    console.log("task_content",task_content)
    const {content}=task_content;
   // console.log("task_content later",task_content)
    try {

        let task = await Task.create({id:uuidv1(), content:task_content});
        return task;

    }
    catch(e) {
        console.log("error", e)
    }
}