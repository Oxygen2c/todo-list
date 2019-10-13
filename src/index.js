import React from "react";
import ReactDom from "react-dom";

import TodoList from "./components/todo-list";
import TodoSearch from "./components/todo-search";
import TodoTitle from "./components/todo-title";

import "./index.css";

const App = () => {
  const todoDate = [
    { label: "drink tea", important: true },
    { label: "drink juce", important: false },
    { label: "make tea", important: false }
  ];
  return (
    <div className="">
      <TodoTitle />
      <TodoSearch />
      <TodoList todos={todoDate} />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
