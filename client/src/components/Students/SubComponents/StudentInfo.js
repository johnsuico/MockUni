import React, { useState, useEffect } from 'react'
import Axios from 'axios';

import ClassRow from './ClassRow';
import { useHistory } from 'react-router-dom';

function StudentInfo(props) {

  const [student, setStudent] = useState();
  const [loading, setLoading] = useState(true);
  let history = useHistory();

  useEffect(() => {
    Axios.get(`https://mockuni-api.herokuapp.com/students/${props.selected}`)
      .then(response => {
        setStudent(response.data)
        if (response.data.classes != null && response.data.books != null) {
          setLoading(false);
        }
      });
  }, [props.selected]);

  function deleteStudent() {
    Axios.delete(`https://mockuni-api.herokuapp.com/students/${props.selected}`)
      .then(res => {
        console.log(res.data)
        history.go(0);      
      });
  }

  function editStudent() {
    history.push(`/students/edit/${props.selected}`);
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
      <div className="student-indepth-container">
        <div className="header-container">
          <h2 className="header-title">Student In-depth</h2>
          <div className="student-info">
            <h3 className="student-name">{student.firstName} {student.lastName}</h3>
            <h3 className="student-id">{student.SID}</h3>
          </div>
        </div>
        <div className="student-classes-container">
          <div className="class-table-container">
            <h3 className="section-title">Classes</h3>
            {/* Class List Table */}
            <table className="s2-list-table">
              <thead className="s2-list-table-headers">
                <tr className="s2-list-header-row">
                  <th className="s2-table-headers">Class Name</th>
                  <th className="s2-table-headers">Instructor</th>
                  <th className="s2-table-headers">Item ID</th>
                </tr>
              </thead>
              <tbody className="s2-table-body">
                {loading ? 
                  <tr>
                    <td>Classes are loading</td>
                  </tr>
                :
                  student.classes.map(classes => (
                    <ClassRow key={classes} id={classes} selected="classes"/>
                  ))
                }
              </tbody>
            </table>
          </div>
          
          <div className="book-table-container">
            <h3 className="section-title">Books</h3>
            {/* Book List Table */}
            <table className="s2-list-table">
              <thead className="s2-list-table-headers">
                <tr className="s2-list-header-row">
                  <th className="s2-table-headers">Book Name</th>
                  <th className="s2-table-headers">Author</th>
                  <th className="s2-table-headers">Item ID</th>
                </tr>
              </thead>
              <tbody className="s2-table-body">
                {loading ? 
                  <tr>
                    <td>Classes are loading</td>
                  </tr>
                :
                  student.books.map(books => (
                    <ClassRow key={books} id={books} selected="books"/>
                  ))
                }
              </tbody>
            </table>
          </div>

          <div className="btn-container-group">
            <div className="btn-container">
              <button className="edit-btn" onClick={editStudent}>Edit Student</button>
            </div>
            <div className="btn-container">
              <button className="delete-btn" onClick={deleteStudent}>Delete Student</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default StudentInfo;