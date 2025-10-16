import React from "react";
import { useState , useEffect , useRef } from "react";
import "./App.css"

function App() {
  const [num,usenum] = useState(1)
  const printName = useRef() 

  function consoleName(){
    console.log("Name = "+printName.current.value)
    usenum(num+1)
    console.log("Number of times btn has been clicked : "+num)
  }

  return(
    <div className="container">
      <h1>Enter your name</h1>
      <input ref={printName} placeholder="Enter Your Name"></input>
      <button className="btn" onClick={consoleName}>Submit</button>      
    </div>
  )
}

export {App}