import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import TableRow from './TableRow'

function ClassSideOne(props) {
  const [classes, setClasses] = useState([]);
  const [selectClass, setSelectClass] = useState([]);
  const [addClass, setAddClass] = useState(true);

  useEffect(() => {
    Axios.get('https://mockuni-api.herokuapp.com/classes')
      .then(response => {
          setClasses(response.data)
          setSelectClass(response.data[0]._id)
      });
  }, [])

  function onClick(selected) {
    setSelectClass(selected);
    props.getSelected(selected);
  }

  function toggleAdd() {
    setAddClass(!addClass);
    props.getToggle(addClass);
  }

  return(
    <div className="sideOne-container">
      <div className="class-content-container">
        <div className="content-header-container">
          <div className="content-header-title-container">
            <h2>List of Classes</h2>
            <button onClick={toggleAdd}>Add Class</button>
          </div>
          <div className="content-header-desc">
            <h3>Click on a class for more information</h3>
          </div>
        </div>
      </div>

      <table className="class-list-table">
        <thead>
          <tr>
            <th className="tableHeader">#</th>
            <th className="tableHeader">Class</th>
            <th className="tableHeader">Instructor</th>
            <th className="tableHeader">Class ID</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classe, index) => (
            <TableRow 
              index={index+1} 
              classTitle={classe.classTitle} 
              instructor={classe.instructor}
              classID={classe.classID} 
              ID={classe._id}
              key={classe._id} 
              onClickParent={onClick} 
              selected={selectClass}/>
          ))}
        </tbody>
      </table>
    
    </div>
  )
}

export default ClassSideOne;