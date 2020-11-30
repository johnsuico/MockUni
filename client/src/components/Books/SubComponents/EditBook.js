import React from 'react'
import './editBook.css'
import EditBookPage1 from './EditBookPage1';
import Sidebar from '../../Sidebar/Sidebar'

function EditBook(props) {
  return (
    <div className="editBook">
      <Sidebar active="books"/>

<EditBookPage1 />
    </div>
  )
}

export default EditBook;