import React from 'react';

import './editBook.css'

import Sidebar from '../../../Sidebar/Sidebar';
import EditSideOne from './EditSideOne';

function EditBook(props) {
  return(
    <div className="editBook">
      <Sidebar active="books" />

      <div className="books-container">
        <div className="books-sideOne">
          <div className="sideOne-header">
            <h2>Edit Books</h2>
          </div>
          <EditSideOne />
        </div>

        <div className="books-sideTwo">
          <div className="sideTwo-header">
            <h2>MockUni</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditBook;