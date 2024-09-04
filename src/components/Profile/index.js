import React, { useState, useEffect } from 'react';
import './index.css';

const Profile = ({ volunteerId }) => {
    const volunteer=JSON.parse(localStorage.getItem('data'));


    return (
        <div className="profile-container">
            <h1>Profile Details</h1>
            <p><strong>Name:</strong> {volunteer.contactName}</p>
            <p><strong>Address:</strong> k{volunteer.address}</p>
            <p><strong>Age:</strong> {volunteer.age}</p>
            <p><strong>Gender:</strong> {volunteer.gender}</p>
            <p><strong>City:</strong> {volunteer.volunteerCity}</p>
            <p><strong>Phone Number:</strong> {volunteer.phoneNumber}</p>
            <p><strong>Email:</strong> {volunteer.email}</p>
            <p><strong>Skills:</strong> {volunteer.skills}</p>
        </div>
    );
};

export default Profile;
