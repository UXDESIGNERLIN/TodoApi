import React from "react";
import EnterTodo from "../EnterTodo";
import TaskLists from "../TaskLists";

class TodoPage extends Component {

    state = {
        todo:[]
    }

    fetchTodo = () => {
        fetchData = () => {
            console.log("fetching")
            fetch('/todo')
            .then(res=>res.json())
            .then(todos => this.setState({todos}))
            .catch(err => console.log(err))
            
        }
    }


    render(){
        return(<React.Fragment><EnterTodo submit={this.fetchTodo}/><TaskLists /></React.Fragment>)
    }
}
export default TodoPage;