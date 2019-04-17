import React, { Component } from "react";

export default class AddTodo extends Component {
    state = {
        todo: ''
    }

    handleChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            todo: ''
        })
    }

    render() {
        return (
        <main className="add-todo-container">
            <ul className="list-group">
                <li id="input-container" className="list-group-item">
                    <form onSubmit={this.handleSubmit}>
                        <section id="form-container" className="d-flex justify-content-between">
                        <section id="label-input-section">
                            <label htmlFor="todo" className="mr-1">Todo:</label>
                            <input 
                            id="todo" 
                            className="col-10 mt-1" 
                            type="text" 
                            placeholder="...Add a new todo" 
                            value={this.state.todo}
                            onChange={this.handleChange}/>
                        </section>
                        <button id="add-todo-button" className="btn btn-sm btn-success">Add</button>
                        </section>
                    </form>
                </li>
            </ul>
        </main>
        );
    }
}