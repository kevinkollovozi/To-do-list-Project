import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Box } from "@material-ui/core";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <Typography style={{ padding: 16, color: "#FFCB05" }} variant="h1">
        <Box fontWeight="fontWeightBold" display="inline">
          UNIVERSITY OF MICHIGAN
        </Box>
      </Typography>
      <Typography style={{ padding: 16, color: "#FFCB05" }} variant="h1">
        <Box fontWeight="fontWeightMedium" display="inline">
          TODO LIST
        </Box>
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
