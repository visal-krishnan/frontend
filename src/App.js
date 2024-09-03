import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard"; // Example component
import Incidents from "./components/Incidents"; // Example component
import EmergencyContacts from "./components/EmergencyContacts"; // Example component
import WebsitePage from "./components/WebsitePage";
import LoginForm from './components/Login';

import "./App.css";
import IncidentReportForm from "./components/IncidentReportForm";
import RegisterVolunteer from "./components/RegisterVolunteer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";


function App() {
  return (
    <Router>

      {/* <div className="container-app"> */}
      
  
        <Routes>
          <Route path= "/" element={<WebsitePage/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/incidents" element={<Incidents/>} />
          <Route path="/report" element={<IncidentReportForm/>} />
          <Route path="/volunter-register" element={<RegisterVolunteer/>} />
          <Route path="/emergency-contacts" element={<EmergencyContacts/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<ContactUs/>} />
          {/* <Route path="/notifications" component={Notifications} /> */}
          </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
