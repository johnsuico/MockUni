import React, { useEffect, useState } from 'react';
import Axios from 'axios';

// Import CSS File
import './students.css';
import './student-sideOne.css';
import './student-sideTwo.css';

// Import Components
import Sidebar from '../Sidebar/Sidebar';
import SideOne from './SubComponents/StudentSideOne';
import SideTwo from './SubComponents/StudentSideTwo';

function Students() {

  const [selected, setSelected] = useState('');
  const [toggleStudent, setToggleStudent] = useState(false);

  useEffect(() => {
    Axios.get('http://localhost:5000/students')
      .then(response => setSelected(response.data[0]._id))
  }, [])

  function getSelected(selected) {
    setSelected(selected);
  }

  function getAddStudent(toggle) {
    setToggleStudent(toggle);
  }

  return (
    <div className="students">
      <Sidebar active="students" />

      <div className="student-container">
        {/* Students Side One */}
        <div className="students-sideOne">
          <div className="sideOne-header">
            <h2>Student Management</h2>
          </div>
          <SideOne getSelected={getSelected} getToggle={getAddStudent}/>
        </div>

        {/*  Students Side Two */}
        <div className="students-sideTwo">
          <div className="sideTwo-header">
            <h2>Mock University Name</h2>
          </div>
          <SideTwo selected={selected} toggleAdd={toggleStudent}/>
        </div>
      </div>
    </div>
      
  )
}

export default Students;