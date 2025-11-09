import React from 'react'
import { useState , useEffect , useCallback , useMemo } from 'react';
import "../App.css";

function Header() {
  return (
    <div className='headerContainer'>
        <h1 className='header'>Multiplication Table</h1>
        <div className='inputContainer'>
            <input className='numInput' placeholder='Enter Number...'></input>
            <button className='changeTheme'>Clear</button>
            <button className='calculate'>Calculate</button>
        </div>
     </div>
  )
}

export { Header };