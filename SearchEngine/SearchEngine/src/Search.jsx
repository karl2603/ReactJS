import React from 'react'
import { useState } from 'react';
import { Employees } from './dataset';

function Search() {
  const [search, setSearch] = useState('')
  const [list, setList] = useState(Employees)
  const [filteredList, setFilteredList] = useState(list)

  function handleSearch(e) {
    const value = e.target.value
    setSearch(value)
    const filtered = list.filter( (item) =>
    item.toLowerCase().includes(value.toLowerCase()) )
    setFilteredList(filtered)
  }
  return (
    <div className='Container'>
      <div className='headerDiv'>
        <h1 className='Header'>Karl Goodman & Associates</h1>
        <h3 className='subHeader'>Search Employees</h3>
        <input className='searchInput' type='text' placeholder='Enter Name...' value={search} onChange={handleSearch}></input>
      </div>
      {
        filteredList.map( (item) => (
          <div className='filteredList'>
            <p className='filteredEmployees'>{item}</p>
          </div>
        ) )
      }
    </div>
  )
}

export default Search