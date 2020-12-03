import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import TableList from './TableList';

function AddBookClass(props) {

  const [classes, setClasses] = useState([]);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    Axios.get(`http://ec2-18-144-75-188.us-west-1.compute.amazonaws.com:5000/classes`)
      .then(res => {
        setClasses(res.data);
        setLoading(false);
      });

    Axios.get(`http://ec2-18-144-75-188.us-west-1.compute.amazonaws.com:5000/books`)
      .then(res => {
        setBooks(res.data);
        setLoading(false);
      });

  }, []);

  if (props.selected === 'classes' && !loading) {
    return (
      <div className="add">
        <div className="add-container">
          <table className="add-table">
            <thead className="add-table-headers">
              <tr className="add-table-row">
                <th className="add-table-heading">#</th>
                <th className="add-table-heading">Class Title</th>
                <th className="add-table-heading">Instructor</th>
                <th className="add-table-heading">Class ID</th>
              </tr>
            </thead>
            {classes.map((sClass, index) => (
              <TableList key={sClass._id} index={index+1} title={sClass.classTitle} instructor={sClass.instructor} ID={sClass.classID} objID={sClass._id} selected={props.selected}/>
            ))}
          </table>
        </div>
      </div>
    )
  }
  else if (props.selected === 'books' && !loading) {
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
  } else {
    return(
      <div>
        <h1>Something else</h1>
      </div>
    )
  }
}

export default AddBookClass;