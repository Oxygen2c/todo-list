import React, { Component } from "react";
import "./todo-add-item.css";

export default class TodoAddItem extends Component {
  state = {
    label: ""
  };
  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.label.length > 0) {
      this.props.onAdd(this.state.label);
      this.setState({
        label: ""
      });
    }
  };

  render() {
    const { label } = this.state;
    return (
      <form action="" className="todo-add-item d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What to do"
          value={label}
        />
        <button type="button" className="btn btn-outline-secondary">
          add item
        </button>
      </form>
    );
  }
}
