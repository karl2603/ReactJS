import React from 'react'
import { useState, createContext, useContext} from 'react'
import "./App.css";
import Desc from "./Desc.jsx"

function Profile(){
    return(
        <div className='profileIcon'>
            <img src='/Images/profile.jpg' width={250} height={250}></img>
            <Desc />
        </div>
    )
}

export default Profile;