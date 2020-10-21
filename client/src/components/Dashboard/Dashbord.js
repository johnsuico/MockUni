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
      <h1>Dashboard Component</h1>
    </div>
  )
}

export default Dashboard;