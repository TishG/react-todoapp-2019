import React, { Component } from 'react';
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, todo: "Buy groceries"},
      { id: 2, todo: "Walk the dog"}
    ]
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
       todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render() {
    console.log("state:", this.state.todos);
    return (
      <main className="App">
      <header className="bg-dark p-1">
          <h1 className="text-center text-white">My Todos App</h1>
      </header>
      <section className="d-flex justify-content-center row mt-2">
        <section className="col-10  col-md-8 col-lg-6">

          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <AddTodo addTodo={this.addTodo}/>

        </section>
      </section>
      </main>
    );
  }
}

export default App;
