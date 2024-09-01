import React from "react";
import { FaTachometerAlt, FaExclamationTriangle, FaPhoneAlt, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css"; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <img src="https://res.cloudinary.com/dghlihlgi/image/upload/v1725085366/Preview_3_u4ch2z.png" alt="Logo" />
      </div>
      <ul className="menu">
        <li>
          <Link to="/dashboard" className="menu-link">
            <FaTachometerAlt className="menu-icon" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/incidents" className="menu-link">
            <FaExclamationTriangle className="menu-icon" /> View Incidents
          </Link>
        </li>
        <li>
          <Link to="/emergency-contacts" className="menu-link">
            <FaPhoneAlt className="menu-icon" /> Emergency Contacts
          </Link>
        </li>
        {/* <li>
          <Link to="/notifications" className="menu-link">
            <FaBell className="menu-icon" /> Notifications
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
