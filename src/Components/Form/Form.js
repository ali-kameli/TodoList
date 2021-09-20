import React from "react";
import styles from "./Form.module.css";

const Form = ({
  setInputText,
  setTodos,
  todos,
  inputText,
  setStatus,
  setError,
}) => {
  const inputTxtHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText) {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Date.now() },
      ]);
      setInputText("");
      setError("");
    } else {
      setError("please enter something...");
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={inputTxtHandler}
          className={styles.todo_input}
          value={inputText}
        />
        <button onClick={submitTodoHandler} className={styles.todo_button}>
          <i className="fa fa-plus-square"></i>
        </button>
        <div className={styles.select}>
          <select
            name="todos"
            className={styles.filter_todo}
            onChange={statusHandler}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
