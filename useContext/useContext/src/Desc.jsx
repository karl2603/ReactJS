import React from 'react'
import { useState, createContext, useContext } from 'react'
import "./App.css";
import { themeChange } from './App';


function Desc() {
    
const { theme, toggleTheme } = useContext(themeChange)

const btnColor = {
    backgroundColor: theme === "light"? "#007bff" : "#00bcd4"
}
const roleColor = {
    color: theme === "light"? "#007bff" : "#00bcd4"
}
const primaryText = {
    color: theme === "light"? "#1c1e21" : "#f9fafb"
}
const descColor = {
    color:theme === "light"? "#65676b" : "#9ca3af"
}




    return (
        <div className='descContainer'>
            <h1 className='profileName' style={primaryText}>Karl Arvindraj</h1>
            <h3 className='profileRole' style={roleColor}>Web Developer</h3>
            <p className='profileDesc' style={descColor}>Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React.js. Skilled in creating
                responsive, user-friendly web interfaces and currently learning backend technologies to grow into a full stack
                developer.</p>
            <button className='changeBtn' onClick={toggleTheme} style={btnColor}>Change Theme</button>
        </div>
    )
}

export default Desc