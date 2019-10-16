import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };

  markHandler = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };

  importantMarkHandler = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }
    return (
      <span className={classNames}>
        <span className="todo-list-item-title" onClick={this.markHandler}>
          {label}
        </span>
        <button type="button" onClick={onDeleted}>-</button>
        <button type="button" onClick={this.importantMarkHandler}>
          !
        </button>
      </span>
    );
  }
}
