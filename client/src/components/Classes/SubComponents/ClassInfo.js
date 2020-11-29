import React, { useState, useEffect } from 'react'
import Axios from 'axios';

import ClassRow from './ClassRow';
import { useHistory } from 'react-router-dom';

function ClassInfo(props) {

  const [classe, setClass] = useState();
  const [loading, setLoading] = useState(true);
  let history = useHistory();

  useEffect(() => {
    Axios.get(`http://localhost:5000/classes/${props.selected}`)
      .then(response => {
        setClass(response.data)
        if (response.data.students != null)  {
          setLoading(false);
        }
      });
  }, [props.selected]);

  function deleteClass() {
    Axios.delete(`http://localhost:5000/classes/${props.selected}`)
    history.go(0);
  }

  function editClass() {
    history.push(`/classes/edit/${props.selected}`);
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
      <div className="class-indepth-container">
        <div className="header-container">
          <h2 className="header-title">Class In-depth</h2>
          <div className="class-info">
            <h3 className="class-title">{classe.classTitle}</h3>
            <h3 className="class-id">{classe.classID}</h3>
          </div>
        </div>
        <div className="class-students-container">
          <div className="class-table-container">
            <h3 className="class-instructor">Instructor: {classe.instructor}</h3>
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
                  classe.students.map(students => (
                    <ClassRow key={students} id={students} selected="students"/>
                  ))
                }
              </tbody>
            </table>
          </div>

          <div className="btn-container-group">
            <div className="btn-container">
              <button className="edit-btn" onClick={editClass}>Edit Class</button>
            </div>
            <div className="btn-container">
              <button className="delete-btn" onClick={deleteClass}>Delete Class</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ClassInfo;