import React, { Component } from "react";
import "./todo-add-item.css";

export default class TodoAddItem extends Component {
  state = {
    inputTask:''
  }
  onLabelChange=(e)=> {
    this.setState({
        inputTask:e.target.value
    })
  }
  onSubmit=(e)=> {
    e.preventDefault();
    this.props.onAdd(this.state.inputTask)
    this.setState({
      inputTask:''
    })
  }
  render() {
    const { onAdd } = this.props;
    const {inputTask} = this.state;
    return (
      <form action="" className="todo-add-item d-flex" onSubmit={this.onSubmit}>
        <input type="text" className="form-control" onChange={this.onLabelChange} placeholder="What to do" value={this.state.inputTask}/>
        <button
          type="button"
          className="btn btn-outline-secondary">add item
        </button>
      </form>
    );
  }
}
