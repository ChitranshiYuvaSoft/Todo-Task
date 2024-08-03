import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectList from "../Components/ProjectList";
import { projectCreate, projectUpdate } from "../Redux/project/projectSlice";

const ProjectPage = () => {
  const { projectData, edit } = useSelector((state) => state.project);
  const dispatch = useDispatch();
console.log(projectData,"projects")
  // Project Create and Update
  const [title, setTitle] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title){
      alert("Title is mandatory!!");
    }else{
      dispatch(
        projectCreate({
          _id: crypto.randomUUID(),
          title,
        })
      );
      setTitle(""); 
    }
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    if(!editTitle){
      alert("Title is mandatory!!");
    }else{
      dispatch(
        projectUpdate({
          _id: edit.project._id,
          title : editTitle,
        })
      );
      setEditTitle("")
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
              placeholder="Enter Project Name Here"
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

export default ProjectPage;
