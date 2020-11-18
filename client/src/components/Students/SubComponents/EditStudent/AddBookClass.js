import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import TableList from './TableList';

function AddBookClass(props) {

  const [classes, setClasses] = useState([]);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (props.selected === "classes") {
      Axios.get(`http://localhost:5000/classes`)
        .then(res => {
          setClasses(res.data);
          setLoading(false);
        });
    }

    if (props.selected === "books") {
      Axios.get(`http://localhost:5000/books`)
        .then(res => {
          setBooks(res.data);
          setLoading(false);
        });
    }
  });

  if (props.selected === "classes" && !loading) {

    return (
      <div className="add">
        <div className="add-container">
          <table className="add-table">
            <tr className="add-table-row">
              <th className="add-table-heading">#</th>
              <th className="add-table-heading">Class Title</th>
              <th className="add-table-heading">Instructor</th>
              <th className="add-table-heading">Class ID</th>
            </tr>
            {classes.map((selectedClass, index) => (
              <TableList index={index+1} title={selectedClass.classTitle} instructor={selectedClass.instructor} ID={selectedClass.classID} key={selectedClass.classID} classArray={classes} selected={props.selected} objID={selectedClass._id} />
            ))}
          </table>
        </div>
      </div>
    )
  }

  if (props.selected === "books" && !loading) {
    return (
      <div className="add">
        <div className="add-container">
          <table className="add-table">
            <thead className="add-table-head">
              <tr className="add-table-row">
                <th className="add-table-heading">#</th>
                <th className="add-table-heading">Book Title</th>
                <th className="add-table-heading">Author</th>
                <th className="add-table-heading">ISBN</th>
              </tr>
            </thead>
            {books.map((selectedBooks, index) => (
              <TableList index={index+1} title={selectedBooks.title} instructor={selectedBooks.author} ID={selectedBooks.ISBN} key={selectedBooks.ISBN} bookArray={books} selected={props.selected} objID={selectedBooks._id} />
            ))}
          </table>
        </div>
      </div>
    )
  }

  else {
    return (
      <div className="add">
        <div className="add-container">
          <h2>Nothing was selected</h2>
        </div>
      </div>
    )
  }

}

export default AddBookClass;