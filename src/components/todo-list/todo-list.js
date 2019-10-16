import React, { Component } from "react";
import TodoListItem from "../todo-list-item";
import "./todo-list.css";

export default class TodoList extends Component {
  render() {
    const { todos, onDeleted } = this.props;
    const elems = todos.map(item => {
      const { id, ...rest } = item;

      return (
        <li key={id} className="list-group-item">
          <TodoListItem
            onDeleted={() => {
              onDeleted(id);
            }}
            {...rest}
          />
        </li>
      );
    });

    return <ul className="todo-list list-group">{elems}</ul>;
  }
}
