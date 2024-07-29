import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProjectList from "../Components/ProjectList";
import FeaturePage from "./FeaturePage";

const ProjectPage = () => {
  const { projectData } = useSelector((state) => state.project);
  console.log(projectData);

  return (
    <>
      <div className="mainSec">
        <div className="midSec">
          <div className="form">
            <input
              type="text"
              placeholder="Enter Project Name Here"
              className="w-75 rounded-0 form-control py-2 px-3"
            />
            <button className="w-25 rounded-0 form-control btn btn-success py-2 px-3">
              Save
            </button>
          </div>
          <div className="dataSec">
            <ul className="w-100 list-group">
              {projectData.map((project, index) => (
                <ProjectList key={index} index={index} project={project} />
              ))}
            </ul>
          </div>
          <div className="footer">
            <div className="w-75">
              <h2>ADD DATA HERE</h2>
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

export default ProjectPage;
