import React, { useState } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Display from './Components/Display';
import "./App.css";

function App() {
  const [jobCard, setJobcard] = useState([
    {
      name: "Karl Arvindraj",
      jobCardNo: 1,
      phoneNo: 7550196803,
      vehicle: "Yezdi Roadster",
      desc: "Third Service"
    },
    {
      name: "Vignesh",
      jobCardNo: 2,
      phoneNo: 8072884429,
      vehicle: "Jawa Perak",
      desc: "Battery Replacement"
    },
    {
      name: "Santhosh",
      jobCardNo: 3,
      phoneNo: 7904902624,
      vehicle: "Jawa 42",
      desc: "Rusting"
    },
    {
      name: "Arun",
      jobCardNo: 4,
      phoneNo: 9876543210,
      vehicle: "Yezdi Adventure",
      desc: "Engine Oil Change"
    },
    {
      name: "Rahul",
      jobCardNo: 5,
      phoneNo: 9123456780,
      vehicle: "Jawa Bobber",
      desc: "Brake Issue"
    },
    {
      name: "Suresh",
      jobCardNo: 6,
      phoneNo: 9988776655,
      vehicle: "Yezdi Scrambler",
      desc: "Chain Adjustment"
    },
    {
      name: "Karthik",
      jobCardNo: 7,
      phoneNo: 8899001122,
      vehicle: "BSA Goldstar",
      desc: "General Service"
    },
  {
    name: "Praveen",
    jobCardNo: 8,
    phoneNo: 9012345678,
    vehicle: "Yezdi Scrambler",
    desc: "Clutch Issue"
  },
  {
    name: "Ajith",
    jobCardNo: 9,
    phoneNo: 9345678901,
    vehicle: "Jawa 42",
    desc: "Suspension Check"
  },
  {
    name: "Manoj",
    jobCardNo: 10,
    phoneNo: 9567890123,
    vehicle: "Yezdi Adventure",
    desc: "Full Body Wash"
  }
  ])

  function handleAdd(newJobCard) {
    setJobcard((prevJobCard) => (
      [...prevJobCard, { ...newJobCard }]
    ))
  }

  return (
    <div className='Container'>
      <Header />
      <Form
        handleAdd={handleAdd}
      />
      <Display
        jobCard={jobCard}
        setJobcard={setJobcard}
      />
    </div>
  )
}

export default App