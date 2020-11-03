import React, { useState, useEffect } from 'react'
import Axios from 'axios';

import ClassRow from './ClassRow';
import Students from '../Students';

function StudentInfo(props) {

  const [student, setStudent] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(`http://localhost:5000/students/${props.selected}`)
      .then(response => {
        setStudent(response.data)
        setLoading(false);
      });
  }, [props.selected]);

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2> 
      </div>
    )
  }

  return (
    <div>
      <div className="student-indepth-container">
        <div className="header-container">
          <h2 className="header-title">Student In-depth</h2>
          <div className="student-info">
            <h3 className="student-name">{student.firstName} {student.lastName}</h3>
            <h3 className="student-id">{student.SID}</h3>
          </div>
        </div>
        <div className="student-classes-container">
          <h3 className="section-title">Classes</h3>

          <table className="class-list-table">
            <thead className="class-list-table-headers">
              <tr className="class-list-header-row">
                <th className="class-table-headers">Class Name</th>
                <th className="class-table-headers">Instructor</th>
                <th className="class-table-headers">Class ID</th>
              </tr>
            </thead>
            <tbody className="class-table-body">
              
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default StudentInfo;