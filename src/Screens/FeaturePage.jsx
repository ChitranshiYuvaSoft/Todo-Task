import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { featureIndexUpdate } from "../Redux/project/projectSlice";
import DataPage from "./DataPage";
import FeatureList from "../Components/FeatureList";

const FeaturePage = ({ project }) => {
  const { projectData, projectIndex } = useSelector((state) => state.project);
  // console.log(projectData[0].featureData[1], 33464575);
  // console.log(projectIndex, "from feature");
  const featureCollection = projectData[projectIndex]?.featureData;
  console.log(featureCollection, "83728937583758");

  if (!featureCollection || featureCollection[projectIndex].todoData?.length === 0) {
    return <DataPage />;
  }




  return (
    <>
      <div className="mainSec">
        <div className="midSec">
          <div className="form">
            <input
              type="text"
              placeholder="Enter Feature Name Here"
              className="w-75 rounded-0 form-control py-2 px-3"
            />
            <button className="w-25 rounded-0 form-control btn btn-success py-2 px-3">
              Save
            </button>
          </div>
          <div className="dataSec">
            <ul className="w-100 list-group">
              {featureCollection.map((item, index) => (
                <FeatureList key={index} index={index} item={item} />
              ))}
            </ul>
          </div>
          <div className="footer">
            <div className="w-75">
              <h2>Add DATA HERE</h2>
            </div>
            <div className="w-25">
              <div className="box">
                <h2 className="fw-bold text-white">+</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturePage;
