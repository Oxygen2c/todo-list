import React, { Component } from "react";
import "./todo-add-item.css";

export default class TodoAddItem extends Component {
  render() {
    const { onAdd } = this.props;
    return (
      <button className="btn todo-add-item" onClick={onAdd}>
        add item
      </button>
    );
  }
}
