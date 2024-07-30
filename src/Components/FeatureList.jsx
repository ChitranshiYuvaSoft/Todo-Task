import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { featureIndexUpdate } from "../Redux/project/projectSlice";

const FeatureList = ({ item, index }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (index) => {
    dispatch(featureIndexUpdate(index));
    navigate("/project/feature/todo");
  };


 
  return (
    <li key={index} className="list-group-item rounded-0 w-100 m-0">
      {/* <Link to={"/project/feature/todo"}> */}
      <span onClick={() => handleClick(index)}>{item.title}</span>
      {/* </Link> */}
      <span>
        <button className="btn btn-warning">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </span>
    </li>
  );
};

export default FeatureList;
