import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import FeaturePage from "../Screens/FeaturePage";
import { useDispatch, useSelector } from "react-redux";
import { indexUpdate, projectEdit, projectRemove } from "../Redux/project/projectSlice";

const ProjectList = ({ index, project }) => {

const dispatch = useDispatch()
const navigate = useNavigate()

// console.log(projectIndex)

    const handleClick = (index) => {
        dispatch(indexUpdate(index))
        navigate("/project/feature")
    }

    const handleDelete = (_id) => {
      console.log("Delete Project Successfully!!");
      dispatch(projectRemove(_id));
      console.log(project)
    }

    const handleEdit = (project) => {
      console.log("Edit Project Successfully!!");
      dispatch(projectEdit(project))
    }

    
  return (
    <li className="list-group-item rounded-0 w-100 m-0" >
      {/* <Link to={"/project/feature"} project={project} > */}
        {/* <span className="fw-bold" >{index + 1}</span> */}
        <span className="" onClick={() => handleClick(index)}>{project?.title}</span>
      {/* </Link> */}
      <span>
        <button className="btn btn-warning" onClick={() => handleEdit(project)}>Edit</button>
        <button className="btn btn-danger" onClick={() => handleDelete(project._id)}>Delete</button>
      </span>
    </li>
  );
};

export default ProjectList;
