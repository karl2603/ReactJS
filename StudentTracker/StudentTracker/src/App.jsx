import React from "react";
import { useState, useRef, useEffect } from "react";
import "./app.css";
import Header from "./header.jsx";


function App() {
//array
    let displayStudents;
//useStates
    const [students,setStudents] = useState([
        { name: "Manikam", marks: 38 },
        { name: "Vilasni", marks: 40 },
        { name: "Radesh", marks: 16 },
        { name: "Shakeel", marks: 23 },
        { name: "Hariharan", marks: 20 },
        { name: "Vignesh", marks: 22 },
        { name: "Karl", marks: 42 },
        { name: "Roshan", marks: 21 },
        { name: "Rupashree", marks: 46 },
        { name: "Vishwha", marks: 20 }
    ])
//Filter
    const [filter, setFilter] = useState("All")
//User Input
    const [name,setName] = useState("")
    const [mark,setMark] = useState("")
//filter functions
    function allStudents() {
        setFilter("All")
    }

    function passedStudents() {
        setFilter("Pass")
    }

    function failedStudents() {
        setFilter("Fail")
    }
//userInput
    function addName(event){
        setName(event.target.value)
    }

    function addMark(event){
        setMark(event.target.value)
    }
//addUserInput
    function addStudents() {
      let newStudent = {
        id : Date.now(),
        name : name,
        marks : Number(mark)
      }
      console.log(newStudent)
      setStudents([...students, newStudent])
      setName("")
      setMark("")
    }

    if (filter === "All") {
        displayStudents = students;
    }
    else if (filter === "Pass") {
        displayStudents = students.filter(students => students.marks >= 25)
    }
    else if (filter === "Fail") {
        displayStudents = students.filter(students => students.marks < 25)
    }

    return (
        <div className="Container">
            <Header />
            <div className="buttonContainer">
                <button className="btn allbtn" onClick={allStudents}>All Students</button>
                <button className="btn passbtn" onClick={passedStudents}>Passed</button>
                <button className="btn failbtn" onClick={failedStudents}>Failed</button>
            </div>
            <div className="inputContainer">
                <div className="nameDiv">
                    <span className="studentName">Name</span>
                    <input className="studentNameInput" placeholder="Enter your name..." type="text" onChange={addName} value={name}></input>
                </div>
                <div className="markDiv">
                    <span className="studentMark">Mark</span>
                    <input className="studentMarkInput" placeholder="Enter marks..." type="number" onChange={addMark} value={mark}></input>
                </div>
                <div className="addBtnDiv">
                    <button className="addbtn" onClick={addStudents}>Add</button>
                </div>
            </div>
            <div className="displayContainer">
                {
                    displayStudents.map((student) => (
                        <div className="StudentContainer" style={{ backgroundColor: student.marks >= 25 ? "#D1FAE5" : "#FEE2E2" }}>
                            <h3 className="name">{student.name}</h3>
                            <h3 className="marks"> Marks : {student.marks}/50</h3>
                            {student.marks >= 25 ? (<h3 className="passText">Pass</h3>) : (<h3 className="failText">Fail</h3>)}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { App };