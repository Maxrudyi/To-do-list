import React, { useEffect } from "react";

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
  status,
  editTodos,
  setEditTodos,
}) => {
  const updateTodo = (text, competed, id) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { text, competed, id } : todo
    );
    setTodos(newTodo);
    setEditTodos("");
  };

  useEffect(() => {
    if (editTodos) {
      setInputText(editTodos.text);
    } else {
      setInputText("");
    }
  }, [setInputText, editTodos]);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();

    if (!editTodos) {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText("");
    } else {
      updateTodo(inputText, editTodos.competed, editTodos.id);
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <form className="form">
        <input
          className="form__text"
          type="text"
          placeholder="New Task"
          onChange={inputTextHandler}
          value={inputText}
        />
        <input
          onClick={submitTodoHandler}
          className="form__btn"
          type="submit"
          value={editTodos ? "OK" : "Add"}
        />
      </form>
      <div className="button__state">
        <button
          className={status === "all" ? "state__btn active" : "state__btn"}
          onClick={statusHandler}
          value="all"
        >
          All
        </button>
        <button
          className={
            status === "completed" ? "state__btn active" : "state__btn"
          }
          onClick={statusHandler}
          value="completed"
        >
          Completed
        </button>
        <button
          className={
            status === "uncomplated" ? "state__btn active" : "state__btn"
          }
          onClick={statusHandler}
          value="uncomplated"
        >
          Uncomplated
        </button>
      </div>
    </>
  );
};

export default Form;
