import React, { useState } from 'react';
import AddBookStudent from './AddBookStudent';

function EditSideTwo() {

  return (
    <div className="sideTwo-container">
      <div className="class-content-container">
        <div className="content-header-container">

          <div className="content-header-title-container">
            <h2>Add students</h2>
          </div>
          <div className="content-header-desc">
            <h3>Here you can add students to the class</h3>
            <h3>Just click "add" and the student will be enrolled in the class</h3>
          </div>

          <div className="addStudent-margin">

          </div>

          <AddBookStudent selected='students'/>

        </div>
      </div>
    </div>
  )
}

export default EditSideTwo;