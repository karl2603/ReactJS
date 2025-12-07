import React from 'react'
import "../App.css"

function Header() {
  return (
    <div className='headerContainer'>
        <nav className='navbar'>
            <img src="/Images/Jawa.avif" alt="Jawa" />
            <img src="/Images/JawaYezdi.avif" alt='JawaYezdi'/>
            <img src="/Images/yezdi.avif" alt='Yezdi' />
        </nav>
        <h1 className='jobCards'>Job cards</h1>
    </div>
  )
}

export default Header