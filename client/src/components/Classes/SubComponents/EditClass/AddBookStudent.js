import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import TableList from './TableList';

function AddBookStudent(props) {

  const [students, setStudents] = useState([]);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    Axios.get(`http://localhost:5000/books`)
      .then(res => {
        setBooks(res.data);
        setLoading(false);
      });

    Axios.get(`http://localhost:5000/students`)
      .then(res => {
        setStudents(res.data);
        setLoading(false);
      });

  }, []);

  if (props.selected === 'books' && !loading) {
    return (
      <div className="add">
        <div className="add-container">
          <table className="add-table">
            <thead className="add-table-headers">
              <tr className="add-table-row">
                <th className="add-table-heading">#</th>
                <th className="add-table-heading">Book Title</th>
                <th className="add-table-heading">Author</th>
                <th className="add-table-heading">ISBN</th>
              </tr>
            </thead>
            {books.map((book, index) => (
              <TableList key={book._id} index={index+1} title={book.title} instructor={book.author} ID={book.ISBN} objID={book._id} selected={props.selected}/>
            ))}
          </table>
        </div>
      </div>
    )
  }
  else if (props.selected === 'students' && !loading) {
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
              <TableList key={student._id} index={index+1} title={student.firstName} instructor={student.lastName} ID={student.SID} objID={student._id} selected={props.selected}/>
            ))}
          </table>
        </div>
      </div>
    )
  } else {
    return(
      <div>
        <h1>Something else</h1>
      </div>
    )
  }
}

export default AddBookStudent;