import React from 'react'
import { useState, createContext, useContext } from 'react'
import "./App.css";
import { themeChange } from './App';


function Desc() {
    
const { theme, toggleTheme } = useContext(themeChange)

const descTheme = {
    backgroundColor : theme === "light"? "#ffffff" : "#242526"
}

    return (
        <div className='descContainer' style={descTheme}>
            <h1 className='profileName'>Karl Arvindraj</h1>
            <h3 className='profileRole'>Web Developer</h3>
            <p className='profileDesc'>Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React.js. Skilled in creating
                responsive, user-friendly web interfaces and currently learning backend technologies to grow into a full stack
                developer.</p>
            <button className='changeBtn' onClick={toggleTheme}>Change Theme</button>
        </div>
    )
}

export default Desc