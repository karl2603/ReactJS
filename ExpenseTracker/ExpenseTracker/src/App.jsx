import React from "react";
import { useState, useRef, useEffect } from "react";
import "./App.css";

function ExpenseTrackerApp() {
  //useStates
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [expenses, setExpenses] = useState([])
  //onchange functions
  function inputName(event) {
    setName(event.target.value)
    console.log(name)
  }

  function inputAmount(event) {
    setAmount(event.target.value)
  }

  function inputCategory(event) {
    setCategory(event.target.value)
  }

  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);


  //object array
  function addExpense() {
    const newExpense = {
      id: Date.now(),
      name: name,
      amount: Number(amount),
      category: category
    }
    setExpenses([...expenses, newExpense])
    console.log(expenses)
    setName("")
    setAmount("")
    setCategory("")
  }

 
  return (
    <div className="container">
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
      <div className="inputContainer">
        <div className="inputDiv expenseDiv">
          <span className="inputHeader expenseName">Expense Name</span>
          <input type="text" placeholder="e.g., Coffee" className="input expenseInput" value={name} onChange={inputName} />
        </div>
        <div className="inputDiv amountDiv">
          <span className="inputHeader amount">Amount</span>
          <input type="number" placeholder="e.g., 50" className="input amountInput" value={amount} onChange={inputAmount} />
        </div>
        <div className="inputDiv categoryDiv">
          <span className="inputHeader category">Category</span>
          <select className="select input catergoryinput" required value={category} onChange={inputCategory}>
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
      <div className="filterContainer">
        <button className="filterbtn allbtn">All</button>
        <button className="filterbtn ">Food</button>
        <button className="filterbtn ">Transportation</button>
        <button className="filterbtn ">Bills</button>
        <button className="filterbtn ">Shopping</button>
        <button className="filterbtn ">Entertainment</button>
        <button className="filterbtn ">Health</button>
        <button className="filterbtn ">Travel</button>
        <button className="filterbtn ">Other</button>
      </div>
      <div className="displayExpenseContainer">
        {expenses.map((expenses) => (
          <div className="ExpenseContainer">
            <div className="nameIcon">
              <h3 className="Name">{expenses.name}</h3>
            </div>
            <div className="amountCategory">
              <h3 className="Amount">₹{expenses.amount}</h3>
              <h3 className="Category">{expenses.category}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { ExpenseTrackerApp };