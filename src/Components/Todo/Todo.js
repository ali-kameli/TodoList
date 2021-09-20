import React from "react";
import styles from "./Todo.module.css";

const Todo = ({ text, todo, setTodos, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completeHandler = () => {
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

  return (
    <div className={styles.todo}>
      <li
        className={`${styles.item} ${todo.completed ? styles.completed : ""}  `}
      >
        {text}
      </li>
      <button onClick={completeHandler} className={styles.complete_btn}>
        <i className="fa fa-check"></i>
      </button>
      <button onClick={deleteHandler} className={styles.trash_btn}>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
