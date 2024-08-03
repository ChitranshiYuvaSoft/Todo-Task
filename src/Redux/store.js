import { combineReducers, configureStore } from "@reduxjs/toolkit";
import projectReducer from "./project/projectSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const reducer = combineReducers({
  project: projectReducer,
});

// storage
// const storage = { "reducer1": { "someKey": "Some Data" } }
// localStorage.setItem('persistedStore', JSON.stringify(storage))
// // retrieval
// const retrievedStoreStr = localStorage.getItem('persistedStore') // this is a string
// const retrievedStore = JSON.parse(retrievedStoreStr) // this will be a JSON object
// const reducer1 = retrievedStore.reducer1 // should now have your reducer


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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
