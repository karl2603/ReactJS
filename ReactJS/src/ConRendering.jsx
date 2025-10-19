import React from "react";
import { useState , useEffect , useRef  } from "react";
import "./ConRendering.css"

function Rendering(){
    const [name,setname] = useState(null)
    const [IsValid,setIsValid] = useState(null)
    const passref = useRef()
    

    function signIn(){
        const pass = passref.current.value
        if(pass === "Burlbed58#"){
            setIsValid(true)
        }
        else{
            setIsValid(false)
        }
    }

    return(
        <div className="container">
        <div className="conRender">
            <div className="nameContainer">
            <h1>Enter Password</h1>
            <input className="nameInput" placeholder="Enter Your Password" ref={passref}></input>
            </div>
            <button className="btn" onClick={signIn}>Sign In</button>
        </div>
        <div className="welcome">
            {
             IsValid === null ? (<h1 className="text1">Enter Your Password</h1>) : IsValid ? (<h1 className="text2">Welcome Back Karl!</h1>) : <h1 className="text3">Incorrect Password</h1>
            }
            </div>
            </div>
    )
}

export {Rendering};