import React, { Component } from "react";
import "./todo-search.css";

// export default class Search extends Component {
//   render() {
//     return (
//       <div className="todo-search">
//         <input
//           className="todo-search__input"
//           type="text"
//           placeholder="search"
//           onChange={this.props.onSearch}
//         />
//       </div>
//     );
//   }
// }

export default (props) => {
  return(
    <div className="todo-search">
      <input
        className="todo-search__input"
        type="text"
        placeholder="search"
        onChange={props.onSearch}
      />
    </div>
  )
}
