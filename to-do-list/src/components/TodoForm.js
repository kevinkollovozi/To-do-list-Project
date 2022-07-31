import React, {useState, useId } from "react";

function TodoForm({ addTodo }) {
    const id = useId(); 

    const [todo, setTodo] = useState({
        id: id,
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const trimmedTodo = todo.task.trim(); // trim for any possible whitespace

        if (trimmedTodo.length !== 0) {
            addTodo({ ...todo });
            setTodo({ ...todo, task: ""});
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}></input>
            <button></button>
        </form>
    );
}


export default TodoForm;