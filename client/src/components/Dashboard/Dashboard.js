import React from 'react';
import Axios from 'axios';

// Import CSS File
import './dashboard.css';

// Import Sidebar Component
import Sidebar from '../Sidebar/Sidebar';

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar active="dashboard"/>
      <div className="dashboard-container">
       <div className="dashboard-sideOne">
            <h1>Dashboard Side One</h1>
        </div>
        <div className="dashboard-sideTwo">
            <h1>Dashboard Side Two</h1>
        </div>
      </div>
    </div> 
  )
}

export default Dashboard;