import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../Components/TodoList";
import { todoCreate, todoUpdate } from "../Redux/project/projectSlice";
import { useParams } from "react-router-dom";

const TodoPage = () => {
  const dispatch = useDispatch();
  const { todoData, edit } = useSelector((state) => state.project);
  const { _id, _Feaid } = useParams();

  const dataTodo = todoData.filter((item) => {
    if (item.feature_id == _Feaid && item.project_id == _id) {
      return item;
    }
  });

  // Todo Create And Update
  const [title, setTitle] = useState();
  const [editTitle, setEditTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title){
      alert("Title is mandatory!!");
    }else{
      dispatch(
        todoCreate({
          _id: crypto.randomUUID(),
          title: title,
          feature_id: _Feaid,
          project_id: _id,
        })
      );
      setTitle("")
    }
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    if(!editTitle){
      alert("Title is mandatory!!");
    }else{
      dispatch(
        todoUpdate({
          _id: edit.project._id,
          title: editTitle,
          project_id: _id,
          feature_id: _Feaid,
        })
      );
      setEditTitle("");
    }
  };
  useEffect(() => {
    setEditTitle(edit.project.title);
  }, [edit]);

  return (
    <>
      <div className="mainSec">
        <div className="midSec">
          <div className="form">
            <input
              type="text"
              placeholder="Enter Todo Name Here"
              className="w-75 rounded-0 form-control py-2 px-3"
              value={editTitle || ""}
              name="editTitle"
              required
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <button
              className="w-25 rounded-0 form-control btn btn-success py-2 px-3"
              onClick={handleUpdate}
            >
              Save
            </button>
          </div>
          <div className="dataSec">
            <ul className="w-100 list-group">
              {dataTodo.map((todo, index) => (
                <TodoList key={index} todo={todo} index={index} />
              ))}
            </ul>
          </div>
          <div className="footer">
            <div className="w-75">
              <input
                type="text"
                className="rounded-0 form-control py-2 px-3"
                style={{ fontSize: "1.3rem" }}
                placeholder="Add New Todo"
                value={title || ""}
                name="title"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="w-25">
              <button className="box" type="submit" onClick={handleSubmit}>
                <h2 className="fw-bold text-white">+</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoPage;
