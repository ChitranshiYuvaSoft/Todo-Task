import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";
import {
  featureEdit,
  featureRemove,
  todoRemoveByFeature,
} from "../Redux/project/projectSlice";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { HiClipboardCheck } from "react-icons/hi";

const FeatureList = ({ feature, index, project_id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${project_id}/feature/${feature._id}/todo`);
  };

  const handleDelete = (_id) => {
    dispatch(featureRemove(_id));
    dispatch(todoRemoveByFeature(_id));
  };

  const handleEdit = (feature) => {
    dispatch(featureEdit(feature));
  };

  return (
    <li key={index} className="list-group-item rounded-0 w-100 m-0">
      <span onClick={() => handleClick()}>{feature.title}</span>
      <span>
        <button className="btn btn-warning m-2" onClick={() => handleEdit(feature)}>
        <FaEdit className="fs-2" />
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => handleDelete(feature._id)}
        >
           <MdDeleteForever className="fs-2"/>
        </button>
        <button className="btn btn-success m-2">
        <HiClipboardCheck className="fs-2"/>
        </button>
      </span>
    </li>
  );
};

export default FeatureList;
