import React from "react";
import "./todo-list-item.css";

const TodoListItem = props => {
  const {
    label,
    onDeleted,
    done,
    important,
    onToggleDone,
    onToggleImportant
  } = props;

  let classNames = "todo-list-item";
  if (done) {
    classNames += " done";
  }
  if (important) {
    classNames += " important";
  }
  return (
    <span className={classNames}>
      <span className="todo-list-item-title" onClick={onToggleDone}>
        {label}
      </span>
      <button type="button" onClick={onDeleted}>
        -
      </button>
      <button type="button" onClick={onToggleImportant}>
        !
      </button>
    </span>
  );
};
export default TodoListItem;
