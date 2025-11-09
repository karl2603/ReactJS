import React from 'react'
import { useState , useEffect , useCallback , useMemo } from 'react';
import "./App.css";
import { Header } from "./components/Header.jsx"
import { DisplayContainer } from './components/Display.jsx';

function App() {
  const [num,setNum] = useState(null)
  const [value,setValue] = useState(null)
  const [table,setTable] = useState([])

  const calculate= useCallback( () => {
    if(!num){
      return alert("Enter Number")
    }
    setTable([num*1,num*2,num*3,num*4,num*5,num*6,num*7,num*8,num*9,num*10])
    setValue(num)
  },[num])

   function clearTable() {
    setNum(null);  
    setTable([]);  
  }

  return (
    <div className='Container'>
    <Header 
    num = {num}
    setNum = {setNum}
    calculate = {calculate}
    clearTable= {clearTable}
    />
    <DisplayContainer 
    num={num}
    table={table}
    value={value}
    />
    </div>
  )
}

export default App;