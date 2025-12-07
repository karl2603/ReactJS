import React, { useState } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Display from './Components/Display';
import "./App.css";

function App() {
  const [jobCard,setJobcard] = useState([
    {
      name : "Karl Arvindraj",
      jobCardNo : 1,
      phoneNo : 7550196803,
      vehicle : "Yezdi Roadster",
      desc : "Second Service"
    },
    {
      name : "Vignesh",
      jobCardNo : 2,
      phoneNo : 8072884429,
      vehicle : "Jawa Perak",
      desc : "Battery Replacement"
    },
    {
      name: "Santhosh",
      jobCardNo : 3,
      phoneNo : 7904902624,
      vehicle : "Jawa 42",
      desc : "Rusting"
    }
  ])
  return (
    <div className='Container'>
      <Header />
      <Form />
      <Display 
      jobCard = {jobCard}
      setJobcard = {setJobcard}
      />
    </div>
  )
}

export default App