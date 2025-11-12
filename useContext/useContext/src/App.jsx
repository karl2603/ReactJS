import React from 'react'
import { useState, createContext, useContext} from 'react'
import "./App.css";
import Profile from "./Profile.jsx";

function App() {

  const [theme,setTheme] = useState("light")
  
  function toggleTheme(){
    setTheme( (current) => (current === "light" ? "#1c1e21" : "#e4e6eb"  ) )
  }

  return (
    <div className='userCard'>
      <Profile />
    </div>
  )
}

export default App