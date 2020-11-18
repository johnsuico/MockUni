import React, { useState } from 'react';
import AddBookClass from './AddBookClass';

function EditSideTwo() {

  const [decision, setDecision] = useState('classes');

  function clickClasses() {
    setDecision('classes');
  }

  function clickBooks() {
    setDecision('books');
  }

  return (
    <div className="sideTwo-container">
      <div className="student-content-container">
        <div className="content-header-container">

          <div className="content-header-title-container">
            <h2>Add Classes or books</h2>
          </div>
          <div className="content-header-desc">
            <h3>Here you can add books and classes to the student</h3>
            <h3>Switch between the classes and books with the buttons below</h3>
          </div>

          <div className="add-class-book-container">
            <div className="add-tab-decision">
              <button 
                className={decision === 'classes' ? 'overview-item-active' : 'overview-item-inactive'} 
                onClick={clickClasses}>
                  Classes
              </button>
              <button 
                className={decision === 'books' ? 'overview-item-active' : 'overview-item-inactive'} 
                onClick={clickBooks}>
                  Books
              </button>
            </div>
          </div>

          <AddBookClass selected={decision} />

        </div>
      </div>
    </div>
  )
}

export default EditSideTwo;