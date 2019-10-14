import React from "react";
import "./todo-list-item.css";

const TodoListItem = ({ label, important = false }) => {
  return (
    <span className="todo-list-item">
      <span className="todo-list-item-title">{label}</span>
      <button type="button">+</button>
      <button type="button">-</button>
    </span>
  );
};

export default TodoListItem;
