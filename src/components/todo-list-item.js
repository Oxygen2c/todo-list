import React from "react";

const TodoListItem = ({ label, important = false }) => {
  const style = {
    class: important ? "important" : null
  };
  return <span className={style.class}>{label}</span>;
};

export default TodoListItem;
