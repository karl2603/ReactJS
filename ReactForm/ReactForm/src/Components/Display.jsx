import React from 'react'
import "../App.css"

function Display({ jobCard, setJobcard }) {
    
  return (
    <div className='displayContainer'>
{
   jobCard.map( (item) => {
    return(
    <div className='jobCard'>
        <p className='jobCardNo'><span>JobCard Number : </span>{item.jobCardNo}</p>
        <p className='name'><span>Name : </span>{item.name}</p>
        <p className='name'><span>Phone Number : </span>{item.phoneNo}</p>
        <p className='name'><span>Vehicle : </span>{item.vehicle}</p>
        <p className='name'><span>Description : </span>{item.desc}</p>
        <button className='editBtn'>Edit</button>
        <button className='delBtn'>Delete</button>
    </div>
   )})
}
    </div>
  )
}

export default Display