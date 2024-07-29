import React from "react";

const TodoPage = () => {
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
              <li className="list-group-item rounded-0 w-100 m-0">
                <span>Todo - 1 </span>
                <span>
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </span>
              </li>
              <li className="list-group-item rounded-0 w-100 m-0">
                <span>Todo - 2 </span>
                <span>
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </span>
              </li>
              <li className="list-group-item rounded-0 w-100 m-0">
                <span>Todo - 3 </span>
                <span>
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </span>
              </li>
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
