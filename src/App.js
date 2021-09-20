import React, { useState, useEffect } from "react";
import Form from "./Components/Form/Form";
import ToDoList from "./Components/ToDoList/ToDoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilterTodos] = useState([]);
  const [error, setError] = useState("");

  useEffect(()=>{
    getLocalTodos( )
  },[])
  useEffect(() => {
    filterHandler();
    saveLocalTodos()
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((item) => item.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((item) => item.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    
      localStorage.setItem("todos", JSON.stringify(todos));
    
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  };

  return (
    <div className="app">
      <header>
        <h2>Todo List</h2>
      </header>
      <Form
        setInputText={setInputText}
        todos={todos}
        inputText={inputText}
        setTodos={setTodos}
        setStatus={setStatus}
        setError={setError}
      />
      <p className="error">{error}</p>
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

export default App;
