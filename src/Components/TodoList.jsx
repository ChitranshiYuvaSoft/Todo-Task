import React from "react";
import { useDispatch } from "react-redux";
import { todoEdit, todoRemove } from "../Redux/project/projectSlice";

const TodoList = ({ todo, index }) => {
  // console.log(todo);
const dispatch = useDispatch()
  // const handleDelete = (index) => {
  //   dispatch(todoRemove(index))
  // }

  const handleDelete = (_id) => {
    dispatch(todoRemove(_id))
  }

  const handleEdit = (todo) => {
    dispatch(todoEdit(todo))
  }

  return (
    <li key={index} className="list-group-item rounded-0 w-100 m-0">
      <span>{todo.title}</span>
      <span>
        <button className="btn btn-warning" onClick={() => handleEdit(todo)}>Edit</button>
        <button className="btn btn-danger" onClick={()=>handleDelete(todo._id)}>Delete</button>
      </span>
    </li>
  );
};

export default TodoList;
