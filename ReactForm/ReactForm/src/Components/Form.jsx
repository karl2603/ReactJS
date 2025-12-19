import React, { useState } from 'react'
import "../App.css"

function Form({handleAdd}) {
  const [form, setForm] = useState({
    name: "",
    jobCardNo: "",
    phoneNo: "",
    vehicle: "",
    desc: ""
  })

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => (
      {
        ...prev,
        [name]: value,
      }
    ))
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    if(!form.name || !form.jobCardNo || !form.phoneNo || !form.vehicle || !form.desc){
      alert("Please fill all the fields!");
      return;
    }
    handleAdd(form);
    setForm({
    name: "",
    jobCardNo: "",
    phoneNo: "",
    vehicle: "",
    desc: ""
  })
  }
  return (
    <div className='formContainer'>
      <h1 className='addJobCard'>Add JobCard</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input className='InputName' type="text" placeholder='Enter Name...' name="name" value={form.name} onChange={handleChange} />
        <label htmlFor='jobCardNo'>JobCard Number</label>
        <input className='InputJobCardNo' type='number' placeholder='Enter JobCard Number...' name='jobCardNo' value={form.jobCardNo} onChange={handleChange} />
        <label htmlFor='phoneNo'>Phone Number</label>
        <input className='InputPhoneNo' type='number' placeholder='Enter Phone Number...' name='phoneNo' value={form.phoneNo} onChange={handleChange} />
        <label htmlFor='vehicle'>Vehicle</label>
        <select name ="vehicle" value={form.vehicle} onChange={handleChange} className='SelectVehicle'>
          <option value="" disabled>Select Vehicle...</option>
          <option>Jawa Classic</option>
          <option>Jawa 42</option>
          <option>Jawa Perak</option>
          <option>Jawa Bobber</option>
          <option>Yezdi Roadster</option>
          <option>Yezdi Scrambler</option>
          <option>Yezdi Adventure</option>
          <option>BSA Goldstar</option>
        </select>
        <label htmlFor='desc'>Description</label>
        <input className='InputDesc' type='text' placeholder='Enter Description...' name='desc' value={form.desc} onChange={handleChange} />
        <button className='addBtn' type='submit'>Add JobCard</button>
      </form>
    </div>
  )
}

export default Form