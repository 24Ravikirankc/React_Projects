import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from 'react';
import "../Styles/main.css"; 


function NavBar() {
    const navRef = useRef()

    const showNavBar = () => {
        navRef.curent.classList.toggle("responsive_nav")
    }
  return (
    <div>
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="/#"> Home</a>
                <a href="/#"> About Us</a>
                <a href="/Pages/contact.jsx"> Contact</a>
             
                <a href="/#"> Blog</a>
                <button className="nav-btn nav-close -btn" onClick={showNavBar}>
                <FaTimes /> 
                </button>
            </nav>
            <button className="nav-btn nav-close -btn" onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    </div>
  )
}

export default NavBar