import React from "react";
import './todo-list-filter.css'

const TodoListFilter = () => {
  return (
      <div className="todo-list-filter btn-group">
          <button className="btn btn-info">All</button>
          <button className="btn btn-">Active</button>
          <button className="btn btn-">Complete</button>
      </div>
  )
};

export default TodoListFilter;
