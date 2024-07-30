import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
import Data from "../../Data";
import projectData from "../../Data";

const initialState = {
  projectIndex: 0,
  featureIndex: 0,
  projectData: Data,
  isSuccess: false,
  isError: false,
  isLoading: false,
  edit: { project: {}, isEdit: false },
};

const projectSlice = createSlice({
  name: "todoData",
  initialState,
  reducers: {
    indexUpdate: (state, action) => {
      // console.log(action.payload, "from slice");
      const indexData = action.payload;
      return {
        ...state,
        projectIndex: indexData,
      };
    },

    featureIndexUpdate: (state, action) => {
      // console.log(action.payload, 7365598369752)
      const featureIndexData = action.payload;
      return {
        ...state,
        featureIndex: featureIndexData,
      };
    },

    // ********************************** PROJECT CRUD ********************************

    projectRemove: (state, action) => {
      return {
        ...state,
        projectData: state.projectData.filter(
          (item) => item._id !== action.payload
        ),
      };
    },

    projectCreate: (state, action) => {
      const newProject = action.payload;
      console.log(newProject);
      return {
        ...state,
        projectData: [newProject, ...state.projectData],
      };
    },

    projectEdit: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        edit: { project: action.payload, isEdit: true },
      };
    },

    projectUpdate: (state, action) => {
      return {
        ...state,
        projectData: state.projectData.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    },


  // ********************************** FEATURE CRUD ********************************


  featureRemove : (state, action) => {
    const {projectIndex, _id} = action.payload
    const data = current(state.projectData[projectIndex]?.featureData)
    console.log(data, "data")
    const newData = data.filter((item=> item._id !== _id)) 
    console.log(newData, "newData")
    return {
      ...state,
     
    }
  },

  featureCreate : (state, action) => {

  },},

  extraReducers: (builder) => {},
});

export const {
  projectUpdate,
  projectEdit,
  projectCreate,
  projectRemove,
  indexUpdate,
  featureIndexUpdate,

  featureRemove
} = projectSlice.actions;
export default projectSlice.reducer;
