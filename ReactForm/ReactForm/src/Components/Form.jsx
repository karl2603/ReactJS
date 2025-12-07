import React, { useState } from 'react'
import "../App.css"

function Form() {
    const [form,setForm] = useState({
        name : "",
        jobCarNo : "",
        phoneNo : "",
        vehicle : "",
        desc : ""
    })
  return (
    <div className='formContainer'>
<h1 className='addJobCard'>Add JobCard</h1>
<form className='form'>
    <label htmlFor='name'>Name</label>
    <input className='InputName' type="text" placeholder='Enter Name...' name="name" value={form.value}/>
    <label htmlFor='jobCardNo'>JobCard Number</label>
    <input className='InputJobCardNo' type='number' placeholder='Enter JobCard Number...' name='jobCardNo' value={form.jobCardNo}/>
    <label htmlFor='phoneNo'>Phone Number</label>
    <input className='InputPhoneNo' type='number' placeholder='Enter Phone Number...' name='phoneNo' value={form.phoneNo}/>
    <label htmlFor='vehicle'>Vehicle</label>
    <input className='InputVehicle' type='text' placeholder='Enter Vehicle...' name='vehicle' value={form.vehicle}/>
    <label htmlFor='desc'>Description</label>
    <input className='InputDesc' type='text' placeholder='Enter Description...' name='desc' value={form.desc} />
</form>
    </div>
  )
}

export default Form