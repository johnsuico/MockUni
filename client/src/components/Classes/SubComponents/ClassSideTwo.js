import React from 'react';

import ClassInfo from './ClassInfo';
import AddClassPage1 from './AddClassPage1';

function ClassSideTwo(props) {

  return (
    <div className="sideTwo-container">
      {!props.toggleAdd ?
        <ClassInfo selected={props.selected}/>
        :
        <AddClassPage1 />
      }
    </div>
  )
}

export default ClassSideTwo;