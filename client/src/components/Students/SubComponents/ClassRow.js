import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ClassRow(props) {

  const [classes, setClasses] = useState();

  useEffect(() => {
    Axios.get(`http://localhost:5000/classes/${props.id}`)
    .then(response => {
      setClasses(response.data);
    })
  }, [props.id])

  return (
    <tr className="classData-row">
      <td className="classData">Test Class Name</td>
      <td className="classData">Test Instructor</td>
      <td className="classData">Test ID</td>
    </tr>
  )
}

export default ClassRow;