import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import StudentInfo from './StudentInfo';

function StudentSideTwo(props) {

  return (
    <div className="sideTwo-container">
      <StudentInfo selected={props.selected}/>
    </div>
  )
}

export default StudentSideTwo;