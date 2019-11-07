import React from "react";
import "./todo-info.css";

const TodoInfo = (props) => {
  const {todo, done} = props;
  return (
    <div className="todo-info">
      to do: <span>{todo}</span>, done: <span>{done}</span>
    </div>
  );
};
export default TodoInfo;
