// // src/VolunteerRegistrationForm.js
// import React, { useState } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import "./index.css";

// const mapContainerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const center = {
//   lat: 50.0755,
//   lng: 14.4378,
// };

// const VolunteerRegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     contactName: "",
//     address: "",
//     age: "",
//     postcode: "",
//     phone: "",
//     email: "",
//     skills: "",
//     ndaAgreement: false,
//   });
//   const [errors, setErrors] = useState({});
//   const [markerPosition, setMarkerPosition] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.contactName) newErrors.contactName = "Contact name is required.";
//     if (!formData.address) newErrors.address = "Address is required.";
//     if (!formData.age) newErrors.age = "Age is required.";
//     if (!formData.postcode) newErrors.postcode = "Postcode is required.";
//     if (!formData.phone) newErrors.phone = "Phone is required.";
//     if (!formData.email) newErrors.email = "Email is required.";
//     if (!formData.skills) newErrors.skills = "Skills/Training is required.";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length === 0) {
//       // Submit form data
//       console.log("Form submitted successfully:", formData);
//     } else {
//       setErrors(formErrors);
//     }
//   };

//   const handleMapClick = (event) => {
//     const lat = event.latLng.lat();
//     const lng = event.latLng.lng();
//     setMarkerPosition({ lat, lng });
//     setFormData({
//       ...formData,
//       address: `Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`,
//     });
//   };

//   return (
//     <div className="volunteer-registration-container">
//       <div className="form-section">
//         <h2>Register As Volunteer</h2>
//         <p>
//           Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
//           molestie vel, ornare non id blandit netus.
//         </p>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Contact name</label>
//             <input
//               type="text"
//               name="contactName"
//               value={formData.contactName}
//               onChange={handleInputChange}
//               placeholder="Contact name"
//             />
//             {errors.contactName && <span className="error">{errors.contactName}</span>}
//           </div>
//           <div className="form-group">
//             <label>Address</label>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleInputChange}
//               placeholder="Address"
//             />
//             {errors.address && <span className="error">{errors.address}</span>}
//           </div>
//           <div className="form-group">
//             <label>Age</label>
//             <input
//               type="text"
//               name="age"
//               value={formData.age}
//               onChange={handleInputChange}
//               placeholder="Age"
//             />
//             {errors.age && <span className="error">{errors.age}</span>}
//             <label>Postcode</label>
//             <input
//               type="text"
//               name="postcode"
//               value={formData.postcode}
//               onChange={handleInputChange}
//               placeholder="Postcode"
//             />
//             {errors.postcode && <span className="error">{errors.postcode}</span>}
//           </div>
//           <div className="form-group">
//             <label>Contact Phone</label>
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               placeholder="Contact Phone"
//             />
//             {errors.phone && <span className="error">{errors.phone}</span>}
//           </div>
//           <div className="form-group">
//             <label>E-mail</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="E-mail"
//             />
//             {errors.email && <span className="error">{errors.email}</span>}
//           </div>
//           <div className="form-group">
//             <label>Skills/Training</label>
//             <input
//               type="text"
//               name="skills"
//               value={formData.skills}
//               onChange={handleInputChange}
//               placeholder="Skills/Training"
//             />
//             {errors.skills && <span className="error">{errors.skills}</span>}
//           </div>
//           <div className="form-group">
//             <label>Upload photo file</label>
//             <input type="file" />
//           </div>
//           <div className="form-group">
//             <label>
//               <input
//                 type="checkbox"
//                 name="ndaAgreement"
//                 checked={formData.ndaAgreement}
//                 onChange={handleInputChange}
//               />
//               I want to protect my data by signing an NDA
//             </label>
//           </div>
//           <button type="submit" className="submit-button">
//             Submit
//           </button>
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

// export default VolunteerRegistrationForm;


import React from 'react';
import './index.css';



const RegisterVolunteer = () => {
  return (
    <div className="register-container">
      <div className="form-container">
        <h1>Register As Volunteer</h1>
        <p>We have wish to help you can register here</p>
        <form>
          <input type="text" placeholder="Contact name" required/>
          <input type="text" placeholder="Location" required/>
          <div className="age-postcode">
            <input type="number" placeholder="Age" required/>
            <input type="text" placeholder="Gender" requird/>
          </div>
          <input type="tel" placeholder="Contact Phone" required/>
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Skills/Training" />
          <div className="upload">
            <label>Upload  a Photo</label>
            <input id="file-upload" type="file" /> 
            <small>Attach file. File size of your documents should not exceed 10MB</small>
          </div>
          
          <label>
              <input type="checkbox" /> I want to protect my data by signing an NDA
            </label>
        
          <button type="submit">SUBMIT</button>
        </form>
      </div>
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243648.37782452232!2d13.326246515599485!3d50.06465005056201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9407f4c8f4fd%3A0xa0805d5d78f5d7c4!2sPrague%2C%20Czechia!5e0!3m2!1sen!2sus!4v1666210858005!5m2!1sen!2sus" 
          title="map"
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
}

export default RegisterVolunteer;
