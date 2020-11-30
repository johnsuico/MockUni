import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import StudentRow from "./StudentRow";

import { useHistory } from 'react-router-dom';

function BookInfo(props) {

  const [book, setBook] = useState();
  const [students, setStudents] = useState();
  const [loading, setLoading] = useState(true);
  let history = useHistory();
  var numUpdates = 0;
  var studentsToDisplay = [];


  useEffect(() => {
    
    Axios.all([ Axios.get(`http://localhost:5000/books/${props.selected}`), Axios.get(`http://localhost:5000/students/`)])
    .then(Axios.spread((response1, response2) => {
      setBook(response1.data);
      setStudents(response2.data)
    setLoading(false);
      
  }));


  }, [props.selected]);

  function getStudents() {

    var i = 0;
    var j = 0;

    var booksToCheck;

    if(numUpdates == 0) {

      studentsToDisplay = [];

    for(i = 0; i < students.length; i++) {

      booksToCheck = students[i].books;

      // Loop through each student's books and try to match it to the selected book
      for(j = 0; j < booksToCheck.length; j++) {

        if(book.title == booksToCheck[j].title && book.ISBN == booksToCheck[j].ISBN
          && book.author == booksToCheck[j].author) {

            studentsToDisplay.push(students[i]);            

            break;

         }
      }
    }

    numUpdates++;
  }
  console.log(studentsToDisplay)
    return studentsToDisplay;
  }

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
          <h2 className="header-title">Book In-depth</h2>
          <div className="book-info">
            <h3 className="book-title">{book.title}</h3>
            <h3 className="book-isbn">{book.ISBN}</h3>
          </div>
        </div>
      

        <div className="book-students-container">

        <div className="students-table-container">

            <h3 className="section-title">Students with this book</h3>
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
                {studentsToDisplay ? studentsToDisplay.map((student, index) => (
                  <StudentRow 
                    index={index+1} 
                    firstName={student.firstName}
                    lastName={student.lastName}
                    SID={student.SID}
                    key={student.SID} 
                  />
                ))

                :
                
                getStudents().map((student, index) => (
                  <StudentRow 
                    index={index+1} 
                    firstName={student.firstName}
                    lastName={student.lastName}
                    SID={student.SID}
                    key={student.SID} 
                  />
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
  )
}

export default BookInfo;