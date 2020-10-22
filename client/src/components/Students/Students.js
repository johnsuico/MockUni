import React, { useEffect, useState } from 'react';
import Axios from 'axios';

// Import CSS File
import './students.css';
import './student-sideOne.css';

// Import Components
import Sidebar from '../Sidebar/Sidebar';
import SideOne from './SubComponents/StudentSideOne';

function Students() {

  return (
    <div className="students">
      <Sidebar active="students" />

      <div className="student-container">
        {/* Students Side One */}
        <div className="students-sideOne">
          <div className="sideOne-header">
            <h2>Student Management</h2>
          </div>
          <SideOne />
        </div>

        {/*  Students Side Two */}
        <div className="students-sideTwo">
          <div className="sideTwo-header">
            <h2>Mock University Name</h2>
          </div>
        </div>
      </div>
    </div>
      
  )
}

export default Students;