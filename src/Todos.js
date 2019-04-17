import React from "react";

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length > 0 ?
    todos.map(todo => {
    return <li className="list-group-item" key={todo.id}>
                <span className="d-flex justify-content-between align-items-center">{todo.todo} <button className="btn btn-sm btn-danger" onClick={ () => deleteTodo(todo.id)}>delete</button></span>
            </li>
    })
    :
    <h4 className="text-center text-secondary"> You have no todo's</h4>
    return (
        <main className="todos-container">
                    <ul className="list-group">
                        {todoList}
                    </ul>
        </main>
    )
}

export default Todos;