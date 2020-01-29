import React,  { Component } from "react";


class EnterTodo extends Component {
    state = {
        task:""
    }
    
    handleOnChange = (e) => {
        this.setState({task:e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log("task is submited", this.state.task);
        
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="todo">What do you need to do?:</label>
                <input id="todo" type="text" onChange={this.handleOnChange} />
                <button type="submit">create todo</button>
                </form>
            </div>
        );
    }
}

export default EnterTodo;
