import React from "react";
import TodoListItem from "../todo-list-item";
import "./todo-list.css";

const TodoList = ({ todos }) => {
  const elems = todos.map(item => {
    const { id, ...rest } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...rest} />
      </li>
    );
  });

  return <ul className="todo-list list-group">{elems}</ul>;
};
export default TodoList;
