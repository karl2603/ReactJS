import React from "react";
import { useState , useEffect , useRef } from "react";
import "../App.css"

function DisplayExpense({filter,expenses}){
return(
  <div className="displayExpenseContainer">
        {expenses.filter( (expenses) => filter === "All" || expenses.category == filter ).map((expenses) => (
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
)
}

export { DisplayExpense }