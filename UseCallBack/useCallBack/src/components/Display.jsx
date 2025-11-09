import React from 'react'
import { useState , useEffect , useCallback , useMemo } from 'react';
import "../App.css";

function DisplayContainer({num,table,value}) {
   
  return (
    <div className='DisplayContainer'>
    {
        table.map( (table,index) => (
            <div className='multiTable' key={index}>
                <h1 className='tableRow'>{value} * {index+1} = {table}</h1>
            </div>
        ) )
    }
    </div>
  )
}

export { DisplayContainer };