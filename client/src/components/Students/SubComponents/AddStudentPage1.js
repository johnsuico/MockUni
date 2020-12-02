import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

import './addStudent.css'

function AddStudentPage1(props) {

  let history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [SID, setSID] = useState('')

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleSID(e) {
    setSID(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newStudent = {
      firstName,
      lastName,
      SID
    }

    Axios.post('http://ec2-18-144-75-188.us-west-1.compute.amazonaws.com:5000/students/', newStudent)
      .then(res => {
        console.log(res.data);
        history.go(0);
      })
      .catch(err => console.log('Error: ' + err))


  }

  return(
    <div>
      <div className="add-header-container">
        <h2 className="add-header-title">Add Student</h2>
        <div className="header-caption-container">
          <h3 className="header-caption">Fill out the following fields</h3>
          <h3 className="header-caption">You can add classes and books in edit student</h3>
        </div>

        <form className="add-student-form">
          <div className="add-student-form-field">
            <label className="student-form-label">First Name</label>
            <input type="text" className="student-form-input" onChange={handleFirstName} value={firstName} required/>
          </div>
          <div className="add-student-form-field">
            <label className="student-form-label">Last Name</label>
            <input type="text" className="student-form-input" onChange={handleLastName} value={lastName} required/>
          </div>
          <div className="add-student-form-field">
            <label className="student-form-label">Student ID</label>
            <input type="text" className="student-form-input" onChange={handleSID} value={SID} required/>
          </div>

          <div className="add-student-form-btns">
            <input type="submit" className="student-form-submit" value="Create Student" onClick={handleSubmit}/>
            <button className="student-form-cancel">Cancel</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default AddStudentPage1;