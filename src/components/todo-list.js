import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({ todos }) => {
  const elems = todos.map((item, i) => {
    console.log(item);
    return (
      <li>
        <TodoListItem key={i} {...item} />
      </li>
    );
  });

  return <ul>{elems}</ul>;
};
export default TodoList;
