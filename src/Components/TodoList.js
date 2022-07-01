import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos, setEditTodos, status }) => {
  const [addButton, setAddButton] = useState("clean__btn hidden");

  useEffect(() => {
    if (todos.length > 2) {
      setAddButton("clean__btn");
    } else {
      setAddButton("clean__btn hidden");
    }
  }, [todos]);

  return (
    <>
      <div className="notes">
        <ul className="notes__list">
          {filteredTodos.map((todo) => (
            <Todo
              text={todo.text}
              key={todo.id}
              setTodos={setTodos}
              todos={todos}
              todo={todo}
              setEditTodos={setEditTodos}
            />
          ))}
        </ul>
      </div>

      <div className="button__clean">
        <button onClick={() => setTodos([])} className={addButton}>
          Clean All
        </button>
      </div>
    </>
  );
};

export default TodoList;
