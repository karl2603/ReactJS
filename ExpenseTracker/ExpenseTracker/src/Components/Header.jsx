import React from "react";
import { useState, useRef, useEffect } from "react";
import "../App.css";

function Header({total}){
return(
    <div className="header">
        <div className="brand">
          <img src="/Images/QuickTrackLogo2.png" alt="Logo" width="60px" height="60px"></img>
          <h1 className="brandName">QuickTrack</h1>
        </div>
        <div className="totalExpenseContainer">
          <h3 className="totalExpenseText">Total Expenses</h3>
          <h1 className="totalExpense">₹ {total}</h1>
        </div>
      </div>
)
}

export { Header };