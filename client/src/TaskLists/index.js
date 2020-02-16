import React from "react";
import "./style.css"



class TaskLists extends React.Component {
    state = {
        fetching:false,
        todos:[],
        name:this.props.name
    }

    fetchData = () => {
        console.log("fetching")
        fetch('/todo')
        .then(res=>res.json())
        .then(todos => this.setState({todos}))
        .catch(err => console.log(err))
        
    }
   
 /*componentDidMount() {
        setInterval(() => this.fetchData(), 5000);
       
    }*/
    render(){
        return(
            <div className="todo-list-container">
              <p>{this.props.time}</p>
             <h3>{this.props.todo}</h3>
            
           
              </div>
             
        );
    }
}

export default TaskLists;
