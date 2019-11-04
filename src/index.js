import React, { Component } from "react";
import ReactDom from "react-dom";

import TodoList from "./components/todo-list";
import TodoSearch from "./components/todo-search";
import TodoTitle from "./components/todo-title/todo-title";
import TodoListFilter from "./components/todo-list-filter";
import TodoInfo from "./components/todo-info";
import TodoAddItem from "./components/todo-add-item";

import "./index.css";

export default class App extends Component {
  state = {
    todoDate: [
      { label: "drink tea", important: true, id: 1 },
      { label: "drink juce", important: false, id: 2 },
      { label: "make tea", important: false, id: 3 },
      { label: "m tea", important: false, id: 4 }
    ]
  };

  deleteItem = id => {
    this.setState(({ todoDate }) => {
      const indx = todoDate.findIndex(el => {
        return el.id === id;
      });

      const newArray = [
        ...todoDate.slice(0, indx),
        ...todoDate.slice(indx + 1)
      ];
      return {
        todoDate: newArray
      };
    });
  };

  addItem = () => {
    console.log("dsds");
  };

  render() {
    const { todoDate } = this.state;
    return (
      <div className="todo-wrapper">
        <TodoTitle />
        <TodoInfo />
        <TodoSearch />
        <TodoListFilter />
        <TodoList onDeleted={this.deleteItem} todos={todoDate} />
        <TodoAddItem onAdd={this.addItem} />
      </div>
    );
  }
}
ReactDom.render(<App />, document.querySelector("#root"));
