import React, { Component } from "react";
import "./todo-search.css";

export default ({ onSearchChange }) => {
  return (
    <div className="todo-search">
      <input
        className="todo-search__input"
        type="text"
        placeholder="search"
        onChange={onSearchChange}
      />
    </div>
  );
};
