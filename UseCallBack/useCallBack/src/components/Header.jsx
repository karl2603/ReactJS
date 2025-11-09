import React from 'react'
import { useState , useEffect , useCallback , useMemo } from 'react';
import "../App.css";

function Header({ num, setNum, calculate, clearTable }) {
  return (
    <div className='headerContainer'>
        <h1 className='header'>Multiplication Table</h1>
        <div className='inputContainer'>
            <input className='numInput' type='number' placeholder='Enter Number...' onChange={(event)=>{setNum(parseInt(event.target.value))}}></input>
            <button className='changeTheme'onClick={clearTable}>Clear</button>
            <button className='calculate' onClick={calculate}>Calculate</button>
        </div>
     </div>
  )
}

export { Header };