import React from 'react'

import './editStudent.css'

import Sidebar from '../../../Sidebar/Sidebar'
import EditSideOne from './EditSideOne';
import EditSideTwo from './EditSideTwo';

function EditStudent(props) {
  return (
    <div className="editStudent">
      <Sidebar active="students"/>

      <div className="student-container">
        <div className="students-sideOne">
          <div className="sideOne-header">
            <h2>Edit Students</h2>
          </div>
          <EditSideOne />
        </div>

        <div className="students-sideTwo">
          <div className="sideTwo-header">
            <h2>MockUni</h2>
          </div>
          <EditSideTwo />
        </div>
        
      </div>
    </div>
  )
}

export default EditStudent;