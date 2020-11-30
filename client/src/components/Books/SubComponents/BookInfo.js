import React, { useState, useEffect } from 'react'
import Axios from 'axios';

import ClassRow from './ClassRow';
import { useHistory } from 'react-router-dom';

function BookInfo(props) {

  const [book, setBook] = useState();
  const [loading, setLoading] = useState(true);
  let history = useHistory();

  useEffect(() => {
    Axios.get(`http://localhost:5000/books/${props.selected}`)
      .then(response => {
        setBook(response.data)
        if (response.data != null) {
          setLoading(false);
        }
      });
  }, [props.selected]);

  function deleteBook() {
      console.log(props.selected);
    Axios.delete(`http://localhost:5000/books/${props.selected}`)
    history.go(0);
  }

  function editBook() {
    history.push(`/books/edit/${props.selected}`);
  }

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2> 
      </div>
    )
  }

  return (
    <div>
      <div className="book-indepth-container">
        <div className="header-container">
          <h2 className="header-title">Books In-depth</h2>
          <div className="book-info">
            <h3 className="book-name">{book.title} {book.author}</h3>
            <h3 className="book-id">{book.ISBN}</h3>
          </div>
        </div>
        <div className="book-classes-container">
          
          <div className="btn-container-group">
            <div className="btn-container">
              <button className="edit-btn" onClick={editBook}>Edit Book</button>
            </div>
            <div className="btn-container">
              <button className="delete-btn" onClick={deleteBook}>Delete Book</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BookInfo;