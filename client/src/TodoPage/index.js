import React, { Component } from "react";
import ReactDOM from "react-dom";

import EnterTodo from "../EnterTodo";
import TaskLists from "../TaskLists";
import "./style.css"

class TodoPage extends Component {

    state = {
        todos:[],
        
    }


      componentDidMount() {
          this.fetchData();
      }
  
        fetchData = () => {
            console.log("fetching")
            fetch('/todo')
            .then(res=>res.json())
            .then(todos => this.setState({todos}))
            .catch(err => console.log(err))
            
        }
    

    


    render(){
        return(<React.Fragment>
        <EnterTodo  parentToFetch={this.fetchData}/>
        <div className="flex-container">
        {this.state.todos.map((todo,i)=>(
            <TaskLists todo={todo.content} time={todo.createdAt} key={i}/>
        ))}
        </div>
     
        </React.Fragment>)
    }
}
export default TodoPage;