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
        console.log("task is submited", JSON.stringify(this.state.task));
        fetch('http://localhost:3004/todo', 
            {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({content:this.state.task})
            }).then(res=>res.json()).then(json => console.log(json)).catch(e => console.log("e",e))
        this.props.submit();
        
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
