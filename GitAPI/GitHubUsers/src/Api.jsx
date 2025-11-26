import React, { useEffect, useState } from 'react'
import "./Api.css"

function GitUsers() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    async function fetchUsers() {
        try {
            const response = await fetch('https://api.github.com/users');
            console.log(response)
            const result = await response.json();
            console.log(result)
            setUsers(result)
            setLoading(true)
        }
        catch (error) {
            setLoading(true)
        }
    }
    useEffect( ()=> {
       setTimeout( ()=> {
        fetchUsers()
       },5000 )
    }, [] )


    if(loading){
    return (
        <div className='Container'>
        <h1 className='header'>GitHub Users</h1>
            {
                users.map((user) => {
                    const { id, avatar_url, login, html_url } = user;
                    return (
                        <div className='profileCard' key={id}>
                            <img src={avatar_url} alt={login} className='profileImg' />
                            <h3 className='profileName'>{login}</h3>
                            <button className='viewBtn'><a href={html_url}>View</a></button>
                        </div>
                    )
                })
            }
        </div>
    )
}

if(!loading){
    return(
        <div className='loading'>
            <h3 className='text'>Loading</h3>
        </div>
    )
}

}

export default GitUsers