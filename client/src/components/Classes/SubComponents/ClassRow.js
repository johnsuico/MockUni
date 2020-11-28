import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ClassRow(props) {

  const [books, setBooks] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.selected === 'books') {
      Axios.get(`http://localhost:5000/books/${props.id}`)
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