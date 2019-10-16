import React, { Component } from "react";
import "./todo-list-filter.css";

export default class TodoListFilter extends Component {
  render() {
    return (
      <div className="todo-list-filter btn-group">
        <button
          className="btn btn-info">
          All
        </button>
        <button className="btn btn-">Active</button>
        <button className="btn btn-">Complete</button>
      </div>
    );
  }
}
