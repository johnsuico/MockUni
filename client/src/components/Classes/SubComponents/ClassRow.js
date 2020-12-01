import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ClassRow(props) {

  const [students, setStudents] = useState([]);
  const [books, setBooks] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.selected === 'students') {
      Axios.get(`https://mockuni-api.herokuapp.com/students/${props.id}`)
        .then(response => {
          setStudents(response.data);
          if (response.data !== null) {
            setLoading(false);
          } else {
            setLoading(true);
          }
        })
    }

    if (props.selected === 'books') {
      Axios.get(`https://mockuni-api.herokuapp.com/books/${props.id}`)
        .then(response => {
          setBooks(response.data);
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
      <tr className="classData-row">
        <td className="classData">Loading...</td>
      </tr>
    )
  }

  if (props.selected === "students" && !loading) {
    return (
      <tr className="classData-row">
        <td className="classData">{students.firstName}</td>
        <td className="classData">{students.lastName}</td>
        <td className="classData">{students.SID}</td>
      </tr>
    )
  }

  if (props.selected === "books" && !loading) {
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