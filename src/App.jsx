import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "./Screens/ProjectPage";
import FeaturePage from "./Screens/FeaturePage";
import TodoPage from "./Screens/TodoPage";
const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<ProjectPage/>}/>
      <Route path="/project/feature" element={<FeaturePage/>}/>
      <Route path="/project/feature/todo" element={<TodoPage/>}/>
    </Routes>
  </Router>;
};

export default App;
