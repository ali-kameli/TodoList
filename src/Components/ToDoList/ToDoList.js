import React from "react";
import Todo from "../Todo/Todo";
import styles from "./ToDoList.module.css";

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className={styles.todo_container}>
      <ul className={styles.todo_list}>
        {filteredTodos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
