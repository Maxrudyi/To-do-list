import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

const Todo = ({ text, todo, todos, setTodos, setEditTodos }) => {

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const complateHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const editHandler = () => {
    const findTodo = todos.find((item) => item.id === todo.id);
    setEditTodos(findTodo);
  };

  return (
    <li className={todo.completed ? "complated" : ""}>
      <p>{text}</p>
      <div className="notes__buttons">
        <div className="notes__done">
          <Checkbox
            onClick={complateHandler}
            color="default"
            size="small"
          />
        </div>
        <div className="notes__delete" onClick={deleteHandler}>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
        <div className="notes__edit" onClick={editHandler}>
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
        </div>
      </div>
    </li>
  );
};

export default Todo;
