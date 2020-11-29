import React from 'react'

import './editClass.css'

import Sidebar from '../../../Sidebar/Sidebar'
import EditSideOne from './EditSideOne';
import EditSideTwo from './EditSideTwo';

function EditClass(props) {
  return (
    <div className="editClass">
      <Sidebar active="classes"/>

      <div className="classes-container">
        <div className="classes-sideOne">
          <div className="sideOne-header">
            <h2>Edit Classes</h2>
          </div>
          <EditSideOne />
        </div>

        <div className="classes-sideTwo">
          <div className="sideTwo-header">
            <h2>MockUni</h2>
          </div>
          <EditSideTwo />
        </div>
        
      </div>
    </div>
  )
}

export default EditClass;