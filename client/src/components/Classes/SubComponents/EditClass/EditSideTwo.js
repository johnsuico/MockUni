import React, { useState } from 'react';
import AddBookStudent from './AddBookStudent';

function EditSideTwo() {

  const [decision, setDecision] = useState('students');

  function clickBooks() {
    setDecision('books');
  }

  function clickStudents() {
    setDecision('students');
  }

  return (
    <div className="sideTwo-container">
      <div className="class-content-container">
        <div className="content-header-container">

          <div className="content-header-title-container">
            <h2>Add books or students</h2>
          </div>
          <div className="content-header-desc">
            <h3>Here you can add books and students to the class</h3>
            <h3>Switch between the books and students with the buttons below</h3>
          </div>

          <div className="add-book-student-container">
            <div className="add-tab-decision">
              <button 
                className={decision === 'books' ? 'overview-item-active' : 'overview-item-inactive'} 
                onClick={clickBooks}>
                  Books
              </button>
              <button 
                className={decision === 'students' ? 'overview-item-active' : 'overview-item-inactive'} 
                onClick={clickStudents}>
                  Students
              </button>
            </div>
          </div>

          <AddBookStudent selected={decision} />

        </div>
      </div>
    </div>
  )
}

export default EditSideTwo;