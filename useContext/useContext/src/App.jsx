import React from 'react'
import { useState, createContext, useContext} from 'react'
import "./App.css";
import Profile from "./Profile.jsx";

export const themeChange = createContext()

function App() {

  const [theme,setTheme] = useState("light")

  function toggleTheme(){
    setTheme( (current) => (current === "light" ? "dark" : "light"  ) )
  }


  return (
    <div className='userCard'>
    <themeChange.Provider value = { { theme, toggleTheme } }>
      <Profile />
    </themeChange.Provider>
    </div>
  )
}

export default App