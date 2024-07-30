import React from "react";
import { useSelector } from "react-redux";
import TodoList from "../Components/TodoList";
import DataPage from "./DataPage";

const TodoPage = () => {
  const { projectData, featureIndex, projectIndex } = useSelector(
    (state) => state.project
  );
  // console.log(featureIndex);

  const todoCollection =
  projectData[projectIndex].featureData[featureIndex].todoData;
  // console.log(todoCollection, "todo");
  // console.log(projectData[projectIndex].featureData[featureIndex].todoData);
// console.log(todoCollection.length)

if(!todoCollection || todoCollection.length === 0){
  return (
    <DataPage/>
  )
}
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
              {todoCollection.map((todo, index) => (
               <TodoList key={index} todo={todo} index={index}/>
              ))}
            </ul>
          </div>
          <div className="footer">
            <div className="w-75">
              <h2>Add DATA HERE</h2>
            </div>
            <div className="w-25">
              <div className="box">
                <h2 className="fw-bold text-white">+</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoPage;
