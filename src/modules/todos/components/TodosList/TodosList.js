import React from "react";
import "./TodosList.scss";

const TodosList = ({ todos }) => {
  return (
    <ul className="todos-list">
      {todos.map((todo, index) => {
        return <li key={index}>{todo}</li>;
      })}
    </ul>
  );
};

export default TodosList;
