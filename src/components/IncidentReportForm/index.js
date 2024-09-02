import React, { useState } from "react";
import MapComponent from "../MapComponent";
import "./index.css";

const IncidentReportForm = () => {
  const [latitude, setLatitude] = useState(""); // State to hold latitude
  const [longitude, setLongitude] = useState(""); // State to hold longitude
  const [personType, setPersonType] = useState(""); // State to hold person type

  const handleLocationSelect = (lat, lng) => {
    setLatitude(lat); // Update latitude
    setLongitude(lng); // Update longitude
  };

  const saveMarker = (lat, lng) => {
    const currentMarkers = JSON.parse(localStorage.getItem('markers')) || [];
    currentMarkers.push({ lat, lng });
    localStorage.setItem('markers', JSON.stringify(currentMarkers));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call saveMarker function only on form submission
    if (latitude && longitude) {
      saveMarker(latitude, longitude);
    }
    console.log('Form submitted with values:', { latitude, longitude });
    // Add your additional form submission logic here
  };

  const handlePersonTypeChange = (event) => {
    const value = event.target.value;
    setPersonType(value);

    // If the person type is "Victim", fetch the current location
    if (value === "Victim") {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude); // Set latitude to current position
        setLongitude(longitude); // Set longitude to current position
      });
    } // If the person type is "Viewer", coordinates will be set on map click

    else if(value === "Viewer"){
      setLatitude("");
      setLongitude("");
    }
  };

  return (
    <div className="incident-container">
      <div className="incident-report-container">
        <div className="form-section">
          <h2>Report an Incident</h2>
          <p>
            We provide help when you report an incident. Please fill out the report incident form!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Contact name</label>
              <input type="text" placeholder="Contact name" required />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input type="text" placeholder="Location" />
            </div>
            <div className="form-group">
              <label>Contact Phone</label>
              <input type="text" placeholder="Contact Phone" required />
            </div>
            <div className="form-group">
              <label>Incident Description</label>
              <input type="text" placeholder="Incident Description" required />
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
                  <input
                    type="radio"
                    name="personType"
                    value="Victim"
                    onChange={handlePersonTypeChange}
                    required
                  /> Victim
                </label>
                <label>
                  <input
                    type="radio"
                    name="personType"
                    value="Viewer"
                    onChange={handlePersonTypeChange}
                    required
                  /> Viewer
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Latitude</label>
              <input type="text" placeholder={latitude || "Latitude"} readOnly required />
            </div>
            <div className="form-group">
              <label>Longitude</label>
              <input type="text" placeholder={longitude || "Longitude"} readOnly required />
            </div>
            <div className="form-group">
              <label>Upload Incident Photos</label>
              <input type="file" />
            </div>
            <div className="form-group">
              <label>
                <input type="checkbox" /> I want to protect my data by signing an NDA
              </label>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
        <div className="map-section">
          <MapComponent onLocationSelect={handleLocationSelect} />
        </div>
      </div>
    </div>
  );
};

export default IncidentReportForm;
