import React from 'react';

import StudentInfo from './StudentInfo';
import AddStudentPage1 from './AddStudentPage1';

function StudentSideTwo(props) {

  return (
    <div className="sideTwo-container">
      {!props.toggleAdd ?
        <StudentInfo selected={props.selected}/>
        :
        <AddStudentPage1 />
      }
    </div>
  )
}

export default StudentSideTwo;