import React from "react";
import { useState, useRef, useEffect } from "react";
import "./map.css";

function Map() {
    const profile = [
        { name: "Karl", age: "19", job: "Web Developer" },
        { name: "Hasini", age: "17", job: "Speaker" },
        { name: "Vilasni", age: "20", job: "Designer" },
        { name: "Vignesh", age: "18", job: "Editor" },
        { name: "Roshan", age: "20", job: "Support Dev" }
    ]
    return (
        <div className="container">
            <h1 className="companyName">Karl & Co</h1>
            {
               profile.map( (profileCard) => (
               <div className="profileContainer">
               <h2 className="profileName"> Name : {profileCard.name}</h2>
               <h2 className="profileAge">Age : {profileCard.age}</h2>
               <h2 className="profileJob">Job : {profileCard.job}</h2>
               </div>
               ) )
            }
            <h1 className="BetterCallKarl">Better Call Karl! <br></br> 7550196803</h1>
        </div>
    )
}

export { Map };