import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function EditSideOne() {

  let { id } = useParams();
  const [classe, setClass] = useState();
  const [loading, setLoading] = useState(true);
  const [classTitle, setClassTitle] = useState('');
  const [instructor, setInstructor] = useState('');
  const [classID, setClassID] = useState('');

  const history = useHistory();

  useEffect(() => {
    Axios.get(`http://localhost:5000/classes/${id}`)
      .then(response => {
        setClass(response.data);
        setClassTitle(response.data.classTitle);
        setInstructor(response.data.instructor);
        setClassID(response.data.classID);
        setLoading(false);
      })
  }, [id])

  function handleClassTitle(e) {
    setClassTitle(e.target.value);
  }

  function handleInstructor(e) {
    setInstructor(e.target.value);
  }

  function handleClassID(e) {
    setClassID(e.target.value);
  }

  function onSubmitUpdate(e) {
    const update = {
      classTitle: classTitle,
      instructor: instructor,
      classID: classID
    }
    Axios.put(`http://localhost:5000/classes/${id}`, update)
      .then(res => console.log(res.data.status))
      .catch(err => console.log(err));

  }

  if (loading) {
    return (
      <div className="sideOne-container">
        <div className="class-content-container">
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
        <div className="class-content-container">
          
          <div className="content-header-container">
            <div className="content-header-title-container">
              <h2>Update Class: <span className="class-title-container">{classe.classTitle} [ID: {classe.classID}]</span></h2>
            </div>
            <div className="content-header-desc">
              <h3>Here you can change class information</h3>
              <h3>Save your changes by clicking on the button below</h3>
            </div>
          </div>

          <form className="edit-class-form">
            <div className="edit-class-form-field">
              <label className="edit-class-form-label">Class Title</label>
              <input type="text" className="edit-class-form-input" onChange={handleClassTitle} value={classTitle}/>
            </div>
            <div className="edit-class-form-field">
              <label className="edit-class-form-label">Instructor</label>
              <input type="text" className="edit-class-form-input" onChange={handleInstructor} value={instructor}/>
            </div>
            <div className="edit-class-form-field">
              <label className="edit-class-form-label">Class ID</label>
              <input type="text" className="edit-class-form-input" onChange={handleClassID} value={classID}/>
            </div>
            <div className="edit-class-form-submit-container">
              <input type="submit" className="edit-class-form-submit-btn" value="Update Class" onClick={onSubmitUpdate}/>
            </div>
          </form>

        </div>
      </div>
    )
  }

}

export default EditSideOne;