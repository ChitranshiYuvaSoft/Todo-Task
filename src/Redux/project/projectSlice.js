import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
import Data from "../../Data";
import { featureData, projectData, todoData } from "../../DummyData";
// import projectData from "../../Data";

// const dataObject = JSON.parse(projectData);


let initialState = {
  // projectIndex: 0,
  // featureIndex: 0,
  // projectData: Data,
  projectData: projectData,
  featureData: featureData,
  todoData: todoData,
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
      // let featureInfo = [...featureData];
      // console.log(featureInfo);
      // console.log(action.payload);
      // let deletedIndex = [];
      // featureInfo.forEach((item, index) => {
      //   if (item.project_id === action.payload) {
      //     deletedIndex.push(index);
      //   }
      // });

      // deletedIndex.sort((a, b) => b - a);
      // //  console.log(deletedIndex, "sort")

      // deletedIndex.forEach((index) => {
      //   featureInfo.splice(index, 1);
      // });
      // console.log(featureInfo, "info");
      // console.log(featureData, "new feature");
      return {
        ...state,
        projectData: state.projectData.filter(
          (item) => item._id !== action.payload
        ),
        // featureData: featureInfo,
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
        edit: { project: {}, isEdit: false },
      };
    },

    // ********************************** FEATURE CRUD ********************************

    featureRemove: (state, action) => {
      return {
        ...state,
        featureData: state.featureData.filter(
          (item) => item?._id !== action.payload
        ),
      };
    },

    featureRemoveByProject : (state, action) => {
      return {
        ...state,
        featureData : state.featureData.filter(item => item._id !== action.payload),
        featureData : state.featureData.filter(item => item.project_id !== action.payload),
      }
    },
    featureCreate: (state, action) => {
      const {project_id} = action.payload

      console.log(project_id,"slice");
      const newProject = action.payload;
      console.log(parseInt(newProject.project_id),"new id")
      console.log(newProject ," jsfjsgfjkgs");
      return {
        ...state,
        featureData: [newProject, ...state.featureData],
      };
    },

    featureEdit: (state, action) => {
      return {
        ...state,
        edit: { project: action.payload, isEdit: true },
      };
    },
    featureUpdate: (state, action) => {
      return {
        ...state,
        featureData: state.featureData.map((item) =>
          item?._id === action.payload?._id ? action.payload : item
        ),
        edit: { project: {}, isEdit: false },
      };
    },

    // Todo CRUD

    todoRemove: (state, action) => {

      // console.log(action.payload)
      // // const todoInfo = [...todoData]
      // console.log(todoData)
      // // console.log(todoInfo, "todo")
      // return{
      //   ...state,
      // }

      return{
        ...state,
        todoData : state.todoData.filter(item => item._id !== action.payload)
      }
    },

    todoRemoveByFeature: (state, action) => {
      console.log(todoData, "slice todo")
      return {
        ...state,
        todoData : state.todoData.filter(item => item.feature_id !== action.payload)
      }
    },

    todoRemoveByProject : (state, action) => {
      // console.log(action.payload, "todoRemove all by project")

      return {
        ...state,
        // todoData : state.todoData.filter(item => {
        //   if(item.project_id !== action.payload && item.feature_id !== action.payload){
        //     return item;
        //   }else{
        //     console.log("no Delete !!!!!!!!!")
        //   }
        // })
        todoData : state.todoData.filter(todo => !todo.project_id || todo.project_id !== action.payload)
      }
    },

    todoCreate:(state,action) => {
      console.log(action.payload)
      return{
      ...state,
      todoData: [action.payload, ...state.todoData]  
      }
    },

    todoEdit: (state, action) => {
      return {
        ...state,
        edit : {project : action.payload, isEdit : true}
      }
    }
  },

  extraReducers: (builder) => {},
});

export const {
  featureEdit,
  projectUpdate,
  projectEdit,
  projectCreate,
  projectRemove,
  indexUpdate,
  featureIndexUpdate,
  featureCreate,
  featureRemove,
  featureUpdate,
  todoCreate,
  todoRemove,
  featureRemoveByProject,
  todoEdit,
  todoRemoveByFeature,
  todoRemoveByProject
} = projectSlice.actions;
export default projectSlice.reducer;
