import React from 'react';

import AddStudent from './AddStudent';

function EditSideTwo() {
  return (
    <div className="sideTwo-container">
      <div className="book-content-container">
        <div className="content-header-container">

        <div className="content-header-title-container">
          <h2>Add Students</h2>
        </div>
        <div className="content-header-desc">
          <h3>Here you can add students to the book</h3>
          <h3>Just click "add" and the student will be assigned a book</h3>
        </div>

        <div className="addBook-margin">

        </div>

        <AddStudent />

        </div>
      </div>
    </div>
  )
}

export default EditSideTwo;