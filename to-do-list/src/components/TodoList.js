import React, {useState, useId } from "react";
import Todo from "./Todo";

function TodoList({ todos }) {
    return (
        <ul>
            {todos.map(todo => (
                <Todo todo={todo}></Todo>
            ))}
        </ul>
    )
}

export default TodoList;