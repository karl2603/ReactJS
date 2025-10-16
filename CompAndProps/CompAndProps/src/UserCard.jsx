import React from 'react'

function UserCard(props) {
  return (
    <>
    <h1>Name :  {props.Name}</h1>
    <h1>Age : {props.Age}</h1>
    <h1>Role : {props.Role}</h1>
    </>
  )
}

export default UserCard;