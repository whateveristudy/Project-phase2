import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import logo from "../assests/logo.png";
import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="logoContainer">
                <img src={logo} alt="Logo" className="logo" /> 
                <h2 className="websiteName">Velvet Pointe Academy</h2>
            </Link>

            <div className="navLinks">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Classes">Classes</Link>
                <Link to="/Performance">Performance</Link>

            </div>
        </div>
    );


}

export default NavBar;