import React from 'react'
import { useState } from 'react';

function Search() {
    const [list,setList] = useState(["Karl","Hasini","Arjun","Aanya","Vikram","Sneha","Rahul","Priya","Rohan","Ananya",
"Amit","Kavya","Suresh","Meera","Kiran","Divya","Manoj","Pooja","Nikhil","Ishita",
"Varun","Neha","Sanjay","Ritu","Aditya","Shreya","Deepak","Mitali","Rakesh","Nandini",
"Sachin","Tanya","Prakash","Simran","Gaurav","Pallavi","Ajay","Isha","Ravi","Komal",
"Harsh","Aditi","Yash","Tanvi","Mohit","Riya","Ankit","Payal","Sunil","Preeti",
"Karthik","Sowmya","Akash","Lavanya","Vivek","Geetha","Surya","Keerthana","Ashwin","Bhavya",
"Abhishek","Pavithra","Naveen","Sangeetha","Pranav","Swathi","Lokesh","Harini","Madhan","Monika",
"Senthil","Revathi","Vijay","Anu","Bharath","Deepika","Sathish","Janani","Saravanan","Reshma",
"Aravind","Shalini","Dinesh","Chitra","Ganesh","Mahalakshmi","Sriram","Vaishnavi","Balaji","Yamuna"])
  return (
     <div className='Container'>
      <h1 className='Header'>Karl Goodman & Associates</h1>
    </div>
  )
}

export default Search