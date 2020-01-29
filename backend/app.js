const express = require('express');
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
const db = require('./src/database/connection')

let todos= [{id:1, content:"first thing to do"}, {id:2, content:"first thing to do"}]
app.use(express.json())
app.use(bodyParser.json())
app.use(cors());
app.get('/todo', (req, res)=>{
   //let todos= [{id:1, content:"first thing to do"}, {id:2, content:"first thing to do"}]
   res.json(todos)
});
app.post('/todo', (req, res) => {
    const task = {
        id: todos.length + 1, // in the future will be assigned by db
        content: req.body.content
    }
    todos.push(task);
    res.send(todos)
    console.log(req)
})

module.exports= app;