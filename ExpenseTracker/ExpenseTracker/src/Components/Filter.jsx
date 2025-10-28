import React from "react";
import { useState, useRef, useEffect } from "react";
import "../App.css";

function Filter({filter,setFilter}){
    return(
 <div className="filterContainer">
        <button className="filterbtn allbtn" onClick={(event)=>{setFilter(event.target.value)}} value="All">All</button>
        <button className="filterbtn " onClick={(event)=>{setFilter(event.target.value)}} value="Food">Food</button>
        <button className="filterbtn " onClick={(event)=>{setFilter(event.target.value)}} value="Transportation">Transportation</button>
        <button className="filterbtn " onClick={(event)=>{setFilter(event.target.value)}} value="Bills">Bills</button>
        <button className="filterbtn " onClick={(event)=>{setFilter(event.target.value)}} value="Shopping">Shopping</button>
        <button className="filterbtn " onClick={(event)=>{setFilter(event.target.value)}} value="Entertainment">Entertainment</button>
        <button className="filterbtn " onClick={(event)=>{setFilter(event.target.value)}} value="Health">Health</button>
        <button className="filterbtn " onClick={(event)=>{setFilter(event.target.value)}} value="Travel">Travel</button>
        <button className="filterbtn " onClick={(event)=>{setFilter(event.target.value)}} value="Other">Other</button>
      </div>
    )
}

export { Filter };