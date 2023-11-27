import React, { useRef } from "react";
import './Navbar.css'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();
  const shownavbar = () => {
    navRef.current.classList.toggle('mobil')
  }
  return (
    <header>
      <div className="logo">
        <h3>Assuit-Unviersity </h3>
        </div>
        <nav ref={navRef}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact Us</a>
          <button className="btn">Contact</button>
          <button className="btn-close" onClick={shownavbar}>
            <FaTimes/>
          </button>

        </nav>

        <button className="btn-bar" onClick={shownavbar}>
          <FaBars/>
        </button>
      
    </header>
  );
};

export default Navbar;
