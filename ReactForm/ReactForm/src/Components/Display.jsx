import React, { useState } from 'react'
import "../App.css"

function Display({ jobCard, setJobcard }) {
    const[selectedVehicle,setSelectedVehicle] = useState("All")

    if(jobCard.length === 0){
        return(
        <div className='noRecordContainer'>
            <h1 className='noRecordText'>No JobCards Found</h1>
        </div>
    )}

    function handleDel(jobCardNo){
        setJobcard((prev)=>{
            return prev.filter((prev)=> prev.jobCardNo !== jobCardNo)
        })
    }

    return (
        <div className='displayContainer'>
            <div className='filterContainer'>
            <button className='filterBtn' onClick={()=>{setSelectedVehicle("All")}}>All</button>
            <button className='filterBtn' onClick={()=>{setSelectedVehicle("Jawa Classic")}}>Jawa Classic</button>
            <button className='filterBtn' onClick={()=>{setSelectedVehicle("Jawa 42")}}>Jawa 42</button>
            <button className='filterBtn' onClick={()=>{setSelectedVehicle("Jawa Perak")}}>Jawa Perak</button>
            <button className='filterBtn' onClick={()=>{setSelectedVehicle("Jawa Bobber")}}>Jawa Bobber</button>
            <button className='filterBtn' onClick={()=>{setSelectedVehicle("Yezdi Roadster")}}>Yezdi Roadster</button>
            <button className='filterBtn' onClick={()=>{setSelectedVehicle("Yezdi Scrambler")}}>Yezdi Scrambler</button>
            <button className='filterBtn' onClick={()=>{setSelectedVehicle("Yezdi Adventure")}}>Yezdi Adventure</button>
            <button className='filterBtn' onClick={()=>{setSelectedVehicle("BSA Goldstar")}}>BSA Goldstar</button>
            </div>

            {
                jobCard.map((item) => {
                    return (
                        <div className='jobCard'>
                            <p className='jobCardNo'><span>JobCard Number : </span>{item.jobCardNo}</p>
                            <p className='name'><span>Name : </span>{item.name}</p>
                            <p className='name'><span>Phone Number : </span>{item.phoneNo}</p>
                            <p className='name'><span>Vehicle : </span>{item.vehicle}</p>
                            <p className='name'><span>Description : </span>{item.desc}</p>
                            <button className='delBtn' onClick={() => {handleDel(item.jobCardNo)}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Display