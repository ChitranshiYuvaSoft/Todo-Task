import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  featureCreate,
  featureIndexUpdate,
  featureUpdate,
} from "../Redux/project/projectSlice";
import DataPage from "./DataPage";
import FeatureList from "../Components/FeatureList";

const FeaturePage = () => {
  const { featureData, edit } = useSelector((state) => state.project);
//  console.log(edit)
  const dispatch = useDispatch();
  const { _id } = useParams();

console.log(_id);
  const dataFeature = featureData.filter((item) => item?.project_id == _id);

  const [title, setTitle] = useState("");
  const [editTitle, setEditTitle] = useState("");
  // console.log(editTitle, "edit");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      featureCreate({
        project_id: _id,
        _id: crypto.randomUUID(),
        title,
      })
    );
    setTitle("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      featureUpdate({
        _id: edit.project._id,
        title: editTitle,
        project_id : edit.project.project_id
      })
    );
    setEditTitle("");
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
              placeholder="Enter Feature Name Here"
              className="w-75 rounded-0 form-control py-2 px-3"
              value={editTitle || ""}
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
            <ul className="w-100 list-group">
              {dataFeature.map((feature, index) => (
                <FeatureList key={index} index={index} feature={feature} project_id={_id} />
              ))}

              {
                // featureData.filter(feature => feature.project_id == _id ?  : console.log("no Feature"))
              }
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

export default FeaturePage;
