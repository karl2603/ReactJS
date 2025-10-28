import React from "react";
import { useState, useRef, useEffect } from "react";
import { Header } from "./Components/Header.jsx";
import { UserInput } from "./Components/UserInput.jsx";
import { Filter } from "./Components/Filter.jsx";
import { DisplayExpense } from "./Components/DisplayExpense.jsx";
import "./App.css";


function ExpenseTrackerApp() {
  //useStates
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [expenses, setExpenses] = useState([])
  const [filter,setFilter] = useState("All")
//total amount
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
//object array
  function addExpense() {
if(!name || !amount | !category){
  return alert("Fill all the fields!")
}

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
      <Header total={total}/>
      <UserInput 
      name = {name} 
      amount={amount}
      category={category}
      setName={setName}
      setAmount={setAmount}
      setCategory={setCategory}
      addExpense={addExpense}
      />
      <Filter 
      filter={filter} 
      setFilter={setFilter}
      />
      <DisplayExpense 
      filter={filter}
      expenses={expenses}
      />
    </div>
  )
}

export { ExpenseTrackerApp };