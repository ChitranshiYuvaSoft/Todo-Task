import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../Components/TodoList";
import DataPage from "./DataPage";
import { todoCreate } from "../Redux/project/projectSlice";
import { useParams } from "react-router-dom";

const TodoPage = () => {
 
  const dispatch = useDispatch()
  const {todoData,  edit} = useSelector(state => state.project)
console.log(todoData, "343645645700000000000")

// console.log(dataGet, "tulsi")
  const {_id, _Feaid} = useParams();
console.log(_id, _Feaid, "3345346")
  // const dataTodo = todoData.filter((item) => item?.feature_id == _Feaid);


  const dataTodo =  todoData.filter((item) => {
    if(item.feature_id == _Feaid && item.project_id == _id){
      return item
    }
    else{
      console.log("No Data Yet!!");
    }
  })

  const [title,setTitle] = useState();
  const [editTitle, setEditTitle] = useState("");

  console.log(dataTodo, 9999999999)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(todoCreate({
      _id : crypto.randomUUID(),
      title: title,
      feature_id : _Feaid,
      project_id : _id
    }
    ))
  }

  // const handleUpdate = (e) => {
  //   e.preventDefault();
  //   dispatch(
  //   featureUpdate({
  //       _id: edit.project._id,
  //       title : editTitle,
  //     })
  //   );
  //   setEditTitle("")
  // };


  
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
            />
            <button className="w-25 rounded-0 form-control btn btn-success py-2 px-3">
              Save
            </button>
          </div>
          <div className="dataSec">
            <ul className="w-100 list-group">
              {dataTodo.map((todo, index) => (
               <TodoList key={index} todo={todo} index={index}/>
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
