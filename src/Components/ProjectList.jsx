import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { featureRemoveByProject, indexUpdate, projectEdit, projectRemove,  todoRemoveByProject } from "../Redux/project/projectSlice";

const ProjectList = ({ index, project }) => {

const dispatch = useDispatch()
const navigate = useNavigate()

// console.log(projectIndex)

    const handleClick = (index) => {
        dispatch(indexUpdate(index))
        // navigate(`/feature/${project._id}`)
        navigate(`/project/${project._id}/feature`)
    }

    const handleDelete = (_id) => {
      console.log(_id, "from project")
      console.log("Delete Project Successfully!!");
      dispatch(projectRemove(_id));
      dispatch(featureRemoveByProject(_id))
      dispatch(todoRemoveByProject(_id))
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
