import React from 'react'
import { useState, createContext, useContext} from 'react'
import "./App.css";
import Desc from "./Desc.jsx"
import { themeChange } from './App.jsx';

function Profile(){
    const { theme, toggleTheme } = useContext(themeChange)
    
    const imageStyle = {
        borderColor: theme === "light"? "#007bff" : "#00bcd4"
    }
        
    return(
        <div className='profileIcon'>
            <img src='/Images/profile.jpg' width={250} height={250} style={imageStyle}></img>
            <Desc />
        </div>
    )
}

export default Profile;