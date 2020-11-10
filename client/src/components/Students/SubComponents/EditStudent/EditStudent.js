import React from 'react'

import './editStudent.css'

import Sidebar from '../../../Sidebar/Sidebar'

function EditStudent(props) {
  return (
    <div className="editStudent">
      <Sidebar active="students"/>
      <div className="editStudent-container">
        <h1>Edit student</h1>
      </div>
    </div>
  )
}

export default EditStudent;