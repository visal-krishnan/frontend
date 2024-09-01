
// import React, { useState } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import "./index.css";

// const mapContainerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const center = {
//   lat: -37.816279,
//   lng: 144.953735,
// };

// const IncidentReportForm = () => {
//   const [location, setLocation] = useState("");
//   const [markerPosition, setMarkerPosition] = useState(null);

//   // Function to fetch address using Geocoding API
//   const getAddressFromLatLng = async (lat, lng) => {
//     const apiKey = "YOUR_GOOGLE_MAPS_API_KEY";
//     const response = await fetch(
//       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
//     );
//     const data = await response.json();
//     if (data.results && data.results.length > 0) {
//       setLocation(data.results[0].formatted_address);
//     } else {
//       setLocation("Address not found");
//     }
//   };

//   const handleMapClick = (event) => {
//     const lat = event.latLng.lat();
//     const lng = event.latLng.lng();
//     setMarkerPosition({ lat, lng });
//     getAddressFromLatLng(lat, lng);
//   };

//   return (
//     <div className="incident-report-container">
//       <div className="form-section">
//         <h2>Report an Incident</h2>
//         <p>
//           Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
//           molestie vel, ornare non id blandit netus.
//         </p>
//         <form>
//           <div className="form-group">
//             <label>Contact name</label>
//             <input type="text" placeholder="Contact name" />
//           </div>
//           <div className="form-group">
//             <label>Location</label>
//             <input type="text" value={location} placeholder="Location" readOnly />
//           </div>
//           <div className="form-group">
//             <label>Contact Phone</label>
//             <input type="text" placeholder="Contact Phone" />
//           </div>
//           <div className="form-group">
//             <label>Incident Description</label>
//             <input type="text" placeholder="Incident Description" />
//           </div>
//           <div className="form-group">
//             <label>Type of incident</label>
//             <select>
//               <option>Select</option>
//               <option>Type 1</option>
//               <option>Type 2</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label>Type of person</label>
//             <div className="radio-group">
//               <label>
//                 <input type="radio" name="personType" /> Victim
//               </label>
//               <label>
//                 <input type="radio" name="personType" /> Viewer
//               </label>
//             </div>
//           </div>
//           <div className="form-group">
//             <label>Severity</label>
//             <div className="radio-group">
//               <label>
//                 <input type="radio" name="severity" /> High
//               </label>
//               <label>
//                 <input type="radio" name="severity" /> Low
//               </label>
//             </div>
//           </div>
//           <div className="form-group">
//             <label>Upload Incident Photos</label>
//             <input type="file" />
//           </div>
//           <div className="form-group">
//             <label>
//               <input type="checkbox" /> I want to protect my data by signing an NDA
//             </label>
//           </div>
//           <button type="submit" className="submit-button">Submit</button>
//         </form>
//       </div>
//       <div className="map-section">
//         <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//           <GoogleMap
//             mapContainerStyle={mapContainerStyle}
//             center={center}
//             zoom={10}
//             onClick={handleMapClick}
//           >
//             {markerPosition && <Marker position={markerPosition} />}
//           </GoogleMap>
//         </LoadScript>
//       </div>
//     </div>
//   );
// };

// export default IncidentReportForm;


import React from "react";
import Navbar from "../Navbar";
import "./index.css";

const IncidentReportForm = () => {
  return (
    <div className="incident-container">
      
    <div className="incident-report-container">
      <div className="form-section">
        <h2>Report an Incident</h2>
        <p>
        We provide a help when you report an incident. so fill the report incident form!
        </p>
        <form>
          <div className="form-group">
            <label>Contact name</label>
            <input type="text" placeholder="Contact name" />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input type="text" placeholder="Location" />
          </div>
          <div className="form-group">
            <label>Contact Phone</label>
            <input type="text" placeholder="Contact Phone" />
          </div>
          <div className="form-group">
            <label>Incident Description</label>
            <input type="text" placeholder="Incident Description" />
          </div>
          <div className="form-group">
            <label>Type of incident</label>
            <select>
              <option>Select</option>
              <option>Fire</option>
              <option>Accident</option>
              <option>Floods</option>
              <option></option>
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
          <div className="form-group">
            <label>
              <input type="checkbox" /> I want to protect my data by signing an NDA
            </label>
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



