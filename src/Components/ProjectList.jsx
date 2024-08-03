import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  featureRemoveByProject,
  projectEdit,
  projectRemove,
  todoRemoveByProject,
} from "../Redux/project/projectSlice";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { HiClipboardCheck } from "react-icons/hi";

const ProjectList = ({ index, project }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/project/${project._id}/feature`);
  };
  const handleDelete = (_id) => {
    dispatch(todoRemoveByProject(_id));
    dispatch(featureRemoveByProject(_id));
    dispatch(projectRemove(_id));
  };
  const handleEdit = (project) => {
    dispatch(projectEdit(project));
  };
  return (
    <li className="list-group-item rounded-0 w-100 m-0">
      <span className="" onClick={() => handleClick(index)}>
        {project?.title}
      </span>
      <span>
        <button className="btn btn-warning m-2 " onClick={() => handleEdit(project)}>
        <FaEdit className="fs-2 " />
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => handleDelete(project._id)}>
           <MdDeleteForever className="fs-2"/>
        </button>
        <button className="btn btn-success m-2">
        <HiClipboardCheck className="fs-2"/>
        </button>
      </span>
    </li>
  );
};

export default ProjectList;
