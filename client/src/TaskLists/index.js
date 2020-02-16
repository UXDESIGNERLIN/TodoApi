import React from "react";





class TaskLists extends React.Component {
    state = {
        fetching:false,
        todos:[]
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
            <div>
             {this.state.todos.map(todo => (<p key={todo.id}>{todo.content}</p>))}
              </div>
             
        );
    }
}

export default TaskLists;
