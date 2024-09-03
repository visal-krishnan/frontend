import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const RegisterVolunteer = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);

  const navigate = useNavigate();

  const states = [
    { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur", "Nashik"] },
    { name: "Karnataka", cities: ["Bengaluru", "Mysuru", "Mangaluru", "Hubli"] },
    { name: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"] },
    { name: "Uttar Pradesh", cities: ["Lucknow", "Kanpur", "Varanasi", "Agra"] },
    { name: "West Bengal", cities: ["Kolkata", "Howrah", "Durgapur", "Siliguri"] },
    { name: "Delhi", cities: ["New Delhi", "Dwarka", "Rohini", "Karol Bagh"] },
    { name: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"] },
    { name: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Udaipur", "Ajmer"] },
    { name: "Telangana", cities: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"] },
    { name: "Kerala", cities: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam"] }
  ];

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setSelectedState(selectedState);

    const state = states.find(state => state.name === selectedState);
    setCities(state ? state.cities : []);
    setSelectedCity(""); // Reset city selection when state changes
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success('Registration successful!', {
      position: 'top-right',
    });

    navigate('/login');
  };

  return (
    <div className="register-container">
      {/* <div className="logo">
        <h1>Rapid Resolve</h1>
        <img src="https://res.cloudinary.com/dghlihlgi/image/upload/v1725002683/Repidlogo_tibxzw.jpg" alt="Rapid Resolve Logo" className='logo-image'/>
      </div> */}
      <div className="form-container">
        <h1>Register As Volunteer</h1>
        <p>We wish to help; you can register here</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Contact name" required />
          <input type="text" placeholder="Address" />
          <div className="form-group">
            <label htmlFor="state">State</label>
            <select name="state" value={selectedState} onChange={handleStateChange} required>
              <option value="">Select a state</option>
              {states.map((state, index) => (
                <option key={index} value={state.name}>{state.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <select name="city" value={selectedCity} onChange={handleCityChange} required>
              <option value="">Select a city</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
          </div>
          <div className="age-postcode">
            <input type="number" placeholder="Age" required />
            <input type="text" placeholder="Gender" required />
          </div>
          <input type="tel" placeholder="Contact Phone" required />
          <input type="email" placeholder="E-mail" />
          <div className="age-postcode">
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm password" required />
          </div>
          <input type="text" placeholder="Skills/Training" />
          <div className="upload">
            <label>Upload a Photo</label>
            <input id="file-upload" type="file" />
            <small>Attach file. File size of your documents should not exceed 10MB</small>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeButton={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default RegisterVolunteer;
