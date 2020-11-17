import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ClassRow(props) {

  const [classes, setClasses] = useState();
  const [books, setBooks] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.selected === 'classes') {
      Axios.get(`http://localhost:5000/classes/${props.id}`)
      .then(response => {
        setClasses(response.data)
        setLoading(false);
      })
    }

    if (props.selected === 'books') {
      Axios.get(`http://localhost:5000/books/${props.id}`)
        .then(response => {
          setBooks(response.data);
          setLoading(false);
        })
    }
  })

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
        <td className="classData">{books.title}</td>
        <td className="classData">{books.author}</td>
        <td className="classData">{books.ISBN}</td>
      </tr>
    )
  }
}

export default ClassRow;