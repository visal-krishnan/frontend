import React from 'react';
// import {Link} from 'react-router-dom'
import './index.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://res.cloudinary.com/dghlihlgi/image/upload/v1725002683/Repidlogo_tibxzw.jpg" alt="Rapid Resolve Logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Navbar;
