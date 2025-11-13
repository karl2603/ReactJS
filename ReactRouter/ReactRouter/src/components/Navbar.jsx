import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar(){
    return(
    <nav className="navbar">
        <Link to="/Home">Home</Link>
        <Link to="/Submit">Submit</Link>
        <Link to="/View">View</Link>
        <Link to="/Faq">Faq</Link>
        <Link to="/Contact">Contact</Link>
    </nav>
)}

export default Navbar;

