import React from "react";
import { useState , useEffect } from "react";

function App(){
 const [num,usenum] = useState(100)

 useEffect(() => {
  console.log("Program executed successfully")
 },[])
  
  useEffect(() => {
    console.log("Num value increased")
  },[num])

  function addnum(){
    usenum(num+1)
  }

  return (
    <>
    <h1>{num}</h1>
    <button className="addbtn" onClick={addnum}>Add+</button>
    </>
  )
}

export { App };