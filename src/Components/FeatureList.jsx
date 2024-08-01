import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  featureEdit,
  featureIndexUpdate,
  featureRemove,
  todoRemoveByFeature,
} from "../Redux/project/projectSlice";

const FeatureList = ({ feature, index ,project_id}) => {
  // console.log(project_id, 90350)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(feature, "feateter6456758679")

  const { _id } = useParams();


  const handleClick = (index) => {
    dispatch(featureIndexUpdate(index));
    // navigate(`/todo/${feature._id}`);
    navigate(`/project/${project_id}/feature/${feature._id}/todo`);
  };

  const handleDelete = (_id) => {
    dispatch(featureRemove(_id));
    dispatch(todoRemoveByFeature(_id))
    // console.log("DeleteFeature");
  };

  const handleEdit = (feature) => {
    console.log("Edit Project Successfully!!");
    dispatch(featureEdit(feature));
  };

  return (
    <li key={index} className="list-group-item rounded-0 w-100 m-0">
      {/* <Link to={"/project/feature/todo"}> */}
      <span onClick={() => handleClick(index)}>{feature.title}</span>
      {/* </Link> */}
      <span>
        <button className="btn btn-warning" onClick={() => handleEdit(feature)}>
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(feature._id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default FeatureList;
