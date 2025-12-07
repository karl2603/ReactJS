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
            <button className='filterBtn'>All</button>
            <button className='filterBtn'>Jawa Classic</button>
            <button className='filterBtn'>Jawa 42</button>
            <button className='filterBtn'>Jawa Perak</button>
            <button className='filterBtn'>Jawa Bobber</button>
            <button className='filterBtn'>Yezdi Roadster</button>
            <button className='filterBtn'>Yezdi Scrambler</button>
            <button className='filterBtn'>Yezdi Adventure</button>
            <button className='filterBtn'>BSA Goldstar</button>
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