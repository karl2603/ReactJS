import React, { useEffect } from 'react'
import { useState, createContext, useContext} from 'react'
import "./App.css";
import Profile from "./Profile.jsx";

export const themeChange = createContext()

function App() {

  const [theme,setTheme] = useState("light")

  function toggleTheme(){
    setTheme( (current) => (current === "light" ? "dark" : "light"  ) )
  }

  useEffect( ()=> {
document.body.style.backgroundColor = theme === "light"? "#f0f2f5" : "#0d1117"
  } , [theme] )

  const containerTheme = {
    backgroundColor : theme === "light"? "#ffffff" : "#161b22"
  }


  return (
    <div className='userCard' style={containerTheme}>
    <themeChange.Provider value = { { theme, toggleTheme } }>
      <Profile />
    </themeChange.Provider>
    </div>
  )
}

export default App