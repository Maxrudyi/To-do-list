import { useEffect, useState } from "react";
import React from "react";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import "./css/App.scss";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [editTodos, setEditTodos] = useState(null);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncomplated":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    filterHandler();
  }, [todos, status]);

  return (
    <div className="container">
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        setEditTodos={setEditTodos}
        editTodos={editTodos}
        status={status}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        inputText={inputText}
        filteredTodos={filteredTodos}
        setEditTodos={setEditTodos}
        status={status}
      />
    </div>
  );
}

export default App;
