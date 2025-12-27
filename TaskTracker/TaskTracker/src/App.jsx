import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { AddTask } from "./pages/AddTask.jsx";
import { TaskDetails } from "./pages/TaskDetails.jsx";
import "./App.css"

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/Add" element={<AddTask />} />
      <Route path='/Task/:id' element={<TaskDetails />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
