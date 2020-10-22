import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import TableRow from './TableRow'

function StudentSideOne() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:5000/students')
      .then(response => setStudents(response.data));
  }, [])

  return(
    <div className="sideOne-container">
      <div className="student-content-container">
        <div className="content-header-container">
          <div className="content-header-title-container">
            <h2>List of Students</h2>
            <button>Add Student</button>
          </div>
          <div className="content-header-desc">
            <h3>Click on a student for more information</h3>
            <h3>Hover over a student and click the 'X' icon to delete a student</h3>
          </div>
        </div>
      </div>

      <table>
        <tr>
          <th className="tableHeader">#</th>
          <th className="tableHeader">First Name</th>
          <th className="tableHeader">Last Name</th>
          <th className="tableHeader">Student ID</th>
        </tr>
        {students.map((student, index) => (
          <TableRow index={index+1} firstName={student.firstName} lastName={student.lastName} SID={student.SID} />
        ))}
      </table>
    
    </div>
  )
}

export default StudentSideOne;