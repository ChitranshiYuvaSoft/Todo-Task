import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  projectData: [],
  featureData: [],
  todoData: [],
  isSuccess: false,
  isError: false,
  isLoading: false,
  edit: { project: {}, isEdit: false },
};

const projectSlice = createSlice({
  name: "todoData",
  initialState,
  reducers: {
    // PROJECT CRUD
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
      return {
        ...state,
        projectData: [...state.projectData,newProject],
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

    // FEATURE CRUD
    featureRemove: (state, action) => {
      return {
        ...state,
        featureData: state.featureData.filter(
          (item) => item?._id !== action.payload
        ),
      };
    },
    featureRemoveByProject: (state, action) => {
      return {
        ...state,
        featureData: state.featureData.filter(
          (item) => item._id != action.payload
        ),
        featureData: state.featureData.filter(
          (item) => item.project_id != action.payload
        ),
      };
    },
    featureCreate: (state, action) => {
      const newProject = action.payload;
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
      return {
        ...state,
        todoData: state.todoData.filter((item) => item._id !== action.payload),
      };
    },
    todoRemoveByFeature: (state, action) => {
      return {
        ...state,
        todoData: state.todoData.filter(
          (item) => item.feature_id !== action.payload
        ),
      };
    },
    todoRemoveByProject: (state, action) => {
      return {
        ...state,
        todoData: todoData.filter((item) => {
          if ((!item.project_id || item.project_id != action.payload) && (!item.feature_id || item.feature_id != action.payload)) {
            return item;
          }
        }),
      };
    },
    todoCreate: (state, action) => {
      return {
        ...state,
        todoData: [action.payload, ...state.todoData],
      };
    },
    todoEdit: (state, action) => {
      return {
        ...state,
        edit: { project: action.payload, isEdit: true },
      };
    },
    todoUpdate: (state, action) => {
      return {
        ...state,
        todoData: state.todoData.map((item) =>
          item?._id === action.payload?._id ? action.payload : item
        ),
        edit: { project: {}, isEdit: false },
      };
    },
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
  todoRemoveByProject,
  todoUpdate,
} = projectSlice.actions;


export default projectSlice.reducer;
