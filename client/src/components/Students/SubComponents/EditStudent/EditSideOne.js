import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

function EditSideOne() {

  let { id } = useParams();
  const [student, setStudent] = useState();
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [SID, setSID] = useState('');

  useEffect(() => {
    Axios.get(`http://localhost:5000/students/${id}`)
      .then(response => {
        setStudent(response.data);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setSID(response.data.SID);
        setLoading(false);
      })
  }, [id])

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleSID(e) {
    setSID(e.target.value);
  }

  function onSubmitUpdate(e) {
    const update = {
      firstName,
      lastName,
      SID
    }
    Axios.put(`http://localhost:5000/students/${id}`, update)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  if (loading) {
    return (
      <div className="sideOne-container">
        <div className="student-content-container">
          <div className="content-header-title-container">
            <h2>Loading...</h2>
          </div>
        </div>
      </div>
    )
  }

  else {
    return(
      <div className="sideOne-container">
        <div className="student-content-container">
          
          <div className="copntent-header-container">
            <div className="content-header-title-container">
              <h2>Update Student: <span className="student-name-container">{student.firstName} {student.lastName}</span></h2>
            </div>
            <div className="content-header-desc">
              <h3>Here you can change student information</h3>
              <h3>Save your changes by clicking on the button below</h3>
            </div>
          </div>

          <form className="edit-student-form">
            <div className="edit-student-form-field">
              <label className="edit-student-form-label">First Name</label>
              <input type="text" className="edit-student-form-input" onChange={handleFirstName} value={firstName}/>
            </div>
            <div className="edit-student-form-field">
              <label className="edit-student-form-label">Last Name</label>
              <input type="text" className="edit-student-form-input" onChange={handleLastName} value={lastName}/>
            </div>
            <div className="edit-student-form-field">
              <label className="edit-student-form-label">Student ID</label>
              <input type="text" className="edit-student-form-input" onChange={handleSID} value={SID}/>
            </div>
            <div className="edit-student-form-submit-container">
              <input type="submit" className="edit-student-form-submit-btn" value="Update Student" onClick={onSubmitUpdate}/>
            </div>
          </form>

        </div>
      </div>
    )
  }

}

export default EditSideOne;