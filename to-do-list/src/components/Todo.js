import React, {useState, useId } from "react";

function Todo({ todo }) {
    return (
        <div>
            <input type="checkbox"></input>
            <li>{todo.task}</li>
            <button>X</button>
        </div>
    );
}


export default Todo;