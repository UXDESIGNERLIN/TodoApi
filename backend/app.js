const express = require('express');
const app = express();


const cors = require("cors");
const bodyParser = require("body-parser");
const db = require('./src/database/connection')
//Router for enterTask later have to seperate this one
const task_model = require("./src/model/taskModel") 

let todos= [{id:1, content:"LET'Svd TEST thing to do"}, {id:2, content:"first thing to do"}]
app.use(express.json())
//app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors());


app.get('/todo', async(req, res)=>{
    try {
        const Tasks = await task_model.getTasks();
         
        if(Tasks) {
            res.status(200).send(Tasks)
        }else {
            res.status(400).send({error:"error"})
        }

    }
    catch(e){console.log(e)}
 });


app.post('/todo', async(req, res) => {
    
    try {
       
        const payload = req.body.content;
       
        const enterContent = await task_model.enterTask(payload);
    
        if(enterContent) {
            res.status(200).send(enterContent)
        }else {
            res.status(400).send({error:"error"})
        }
    }
    catch(e) {
        console.log("error",e)
    } 
})




module.exports= app;