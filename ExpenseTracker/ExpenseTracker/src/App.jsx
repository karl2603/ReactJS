import React from "react";
import { useState , useRef , useEffect } from "react";
import "./App.css";

function ExpenseTrackerApp(){
  return(
    <div className="container">
      <div className="header">
        <div className="brand">
          <img src="/Images/QuickTrackLogo2.png" alt="Logo" width="80px" height="60px"></img>
          <h1 className="brandName">QuickTrack</h1>
        </div>
        <div className="totalExpenseContainer">
          <h3 className="totalExpenseText">Total Expenses</h3>
          <h1 className="totalExpense">₹1,250.75</h1>
        </div>
      </div>
      <div className="inputContainer">
        <div className="inputDiv expenseDiv">
          <span className="inputHeader expenseName">Expense Name</span>
          <input type="text" placeholder="e.g., Coffee" className="input expenseInput"/>
        </div>
        <div className="inputDiv amountDiv">
          <span className="inputHeader amount">Amount</span>
          <input type="number" placeholder="e.g., 50" className="input amountInput"/>
        </div>
        <div className="inputDiv categoryDiv">
          <span className="inputHeader category">Category</span>
          <select className="select input catergoryinput">
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Bills">Bills</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="btnDiv inputDiv">
          <button className="addBtn">Add Expense</button>
        </div>
      </div>
      <div className="filterContainer">
        <button className="filterbtn ">All</button>
        <button className="filterbtn ">Food</button>
        <button className="filterbtn ">Travel</button>
        <button className="filterbtn ">Bills</button>
        <button className="filterbtn ">Other</button>
      </div>
    </div>
  )
}

export { ExpenseTrackerApp };