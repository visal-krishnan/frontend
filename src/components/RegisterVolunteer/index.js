import React, { useState } from 'react';
import './index.css';

const RegisterVolunteer = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);

  // Example data for states and cities
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

    // Find cities for the selected state
    const state = states.find(state => state.name === selectedState);
    setCities(state ? state.cities : []);
    setSelectedCity(""); // Reset city selection when state changes
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className="register-container">
      <img src="https://res.cloudinary.com/dghlihlgi/image/upload/v1725085366/Preview_3_u4ch2z.png" alt="logo-here" className="logo-image"/>
      <div className="form-container">
        <h1>Register As Volunteer</h1>
        <p>We have wish to help you can register here</p>
        <form>
          <input type="text" placeholder="Contact name" required />
          <input type="text" placeholder="address"/>
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
      
    </div>
  );
}

export default RegisterVolunteer;
