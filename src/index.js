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
      this.createItem("p")
    ],
    str: ''
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
      let hist = todoDate;
      console.log(hist);

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
  //   console.log(Array.isArray([...this.state.todoDate]))
  //   console.log(this.state.todoDate == [...this.state.todoDate])
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
  onSearch = (str) => {
    console.log(str)
    str = str.target.value
    this.setState({str})
  };
  filteredFunc = (state, str) => {
    if(!str.length) return [...state];
    return [...state].filter((item) => {
      return item.label.indexOf(str) > -1
    })
  };

  render() {
    const { todoDate, str } = this.state;
    const done = [...todoDate].filter(el => el.done).length;
    const todo = [...todoDate].length - done;
    const searchableArr = this.filteredFunc(todoDate, str)

    
    // let obj = {
    //   undone: 0,
    //   done: 0
    // };

    // (() => {
    //   [...this.state.todoDate].forEach(item => {
    //     (item.done) ? obj.done++ : obj.undone++
    //   })
    // })()

    return (
      <div className="todo-wrapper">
        <TodoTitle />
        <TodoInfo todo={todo} done={done} />
        <TodoSearch todos={todoDate} onSearch={this.onSearch} />
        <TodoListFilter />
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
