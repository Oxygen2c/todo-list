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
      this.createItem("drink tea", true, false),
      this.createItem("drink juce", false, false),
      this.createItem("p", true, false)
    ],
    str: "",
    filter: "Done"
  };
  createItem(label, isDone, isImportant) {
    return {
      label,
      important: isImportant,
      done: isDone,
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
      return {
        todoDate: [...todoDate, this.createItem(text)]
      };
    });
  };

  toggleProperty = (arr, id, propName) => {
    return [...arr].map(item => {
      if (item.id === id) item[propName] = !item[propName];
      return item;
    });
  };

  onToggleDone = id => {
    this.setState(({ todoDate }) => {
      return {
        todoDate: this.toggleProperty(todoDate, id, "done")
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todoDate }) => {
      return {
        todoDate: this.toggleProperty(todoDate, id, "important")
      };
    });
  };

  // onToggleImportant = idClick => {
  //   this.setState({
  //     todoDate: [...this.state.todoDate].filter((item, index) => {
  //       if(item.id === idClick) item.important = !item.important;
  //       return true
  //     })
  //   })

  // onToggleImportant = id => {
  //   this.setState(({ todoDate }) => {
  //     const indx = todoDate.findIndex(el => {
  //       return el.id === id;
  //     });
  //     const oldItem = todoDate[indx];
  //     const newItem = { ...oldItem, important: !oldItem.important };
  //     const newArray = [
  //       ...todoDate.slice(0, indx),
  //       newItem,
  //       ...todoDate.slice(indx + 1)
  //     ];
  //     return {
  //       todoDate: newArray
  //     };
  //   });
  // };

  onSearchChange = str => {
    str = str.target.value;
    this.setState({ str });
  };

  onFilterChange = filter => {
    this.setState({
      filter
    });
  };

  filteredFunc = (todoDate, str) => {
    if (!str.length) return [...todoDate];
    return [...todoDate].filter(item => {
      return item.label.indexOf(str) > -1;
    });
  };

  filter = (itemsArr, filter) => {
    switch (filter) {
      case "All":
        return itemsArr;
      case "Active":
        return itemsArr.filter(item => {
          return !item.done;
        });
      case "Done":
        return itemsArr.filter(item => {
          return item.done;
        });
      default:
        return itemsArr;
    }
  };

  render() {
    const { todoDate, str, filter } = this.state;
    const done = [...todoDate].filter(el => el.done).length;
    const todo = [...todoDate].length - done;
    const searchableArr = this.filter(this.filteredFunc(todoDate, str), filter);

    return (
      <div className="todo-wrapper">
        <TodoTitle />
        <TodoInfo todo={todo} done={done} />
        <TodoSearch todos={todoDate} onSearchChange={this.onSearchChange} />
        <TodoListFilter filter={filter} onFilterChange={this.onFilterChange} />
        <TodoList
          onDeleted={this.deleteItem}
          todos={searchableArr}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <TodoAddItem onAdd={this.addItem} />
      </div>
    );
  }
}
ReactDom.render(<App />, document.querySelector("#root"));
