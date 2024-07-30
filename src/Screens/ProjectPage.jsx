import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProjectList from "../Components/ProjectList";
import FeaturePage from "./FeaturePage";
import DataPage from "./DataPage";
import { projectCreate, projectUpdate } from "../Redux/project/projectSlice";

const ProjectPage = () => {
  const { projectData, edit } = useSelector((state) => state.project);
  console.log(projectData);

  if (!projectData || projectData.length === 0) {
    return <DataPage />;
  }

  const dispatch = useDispatch();

  // Form Setup
  const [title, setTitle] = useState("");
  const [editTitle, setEditTitle] = useState("");

//  title = editTitle;

  // console.log(title)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("project added");
    dispatch(
      projectCreate({
        _id: crypto.randomUUID(),
        title,
      })
    );
    setTitle("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      projectUpdate({
        _id: edit.project._id,
        title : editTitle,
      })
    );
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
              placeholder="Enter Project Name Here"
              className="w-75 rounded-0 form-control py-2 px-3"
              value={editTitle}
              name="editTitle"
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
            <ul className="w-100 list-group" >
              {projectData.map((project, index) => (
                <ProjectList key={index} index={index} project={project} />
              ))}
            </ul>
          </div>
          <div className="footer">
            <div className="w-75">
              <input
                type="text"
                className="rounded-0 form-control py-2 px-3"
                style={{ fontSize: "1.3rem" }}
                placeholder="Add New Project"
                value={title}
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

export default ProjectPage;
