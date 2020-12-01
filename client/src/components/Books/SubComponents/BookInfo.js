import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

import BookRow from './BookRow';

function BookInfo(props) {
  const [book, setBook] = useState();
  const [loading, setLoading] = useState(true);
  let history = useHistory();

  useEffect(() => {
    Axios.get(`https://mockuni-api.herokuapp.com/books/${props.selected}`)
      .then(res => {
        setBook(res.data);
        if (res.data.students != null) {
          setLoading(false);
        }
      });
  }, [props.selected]);

  function deleteBook() {
    Axios.delete(`https://mockuni-api.herokuapp.com/books/${props.selected}`)
      .then( res => {
        console.log(res.data);
        history.go(0);
      })
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
          <h2 className="header-title">Book In-depth</h2>
          <div className="book-info">
            <h3 className="book-title">{book.title}</h3>
            <h3 className="section-title">Books</h3>
          </div>
          <div className="book-students-container">
            <div className="book-table-container">
              <h3 className="book-author">Author: {book.author}</h3>
              <h3 className="section-title">Students</h3>
              {/* Student List Table */}
              <table className="s2-list-table">
                <thead className="s2-list-table-headers">
                  <tr className="s2-list-header-row">
                    <th className="s2-table-headers">First Name</th>
                    <th className="s2-table-headers">Last Name</th>
                    <th className="s2-table-headers">Student ID</th>
                  </tr>
                </thead>
                <tbody className="s2-table-body">
                  {loading ?
                    <tr>
                      <td>Students are loading</td>
                    </tr>
                    :
                    book.students.map(student => (
                      <BookRow key={student} id={student} selected="students" />
                    ))
                  }
                </tbody>
              </table>
            </div>

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
    </div>
  )

}

export default BookInfo;