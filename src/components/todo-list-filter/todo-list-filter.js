import React, { Component } from "react";
import "./todo-list-filter.css";

export default class TodoListFilter extends Component {
  buttons = [
    { name: "All", label: "All" },
    { name: "Active", label: "Active" },
    { name: "Done", label: "Done" }
  ];

  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? "btn btn-info" : "btn btn-outline-secondary";
      return (
        <button
          className={clazz}
          key={name}
          onClick={() => {
            onFilterChange(name);
          }}
        >
          {label}
        </button>
      );
    });

    return <div className="todo-list-filter btn-group">{buttons}</div>;
  }
}
