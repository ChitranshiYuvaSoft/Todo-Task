import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FeaturePage = ({ project }) => {
  const { projectData } = useSelector((state) => state.project);
  const {projectIndex} = useSelector((state) => state.project)
  console.log(projectData[0].featureData[1], 33464575);
console.log(projectIndex,"from feature")
  const featureCollection = projectData[0].featureData;
  console.log(featureCollection);

  return (
    <>
      <div className="mainSec">
        <div className="midSec">
          <div className="form">
            <input
              type="text"
              placeholder="Enter Feature Name Here"
              className="w-75 rounded-0 form-control py-2 px-3"
            />
            <button className="w-25 rounded-0 form-control btn btn-success py-2 px-3">
              Save
            </button>
          </div>
          <div className="dataSec">
            <ul className="w-100 list-group">
              {featureCollection.map((item, index) => (
                <li key={index} className="list-group-item rounded-0 w-100 m-0">
                  <Link to={"/project/feature/todo"}>
                    <span>{item.title}</span>
                  </Link>
                  <span>
                    <button className="btn btn-warning">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </span>
                </li>
              ))}
              {/* <li className="list-group-item rounded-0 w-100 m-0">
                <Link to={"/project/feature/todo"}>
                  <span>Feature - 2 </span>
                </Link>
                <span>
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </span>
              </li>
              <li className="list-group-item rounded-0 w-100 m-0">
                <Link to={"/project/feature/todo"}>
                  <span>Feature - 3 </span>
                </Link>
                <span>
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </span>
              </li> */}
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

export default FeaturePage;
