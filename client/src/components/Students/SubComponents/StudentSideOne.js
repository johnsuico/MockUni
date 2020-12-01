import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import TableRow from './TableRow'

function StudentSideOne(props) {
  const [students, setStudents] = useState([]);
  const [selectStudent, setSelectStudent] = useState([]);
  const [addStudent, setAddStudent] = useState(true);

  useEffect(() => {
    Axios.get('https://mockuni-api.herokuapp.com/students')
      .then(response => {
          setStudents(response.data)
          setSelectStudent(response.data[0]._id)
      });
  }, [])

  function onClick(selected) {
    setSelectStudent(selected);
    props.getSelected(selected);
  }

  function toggleAdd() {
    setAddStudent(!addStudent);
    props.getToggle(addStudent);
  }

  return(
    <div className="sideOne-container">
      <div className="student-content-container">
        <div className="content-header-container">
          <div className="content-header-title-container">
            <h2>List of Students</h2>
            <button onClick={toggleAdd}>Add Student</button>
          </div>
          <div className="content-header-desc">
            <h3>Click on a student for more information</h3>
          </div>
        </div>
      </div>

      <table className="student-list-table">
        <thead>
          <tr>
            <th className="tableHeader">#</th>
            <th className="tableHeader">First Name</th>
            <th className="tableHeader">Last Name</th>
            <th className="tableHeader">Student ID</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <TableRow 
              index={index+1} 
              firstName={student.firstName} 
              lastName={student.lastName} 
              SID={student.SID} 
              ID={student._id}
              key={student._id} 
              onClickParent={onClick} 
              selected={selectStudent}/>
          ))}
        </tbody>
      </table>
    
    </div>
  )
}

export default StudentSideOne;