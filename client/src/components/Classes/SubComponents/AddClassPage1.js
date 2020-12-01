import React, { useState } from 'react';
import Axios from 'axios';

import './addClass.css'

function AddClassPage1(props) {

  const [classTitle, setClassTitle] = useState('');
  const [instructor, setInstructor] = useState('');
  const [classID, setClassID] = useState('')

  function handleClassTitle(e) {
    setClassTitle(e.target.value);
  }

  function handleInstructor(e) {
    setInstructor(e.target.value);
  }

  function handleClassID(e) {
    setClassID(e.target.value);
  }

  function handleSubmit(e) {

    const newClass = {
      classTitle,
      instructor,
      classID
    }

    Axios.post('https://mockuni-api.herokuapp.com/classes', newClass)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log('Error: ' + err))


  }

  return(
    <div>
      <div className="add-header-container">
        <h2 className="add-header-title">Add Class</h2>
        <div className="header-caption-container">
          <h3 className="header-caption">Fill out the following fields</h3>
          <h3 className="header-caption">You can add students and books in edit Class</h3>
        </div>

        <form className="add-class-form">
          <div className="add-class-form-field">
            <label className="class-form-label">Class Title</label>
            <input type="text" className="class-form-input" onChange={handleClassTitle} value={classTitle} required/>
          </div>

          <div className="add-class-form-field">
            <label className="class-form-label">Instructor</label>
            <input type="text" className="class-form-input" onChange={handleInstructor} value={instructor} required/>
          </div>

          <div className="add-class-form-field">
            <label className="class-form-label">Class ID</label>
            <input type="text" className="class-form-input" onChange={handleClassID} value={classID} required/>
          </div>

          <div className="add-class-form-btns">
            <input type="submit" className="class-form-submit" value="Create Class" onClick={handleSubmit}/>
            <button className="class-form-cancel">Cancel</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default AddClassPage1;