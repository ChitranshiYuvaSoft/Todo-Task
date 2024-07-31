import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "./Screens/ProjectPage";
import FeaturePage from "./Screens/FeaturePage";
import TodoPage from "./Screens/TodoPage";
const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<ProjectPage/>}/>
      <Route path="/feature/:_id" element={<FeaturePage/>}/>
      <Route path="/todo/:_id" element={<TodoPage/>}/>
    </Routes>
  </Router>;
};

export default App;
