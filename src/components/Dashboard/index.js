import React from "react";
import Sidebar from "../Sidebar";
import './index.css'
import TopNavbar from "../TopNavbar";
import MapComponent from "../MapComponent";
import Notification from "../Notification";
const Dashboard=()=>{
    return(
     
        <div className="container-app">
            
            <Sidebar/>
            <TopNavbar/>
            <div className="map-section">
<MapComponent/>
</div>
            </div>


    )
}
export default Dashboard;