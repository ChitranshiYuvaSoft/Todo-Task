import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import FeaturePage from "../Screens/FeaturePage";
import { useDispatch, useSelector } from "react-redux";
import { indexUpdate } from "../Redux/project/projectSlice";

const ProjectList = ({ index, project }) => {
const {projectIndex} = useSelector(state=>state.project)
const dispatch = useDispatch()
const navigate = useNavigate()

// console.log(projectIndex)

    const handleClick = (index) => {
        dispatch(indexUpdate(index))
        navigate("/project/feature")
    }
console.log(projectIndex,"vhgn")
  return (
    <li className="list-group-item rounded-0 w-100 m-0" onClick={() => handleClick(index)}>
      {/* <Link to={"/project/feature"} project={project} > */}
        <span className="fw-bold" >{index + 1}</span>
        <span className="m-5">{project.title}</span>
      {/* </Link> */}
      <span>
        <button className="btn btn-warning">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </span>
    </li>
  );
};

export default ProjectList;
