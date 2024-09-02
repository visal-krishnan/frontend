import React, { useState } from "react";
import "./index.css";

const IncidentReportForm = () => {
  // State for selected state and city
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Object holding states and corresponding cities
  const stateCityMapping = {
    California: ["Los Angeles", "San Francisco", "San Diego"],
    Texas: ["Houston", "Austin", "Dallas"],
    NewYork: ["New York City", "Buffalo", "Rochester"],
    Florida: ["Miami", "Orlando", "Tampa"]
  };

  // Get cities based on the selected state
  const cities = selectedState ? stateCityMapping[selectedState] : [];

  return (
    <div className="incident-container">
      <div className="incident-report-container">
        <div className="form-section">
          <h2>Report an Incident</h2>
          <p>
            We provide help when you report an incident. So fill in the incident report form!
          </p>
          <form>
            <div className="form-group">
             
              <input type="text" placeholder="Contact name" />
            </div>
            <div className="form-group">
        
              <input type="text" placeholder="Location" />
            </div>
            <div className="form-group">
      
              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedCity(""); // Reset city when state changes
                }}
              >
                <option value="">Select State</option>
                {Object.keys(stateCityMapping).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
        
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={!selectedState}
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
            
              <input type="text" placeholder="Contact Phone" />
            </div>
            <div className="form-group">
              
              <input type="text" placeholder="Incident Description" />
            </div>
            <div className="form-group">
              <label>Type of incident</label>
              <select>
                <option>Select</option>
                <option>Fire</option>
                <option>Accident</option>
                <option>Floods</option>
              </select>
            </div>
            <div className="form-group">
              <label>Type of person</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="personType" /> Victim
                </label>
                <label>
                  <input type="radio" name="personType" /> Viewer
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Severity</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="severity" /> High
                </label>
                <label>
                  <input type="radio" name="severity" /> Low
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Upload Incident Photos</label>
              <input type="file" />
            </div>
            
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094126!2d144.95373531557077!3d-37.81627944202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e4748f4ec0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1618203539894!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default IncidentReportForm;

