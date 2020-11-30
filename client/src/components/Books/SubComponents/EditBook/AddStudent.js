import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import TableList from './TableList';

function AddStudent(props) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(`http://localhost:5000/students`)
      .then(res => {
        setStudents(res.data);
        setLoading(false);
      })
  }, [])

  if (!loading) {
    return (
      <div className="add">
        <div className="add-container">
          <table className="add-table">
            <thead className="add-table-headers">
              <tr className="add-table-row">
                <th className="add-table-heading">#</th>
                <th className="add-table-heading">First Name</th>
                <th className="add-table-heading">Last Name</th>
                <th className="add-table-heading">Student ID</th>
              </tr>
            </thead>
            {students.map((student, index) => (
              <TableList key={student._id} index={index+1} title={student.firstName} author={student.lastName} ISBN={student.SID} objID={student._id} />
            ))}
          </table>
        </div>
      </div>
    )
  } else {
    return (
      <div className="add">
        <div className="add-container">
          <h1>Loading...</h1>
        </div>
      </div>
    )
  }
}

export default AddStudent;