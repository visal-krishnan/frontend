
import Sidebar from "../Sidebar";
import "./index.css"; // CSS file for styling

const EmergencyContacts = () => {
  const contacts = [
    {
      serviceName: "Fire Department",
      contactNumber: "123-456-7890",
      address: "123 Fire Dept Road",
      location: "Downtown",
    },
    {
      serviceName: "Police Department",
      contactNumber: "098-765-4321",
      address: "456 Police Plaza",
      location: "Central District",
    },
    {
      serviceName: "Ambulance Service",
      contactNumber: "6302872334",
      address: "789 Medical Street",
      location: "City Hospital",
    },
    // Add more contacts as needed
  ];

  return (

    <div className="container-app">
      <Sidebar/>
      <div  className="right-main-sec">
      <div className="emergency-contacts">
      <h2>Emergency Contacts</h2>
      <table className="contacts-table">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Contact Number</th>
            <th>Address</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.serviceName}</td>
              <td>
                <a href={`tel:${contact.contactNumber}`}>
                  {contact.contactNumber}
                </a>
              </td>
              <td>{contact.address}</td>
              <td>{contact.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
    
    </div>
  );
};

export default EmergencyContacts ;
