import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ClassRow(props) {

  const [classes, setClasses] = useState();
  const [classLoading, setClassLoading] = useState(true);

  useEffect(() => {
    Axios.get(`http://localhost:5000/classes/${props.id}`)
      .then(response => {
        setClasses(response.data)
        setClassLoading(false);
    })
  })

  if(classLoading) {
    return (
      <tr className="classData-row">
        <td className="classData">Loading...</td>
        <td className="classData">Loading...</td>
        <td className="classData">Loading...</td>
      </tr>
    )
  }

  return (
    <tr className="classData-row">
      <td className="classData">{classes.classTitle}</td>
      <td className="classData">{classes.instructor}</td>
      <td className="classData">{classes.classID}</td>
    </tr>
  )
}

export default ClassRow;