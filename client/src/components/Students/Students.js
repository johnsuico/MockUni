import React from 'react';
import Axios from 'axios';

// Import CSS File
import './students.css';

// Import Components
import Sidebar from '../Sidebar/Sidebar';

function Students() {
  return (
    <div className="students">
      <Sidebar active="students" />
      <div className="students-container">
        <div className="students-sideOne">
          <div className="students-sideOne-header">
            <h2>Hello, Admin Name Here</h2>
          </div>
          <div className="students-sideOne-content">
            <h1>Student Side One</h1>
          </div>
        </div>
        <div className="students-sideTwo">
          <div className="students-sideTwo-header">
            <h1>Mock University Name</h1>
          </div>
          <div className="students-sideTwo-content">
            <h1>Student Side One</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Students;