import React from "react";
import { useState, useRef, useEffect } from "react";
import "./app.css";
import Header from "./header.jsx";


function App() {
    const students = [
        { name: "Manikam", marks: 38 },
        { name: "Vilasni", marks: 40 },
        { name: "Radesh", marks: 16 },
        { name: "Shakeel", marks: 23 },
        { name: "Hariharan", marks: 20 },
        { name: "Vignesh", marks: 22 },
        { name: "Karl", marks: 42 },
        { name: "Roshan", marks: 30 },
        { name: "Rupashree", marks: 46 },
        { name: "Vishwha", marks: 35 }
    ]

    let displayStudents;
    const [filter, setFilter] = useState("All")

    function allStudents() {
        setFilter("All")
    }

    function passedStudents() {
        setFilter("Pass")
    }

    function failedStudents() {
        setFilter("Fail")
    }

    if(filter === "All"){
        displayStudents = students;
    }
    else if(filter === "Pass"){
        displayStudents = students.filter( students => students.marks>=25)
    }
    else if(filter === "Fail"){
        displayStudents = students.filter( students => students.marks<25)
    }

    return (
        <div className="Container">
            <Header />
            <div className="buttonContainer">
                <button className="btn allbtn" onClick={allStudents}>All Students</button>
                <button className="btn passbtn" onClick={passedStudents}>Passed</button>
                <button className="btn failbtn" onClick={failedStudents}>Failed</button>
            </div>
            <div className="displayContainer">

            </div>
        </div>
    )
}

export { App };