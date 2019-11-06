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
  maxId = 100;
  state = {
    todoDate: [
      this.createItem("drink tea"),
      this.createItem("drink juce"),
      this.createItem("drink tea")
    ]
  };

  createItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }

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

  addItem = text => {
    this.setState(({ todoDate }) => {
      const newArray = [...todoDate, this.createItem(text)];
      return {
        todoDate: newArray
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoDate }) => {
      const indx = todoDate.findIndex(el => {
        return el.id === id;
      });
      const newArray = [...todoDate];
      newArray[indx].done = !newArray[indx].done;
      return {
        todoDate: newArray
      };
    });
  };
  // onToggleImportant = id => {
  //   this.setState(({ todoDate }) => {
  //     const indx = todoDate.findIndex(el => {
  //       return el.id === id;
  //     });
  //     const newArray = [...todoDate];
  //     newArray[indx].important = !newArray[indx].important;
  //     return {
  //       todoDate: newArray
  //     };
  //   });
  // };

  onToggleImportant = id => {
    this.setState(({ todoDate }) => {
      const indx = todoDate.findIndex(el => {
        return el.id === id;
      });
      const oldItem = todoDate[indx];
      const newItem = { ...oldItem, important: !oldItem.important };
      const newArray = [
        ...todoDate.slice(0, indx),
        newItem,
        ...todoDate.slice(indx + 1)
      ];
      return {
        todoDate: newArray
      };
    });
  };

  render() {
    const { todoDate } = this.state;
    return (
      <div className="todo-wrapper">
        <TodoTitle />
        <TodoInfo />
        <TodoSearch />
        <TodoListFilter />
        <TodoList
          onDeleted={this.deleteItem}
          todos={todoDate}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <TodoAddItem onAdd={this.addItem} />
      </div>
    );
  }
}
ReactDom.render(<App />, document.querySelector("#root"));
