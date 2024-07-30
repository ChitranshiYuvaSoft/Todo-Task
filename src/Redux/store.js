import { combineReducers, configureStore } from "@reduxjs/toolkit";
import projectReducer from "./project/projectSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const reducer = combineReducers({
  project: projectReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  // reducer : {
  //     // project : projectReducer,
  // },
  reducer: persistedReducer,
});

export default store;
