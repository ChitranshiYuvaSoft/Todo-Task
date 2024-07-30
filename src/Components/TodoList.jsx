import React from "react";

const TodoList = ({ todo, index }) => {
  // console.log(todo);

  return (
    <li key={index} className="list-group-item rounded-0 w-100 m-0">
      <span>{todo.title}</span>
      <span>
        <button className="btn btn-warning">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </span>
    </li>
  );
};

export default TodoList;
