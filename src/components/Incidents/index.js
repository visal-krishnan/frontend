import React from "react";
import Sidebar from "../Sidebar";
import IncidentCard from "../IncidentCard";
import './index.css'

const dummy = [
    {name:"swathi",
        phoneNo:"12345678",
        typeOfIncident:'Fire'
    },
    {name:"swathi",
        phoneNo:"12345678",
        typeOfIncident:'Fire'
    }, {name:"swathi",
        phoneNo:"12345678",
        typeOfIncident:'Fire'
    }, {name:"swathi",
        phoneNo:"12345678",
        typeOfIncident:'Fire'
    }, {name:"swathi",
        phoneNo:"12345678",
        typeOfIncident:'Fire'
    }
]

const Incidents=()=>{
    return(

       <div className="container-app">
        <Sidebar/>
        <div className="right-main-sec">
            <div className="cards-sec">
                {dummy.map(each=><IncidentCard each={each}/>)}

            </div>

        </div>

       </div>
    )
}
export default Incidents;