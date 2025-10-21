import React from "react";
import { useState , useRef , useEffect } from "react";
import "./mapCon.css";

function DisplayStudents(){
const students = [
    { name : "Karl" , marks : 50 },
    { name : "Hasini" , marks : 50 },
    { name : "Vilasni" , marks : 42 },
    { name : "Rupashree" , marks : 48 },
    { name : "Hari" , marks : 16 },
    { name : "Vignesh" , marks : 22 },
    { name : "Roshan" , marks : 32 },
    { name : "Manikkam" , marks : 38 },
    { name : "Shakeel" , marks : 21 },
    { name : "Vishwha" , marks : 26 },
    { name : "Radeshyam" , marks : 6 },
]

const [button,usebutton] = useState(null)

function allStudents(){
usebutton("all")
}

function passStudents(){
usebutton("pass")
}

function failStudents(){
usebutton("fail")
}

    return(
        <div className="container">
            <h1 className="header">--Student Info--</h1>
            <div className="button container">
<button className="all" onClick={allStudents}>All</button>
<button className="pass" onClick={passStudents}>Pass</button>
<button className="fail" onClick={failStudents}>Fail</button>
            </div>
            <div className="studentList">
                {
                    students.map( (student)=>{
                        if(student.marks>24){
                            return(
                                <h1 className="passed"></h1>
                            )
                        }
 } )
                }
            </div>
            </div>
    )
}

export {DisplayStudents};