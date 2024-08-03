import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoEdit, todoRemove } from "../Redux/project/projectSlice";
import { HiClipboardCheck } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodoList = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false)
  const handleDelete = (_id) => {
    dispatch(todoRemove(_id));
  };
  const handleEdit = (todo) => {
    dispatch(todoEdit(todo));
  };
  const handleCheck = () => {
    setIsChecked(true)
  }
  return (
    <li key={index} className="list-group-item rounded-0 w-100 m-0">
      <span className={`${isChecked?"w-50 text-decoration-line-through":"w-50"}`}>{todo.title}</span>
      <span className="w-50 d-flex align-items-center justify-content-end">
        <button className={`${!isChecked?"btn btn-warning m-2":"btn btn-warning m-2 disabled"}`} onClick={() => handleEdit(todo)}>
        <FaEdit className="fs-2" />
        </button>
        <button
          className={`${!isChecked?"btn btn-danger m-2":"btn btn-danger m-2 disabled"}`}
          onClick={() => handleDelete(todo._id)}
        >
          <MdDeleteForever className="fs-2"/>
        </button>
        <button className="btn btn-success m-2">
        <HiClipboardCheck className="fs-2" onClick={handleCheck}/>
        </button>
      </span>
    </li>
  );
};

export default TodoList;
