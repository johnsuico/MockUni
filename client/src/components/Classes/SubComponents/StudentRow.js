import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function StudentRow(props) {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.selected === 'students') {
      Axios.get(`http://localhost:5000/students/${props.id}`)
      .then(response => {
        setStudents(response.data);
        if (response.data !== null) {
          setLoading(false);
        } else {
          setLoading(true);
        }
      })
    }
  }, [])

  if(loading) {
    return (
      <tr className="studentData-row">
        <td className="studentData">Loading...</td>
      </tr>
    )
  }

  if (props.selected === "students" && !loading) {
    return (
      <tr className="studentData-row">
        <td className="studentData">{students.firstName}</td>
        <td className="studentData">{students.lasName}</td>
        <td className="studentData">{students.SID}</td>
      </tr>
    )
  }
}
export default StudentRow;