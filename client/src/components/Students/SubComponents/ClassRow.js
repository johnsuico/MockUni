import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ClassRow(props) {

  const [classes, setClasses] = useState();
  const [books, setBooks] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(`http://localhost:5000/classes/${props.id}`)
      .then(response => {
        setClasses(response.data)
        setLoading(false);
    })
  }, [props.id])

  if(loading) {
    return (
      <tr className="classData-row">
        <td className="classData">Loading...</td>
      </tr>
    )
  }

  if (props.selected === "classes") {
    return (
      <tr className="classData-row">
        <td className="classData">{classes.classTitle}</td>
        <td className="classData">{classes.instructor}</td>
        <td className="classData">{classes.classID}</td>
      </tr>
    )
  }

  if (props.selected === "books") {
    return (
      <tr className="classData-row">
        <td className="classData">Book</td>
        <td className="classData">{classes.instructor}</td>
        <td className="classData">{classes.classID}</td>
      </tr>
    )
  }
}

export default ClassRow;