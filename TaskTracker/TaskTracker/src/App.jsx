import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import  Home  from "./pages/Home.jsx";
import  AddTask  from "./pages/AddTask.jsx";
import  TaskDetails  from "./pages/TaskDetails.jsx";
import "./App.css"

function App() {
  const [tasks,setTasks] = useState([]);
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Home 
      tasks={tasks}
      />} />
      <Route path="/add" element={<AddTask 
      tasks={tasks}
      setTasks={setTasks}
      />} />
      <Route path='/task/:id' element={<TaskDetails 
      tasks={tasks}
      setTasks={setTasks}
      />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
