import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

import ClassTableRow from './ClassTableRow';

function EditSideOne() {

  let { id } = useParams();
  const [student, setStudent] = useState();
  const [loading, setLoading] = useState(true);
  const [allClasses, setAllClasses] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:5000/students/${id}`)
      .then(response => {
        setStudent(response.data);
        console.log(response.data);
        setLoading(false);
      })

    Axios.get(`http://localhost:5000/classes`)
      .then(response => {
        setAllClasses(response.data);
      })
  }, [])

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
          <div className="content-header-title-container">
            <h2 className="editStudent-title">{student.firstName} {student.lastName}</h2>
          </div>
          <div className="content-header-desc">
            <h3>Here you can add classes and books to the student.</h3>
          </div>
        </div>
  
        <table className="student-list-table">
          <thead>
            <tr>
              <th className="tableHeader">Class Name</th>
              <th className="tableHeader">Class Instructor</th>
              <th className="tableHeader">Class ID</th>
            </tr>
          </thead>
          <tbody>
            {allClasses.map(classes => {
              return(
                <ClassTableRow 
                classTitle={classes.classTitle}
                classInstructor={classes.instructor}
                classID={classes.classID}
                key={classes._id}
                id={classes._id}
              />
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

}

export default EditSideOne;