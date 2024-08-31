import React from 'react';
import './index.css';

const Header = () => {
  return (
      <div className="head-container">
        <div className="header-container">
      <p>
        Volunteers are individuals who offer their time and skills to support various 
        causes without expecting payment. In emergency coordination projects, 
        they play a vital role in providing assistance and support to communities during crises.
      </p>
      <div className="started-container">
      <button className="volunteer-btn">Register as a Volunteer</button>
      <button className="incident-btn">Report an Incident</button>
      </div>
      
    </div>
    <div>
        <h1>map Location</h1>
    </div>
      </div>
    
  );
};

export default Header;
