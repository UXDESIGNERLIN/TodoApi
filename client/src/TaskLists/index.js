import React from "react";





class TaskLists extends React.Component {
    state = {
        todos:[]
    }
    componentDidMount(){
        console.log("componentdidmount", this.state);
        fetch('http://localhost:3001/todo').then(res=>res.json()).then(todos => this.setState({todos}, ()=> console.log(this.state))).catch(err => console.log(err))
        
    }

    
    render(){
        return(
            <div>
             {this.state.todos.map(todo => (<p key={todo.id}>{todo.content}</p>))}
              </div>
             
        );
    }
}

export default TaskLists;
