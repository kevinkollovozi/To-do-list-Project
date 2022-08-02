import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import uuid from "uuid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  customHoverFocus: {
    "&:hover, &.Mui-focusVisible": { backgroundColor: "#FFCB05" },
  },
}));

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4() });
      setTodo({ ...todo, task: "" });
    }
  }
  const classes = useStyles();
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
        variant="filled"
        InputLabelProps={{
          style: { color: "#FFCB05" },
        }}
        inputProps={{ style: { color: "#FFCB05" } }}
      />
      <Button
        className={classes.customHoverFocus}
        variant="contained"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}

export default TodoForm;
