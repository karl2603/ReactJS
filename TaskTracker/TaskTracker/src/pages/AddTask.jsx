import React, { useState } from 'react'
import Navbar from "../Components/Navbar.jsx";

function AddTask({tasks, setTasks}) {
  const [task, setTask] = useState({
    id : Date.now(),
    title : "",
    date : "",
    deadline : "",
    description : "",
    priority : "",
    completed : false
  })
  return (
    <>
    <Navbar />
    <div>AddTask</div>
    </>
  )
}

export default AddTask