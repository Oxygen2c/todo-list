import React from "react";
import ReactDom from "react-dom";

import TodoList from "./components/todo-list";
import TodoSearch from "./components/todo-search";
import TodoTitle from "./components/todo-title";
import TodoListFilter from "./components/todo-list-filter";
import TodoInfo from "./components/todo-info";

import "./index.css";

const App = () => {
  const todoDate = [
    { label: "drink tea", important: true, id: 12 },
    { label: "drink juce", important: false, id: 21 },
    { label: "make tea", important: false, id: 2 }
  ];
  return (
    <div className="todo-wrapper">
      <TodoTitle />
      <TodoInfo />
      <TodoSearch />
      <TodoListFilter />
      <TodoList todos={todoDate} />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
