import React from "react";
import { useState, useRef, useEffect } from "react";
import "../App.css";

function UserInput({name,amount,category,setName,setAmount,setCategory,addExpense}) {
    return (
        <div className="inputContainer">
            <div className="inputDiv expenseDiv">
                <span className="inputHeader expenseName">Expense Name</span>
                <input type="text" placeholder="e.g., Coffee" className="input expenseInput" value={name} onChange={(event)=>{setName(event.target.value)}} />
            </div>
            <div className="inputDiv amountDiv">
                <span className="inputHeader amount">Amount</span>
                <input type="number" placeholder="e.g., 50" className="input amountInput" value={amount} onChange={(event)=>{setAmount(event.target.value)}} />
            </div>
            <div className="inputDiv categoryDiv">
                <span className="inputHeader category">Category</span>
                <select className="select input catergoryinput" required value={category} onChange={(event)=>{setCategory(event.target.value)}}>
                    <option value="" disabled selected className="categorySelect">Select a category...</option>
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Bills">Bills</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Health">Health</option>
                    <option value="Travel">Travel</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <div className="btnDiv inputDiv">
                <button className="addBtn" onClick={addExpense}>Add Expense</button>
            </div>
        </div>
    )
}

export { UserInput };