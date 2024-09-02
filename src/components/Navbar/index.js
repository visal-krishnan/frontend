import React from 'react';
import {Link} from 'react-router-dom'
import './index.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://res.cloudinary.com/dghlihlgi/image/upload/v1725002683/Repidlogo_tibxzw.jpg" alt="Rapid Resolve Logo" className='logo-image'/>
      </div>
      <ul>
        <li><Link to="/dashboard" className='navbar-link'>
            Home
          </Link></li>
        <li>Prepaidness Tips</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Navbar;
